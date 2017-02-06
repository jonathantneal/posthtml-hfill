# PostHTML hfill [<img src="http://posthtml.github.io/posthtml/logo.svg" alt="PostHTML" width="90" height="90" align="right">][posthtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[PostHTML hfill] lets you use contextual headings in HTML, like the [proposed `<h>` element].

```html
<!-- before -->

<x-h>Heading</x-h>
<p>Content...</p>
<section>
  <x-h>Heading</x-h>
  <p>Content...</p>
  <section>
    <x-h>X Heading</x-h>
    <p>Content...</p>
  </section>
</section>
<section>
  <x-h>Heading</x-h>
  <p>Content...</p>
</section>

<!-- after -->

<x-h role="heading" aria-level="1">Heading</x-h>
<p>Content...</p>
<section>
  <x-h role="heading" aria-level="2">Heading</x-h>
  <p>Content...</p>
  <section>
    <x-h role="heading" aria-level="3">X Heading</x-h>
    <p>Content...</p>
  </section>
</section>
<section>
  <x-h role="heading" aria-level="2">Heading</x-h>
  <p>Content...</p>
</section>
```

The default `<x-h>` element is used to prevent stomping on the native namespace. This plugin is intended to produce contextual headings in JavaScript-free experiences, and may improve seach engine crawling. For dynamic usage, see [hfill]. For a CSS preprocessing option, see [postcss-hfill].

## Options

#### `tag`

Type: `String`  
Default: `"x-h"`

The tag used by contextual headings.

## Usage

Add [PostHTML hfill] to your build tool:

```bash
npm install posthtml-hfill --save-dev
```

#### Node

Use [PostHTML hfill] to process your HTML:

```js
require('posthtml-hfill').process(YOUR_HTML, { /* options */ });
```

#### PostHTML

Add [PostHTML] to your build tool:

```bash
npm install posthtml --save-dev
```

Use [PostHTML hfill] as a plugin:

```js
posthtml([
	require('posthtml-hfill')({ /* options */ })
]).process(YOUR_HTML, /* options */);
```

#### Gulp

Add [Gulp PostHTML] to your build tool:

```bash
npm install gulp-posthtml --save-dev
```

Use [PostHTML hfill] in your Gulpfile:

```js
var posthtml = require('gulp-posthtml');

gulp.task('html', function () {
	return gulp.src('./src/*.html').pipe(
		posthtml([
			require('posthtml-hfill')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostHTML] to your build tool:

```bash
npm install grunt-posthtml --save-dev
```

Use [PostHTML hfill] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-posthtml');

grunt.initConfig({
	posthtml: {
		options: {
			use: [
				require('posthtml-hfill')({ /* options */ })
			]
		},
		dist: {
			src: '*.html'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/posthtml-hfill
[npm-img]: https://img.shields.io/npm/v/posthtml-hfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/posthtml-hfill
[cli-img]: https://img.shields.io/travis/jonathantneal/posthtml-hfill.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/posthtml-hfill.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/posthtml/posthtml
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[postcss-hfill]: https://github.com/jonathantneal/postcss-hfill
[PostHTML hfill]: https://github.com/jonathantneal/posthtml-hfill
[PostHTML]: https://github.com/posthtml/posthtml
[Gulp PostHTML]: https://github.com/posthtml/gulp-posthtml
[Grunt PostHTML]: https://github.com/TCotton/grunt-posthtml
[hfill]: https://github.com/jonathantneal/hfill
[proposed `<h>` element]: https://github.com/w3c/html/issues/774
