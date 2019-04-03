const mix = require('laravel-mix');

mix.js('src/js/script.js', 'dist/js')
    .sass('src/scss/bundle.scss', 'dist/css')
    .browserSync({
        proxy: 'http://localhost/Mogan-bootstrap/',
        files: [
            'dist/css/bundle.css',
            './index.html'
        ]
    });

mix.disableNotifications();