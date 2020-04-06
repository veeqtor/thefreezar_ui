import * as React from 'react';
import HomeContainer, { IHomepageProps } from 'modules/containers/HomeContainer';

const HomePage = ({ title }: IHomepageProps): React.ReactElement => <HomeContainer title={title} />;

export default HomePage;
