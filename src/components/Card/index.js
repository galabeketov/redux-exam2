import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fab, Link } from "@mui/material";

export default function MyCard({ data }) {
  console.log(data);
  return (
    <Card
      sx={{
        width: "100%",
        px: 1,
        py: 2,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component={"img"}
              src="domain.png"
              width={"25px"}
              sx={{ objectFit: "cover" }}
            ></Box>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
              Country: {data.country}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{ fontSize: "40px", fontWeight: "bold", py: 4 }}
          >
            {data.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component={"img"}
            src="domain.png"
            width={"25px"}
            sx={{ objectFit: "cover" }}
          ></Box>
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
            {data.domains}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
        }}
      >
        <Link
          sx={{ textDecoration: "none" }}
          target="_blank"
          href={data.web_pages}
        >
          <Fab
            variant="extended"
            color="secondary"
            sx={{ fontSize: "22px", boxShadow: "none" }}
            aria-label="add"
          >
            Go to website
          </Fab>
        </Link>
        <Fab
          variant="extended"
          color="secondary"
          sx={{ fontSize: "22px", boxShadow: "none" }}
          aria-label="add"
        >
          {data.alpha_two_code}
        </Fab>
      </CardActions>
    </Card>
  );
}
