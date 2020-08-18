const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
  proxy: '127.0.0.1:80',
  open: false
}).ts('resources/ts/app.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.pug$/,
          oneOf: [
             {
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader']
             },
             {
                use: ['raw-loader', 'pug-plain-loader']
             }
          ]
        }
      ]
    }
  })
  .version();
