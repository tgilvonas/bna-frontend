let mix = require('laravel-mix');

mix.js('assets-src/frontend-main.js', 'assets-dist')
    .sass('assets-src/frontend-main.scss', 'assets-dist');
