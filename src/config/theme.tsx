import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
      styles: {
        global: (props: any) => ({
          body: {
            bg: 'primary.default',
          },
          '.chakra-modal__close-btn': {
            color: 'white',
          },
          html: {
            fontSize: "18px",
          }
        }),
    },
    colors: {
      primary: {
        default: "#002E39",
        ligth: "#0F3942"
      },
      secondary: {
        default: "#0093D3",
        half: "#0093d382"
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