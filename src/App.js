import Button, {
  GradientButton,
  SubmitButton,
} from "./components/Button/Button";

function App() {
  return (
    <>
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <GradientButton as="a">Button</GradientButton>
      <SubmitButton>SubmitButton</SubmitButton>
    </>
  );
}

export default App;
