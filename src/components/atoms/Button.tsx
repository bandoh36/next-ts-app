import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

export interface StyledButtonProps extends ButtonProps {
  bgColor?: "primary" | "secondary" | "white" | "disable" | string;
  textColor?: string;
  rounded?: "circle" | "rounded" | string;
  borderSize?: string;
  borderType?: "solid" | "dotted";
  borderColor?: "primary" | "disabled" | string;
  shadow?: "primary" | "gray" | string;
}

export const Button = styled(MuiButton, {
  shouldForwardProp: (props) =>
    [
      "bgColor",
      "textColor",
      "rounded",
      "borderSize",
      "borderType",
      "borderColor",
      "shadow",
    ].every((prop) => prop !== props),
})<StyledButtonProps>(
  ({
    bgColor,
    textColor,
    rounded,
    borderSize,
    borderType,
    borderColor,
    size,
    theme,
  }) => ({
    //   "&&": {
    //     ...(bgColor === "primary"
    //     ?{backGround:theme.palette.gradation.primary}),
    //   },
  })
);
