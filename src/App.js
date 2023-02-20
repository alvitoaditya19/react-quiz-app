import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./styles/styles.css";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold" fontFamily="Poppins">
                Quiz App
              </Typography>
              <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
    </ThemeProvider>
  );
}

export default App;
