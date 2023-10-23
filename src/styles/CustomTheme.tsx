import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    dot: React.CSSProperties;
    inter: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    dot: React.CSSProperties;
    inter: React.CSSProperties;
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
    inter: true;
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

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100vh",
          background:
            "linear-gradient(rgba(183,173,255, 0.45), rgba(255,255,255, 0))",
          m: 0,
        },
      },
    },
  },
});

CustomTheme.typography.dot = {
  color: "white",
  fontFamily: "DotGothic16, sans-serif",
  fontSize: 40,
  fontWeight: 900,
  [CustomTheme.breakpoints.up("md")]: { fontSize: 50 },
};

CustomTheme.typography.inter = {
  color: "black",
  fontFamily: "'Inter', sans-serif",
  fontSize: 30,
  fontWeight: 100,
  [CustomTheme.breakpoints.up("md")]: { fontSize: 40 },
};

export default CustomTheme;
