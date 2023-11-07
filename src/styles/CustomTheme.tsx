import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    Dot1: React.CSSProperties;
    Inter1: React.CSSProperties;
    Noto1: React.CSSProperties;
    Noto2: React.CSSProperties;
    Noto3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    Dot1: React.CSSProperties;
    Inter1: React.CSSProperties;
    Noto1: React.CSSProperties;
    Noto2: React.CSSProperties;
    Noto3: React.CSSProperties;
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
    Dot1: true;
    Inter1: true;
    Noto1: true;
    Noto2: true;
    Noto3: true;
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
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(140,130,255, 0.45), rgba(255,255,255, 0))",
          backgroundAttachment: "fixed",
          m: 0,
        },
      },
    },
  },
});

CustomTheme.typography.Dot1 = {
  color: "white",
  fontFamily: "DotGothic16, sans-serif",
  fontSize: 40,
  fontWeight: 900,
  [CustomTheme.breakpoints.up("md")]: { fontSize: 50 },
};

CustomTheme.typography.Inter1 = {
  color: "black",
  fontFamily: "'Inter', sans-serif",
  fontSize: 30,
  fontWeight: 100,
  [CustomTheme.breakpoints.up("md")]: { fontSize: 50 },
};

CustomTheme.typography.Noto1 = {
  color: "black",
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: 20,
  fontWeight: 100,
  lineHeight: 2,
  [CustomTheme.breakpoints.up("md")]: { fontSize: 30 },
};

CustomTheme.typography.Noto2 = {
  color: "black",
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: 14,
  fontWeight: 100,
  lineHeight: "27px",
  [CustomTheme.breakpoints.up("md")]: { fontSize: 17 },
};

CustomTheme.typography.Noto3 = {
  color: "black",

  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: 12,
  fontWeight: 100,
  lineHeight: "25px",
  [CustomTheme.breakpoints.up("md")]: { fontSize: 15 },
};

export default CustomTheme;
