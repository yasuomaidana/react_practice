import React, { useState } from "react";
import {
  Modal,
  Fade,
  Typography,
  TextField,
  Button,
  Grid,
  Badge,
  Avatar,
  IconButton,
} from "@mui/material";
import { AddAPhoto, PhotoCamera } from "@mui/icons-material";

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

  const handleRegister = () => {
    // Register logic here
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
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={10}>
      <Grid container spacing={2}>
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
      </Grid>
    </Grid>
    <Grid item xs={2}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <AddAPhoto fontSize="large" />
        }
      >
        <Avatar sx={{ width: 56, height: 56 }} />
      </Badge>
    </Grid>
  </Grid>
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