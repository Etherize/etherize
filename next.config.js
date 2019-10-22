require('dotenv').config();
// const nextRuntimeDotenv = require('next-runtime-dotenv');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
    distDir: 'build',
    webpack: config => {
        config.plugins = config.plugins || [];

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];

        return config
    }
};

module.exports = withPlugins([withCSS, withFonts, withImages], nextConfig);


// const withConfig = nextRuntimeDotenv({
//     public: [
//         'API_HOST',
//     ],
// });
//
//
// module.exports = withPlugins([
//     withConfig,
//     withCSS,
//     withFonts,
//     withImages
// ]);