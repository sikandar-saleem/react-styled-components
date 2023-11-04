import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#FFF")};
  }
`;

export const GradientButton = styled(Button)`
  background-image: linear-gradient(to right, #f6d365, #fda085);
  border: none;
`;

export const DarkButton = styled(Button)`
  border: none;
  color: ${(props) => props.theme.dark.color};
  background-color: ${(props) => props.theme.dark.background};

  &:hover {
    color: ${(props) => props.theme.light.text};
  }
`;

export const SubmitButton = styled(Button).attrs((props) => ({
  type: "submit",
}))`
  border: none;
  background-color: tomato;
  &:hover {
    background-color: none;
    color: black;
  }
`;
