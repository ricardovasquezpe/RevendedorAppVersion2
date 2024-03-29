import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: (props: any) => ({
        body: {
          bg: 'primary.default',
          color: "white"
        },
        '.chakra-modal__close-btn': {
          color: 'white',
        },
        '.chakra-modal__content': {
          borderRadius: "custom !important"
        },
        html: {
          fontSize: "18px"
        },
      }),
    },
    radii:{
      custom: "0.625rem"
    },
    colors: {
      primary: {
        default: "#002E39",
        ligth: "#0F3942",
        half: "#002e3978"
      },
      secondary: {
        default: "#0093D3",
        half: "#0093d382",
        dark: "#0075a8"
      },
      white: {
        half: "#ffffff87"
      }
    },
    fonts: {
      body: `'RobotoRegular', sans-serif`,
      robotoBold: `'RobotoBold', sans-serif`
    },
    components: {
        Drawer: {
          baseStyle: {
            dialog: {
              bg: 'primary.default',
            },
          },
          sizes: {
            xs: {
              dialog: {
                maxW: '15rem',
              },
            }
          }
        },
        DrawerCloseButton: {
          baseStyle: {
            bg: 'white',
            _hover: {
              bg: 'primary.light',
            },
          },
        },
    }
});

export default theme;