import { Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyCard from "../../components/Card";
import Loader from "../../components/Loader";
import { GetCategoryUniversity } from "../../redux/actions/newsActions";
import Main from "../Main";

export default function University() {
  const params = useParams();

  const university = useSelector((state) => state.university.category);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    const obj = await GetCategoryUniversity(params.university);
  }, [params.university]);
  const _ = require("lodash");
  const mydata = university.success ? _.chunk(university.data, 12) : <Loader />;

  return (
    <>
      <Main />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        {university.success ? (
          <>
            <Grid container spacing={2}>
              {mydata[page - 1].map((item, index) => (
                <Grid
                  item
                  key={index}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex" }}
                >
                  <MyCard data={item} />
                </Grid>
              ))}
            </Grid>
            <Stack
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                my: 4,
                py: 2,
              }}
            >
              <Pagination
                count={mydata.length}
                variant="outlined"
                align="center"
                onChange={(e, p) => setPage(p)}
              />
            </Stack>
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
}
