import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({ handleRegister, setRegistrationInfo, setLogin }) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form className={classes.form} onSubmit={handleRegister}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="firstname"
          autoFocus
          onChange={({ target }) => {
            setRegistrationInfo((b) => ({ ...b, firstName: target.value }));
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="lastName"
          label="Last Name"
          id="lastName"
          autoComplete="lastname"
          onChange={({ target }) => {
            setRegistrationInfo((b) => ({ ...b, lastName: target.value }));
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={({ target }) => {
            setRegistrationInfo((b) => ({ ...b, email: target.value }));
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={({ target }) => {
            setRegistrationInfo((b) => ({ ...b, password: target.value }));
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
        <Grid container>
          <Grid item>
            <Link onClick={() => setLogin(true)} variant="body2">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
