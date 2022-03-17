import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Container, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  width: 100%;
  padding: 16px 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 44px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #067dc0;
    color: white;
  }

  &:focus {
    color: #fff;
    border-radius: 44px;
    outline: 2px solid #067dc0;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #067dc0;
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") navigate("/uzbekistan");
  }, []);

  console.log("location", location.pathname);

  return (
    <>
      <Container sx={{ pt: 10 }}>
        <Typography
          variant="h3"
          sx={{ py: 3, fontWeight: "700", fontSize: "70px" }}
          align="center"
        >
          Universities
        </Typography>
        <TabsUnstyled defaultValue={0}>
          <TabsList sx={{ py: 6, background: "transparent" }}>
            <Tab onClick={() => navigate("../uzbekistan")}>Uzbekistan</Tab>
            <Tab onClick={() => navigate("../turkey")}>Turkey</Tab>
            <Tab onClick={() => navigate("../kazakhstan")}>Kazakhstan</Tab>
            <Tab onClick={() => navigate("../germany")}>Germany</Tab>
          </TabsList>
        </TabsUnstyled>
      </Container>
    </>
  );
}
