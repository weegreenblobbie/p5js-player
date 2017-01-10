console.log("BEGIN p5js-player.js");

//-----------------------------------------------------------------------------
// append css to style p5js widgets

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = `
    div.p5js-player
    {
        border: 1px solid #ec245e;
    }

    div.p5js-player-toolbar
    {
        padding: 10px;
        border-bottom: 1px solid #ec2453;

        display: flex;
        flex-direction: row;
        justify-content: flex-start | space-between;
    }

    p.p5js-player
    {
        margin-left: 10px;
    }

    button.p5js-player
    {
        display: flex;
        flex-direction: row;

        background: inherit;
        border: 1px solid #ec2453;
        border-radius: 2px;
        color: #ec2453;
        cursor: pointer;
        height: 25px;
        padding: 5px;
        stroke: #ec2453;
        fill: #ec2453;
        box-shadow: none;
    }

    button.p5js-player:hover
    {
        color: #30b8e6;
        border-color: #30b8e6;
        stroke: #30b8e6;
        fill: #30b8e6;
    }

    button.p5js-player:focus
    {
        outline: #ec2453;
    }

    span.p5js-player-button-text
    {
        font-size = 14px;
        font-family = sans-serif;
        font-weight = 400;
    }

    a.p5js-player-logo
    {
        stroke: #ec2453;
        fill: #ec2453;
        box-shadow: none;
    }

    a.p5js-player-logo:hover
    {
        stroke: #30b8e6;
        fill: #30b8e6;
    }

`;
document.body.prepend(css);

//-----------------------------------------------------------------------------
// grab all div of p5js-player type

var all_widgets = document.getElementsByClassName("p5js-player");

var widgets = [];

for(var i = 0; i < all_widgets.length; ++i)
{
    if(all_widgets[i].tagName != "DIV") continue;

    widgets.push(all_widgets[i]);
}

console.log("    found %d div elements with class 'p5js-player'", widgets.length);

//-----------------------------------------------------------------------------
// populate each widget with conent

