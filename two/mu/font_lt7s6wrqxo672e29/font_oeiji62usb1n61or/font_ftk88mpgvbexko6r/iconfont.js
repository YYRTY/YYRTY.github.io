;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M281.944783 1023.493231 230.761072 972.30952 691.486867 511.583725 230.761072 50.857931 281.691398 0 793.238926 511.583725 281.944783 1023.493231Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontbofang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M508 68.347C263.365 68.347 64.347 267.365 64.347 512S263.365 955.653 508 955.653 951.653 756.634 951.653 512 752.635 68.347 508 68.347zM767.275 533.488l-391.85 231.538c-19.993 11.817-36.356 2.485-36.356-20.745L339.069 279.718c0-23.23 16.363-32.562 36.356-20.745l391.85 231.538C787.268 502.328 787.268 521.671 767.275 533.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyou1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M572.329017 893.983831l384.928906-384.694569L575.964824 127.996163l-45.146223 45.148269 304.168558 304.168558L64.225767 477.31299 64.225767 541.158087l770.632455 0-307.677475 307.678498L572.329017 893.983831zM572.329017 893.983831"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lujing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M309.614593 554.687218c-62.760392 0-113.63713 51.125401-113.63713 113.714901l0 227.78489 56.916291 0 0-227.677443c0-31.428803 25.52842-56.906058 57.08309-56.906058l227.695862 0c62.760392 0 113.63713-51.216475 113.63713-113.833605L651.309836 355.479177l142.29175 0-170.749896-227.666186L452.101795 355.479177l142.29175 0 0 142.124951c0 31.526017-25.52842 57.08309-57.08309 57.08309L309.614593 554.687218z"  ></path>' +
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