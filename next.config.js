const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withVideos = require('next-videos');

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

module.exports = withPlugins([withCSS, withFonts, withImages, withVideos], nextConfig);

