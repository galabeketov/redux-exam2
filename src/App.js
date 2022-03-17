import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import University from "./pages/PageInfo";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    blue: {
      main: "#14668C",
    },
    secondary: {
      main: "#067DC0",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={outerTheme}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:university" element={<University />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
