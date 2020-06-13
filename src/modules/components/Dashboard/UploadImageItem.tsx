/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import Icon from 'modules/components/Shared/ui/Icon';
import { retryFailedUpload, removeUploaded } from 'store/actions/dashboard/imageUpload';
import { useDispatch } from 'react-redux';

interface IUploadImageItemProps {
  file: Record<string, any>;
  existingFiles: Record<string, any> | undefined;
}
const UploadImageItem = (props: IUploadImageItemProps): React.ReactElement => {
  const { file, existingFiles } = props;
  const dispatch = useDispatch();
  const handleClose = (): void => {
    dispatch(removeUploaded({ existingFiles, file }));
  };
  const handleRetry = (): void => {
    dispatch(retryFailedUpload({ id: file.id }));
  };
  return (
    <UploadImageItem.UploadWrapperListItem>
      {file.failed && (
        <UploadImageItem.RetryWrapper>
          <UploadImageItem.ErrorWrapper>
            <span>{file.err ? file.err.errors : 'Unable to upload image'}</span>
          </UploadImageItem.ErrorWrapper>
          <UploadImageItem.IconWrapper>
            <Icon iconSize="md" iconType={`ios-refresh-circle`} handleClick={handleRetry} />
            <Icon iconSize="md" iconType={`ios-close-circle`} handleClick={handleClose} />
          </UploadImageItem.IconWrapper>
        </UploadImageItem.RetryWrapper>
      )}

      <UploadImageItem.UploadProgressWrapper>
        <UploadImageItem.UploadProgressBar progress={file.progress} />
      </UploadImageItem.UploadProgressWrapper>
      <UploadImageItem.UploadLabelWrapper>
        <span>{file.file.name}</span>
        <span>{file.progress}%</span>
      </UploadImageItem.UploadLabelWrapper>
    </UploadImageItem.UploadWrapperListItem>
  );
};

UploadImageItem.UploadWrapperListItem = styled.li`
  width: 100%;
  background: ${colors.DARKER_GRAY};
  padding: 0.5em;
  border-radius: 5px;
  border-bottom: 1px solid ${colors.BLACK};
`;
UploadImageItem.UploadProgressWrapper = styled.div`
  width: 100%;
  margin: 1em 0;
`;
UploadImageItem.ErrorWrapper = styled.div`
  width: 100%;

  span {
    font-size: medium;
    color: ${colors.ERROR};
  }
`;

UploadImageItem.RetryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

UploadImageItem.IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  i:first-of-type {
    padding-right: 0.4125em;
  }
`;

UploadImageItem.UploadProgressBar = styled.div<{ progress: string }>`
  width: ${({ progress }): string => progress}%;
  height: 0.4125em;
  background: ${colors.PRIMARY};
  border-radius: 3px;
`;
UploadImageItem.UploadLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;

  span {
    font-family: Futura;
    font-size: 0.8em;
  }
`;

export default UploadImageItem;
