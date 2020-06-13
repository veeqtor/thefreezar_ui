import { createAction } from 'typesafe-actions';
import { OverviewTypes } from 'store/actions/dashboard/overview/overview.constants';
import { Payload } from 'types';

const setUploadFiles = createAction(OverviewTypes.IMAGE_UPLOAD_SET_UPLOAD_FILES)<FileList | null>();
const setUploadProgress = createAction(OverviewTypes.IMAGE_UPLOAD_SET_UPLOAD_PROGRESS)<{
  id: string;
  progress: number;
}>();
const uploadImageSuccess = createAction(OverviewTypes.IMAGE_UPLOAD_SUCCESS)<{ id: string }>();
const uploadImageFailure = createAction(OverviewTypes.IMAGE_UOLOAD_FAILURE)<{ id: string }>();

export { OverviewTypes, setUploadFiles, setUploadProgress, uploadImageFailure, uploadImageSuccess };
