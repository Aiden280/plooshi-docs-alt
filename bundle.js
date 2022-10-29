import webpack from "webpack";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";

let __dirname;
if (process.platform == "win32") {
    __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname))).slice(3);
}
else {
    __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
}

webpack({
    mode: 'production',
    entry: path.join(__dirname, './rewrite/index.js'),
    output: {
        path: __dirname,
        filename: './lib/uv.bundle.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })],
    },
}, (err, i) =>
    !err ? true : console.log(err)
);
