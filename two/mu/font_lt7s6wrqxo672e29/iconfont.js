;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.024 61.44q93.184 0 175.104 35.328t142.848 96.768 96.256 143.872 35.328 175.616-35.328 175.616-96.256 143.872-142.848 96.768-175.104 35.328-175.104-35.328-142.848-96.768-96.256-143.872-35.328-175.616 35.328-175.616 96.256-143.872 142.848-96.768 175.104-35.328zM690.176 556.032q10.24-10.24 15.872-26.624t5.632-33.792-6.144-33.792-18.432-25.6q-48.128-35.84-103.936-83.456t-120.32-89.6q-14.336-9.216-28.16-8.704t-25.088 8.192-17.92 22.528-6.656 35.328l0 386.048q0 23.552 8.704 36.864t22.016 17.92 28.16 2.048 26.112-11.776q25.6-19.456 53.76-44.032t56.832-50.176 56.32-51.712 53.248-49.664z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M572.329017 893.983831l384.928906-384.694569L575.964824 127.996163l-45.146223 45.148269 304.168558 304.168558L64.225767 477.31299 64.225767 541.158087l770.632455 0-307.677475 307.678498L572.329017 893.983831zM572.329017 893.983831"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti6-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M632.009 499.13l-383.436 372.786 91.747 75.264 446.922-451.587-473.978-444.55-76.432 84.673z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)