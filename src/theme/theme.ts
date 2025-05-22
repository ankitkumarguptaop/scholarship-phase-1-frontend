"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const myTheme = {
  white: "#ffffff",
  black: "#000000",
  alternate: "#EEEEEE",
  backgroundBg: "#F5F5F5",
  scrollbarBg: "#F1F1F1",
  scrollbarThumbBg: "#A8A8A8",
  logoBackground: "#F8F8F8",
  borderRadius: 4,
};

const breakpoints = createTheme().breakpoints;
export const colors = {
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  primary: {
    50: "#E1F5FE",
    100: "#B3E5FC",
    200: "#81D4FA",
    300: "#4FC3F7",
    400: "#29B6F6",
    500: "#03A9F4",
    600: "#039BE5",
    700: "#0288D1",
    800: "#0277BD",
    900: "#01579B",
  },
  critical: {
    50: "#FFEBEE",
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#F44336",
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71C1C",
  },
  high: {
    50: "#FFF3E0",
    100: "#FFE0B2",
    200: "#FFCC80",
    300: "#FFB74D",
    400: "#FFA726",
    500: "#FF9800",
    600: "#FB8C00",
    700: "#F57C00",
    800: "#EF6C00",
    900: "#E65100",
  },
  medium: {
    50: "#FFFDE7",
    100: "#FFF9C4",
    200: "#FFF59D",
    300: "#FFF176",
    400: "#FFEE58",
    500: "#FFEB3B",
    600: "#FDD835",
    700: "#FBC02D",
    800: "#F9A825",
    900: "#F57F17",
  },
  success: {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6A",
    500: "#4CAF50",
    600: "#43A047",
    700: "#388E3C",
    800: "#2E7D32",
    900: "#1B5E20",
  },
  info: {
    50: "#E8F0FE",
    100: "#C4D9FD",
    200: "#9DBFFB",
    300: "#76A6F9",
    400: "#4F8DF8",
    500: "#2873F6",
    600: "#0A5CEB",
    700: "#084DC4",
    800: "#073E9D",
    900: "#052E76",
  },
};

const fontWeight = {
  bold: 700,
  semiBold: 600,
  regular: 400,
};

