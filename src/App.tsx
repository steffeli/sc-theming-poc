import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import { createTheme, Theme } from "./theme";

const theme: Theme = createTheme("clinic", {
  buttonBorderRadius: "3rem",
  hoverGrade: 800,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

export default App;
