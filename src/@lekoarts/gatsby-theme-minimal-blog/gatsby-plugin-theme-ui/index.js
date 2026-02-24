import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
    fonts: {
        body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
        heading: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    },
    colors: {
        primary: "#6B46C1", // A rich purple
        toggleIcon: "#6B46C1",
        modes: {
            dark: {
                primary: "#9F7AEA", // Lighter purple for dark mode
                toggleIcon: "#9F7AEA",
            },
        },
    },
})

export default theme
