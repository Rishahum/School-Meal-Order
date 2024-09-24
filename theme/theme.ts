import index from "@/pages/Registration/Stepone";
import {  background, border, extendTheme, filter } from "@chakra-ui/react";

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
            100: "#8cc343",
            200:"#C6F6D5"
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
        Input:{
          baseStyle:{
            padding:"3px"
          },
          variants:{
            base:{
              // nothing
            },
            secondary:{
              borderRadius: "12px",
              bg: "white",
              border:"5px"
            },
          },
          defaultProps:{
            variant: "base",
          }
        }
      },

});

export default theme;