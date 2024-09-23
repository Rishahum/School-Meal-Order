import {  extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles:{
        global:()=>({
            body:{
                bg:"transparent",
            },
        }),
    },
    colors:{
        green:{
            50: "#9ccc65",
            100: "#8cc343"
        },
        red:{
            300: "#e82c44"
        },
    },
    components: {
        Button: {
          baseStyle: {
            fontWeight: "bold",
            borderRadius: "md",
            padding: "8px 16px",
            margin: "3px",
            
          },
          variants: {
            base: {
              bg: "green.100", 
              color: "white",
              innerWidth: "30px",
              _hover: {
                bg: "green.50", 
              },
            },
            
          },
          defaultProps: {
            variant: "base", 
          },
        },
      },

});

export default theme;