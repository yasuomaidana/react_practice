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
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import { AddAPhoto, Cancel } from "@mui/icons-material";

interface RegisterModalProps {
  open: boolean;
  handleClose: () => void;
  handleLoginOpen: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  handleClose,
  handleLoginOpen,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userImage, setUserImage] = useState<File | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRegister = () => {
    // Register logic here
  };

  const ProfilePicture = () => (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        userImage ? (
          <IconButton onClick={() => setUserImage(null)}>
            <Cancel
              fontSize="large"
              sx={{
                color: "error.secondary",
                "&:hover": {
                  color: "error.dark",
                },
              }}
            />
          </IconButton>
        ) : (
          <IconButton component="label">
            <input
              accept="image/*"
              type="file"
              hidden
              onChange={(e) =>
                setUserImage(e.target.files ? e.target.files[0] : null)
              }
            />
            <AddAPhoto
              fontSize="large"
              sx={{
                color: "primary.secondary",
                "&:hover": {
                  color: "primary.dark",
                },
              }}
            />
          </IconButton>
        )
      }
    >
      {userImage ? (
        <Avatar
          src={URL.createObjectURL(userImage)}
          sx={{ width: 56, height: 56 }}
        />
      ) : (
        <Avatar sx={{ width: 56, height: 56 }} />
      )}
    </Badge>
  );

  const UserName = () => (
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
  );

  const Auth = () => (
    <Grid container spacing={2}>
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
    </Grid>
  );

  const smartphone_order = () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" m={2}>
          <ProfilePicture />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <UserName />
      </Grid>
    </Grid>
  );

  const normal_order = () => (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={10}>
        <UserName />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ProfilePicture />
      </Grid>
    </Grid>
  );

  const handleModalClose = () => {
    setUserImage(null);
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleModalClose}
      closeAfterTransition
    >
      <Fade in={open} onClick={handleModalClose}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={10}
            sm={8}
            md={6}
            lg={4}
            onClick={(event) => event.stopPropagation()}
          >
            <Grid
              container
              spacing={2}
              sx={{ backgroundColor: "white", padding: 2, borderRadius: 2 }}
            >
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Register
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {isSmallScreen ? smartphone_order() : normal_order()}
              </Grid>
              <Grid item xs={12}>
                <Auth />
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
