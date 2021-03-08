import styled, { ThemeProvider } from "styled-components";
import ReactJson from "react-json-view";
import Button from "./components/Button";
import VariantButton from "./components/VariantButton";
import { createTheme } from "./theme";

const ShowcaseContainer = styled("div")`
  display: grid;
  row-gap: 1rem;
  grid-template-columns: max-content;
`;

const AppContainer = styled("div")`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: max-content auto auto;
`;

const JsonContainer = styled("div")`
  overflow: auto;
  height: 100vh;
`;

const ThemingContainer = styled("div")`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: max-content max-content;
  height: fit-content;
`;

const clinicTheme = createTheme("clinic", {
  clinicSpecificProp: "red",
});

const peopleTheme = createTheme("people", {
  peopleSpecificProp: "blue",
});

function App() {
  return (
    <AppContainer>
      <ThemingContainer>
        <ThemeProvider theme={clinicTheme}>
          <ShowcaseContainer>
            <Button>Button</Button>
            <VariantButton variant="primary">VariantButton</VariantButton>
            <VariantButton variant="secondary">VariantButton</VariantButton>
          </ShowcaseContainer>
        </ThemeProvider>
        <ThemeProvider theme={peopleTheme}>
          <ShowcaseContainer>
            <Button>Button</Button>
            <VariantButton variant="primary">VariantButton</VariantButton>
            <VariantButton variant="secondary">VariantButton</VariantButton>
          </ShowcaseContainer>
        </ThemeProvider>
      </ThemingContainer>
      <JsonContainer>
        <ReactJson
          name="clinic"
          enableClipboard={false}
          src={clinicTheme}
          collapsed={1}
        />
      </JsonContainer>
      <JsonContainer>
        <ReactJson
          name="people"
          enableClipboard={false}
          src={peopleTheme}
          collapsed={1}
        />
      </JsonContainer>
    </AppContainer>
  );
}

export default App;
