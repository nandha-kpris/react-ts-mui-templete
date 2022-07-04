import React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  styled,
} from "@mui/material";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#181C32",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#181C32",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#181C32",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#181C32",
    },
  },
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const phoneRegExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().min(2, " Too Short!").required("Required"),
      lastName: Yup.string().min(2, " Too Short!").required("Required"),
      phoneNumber: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "not valid")
        .max(10, "not valid"),
      email: Yup.string()
        .matches(emailRegex, "Email Id is not valid")
        .required("Required"),
      password: Yup.string().max(8, "maximum 8 charactor").required("Required"),
      confirmPassword: Yup.string().when("password", {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
    }),

    onSubmit: (values: any) => {
      // alert(JSON.stringify(values, null, 2));
      console.log("login data", JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  // console.log("formik data", formik.values);
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#181C32" }}>
            <LockOpenSharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="First Name"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="Last Name"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="Phone Number"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="confirmPassword"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    name="remember"
                    sx={{
                      "&.Mui-checked ": {
                        color: "#181C32",
                      },
                    }}
                  />
                }
                label="I accept the Terms of Use & Privacy Policy"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="inherit"
                sx={{
                  mt: 3,
                  mb: 2,
                  "&.MuiButton-colorInherit": {
                    backgroundColor: "#212e73",
                    color: "white",
                  },
                  "&:hover": {
                    backgroundColor: "#181C32",
                  },
                }}
              >
                Register Now
              </Button>
            </form>
            {/* <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
            >
              Register Now
            </Button> */}
            <Grid container>
              <Grid
                item
                style={{
                  marginLeft: "80px",
                }}
              >
                <Link href="#" variant="body2" sx={{ color: "#181C32" }}>
                  <Typography onClick={() => navigate("/login")}>
                    Already have an account ? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterPage;
function setSubmitting(arg0: boolean) {
  throw new Error("Function not implemented.");
}
function handleSubmit(values: any) {
  throw new Error("Function not implemented.");
}
