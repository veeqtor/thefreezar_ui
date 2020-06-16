/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Joi from '@hapi/joi';

export const validateWithJoi = (payload: any, validationSchema: Joi.ObjectSchema | Joi.Schema): any => {
  const { error } = validationSchema.validate(payload);
  if (error) {
    return error.message;
  }
};

class ValidationSchemas {
  protected passwordRegx = /^(?=.*\d)(?=.*[A-Za-z])[A-Za-z0-9]*$/;
  protected email = Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .required()
    .label('Email')
    .normalize()
    .rule({
      message: 'Invalid Email',
    });

  protected password = Joi.string()
    .regex(this.passwordRegx)
    .rule({
      message: 'Invalid Password',
    })
    .min(8)
    .max(16)
    .label('Password');

  protected anyRequired = Joi.any()
    .empty('')
    .required();
  protected stringRequired = Joi.string()
    .empty('')
    .required();
  protected boolRequired = Joi.boolean().required();

  authentication: Record<string, any> = {
    login: {
      email: this.email,
      password: this.password.required(),
      showPassword: Joi.boolean(),
    },
    signup: {
      email: this.email,
      password: this.password,
      confirmPassword: this.password.label('Confirm Password'),
      showPassword: Joi.boolean(),
    },
    forgotpassword: {
      email: this.email,
    },

    resetPassword: {
      password: this.password,
      confirmPassword: this.password.label('Confirm Password'),
    },
  };

  authenticationOnSubmit: Joi.ObjectSchema = Joi.object({
    email: this.email,
    password: this.password,
    confirmPassword: this.password,
    showPassword: Joi.boolean(),
  });

  genericSubmit = (values: Record<string, any>, required = false): Joi.ObjectSchema => {
    const output: Record<string, any> = {};
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        required ? (output[key] = this.anyRequired) : (output[key] = Joi.any().empty(''));
        if (key === 'email') {
          output[key] = this.email;
        }
      }
    }
    return Joi.object(output);
  };

  imageUpload: Record<string, any> = {
    imageFile: this.anyRequired.messages({
      'any.empty': `No image file selected`,
      'any.required': `Image file is required`,
    }),
    imageType: this.stringRequired.messages({
      'string.empty': `"Image category" cannot be an empty field`,
      'any.required': `"Image category" is a required field`,
    }),
    isPublic: this.boolRequired,
  };

  imageUploadOnSubmit: Joi.ObjectSchema = Joi.object({
    imageFile: this.imageUpload.imageFile,
    imageType: this.imageUpload.imageType,
    isPublic: this.boolRequired,
  });
}

const validationSchemas = new ValidationSchemas();
export { validationSchemas };
