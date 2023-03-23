import { theme } from './BreakPoints';

export const AppHeader = {
      padding: '10px 0',
      position: 'static',
      boxShadow: 0
}

export const TypoH4 = {
      fontWeight: 600,
      fontSize: '30px',
      fontFamily: 'IBM-Plex',
      [theme.breakpoints.down('md')]: {
            fontSize: '25px'
      }
}

export const TypoPara = {
      fontSize: '16px',
      [theme.breakpoints.down('md')]: {
            fontSize: '14px'
      }
}
