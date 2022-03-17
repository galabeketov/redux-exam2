import { Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MyCard from "../../components/Card";
import Loader from "../../components/Loader";
import {
  setbooksByCategory,
  GetCategoryUniversity,
} from "../../redux/actions/newsActions";
import Main from "../Main";

export default function University() {
  const navigate = useNavigate();
  const params = useParams();

  const university = useSelector((state) => state.university.category);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(async () => {
    const obj = await GetCategoryUniversity(params.university);
    setData(obj.data);
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
              {mydata[page].map((item, index) => (
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
                count={mydata.length - 1}
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
