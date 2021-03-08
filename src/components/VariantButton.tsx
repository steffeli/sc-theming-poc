import styled from "styled-components";
import { colors } from "../theme/colors";
import { theme } from "../theme";

const buttonBackgroundColor = theme.variants("mode", "variant", {
  primary: {
    clinic: colors.surgical[500],
    people: colors.bruise[500],
  },
  secondary: {
    clinic: colors.white,
    people: colors.white,
  },
});

const buttonHoverBackgroundColor = theme.variants("mode", "variant", {
  primary: {
    clinic: colors.surgical[700],
    people: colors.bruise[700],
  },
  secondary: {
    clinic: colors.surgical[100],
    people: colors.bruise[100],
  },
});

const buttonBorderColor = theme.variants("mode", "variant", {
  primary: {
    clinic: "transparent",
    people: "transparent",
  },
  secondary: {
    clinic: colors.surgical[500],
    people: colors.bruise[500],
  },
});

const buttonFontColor = theme.variants("mode", "variant", {
  primary: {
    clinic: colors.white,
    people: colors.white,
  },
  secondary: {
    clinic: colors.surgical[500],
    people: colors.bruise[500],
  },
});

interface VariantButtonProps {
  variant: "primary" | "secondary";
}

const VariantButton = styled("button")<VariantButtonProps>`
  padding: 1rem 2rem;
  font-size: 1.15rem;
  background-color: ${buttonBackgroundColor};
  border: 3px solid ${buttonBorderColor};
  color: ${buttonFontColor};
  cursor: pointer;
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  &:hover {
    background-color: ${buttonHoverBackgroundColor};
  }
`;

export default VariantButton;
