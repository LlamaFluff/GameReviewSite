var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
//<script type="text/javascript" src="path-to/bower_components/crypto-js/crypto-js.js"></script>
elixir(function(mix) {
     mix.styles(['bootstrap.css', 'dropzone.css', 'bootstrap-markdown.min.css', 'lightbox.css', 'main.css', 'fonts.css'])
        .scripts(['jquery-2.1.4.min.js', 'bootstrap.js', 'jquery.easing.min.js', 'scrolling-nav.js', 'bootbox.js', 'lightbox.js', 'to-markdown.js', 'markdown.js', 'bootstrap-markdown.js', 'crypto-js/crypto-js.js', 'dropzone.js', 'modal.js', 'app.js'])
         .copy('resources/assets/fonts', 'public/build/fonts')
		 .copy('resources/assets/images', 'public/build/images')
		 .copy('resources/assets/css/list.css', 'public/css/list.css')
		 .copy('resources/assets/css/review.css', 'public/css/review.css')
		 .copy('resources/assets/css/basic.css', 'public/css/basic.css')
		 .copy('resources/assets/css/modal.css', 'public/css/modal.css')
		 .version(['/public/js/all.js', '/public/css/all.css', '/public/css/list.css', '/public/css/review.css', 'public/css/basic.css', 'public/css/modal.css']);

});
