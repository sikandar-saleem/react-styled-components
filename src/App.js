import { AnimatedReactLogo } from "./components/Animation/Logo.styles";
import Button, {
  GradientButton,
  SubmitButton,
} from "./components/Button/Button";

import "./app.css";

import logo from "./assets/icon.png";

function App() {
  return (
    <>
      <AnimatedReactLogo src={logo} />
      <br />
      <br />
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <GradientButton as="a">Button</GradientButton>
      <SubmitButton>SubmitButton</SubmitButton>
    </>
  );
}

export default App;
