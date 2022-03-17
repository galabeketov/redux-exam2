import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Fab } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ px: 4 }}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Box component={"img"} src={"logo.png"} width="180px" />
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
      <Box
        sx={{
          flexGrow: 1,
          height: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"img"}
          src="back.png"
          width={"100%"}
          height={"100%"}
          sx={{
            objectFit: "cover",
            position: "absolute",
            zIndex: -10,
            background: "rgba(10,10,10,0.3)",
          }}
        ></Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 3,
            }}
          >
            <Typography
              variant="h1"
              color={"whitesmoke"}
              sx={{
                textShadow: "0px 0 10px black",
                fontSize: "170px",
                textAlign: "left",
                fontWeight: "800",
              }}
            >
              Top University
            </Typography>
            <Typography
              variant="h1"
              color={"whitesmoke"}
              sx={{
                textShadow: "0px 0 10px black",
                fontSize: "40px",
                textAlign: "left",
                fontWeight: "700",
              }}
            >
              What are the most popular Universities in the world?
            </Typography>
            <Fab
              variant="extended"
              color="secondary"
              sx={{
                px: 7,
                py: 4.5,
                fontSize: "25px",
                background: "#001C3D",
                borderRadius: "36px",
              }}
              aria-label="add"
            >
              Go to see
            </Fab>
          </Box>
        </Container>
      </Box>
    </>
  );
}