for(var i = 0; i < widgets.length; ++i)
{
    //-------------------------------------------------------------------------
    // generate the toolbar

    // horizontal box container

    var hbox = document.createElement('div');

    hbox.className = "p5js-player-toolbar";

    // p5js Logo

    var anchor = document.createElement('a');

    anchor.className = "p5js-player-logo";
    anchor.href = "http://p5js.org/";
    anchor.target = "_blank";
    anchor.innerHTML = `
        <svg viewBox="0 0 250 114" width="75" height="25"  class="p5js-player-logo">
            <path d="M16.254 27.631v7.998h.359c.715-1.113 1.65-2.248 2.805-3.402 1.153-1.154 2.567-2.188 4.239-3.105 1.671-.912 3.561-1.67 5.671-2.268 2.107-.596 4.477-.896 7.103-.896 4.06 0 7.8.777 11.223 2.328 3.422 1.555 6.368 3.684 8.836 6.389 2.466 2.707 4.376 5.891 5.73 9.551 1.353 3.662 2.03 7.602 2.03 11.82s-.657 8.178-1.971 11.879c-1.312 3.701-3.185 6.924-5.611 9.67-2.429 2.746-5.372 4.938-8.835 6.566-3.463 1.631-7.384 2.447-11.76 2.447-4.06 0-7.781-.836-11.163-2.506-3.385-1.672-5.99-3.939-7.82-6.807h-.238v36.295H2.525V27.631h13.729zm33.43 28.414c0-2.229-.339-4.438-1.015-6.627-.678-2.188-1.692-4.158-3.045-5.91-1.354-1.748-3.064-3.162-5.134-4.238-2.07-1.074-4.497-1.611-7.282-1.611-2.627 0-4.976.557-7.044 1.672a18.075 18.075 0 0 0-5.313 4.297 18.321 18.321 0 0 0-3.343 5.971c-.758 2.229-1.134 4.459-1.134 6.686 0 2.229.376 4.438 1.134 6.625a18.438 18.438 0 0 0 3.343 5.912 17.214 17.214 0 0 0 5.313 4.236c2.068 1.076 4.417 1.611 7.044 1.611 2.785 0 5.212-.555 7.282-1.67 2.069-1.115 3.78-2.547 5.134-4.299 1.353-1.75 2.367-3.74 3.045-5.969a22.937 22.937 0 0 0 1.015-6.686zM189.333 24.893v63.506c0 3.422-.279 6.666-.836 9.73-.559 3.064-1.611 5.73-3.164 8-1.551 2.27-3.662 4.078-6.328 5.432-2.668 1.354-6.148 2.029-10.447 2.029a27.3 27.3 0 0 1-3.582-.238c-1.193-.16-2.148-.32-2.865-.479l1.195-12.178c.637.16 1.312.279 2.029.359.717.078 1.352.119 1.91.119 1.67 0 3.023-.318 4.059-.955a6.402 6.402 0 0 0 2.389-2.627c.555-1.115.914-2.408 1.074-3.881.158-1.473.238-3.043.238-4.715V24.893h14.328zM238.163 42.912c-1.275-1.672-3.025-3.123-5.254-4.357s-4.656-1.852-7.283-1.852c-2.309 0-4.416.479-6.326 1.434-1.912.953-2.865 2.547-2.865 4.775s1.053 3.803 3.162 4.715c2.109.916 5.195 1.852 9.254 2.807 2.148.479 4.316 1.115 6.506 1.91s4.18 1.85 5.971 3.164a15.605 15.605 0 0 1 4.357 4.895c1.113 1.951 1.672 4.318 1.672 7.104 0 3.504-.658 6.469-1.971 8.895-1.312 2.428-3.064 4.398-5.254 5.91s-4.736 2.607-7.641 3.283a39.64 39.64 0 0 1-9.014 1.014c-4.459 0-8.795-.816-13.014-2.447-4.219-1.629-7.721-3.959-10.506-6.982l9.432-8.836c1.592 2.07 3.66 3.781 6.209 5.133 2.547 1.354 5.371 2.029 8.477 2.029 1.033 0 2.088-.117 3.164-.357a10.742 10.742 0 0 0 2.984-1.133 6.202 6.202 0 0 0 2.209-2.09c.555-.877.834-1.949.834-3.225 0-2.389-1.094-4.098-3.281-5.133-2.191-1.035-5.475-2.07-9.85-3.104a47.301 47.301 0 0 1-6.27-1.852c-2.029-.756-3.84-1.75-5.432-2.984a13.778 13.778 0 0 1-3.82-4.598c-.955-1.83-1.434-4.098-1.434-6.805 0-3.184.656-5.928 1.971-8.236a16.936 16.936 0 0 1 5.193-5.674c2.148-1.471 4.576-2.566 7.283-3.281a32.486 32.486 0 0 1 8.357-1.076c4.137 0 8.178.717 12.117 2.148 3.939 1.434 7.062 3.625 9.373 6.568l-9.31 8.238zM153.559 72.816l8.533-2.576 1.676 5.156-8.498 2.898 5.275 7.48L156.098 89l-5.553-7.348-5.408 7.154-4.319-3.289 5.275-7.223-8.563-3.09 1.677-5.16 8.599 2.771V63.92h5.754v8.896zM124.086 45.836c-1.473-3.301-3.521-6.088-6.148-8.357-2.626-2.268-5.711-4-9.252-5.193-3.543-1.193-7.384-1.791-11.521-1.791-1.513 0-3.204.082-5.074.238-1.871.162-3.482.439-4.835.838l.835-18.268h34.504V.41H74.481l-1.433 46.201c1.271-.635 2.725-1.232 4.357-1.791a66.991 66.991 0 0 1 5.014-1.49 45.797 45.797 0 0 1 5.254-1.016 38.588 38.588 0 0 1 5.074-.357c2.307 0 4.576.258 6.805.775 2.228.518 4.238 1.434 6.029 2.746s3.242 3.045 4.358 5.193c1.113 2.148 1.671 4.855 1.671 8.119 0 2.547-.418 4.836-1.254 6.865-.835 2.027-1.97 3.721-3.401 5.072a14.723 14.723 0 0 1-5.016 3.104c-1.91.719-3.939 1.076-6.089 1.076-3.819 0-7.124-1.016-9.909-3.045-2.787-2.029-4.775-4.715-5.97-8.059l-.159.059-10.368 9.715c2.097 3.42 4.8 6.281 8.14 8.553 4.854 3.301 10.823 4.955 17.909 4.955 4.218 0 8.197-.678 11.938-2.029 3.74-1.352 7.004-3.303 9.79-5.852 2.785-2.545 4.994-5.67 6.627-9.371 1.63-3.701 2.446-7.898 2.446-12.596.001-4.298-.735-8.096-2.208-11.401z"/>
        </svg>
    `;

    hbox.appendChild(anchor);

    // spacer

    var spacer = document.createElement('div')

    spacer.style.paddingRight = "10px";

    hbox.appendChild(spacer);

    // Play button

    var play_button = document.createElement('button');

    play_button.className = "p5js-player";

    play_button.innerHTML = `
        <svg viewBox="0 0 15 15" width="15" height="15">
            <polygon points="0,0 15,7 0,15"/>
        </svg>
        <span>&nbsp;Play</span>
    `;

    hbox.appendChild(play_button);

    // spacer

    spacer = document.createElement('div')

    spacer.style.paddingRight = "20px";

    hbox.appendChild(spacer);

    // Stop button

    var stop_button = document.createElement('button');

    stop_button.className = "p5js-player";

    stop_button.innerHTML = `
        <svg viewBox="0 0 15 15" width="15" height="15">
            <polygon points="0,0 15,0 15,15 0,15"/>
        </svg>
        <span>&nbsp;Stop</span>
    `;

    stop_button.style.visibility = "hidden";

    hbox.appendChild(stop_button);

    widgets[i].insertBefore(hbox, widgets[i].children[0]);

    //-------------------------------------------------------------------------
    // generate object element, targeting the sketch file

    var sketch_url = widgets[i].getAttribute('sketch');

    if(! sketch_url)
    {
        alert("p5jswidet is missing the 'sketch' attribute");
    }
    else
    {
        object = _make_object(widgets[i]);

        widgets[i].appendChild(object);

        play_button.onclick = _bind4(_on_play, widgets[i], play_button, stop_button, sketch_url);
        stop_button.onclick = _bind3(_on_stop, widgets[i], play_button, stop_button);
    }
}


