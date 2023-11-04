import { ThemeProvider } from "styled-components";
import { AnimatedReactLogo } from "./components/Animation/Logo.styles";
import Button, {
  DarkButton,
  GradientButton,
  SubmitButton,
} from "./components/Button/Button";

import "./app.css";
import theme from "./themes/default";

import logo from "./assets/icon.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedReactLogo src={logo} />
      <br />
      <br />
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <GradientButton as="a">Button</GradientButton>
      <SubmitButton>SubmitButton</SubmitButton>
      <DarkButton>Dark Button</DarkButton>
    </ThemeProvider>
  );
}

export default App;
