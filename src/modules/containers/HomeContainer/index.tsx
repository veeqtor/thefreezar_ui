import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SEO from 'modules/components/SEO';
import { goToNextPage, retrieveLastPageState } from 'store/actions/navigation';
import { IApplicationRootState } from 'types';

export interface IHomepageProps {
  title: string;
}

const HomeContainer = ({ title }: IHomepageProps): React.ReactElement => {
  const [click, toggleClick] = React.useState(false);
  const dispatch = useDispatch();
  const currentLocation = useSelector((state: IApplicationRootState) => state.router.action);
  React.useEffect((): void => {
    if (click) {
      dispatch(retrieveLastPageState());
      dispatch(goToNextPage({ nextPageRoute: '/coming-soon' }));
    }
  });

  return (
    <div>
      <SEO title={title} />
      <h1>Welcome Home!! {title}</h1>
      <button onClick={(): void => toggleClick(!click)}>Click me</button>
      <p>{currentLocation}</p>
    </div>
  );
};

export default HomeContainer;
