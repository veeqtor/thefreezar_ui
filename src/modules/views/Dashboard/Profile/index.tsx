import * as React from 'react';
// import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';

// import { mq } from 'styles/_global.style';
// import { goToNextPage } from 'store/actions/navigation';

export interface IProfileProp {
  title: string;
}

const Profile = (props: IProfileProp): React.ReactElement => {
  const { title } = props;
  return (
    <>
      <SEO title={title} />
      <Profile.Layout>
        <h1>Profile Page</h1>
      </Profile.Layout>
    </>
  );
};

Profile.Layout = styled.section``;

export default Profile;
