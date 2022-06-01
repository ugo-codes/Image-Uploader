/**
 *
 * @param {String} mode specifies the theme to be desplayed either 'light' or 'dark'
 * @returns {Object} an object containing the theme to be rendered by the application
 */
export const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'light'
        ? {
            main: '#ffffff',
          }
        : {
            main: '#ffffff',
          }),
    },

    secondary: {
      ...(mode === 'dark'
        ? {
            main: '#ffffff',
          }
        : {
            main: '#ffffff',
          }),
    },

    success: {
      ...(mode === 'dark'
        ? {
            main: 'green',
          }
        : {
            main: '#283',
          }),
    },

    background: {
      ...(mode === 'light'
        ? {
            paper: '#ffffff',
            background: '#2F80ED',
          }
        : {
            paper: '#ffffff',
          }),
    },
  },

  components: {
    ...paper,
    ...typography,
    ...button,
    ...linearProgress,
    ...textFiled,
  },
});

// The style of Paper component at the center of the page
const paper = {
  MuiPaper: {
    defaultProps: {},
    variants: [
      {
        // Styles the paper with an className = centered
        // Centers the div at the middle of the web page
        props: { className: 'centered' },
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          //   backgroundColor: 'red',
        },
      },
      {
        // Styles the paper with the id = firstPaper
        props: { id: 'firstPaper' },
        style: {
          width: '25rem',
          height: '30rem',
          textAlign: 'center',
          padding: '30px',
        },
      },

      {
        props: { id: 'linearProgressDiv' },
        style: {
          width: '400px',
          height: '144px',
          padding: '0 10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        },
      },
    ],
  },
};

// Styles all the typography available in the application
const typography = {
  MuiTypography: {
    defaultProps: {},
    variants: [
      {
        props: { className: 'text' },
        style: {
          fontFamily: "'Poppins', 'sans-serif'",
          fontWeight: '500',
          fontStyle: 'normal',
          color: '#4F4F4F',
        },
      },

      {
        // Specifically styles the typography with a variant of subtitle1
        props: { variant: 'subtitle1' },
        style: {
          fontSize: '18px',
          color: '#000',
        },
      },
      {
        // Specifically styles the typography with a variant of body1
        props: { variant: 'body1' },
        style: {
          fontSize: '10px',
          marginTop: '0.6rem',
        },
      },
    ],
  },
};

// Styles all the button on the web page
const button = {
  MuiButton: {
    defaultProps: {
      sx: {},
    },
    variants: [
      {
        props: { className: 'button' },
        style: {
          backgroundColor: '#2F80ED',
          '&:hover': { backgroundColor: '#2F80ED' },
        },
      },
      {
        props: { id: 'upload' },
        style: {
          marginTop: '30px',
        },
      },
    ],
  },
};

// Styles for the linear progress bar
const linearProgress = {
  MuiLinearProgress: {
    defaultprops: {},
    variants: [
      {
        props: { className: 'linearProgress' },
        style: {
          backgroundColor: '#2F80ED',
          height: '5px',
          width: '100%',
          bottom: 0,
          marginBottom: '20px',
        },
      },
    ],
  },
};

// Styles for the text Field in the app
const textFiled = {
  MuiTextField: {
    defaultProps: {},
    variants: [
      {
        props: { className: 'textField' },
        style: {
          backgroundColor: '#E0E0E0',
        },
      },
    ],
  },
};
