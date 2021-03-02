import styled from "styled-components";
import { ColorGrade, colors } from "../theme/colors";
import { theme } from "../theme";

const buttonBackgroundColor = theme("mode", {
  clinic: colors.surgical[500],
  people: colors.bruise[500],
});

const buttonHoverBackgroundColor = (props: any) =>
  theme("mode", {
    clinic: colors.surgical[props.theme.hoverGrade as ColorGrade],
    people: colors.bruise[700],
  });

const Button = styled("button")`
  padding: 1rem 2rem;
  font-size: 1.15rem;
  background-color: ${buttonBackgroundColor};
  border: none;
  color: white;
  cursor: pointer;
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  &:hover {
    background-color: ${buttonHoverBackgroundColor};
  }
`;

export default Button;
