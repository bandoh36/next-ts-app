import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

import type { ButtonProps } from "@mui/material";

export interface StyledButtonProps extends ButtonProps {
  bgColor?: "primary" | "secondary" | "white" | "disable" | string;
  textColor?: string;
  rounded?: "circle" | "rounded" | string;
  borderSize?: string;
  borderType?: "solid" | "dotted";
  borderColor?: "primary" | "disabled" | string;
  shadow?: "primary" | "gray" | string;
}

const Button = styled(MuiButton, {
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
    size = "medium",
    textColor,
    rounded,
    shadow,
    borderSize,
    borderType,
    borderColor,
    theme,
  }) => ({
    "&&": {
      ...(bgColor === "primary"
        ? { backGround: theme.palette.gradation.primary }
        : bgColor === "secondary"
        ? { backGround: theme.palette.gradation.main }
        : bgColor === "white"
        ? { backGround: theme.palette.gradation.primary }
        : bgColor === "disable"
        ? { backGround: theme.palette.gray.sub }
        : { background: bgColor }),
      ...(size === "small"
        ? { paddingTop: "6px", paddingBottom: "7px" }
        : bgColor === "medium"
        ? { paddingTop: "13px", paddingBottom: "13px" }
        : bgColor === "large"
        ? { paddingTop: "13px", paddingBottom: "13px" }
        : null),
      color: textColor,
      ...(rounded === "circle"
        ? { borderRadius: "100vw" }
        : rounded === "rounded"
        ? { borderRadius: "5px" }
        : { borderRadius: rounded }),
      ...(shadow === "primary"
        ? {
            boxShadow: `0 16px 32px 0 ${theme.palette.shadow.main}, 0 4px 8px 0 ${theme.palette.shadow.sub}, 0 2px 4px 0 ${theme.palette.shadow.main}`,
          }
        : shadow === "gray"
        ? { boxShadow: `0 2px 4px 0 ${theme.palette.shadow.main}` }
        : shadow === "light"
        ? { boxShadow: ` 0 3px 6px 0 ${theme.palette.shadow.main}` }
        : { boxShadow: shadow }),
      border: `${borderSize} ${borderType} ${
        borderColor === "primary "
          ? theme.palette.primary.main
          : borderColor === "disable"
          ? theme.palette.gray.sub
          : borderColor
      }}`,
    },
  })
);

export default Button;
