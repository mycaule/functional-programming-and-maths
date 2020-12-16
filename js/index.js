/* eslint-disable no-var */
/* global katex: false */
/* global ClipboardJS: false */

// load fonts
window.WebFontConfig = {
    custom: {
        families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7',
            'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script',
            'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3',
            'KaTeX_Size4', 'KaTeX_Typewriter'],
    },
};

(function () {
    var tex = document.getElementsByClassName("tex");
    Array.prototype.forEach.call(tex, function (el) {
        katex.render(el.getAttribute("data-expr"), el);
    });

    var demoInput = document.getElementById("demo-input");
    var optionsPanel = document.getElementById("options-panel");
    var maximize = document.getElementById("maximize");

    if (window.location.hash === '#demo') {
        optionsPanel.classList.add('opened');
        document.body.classList.add("maximized");
        maximize.innerHTML = 'Minimize editor';
    }

    var match = window.location.search.match(/[?&]data=([^&]*)/);
    var data = {};
    if (match) {
        try {
            data = JSON.parse(decodeURIComponent(match[1]));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn(e);
        }
    }

    if (data.code) {
        demoInput.value = data.code;
    }
})();
