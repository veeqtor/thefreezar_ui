import * as React from 'react';
import ComingSoonContainer, { IComingSoonPageProps } from 'modules/containers/ComingSoonContainer';

const ComingSoonPage = ({ title }: IComingSoonPageProps): React.ReactElement => <ComingSoonContainer title={title} />;

export default ComingSoonPage;
