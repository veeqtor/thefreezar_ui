/* eslint-disable @typescript-eslint/no-explicit-any */

import { imageUploadTypes } from 'store/actions/dashboard/imageUpload';
import { ContainerState, ContainerActions } from 'store/actions/dashboard/imageUpload/types';
import { isEmpty } from 'lodash';

const initialState: ContainerState = {
  imageProgress: {},
  status: {
    hasUploaded: false,
    isUploading: false,
    uploadFailed: false,
  },
};

const modifyFiles = (existingFiles: any, payload: any): Record<string, any> => {
  const { imageFile, imageType, isPublic } = payload;
  let fileToUpload = {};
  const size = Object.keys(existingFiles).length;
  for (let i = 0; i < imageFile.length; i++) {
    const id = size + i + 1;
    fileToUpload = {
      ...fileToUpload,
      [id]: {
        id,
        file: imageFile[i],
        progress: 0,
        failed: false,
        completed: false,
        imageType,
        isPublic,
      },
    };
  }
  return fileToUpload;
};

const removeUploadedImages = (payload: Record<string, any>): Record<string, any> => {
  const files: Record<string, any> = {};
  const updatedFiles: Record<string, any> = {};
  const { existingFiles, file } = payload;

  for (const key in existingFiles) {
    if (existingFiles.hasOwnProperty(key)) {
      const elm = existingFiles[key];
      if (!elm.completed) {
        files[key] = elm;
      }
    }
  }

  if (!isEmpty(file)) {
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        const elm = files[key];
        if (file.id !== elm.id) {
          updatedFiles[key] = elm;
        }
      }
    }
    return updatedFiles;
  }

  return files;
};

export default function imageUploadReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case imageUploadTypes.IMAGE_UPLOAD_SET_UPLOAD_FILES:
      return {
        ...state,
        imageProgress: {
          ...(state.imageProgress as {}),
          ...(modifyFiles(state.imageProgress, action.payload.data) as {}),
        },

        status: {
          ...state.status,
          isUploading: true,
        },
      };

    case imageUploadTypes.IMAGE_UPLOAD_SET_UPLOAD_PROGRESS:
      return {
        ...state,
        imageProgress: {
          ...state.imageProgress,
          [action.payload.id]: {
            ...state.imageProgress[action.payload.id],
            progress: action.payload.progress,
          },
        },
        status: {
          ...state.status,
          isUploading: true,
        },
      };

    case imageUploadTypes.IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        imageProgress: {
          ...state.imageProgress,
          [action.payload.id]: {
            ...state.imageProgress[action.payload.id],
            completed: true,
            failed: false,
          },
        },
        status: {
          ...state.status,
          isUploading: false,
          hasUploaded: true,
        },
      };
    case imageUploadTypes.IMAGE_UPLOAD_REMOVE:
      return {
        ...state,
        imageProgress: {
          ...removeUploadedImages(action.payload),
        },
        status: {
          ...state.status,
          isUploading: false,
          hasUploaded: true,
        },
      };

    case imageUploadTypes.IMAGE_UOLOAD_FAILURE:
      return {
        ...state,
        imageProgress: {
          ...state.imageProgress,
          [action.payload.id]: {
            ...state.imageProgress[action.payload.id],
            completed: false,
            progress: 0,
            failed: true,
            err: action.payload.err && JSON.parse(action.payload.err),
          },
        },
        status: {
          ...state.status,
          isUploading: false,
          hasUploaded: false,
          uploadFailed: true,
        },
      };

    case imageUploadTypes.IMAGE_UPLOAD_RETRY:
      return {
        ...state,
      };

    default:
      return state;
  }
}