console.log("END p5js-player.js");


function _make_object(widget)
{
    var w = _to_int(widget.getAttribute('width'));
    var h = _to_int(widget.getAttribute('height'));

    var object = document.createElement("object");

    var margin = 5;

    object.type = "text/html";
    object.width  = w + 2 * margin;
    object.height = h + 2 * margin;
    object.style.overflow = "hidden";
    object.style.width = w;
    object.style.height = h;
    object.style.margin = margin;
    object.style.border = 0; //"1px solid black"
    object.style.padding = 0;

    return object;
}


function _remove_object(widget)
{
    var n_children = widget.children.length;
    widget.removeChild(widget.children[n_children - 1]);
}


function _on_play(widget, play_button, stop_button, sketch_url)
{
    console.log("    loading: %s", sketch_url);

    var n_children = widget.children.length;

    widget.children[n_children - 1].data = sketch_url;

    play_button.style.visibility = "hidden";
    stop_button.style.visibility = "";
}


function _on_stop(widget, play_button, stop_button)
{
    _remove_object(widget);

    object = _make_object(widget);

    widget.appendChild(object);

    stop_button.style.visibility = "hidden";
    play_button.style.visibility = "";
}


function _bind(callable, arg1)
{
    return function(){callable(arg1);}
}

function _bind2(callable, arg1, arg2)
{
    return function(){callable(arg1, arg2);}
}

function _bind3(callable, arg1, arg2, arg3)
{
    return function(){callable(arg1, arg2, arg3);}
}

function _bind4(callable, arg1, arg2, arg3, arg4)
{
    return function(){callable(arg1, arg2, arg3, arg4);}
}

function _to_int(x)
{
    return x - 0;
}