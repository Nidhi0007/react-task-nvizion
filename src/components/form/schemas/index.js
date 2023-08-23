import * as yup from "yup";
export const roleSchema = yup.object().shape({
  roleLabel: yup.string().required("Required"),
  roleKey: yup.string().required("Required"),
});

export const userSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  username: yup.string().required("Required"),
  mobile: yup
    .string("must be a number")
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});
