import { createTheme } from "@mui/material/styles";
import typography from "./Typography";
import { shadows } from "./Shadows";

const baselightTheme  = createTheme({
  direction: 'ltr',
  palette: {
    primary: {
      main: '#007BFF', // Bright blue
      light: '#D0E7FF', // Light sky blue
      dark: '#0056B3', // Deep navy blue
    },
    secondary: {
      main: '#28A745', // Vibrant green
      light: '#DFF7E1', // Light mint green
      dark: '#1C7C31', // Deep forest green
    },
    success: {
      main: '#28A745', // Vibrant green
      light: '#E8F5E9', // Light mint
      dark: '#1C7C31', // Forest green
      contrastText: '#ffffff',
    },
    info: {
      main: '#17A2B8', // Aqua blue
      light: '#D1ECF1', // Sky blue
      dark: '#117A8B', // Deep teal
      contrastText: '#ffffff',
    },
    error: {
      main: '#E63946', // Bold red
      light: '#FADBD8', // Blush
      dark: '#C71F33', // Crimson
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFC107', // Amber
      light: '#FFECB5', // Light yellow
      dark: '#FFB300', // Deep amber
      contrastText: '#ffffff',
    },
    purple: {
      A50: '#F3E5F5', // Lilac
      A100: '#9C27B0', // Orchid
      A200: '#6A1B9A', // Plum
    },
    grey: {
      100: '#F8F9FA',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#ADB5BD',
      500: '#6C757D',
      600: '#495057',
    },
    text: {
      primary: '#212529', // Almost black
      secondary: '#6C757D', // Greyish
    },
    action: {
      disabledBackground: 'rgba(0,0,0,0.12)',
      hoverOpacity: 0.1,
      hover: '#F1F3F5',
    },
    divider: '#E0E0E0',
  },
  typography,
  shadows
});

export { baselightTheme  };
