import path from "path"
import { defineConfig } from "minista"

export default defineConfig({
    resolve: {
        alias: [{ find: "~/", replacement: path.resolve("src") + "/" }],
    },
})