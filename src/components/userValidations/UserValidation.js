import * as Yup from "yup"; // Ensure consistent naming

export let signUpFormValidations = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(25, "First name must not exceed 25 characters")
    .required("Enter your first name"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(25, "Last name must not exceed 25 characters")
    .required("Enter your last name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
