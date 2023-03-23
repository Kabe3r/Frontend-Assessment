import { theme } from './BreakPoints';

export const BoxBanner = {
      boxSizing: 'border-box',
      width: '100%',
      height: 330,
      marginTop: '30px',
      border: '1px solid var(--clr-line)',
      borderRadius: '8px',
      backgroundColor: 'transparent',
      [theme.breakpoints.down('md')]: {
            height: 520
      }
}

export const ToolBanner = {
      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            rowGap: '50px',
      }
}

export const TypoDiv = {
      flexGrow: 1,
      [theme.breakpoints.down('md')]: {
            marginTop: '-40px'
      }
}

export const TypoH4 = {
      fontSize: '20px',
      lineHeight: '36px',
      fontFamily: 'IBM-Plex'
}

export const TypoSpan = {
      marginLeft: '10px',
      color: 'var(--clr-typo)',
      fontSize: '14px',
      fontFamily: 'IBM-Plex'
}

export const ImgBanner = {
      margin: '24px auto 0 auto',
      display: 'block',
      borderRadius: '8px'
}

export const ImgLogo = {
      margin: '-50px 0 0 25px',
      height: '144px',
      width: '144px',
}

export const BtnLive = {
      borderRadius: '10px',
      backgroundColor: 'var(--clr-white-yellow)',
      paddingInline: '8px',
      color: 'var(--clr-orange-red)',
      fontSize: '13px',
      fontFamily: 'IBM-Plex',
      textTransform: 'capitalize'
}

export const BtnFiber = {
      color: 'var(--clr-orange)',
      height: '14px',
      marginRight: '-10px'
}

export const BtnInvite = {
      borderColor: 'var(--clr-border)',
      color: 'var(--clr-bid-card)',
      fontFamily: 'inherit',
      marginTop: '-32px',
      borderRadius: '10px',
      textTransform: 'capitalize',
      fontSize: '12px'
}


