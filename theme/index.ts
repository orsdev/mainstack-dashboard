import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import breakpoints from "./breakpoints";

const styles = extendTheme({
  colors: {
    ...foundations.colors,
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
      },
    },
    Heading: {
      variants: {
        h1: {
          fontSize: "clamp(3rem, 6vw, 6rem)",
          fontWeight: 700,
          fontStyle: 'normal',
        },
        h2: {
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 700
        },
        h3: {
          fontSize: "clamp(2rem, 3vw, 2.4rem)",
          fontWeight: 700
        },
      }
    }
  },
});

export const theme = {
  ...styles,
  breakpoints,
  styles: {
    global: {
      '*, *:after, *:before': {
        boxsizing: 'inherit'
      },

      html: {
        boxSizing: 'border-box',
        fontSize: '50.5%',
        fontFamily: "'Poppins', sans-serif",
      },

      body: {
        boxSizing: 'border-box',
        overflowX: 'hidden',
        fontWeight: 500,
      },

      'body *:not(h1,h2,h3,h4,h5,h6)': {
        fontSize: '1.6rem',
        fontWeight: 500,
      },
    }
  }
};
export type Theme = typeof theme;

export default theme;
