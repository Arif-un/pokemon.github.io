import {
  u as $,
  a as B,
  s as F,
  P as G,
  b as J,
  M as Q,
  f as T,
  L as W,
  c as X,
  T as Y,
  p as ae,
  i as ce,
  t as ee,
  r as f,
  m as h,
  g as ie,
  C as le,
  e as ne,
  B as oe,
  j as r,
  D as re,
  h as se,
  d as te,
  R as y
} from './index-DqDNeLcB.js'

var de = function (e) {
  f.useEffect(e, [])
}
class ue extends f.Component {
  getSnapshotBeforeUpdate(n) {
    const a = this.props.childRef.current
    if (a && n.isPresent && !this.props.isPresent) {
      const t = this.props.sizeRef.current
      ;(t.height = a.offsetHeight || 0),
        (t.width = a.offsetWidth || 0),
        (t.top = a.offsetTop),
        (t.left = a.offsetLeft)
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function me({ children: e, isPresent: n }) {
  const a = f.useId(),
    t = f.useRef(null),
    i = f.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = f.useContext(Q)
  return (
    f.useInsertionEffect(() => {
      const { width: d, height: s, top: c, left: m } = i.current
      if (n || !t.current || !d || !s) return
      t.current.dataset.motionPopId = a
      const u = document.createElement('style')
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
          document.head.removeChild(u)
        }
      )
    }, [n]),
    r.jsx(ue, { isPresent: n, childRef: t, sizeRef: i, children: f.cloneElement(e, { ref: t }) })
  )
}
const fe = ({
  children: e,
  initial: n,
  isPresent: a,
  onExitComplete: t,
  custom: i,
  presenceAffectsLayout: o,
  mode: d
}) => {
  const s = $(pe),
    c = f.useId(),
    m = f.useMemo(
      () => ({
        id: c,
        initial: n,
        isPresent: a,
        custom: i,
        onExitComplete: u => {
          s.set(u, !0)
          for (const l of s.values()) if (!l) return
          t && t()
        },
        register: u => (s.set(u, !1), () => s.delete(u))
      }),
      o ? [Math.random()] : [a]
    )
  return (
    f.useMemo(() => {
      s.forEach((u, l) => s.set(l, !1))
    }, [a]),
    f.useEffect(() => {
      !a && !s.size && t && t()
    }, [a]),
    d === 'popLayout' && (e = r.jsx(me, { isPresent: a, children: e })),
    r.jsx(G.Provider, { value: m, children: e })
  )
}
function pe() {
  return new Map()
}
const L = e => e.key || ''
function M(e) {
  const n = []
  return (
    f.Children.forEach(e, a => {
      f.isValidElement(a) && n.push(a)
    }),
    n
  )
}
const P = ({
  children: e,
  exitBeforeEnter: n,
  custom: a,
  initial: t = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: d = 'sync'
}) => {
  const s = f.useMemo(() => M(e), [e]),
    c = s.map(L),
    m = f.useRef(!0),
    u = f.useRef(s),
    l = $(() => new Map()),
    [b, x] = f.useState(s),
    [g, k] = f.useState(s)
  B(() => {
    ;(m.current = !1), (u.current = s)
    for (let v = 0; v < g.length; v++) {
      const p = L(g[v])
      c.includes(p) ? l.delete(p) : l.get(p) !== !0 && l.set(p, !1)
    }
  }, [g, c.length, c.join('-')])
  const z = []
  if (s !== b) {
    let v = [...s]
    for (let p = 0; p < g.length; p++) {
      const j = g[p],
        S = L(j)
      c.includes(S) || (v.splice(p, 0, j), z.push(j))
    }
    d === 'wait' && z.length && (v = z), k(M(v)), x(s)
    return
  }
  const { forceRender: O } = f.useContext(W)
  return r.jsx(r.Fragment, {
    children: g.map(v => {
      const p = L(v),
        j = s === g || c.includes(p),
        S = () => {
          if (l.has(p)) l.set(p, !0)
          else return
          let R = !0
          l.forEach(K => {
            K || (R = !1)
          }),
            R && (O == null || O(), k(u.current), i && i())
        }
      return r.jsx(
        fe,
        {
          isPresent: j,
          initial: !m.current || t ? void 0 : !1,
          custom: j ? void 0 : a,
          presenceAffectsLayout: o,
          mode: d,
          onExitComplete: j ? void 0 : S,
          children: v
        },
        p
      )
    })
  })
}
function he(e) {
  e.values.forEach(n => n.stop())
}
function A(e, n) {
  ;[...n].reverse().forEach(t => {
    const i = e.getVariant(t)
    i && F(e, i),
      e.variantChildren &&
        e.variantChildren.forEach(o => {
          A(o, n)
        })
  })
}
function xe(e, n) {
  if (Array.isArray(n)) return A(e, n)
  if (typeof n == 'string') return A(e, [n])
  F(e, n)
}
function ge() {
  const e = new Set(),
    n = {
      subscribe(a) {
        return e.add(a), () => void e.delete(a)
      },
      start(a, t) {
        const i = []
        return (
          e.forEach(o => {
            i.push(J(o, a, { transitionOverride: t }))
          }),
          Promise.all(i)
        )
      },
      set(a) {
        return e.forEach(t => {
          xe(t, a)
        })
      },
      stop() {
        e.forEach(a => {
          he(a)
        })
      },
      mount() {
        return () => {
          n.stop()
        }
      }
    }
  return n
}
function ve() {
  const e = $(ge)
  return B(e.mount, []), e
}
const be = ve,
  E = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } },
  V = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.5 } }
  },
  _ = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
