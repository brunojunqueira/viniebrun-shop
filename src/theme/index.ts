import { extendTheme } from "@chakra-ui/react";

export const mainTheme = extendTheme({
    colors: {
        lightPink: "#F9D5EB",
        darkPink: "#FB63AC",
        babyBlue: "#4BD4FF"
        
    },
    shadows:{
        whiteShadow: "1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;"
    }
})