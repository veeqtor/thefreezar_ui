/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import Form from 'modules/components/Form';
import Checkbox from 'modules/components/Shared/ui/Checkbox';
import styled from '@emotion/styled';
import { validationSchemas } from 'utils';
import { useDispatch } from 'react-redux';
import ImagePicker from 'modules/components/Shared/ui/ImagePicker';
import Button from 'modules/components/Shared/ui/Button';
import { setUploadFiles } from 'store/actions/dashboard/imageUpload';

const UploadImageForm = (): React.ReactElement => {
  const dispatch = useDispatch();

  const initialValues = {
    imageFile: undefined,
    imageType: '0',
    isPublic: false,
  };

  const onSubmit = (data: Record<string, any>): void => {
    dispatch(setUploadFiles({ data: data.data, clearForm: data.clearForm }));
  };

  return (
    <div>
      <h4>Upload Images</h4>
      <UploadImageForm.FormWrapper>
        <Form
          handelOnSubmit={onSubmit}
          defaultValues={initialValues}
          onSubmitValidationSchema={validationSchemas.imageUploadOnSubmit}
          onTouchValidationSchemas={validationSchemas.imageUpload}
        >
          {({ values, handleChange, handleBlur, imagePickerlabelText, handleClearFormSelections }): React.ReactNode => {
            return (
              <>
                <p>Select an Image Category</p>
                <UploadImageForm.RightFormFooter>
                  <Checkbox
                    name="imageType"
                    checked={values.imageType === '0'}
                    value="0"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label="Sample Image"
                    type="radio"
                  />
                  <Checkbox
                    name="imageType"
                    checked={values.imageType === '1'}
                    value="1"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label="User Image"
                    type="radio"
                  />
                </UploadImageForm.RightFormFooter>

                <Checkbox
                  name="isPublic"
                  checked={values.isPublic}
                  value={values.isPublic}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Make Public"
                />
                <ImagePicker
                  value={values.files}
                  name="imageFile"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  multiple
                  label={imagePickerlabelText}
                />
                <UploadImageForm.RightFormFooter>
                  <Button
                    title="Reset fields"
                    handleOnclick={handleClearFormSelections}
                    type="reset"
                    buttonType="block"
                    buttonStyle="outline"
                  />
                  <Button title="Upload " type="submit" buttonType="block" buttonStyle="primary" disabled={false} />
                </UploadImageForm.RightFormFooter>
              </>
            );
          }}
        </Form>
      </UploadImageForm.FormWrapper>
    </div>
  );
};

UploadImageForm.RightFormFooter = styled.div`
  display: flex;
  justify-content: space-between;

  > button:first-of-type {
    margin-right: 1em;
  }
`;

UploadImageForm.FormWrapper = styled.div`
  padding-bottom: 1em;
`;

export default UploadImageForm;