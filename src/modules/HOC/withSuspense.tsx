/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react';
import Spinner from 'modules/components/Spinner';

export interface IWithSuspenseProps {
  page: string;
  data?: Record<string, any>;
}
const withSuspense = (args: IWithSuspenseProps): React.FC => {
  const { page, data } = args;
  return (props: Record<string, any>): React.ReactElement<Record<string, any>> => {
    const LazyComponent = React.lazy(() => import(`modules/views/${page}`));
    return (
      <React.Suspense fallback={<Spinner type="primary" />}>
        <LazyComponent {...props} {...data} />
      </React.Suspense>
    );
  };
};

export default withSuspense;
