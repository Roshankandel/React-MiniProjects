import { ThemeProvider } from "styled-components";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import content from "./components/content";
import { Container } from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#FFE0E0",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};
export default App;
