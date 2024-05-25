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
// import register_request from "../../hooks/auth_requests"; // Replace with your own register request hook

interface RegisterModalProps {
  open: boolean;
  handleClose: () => void;
  handleLoginOpen: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, handleClose, handleLoginOpen }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userImage, setUserImage] = useState<File | null>(null);
//   const register_request_ = register_request();

  const handleRegister = () => {
    handleClose();
    // const response = register_request_(username, email, password, name, lastName, userImage);
    // response.then((response) => {
    //   if (response) {
    //     handleClose();
    //   }
    // });
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
                  Register
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
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
            <Grid item xs={12}>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="user-image"
                    type="file"
                    onChange={(e) => setUserImage(e.target.files ? e.target.files[0] : null)}
                />
                <label htmlFor="user-image">
                    <Button variant="contained" component="span">
                        Upload User Image
                    </Button>
                </label>
            </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="text" onClick={handleLoginOpen}>
                  Already have an account? Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default RegisterModal;