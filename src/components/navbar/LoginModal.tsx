import React, { useState } from "react";
import {
  Modal,
  Fade,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import login_request from "../../hooks/auth_requests";

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login_request_ = login_request();

  const handleLogin = () => {
    const response = login_request_(username, password);
    response.then((response) => {
        if (response) {
            handleClose();
        }
    });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open} onClick={handleClose}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
          <Grid item xs={10} sm={8} md={6} lg={4} onClick={(event) => event.stopPropagation()}>
            <Grid container spacing={2} sx={{ backgroundColor: "white", padding: 2, borderRadius: 2 }}>
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Login
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default LoginModal;