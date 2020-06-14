/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { size, toArray } from 'lodash';
import { IApplicationRootState } from 'types';
import UploadImageItem from 'modules/components/Dashboard/UploadImageItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface IUploadImageProps {
  imageProgress?: Record<string, any>;
}

const UploadImage = (props: IUploadImageProps): React.ReactElement => {
  const { imageProgress } = props;
  const uploadedFileAmount = size(imageProgress);
  return (
    <UploadImage.UploadWrapper>
      <UploadImage.UploadWrapperList>
        <TransitionGroup>
          {uploadedFileAmount
            ? toArray(imageProgress).map(file => (
                <CSSTransition key={file.id} classNames="transition-item" timeout={1000}>
                  <UploadImageItem file={file} existingFiles={imageProgress} />
                </CSSTransition>
              ))
            : null}
        </TransitionGroup>
      </UploadImage.UploadWrapperList>
    </UploadImage.UploadWrapper>
  );
};

UploadImage.UploadWrapper = styled.div`
  position: relative;
`;

UploadImage.UploadWrapperList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  overflow: hidden;
`;

const mapStateToProps = (state: IApplicationRootState): Pick<IUploadImageProps, 'imageProgress'> => ({
  imageProgress: state.imageUpload.imageProgress,
});

export default connect(mapStateToProps, null)(UploadImage);
