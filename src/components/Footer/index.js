import { Box, Container, Link, Typography } from "@mui/material";
import { Toolbar } from "material-ui";
import AppBar from "material-ui/AppBar";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ background: "#C4C4C4", py: 3 }}>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box component={"img"} src={"logo.png"} width="180px" />
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "14px", fontWeight: "700" }}
          >
            What are the most popular Universities in the world?
          </Typography>
          <Box>
            <Link target="_blank" href="https://www.algorismic.uz/">
              <Box
                component={"img"}
                src="https://www.algorismic.uz/images/algorismic-02.svg"
                width={"150px"}
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