var Z = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  D = y.createContext && y.createContext(Z),
  je = ['attr', 'size', 'title']
function ye(e, n) {
  if (e == null) return {}
  var a = Ce(e, n),
    t,
    i
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (i = 0; i < o.length; i++)
      (t = o[i]),
        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
  }
  return a
}
function Ce(e, n) {
  if (e == null) return {}
  var a = {}
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      if (n.indexOf(t) >= 0) continue
      a[t] = e[t]
    }
  return a
}
function N() {
  return (
    (N = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n]
            for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
          }
          return e
        }),
    N.apply(this, arguments)
  )
}
function I(e, n) {
  var a = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e)
    n &&
      (t = t.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      a.push.apply(a, t)
  }
  return a
}
function w(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {}
    n % 2
      ? I(Object(a), !0).forEach(function (t) {
          ke(e, t, a[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : I(Object(a)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          })
  }
  return e
}
function ke(e, n, a) {
  return (
    (n = Le(n)),
    n in e
      ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 })
      : (e[n] = a),
    e
  )
}
function Le(e) {
  var n = Ne(e, 'string')
  return typeof n == 'symbol' ? n : n + ''
}
function Ne(e, n) {
  if (typeof e != 'object' || !e) return e
  var a = e[Symbol.toPrimitive]
  if (a !== void 0) {
    var t = a.call(e, n || 'default')
    if (typeof t != 'object') return t
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (n === 'string' ? String : Number)(e)
}
function U(e) {
  return e && e.map((n, a) => y.createElement(n.tag, w({ key: a }, n.attr), U(n.child)))
}
function C(e) {
  return n => y.createElement(we, N({ attr: w({}, e.attr) }, n), U(e.child))
}
function we(e) {
  var n = a => {
    var { attr: t, size: i, title: o } = e,
      d = ye(e, je),
      s = i || a.size || '1em',
      c
    return (
      a.className && (c = a.className),
      e.className && (c = (c ? c + ' ' : '') + e.className),
      y.createElement(
        'svg',
        N({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, a.attr, t, d, {
          className: c,
          style: w(w({ color: e.color || a.color }, a.style), e.style),
          height: s,
          width: s,
          xmlns: 'http://www.w3.org/2000/svg'
        }),
        o && y.createElement('title', null, o),
        e.children
      )
    )
  }
  return D !== void 0 ? y.createElement(D.Consumer, null, a => n(a)) : n(Z)
}
function Pe(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M7.04813 13.4061L10.5831 16.9421L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L7.04813 13.4061ZM2.99907 3L6.54506 3.00335L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L3.00181 6.53118L2.99907 3ZM17.4563 3.0001L20.9991 3.00335L21.001 6.52648L16.9481 10.5781L13.4121 7.0431L17.4563 3.0001Z'
        },
        child: []
      }
    ]
  })(e)
}
function Ee(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z'
        },
        child: []
      }
    ]
  })(e)
}
function ze({ abilities: e, isNavigating: n, finishNavigation: a }) {
  return r.jsx('section', {
    className: 'my-4',
    children: r.jsx(P, {
      mode: 'wait',
      onExitComplete: a,
      children:
        !n &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx(h.h2, {
              initial: 'hidden',
              animate: e && 'visible',
              exit: 'hidden',
              variants: E,
              className: 'text-slate-600 dark:text-slate-500 mb-1',
              children: 'Abilities'
            }),
            r.jsx(h.ul, {
              variants: V,
              initial: 'hidden',
              animate: e && 'visible',
              exit: 'hidden',
              className: 'flex gap-3 w-[370px] sm:w-full flex-wrap',
              'aria-label': 'List of Pokemon Abilities',
              children:
                e == null
                  ? void 0
                  : e.map(t =>
                      r.jsxs(
                        h.li,
                        {
                          variants: _,
                          className:
                            'capitalize flex gap-2 items-center py-1 px-3 text-indigo-700 bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 rounded-full font-semibold',
                          children: [
                            r.jsx(Ee, { className: 'size-5' }),
                            t == null ? void 0 : t.replace(/-/g, ' ')
                          ]
                        },
                        t
                      )
                    )
            })
          ]
        })
    })
  })
}
function Oe({ animationControls: e, imageSrc: n, pokemonColor: a, name: t }) {
  return r.jsxs(h.div, {
    layoutId: `image-wrapper-${t}`,
    animate: e,
    className:
      'inner-glow group relative overflow-hidden border border-slate-800 bg-slate-900 dark:bg-opacity-70 p-5 h-[500px] grid place-content-center rounded-3xl',
    children: [
      r.jsx('div', {
        className: 'h-24 absolute rounded-full m-auto w-full -bottom-28 blur-3xl opacity-40',
        style: { background: a }
      }),
      r.jsxs(Y, {
        parralexEffect: !1,
        glareEnable: !1,
        scale: 1.1,
        children: [
          r.jsx('img', {
            src: n,
            alt: 'Pokemon image backdrop',
            className: 'absolute blur-3xl z-0 opacity-50 group-hover:opacity-80 transition-opacity'
          }),
          r.jsx(h.img, {
            layoutId: `${t} image pokemon`,
            className: 'w-96 relative',
            src: n,
            alt: `Pokemon ${t} image`
          })
        ]
      })
    ]
  })
}
function Se({ types: e, isNavigating: n, finishNavigation: a }) {
  return r.jsx('section', {
    children: r.jsx(P, {
      mode: 'wait',
      onExitComplete: a,
      children:
        !n &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx(h.h2, {
              initial: 'hidden',
              animate: 'visible',
              exit: 'hidden',
              variants: E,
              className: 'text-slate-600 dark:text-slate-500 mb-1',
              children: 'Types'
            }),
            r.jsx(h.ul, {
              variants: V,
              initial: 'hidden',
              animate: 'visible',
              exit: 'hidden',
              className: 'flex gap-3',
              children:
                e == null
                  ? void 0
                  : e.map(t => {
                      var i
                      return r.jsxs(
                        h.li,
                        {
                          variants: _,
                          className: 'inline-flex justify-center items-center gap-3 p-1 rounded-full',
                          style: { background: `color-mix(in oklab, #000000 0%, ${t.color} 14.2%)` },
                          children: [
                            r.jsx('div', {
                              style: { background: t.color, boxShadow: `0 4px 20px -2px ${t.color}` },
                              className: 'rounded-full p-1',
                              children: r.jsx('img', {
                                src: t.icon,
                                alt: `${t.name} type icon`,
                                className: 'size-5'
                              })
                            }),
                            r.jsx('span', {
                              className: 'capitalize font-semibold mr-3 dark:text-slate-100',
                              children: (i = t.name) == null ? void 0 : i.replace(/-/g, ' ')
                            })
                          ]
                        },
                        t == null ? void 0 : t.name
                      )
                    })
            })
          ]
        })
    })
  })
}
const Ae = {
    hidden: { opacity: 0, width: '200px' },
    visible: { opacity: 1, width: '100%', transition: { delay: 0.2, staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  },
  $e = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
function Re(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z'
        },
        child: []
      }
    ]
  })(e)
}
function Me(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224,192a16,16,0,1,0,16,16A16,16,0,0,0,224,192ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.09,48.09,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM384,256H371.88c-28.51,0-42.79,34.47-22.63,54.63l8.58,8.57a16,16,0,1,1-22.63,22.63l-8.57-8.58C306.47,313.09,272,327.37,272,355.88V368a16,16,0,0,1-32,0V355.88c0-28.51-34.47-42.79-54.63-22.63l-8.57,8.58a16,16,0,0,1-22.63-22.63l8.58-8.57c20.16-20.16,5.88-54.63-22.63-54.63H128a16,16,0,0,1,0-32h12.12c28.51,0,42.79-34.47,22.63-54.63l-8.58-8.57a16,16,0,0,1,22.63-22.63l8.57,8.58c20.16,20.16,54.63,5.88,54.63-22.63V112a16,16,0,0,1,32,0v12.12c0,28.51,34.47,42.79,54.63,22.63l8.57-8.58a16,16,0,0,1,22.63,22.63l-8.58,8.57C329.09,189.53,343.37,224,371.88,224H384a16,16,0,0,1,0,32Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,288,256Z'
        },
        child: []
      }
    ]
  })(e)
}
function De(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z'
        },
        child: []
      }
    ]
  })(e)
}
function Ie(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 16c-52.5 252.632-210 277.845 0 454.688C466 293.845 308.5 268.63 256 16zM124.75 167.407C98.5 243.197 46 294.117 46 369.907S151 496 229.75 496c-157.5-126.317-105-202.278-105-328.593zm262.5 0c0 126.317 52.5 202.278-105 328.593C361 496 466 445.696 466 369.907c0-75.79-52.5-126.71-78.75-202.5z'
        },
        child: []
      }
    ]
  })(e)
}
function Be(e) {
  return C({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z'
        },
        child: []
      }
    ]
  })(e)
}
function Fe({ name: e, style: n }) {
  switch (e) {
    case 'hp':
      return r.jsx(Be, { className: 'size-6', style: n })
    case 'attack':
      return r.jsx(Pe, { className: 'size-6', style: n })
    case 'defense':
      return r.jsx(De, { className: 'size-6', style: n })
    case 'special-attack':
      return r.jsx(Ie, { className: 'size-6', style: n })
    case 'special-defense':
      return r.jsx(Me, { className: 'size-6', style: n })
    case 'speed':
      return r.jsx(Re, { className: 'size-6', style: n })
    default:
      return null
  }
}
function Te({ value: e = 0, name: n, percent: a, color: t }) {
  const o = X(ee) === 'dark',
    d = o ? 'rgb(15 23 42 / 1)' : 'rgb(241 245 249 / 1)',
    s = o ? 'rgb(2 6 23 / 1)' : 'rgb(203, 216, 228)',
    c = n == null ? void 0 : n.replace(/-/g, ' ')
  return r.jsxs('div', {
    className: 'inline-flex justify-center flex-col items-center min-w-24',
    children: [
      r.jsxs('figure', {
        className:
          'size-14 rounded-full bg-slate-400 bg-opacity-60 dark:bg-slate-900 grid place-content-center relative',
        children: [
          r.jsx('div', {
            role: 'img',
            'aria-label': `${c}: ${a}%`,
            style: {
              background: `conic-gradient(from 213deg at 50% 50%, ${t} 0%, ${t} ${a}%, ${s} ${a}%, ${s} 83%, ${d} 83%, ${d} 100%)`
            },
            className: 'size-14 rounded-full'
          }),
          r.jsx('div', {
            style: { color: t },
            className:
              'size-11 rounded-full bg-slate-100 dark:bg-slate-900 absolute inset-0 m-auto grid place-content-center',
            children: r.jsx(Fe, {
              name: n,
              style: { filter: `drop-shadow(0 2px 7px color-mix(in srgb, ${t} 70%, transparent))` }
            })
          }),
          r.jsx('span', {
            'aria-label': 'Pokemon stat name',
            'aria-live': 'polite',
            className:
              'absolute m-auto right-0 left-0 size-4 -bottom-2 text-xs text-slate-600 dark:text-slate-400',
            children: e
          })
        ]
      }),
      r.jsx('figcaption', {
        className:
          'text-sm text-center text-slate-600 dark:text-slate-400 capitalize mt-3 font-semibold',
        children: c
      })
    ]
  })
}
function Ve({ baseStats: e, isNavigating: n, finishNavigation: a }) {
  return r.jsx('section', {
    children: r.jsx(P, {
      mode: 'wait',
      onExitComplete: a,
      children:
        !n &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx(h.h2, {
              initial: 'hidden',
              animate: e && 'visible',
              exit: 'hidden',
              variants: E,
              className: 'text-slate-600 dark:text-slate-500 mb-1',
              children: 'Stats'
            }),
            r.jsx(h.ul, {
              initial: 'hidden',
              animate: e && 'visible',
              exit: 'exit',
              variants: Ae,
              className:
                'grid grid-cols-3 gap-y-6 gap-x-4 border dark:border-slate-800 bg-slate-100 bg-opacity-70 dark:bg-slate-900 p-4 rounded-xl',
              'aria-label': 'List of Pokemon Base Stats',
              children:
                e == null
                  ? void 0
                  : e.map(t =>
                      r.jsx(
                        h.li,
                        {
                          variants: $e,
                          children: r.jsx(Te, {
                            value: t.value,
                            name: t.name,
                            color: t.color,
                            percent: (t.value / t.max) * 100
                          })
                        },
                        t.name
                      )
                    )
            })
          ]
        })
    })
  })
}
function _e() {
  const e = te(),
    [n, a] = f.useState(!1),
    [t, i] = f.useState(null)
  return {
    isNavigating: n,
    navigate: (s, { replace: c = !1 } = {}) => {
      a(!0), i({ to: s, replace: c })
    },
    finishNavigation: () => {
      if (t) {
        const { to: s, replace: c } = t
        e.navigate({ to: s, replace: c, search: m => ({ ...m }) }), a(!1), i(null)
      }
    }
  }
}
const q = (function e(n) {
    function a(i, o, d) {
      var s,
        c = {}
      if (Array.isArray(i)) return i.concat(o)
      for (s in i) c[d ? s.toLowerCase() : s] = i[s]
      for (s in o) {
        var m = d ? s.toLowerCase() : s,
          u = o[s]
        c[m] = m in c && typeof u == 'object' ? a(c[m], u, m == 'headers') : u
      }
      return c
    }
    function t(i, o, d, s, c) {
      var m = typeof i != 'string' ? (o = i).url : i,
        u = { config: o },
        l = a(n, o),
        b = {}
      ;(s = s || l.data),
        (l.transformRequest || []).map(function (x) {
          s = x(s, l.headers) || s
        }),
        l.auth && (b.authorization = l.auth),
        s &&
          typeof s == 'object' &&
          typeof s.append != 'function' &&
          typeof s.text != 'function' &&
          ((s = JSON.stringify(s)), (b['content-type'] = 'application/json'))
      try {
        b[l.xsrfHeaderName] = decodeURIComponent(
          document.cookie.match(RegExp('(^|; )' + l.xsrfCookieName + '=([^;]*)'))[2]
        )
      } catch {}
      return (
        l.baseURL && (m = m.replace(/^(?!.*\/\/)\/?/, l.baseURL + '/')),
        l.params &&
          (m +=
            (~m.indexOf('?') ? '&' : '?') +
            (l.paramsSerializer ? l.paramsSerializer(l.params) : new URLSearchParams(l.params))),
        (l.fetch || fetch)(m, {
          method: (d || l.method || 'get').toUpperCase(),
          body: s,
          headers: a(l.headers, b, !0),
          credentials: l.withCredentials ? 'include' : c
        }).then(function (x) {
          for (var g in x) typeof x[g] != 'function' && (u[g] = x[g])
          return l.responseType == 'stream'
            ? ((u.data = x.body), u)
            : x[l.responseType || 'text']()
                .then(function (k) {
                  ;(u.data = k), (u.data = JSON.parse(k))
                })
                .catch(Object)
                .then(function () {
                  return (l.validateStatus ? l.validateStatus(x.status) : x.ok) ? u : Promise.reject(u)
                })
        })
      )
    }
    return (
      (n = n || {}),
      (t.request = t),
      (t.get = function (i, o) {
        return t(i, o, 'get')
      }),
      (t.delete = function (i, o) {
        return t(i, o, 'delete')
      }),
      (t.head = function (i, o) {
        return t(i, o, 'head')
      }),
      (t.options = function (i, o) {
        return t(i, o, 'options')
      }),
      (t.post = function (i, o, d) {
        return t(i, d, 'post', o)
      }),
      (t.put = function (i, o, d) {
        return t(i, d, 'put', o)
      }),
      (t.patch = function (i, o, d) {
        return t(i, d, 'patch', o)
      }),
      (t.all = Promise.all.bind(Promise)),
      (t.spread = function (i) {
        return i.apply.bind(i, i)
      }),
      (t.CancelToken = typeof AbortController == 'function' ? AbortController : Object),
      (t.defaults = n),
      (t.create = e),
      t
    )
  })(),
  H = 'https://pokeapi.co/api/v2',
  Ze = async e => q.get(`${H}/pokemon/${e}`).then(n => n.data),
  Ue = async e => q.get(`${H}/pokemon-species/${e}`).then(n => n.data),
  qe = (e, n) => {
    const a = ne(),
      {
        data: t,
        isLoading: i,
        isError: o,
        error: d
      } = T({
        queryKey: ['pokemon', e],
        queryFn: () => Ze(e),
        initialData: () => {
          const s = a.getQueriesData({ queryKey: ['pokemon'] })
          return ae(e, s)
        },
        select: n
      })
    return { data: t, isLoading: i, isError: o, error: d }
  },
  He = e => {
    const {
      data: n,
      isLoading: a,
      isError: t,
      error: i
    } = T({ queryKey: ['pokemon-color', e], queryFn: () => Ue(e), staleTime: re })
    return {
      pokemonColor: n == null ? void 0 : n.color.name,
      isLoading: a,
      isPokemonSpeciesError: t,
      pokemonSpeciesError: i
    }
  }
