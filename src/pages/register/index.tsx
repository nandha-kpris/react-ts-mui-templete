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
} from "@mui/material";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterPage() {
  const navigate = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
      firstName: Yup.string()
        .min(2, " Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, " Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      phoneNumber: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "to short")
        .max(10, "to long"),
      email: Yup.string().max(8, "maximum 8 charactor").required("Required"),
      password: Yup.string().max(8, "maximum 8 charactor").required("Required"),
      confirmPassword: Yup.string()
        .max(8, "maximum 8 charactor")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOpenSharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
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
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Last Name"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Phone Number"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
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
                control={<Checkbox value="remember" color="primary" />}
                label="I accept the Terms of Use & Privacy Policy"
              />
            </form>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Register Now
            </Button>
            <Grid container>
              <Grid
                item
                style={{
                  marginLeft: "80px",
                }}
              >
                <Link href="#" variant="body2">
                  <Typography onClick={() => navigate("/")}>
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
}

export default RegisterPage;
