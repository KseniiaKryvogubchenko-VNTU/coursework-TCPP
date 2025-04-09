import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
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

type CheckoutFormProps = { handleSubmit: (userData: UserInfo) => void };

const fields = [
  { name: "firstName", label: "First name" },
  { name: "lastName", label: "Last name" },
  { name: "email", label: "Email" },
  { name: "country", label: "Country" },
  { name: "city", label: "City" },
  { name: "address", label: "Address" },
  { name: "phone", label: "Phone" },
];

type valuesType = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  address: string;
  phone: string;
};

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
    onSubmit: props.handleSubmit,
  });

  return (
    <div>
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
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