function Ke() {
  return r.jsx('section', {
    'aria-label': 'Loading skeleton',
    className: 'p-2 mt-52 container mx-auto m-auto inset-0 z-10 animate-pulse',
    children: r.jsxs('div', {
      className: 'flex justify-center gap-14',
      'aria-hidden': 'true',
      children: [
        r.jsxs('div', {
          children: [
            r.jsx('div', {
              className: 'h-11 rounded-full  bg-slate-400 dark:bg-slate-800 w-[92px] mb-3'
            }),
            r.jsx('div', { className: 'h-[500px] w-[426px] bg-slate-400 dark:bg-slate-800 rounded-3xl' })
          ]
        }),
        r.jsxs('div', {
          className: 'mt-9',
          children: [
            r.jsx('div', { className: 'bg-slate-400 dark:bg-slate-800 mb-5 mt-3 h-8 w-36 rounded-xl' }),
            r.jsxs('div', {
              className: 'flex mb-5 mt-12 gap-3',
              children: [
                r.jsx('div', { className: 'bg-slate-400 dark:bg-slate-800 h-9 w-28 rounded-full' }),
                r.jsx('div', { className: 'bg-slate-400 dark:bg-slate-800 h-9 w-28 rounded-full' })
              ]
            }),
            r.jsxs('div', {
              className: 'flex mb-5 mt-12 gap-3',
              children: [
                r.jsx('div', { className: 'bg-slate-400 dark:bg-slate-800 h-8 w-28 rounded-full' }),
                r.jsx('div', { className: 'bg-slate-400 dark:bg-slate-800 h-8 w-28 rounded-full' })
              ]
            }),
            r.jsx('div', {
              className:
                'grid grid-cols-3 gap-y-6 place-content-center gap-x-4 mb-5 mt-11 gap-3 w-[370px] bg-slate-300 dark:bg-slate-700 rounded-xl p-4',
              children: Array.from({ length: 6 }).map((e, n) =>
                r.jsxs(
                  'div',
                  {
                    className: 'inline-flex justify-center flex-col items-center min-w-24',
                    children: [
                      r.jsx('div', { className: 'bg-slate-400 dark:bg-slate-800 size-14 rounded-full' }),
                      r.jsx('div', {
                        className: 'bg-slate-400 dark:bg-slate-800 h-4 w-11 mt-4 rounded-lg'
                      })
                    ]
                  },
                  `loading item ${n}`
                )
              )
            })
          ]
        })
      ]
    })
  })
}
function Qe() {
  const { name: e } = ie({ from: '/pokemon-details/$name' }),
    { data: n, isLoading: a, isError: t, error: i } = qe(e, f.useCallback(se, [e])),
    { pokemonColor: o, isPokemonSpeciesError: d, pokemonSpeciesError: s } = He(e),
    c = be(),
    { isNavigating: m, navigate: u, finishNavigation: l } = _e()
  de(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
  const b = () => {
    c.start({ scale: 0.7, transition: { duration: 0.2 } }), u('/')
  }
  return a
    ? r.jsx(Ke, {})
    : t || d
      ? r.jsxs('div', {
          children: [
            r.jsx('h2', { children: 'Error occurred:' }),
            r.jsx('p', {
              children: (i == null ? void 0 : i.message) || (s == null ? void 0 : s.message)
            })
          ]
        })
      : r.jsx(r.Fragment, {
          children: r.jsx('div', {
            className: 'p-2 mt-52 sm:mt-20 md:mt-20 container mx-auto',
            children: r.jsxs('div', {
              className: 'flex justify-center gap-14 sm:flex-col md:flex-col md:gap-0 sm:gap-0',
              children: [
                r.jsxs('div', {
                  children: [
                    r.jsx(P, {
                      children:
                        !m &&
                        r.jsx(h.div, {
                          className:
                            'sm:fixed md:fixed md:top-[21px] xs:top-[2px] sm:left-4 sm:ml-3 z-50',
                          initial: 'hidden',
                          animate: 'visible',
                          exit: 'hidden',
                          variants: E,
                          children: r.jsxs(oe, {
                            onClick: b,
                            className: 'mb-3',
                            rounded: !0,
                            children: [r.jsx(le, {}), ' Back']
                          })
                        })
                    }),
                    r.jsx(Oe, { name: e, animationControls: c, imageSrc: n.image, pokemonColor: o })
                  ]
                }),
                r.jsxs('div', {
                  className: 'mt-9',
                  children: [
                    r.jsx(h.h2, {
                      layoutId: `pokemon-name-${e}`,
                      className:
                        'capitalize text-3xl my-3 font-bold text-slate-950 dark:text-slate-100 mb-5',
                      children: e
                    }),
                    r.jsx(Se, { types: n.types, isNavigating: m, finishNavigation: l }),
                    r.jsx(ze, { abilities: n.abilities, isNavigating: m, finishNavigation: l }),
                    r.jsx(Ve, { baseStats: n.baseStats, isNavigating: m, finishNavigation: l })
                  ]
                })
              ]
            })
          })
        })
}
const We = ce('/pokemon-details/$name')({
  component: Qe,
  notFoundComponent: () => r.jsx('div', { children: 'Not Found' })
})
export { We as Route }