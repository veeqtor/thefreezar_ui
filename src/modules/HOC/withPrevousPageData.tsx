import * as React from 'react';
import { connect } from 'react-redux';
import { retrieveLastPageState } from 'store/actions/navigation';

interface IWrapperProps {
  children: React.ReactNode;
  previousPageData: () => void;
}

const Wrapper = (props: IWrapperProps): React.ReactElement => {
  const { children, previousPageData } = props;
  React.useEffect(() => {
    previousPageData();
  }, []);
  return <div>{children}</div>;
};

const mapDispatchToProps = (dispatch: Function): Pick<IWrapperProps, 'previousPageData'> => ({
  previousPageData: (): void => dispatch(retrieveLastPageState()),
});

export default connect(null, mapDispatchToProps)(Wrapper);
