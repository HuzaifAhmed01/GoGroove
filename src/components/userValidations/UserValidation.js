import * as Yup from "yup"; // Ensure consistent naming

export let signUpFormValidations = Yup.object({
  firstName: Yup.string()
    .min(3, " At least 3 characters")
    .required("Enter your first name"),
  lastName: Yup.string()
    .min(2, "At least 3 characters")
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
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number")
    .required("Please enter your phone number"),

  acceptTerms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export let userLoginFormValidation = Yup.object({
  email: Yup.string()
    .email("please enter valid email")
    .required("please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("please enter your password"),
});
