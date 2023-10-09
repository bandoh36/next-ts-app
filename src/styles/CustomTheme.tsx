import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    dot: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    dot: React.CSSProperties;
  }

  interface BreakpointOverrides {
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    dot: true;
  }
}

const CustomTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 1040,
      xl: 2000,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#0288d1",
      light: "#ffa2a3",
      dark: "#a34449",
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
});

CustomTheme.typography.dot = {
  color: "black",
  fontFamily: "DotGothic16, sans-serif",
  fontSize: 30,
  fontWeight: "bold",
  [CustomTheme.breakpoints.up("md")]: { fontSize: 40 },
};

export default CustomTheme;
