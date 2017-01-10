p5js-player
===========

An html widget implemented in javascript for playing p5js sketches.  It supports the
following features:

* Play & Stop buttons
* Multiple sketches may be placed on a single webpage or blog post
* Easy to include in blog posts, sketch appears where placed

How to use the widget
=====================

1. Upload `p5js-player.js` to your website.
1. Include the script on your webpage or blog post with code like:
```html
    <script type="text/javascript" src="path/to/p5js-player.js"></script>
```
1. Place widget on your webpage or blog post with a `div` element:
```html
    <div class="p5js-player" width="400" height="250" sketch="local/001_bouncing_points/index.html"></div>
```

The `div` tag must contain the following attributes:

* `class="p5js-player"`, this is what identifes the div element is the player widget
* `width`, the width of the sketch canvas, reserves space
* `height`, the height of the sketch canvs, reserves space
* `sketch`, the url to a `.html` file with your p5.js sketch

Your sketch .html
-----------------

The sketch `.html` file should include the p5.js and your sketch.js and any other files
you may be using.  To reduce the amount of padding, specify 0 for `margin`, `border`, and
`padding`.

For example, here's an example `.html`:

```html
<html>
<head>
    <style>
        body
        {
            margin:  0 !important;
            padding: 0 !important;
            border:  0 !important;
        }
    </style>
</head>

<body>

  <script language="javascript" type="text/javascript" src="../lib/p5.js"></script>
  <script language="javascript" type="text/javascript" src="../lib/p5.dom.js"></script>
  <script language="javascript" type="text/javascript" src="sketch.js"></script>

</body>
</html>
```

Screenshots
===========

Ready to play sketch
--------------------

![screenshot-1.png](https://github.com/weegreenblobbie/p5js-player/blob/master/screenshot-1.png?raw=true "Ready to play sketch")

Sketch playing
--------------

![screenshot-2.png](https://github.com/weegreenblobbie/p5js-player/blob/master/screenshot-2.png?raw=true "Sketch is playing")
