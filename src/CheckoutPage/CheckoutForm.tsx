import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
});

export type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  address: string;
  phone: string;
};

type CheckoutFormProps = { onSubmit: (userData: UserInfo) => void };

const fields = [
  { name: "firstName", label: "First name" },
  { name: "lastName", label: "Last name" },
  { name: "email", label: "Email" },
  { name: "country", label: "Country" },
  { name: "city", label: "City" },
  { name: "address", label: "Address" },
  { name: "phone", label: "Phone" },
];

export const CheckoutForm = (props: CheckoutFormProps) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      city: "",
      address: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: props.onSubmit,
  });

  return (
    <div>
      <h3>Please fill your data:</h3>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {fields.map((field) => (
            <TextField
              fullWidth
              id={field.name}
              name={field.name}
              label={field.label}
              // @ts-ignore
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                // @ts-ignore
                formik.touched[field.name] && Boolean(formik.errors[field.name])
              }
              helperText={
                // @ts-ignore
                formik.touched[field.name] && formik.errors[field.name]
              }
              style={{ width: "50%" }}
              variant="filled"
            />
          ))}
        </div>

        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={{
            color: "white",
            padding: "10px 30px",
            margin: "20px 400px",
          }}
          // onClick={formik.submitForm}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
