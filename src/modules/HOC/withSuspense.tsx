/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react';
import Spinner from 'modules/components/Shared/ui/Spinner';
// import Wrapper from 'modules/HOC/withPrevousPageData';

export interface IWithSuspenseProps {
  page: string;
  data?: Record<string, any>;
  transparentLoader?: boolean;
  enableSpinner?: boolean;
}
const withSuspense = (args: IWithSuspenseProps): React.FC => {
  const { page, data, transparentLoader = false, enableSpinner = true } = args;
  return (props: Record<string, any>): React.ReactElement<Record<string, any>> => {
    const LazyComponent = React.lazy(() => import(`modules/views/${page}`));
    return (
      <React.Suspense fallback={enableSpinner && <Spinner type="primary" isTransparent={transparentLoader} />}>
        {/* <Wrapper> */}
        <LazyComponent {...props} {...data} />
        {/* </Wrapper> */}
      </React.Suspense>
    );
  };
};

export default withSuspense;
