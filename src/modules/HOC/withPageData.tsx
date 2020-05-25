/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import Spinner from 'modules/components/Shared/ui/Spinner';
import ErrorComponent from 'modules/components/Shared/ui/404Error';

const withRetirevePageData = (WrappedComponent: any, retrieveAction: any | any[]) => (
  props: any,
): React.ReactElement => {
  const dispatch = useDispatch();
  const {
    pageData: { status },
  } = props;
  React.useEffect(() => {
    dispatch(retrieveAction());
  }, []);

  switch (true) {
    case status.isRetrieving:
      return <Spinner type="primary" />;
    case status.failed:
      return <ErrorComponent />;
    case status.isRetrieved:
      return <WrappedComponent {...props} />;
    default:
      return <Spinner type="primary" />;
  }
};

export default withRetirevePageData;
