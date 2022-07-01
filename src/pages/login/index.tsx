// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { setLocalStorageItem } from "../../services/localStorage";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

// export default function SignIn() {
//   let navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//     setLocalStorageItem("authToken", "test").then(() => {
//       navigate("/");
//     });
//   };

//   const handleRegister = () => {
//     navigate("/pages/register");
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2" onClick={handleRegister}>
//                 Don't have an account? Sign Up
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Copyright sx={{ mt: 8, mb: 4 }} />
//     </Container>
//   );
// }
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
// import { useFormik } from "formik";
// import * as Yup from "yup";

import { setLocalStorageItem } from "../../services/localStorage";

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

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
interface UserData {
  email: string;
  password: string;
  prevState: null;
}

export default function SignIn() {
  let navigate = useNavigate();
  // const emailRegex = RegExp(
  //   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // );
  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object().shape({
  //     email: Yup.string()
  //       .required("Required")
  //       .matches(emailRegex, "Email is not valid"),
  //     password: Yup.string().max(8, "maximum 8 charactor").required("Required"),
  //   }),
  //   onSubmit :
  // });
  // const [username, setUserName] = useState<string | undefined>();
  // const [password, setPassword] = useState<string | undefined>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("email") || !data.get("password")) {
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setLocalStorageItem("authToken", "test").then(() => {
      navigate("/");
    });
  };
  const handleRegister = () => {
    navigate("/pages/register");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#181C32" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, color: "#181C32" }}
        >
          <CssTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // onChange={(e) => setUserName(e.target.value)}
          />
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              "& .MuiInputLabel-root": { color: "#181C32" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#181C32" },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#181C32",
                },
              },
            }}
            // onChange={(e) => setUserName(e.target.value)}
          /> */}
          <CssTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                // color="primary"
                sx={{
                  "&.Mui-checked ": {
                    color: "#181C32",
                  },
                }}
              />
            }
            label="Remember me"
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body1" sx={{ color: "#181C32" }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body1"
                sx={{ color: "#181C32" }}
                onClick={handleRegister}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
