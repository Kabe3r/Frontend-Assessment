import { createTheme, colors, } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: colors.orange[500],
      dark: '#ba000d',
      contrastText: '#000',
    },
    customBadge: {
      backgroundColor: '#F04438',
      color: '#ffffff'
    },
    typography: {
      subtitle: {
            fontSize: 32,
            fontWeight: 1000,
            lineHeight: 24,
      }
    }
  },
});