const theme = createTheme({
  colors: {
    medium: {
      50: colors.medium[50],
      100: colors.medium[100],
      200: colors.medium[200],
      300: colors.medium[300],
      400: colors.medium[400],
      500: colors.medium[500],
      600: colors.medium[600],
      700: colors.medium[700],
      800: colors.medium[800],
      900: colors.medium[900],
    },
  },
  general: {
    borderColor: colors.neutral[300],
    placeholderColor: colors.neutral[500],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  palette: {
    mode: "light",
    common: {
      black: myTheme.black,
      white: myTheme.white,
    },
    primary: {
      light: colors.primary[50],
      main: colors.primary[900],
      dark: colors.primary[900],
      50: colors.primary[50],
      100: colors.primary[100],
      200: colors.primary[200],
      300: colors.primary[300],
      400: colors.primary[400],
      500: colors.primary[500],
      600: colors.primary[600],
      700: colors.primary[700],
      800: colors.primary[800],
      900: colors.primary[900],
    },
    secondary: {
      light: colors.neutral[50],
      main: colors.neutral[800],
      dark: colors.neutral[900],
      50: colors.neutral[50],
      100: colors.neutral[100],
      200: colors.neutral[200],
      300: colors.neutral[300],
      400: colors.neutral[400],
      500: colors.neutral[500],
      600: colors.neutral[600],
      700: colors.neutral[700],
      800: colors.neutral[800],
      900: colors.neutral[900],
    },
    error: {
      light: colors.critical[50],
      main: colors.critical[600],
      dark: colors.critical[900],
      50: colors.critical[50],
      100: colors.critical[100],
      200: colors.critical[200],
      300: colors.critical[300],
      400: colors.critical[400],
      500: colors.critical[500],
      600: colors.critical[600],
      700: colors.critical[700],
      800: colors.critical[800],
      900: colors.critical[900],
    },
    success: {
      light: colors.success[50],
      main: colors.success[600],
      dark: colors.success[900],
      50: colors.success[50],
      100: colors.success[100],
      200: colors.success[200],
      300: colors.success[300],
      400: colors.success[400],
      500: colors.success[500],
      600: colors.success[600],
      700: colors.success[700],
      800: colors.success[800],
      900: colors.success[900],
    },
    info: {
      light: colors.info[50],
      main: colors.info[500],
      dark: colors.info[900],
      50: colors.info[50],
      100: colors.info[100],
      200: colors.info[200],
      300: colors.info[300],
      400: colors.info[400],
      500: colors.info[500],
      600: colors.info[600],
      700: colors.info[700],
      800: colors.info[800],
      900: colors.info[900],
    },
    warning: {
      light: colors.high[50],
      main: colors.high[600],
      dark: colors.high[900],
      50: colors.high[50],
      100: colors.high[100],
      200: colors.high[200],
      300: colors.high[300],
      400: colors.high[400],
      500: colors.high[500],
      600: colors.high[600],
      700: colors.high[700],
      800: colors.high[800],
      900: colors.high[900],
    },
    background: {
      paper: myTheme.white,
      default: myTheme.backgroundBg,
    },
  },
  shape: {
    borderRadius: myTheme.borderRadius,
  },
  typography: {
    fontFamily: '"Open Sans", "sans-serif" !important',
    fontWeightBold: fontWeight.bold,
    fontWeightMedium: fontWeight.semiBold,
    fontWeightLight: fontWeight.regular,
    h1: {
      fontSize: "32px",
      lineHeight: 1.25,
      letterSpacing: -0.64,
    },
    h2: {
      fontSize: "28px",
      lineHeight: 1.28,
      letterSpacing: -0.56,
    },
    h3: {
      fontSize: "25px",
      lineHeight: 1.44,
      letterSpacing: -0.5,
    },
    h4: {
      fontSize: "22px",
      lineHeight: 1.45,
    },
    h5: {
      fontSize: "20px",
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "18px",
      lineHeight: 1.33,
    },
    paragraphLg: {
      fontSize: "16px",
      lineHeight: 1.5,
    },
    paragraphMd: {
      fontSize: "14px",
      lineHeight: 1.42,
    },
    paragraphSm: {
      fontSize: "12px",
      lineHeight: 1.66,
    },
    paragraphXs: {
      fontSize: "11px",
      lineHeight: 1.45,
    },
    paragraphButton: {
      fontSize: "14px",
      lineHeight: 1.85,
    },
    paragraphTable: {
      fontSize: "13px",
      lineHeight: 1.38,
    },
    titleLg: {
      fontSize: "22px",
      lineHeight: 1.45,
    },
    titleMd: {
      fontSize: "20px",
      lineHeight: 1.4,
    },
    titleSm: {
      fontSize: "18px",
      lineHeight: 1.33,
    }
  },
  fontWeight: {
    bold: fontWeight.bold,
    semiBold: fontWeight.semiBold,
    regular: fontWeight.regular,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          overflow: "hidden",
        },
        "::-webkit-scrollbar": {
          height: "4px",
          width: "4px",
          backgroundColor: myTheme.scrollbarBg,
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: myTheme.scrollbarThumbBg,
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-track": {
          borderRadius: "10px",
        },
        ":root": {
          "--white": myTheme.white,
          "--black": myTheme.black,
          "--background": myTheme.backgroundBg,
          "--foreground": myTheme.alternate,
          "--primary": colors.primary[900],
          "--primary-light": colors.primary[50],
          "--primary-dark": colors.primary[900],
          "--primary-50": colors.primary[50],
          "--primary-100": colors.primary[100],
          "--primary-200": colors.primary[200],
          "--primary-300": colors.primary[300],
          "--primary-400": colors.primary[400],
          "--primary-500": colors.primary[500],
          "--primary-600": colors.primary[600],
          "--primary-700": colors.primary[700],
          "--primary-800": colors.primary[800],
          "--primary-900": colors.primary[900],
          "--secondary": colors.neutral[800],
          "--secondary-light": colors.neutral[50],
          "--secondary-dark": colors.neutral[900],
          "--secondary-50": colors.neutral[50],
          "--secondary-100": colors.neutral[100],
          "--secondary-200": colors.neutral[200],
          "--secondary-300": colors.neutral[300],
          "--secondary-400": colors.neutral[400],
          "--secondary-500": colors.neutral[500],
          "--secondary-600": colors.neutral[600],
          "--secondary-700": colors.neutral[700],
          "--secondary-800": colors.neutral[800],
          "--secondary-900": colors.neutral[900],
          "--error": colors.critical[600],
          "--error-light": colors.critical[50],
          "--error-dark": colors.critical[900],
          "--error-50": colors.critical[50],
          "--error-100": colors.critical[100],
          "--error-200": colors.critical[200],
          "--error-300": colors.critical[300],
          "--error-400": colors.critical[400],
          "--error-500": colors.critical[500],
          "--error-600": colors.critical[600],
          "--error-700": colors.critical[700],
          "--error-800": colors.critical[800],
          "--error-900": colors.critical[900],
          "--success": colors.success[600],
          "--success-light": colors.success[50],
          "--success-dark": colors.success[900],
          "--success-50": colors.success[50],
          "--success-100": colors.success[100],
          "--success-200": colors.success[200],
          "--success-300": colors.success[300],
          "--success-400": colors.success[400],
          "--success-500": colors.success[500],
          "--success-600": colors.success[600],
          "--success-700": colors.success[700],
          "--success-800": colors.success[800],
          "--success-900": colors.success[900],
          "--info": colors.info[500],
          "--info-light": colors.info[50],
          "--info-dark": colors.info[900],
          "--info-50": colors.info[50],
          "--info-100": colors.info[100],
          "--info-200": colors.info[200],
          "--info-300": colors.info[300],
          "--info-400": colors.info[400],
          "--info-500": colors.info[500],
          "--info-600": colors.info[600],
          "--info-700": colors.info[700],
          "--info-800": colors.info[800],
          "--info-900": colors.info[900],
          "--warning": colors.high[600],
          "--warning-light": colors.high[50],
          "--warning-dark": colors.high[900],
          "--warning-50": colors.high[50],
          "--warning-100": colors.high[100],
          "--warning-200": colors.high[200],
          "--warning-300": colors.high[300],
          "--warning-400": colors.high[400],
          "--warning-500": colors.high[500],
          "--warning-600": colors.high[600],
          "--warning-700": colors.high[700],
          "--warning-800": colors.high[800],
          "--warning-900": colors.high[900],
          "--border-color": colors.neutral[300],
          "--placeholder-color": colors.neutral[500],
          "--border-radius": myTheme.borderRadius,
          "--logo-background": myTheme.logoBackground,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "32px",
          lineHeight: 1.25,
          letterSpacing: -0.64,
        },
        h2: {
          fontSize: "28px",
          [breakpoints.down('sm')]: {
            fontSize: '20px',
          },
          lineHeight: 1.28,
          letterSpacing: -0.56,
        },
        h3: {
          fontSize: "25px",
          lineHeight: 1.44,
          letterSpacing: -0.5,
        },
        h4: {
          fontSize: "22px",
          lineHeight: 1.45,
          [breakpoints.down('sm')]: {
            fontSize: '18px',
          },
        },
        h5: {
          fontSize: "20px",
          lineHeight: 1.4,
          color: "var(--secondary)",
        },
        h6: {
          fontSize: "18px",
          lineHeight: 1.33,
          color: "var(--secondary)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          height: "36px",
          whiteSpace: "nowrap",
          "&:hover, &.MuiSelected": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "var(--secondary)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "var(--secondary-700)"
        },
      },
    },
    MuiStepButton:{
      styleOverrides:{
        root:{
          display:"flex",
          justifyContent:"center",
          padding: 4
        }
      }
    },
    MuiStep:{
      styleOverrides:{
        root:{
          display:"flex",
          justifyContent:"center"
        }
      }
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          width: "126px",
          [breakpoints.down("md")]: {
            display: "none",
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          flexDirection: "column",
          cursor: "pointer",
          fontFamily: "Open sans",
        },
        iconContainer: {
          paddingRight: 0,
        },
        label: {
          textAlign: "center",
          marginTop: "8px",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [breakpoints.up("sm")]: {
            display: "flex",
          },
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          [breakpoints.up("md")]: {
            display: "none",
          },
          backgroundColor: "#fff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
          root: {
            '.MuiSvgIcon-root': {
                fontSize: '20px'
            },
            '&.Mui-error .MuiSvgIcon-root': {
              color: 'red'
            },
          },
      },
  },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "12px",
        },
      },
      defaultProps: {
        disableInteractive: true,
        PopperProps: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -14],
              },
            },
          ],
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
