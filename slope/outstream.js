(function() {
    var m, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, da = ca(this), q = function(a, b) {
        if (b)
            a: {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    };
    q("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    });
    q("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }, fa = typeof Object.create == "function" ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ha = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if (typeof Reflect != "undefined" && Reflect.construct) {
            if (a())
                return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            e === void 0 && (e = c);
            e = fa(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), ia;
    if (typeof Object.setPrototypeOf == "function")
        ia = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var ma = {
                a: !0
            }
              , na = {};
            try {
                na.__proto__ = ma;
                la = na.a;
                break a
            } catch (a) {}
            la = !1
        }
        ia = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var oa = ia
      , v = function(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (oa)
            oa(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Qa = b.prototype
    }
      , x = function(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if (typeof a.length == "number")
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
      , pa = function(a) {
        if (!(a instanceof Array)) {
            a = x(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
      , ra = function(a) {
        return qa(a, a)
    }
      , qa = function(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a),
        Object.freeze(b));
        return a
    }
      , sa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , ta = typeof Object.assign == "function" ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    sa(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    q("Object.assign", function(a) {
        return a || ta
    });
    var ua = function() {
        this.A = !1;
        this.o = null;
        this.j = void 0;
        this.g = 1;
        this.I = this.l = 0;
        this.B = null
    }
      , wa = function(a) {
        if (a.A)
            throw new TypeError("Generator is already running");
        a.A = !0
    };
    ua.prototype.C = function(a) {
        this.j = a
    }
    ;
    var ya = function(a, b) {
        a.B = {
            Qe: b,
            Tg: !0
        };
        a.g = a.l || a.I
    };
    ua.prototype.return = function(a) {
        this.B = {
            return: a
        };
        this.g = this.I
    }
    ;
    var za = function(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
      , Aa = function(a, b) {
        a.g = b;
        a.l = 0
    }
      , Da = function(a) {
        a.l = 0;
        var b = a.B.Qe;
        a.B = null;
        return b
    }
      , Ea = function(a) {
        this.g = new ua;
        this.j = a
    }
      , Ha = function(a, b) {
        wa(a.g);
        var c = a.g.o;
        if (c)
            return Fa(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return Ga(a)
    }
      , Fa = function(a, b, c, d) {
        try {
            var e = b.call(a.g.o, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.g.A = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.g.o = null,
            ya(a.g, g),
            Ga(a)
        }
        a.g.o = null;
        d.call(a.g, f);
        return Ga(a)
    }
      , Ga = function(a) {
        for (; a.g.g; )
            try {
                var b = a.j(a.g);
                if (b)
                    return a.g.A = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.j = void 0,
                ya(a.g, c)
            }
        a.g.A = !1;
        if (a.g.B) {
            b = a.g.B;
            a.g.B = null;
            if (b.Tg)
                throw b.Qe;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , Ia = function(a) {
        this.next = function(b) {
            wa(a.g);
            a.g.o ? b = Fa(a, a.g.o.next, b, a.g.C) : (a.g.C(b),
            b = Ga(a));
            return b
        }
        ;
        this.throw = function(b) {
            wa(a.g);
            a.g.o ? b = Fa(a, a.g.o["throw"], b, a.g.C) : (ya(a.g, b),
            b = Ga(a));
            return b
        }
        ;
        this.return = function(b) {
            return Ha(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
      , Ja = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
      , Ka = function(a) {
        return Ja(new Ia(new Ea(a)))
    }
      , La = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    q("globalThis", function(a) {
        return a || da
    });
    q("Reflect", function(a) {
        return a ? a : {}
    });
    q("Reflect.construct", function() {
        return ha
    });
    q("Reflect.setPrototypeOf", function(a) {
        return a ? a : oa ? function(b, c) {
            try {
                return oa(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    q("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        b.prototype.j = function(g) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.B()
                })
            }
            this.g.push(g)
        }
        ;
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        }
        ;
        b.prototype.B = function() {
            for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.o(l)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        }
        ;
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0,
                    l.call(h, n))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.B)
            }
        }
        ;
        e.prototype.H = function(g) {
            if (g === this)
                this.B(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e)
                this.M(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = g != null;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.G(g) : this.A(g)
            }
        }
        ;
        e.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            typeof h == "function" ? this.P(h, g) : this.A(g)
        }
        ;
        e.prototype.B = function(g) {
            this.I(2, g)
        }
        ;
        e.prototype.A = function(g) {
            this.I(1, g)
        }
        ;
        e.prototype.I = function(g, h) {
            if (this.g != 0)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            this.g === 2 && this.K();
            this.L()
        }
        ;
        e.prototype.K = function() {
            var g = this;
            d(function() {
                if (g.D()) {
                    var h = da.console;
                    typeof h !== "undefined" && h.error(g.l)
                }
            }, 1)
        }
        ;
        e.prototype.D = function() {
            if (this.C)
                return !1;
            var g = da.CustomEvent
              , h = da.Event
              , k = da.dispatchEvent;
            if (typeof k === "undefined")
                return !0;
            typeof g === "function" ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        }
        ;
        e.prototype.L = function() {
            if (this.j != null) {
                for (var g = 0; g < this.j.length; ++g)
                    f.j(this.j[g]);
                this.j = null
            }
        }
        ;
        var f = new b;
        e.prototype.M = function(g) {
            var h = this.o();
            g.Cc(h.resolve, h.reject)
        }
        ;
        e.prototype.P = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }
        ;
        e.prototype.then = function(g, h) {
            function k(r, t) {
                return typeof r == "function" ? function(u) {
                    try {
                        l(r(u))
                    } catch (w) {
                        n(w)
                    }
                }
                : t
            }
            var l, n, p = new e(function(r, t) {
                l = r;
                n = t
            }
            );
            this.Cc(k(g, l), k(h, n));
            return p
        }
        ;
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        e.prototype.Cc = function(g, h) {
            function k() {
                switch (l.g) {
                case 1:
                    g(l.l);
                    break;
                case 2:
                    h(l.l);
                    break;
                default:
                    throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            this.j == null ? f.j(k) : this.j.push(k);
            this.C = !0
        }
        ;
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            }
            )
        }
        ;
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = x(g), n = l.next(); !n.done; n = l.next())
                    c(n.value).Cc(h, k)
            }
            )
        }
        ;
        e.all = function(g) {
            var h = x(g)
              , k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function p(u) {
                    return function(w) {
                        r[u] = w;
                        t--;
                        t == 0 && l(r)
                    }
                }
                var r = []
                  , t = 0;
                do
                    r.push(void 0),
                    t++,
                    c(k.value).Cc(p(r.length - 1), n),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    });
    q("Object.setPrototypeOf", function(a) {
        return a || oa
    });
    q("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    q("WeakMap", function(a) {
        function b() {}
        function c(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }
        function d(k) {
            if (!sa(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }
        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(n) {
                if (n instanceof b)
                    return n;
                Object.isExtensible(n) && d(n);
                return l(n)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , l = Object.seal({})
                  , n = new a([[k, 2], [l, 3]]);
                if (n.get(k) != 2 || n.get(l) != 3)
                    return !1;
                n.delete(k);
                n.set(l, 4);
                return !n.has(k) && n.get(l) == 4
            } catch (p) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0
          , h = function(k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = x(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        };
        h.prototype.set = function(k, l) {
            if (!c(k))
                throw Error("Invalid WeakMap key");
            d(k);
            if (!sa(k, f))
                throw Error("WeakMap key fail: " + k);
            k[f][this.g] = l;
            return this
        }
        ;
        h.prototype.get = function(k) {
            return c(k) && sa(k, f) ? k[f][this.g] : void 0
        }
        ;
        h.prototype.has = function(k) {
            return c(k) && sa(k, f) && sa(k[f], this.g)
        }
        ;
        h.prototype.delete = function(k) {
            return c(k) && sa(k, f) && sa(k[f], this.g) ? delete k[f][this.g] : !1
        }
        ;
        return h
    });
    q("Map", function(a) {
        if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(x([[h, "s"]]));
                if (k.get(h) != "s" || k.size != 1 || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || k.size != 2)
                    return !1;
                var l = k.entries()
                  , n = l.next();
                if (n.done || n.value[0] != h || n.value[1] != "s")
                    return !1;
                n = l.next();
                return n.done || n.value[0].x != 4 || n.value[1] != "t" || !l.next().done ? !1 : !0
            } catch (p) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(h) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (h) {
                h = x(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.ra ? l.ra.value = k : (l.ra = {
                next: this[1],
                bb: this[1].bb,
                head: this[1],
                key: h,
                value: k
            },
            l.list.push(l.ra),
            this[1].bb.next = l.ra,
            this[1].bb = l.ra,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ra && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.ra.bb.next = h.ra.next,
            h.ra.next.bb = h.ra.bb,
            h.ra.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].bb = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).ra
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).ra) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), n; !(n = l.next()).done; )
                n = n.value,
                h.call(k, n[1], n[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
            var l = k && typeof k;
            l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
            b.set(k, l)) : l = "p_" + k;
            var n = h[0][l];
            if (n && sa(h[0], l))
                for (h = 0; h < n.length; h++) {
                    var p = n[h];
                    if (k !== k && p.key !== p.key || k === p.key)
                        return {
                            id: l,
                            list: n,
                            index: h,
                            ra: p
                        }
                }
            return {
                id: l,
                list: n,
                index: -1,
                ra: void 0
            }
        }
          , e = function(h, k) {
            var l = h[1];
            return ea(function() {
                if (l) {
                    for (; l.head != h[1]; )
                        l = l.bb;
                    for (; l.next != l.head; )
                        return l = l.next,
                        {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.bb = h.next = h.head = h
        }
          , g = 0;
        return c
    });
    q("Set", function(a) {
        if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(x([c]));
                if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                    x: 4
                }) != d || d.size != 2)
                    return !1;
                var e = d.entries()
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.g = new Map;
            if (c) {
                c = x(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.g.entries()
        }
        ;
        b.prototype.values = function() {
            return this.g.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    var Ma = function(a, b, c) {
        if (a == null)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var Na = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    q("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Na(this, function(b, c) {
                return [b, c]
            })
        }
    });
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Na(this, function(b) {
                return b
            })
        }
    });
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ma(this, b, "startsWith");
            b += "";
            var e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    });
    q("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ma(this, null, "repeat");
            if (b < 0 || b > 1342177279)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    });
    q("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                sa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    q("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    });
    q("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    q("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    });
    q("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    q("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Ma(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    q("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                sa(b, d) && c.push(b[d]);
            return c
        }
    });
    q("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535
              , e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    q("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
                return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Na(this, function(b, c) {
                return c
            })
        }
    });
    q("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(Symbol.iterator in b))
                throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d)
                    throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    });
    var Oa = function(a, b) {
        a = a !== void 0 ? String(a) : " ";
        return b > 0 && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : ""
    };
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ma(this, null, "padStart");
            return Oa(c, b - d.length) + d
        }
    });
    q("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Ma(this, null, "padStart");
            return d + Oa(c, b - d.length)
        }
    });
    q("Promise.allSettled", function(a) {
        function b(d) {
            return {
                status: "fulfilled",
                value: d
            }
        }
        function c(d) {
            return {
                status: "rejected",
                reason: d
            }
        }
        return a ? a : function(d) {
            var e = this;
            d = Array.from(d, function(f) {
                return e.resolve(f).then(b, c)
            });
            return e.all(d)
        }
    });
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var Pa = Pa || {}
      , y = this || self
      , z = function(a, b, c) {
        a = a.split(".");
        c = c || y;
        for (var d; a.length && (d = a.shift()); )
            a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
      , Ta = function(a, b) {
        a = a.split(".");
        b = b || y;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            b == null)
                return null;
        return b
    }
      , Ua = function(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
      , Va = function(a) {
        var b = Ua(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }
      , Wa = function(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }
      , ab = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Xa) && a[Xa] || (a[Xa] = ++$a)
    }
      , bb = function(a) {
        a !== null && "removeAttribute"in a && a.removeAttribute(Xa);
        try {
            delete a[Xa]
        } catch (b) {}
    }
      , Xa = "closure_uid_" + (Math.random() * 1E9 >>> 0)
      , $a = 0
      , cb = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , db = function(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , eb = function(a, b, c) {
        eb = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? cb : db;
        return eb.apply(null, arguments)
    }
      , fb = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , jb = function() {
        return Date.now()
    }
      , lb = function(a) {
        return a
    }
      , mb = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Qa = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.wj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    function nb(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, nb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    mb(nb, Error);
    nb.prototype.name = "CustomError";
    var ob;
    var qb = function(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , rb = function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    };
    function sb(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    var tb = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
      , ub = function(a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , vb = function(a, b, c) {
        var d = c;
        rb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
      , wb = function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    };
    function zb(a, b) {
        b = Ab(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }
    function Ab(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function Bb(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; d--)
            if (d in c && b.call(void 0, c[d], d, a))
                return d;
        return -1
    }
    function Cb(a, b) {
        return qb(a, b) >= 0
    }
    function Db(a, b) {
        b = qb(a, b);
        var c;
        (c = b >= 0) && Eb(a, b);
        return c
    }
    function Eb(a, b) {
        return Array.prototype.splice.call(a, b, 1).length == 1
    }
    function Fb(a, b) {
        var c = 0;
        sb(a, function(d, e) {
            b.call(void 0, d, e, a) && Eb(a, e) && c++
        })
    }
    function Hb(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Ib(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Jb(a) {
        for (var b = 0, c = 0, d = {}; c < a.length; ) {
            var e = a[c++]
              , f = Wa(e) ? "o" + ab(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
            a[b++] = e)
        }
        a.length = b
    }
    function Kb(a, b) {
        a.sort(b || Lb)
    }
    function Lb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function Mb(a) {
        for (var b = [], c = 0; c < a; c++)
            b[c] = "";
        return b
    }
    ;var Nb = function(a) {
        var b = {};
        rb(a, function(c) {
            var d = c.event
              , e = b[d];
            b.hasOwnProperty(d) ? e !== null && (c.equals(e) || (b[d] = null)) : b[d] = c
        });
        Fb(a, function(c) {
            return b[c.event] === null
        })
    };
    var Ob = {
        NONE: 0,
        di: 1
    }
      , Pb = {
        ai: 0,
        Zi: 1,
        Yi: 2,
        aj: 3
    }
      , Qb = {
        Ef: "a",
        ci: "d",
        VIDEO: "v"
    };
    var Rb = function() {
        this.Z = 0;
        this.g = !1;
        this.j = -1;
        this.Ab = !1;
        this.ua = 0
    };
    Rb.prototype.isVisible = function() {
        return this.Ab ? this.Z >= .3 : this.Z >= .5
    }
    ;
    var Tb = {
        Zh: 0,
        gi: 1
    }
      , Ub = {
        668123728: 0,
        668123729: 1
    }
      , Vb = {
        44731964: 0,
        44731965: 1
    }
      , Wb = {
        NONE: 0,
        Li: 1,
        mi: 2
    }
      , Xb = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    function Yb(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Zb(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function $b(a) {
        var b = ac, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function bc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function cc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function ec(a, b) {
        var c = Va(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (a == null)
                return;
            a = a[d[c]]
        }
        return a
    }
    function fc(a, b) {
        return a !== null && b in a
    }
    function gc(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function hc(a) {
        var b = ic, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
    function jc(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function kc(a) {
        for (var b in a)
            delete a[b]
    }
    function lc(a, b, c) {
        return a !== null && b in a ? a[b] : c
    }
    var mc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function nc(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < mc.length; f++)
                c = mc[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var oc = function() {
        this.g = null;
        this.o = !1;
        this.l = null
    }
      , pc = function(a) {
        a.o = !0;
        return a
    }
      , qc = function(a, b) {
        a.l && rb(b, function(c) {
            c = a.l[c];
            c !== void 0 && a.j(c)
        })
    };
    oc.prototype.getValue = function() {
        return this.g
    }
    ;
    var rc = function(a) {
        oc.call(this);
        this.B = a
    };
    v(rc, oc);
    rc.prototype.j = function(a) {
        this.g === null && gc(this.B, a) && (this.g = a)
    }
    ;
    var sc = function() {
        oc.call(this)
    };
    v(sc, oc);
    sc.prototype.j = function(a) {
        this.g === null && typeof a === "number" && (this.g = a)
    }
    ;
    var tc = function() {
        oc.call(this)
    };
    v(tc, oc);
    tc.prototype.j = function(a) {
        this.g === null && typeof a === "string" && (this.g = a)
    }
    ;
    var uc = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    uc.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    }
    ;
    var vc = function(a, b, c) {
        a.g[b] || (a.g[b] = new rc(c));
        return a.g[b]
    }
      , wc = function(a) {
        a.g.queryid || (a.g.queryid = new tc)
    }
      , xc = function(a, b, c) {
        (a = a.g[b]) && a.j(c)
    }
      , yc = function(a, b) {
        if (fc(a.j, b))
            return a.j[b];
        if (a = a.g[b])
            return a.getValue()
    }
      , zc = function(a) {
        var b = {}
          , c = Zb(a.g, function(d) {
            return d.o
        });
        Yb(c, function(d, e) {
            d = a.j[e] !== void 0 ? String(a.j[e]) : d.o && d.g !== null ? String(d.g) : "";
            d.length > 0 && (b[e] = d)
        }, a);
        return b
    }
      , Ac = function(a) {
        a = zc(a);
        var b = [];
        Yb(a, function(c, d) {
            d in Object.prototype || typeof c != "undefined" && b.push([d, ":", c].join(""))
        });
        return b
    }
      , Cc = function() {
        var a = B().R
          , b = Bc();
        a.l && rb(bc(a.g), function(c) {
            return qc(c, b)
        })
    };
    var Dc = function(a) {
        vc(a, "od", Ob);
        pc(vc(a, "opac", Tb));
        pc(vc(a, "sbeos", Tb));
        pc(vc(a, "prf", Tb));
        pc(vc(a, "mwt", Tb));
        vc(a, "iogeo", Tb)
    };
    var Ec = document
      , C = window;
    var Fc, Gc = Ta("CLOSURE_FLAGS"), Hc = Gc && Gc[610401301];
    Fc = Hc != null ? Hc : !1;
    function Ic(a, b) {
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c
    }
    function Jc(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    var Kc = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , Lc = /&/g
      , Mc = /</g
      , Nc = />/g
      , Oc = /"/g
      , Pc = /'/g
      , Qc = /\x00/g
      , Rc = /[\x00&<>"']/;
    function Sc(a, b) {
        return a.indexOf(b) != -1
    }
    function Tc(a, b) {
        return Sc(a.toLowerCase(), b.toLowerCase())
    }
    function Uc(a, b) {
        var c = 0;
        a = Kc(String(a)).split(".");
        b = Kc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (f[0].length == 0 && g[0].length == 0)
                    break;
                c = Vc(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || Vc(f[2].length == 0, g[2].length == 0) || Vc(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (c == 0)
        }
        return c
    }
    function Vc(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;function Wc() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Xc, Yc = y.navigator;
    Xc = Yc ? Yc.userAgentData || null : null;
    function Zc(a) {
        if (!Fc || !Xc)
            return !1;
        for (var b = 0; b < Xc.brands.length; b++) {
            var c = Xc.brands[b].brand;
            if (c && Sc(c, a))
                return !0
        }
        return !1
    }
    function D(a) {
        return Sc(Wc(), a)
    }
    ;function $c() {
        return Fc ? !!Xc && Xc.brands.length > 0 : !1
    }
    function ad() {
        return $c() ? !1 : D("Opera")
    }
    function bd() {
        return $c() ? !1 : D("Trident") || D("MSIE")
    }
    function cd() {
        return D("Firefox") || D("FxiOS")
    }
    function dd() {
        return $c() ? Zc("Chromium") : (D("Chrome") || D("CriOS")) && !($c() ? 0 : D("Edge")) || D("Silk")
    }
    ;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    var ed = globalThis.trustedTypes, fd;
    function gd() {
        var a = null;
        if (!ed)
            return a;
        try {
            var b = function(c) {
                return c
            };
            a = ed.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }
    function hd() {
        fd === void 0 && (fd = gd());
        return fd
    }
    ;var id = function(a) {
        this.g = a
    };
    id.prototype.toString = function() {
        return this.g + ""
    }
    ;
    function jd(a) {
        var b = hd();
        a = b ? b.createScriptURL(a) : a;
        return new id(a)
    }
    ;var kd = function(a) {
        this.g = a
    };
    kd.prototype.toString = function() {
        return this.g
    }
    ;
    function ld(a) {
        return new kd(a)
    }
    var md = ld("about:invalid#zClosurez");
    var nd = function(a) {
        this.Yg = a
    };
    function od(a) {
        return new nd(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var pd = [od("data"), od("http"), od("https"), od("mailto"), od("ftp"), new nd(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function qd(a) {
        var b = window;
        if (typeof MediaSource !== "undefined" && a instanceof MediaSource || typeof b.ManagedMediaSource !== "undefined" && a instanceof b.ManagedMediaSource)
            return ld(URL.createObjectURL(a));
        b = a.type;
        b.toLowerCase() === "application/octet-stream" ? b = !0 : (b = b.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
        b = (b == null ? void 0 : b.length) === 2 && (/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:3gpp|avi|mpeg|mpg|mp4|ogg|webm|x-flv|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/[\w-]+$/i.test(b[1])));
        if (!b)
            throw Error("");
        return ld(URL.createObjectURL(a))
    }
    var rd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var sd = function(a) {
        this.g = a
    };
    sd.prototype.toString = function() {
        return this.g + ""
    }
    ;
    function td(a) {
        var b = hd();
        a = b ? b.createHTML(a) : a;
        return new sd(a)
    }
    function ud(a) {
        if (a instanceof sd)
            return a.g;
        throw Error("");
    }
    ;function vd(a, b) {
        if (b instanceof id)
            b = b.g;
        else
            throw Error("");
        a.src = b;
        var c;
        b = a.ownerDocument;
        b = b === void 0 ? document : b;
        var d;
        b = (d = (c = b).querySelector) == null ? void 0 : d.call(c, "script[nonce]");
        (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") && a.setAttribute("nonce", c)
    }
    ;function wd(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName))
            throw Error("");
        a.innerHTML = ud(b)
    }
    ;function xd(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;var yd = function(a) {
        var b = []
          , c = []
          , d = {}
          , e = function(f, g) {
            var h = g + "  ";
            try {
                if (f === void 0)
                    b.push("undefined");
                else if (f === null)
                    b.push("NULL");
                else if (typeof f === "string")
                    b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                else if (typeof f === "function")
                    b.push(String(f).replace(/\n/g, "\n" + g));
                else if (Wa(f)) {
                    f[Xa] || c.push(f);
                    var k = ab(f);
                    if (d[k])
                        b.push("*** reference loop detected (id=" + k + ") ***");
                    else {
                        d[k] = !0;
                        b.push("{");
                        for (var l in f)
                            typeof f[l] !== "function" && (b.push("\n"),
                            b.push(h),
                            b.push(l + " = "),
                            e(f[l], h));
                        b.push("\n" + g + "}");
                        delete d[k]
                    }
                } else
                    b.push(f)
            } catch (n) {
                b.push("*** " + n + " ***")
            }
        };
        e(a, "");
        for (a = 0; a < c.length; a++)
            bb(c[a]);
        return b.join("")
    };
    function zd(a, b) {
        a.write(ud(b))
    }
    ;var Ad = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
      , Bd = function(a) {
        Rc.test(a) && (a.indexOf("&") != -1 && (a = a.replace(Lc, "&amp;")),
        a.indexOf("<") != -1 && (a = a.replace(Mc, "&lt;")),
        a.indexOf(">") != -1 && (a = a.replace(Nc, "&gt;")),
        a.indexOf('"') != -1 && (a = a.replace(Oc, "&quot;")),
        a.indexOf("'") != -1 && (a = a.replace(Pc, "&#39;")),
        a.indexOf("\x00") != -1 && (a = a.replace(Qc, "&#0;")));
        return a
    }
      , Cd = function(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }
      , Dd = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
      , Ed = function(a) {
        return a == null ? "" : String(a)
    }
      , Fd = Math.random() * 2147483648 | 0
      , Gd = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , Hd = function() {
        return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
    }
      , Id = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
      , Jd = function(a) {
        isFinite(a) && (a = String(a));
        return typeof a === "string" ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    function Kd() {
        return Fc && Xc && Xc.platform ? Xc.platform === "Android" : D("Android")
    }
    function Ld() {
        return D("iPhone") && !D("iPod") && !D("iPad")
    }
    ;var Md = function(a) {
        Md[" "](a);
        return a
    };
    Md[" "] = function() {}
    ;
    var Nd = function(a, b) {
        try {
            return Md(a[b]),
            !0
        } catch (c) {}
        return !1
    }
      , Pd = function(a) {
        var b = Od;
        return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
    };
    var Qd = ad(), Rd = bd(), Sd = D("Edge"), Td = D("Gecko") && !(Tc(Wc(), "WebKit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"), Ud = Tc(Wc(), "WebKit") && !D("Edge"), Vd = Fc && Xc && Xc.platform ? Xc.platform === "macOS" : D("Macintosh"), Wd = Kd(), Xd = Ld(), Yd = D("iPad"), Zd = D("iPod"), $d = Ld() || D("iPad") || D("iPod"), de;
    a: {
        var ee = ""
          , fe = function() {
            var a = Wc();
            if (Td)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Sd)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Rd)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ud)
                return /WebKit\/(\S+)/.exec(a);
            if (Qd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        fe && (ee = fe ? fe[1] : "");
        if (Rd) {
            var ge, he = y.document;
            ge = he ? he.documentMode : void 0;
            if (ge != null && ge > parseFloat(ee)) {
                de = String(ge);
                break a
            }
        }
        de = ee
    }
    var ie = de
      , Od = {}
      , je = function() {
        return Pd(function() {
            return Uc(ie, 8) >= 0
        })
    };
    var ke = cd()
      , le = D("Android") && !(dd() || cd() || ad() || D("Silk"))
      , me = dd();
    var ne = !Rd && !(D("Safari") && !(dd() || ($c() ? 0 : D("Coast")) || ad() || ($c() ? 0 : D("Edge")) || ($c() ? Zc("Microsoft Edge") : D("Edg/")) || ($c() ? Zc("Opera") : D("OPR")) || cd() || D("Silk") || D("Android")));
    var oe = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    m = oe.prototype;
    m.equals = function(a) {
        return a instanceof oe && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    }
    ;
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    }
    ;
    var pe = function(a, b) {
        this.width = a;
        this.height = b
    }
      , qe = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    m = pe.prototype;
    m.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    m.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    }
    ;
    function re(a) {
        var b = La.apply(1, arguments);
        if (b.length === 0)
            return jd(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return jd(c)
    }
    ;var ue = function(a) {
        return a ? new se(te(a)) : ob || (ob = new se)
    }
      , ve = function(a) {
        var b = document;
        return typeof a === "string" ? b.getElementById(a) : a
    }
      , xe = function(a, b) {
        Yb(b, function(c, d) {
            d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : we.hasOwnProperty(d) ? a.setAttribute(we[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
        })
    }
      , we = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , ye = function(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new pe(a.clientWidth,a.clientHeight)
    }
      , ze = function(a) {
        return a ? a.defaultView : window
    }
      , Ce = function(a, b, c) {
        var d = arguments
          , e = document
          , f = d[1]
          , g = Ae(e, String(d[0]));
        f && (typeof f === "string" ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : xe(g, f));
        d.length > 2 && Be(e, g, d, 2);
        return g
    }
      , Be = function(a, b, c, d) {
        function e(h) {
            h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Va(f) || Wa(f) && f.nodeType > 0)
                e(f);
            else {
                a: {
                    if (f && typeof f.length == "number") {
                        if (Wa(f)) {
                            var g = typeof f.item == "function" || typeof f.item == "string";
                            break a
                        }
                        if (typeof f === "function") {
                            g = typeof f.item == "function";
                            break a
                        }
                    }
                    g = !1
                }
                rb(g ? Ib(f) : f, e)
            }
        }
    }
      , Ae = function(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }
      , De = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
      , Ee = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && b.nodeType == 1)
            return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined")
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , te = function(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
      , Fe = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? ze(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
      , Ge = function(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
      , se = function(a) {
        this.g = a || y.document || document
    };
    se.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    var He = function(a) {
        var b = a.g;
        a = b.scrollingElement ? b.scrollingElement : Ud || b.compatMode != "CSS1Compat" ? b.body || b.documentElement : b.documentElement;
        b = b.defaultView;
        return new oe(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    };
    se.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    se.prototype.append = function(a, b) {
        Be(te(a), a, arguments, 1)
    }
    ;
    se.prototype.canHaveChildren = function(a) {
        if (a.nodeType != 1)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    se.prototype.contains = Ee;
    var Ie = function() {
        this.g = this.rb = null
    };
    var Je = function() {};
    Je.prototype.now = function() {
        return 0
    }
    ;
    Je.prototype.j = function() {
        return 0
    }
    ;
    Je.prototype.l = function() {
        return 0
    }
    ;
    Je.prototype.g = function() {
        return 0
    }
    ;
    var Le = function() {
        if (!Ke())
            throw Error();
    };
    v(Le, Je);
    var Ke = function() {
        return !(!C || !C.performance)
    };
    Le.prototype.now = function() {
        return Ke() && C.performance.now ? C.performance.now() : Je.prototype.now.call(this)
    }
    ;
    Le.prototype.j = function() {
        return Ke() && C.performance.memory ? C.performance.memory.totalJSHeapSize || 0 : Je.prototype.j.call(this)
    }
    ;
    Le.prototype.l = function() {
        return Ke() && C.performance.memory ? C.performance.memory.usedJSHeapSize || 0 : Je.prototype.l.call(this)
    }
    ;
    Le.prototype.g = function() {
        return Ke() && C.performance.memory ? C.performance.memory.jsHeapSizeLimit || 0 : Je.prototype.g.call(this)
    }
    ;
    var Me = function() {}
      , Ne = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
      , Oe = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
      , Pe = function(a) {
        var b = 0
          , c = !1
          , d = []
          , e = function() {
            b = 0;
            c && (c = !1,
            f())
        }
          , f = function() {
            b = y.setTimeout(e, 1E3);
            var g = d;
            d = [];
            a.apply(void 0, g)
        };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var Qe = Ne(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            y.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function Re(a) {
        return a ? a.passive && Qe() ? a : a.capture || !1 : !1
    }
    function Se(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, Re(d)),
        !0) : !1
    }
    function Te(a, b, c) {
        typeof a.removeEventListener === "function" && a.removeEventListener(b, c, Re())
    }
    ;function Ue(a) {
        if (a.prerendering)
            return 3;
        var b;
        return (b = {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""]) != null ? b : 0
    }
    function Ve(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    ;var We = function() {};
    We.prototype.isVisible = function() {
        return Ue(Ec) === 1
    }
    ;
    function Xe(a) {
        return a
    }
    function Ye(a) {
        a.Hj = !0;
        return a
    }
    ;var Ze = Ye(function(a) {
        return typeof a === "number"
    })
      , $e = Ye(function(a) {
        return typeof a === "string"
    })
      , af = Ye(function(a) {
        return typeof a === "boolean"
    })
      , bf = Ye(function(a) {
        return !!a && (typeof a === "object" || typeof a === "function")
    });
    function cf() {
        return df(Ye(function(a, b) {
            return a === void 0 ? !0 : $e(a, b)
        }))
    }
    function df(a) {
        a.Vg = !0;
        return a
    }
    ;var ef, ff = 64;
    function gf() {
        try {
            return ef != null || (ef = new Uint32Array(64)),
            ff >= 64 && (crypto.getRandomValues(ef),
            ff = 0),
            ef[ff++]
        } catch (a) {
            return Math.floor(Math.random() * 4294967296)
        }
    }
    ;function hf(a) {
        var b = window;
        if (!Ze(b.goog_pvsid))
            try {
                var c = gf() + (gf() & 2097151) * 4294967296;
                Object.defineProperty(b, "goog_pvsid", {
                    value: c,
                    configurable: !1
                })
            } catch (d) {
                a.qb({
                    methodName: 784,
                    Wb: d
                })
            }
        b = Number(b.goog_pvsid);
        (!b || b <= 0) && a.qb({
            methodName: 784,
            Wb: Error("Invalid correlator, " + b)
        });
        return b || -1
    }
    ;var jf = function() {
        if (!y.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            var c = function() {};
            y.addEventListener("test", c, b);
            y.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var lf = function() {
        return Fc && Xc ? Xc.mobile : !kf() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile"))
    }
      , kf = function() {
        return Fc && Xc ? !Xc.mobile && (D("iPad") || D("Android") || D("Silk")) : D("iPad") || D("Android") && !D("Mobile") || D("Silk")
    };
    var mf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , nf = function(a) {
        var b = a.match(mf);
        a = b[1];
        var c = b[3];
        b = b[4];
        var d = "";
        a && (d += a + ":");
        c && (d = d + "//" + c,
        b && (d += ":" + b));
        return d
    }
      , of = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (d >= 0) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Ad(e) : "")
            }
        }
    }
      , pf = /#|$/
      , qf = function(a, b) {
        var c = a.search(pf);
        a: {
            var d = 0;
            for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e),
                    !f || f == 61 || f == 38 || f == 35)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0)
            return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c)
            e = c;
        d += b.length + 1;
        return Ad(a.slice(d, e !== -1 ? e : 0))
    };
    var rf = function(a) {
        try {
            return !!a && a.location.href != null && Nd(a, "foo")
        } catch (b) {
            return !1
        }
    }
      , sf = function() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
      , tf = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , uf = function(a) {
        var b = a.length;
        if (b == 0)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    };
    function vf(a) {
        var b, c;
        return (c = (b = /https?:\/\/[^\/]+/.exec(a)) == null ? void 0 : b[0]) != null ? c : ""
    }
    var wf = function() {
        var a = y;
        try {
            for (var b = null; b != a; b = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
                }
        } catch (c) {}
        return !0
    }
      , xf = function(a) {
        a = a && a.toString && a.toString();
        return typeof a === "string" && Sc(a, "[native code]")
    }
      , yf = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , zf = function(a, b) {
        for (var c = 0; c < 50; ++c) {
            if (yf(a, b))
                return a;
            a: {
                try {
                    var d = a.parent;
                    if (d && d != a) {
                        var e = d;
                        break a
                    }
                } catch (f) {}
                e = null
            }
            if (!(a = e))
                break
        }
        return null
    }
      , Af = function() {
        return hf({
            qb: function() {}
        })
    }
      , Bf = function(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
      , Cf = function(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            rf(a) && (b = a);
        return b
    };
    var Df = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)")
      , Hf = function(a) {
        a = a || Ef();
        for (var b = new Ff(y.location.href,!1), c = null, d = a.length - 1, e = d; e >= 0; --e) {
            var f = a[e];
            !c && Df.test(f.url) && (c = f);
            if (f.url && !f.g) {
                b = f;
                break
            }
        }
        e = null;
        f = a.length && a[d].url;
        b.depth !== 0 && f && (e = a[d]);
        return new Gf(b,e,c)
    }
      , Ef = function() {
        var a = y
          , b = []
          , c = null;
        do {
            var d = a;
            if (rf(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new Ff(e || ""));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d !== a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = y;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length === b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.g = !0);
        return b
    }
      , Gf = function(a, b, c) {
        this.g = a;
        this.j = b;
        this.l = c
    }
      , Ff = function(a, b) {
        this.url = a;
        this.g = !!b;
        this.depth = null
    };
    var If = function() {
        this.l = "&";
        this.j = {};
        this.o = 0;
        this.g = []
    }
      , Jf = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
      , Lf = function(a, b, c, d, e) {
        var f = [];
        tf(a, function(g, h) {
            (g = Kf(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
      , Kf = function(a, b, c, d, e) {
        if (a == null)
            return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0),
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Kf(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object")
            return e || (e = 0),
            e < 2 ? encodeURIComponent(Lf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
      , Mf = function(a, b, c) {
        a.g.push(b);
        a.j[b] = c
    }
      , Nf = function(a, b, c, d) {
        a.g.push(b);
        a.j[b] = Jf(c, d)
    }
      , Pf = function(a, b, c, d) {
        b = b + "//" + c + d;
        var e = Of(a) - d.length;
        if (e < 0)
            return "";
        a.g.sort(function(n, p) {
            return n - p
        });
        d = null;
        c = "";
        for (var f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.j[g], k = 0; k < h.length; k++) {
                if (!e) {
                    d = d == null ? g : d;
                    break
                }
                var l = Lf(h[k], a.l, ",$");
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.l;
                        break
                    }
                    d = d == null ? g : d
                }
            }
        a = "";
        d != null && (a = "" + c + "trn=" + d);
        return b + a
    }
      , Of = function(a) {
        var b = 1, c;
        for (c in a.j)
            c.length > b && (b = c.length);
        return 3997 - b - a.l.length - 1
    };
    var Qf = function(a, b) {
        this.g = a;
        this.depth = b
    }
      , Sf = function() {
        var a = Ef()
          , b = Math.max(a.length - 1, 0)
          , c = Hf(a);
        a = c.g;
        var d = c.j
          , e = c.l
          , f = [];
        c = function(h, k) {
            return h == null ? k : h
        }
        ;
        e && f.push(new Qf([e.url, e.g ? 2 : 0],c(e.depth, 1)));
        d && d != e && f.push(new Qf([d.url, 2],0));
        a.url && a != e && f.push(new Qf([a.url, 0],c(a.depth, b)));
        var g = ub(f, function(h, k) {
            return f.slice(0, f.length - k)
        });
        !a.url || (e || d) && a != e || (d = vf(a.url)) && g.push([new Qf([d, 1],c(a.depth, b))]);
        g.push([]);
        return ub(g, function(h) {
            return Rf(b, h)
        })
    };
    function Rf(a, b) {
        var c = vb(b, function(e, f) {
            return Math.max(e, f.depth)
        }, -1)
          , d = Mb(c + 2);
        d[0] = a;
        rb(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    function Tf() {
        var a = a === void 0 ? Sf() : a;
        return a.map(function(b) {
            return Kf(b)
        })
    }
    ;function Uf(a, b, c, d, e) {
        Vf(a, b, c === void 0 ? null : c, d === void 0 ? !1 : d, e === void 0 ? !1 : e)
    }
    function Vf(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Bf("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && Db(a.google_image_requests, f);
                Te(f, "load", g);
                Te(f, "error", g)
            };
            Se(f, "load", g);
            Se(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    function Wf(a, b) {
        var c = c === void 0 ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        tf(a, function(e, f) {
            if (e || e === 0)
                d += "&" + f + "=" + encodeURIComponent(String(e))
        });
        Xf(d, c)
    }
    function Xf(a, b) {
        var c = window;
        b = b === void 0 ? !1 : b;
        var d = d === void 0 ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        },
        d && (b.mode = "cors",
        "setAttributionReporting"in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : Uf(c, a, void 0, b, d)
    }
    ;var E = function(a) {
        var b = "zb";
        if (a.zb && a.hasOwnProperty(b))
            return a.zb;
        b = new a;
        return a.zb = b
    };
    var Yf = function() {
        this.j = new We;
        this.g = Ke() ? new Le : new Je
    }
      , $f = function() {
        Zf();
        var a = C.document;
        return !!(a && a.body && a.body.getBoundingClientRect && typeof C.setInterval === "function" && typeof C.clearInterval === "function" && typeof C.setTimeout === "function" && typeof C.clearTimeout === "function")
    };
    Yf.prototype.setInterval = function(a, b) {
        return C.setInterval(a, b)
    }
    ;
    Yf.prototype.clearInterval = function(a) {
        C.clearInterval(a)
    }
    ;
    Yf.prototype.setTimeout = function(a, b) {
        return C.setTimeout(a, b)
    }
    ;
    Yf.prototype.clearTimeout = function(a) {
        C.clearTimeout(a)
    }
    ;
    var ag = function() {
        Zf();
        return Tf()
    };
    var bg = function() {}
      , Zf = function() {
        var a = E(bg);
        if (!a.g) {
            if (!C)
                throw Error("Context has not been set and window is undefined.");
            a.g = E(Yf)
        }
        return a.g
    };
    var cg, dg = typeof String.prototype.isWellFormed === "function", eg = typeof TextEncoder !== "undefined";
    function fg(a) {
        var b = !1;
        b = b === void 0 ? !1 : b;
        if (eg) {
            if (b && (dg ? !a.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))
                throw Error("Found an unpaired surrogate");
            a = (cg || (cg = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (f < 128)
                    d[c++] = f;
                else {
                    if (f < 2048)
                        d[c++] = f >> 6 | 192;
                    else {
                        if (f >= 55296 && f <= 57343) {
                            if (f <= 56319 && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (g >= 56320 && g <= 57343) {
                                    f = (f - 55296) * 1024 + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else
                                    e--
                            }
                            if (b)
                                throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    }
    ;function gg(a) {
        y.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var hg = {}
      , ig = null
      , kg = function(a, b) {
        b === void 0 && (b = 0);
        jg();
        b = hg[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = "" + l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
        case 2:
            l = a[e + 1],
            k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }
      , mg = function(a) {
        var b = [];
        lg(a, function(c) {
            b.push(c)
        });
        return b
    }
      , lg = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , n = ig[l];
                if (n != null)
                    return n;
                if (!Jc(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        jg();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (h === 64 && e === -1)
                break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2),
            h != 64 && b(g << 6 & 192 | h))
        }
    }
      , jg = function() {
        if (!ig) {
            ig = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                hg[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    ig[f] === void 0 && (ig[f] = e)
                }
            }
        }
    };
    var ng = void 0;
    function og(a) {
        a = Error(a);
        xd(a, "warning");
        return a
    }
    ;var pg = typeof Symbol === "function" && typeof Symbol() === "symbol";
    function qg(a, b, c) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
    }
    var rg = qg("jas", void 0, !0)
      , sg = qg(void 0, "0di")
      , tg = qg(void 0, "0actk")
      , ug = qg("m_m", "Jj", !0)
      , vg = qg(void 0, "vps");
    var wg = {
        Qg: {
            value: 0,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }, xg = Object.defineProperties, F = pg ? rg : "Qg", yg, zg = [];
    Ag(zg, 7);
    yg = Object.freeze(zg);
    function Bg(a, b) {
        pg || F in a || xg(a, wg);
        a[F] |= b
    }
    function Ag(a, b) {
        pg || F in a || xg(a, wg);
        a[F] = b
    }
    function Cg(a) {
        if (4 & a)
            return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }
    function Dg(a) {
        Bg(a, 34);
        return a
    }
    function Eg(a) {
        Bg(a, 32);
        return a
    }
    ;var Fg = {};
    function Gg(a, b) {
        return b === void 0 ? a.g !== Hg && !!(2 & (a.F[F] | 0)) : !!(2 & b) && a.g !== Hg
    }
    var Hg = {}
      , Ig = function(a, b, c) {
        this.g = a;
        this.j = b;
        this.l = c
    };
    Ig.prototype.next = function() {
        var a = this.g.next();
        a.done || (a.value = this.j.call(this.l, a.value));
        return a
    }
    ;
    Ig.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    var Jg = Object.freeze({});
    function Kg(a, b, c) {
        b = b & 128 ? 0 : -1;
        var d = a.length, e;
        if (e = !!d)
            e = a[d - 1],
            e = e != null && typeof e === "object" && e.constructor === Object;
        for (var f = d + (e ? -1 : 0), g = 0; g < f; g++)
            c(g - b, a[g]);
        if (e) {
            a = a[d - 1];
            for (var h in a)
                !isNaN(h) && c(+h, a[h])
        }
    }
    ;function Lg() {
        return typeof BigInt === "function"
    }
    ;var Mg = typeof y.BigInt === "function" && typeof y.BigInt(0) === "bigint";
    function Ng(a) {
        var b = a;
        if ($e(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
                throw Error(String(b));
        } else if (Ze(b) && !Number.isSafeInteger(b))
            throw Error(String(b));
        return Mg ? BigInt(a) : a = af(a) ? a ? "1" : "0" : $e(a) ? a.trim() || "0" : String(a)
    }
    var Tg = Ye(function(a) {
        return Mg ? a >= Og && a <= Pg : a[0] === "-" ? Qg(a, Rg) : Qg(a, Sg)
    })
      , Rg = Number.MIN_SAFE_INTEGER.toString()
      , Og = Mg ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
      , Sg = Number.MAX_SAFE_INTEGER.toString()
      , Pg = Mg ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    function Qg(a, b) {
        if (a.length > b.length)
            return !1;
        if (a.length < b.length || a === b)
            return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c]
              , e = b[c];
            if (d > e)
                return !1;
            if (d < e)
                return !0
        }
    }
    ;var Ug = 0, Vg = 0, Wg;
    function Xg(a) {
        var b = a >>> 0;
        Ug = b;
        Vg = (a - b) / 4294967296 >>> 0
    }
    function Yg(a) {
        if (a < 0) {
            Xg(0 - a);
            var b = x(Zg(Ug, Vg));
            a = b.next().value;
            b = b.next().value;
            Ug = a >>> 0;
            Vg = b >>> 0
        } else
            Xg(a)
    }
    function $g(a, b) {
        var c = b * 4294967296 + (a >>> 0);
        return Number.isSafeInteger(c) ? c : ah(a, b)
    }
    function ah(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151)
            var c = "" + (4294967296 * b + a);
        else
            Lg() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0,
            a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0,
            c %= 1E7),
            c = b + bh(c) + bh(a));
        return c
    }
    function bh(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function ch() {
        var a = Ug
          , b = Vg;
        b & 2147483648 ? Lg() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = x(Zg(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + ah(a, b)) : a = ah(a, b);
        return a
    }
    function dh(a) {
        if (a.length < 16)
            Yg(Number(a));
        else if (Lg())
            a = BigInt(a),
            Ug = Number(a & BigInt(4294967295)) >>> 0,
            Vg = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            Vg = Ug = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
            e += 6)
                d = Number(a.slice(d, e)),
                Vg *= 1E6,
                Ug = Ug * 1E6 + d,
                Ug >= 4294967296 && (Vg += Math.trunc(Ug / 4294967296),
                Vg >>>= 0,
                Ug >>>= 0);
            b && (b = x(Zg(Ug, Vg)),
            a = b.next().value,
            b = b.next().value,
            Ug = a,
            Vg = b)
        }
    }
    function Zg(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;function eh(a) {
        return Array.prototype.slice.call(a)
    }
    ;var fh = typeof BigInt === "function" ? BigInt.asIntN : void 0
      , gh = typeof BigInt === "function" ? BigInt.asUintN : void 0
      , hh = Number.isSafeInteger
      , ih = Number.isFinite
      , jh = Math.trunc;
    function kh(a) {
        if (a == null || typeof a === "number")
            return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity")
            return Number(a)
    }
    function lh(a) {
        if (typeof a !== "boolean")
            throw Error("Expected boolean but got " + Ua(a) + ": " + a);
        return a
    }
    function mh(a) {
        if (a == null || typeof a === "boolean")
            return a;
        if (typeof a === "number")
            return !!a
    }
    var nh = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function oh(a) {
        switch (typeof a) {
        case "bigint":
            return !0;
        case "number":
            return ih(a);
        case "string":
            return nh.test(a);
        default:
            return !1
        }
    }
    function ph(a) {
        if (!ih(a))
            throw og("enum");
        return a | 0
    }
    function qh(a) {
        return a == null ? a : ih(a) ? a | 0 : void 0
    }
    function rh(a) {
        if (typeof a !== "number")
            throw og("int32");
        if (!ih(a))
            throw og("int32");
        return a | 0
    }
    function sh(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return ih(a) ? a | 0 : void 0
    }
    function th(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return ih(a) ? a >>> 0 : void 0
    }
    function uh(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!oh(a))
            throw og("int64");
        var c = typeof a;
        switch (b) {
        case 512:
            switch (c) {
            case "string":
                return vh(a);
            case "bigint":
                return String(fh(64, a));
            default:
                return wh(a)
            }
        case 1024:
            switch (c) {
            case "string":
                return xh(a);
            case "bigint":
                return Ng(fh(64, a));
            default:
                return yh(a)
            }
        case 0:
            switch (c) {
            case "string":
                return vh(a);
            case "bigint":
                return Ng(fh(64, a));
            default:
                return zh(a)
            }
        default:
            throw Error("Unknown format requested type for int64");
        }
    }
    function Ah(a) {
        return a == null ? a : uh(a)
    }
    function Bh(a) {
        if (a[0] === "-")
            return !1;
        var b = a.length;
        return b < 20 ? !0 : b === 20 && Number(a.substring(0, 6)) < 184467
    }
    function Ch(a) {
        var b = a.length;
        return a[0] === "-" ? b < 20 ? !0 : b === 20 && Number(a.substring(0, 7)) > -922337 : b < 19 ? !0 : b === 19 && Number(a.substring(0, 6)) < 922337
    }
    function Dh(a) {
        if (a < 0) {
            Yg(a);
            var b = ah(Ug, Vg);
            a = Number(b);
            return hh(a) ? a : b
        }
        b = String(a);
        if (Bh(b))
            return b;
        Yg(a);
        return $g(Ug, Vg)
    }
    function Eh(a) {
        if (Ch(a))
            return a;
        dh(a);
        return ch()
    }
    function zh(a) {
        a = jh(a);
        if (!hh(a)) {
            Yg(a);
            var b = Ug
              , c = Vg;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                b == 0 && (c = c + 1 >>> 0);
            b = $g(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }
    function wh(a) {
        a = jh(a);
        if (hh(a))
            a = String(a);
        else {
            var b = String(a);
            Ch(b) ? a = b : (Yg(a),
            a = ch())
        }
        return a
    }
    function vh(a) {
        var b = jh(Number(a));
        if (hh(b))
            return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Eh(a)
    }
    function xh(a) {
        var b = jh(Number(a));
        if (hh(b))
            return Ng(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Lg() ? Ng(fh(64, BigInt(a))) : Ng(Eh(a))
    }
    function yh(a) {
        return hh(a) ? Ng(zh(a)) : Ng(wh(a))
    }
    function Fh(a) {
        if (a == null)
            return a;
        var b = typeof a;
        if (b === "bigint")
            return String(fh(64, a));
        if (oh(a)) {
            if (b === "string")
                return vh(a);
            if (b === "number")
                return zh(a)
        }
    }
    function Gh(a) {
        if (a == null)
            return a;
        var b = typeof a;
        if (b === "bigint")
            return String(gh(64, a));
        if (oh(a)) {
            if (b === "string")
                return b = jh(Number(a)),
                hh(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."),
                b !== -1 && (a = a.substring(0, b)),
                Bh(a) || (dh(a),
                a = ah(Ug, Vg))),
                a;
            if (b === "number")
                return a = jh(a),
                a >= 0 && hh(a) ? a : Dh(a)
        }
    }
    function Hh(a) {
        if (typeof a !== "string")
            throw Error();
        return a
    }
    function Ih(a) {
        if (a != null && typeof a !== "string")
            throw Error();
        return a
    }
    function Nh(a) {
        return a == null || typeof a === "string" ? a : void 0
    }
    function Oh(a, b, c, d) {
        if (a != null && typeof a === "object" && a[ug] === Fg)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? ((a = b[sg]) || (a = new b,
            Dg(a.F),
            a = b[sg] = a),
            b = a) : b = new b : b = void 0,
            b;
        c = a[F] | 0;
        d = c | d & 32 | d & 2;
        d !== c && Ag(a, d);
        return new b(a)
    }
    function Ph(a, b, c) {
        if (b)
            return lh(a);
        var d;
        return (d = mh(a)) != null ? d : c ? !1 : void 0
    }
    function Qh(a, b, c) {
        if (b)
            return Hh(a);
        var d;
        return (d = Nh(a)) != null ? d : c ? "" : void 0
    }
    ;var Rh = {};
    function Sh(a) {
        return a
    }
    ;var Th = {}
      , Uh = function() {
        try {
            var a = function() {
                return ha(Map, [], this.constructor)
            };
            v(a, Map);
            Md(new a);
            return !1
        } catch (b) {
            return !0
        }
    }()
      , Vh = function() {
        this.g = new Map
    };
    m = Vh.prototype;
    m.get = function(a) {
        return this.g.get(a)
    }
    ;
    m.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    }
    ;
    m.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    }
    ;
    m.clear = function() {
        this.g.clear();
        this.size = this.g.size
    }
    ;
    m.has = function(a) {
        return this.g.has(a)
    }
    ;
    m.entries = function() {
        return this.g.entries()
    }
    ;
    m.keys = function() {
        return this.g.keys()
    }
    ;
    m.values = function() {
        return this.g.values()
    }
    ;
    m.forEach = function(a, b) {
        return this.g.forEach(a, b)
    }
    ;
    Vh.prototype[Symbol.iterator] = function() {
        return this.entries()
    }
    ;
    var Wh = function() {
        if (Uh)
            return Object.setPrototypeOf(Vh.prototype, Map.prototype),
            Object.defineProperties(Vh.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }),
            Vh;
        var a = function() {
            return ha(Map, [], this.constructor)
        };
        v(a, Map);
        return a
    }();
    function Xh(a) {
        return a
    }
    var Zh = function(a, b, c, d) {
        c = c === void 0 ? Xh : c;
        d = d === void 0 ? Xh : d;
        var e = Wh.call(this) || this;
        e.Gb = a[F] | 0;
        e.Db = b;
        e.Oc = c;
        e.Bf = e.Db ? Yh : d;
        for (var f = 0; f < a.length; f++) {
            var g = a[f]
              , h = c(g[0], !1, !0)
              , k = g[1];
            b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e.Gb);
            Wh.prototype.set.call(e, h, k)
        }
        return e
    };
    v(Zh, Wh);
    var $h = function(a) {
        if (a.Gb & 2)
            throw Error("Cannot mutate an immutable Map");
    };
    m = Zh.prototype;
    m.clear = function() {
        $h(this);
        Wh.prototype.clear.call(this)
    }
    ;
    m.delete = function(a) {
        $h(this);
        return Wh.prototype.delete.call(this, this.Oc(a, !0, !1))
    }
    ;
    m.entries = function() {
        if (this.Db) {
            var a = Wh.prototype.keys.call(this);
            a = new Ig(a,ai,this)
        } else
            a = Wh.prototype.entries.call(this);
        return a
    }
    ;
    m.values = function() {
        if (this.Db) {
            var a = Wh.prototype.keys.call(this);
            a = new Ig(a,Zh.prototype.get,this)
        } else
            a = Wh.prototype.values.call(this);
        return a
    }
    ;
    m.forEach = function(a, b) {
        this.Db ? Wh.prototype.forEach.call(this, function(c, d, e) {
            a.call(b, e.get(d), d, e)
        }) : Wh.prototype.forEach.call(this, a, b)
    }
    ;
    m.set = function(a, b) {
        $h(this);
        a = this.Oc(a, !0, !1);
        return a == null ? this : b == null ? (Wh.prototype.delete.call(this, a),
        this) : Wh.prototype.set.call(this, a, this.Bf(b, !0, !0, this.Db, !1, this.Gb))
    }
    ;
    m.has = function(a) {
        return Wh.prototype.has.call(this, this.Oc(a, !1, !1))
    }
    ;
    m.get = function(a) {
        a = this.Oc(a, !1, !1);
        var b = Wh.prototype.get.call(this, a);
        if (b !== void 0) {
            var c = this.Db;
            return c ? (c = this.Bf(b, !1, !0, c, this.ng, this.Gb),
            c !== b && Wh.prototype.set.call(this, a, c),
            c) : b
        }
    }
    ;
    Zh.prototype[Symbol.iterator] = function() {
        return this.entries()
    }
    ;
    Zh.prototype.toJSON = void 0;
    function Yh(a, b, c, d, e, f) {
        a = Oh(a, d, c, f);
        e && (a = bi(a));
        return a
    }
    function ai(a) {
        return [a, this.get(a)]
    }
    var ci;
    function di() {
        return ci || (ci = new Zh(Dg([]),void 0,void 0,void 0,Th))
    }
    ;function ei(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f = []
          , g = a.length
          , h = 4294967295
          , k = !1
          , l = !!(b & 64)
          , n = l ? b & 128 ? 0 : -1 : void 0;
        if (!(b & 1)) {
            var p = g && a[g - 1];
            p != null && typeof p === "object" && p.constructor === Object ? (g--,
            h = g) : p = void 0;
            if (l && !(b & 128) && !e) {
                k = !0;
                var r;
                h = ((r = fi) != null ? r : Sh)(h - n, n, a, p) + n
            }
        }
        r = void 0;
        for (var t = 0; t < g; t++) {
            var u = a[t];
            if (u != null && (u = c(u, d)) != null)
                if (l && t >= h) {
                    var w = t - n
                      , A = void 0;
                    ((A = r) != null ? A : r = {})[w] = u
                } else
                    f[t] = u
        }
        if (p)
            for (var L in p)
                a = p[L],
                a != null && (a = c(a, d)) != null && (g = +L,
                t = void 0,
                l && !Number.isNaN(g) && (t = g + n) < h ? f[t] = a : (g = void 0,
                ((g = r) != null ? g : r = {})[L] = a));
        r && (k ? f.push(r) : f[h] = r);
        e && Ag(f, b & 16761025 | 34);
        return f
    }
    function gi(a) {
        a[0] = hi(a[0]);
        a[1] = hi(a[1]);
        return a
    }
    function hi(a) {
        switch (typeof a) {
        case "number":
            return Number.isFinite(a) ? a : "" + a;
        case "bigint":
            return Tg(a) ? Number(a) : "" + a;
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (Array.isArray(a)) {
                var b = a[F] | 0;
                return a.length === 0 && b & 1 ? void 0 : ei(a, b, hi)
            }
            if (a[ug] === Fg)
                return ii(a);
            if (a instanceof Zh)
                return a = a.size !== 0 ? Array.from(Wh.prototype.entries.call(a), gi) : void 0,
                a;
            return
        }
        return a
    }
    var fi;
    function ji(a, b) {
        if (b) {
            fi = b == null || b === Sh || b[vg] !== Rh ? Sh : b;
            try {
                return ii(a)
            } finally {
                fi = void 0
            }
        }
        return ii(a)
    }
    function ii(a) {
        a = a.F;
        return ei(a, a[F] | 0, hi)
    }
    ;var ki, li;
    function mi(a) {
        switch (typeof a) {
        case "boolean":
            return ki || (ki = [0, void 0, !0]);
        case "number":
            return a > 0 ? void 0 : a === 0 ? li || (li = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
        }
    }
    function G(a, b, c) {
        return ni(a, b, c, 3)
    }
    function ni(a, b, c, d) {
        if (a == null) {
            var e = 32;
            c ? (a = [c],
            e |= 128) : a = [];
            b && (e = e & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            e = a[F] | 0;
            4096 & e && !(2 & e) && oi();
            if (e & 256)
                throw Error("farr");
            if (e & 64)
                return d !== 3 || e & 4096 || Ag(a, e | 4096),
                a;
            if (c && (e |= 128,
            c !== a[0]))
                throw Error("mid");
            a: {
                c = a;
                e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1
                      , h = c[g];
                    if (h != null && typeof h === "object" && h.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024)
                            throw Error("pvtlmt");
                        for (var k in h)
                            f = +k,
                            f < g && (c[f + b] = h[k],
                            delete h[k]);
                        e = e & -16760833 | (g & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    k = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (k > 1024)
                        throw Error("spvt");
                    e = e & -16760833 | (k & 1023) << 14
                }
            }
        }
        e |= 64;
        d === 3 && (e |= 4096);
        Ag(a, e);
        return a
    }
    function oi() {
        if (tg != null) {
            var a;
            var b = (a = ng) != null ? a : ng = {};
            a = b[tg] || 0;
            a >= 5 || (b[tg] = a + 1,
            b = Error(),
            xd(b, "incident"),
            gg(b))
        }
    }
    ;function pi(a, b) {
        if (typeof a !== "object")
            return a;
        if (Array.isArray(a)) {
            var c = a[F] | 0;
            return a.length === 0 && c & 1 ? void 0 : qi(a, c, b)
        }
        if (a[ug] === Fg)
            return ri(a);
        if (a instanceof Zh) {
            b = a.Gb;
            if (b & 2)
                return a;
            if (a.size) {
                c = Dg(Array.from(Wh.prototype.entries.call(a)));
                if (a.Db)
                    for (a = 0; a < c.length; a++) {
                        var d = c[a]
                          , e = d[1];
                        e == null || typeof e !== "object" ? e = void 0 : e[ug] === Fg ? e = ri(e) : Array.isArray(e) ? e = qi(e, e[F] | 0, !!(b & 32)) : e = void 0;
                        d[1] = e
                    }
                return c
            }
        }
    }
    function qi(a, b, c) {
        if (b & 2)
            return a;
        !c || 8192 & b || 16 & b ? a = si(a, b, c && !(b & 16)) : (Bg(a, 34),
        b & 4 && Object.freeze(a));
        return a
    }
    function ri(a) {
        var b = a.F
          , c = b[F] | 0;
        return Gg(a, c) ? a : si(b, c)
    }
    function si(a, b, c) {
        c != null || (c = !!(34 & b));
        return ei(a, b, pi, c, !0)
    }
    function bi(a) {
        var b = a.F
          , c = b[F] | 0;
        if (!Gg(a, c))
            return a;
        a = new a.constructor(si(b, c));
        b = a.F;
        b[F] &= -3;
        return a
    }
    function ti(a) {
        if (a.g !== Hg)
            return !1;
        var b = a.F;
        b = si(b, b[F] | 0);
        b[F] &= -3;
        a.F = b;
        a.g = void 0;
        return !0
    }
    function ui(a) {
        if (!ti(a) && Gg(a, a.F[F] | 0))
            throw Error();
    }
    ;var vi = Ng(0)
      , wi = function(a, b, c, d) {
        if (b === -1)
            return null;
        var e = b + (c ? 0 : -1)
          , f = a.length - 1;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f) {
                var g = a[f];
                if (g != null && typeof g === "object" && g.constructor === Object) {
                    c = g[b];
                    var h = !0
                } else if (e === f)
                    c = g;
                else
                    return
            } else
                c = a[e];
            if (d && c != null) {
                d = d(c);
                if (d == null)
                    return d;
                if (!Object.is(d, c))
                    return h ? g[b] = d : a[e] = d,
                    d
            }
            return c
        }
    }
      , yi = function(a, b, c) {
        ui(a);
        var d = a.F;
        xi(d, d[F] | 0, b, c);
        return a
    };
    function xi(a, b, c, d) {
        var e = c + -1
          , f = a.length - 1;
        if (f >= 0 && e >= f) {
            var g = a[f];
            if (g != null && typeof g === "object" && g.constructor === Object)
                return g[c] = d,
                b
        }
        if (e <= f)
            return a[e] = d,
            b;
        if (d !== void 0) {
            var h;
            f = ((h = b) != null ? h : b = a[F] | 0) >> 14 & 1023 || 536870912;
            c >= f ? d != null && (e = {},
            a[f + -1] = (e[c] = d,
            e)) : a[e] = d
        }
        return b
    }
    var Ai = function(a, b) {
        a = a.F;
        return zi(a, a[F] | 0, b, 5) !== void 0
    };
    function Bi(a, b, c, d, e) {
        var f = a.F
          , g = f[F] | 0;
        d = Gg(a, g) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && ti(a) && (f = a.F,
        g = f[F] | 0);
        a = Ci(f, b);
        var h = a === yg ? 7 : a[F] | 0
          , k = Di(h, g);
        var l = 4 & k ? !1 : !0;
        if (l) {
            4 & k && (a = eh(a),
            h = 0,
            k = Ei(k, g),
            g = xi(f, g, b, a));
            for (var n = 0, p = 0; n < a.length; n++) {
                var r = c(a[n]);
                r != null && (a[p++] = r)
            }
            p < n && (a.length = p);
            c = (k | 4) & -513;
            k = c &= -1025;
            k &= -8193
        }
        k !== h && (Ag(a, k),
        2 & k && Object.freeze(a));
        return a = Fi(a, k, f, g, b, d, l, e)
    }
    function Fi(a, b, c, d, e, f, g, h) {
        var k = b;
        f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? Gi(b) || (b |= !a.length || g && !(8192 & b) || 32 & d && !(8192 & b || 16 & b) ? 2 : 256,
        b !== k && Ag(a, b),
        Object.freeze(a)) : (f === 2 && Gi(b) && (a = eh(a),
        k = 0,
        b = Ei(b, d),
        xi(c, d, e, a)),
        Gi(b) || (h || (b |= 16),
        b !== k && Ag(a, b)));
        return a
    }
    function Ci(a, b) {
        a = wi(a, b);
        return Array.isArray(a) ? a : yg
    }
    function Di(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }
    function Gi(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    function Hi(a, b, c, d) {
        var e = a.F
          , f = e[F] | 0;
        var g = Gg(a, f);
        a: {
            !g && ti(a) && (e = a.F,
            f = e[F] | 0);
            var h = wi(e, b);
            a = !1;
            if (h == null) {
                if (g) {
                    b = di();
                    break a
                }
                h = []
            } else if (h.constructor === Zh)
                if (h.Gb & 2 && !g)
                    h = Array.from(Wh.prototype.entries.call(h));
                else {
                    b = h;
                    break a
                }
            else
                Array.isArray(h) ? a = !!((h[F] | 0) & 2) : h = [];
            if (g) {
                if (!h.length) {
                    b = di();
                    break a
                }
                a || (a = !0,
                Dg(h))
            } else if (a) {
                a = !1;
                h = eh(h);
                for (var k = 0; k < h.length; k++) {
                    var l = h[k] = eh(h[k]);
                    Array.isArray(l[1]) && (l[1] = Dg(l[1]))
                }
            }
            !a && f & 32 && Eg(h);
            d = new Zh(h,c,Qh,d);
            xi(e, f, b, d);
            b = d
        }
        !g && c && (b.ng = !0);
        return b
    }
    function Ii(a, b, c, d) {
        ui(a);
        var e = a.F
          , f = e[F] | 0;
        if (c == null)
            return xi(e, f, b),
            a;
        var g = c === yg ? 7 : c[F] | 0
          , h = g
          , k = Gi(g)
          , l = k || Object.isFrozen(c);
        k || (g = 0);
        l || (c = eh(c),
        h = 0,
        g = Ei(g, f),
        l = !1);
        g |= 5;
        var n;
        k = (n = Cg(g)) != null ? n : 0;
        for (n = 0; n < c.length; n++) {
            var p = c[n]
              , r = d(p, k);
            Object.is(p, r) || (l && (c = eh(c),
            h = 0,
            g = Ei(g, f),
            l = !1),
            c[n] = r)
        }
        g !== h && (l && (c = eh(c),
        g = Ei(g, f)),
        Ag(c, g));
        xi(e, f, b, c);
        return a
    }
    function Ji(a, b, c, d) {
        ui(a);
        var e = a.F;
        xi(e, e[F] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    function zi(a, b, c, d) {
        a = wi(a, d, void 0, function(e) {
            return Oh(e, c, !1, b)
        });
        if (a != null)
            return a
    }
    var Ki = function(a, b, c) {
        a = a.F;
        (c = zi(a, a[F] | 0, b, c)) || (c = b[sg]) || (c = new b,
        Dg(c.F),
        c = b[sg] = c);
        return c
    }
      , Li = function(a, b, c) {
        var d = a.F
          , e = d[F] | 0;
        b = zi(d, e, b, c);
        if (b == null)
            return b;
        e = d[F] | 0;
        if (!Gg(a, e)) {
            var f = bi(b);
            f !== b && (ti(a) && (d = a.F,
            e = d[F] | 0),
            b = f,
            xi(d, e, c, b))
        }
        return b
    };
    function Mi(a, b, c, d, e, f, g, h) {
        var k = Gg(a, c);
        f = k ? 1 : f;
        g = !!g || f === 3;
        k = h && !k;
        (f === 2 || k) && ti(a) && (b = a.F,
        c = b[F] | 0);
        a = Ci(b, e);
        var l = a === yg ? 7 : a[F] | 0
          , n = Di(l, c);
        if (h = !(4 & n)) {
            var p = a
              , r = c
              , t = !!(2 & n);
            t && (r |= 2);
            for (var u = !t, w = !0, A = 0, L = 0; A < p.length; A++) {
                var ja = Oh(p[A], d, !1, r);
                if (ja instanceof d) {
                    if (!t) {
                        var Y = Gg(ja);
                        u && (u = !Y);
                        w && (w = Y)
                    }
                    p[L++] = ja
                }
            }
            L < A && (p.length = L);
            n |= 4;
            n = w ? n & -8193 : n | 8192;
            n = u ? n | 8 : n & -9
        }
        n !== l && (Ag(a, n),
        2 & n && Object.freeze(a));
        if (k && !(8 & n || !a.length && (f === 1 || (f !== 4 ? 0 : 2 & n || !(16 & n) && 32 & c)))) {
            Gi(n) && (a = eh(a),
            n = Ei(n, c),
            c = xi(b, c, e, a));
            d = a;
            k = n;
            for (l = 0; l < d.length; l++)
                p = d[l],
                n = bi(p),
                p !== n && (d[l] = n);
            k |= 8;
            n = k = d.length ? k | 8192 : k & -8193;
            Ag(a, n)
        }
        return a = Fi(a, n, b, c, e, f, h, g)
    }
    var Ni = function(a, b, c) {
        var d = a.F;
        return Mi(a, d, d[F] | 0, b, c, void 0 === Jg ? 2 : 4, !1, !0)
    }
      , H = function(a, b, c) {
        c == null && (c = void 0);
        yi(a, b, c);
        return a
    }
      , Oi = function(a, b, c) {
        ui(a);
        var d = a.F
          , e = d[F] | 0;
        if (c == null)
            return xi(d, e, b),
            a;
        for (var f = c === yg ? 7 : c[F] | 0, g = f, h = Gi(f), k = h || Object.isFrozen(c), l = !0, n = !0, p = 0; p < c.length; p++) {
            var r = c[p];
            h || (r = Gg(r),
            l && (l = !r),
            n && (n = r))
        }
        h || (f = l ? 13 : 5,
        f = n ? f & -8193 : f | 8192);
        k && f === g || (c = eh(c),
        g = 0,
        f = Ei(f, e));
        f !== g && Ag(c, f);
        xi(d, e, b, c);
        return a
    };
    function Ei(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }
    function Pi(a, b, c, d) {
        ui(a);
        var e = a.F;
        a = Mi(a, e, e[F] | 0, c, b, 2, !0);
        d = d != null ? d : new c;
        a.push(d);
        b = c = a === yg ? 7 : a[F] | 0;
        Gg(d) ? (c &= -9,
        a.length === 1 && (c &= -8193)) : c |= 8192;
        c !== b && Ag(a, c);
        return d
    }
    var Qi = function(a, b) {
        a = wi(a.F, b);
        a != null && (typeof a === "bigint" ? Tg(a) ? a = Number(a) : (a = fh(64, a),
        a = Tg(a) ? Number(a) : String(a)) : a = oh(a) ? typeof a === "number" ? zh(a) : vh(a) : void 0);
        return a
    }
      , Ri = function(a, b) {
        a = wi(a.F, b);
        b = typeof a;
        a = a == null ? a : b === "bigint" ? Ng(fh(64, a)) : oh(a) ? b === "string" ? xh(a) : yh(a) : void 0;
        return a
    }
      , Si = function(a, b) {
        return Nh(wi(a.F, b))
    }
      , Ti = function(a, b) {
        var c = c === void 0 ? !1 : c;
        var d;
        return (d = mh(wi(a.F, b))) != null ? d : c
    }
      , Ui = function(a, b) {
        var c = c === void 0 ? 0 : c;
        var d;
        return (d = sh(wi(a.F, b))) != null ? d : c
    }
      , Vi = function(a, b) {
        var c = c === void 0 ? 0 : c;
        var d;
        return (d = th(wi(a.F, b))) != null ? d : c
    }
      , Wi = function(a, b) {
        var c = c === void 0 ? vi : c;
        var d;
        return (d = Ri(a, b)) != null ? d : c
    }
      , Xi = function(a, b) {
        var c = c === void 0 ? "" : c;
        var d;
        return (d = Si(a, b)) != null ? d : c
    }
      , Yi = function(a, b) {
        var c = c === void 0 ? 0 : c;
        var d;
        return (d = qh(wi(a.F, b))) != null ? d : c
    }
      , Zi = function(a, b) {
        var c = c === void 0 ? "0" : c;
        a = wi(a.F, b);
        b = !0;
        b = b === void 0 ? !1 : b;
        var d = typeof a;
        a = a == null ? a : d === "bigint" ? String(fh(64, a)) : oh(a) ? d === "string" ? vh(a) : b ? wh(a) : zh(a) : void 0;
        return a != null ? a : c
    }
      , $i = function(a, b) {
        return Bi(a, b, sh, void 0 === Jg ? 2 : 4)
    }
      , aj = function(a, b) {
        return Bi(a, b, qh, void 0 === Jg ? 2 : 4)
    }
      , bj = function(a) {
        var b;
        return (b = Ri(a, 3)) != null ? b : void 0
    }
      , cj = function(a, b, c) {
        return yi(a, b, c == null ? c : lh(c))
    }
      , dj = function(a, b, c) {
        return Ji(a, b, c == null ? c : lh(c), !1)
    }
      , ej = function(a, b, c) {
        return yi(a, b, c == null ? c : rh(c))
    }
      , fj = function(a, b, c) {
        return Ji(a, b, c == null ? c : rh(c), 0)
    }
      , gj = function(a, b, c) {
        return yi(a, b, Ih(c))
    }
      , hj = function(a, b, c) {
        return yi(a, b, c == null ? c : ph(c))
    }
      , I = function(a, b, c) {
        return Ji(a, b, c == null ? c : ph(c), 0)
    };
    var J = function(a, b, c) {
        this.F = G(a, b, c)
    };
    J.prototype.toJSON = function() {
        return ji(this)
    }
    ;
    J.prototype.da = function(a) {
        return JSON.stringify(ji(this, a))
    }
    ;
    J.prototype[ug] = Fg;
    J.prototype.toString = function() {
        return this.F.toString()
    }
    ;
    var ij = function(a, b) {
        this.j = a >>> 0;
        this.g = b >>> 0
    }, kj = function(a) {
        if (!a)
            return jj || (jj = new ij(0,0));
        if (!/^\d+$/.test(a))
            return null;
        dh(a);
        return new ij(Ug,Vg)
    }, jj, lj = function(a, b) {
        this.j = a >>> 0;
        this.g = b >>> 0
    }, nj = function(a) {
        if (!a)
            return mj || (mj = new lj(0,0));
        if (!/^-?\d+$/.test(a))
            return null;
        dh(a);
        return new lj(Ug,Vg)
    }, mj;
    var oj = function() {
        this.g = []
    };
    oj.prototype.length = function() {
        return this.g.length
    }
    ;
    oj.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    var pj = function(a, b, c) {
        for (; c > 0 || b > 127; )
            a.g.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.g.push(b)
    }
      , qj = function(a, b) {
        for (; b > 127; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
      , rj = function(a, b) {
        if (b >= 0)
            qj(a, b);
        else {
            for (var c = 0; c < 9; c++)
                a.g.push(b & 127 | 128),
                b >>= 7;
            a.g.push(1)
        }
    }
      , sj = function(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };
    var tj = function() {
        this.l = [];
        this.j = 0;
        this.g = new oj
    }
      , uj = function(a, b) {
        b.length !== 0 && (a.l.push(b),
        a.j += b.length)
    }
      , wj = function(a, b) {
        vj(a, b, 2);
        b = a.g.end();
        uj(a, b);
        b.push(a.j);
        return b
    }
      , xj = function(a, b) {
        var c = b.pop();
        for (c = a.j + a.g.length() - c; c > 127; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.j++;
        b.push(c);
        a.j++
    }
      , vj = function(a, b, c) {
        qj(a.g, b * 8 + c)
    }
      , yj = function(a, b, c) {
        vj(a, b, 2);
        qj(a.g, c.length);
        uj(a, a.g.end());
        uj(a, c)
    };
    function zj() {
        var a = function() {
            throw Error();
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var Aj = zj()
      , Bj = zj()
      , Cj = zj()
      , Dj = zj()
      , Ej = zj();
    var Fj = function(a, b) {
        this.g = a;
        a = lb(Aj);
        this.j = !!a && b === a || !1
    };
    function Gj() {
        var a = Hj;
        var b = b === void 0 ? Aj : b;
        return new Fj(a,b)
    }
    function Hj(a, b, c, d, e) {
        b = Ij(b, d);
        b != null && (c = wj(a, c),
        e(b, a),
        xj(a, c))
    }
    var Jj = Gj(), Kj = Gj(), Lj = Symbol(), Mj = Symbol(), Nj, Oj;
    function Pj(a) {
        var b = Qj
          , c = Rj
          , d = a[Lj];
        if (d)
            return d;
        d = {};
        d.xj = a;
        d.bf = mi(a[0]);
        var e = a[1]
          , f = 1;
        e && e.constructor === Object && (d.yg = e,
        e = a[++f],
        typeof e === "function" && (d.Ug = !0,
        Nj != null || (Nj = e),
        Oj != null || (Oj = a[f + 1]),
        e = a[f += 2]));
        for (var g = {}; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0; ) {
            for (var h = 0; h < e.length; h++)
                g[e[h]] = e;
            e = a[++f]
        }
        for (h = 1; e !== void 0; ) {
            typeof e === "number" && (h += e,
            e = a[++f]);
            var k = void 0;
            if (e instanceof Fj)
                var l = e;
            else
                l = Jj,
                f--;
            e = void 0;
            if ((e = l) == null ? 0 : e.j) {
                e = a[++f];
                k = a;
                var n = f;
                typeof e === "function" && (e = e(),
                k[n] = e);
                k = e
            }
            e = a[++f];
            n = h + 1;
            typeof e === "number" && e < 0 && (n -= e,
            e = a[++f]);
            for (; h < n; h++) {
                var p = g[h];
                k ? c(d, h, l, k, p) : b(d, h, l, p)
            }
        }
        return a[Lj] = d
    }
    function Ij(a, b) {
        if (a instanceof J)
            return a.F;
        if (Array.isArray(a))
            return ni(a, b[0], b[1], 2)
    }
    ;function Qj(a, b, c) {
        a[b] = c.g
    }
    function Rj(a, b, c, d) {
        var e, f, g = c.g;
        a[b] = function(h, k, l) {
            return g(h, k, l, f || (f = Pj(d).bf), e || (e = Sj(d)))
        }
    }
    function Sj(a) {
        var b = a[Mj];
        if (!b) {
            var c = Pj(a);
            b = function(d, e) {
                return Tj(d, e, c)
            }
            ;
            a[Mj] = b
        }
        return b
    }
    function Tj(a, b, c) {
        Kg(a, a[F] | 0, function(d, e) {
            if (e != null) {
                var f = Uj(c, d);
                f && f(b, e, d)
            }
        })
    }
    function Uj(a, b) {
        var c = a[b];
        if (c)
            return c;
        if (c = a.yg)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0]instanceof Fj ? c : [Kj, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Sj(c)
                      , f = Pj(c).bf;
                    c = a.Ug ? Oj(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else
                    c = d;
                return a[b] = c
            }
    }
    ;function Vj(a, b) {
        if (Array.isArray(b)) {
            var c = b[F] | 0;
            if (c & 4)
                return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            Ag(b, (c | 5) & -1537);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    var Wj = function(a, b) {
        var c = new tj;
        Tj(a.F, c, Pj(b));
        uj(c, c.g.end());
        a = new Uint8Array(c.j);
        b = c.l;
        for (var d = b.length, e = 0, f = 0; f < d; f++) {
            var g = b[f];
            a.set(g, e);
            e += g.length
        }
        c.l = [a];
        return a
    };
    function Xj(a, b) {
        return new Fj(a,b)
    }
    function Yj(a, b, c) {
        b = Fh(b);
        if (b != null) {
            switch (typeof b) {
            case "string":
                nj(b)
            }
            if (b != null)
                switch (vj(a, c, 0),
                typeof b) {
                case "number":
                    a = a.g;
                    Yg(b);
                    pj(a, Ug, Vg);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, b);
                    c = new lj(Number(c & BigInt(4294967295)),Number(c >> BigInt(32)));
                    pj(a.g, c.j, c.g);
                    break;
                default:
                    c = nj(b),
                    pj(a.g, c.j, c.g)
                }
        }
    }
    function Zj(a, b, c) {
        b = sh(b);
        b != null && b != null && (vj(a, c, 0),
        rj(a.g, b))
    }
    var ak = Xj(function(a, b, c) {
        b = kh(b);
        b != null && (vj(a, c, 1),
        a = a.g,
        c = Wg || (Wg = new DataView(new ArrayBuffer(8))),
        c.setFloat64(0, +b, !0),
        Ug = c.getUint32(0, !0),
        Vg = c.getUint32(4, !0),
        sj(a, Ug),
        sj(a, Vg))
    }, zj()), bk = Xj(function(a, b, c) {
        b = kh(b);
        b != null && (vj(a, c, 5),
        a = a.g,
        c = Wg || (Wg = new DataView(new ArrayBuffer(8))),
        c.setFloat32(0, +b, !0),
        Vg = 0,
        Ug = c.getUint32(0, !0),
        sj(a, Ug))
    }, zj()), ck = Xj(Yj, Dj), dk = Xj(Yj, Dj), ek = Xj(Yj, Dj), fk = Xj(function(a, b, c) {
        b = Gh(b);
        if (b != null) {
            switch (typeof b) {
            case "string":
                kj(b)
            }
            if (b != null)
                switch (vj(a, c, 0),
                typeof b) {
                case "number":
                    a = a.g;
                    Yg(b);
                    pj(a, Ug, Vg);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, b);
                    c = new ij(Number(c & BigInt(4294967295)),Number(c >> BigInt(32)));
                    pj(a.g, c.j, c.g);
                    break;
                default:
                    c = kj(b),
                    pj(a.g, c.j, c.g)
                }
        }
    }, zj()), gk = Xj(Zj, Cj), hk = Xj(Zj, Cj), ik = Xj(function(a, b, c) {
        b = mh(b);
        b != null && (vj(a, c, 0),
        a.g.g.push(b ? 1 : 0))
    }, zj()), jk = Xj(function(a, b, c) {
        b = Nh(b);
        b != null && yj(a, c, fg(b))
    }, Bj), kk;
    kk = new Fj(function(a, b, c) {
        b = Vj(Nh, b);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a
                  , f = c
                  , g = b[d];
                g != null && yj(e, f, fg(g))
            }
    }
    ,Bj);
    var Ak, Bk = void 0;
    Bk = Bk === void 0 ? Aj : Bk;
    Ak = new Fj(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) {
                var g = a
                  , h = c
                  , k = e
                  , l = Ij(b[f], d);
                l != null && (h = wj(g, h),
                k(l, g),
                xj(g, h))
            }
    }
    ,Bk);
    var Ck = Xj(function(a, b, c) {
        b = th(b);
        b != null && b != null && (vj(a, c, 0),
        qj(a.g, b))
    }, zj()), Dk = Xj(function(a, b, c) {
        b = sh(b);
        b != null && (b = parseInt(b, 10),
        vj(a, c, 0),
        rj(a.g, b))
    }, Ej), Ek;
    Ek = new Fj(function(a, b, c) {
        b = Vj(sh, b);
        if (b != null && b.length) {
            c = wj(a, c);
            for (var d = 0; d < b.length; d++)
                rj(a.g, b[d]);
            xj(a, c)
        }
    }
    ,Ej);
    function Fk(a) {
        return function(b) {
            return Wj(b, a)
        }
    }
    function Gk(a) {
        return function() {
            return Wj(this, a)
        }
    }
    function Hk(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b))
                throw Error("Expected jspb data to be an array, got " + Ua(b) + ": " + b);
            Dg(b);
            return new a(b)
        }
    }
    function Ik(a) {
        return function(b) {
            if (b == null || b == "")
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                b = new a(Eg(b))
            }
            return b
        }
    }
    ;var Jk = function(a) {
        this.F = G(a)
    };
    v(Jk, J);
    Jk.prototype.j = Gk([0, ak, ek, -2, hk]);
    var Kk = function(a) {
        this.l = a;
        this.g = -1;
        this.j = this.o = 0
    }
      , Lk = function(a, b) {
        return function() {
            var c = La.apply(0, arguments);
            if (a.g > -1)
                return b.apply(null, pa(c));
            try {
                return a.g = a.l.g.now(),
                b.apply(null, pa(c))
            } finally {
                a.o += a.l.g.now() - a.g,
                a.g = -1,
                a.j += 1
            }
        }
    };
    var Mk = function(a, b) {
        this.j = a;
        this.l = b;
        this.g = new Kk(a)
    };
    var Nk = function() {
        this.g = {}
    }
      , Pk = function() {
        var a = B().flags
          , b = Ok;
        a = a.g[b.key];
        if (b.valueType === "proto") {
            try {
                var c = JSON.parse(a);
                if (Array.isArray(c))
                    return c
            } catch (d) {}
            return b.defaultValue
        }
        return typeof a === typeof b.defaultValue ? a : b.defaultValue
    };
    var Qk = {
        Vi: 1,
        oj: 2,
        Ri: 3,
        1: "POSITION",
        2: "VISIBILITY",
        3: "MONITOR_VISIBILITY"
    };
    var Rk = function() {
        this.l = void 0;
        this.j = this.A = 0;
        this.B = -1;
        this.R = new uc;
        pc(vc(this.R, "mv", Wb)).l = Xb === void 0 ? null : Xb;
        vc(this.R, "omid", Tb);
        pc(vc(this.R, "epoh", Tb));
        pc(vc(this.R, "epph", Tb));
        pc(vc(this.R, "umt", Tb)).l = Ub === void 0 ? null : Ub;
        pc(vc(this.R, "phel", Tb));
        pc(vc(this.R, "phell", Tb));
        pc(vc(this.R, "oseid", Qk));
        var a = this.R;
        a.g.sloi || (a.g.sloi = new sc);
        pc(a.g.sloi);
        vc(this.R, "mm", Qb);
        pc(vc(this.R, "ovms", Pb));
        pc(vc(this.R, "xdi", Tb));
        pc(vc(this.R, "amp", Tb));
        pc(vc(this.R, "prf", Tb));
        pc(vc(this.R, "gtx", Tb));
        pc(vc(this.R, "mvp_lv", Tb));
        pc(vc(this.R, "ssmol", Tb)).l = Vb === void 0 ? null : Vb;
        pc(vc(this.R, "fmd", Tb));
        vc(this.R, "gen204simple", Tb);
        this.g = new Mk(Zf(),this.R);
        this.o = !1;
        this.flags = new Nk
    };
    Rk.prototype.ee = function(a) {
        if (typeof a === "string" && a.length != 0) {
            var b = this.R;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c].split("=")
                      , e = decodeURIComponent(d[0]);
                    d.length > 1 ? (d = decodeURIComponent(d[1]),
                    d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.j(d)
                }
            }
        }
    }
    ;
    var B = function() {
        return E(Rk)
    };
    var Sk = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g))
            try {
                if (c instanceof If)
                    var f = c;
                else
                    f = new If,
                    tf(c, function(h, k) {
                        var l = f
                          , n = l.o++;
                        Mf(l, n, Jf(k, h))
                    });
                var g = Pf(f, a.j, "pagead2.googlesyndication.com", "/pagead/gen_204?id=" + b + "&");
                g && (Zf(),
                Uf(C, g))
            } catch (h) {}
    };
    var Tk = function(a, b, c) {
        c = c === void 0 ? {} : c;
        this.error = a;
        this.meta = c;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror"
    }
      , Uk = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Vk = null
      , Wk = function() {
        var a = a === void 0 ? window : a;
        if (Vk === null) {
            Vk = "";
            try {
                var b = "";
                try {
                    b = a.top.location.hash
                } catch (d) {
                    b = a.location.hash
                }
                if (b) {
                    var c = b.match(/\bdeid=([\d,]+)/);
                    Vk = c ? c[1] : ""
                }
            } catch (d) {}
        }
        return Vk
    };
    function Xk() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : jb()
    }
    function Yk() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    function Zk(a, b) {
        b = b === void 0 ? y : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    }
    function $k() {
        var a = a === void 0 ? y : a;
        var b = Math.min(Zk("domLoading", a) || Infinity, Zk("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(Zk("responseEnd", a), Zk("navigationStart", a)) : b
    }
    ;var al = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d === void 0 ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var bl = y.performance
      , cl = !!(bl && bl.mark && bl.measure && bl.clearMarks)
      , dl = Ne(function() {
        var a;
        if (a = cl)
            a = Wk(),
            a = !!a.indexOf && a.indexOf("1337") >= 0;
        return a
    })
      , el = function(a, b) {
        this.events = [];
        this.g = b || y;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.l = dl() || (c != null ? c : Math.random() < a)
    };
    el.prototype.A = function() {
        this.l = !1;
        this.events !== this.g.google_js_reporting_queue && (dl() && rb(this.events, fl),
        this.events.length = 0)
    }
    ;
    el.prototype.I = function(a) {
        !this.l || this.events.length > 2048 || this.events.push(a)
    }
    ;
    var fl = function(a) {
        a && bl && dl() && (bl.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        bl.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    el.prototype.start = function(a, b) {
        if (!this.l)
            return null;
        a = new al(a,b,Yk() || Xk());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        bl && dl() && bl.mark(b);
        return a
    }
    ;
    el.prototype.end = function(a) {
        if (this.l && typeof a.value === "number") {
            a.duration = (Yk() || Xk()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            bl && dl() && bl.mark(b);
            this.I(a)
        }
    }
    ;
    var il = function() {
        var a = gl;
        this.A = hl;
        this.B = "jserror";
        this.l = !0;
        this.j = null;
        this.C = this.Za;
        this.g = a === void 0 ? null : a;
        this.o = !1
    };
    m = il.prototype;
    m.pe = function(a) {
        this.j = a
    }
    ;
    m.sf = function(a) {
        this.B = a
    }
    ;
    m.qe = function(a) {
        this.l = a
    }
    ;
    m.tf = function(a) {
        this.o = a
    }
    ;
    m.Bb = function(a, b, c) {
        var d = this;
        return Lk(B().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else
                    f = b()
            } catch (h) {
                var g = d.l;
                try {
                    fl(e),
                    g = d.C(a, new jl(kl(h)), void 0, c)
                } catch (k) {
                    d.Za(217, k)
                }
                if (!g)
                    throw h;
            }
            return f
        })()
    }
    ;
    m.fe = function(a, b, c, d) {
        var e = this;
        return Lk(B().g.g, function() {
            var f = La.apply(0, arguments);
            return e.Bb(a, function() {
                return b.apply(c, f)
            }, d)
        })
    }
    ;
    m.Za = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new If;
            Nf(f, 1, "context", a);
            Uk(b) || (b = new jl(kl(b)));
            b.msg && Nf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j)
                try {
                    this.j(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            Mf(f, 3, [g]);
            var h = Hf();
            h.j && Nf(f, 4, "top", h.j.url || "");
            Mf(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? nf(h.g.url) : ""
            }]);
            Sk(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                Sk(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: kl(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (l) {}
        }
        return this.l
    }
    ;
    var kl = function(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
      , jl = function(a) {
        Tk.call(this, Error(a), {
            message: a
        })
    };
    v(jl, Tk);
    var hl, ll, gl = new el(1,window), ml = function() {
        C && typeof C.google_measure_js_timing != "undefined" && (C.google_measure_js_timing || gl.A())
    };
    hl = new function() {
        var a = "https:";
        C && C.location && C.location.protocol === "http:" && (a = "http:");
        this.j = a;
        this.g = .01;
        this.l = Math.random()
    }
    ;
    ll = new il;
    C && C.document && (C.document.readyState == "complete" ? ml() : gl.l && Se(C, "load", function() {
        ml()
    }));
    var nl = function(a) {
        ll.pe(function(b) {
            rb(a, function(c) {
                c(b)
            })
        })
    }
      , ol = function(a, b) {
        return ll.Bb(a, b)
    }
      , pl = function(a, b, c, d) {
        return ll.fe(a, b, c, d)
    }
      , ql = function(a, b, c, d) {
        ll.Za(a, b, c, d)
    };
    var rl = Date.now(), sl = -1, tl = -1, ul, vl = -1, wl = !1, xl = function() {
        return Date.now() - rl
    }, yl = function() {
        var a = B().l
          , b = tl >= 0 ? xl() - tl : -1
          , c = wl ? xl() - sl : -1
          , d = vl >= 0 ? xl() - vl : -1;
        if (a == 947190542)
            return 100;
        if (a == 79463069)
            return 200;
        a = [2E3, 4E3];
        var e = [250, 500, 1E3];
        ql(637, Error(), .001);
        var f = b;
        c != -1 && c < b && (f = c);
        for (b = 0; b < a.length; ++b)
            if (f < a[b]) {
                var g = e[b];
                break
            }
        g === void 0 && (g = e[a.length]);
        return d != -1 && d > 1500 && d < 4E3 ? 500 : g
    };
    function K(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    K.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    K.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    var zl = function(a) {
        return new K(a.top,a.right,a.bottom,a.left)
    };
    K.prototype.contains = function(a) {
        return this && a ? a instanceof K ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    K.prototype.expand = function(a, b, c, d) {
        Wa(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    var Al = function(a, b) {
        return a == b ? !0 : a && b ? a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left : !1
    };
    K.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    K.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    K.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var Bl = function(a, b, c) {
        b instanceof oe ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (a.left += b,
        a.right += b,
        typeof c === "number" && (a.top += c,
        a.bottom += c));
        return a
    };
    K.prototype.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var Cl = function(a, b, c) {
        var d = new K(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.j = c
    };
    Cl.prototype.equals = function(a, b) {
        return !!a && (!(b === void 0 ? 0 : b) || this.volume == a.volume) && this.l == a.l && Al(this.g, a.g) && !0
    }
    ;
    var Dl = function(a, b, c, d, e, f, g, h) {
        this.l = a;
        this.I = b;
        this.j = c;
        this.B = d;
        this.g = e;
        this.o = f;
        this.C = g;
        this.A = h
    };
    Dl.prototype.getTimestamp = function() {
        return this.C
    }
    ;
    Dl.prototype.equals = function(a, b) {
        return this.l.equals(a.l, b === void 0 ? !1 : b) && this.I == a.I && Al(this.j, a.j) && Al(this.B, a.B) && this.g == a.g && this.o == a.o && this.C == a.C && this.A == a.A
    }
    ;
    var El = {
        currentTime: 1,
        duration: 2,
        isVpaid: 4,
        volume: 8,
        isYouTube: 16,
        isPlaying: 32
    }
      , ic = {
        Fe: "start",
        FIRST_QUARTILE: "firstquartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdquartile",
        COMPLETE: "complete",
        ERROR: "error",
        Sf: "metric",
        PAUSE: "pause",
        bg: "resume",
        SKIPPED: "skip",
        VIEWABLE_IMPRESSION: "viewable_impression",
        Tf: "mute",
        fg: "unmute",
        FULLSCREEN: "fullscreen",
        Of: "exitfullscreen",
        Jf: "bufferstart",
        If: "bufferfinish",
        ye: "fully_viewable_audible_half_duration_impression",
        Ee: "measurable_impression",
        Df: "abandon",
        xe: "engagedview",
        IMPRESSION: "impression",
        Lf: "creativeview",
        LOADED: "loaded",
        PROGRESS: "progress",
        Th: "close",
        Uh: "collapse",
        Uf: "overlay_resize",
        Vf: "overlay_unmeasurable_impression",
        Wf: "overlay_unviewable_impression",
        Yf: "overlay_viewable_immediate_impression",
        Xf: "overlay_viewable_end_of_session_impression",
        Mf: "custom_metric_viewable",
        Ff: "audio_audible",
        Hf: "audio_measurable",
        Gf: "audio_impression"
    }
      , Fl = "start firstquartile midpoint thirdquartile resume loaded".split(" ")
      , Gl = ["start", "firstquartile", "midpoint", "thirdquartile"]
      , Hl = ["abandon"]
      , Il = {
        UNKNOWN: -1,
        Fe: 0,
        FIRST_QUARTILE: 1,
        MIDPOINT: 2,
        THIRD_QUARTILE: 3,
        COMPLETE: 4,
        Sf: 5,
        PAUSE: 6,
        bg: 7,
        SKIPPED: 8,
        VIEWABLE_IMPRESSION: 9,
        Tf: 10,
        fg: 11,
        FULLSCREEN: 12,
        Of: 13,
        ye: 14,
        Ee: 15,
        Df: 16,
        xe: 17,
        IMPRESSION: 18,
        Lf: 19,
        LOADED: 20,
        Mf: 21,
        Jf: 22,
        If: 23,
        Gf: 27,
        Hf: 28,
        Ff: 29
    };
    var ac = {
        Oh: "addEventListener",
        pi: "getMaxSize",
        ri: "getScreenSize",
        si: "getState",
        ti: "getVersion",
        Xi: "removeEventListener",
        Mi: "isViewable"
    }
      , Jl = function(a) {
        var b = a !== a.top
          , c = a.top === Cf(a)
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        $b(function(g) {
            return typeof f[g] === "function"
        }) || (e = 1));
        return {
            Ha: f,
            Fc: e,
            zh: d
        }
    };
    var Kl = function() {
        var a = window.document;
        return a && typeof a.elementFromPoint === "function"
    };
    function Ll(a, b, c) {
        try {
            if (a) {
                if (!b.top)
                    return new K(-12245933,-12245933,-12245933,-12245933);
                b = b.top
            }
            a: {
                var d = b;
                if (a && d !== null && d != d.top) {
                    if (!d.top) {
                        var e = new pe(-12245933,-12245933);
                        break a
                    }
                    d = d.top
                }
                try {
                    e = (c === void 0 ? 0 : c) ? (new pe(d.innerWidth,d.innerHeight)).round() : ye(d || window).round()
                } catch (n) {
                    e = new pe(-12245933,-12245933)
                }
            }
            a = e;
            var f = a.height
              , g = a.width;
            if (g === -12245933)
                return new K(g,g,g,g);
            var h = He(ue(b.document))
              , k = h.x
              , l = h.y;
            return new K(l,k + g,l + f,k)
        } catch (n) {
            return new K(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var Ml = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , Nl = function(a) {
        return new K(a.top,a.left + a.width,a.top + a.height,a.left)
    };
    m = Ml.prototype;
    m.contains = function(a) {
        return a instanceof oe ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    m.getSize = function() {
        return new pe(this.width,this.height)
    }
    ;
    m.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    m.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    m.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    m.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    var Pl = function(a, b, c) {
        if (typeof b === "string")
            (b = Ol(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Ol(c, d);
                f && (c.style[f] = e)
            }
    }
      , Ql = {}
      , Ol = function(a, b) {
        var c = Ql[b];
        if (!c) {
            var d = Gd(b);
            c = d;
            a.style[d] === void 0 && (d = (Ud ? "Webkit" : Td ? "Moz" : null) + Id(d),
            a.style[d] !== void 0 && (c = d));
            Ql[b] = c
        }
        return c
    }
      , Rl = function(a, b) {
        var c = a.style[Gd(b)];
        return typeof c !== "undefined" ? c : a.style[Ol(a, b)] || ""
    }
      , Sl = function(a, b) {
        var c = te(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
      , Tl = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
      , Ul = function(a) {
        var b = te(a)
          , c = new oe(0,0);
        if (a == (b ? te(b) : document).documentElement)
            return c;
        a = Tl(a);
        b = He(ue(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
      , Vl = function(a, b) {
        var c = new oe(0,0)
          , d = ze(te(a));
        if (!Nd(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = Ul(a);
            else
                e = Tl(a),
                e = new oe(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
      , Wl = function() {
        var a = "100%";
        typeof a == "number" && (a = Math.round(a) + "px");
        return a
    }
      , Yl = function(a) {
        var b = Xl, c;
        (c = Sl(a, "display")) || (c = a.currentStyle ? a.currentStyle.display : null);
        if ((c || a.style && a.style.display) != "none")
            return b(a);
        c = a.style;
        var d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
      , Xl = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Ud && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Tl(a),
        new pe(a.right - a.left,a.bottom - a.top)) : new pe(b,c)
    }
      , Zl = function(a) {
        var b = new pe(a.offsetWidth,a.offsetHeight);
        var c = Sl(a, "paddingLeft");
        var d = Sl(a, "paddingRight")
          , e = Sl(a, "paddingTop")
          , f = Sl(a, "paddingBottom");
        c = new K(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c));
        d = Sl(a, "borderLeftWidth");
        e = Sl(a, "borderRightWidth");
        f = Sl(a, "borderTopWidth");
        a = Sl(a, "borderBottomWidth");
        a = new K(parseFloat(f),parseFloat(e),parseFloat(a),parseFloat(d));
        return new pe(b.width - a.left - c.left - c.right - a.right,b.height - a.top - c.top - c.bottom - a.bottom)
    };
    var $l = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };
    function am(a, b, c, d) {
        if (!a)
            return {
                value: d,
                done: !1
            };
        d = b(d, a);
        var e = c(d, a);
        return !e && Nd(a, "parentElement") ? am(a.parentElement || null, b, c, d) : {
            done: e,
            value: d
        }
    }
    var bm = function(a, b, c, d) {
        if (!a)
            return d;
        d = am(a, b, c, d);
        if (!d.done)
            try {
                var e = te(a)
                  , f = e && ze(e);
                return bm(f && f.frameElement, b, c, d.value)
            } catch (g) {}
        return d.value
    };
    function cm(a) {
        var b = !Rd || je();
        return bm(a, function(c, d) {
            c = Nd(d, "style") && d.style && Rl(d, "visibility");
            return {
                hidden: c === "hidden",
                visible: b && c === "visible"
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var dm = function(a) {
        return bm(a, function(b, c) {
            return !(!Nd(c, "style") || !c.style || Rl(c, "display") !== "none")
        }, function(b) {
            return b
        }, !1) ? !0 : cm(a)
    }
      , em = function(a) {
        return new K(a.top,a.right,a.bottom,a.left)
    }
      , fm = function(a) {
        var b = a.top || 0
          , c = a.left || 0;
        return new K(b,c + (a.width || 0),b + (a.height || 0),c)
    }
      , gm = function(a) {
        return a != null && a >= 0 && a <= 1
    };
    function hm() {
        var a = Wc();
        return a ? wb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Tc(a, b)
        }) || Tc(a, "OMI/") && !Tc(a, "XiaoMi/") ? !0 : Tc(a, "Presto") && Tc(a, "Linux") && !Tc(a, "X11") && !Tc(a, "Android") && !Tc(a, "Mobi") : !1
    }
    function im() {
        var a = Wc();
        return Tc(a, "AppleTV") || Tc(a, "Apple TV") || Tc(a, "CFNetwork") || Tc(a, "tvOS")
    }
    function jm(a) {
        return (a = a.userAgentData) ? a.brands.some(function(b) {
            return b.brand.includes("kepler_webview")
        }) : Tc(Wc(), "Kepler")
    }
    function km() {
        var a;
        (a = Tc(Wc(), "CrKey") && !(Tc(Wc(), "CrKey") && Tc(Wc(), "SmartSpeaker")) || Tc(Wc(), "PlayStation") || Tc(Wc(), "Roku") || hm() || Tc(Wc(), "Xbox") || im()) || (a = Wc(),
        a = Tc(a, "sdk_google_atv_x86") || Tc(a, "Android TV"));
        return a
    }
    ;var mm = function() {
        this.l = !rf(C.top);
        this.C = kf() || lf();
        var a = Ef();
        a = a.length > 0 && a[a.length - 1] != null && a[a.length - 1].url != null ? ((a = a[a.length - 1].url.match(mf)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.g = new K(0,0,0,0);
        this.B = new pe(0,0);
        this.o = new pe(0,0);
        this.I = new K(0,0,0,0);
        this.frameOffset = new oe(0,0);
        this.A = 0;
        this.L = !1;
        this.j = !(!C || !Jl(C).Ha);
        lm(this)
    }
      , nm = function(a, b) {
        b && b.screen && (a.B = new pe(b.screen.width,b.screen.height))
    }
      , om = function(a, b) {
        a: {
            var c = a.g ? new pe(a.g.getWidth(),a.g.getHeight()) : new pe(0,0);
            b = b === void 0 ? C : b;
            b !== null && b != b.top && (b = b.top);
            var d = 0
              , e = 0;
            try {
                var f = b.document
                  , g = f.body
                  , h = f.documentElement;
                if (f.compatMode == "CSS1Compat" && h.scrollHeight)
                    d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                    e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight
                      , l = h.scrollWidth
                      , n = h.offsetHeight
                      , p = h.offsetWidth;
                    h.clientHeight != n && (k = g.scrollHeight,
                    l = g.scrollWidth,
                    n = g.offsetHeight,
                    p = g.offsetWidth);
                    k > c.height ? k > n ? (d = k,
                    e = l) : (d = n,
                    e = p) : k < n ? (d = k,
                    e = l) : (d = n,
                    e = p)
                }
                var r = new pe(e,d);
                break a
            } catch (t) {
                r = new pe(-12245933,-12245933);
                break a
            }
            r = void 0
        }
        a.o = r
    }
      , lm = function(a) {
        C && C.document && (a.I = Ll(!1, C, a.C),
        a.g = Ll(!0, C, a.C),
        om(a, C),
        nm(a, C))
    }
      , qm = function() {
        var a = pm();
        if (a.A > 0 || a.L)
            return !0;
        a = Zf().j.isVisible();
        var b = Ue(Ec) === 0;
        return a || b
    }
      , pm = function() {
        return E(mm)
    };
    var rm = function(a) {
        this.l = a;
        this.j = 0;
        this.g = null
    };
    rm.prototype.cancel = function() {
        Zf().clearTimeout(this.g);
        this.g = null
    }
    ;
    var sm = function(a) {
        var b = Zf()
          , c = B().g.g;
        a.g = b.setTimeout(Lk(c, pl(143, function() {
            a.j++;
            a.l.sample()
        })), yl())
    };
    var tm = function(a, b, c) {
        this.l = a;
        this.la = c === void 0 ? "na" : c;
        this.B = [];
        this.wa = !1;
        this.o = new Cl(-1,!0,this);
        this.g = this;
        this.L = b;
        this.H = this.D = !1;
        this.W = "uk";
        this.P = !1;
        this.C = !0
    };
    tm.prototype.G = function() {
        return !1
    }
    ;
    tm.prototype.initialize = function() {
        return this.wa = !0
    }
    ;
    tm.prototype.Ib = function() {
        return this.g.W
    }
    ;
    tm.prototype.ec = function() {
        return this.g.H
    }
    ;
    var vm = function(a, b, c) {
        if (!a.H || (c === void 0 ? 0 : c))
            a.H = !0,
            a.W = b,
            a.L = 0,
            a.g != a || um(a)
    };
    tm.prototype.getName = function() {
        return this.g.la
    }
    ;
    tm.prototype.kb = function() {
        return this.g.aa()
    }
    ;
    tm.prototype.aa = function() {
        return {}
    }
    ;
    tm.prototype.Ua = function() {
        return this.g.L
    }
    ;
    var wm = function(a, b) {
        Cb(a.B, b) || (a.B.push(b),
        b.Kb(a.g),
        b.nb(a.o),
        b.Oa() && (a.D = !0))
    };
    tm.prototype.U = function() {
        var a = pm();
        a.g = Ll(!0, this.l, a.C)
    }
    ;
    tm.prototype.V = function() {
        nm(pm(), this.l)
    }
    ;
    tm.prototype.ba = function() {
        return this.o.g
    }
    ;
    var xm = function(a) {
        a = a.g;
        a.V();
        a.U();
        var b = pm();
        b.I = Ll(!1, a.l, b.C);
        om(pm(), a.l);
        a.o.g = a.ba()
    };
    tm.prototype.sample = function() {}
    ;
    tm.prototype.isActive = function() {
        return this.g.C
    }
    ;
    var ym = function(a) {
        a.D = a.B.length ? wb(a.B, function(b) {
            return b.Oa()
        }) : !1
    }
      , zm = function(a) {
        var b = Ib(a.B);
        rb(b, function(c) {
            c.nb(a.o)
        })
    }
      , um = function(a) {
        var b = Ib(a.B);
        rb(b, function(c) {
            c.Kb(a.g)
        });
        a.g != a || zm(a)
    };
    m = tm.prototype;
    m.Kb = function(a) {
        var b = this.g;
        this.g = a.Ua() >= this.L ? a : this;
        b !== this.g ? (this.C = this.g.C,
        um(this)) : this.C !== this.g.C && (this.C = this.g.C,
        um(this))
    }
    ;
    m.nb = function(a) {
        if (a.j === this.g) {
            var b = !this.o.equals(a, this.D);
            this.o = a;
            b && zm(this)
        }
    }
    ;
    m.Oa = function() {
        return this.D
    }
    ;
    m.dispose = function() {
        this.P = !0
    }
    ;
    m.Da = function() {
        return this.P
    }
    ;
    var Am = function(a, b, c, d) {
        this.j = a;
        this.g = new K(0,0,0,0);
        this.o = null;
        this.C = new K(0,0,0,0);
        this.l = b;
        this.R = c;
        this.P = d;
        this.M = !1;
        this.timestamp = -1;
        this.G = new Dl(b.o,this.j,this.g,new K(0,0,0,0),0,0,xl(),0);
        this.A = void 0
    };
    Am.prototype.ud = function() {
        return !0
    }
    ;
    Am.prototype.D = function() {}
    ;
    Am.prototype.dispose = function() {
        if (!this.Da()) {
            var a = this.l;
            Db(a.B, this);
            a.D && this.Oa() && ym(a);
            this.D();
            this.M = !0
        }
    }
    ;
    Am.prototype.Da = function() {
        return this.M
    }
    ;
    var Bm = function(a, b) {
        return a.A ? new K(Math.max(b.top + a.A.top, b.top),Math.min(b.left + a.A.right, b.right),Math.min(b.top + a.A.bottom, b.bottom),Math.max(b.left + a.A.left, b.left)) : zl(b)
    };
    m = Am.prototype;
    m.kb = function() {
        return this.l.kb()
    }
    ;
    m.Ua = function() {
        return this.l.Ua()
    }
    ;
    m.Ib = function() {
        return this.l.Ib()
    }
    ;
    m.ec = function() {
        return this.l.ec()
    }
    ;
    m.Kb = function() {}
    ;
    m.nb = function() {
        this.ib()
    }
    ;
    m.Oa = function() {
        return this.P
    }
    ;
    var Cm = function(a) {
        this.B = !1;
        this.g = a;
        this.o = function() {}
    };
    m = Cm.prototype;
    m.Ua = function() {
        return this.g.Ua()
    }
    ;
    m.Ib = function() {
        return this.g.Ib()
    }
    ;
    m.ec = function() {
        return this.g.ec()
    }
    ;
    m.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.tc(a, b, c),
        wm(this.g, d));
        return d
    }
    ;
    m.ze = function() {
        return this.Sb()
    }
    ;
    m.Sb = function() {
        return !1
    }
    ;
    m.init = function(a) {
        return this.g.initialize() ? (wm(this.g, this),
        this.o = a,
        !0) : !1
    }
    ;
    m.Kb = function(a) {
        a.Ua() == 0 && this.o(a.Ib(), this)
    }
    ;
    m.nb = function() {}
    ;
    m.Oa = function() {
        return !1
    }
    ;
    m.dispose = function() {
        this.B = !0
    }
    ;
    m.Da = function() {
        return this.B
    }
    ;
    m.kb = function() {
        return {}
    }
    ;
    var Dm = function(a, b, c) {
        this.l = c === void 0 ? 0 : c;
        this.j = a;
        this.g = b == null ? "" : b
    }
      , Em = function(a) {
        switch (Math.trunc(a.l)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
      , Fm = function(a, b) {
        return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };
    var Gm = function() {
        this.l = 0;
        this.g = [];
        this.j = !1
    };
    Gm.prototype.add = function(a, b, c) {
        ++this.l;
        a = new Dm(a,b,c);
        this.g.push(new Dm(a.j,a.g,a.l + this.l / 4096));
        this.j = !0;
        return this
    }
    ;
    var Hm = function(a, b) {
        rb(b.g, function(c) {
            a.add(c.j, c.g, Em(c))
        })
    }
      , Im = function(a, b) {
        var c = c === void 0 ? 0 : c;
        var d = d === void 0 ? !0 : d;
        tf(b, function(e, f) {
            d && e === void 0 || a.add(f, e, c)
        });
        return a
    }
      , Km = function(a) {
        var b = Jm;
        a.j && (Kb(a.g, function(c, d) {
            return Fm(d, c) ? 1 : Fm(c, d) ? -1 : 0
        }),
        a.j = !1);
        return vb(a.g, function(c, d) {
            d = b(d);
            return "" + c + (c != "" && d != "" ? "&" : "") + d
        }, "")
    };
    var Jm = function(a) {
        var b = a.j;
        a = a.g;
        return a === "" ? b : typeof a === "boolean" ? a ? b : "" : Array.isArray(a) ? a.length === 0 ? b : b + "=" + a.join() : b + "=" + (Cb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var Lm = function(a) {
        var b = b === void 0 ? !0 : b;
        this.g = new Gm;
        a !== void 0 && Hm(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    Lm.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = Km(this.g);
        b.length > 0 && (a += "?" + b);
        return a
    }
    ;
    var Mm = function(a) {
        var b = []
          , c = [];
        Yb(a, function(d, e) {
            if (!(e in Object.prototype) && typeof d != "undefined")
                switch (Array.isArray(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
      , Nm = function(a) {
        a = a.toString();
        Zf();
        Uf(C, a)
    };
    var Om = function() {
        this.g = 0
    };
    function Pm(a) {
        a && typeof a.dispose == "function" && a.dispose()
    }
    ;var M = function() {
        this.L = this.L;
        this.I = this.I
    };
    M.prototype.L = !1;
    M.prototype.Da = function() {
        return this.L
    }
    ;
    M.prototype.dispose = function() {
        this.L || (this.L = !0,
        this.O())
    }
    ;
    M.prototype[Symbol.dispose] = function() {
        this.dispose()
    }
    ;
    var Rm = function(a, b) {
        Qm(a, fb(Pm, b))
    }
      , Qm = function(a, b) {
        a.L ? b() : (a.I || (a.I = []),
        a.I.push(b))
    };
    M.prototype.O = function() {
        if (this.I)
            for (; this.I.length; )
                this.I.shift()()
    }
    ;
    var Sm = function(a, b, c) {
        rb(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c),
            d.o())) {
                d.g = !0;
                var f = d.j()
                  , g = new Gm;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.B);
                d = E(Om);
                g.add("i", d.g++);
                g.add("adk", e);
                Im(g, f);
                e = new Lm(g);
                Nm(e)
            }
        })
    };
    var Tm = function() {
        this.j = this.l = this.o = this.g = 0
    }
      , Um = function(a, b, c, d) {
        b && (a.g += c,
        a.j += c,
        a.o += c,
        a.l = Math.max(a.l, a.o));
        if (d === void 0 ? !b : d)
            a.o = 0
    };
    var Vm = [1, .75, .5, .3, 0]
      , Wm = function(a) {
        this.j = a = a === void 0 ? Vm : a;
        this.g = ub(this.j, function() {
            return new Tm
        })
    }
      , Ym = function(a, b) {
        return Xm(a, function(c) {
            return c.g
        }, b === void 0 ? !0 : b)
    }
      , $m = function(a, b) {
        return Zm(a, b, function(c) {
            return c.g
        })
    }
      , an = function(a, b) {
        return Xm(a, function(c) {
            return c.l
        }, b === void 0 ? !0 : b)
    }
      , bn = function(a, b) {
        return Zm(a, b, function(c) {
            return c.l
        })
    }
      , cn = function(a, b) {
        return Zm(a, b, function(c) {
            return c.j
        })
    }
      , dn = function(a) {
        rb(a.g, function(b) {
            b.j = 0
        })
    }
      , en = function(a, b, c, d, e, f, g) {
        g = g === void 0 ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.j.length; f++) {
            var h = a.j[f]
              , k = c > 0 && c >= h;
            h = !(b > 0 && b >= h) || d;
            Um(a.g[f], g && k, e, !g || h)
        }
    }
      , Xm = function(a, b, c) {
        a = ub(a.g, function(d) {
            return b(d)
        });
        return c ? a : fn(a)
    }
      , Zm = function(a, b, c) {
        var d = Bb(a.j, function(e) {
            return b <= e
        });
        return d == -1 ? 0 : c(a.g[d])
    }
      , fn = function(a) {
        return ub(a, function(b, c, d) {
            return c > 0 ? d[c] - d[c - 1] : d[c]
        })
    };
    var gn = function() {
        this.j = new Wm;
        this.W = this.V = 0;
        this.ba = new Tm;
        this.H = this.C = -1;
        this.la = 1E3;
        this.xa = new Wm([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
        this.P = this.K = -1
    }
      , hn = function(a, b) {
        return an(a.j, b === void 0 ? !0 : b)
    };
    gn.prototype.L = function(a, b, c, d) {
        this.C = this.C != -1 ? Math.min(this.C, b.Z) : b.Z;
        this.H = Math.max(this.H, b.Z);
        this.K = this.K != -1 ? Math.min(this.K, b.ua) : b.ua;
        this.P = Math.max(this.P, b.ua);
        en(this.xa, b.ua, c.ua, b.g, a, d);
        this.V += a;
        b.Z === 0 && (this.W += a);
        en(this.j, b.Z, c.Z, b.g, a, d);
        c = d || c.Ab != b.Ab ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        Um(this.ba, c, a, b)
    }
    ;
    gn.prototype.Xa = function() {
        return this.ba.l >= this.la
    }
    ;
    function jn(a) {
        a = a === void 0 ? y : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (e) {}
        var c, d;
        return ((c = b) == null ? 0 : c.pageViewId) && ((d = b) == null ? 0 : d.canonicalUrl) ? b : null
    }
    ;if (Ec && Ec.URL) {
        var kn = Ec.URL, ln;
        if (ln = !!kn) {
            var mn;
            a: {
                if (kn) {
                    var nn = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var on = nn.exec(decodeURIComponent(kn));
                        if (on) {
                            mn = on[1] && on[1].length > 1 ? on[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                mn = ""
            }
            ln = mn.length > 0
        }
        ll.qe(!ln)
    }
    var pn = function(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        c = pl(d, c);
        Se(a, b, c, {
            capture: e
        })
    };
    var qn = new K(0,0,0,0);
    function rn(a, b) {
        b = sn(b);
        return b === 0 ? 0 : sn(a) / b
    }
    function sn(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function tn(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; a !== null && c++ < 100; ) {
            if (a === b)
                return !0;
            try {
                if (a = a.parentElement || a) {
                    var d = te(a)
                      , e = d && ze(d)
                      , f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function un(a, b, c) {
        if (!a || !b)
            return !1;
        b = Bl(zl(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        rf(window.top) && window.top && window.top.document && (window = window.top);
        if (!Kl())
            return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = te(c)) && b.defaultView && b.defaultView.frameElement) && tn(b, a);
        var d = a === c;
        a = !d && a && Ge(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function vn(a, b, c, d) {
        return pm().l ? !1 : a.getWidth() <= 0 || a.getHeight() <= 0 ? !0 : c && d ? ol(208, function() {
            return un(a, b, c)
        }) : !1
    }
    ;var wn = new K(0,0,0,0)
      , yn = function(a, b, c) {
        M.call(this);
        this.position = zl(wn);
        this.Zc = this.Kc();
        this.Od = -2;
        this.Eh = Date.now();
        this.zf = -1;
        this.Qc = b;
        this.Pc = null;
        this.Zb = !1;
        this.fd = null;
        this.opacity = -1;
        this.th = c;
        this.Fh = !1;
        this.Qd = function() {}
        ;
        this.Af = function() {}
        ;
        this.va = new Ie;
        this.va.rb = a;
        this.va.g = a;
        this.Va = !1;
        this.xb = {
            Sd: null,
            Rd: null
        };
        this.uf = !0;
        this.sc = null;
        this.Lb = this.Wg = !1;
        B().A++;
        this.ta = this.Id();
        this.yf = -1;
        this.X = null;
        this.We = this.Sg = !1;
        this.R = new uc;
        Dc(this.R);
        xn(this);
        this.th == 1 ? xc(this.R, "od", 1) : xc(this.R, "od", 0)
    };
    v(yn, M);
    yn.prototype.O = function() {
        this.va.g && (this.xb.Sd && (Te(this.va.g, "mouseover", this.xb.Sd),
        this.xb.Sd = null),
        this.xb.Rd && (Te(this.va.g, "mouseout", this.xb.Rd),
        this.xb.Rd = null));
        this.sc && this.sc.dispose();
        this.X && this.X.dispose();
        delete this.Zc;
        delete this.Qd;
        delete this.Af;
        delete this.va.rb;
        delete this.va.g;
        delete this.xb;
        delete this.sc;
        delete this.X;
        delete this.R;
        M.prototype.O.call(this)
    }
    ;
    yn.prototype.lb = function() {
        return this.X ? this.X.g : this.position
    }
    ;
    yn.prototype.ee = function(a) {
        B().ee(a)
    }
    ;
    var xn = function(a) {
        a = a.va.rb;
        var b;
        if (b = a && a.getAttribute)
            b = /-[a-z]/.test("googleAvInapp") ? !1 : ne && a.dataset ? "googleAvInapp"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Hd()) : !!a.getAttribute("data-" + Hd());
        b && (pm().j = !0)
    };
    yn.prototype.Oa = function() {
        return !1
    }
    ;
    yn.prototype.Kc = function() {
        return new gn
    }
    ;
    yn.prototype.sa = function() {
        return this.Zc
    }
    ;
    var zn = function(a, b) {
        b != a.Lb && (a.Lb = b,
        a = pm(),
        b ? a.A++ : a.A > 0 && a.A--)
    }
      , An = function(a, b) {
        if (a.X) {
            if (b.getName() === a.X.getName())
                return;
            a.X.dispose();
            a.X = null
        }
        b = b.create(a.va.g, a.R, a.Oa());
        if (b = b != null && b.ud() ? b : null)
            a.X = b
    }
      , Bn = function(a, b, c) {
        if (!a.Pc || a.Qc == -1 || b.getTimestamp() === -1 || a.Pc.getTimestamp() === -1)
            return 0;
        a = b.getTimestamp() - a.Pc.getTimestamp();
        return a > c ? 0 : a
    };
    yn.prototype.Se = function(a) {
        return Bn(this, a, 1E4)
    }
    ;
    var Cn = function(a, b, c) {
        if (a.X) {
            a.X.ib();
            var d = a.X.G
              , e = d.l
              , f = e.g;
            if (d.B != null) {
                var g = d.j;
                a.fd = new oe(g.left - f.left,g.top - f.top)
            }
            f = a.od() ? Math.max(d.g, d.o) : d.g;
            g = {};
            e.volume !== null && (g.volume = e.volume);
            e = a.Se(d);
            a.Pc = d;
            a.te(f, b, c, !1, g, e, d.A)
        }
    }
      , Dn = function(a) {
        if (a.Zb && a.sc) {
            var b = yc(a.R, "od") == 1
              , c = pm().g
              , d = a.sc
              , e = a.X ? a.X.getName() : "ns"
              , f = a.fd
              , g = new pe(c.getWidth(),c.getHeight());
            c = a.od();
            a = {
                Bh: e,
                fd: f,
                Nh: g,
                od: c,
                Z: a.ta.Z,
                Jh: b
            };
            if (b = d.j) {
                b.ib();
                e = b.G;
                f = e.l.g;
                var h = g = null;
                e.B != null && f && (g = e.j,
                g = new oe(g.left - f.left,g.top - f.top),
                h = new pe(f.right - f.left,f.bottom - f.top));
                e = c ? Math.max(e.g, e.o) : e.g;
                c = {
                    Bh: b.getName(),
                    fd: g,
                    Nh: h,
                    od: c,
                    Jh: !1,
                    Z: e
                }
            } else
                c = null;
            c && Sm(d, a, c)
        }
    };
    m = yn.prototype;
    m.te = function(a, b, c, d, e, f, g) {
        this.Va || (this.Zb && (a = this.wd(a, c, e, g),
        d = d && this.ta.Z >= (this.Ab() ? .3 : .5),
        this.ue(f, a, d),
        this.Qc = b,
        a.Z > 0 && -1 === this.yf && (this.yf = b),
        this.zf == -1 && this.Xa() && (this.zf = b),
        this.Od == -2 && (this.Od = sn(this.lb()) ? a.Z : -1),
        this.ta = a),
        this.Qd(this))
    }
    ;
    m.ue = function(a, b, c) {
        this.sa().L(a, b, this.ta, c)
    }
    ;
    m.Id = function() {
        return new Rb
    }
    ;
    m.wd = function(a, b, c, d) {
        c = this.Id();
        c.g = b;
        b = Zf().j;
        b = Ue(Ec) === 0 ? -1 : b.isVisible() ? 0 : 1;
        c.j = b;
        c.Z = this.Bd(a);
        c.Ab = this.Ab();
        c.ua = d;
        return c
    }
    ;
    m.Bd = function(a) {
        return this.opacity === 0 && yc(this.R, "opac") === 1 ? 0 : a
    }
    ;
    m.Ab = function() {
        return !1
    }
    ;
    m.od = function() {
        return this.Sg || this.Wg
    }
    ;
    m.Ba = function() {
        return 0
    }
    ;
    m.Xa = function() {
        return this.Zc.Xa()
    }
    ;
    m.Ue = function() {
        var a = this.Zb;
        a = (this.We || this.Da()) && !a;
        var b = B().j !== 2 || this.Fh;
        return this.Va || b && a ? 2 : this.Xa() ? 4 : 3
    }
    ;
    m.Ic = function() {
        return 0
    }
    ;
    var En = function(a, b, c) {
        b && (a.Qd = b);
        c && (a.Af = c)
    };
    var Fn = function() {};
    Fn.prototype.next = function() {
        return Gn
    }
    ;
    var Gn = {
        done: !0,
        value: void 0
    };
    Fn.prototype.Fb = function() {
        return this
    }
    ;
    var Hn = function() {
        this.o = this.g = this.l = this.j = this.B = 0
    }
      , In = function(a) {
        var b = {};
        b = (b.ptlt = jb() - a.B,
        b);
        var c = a.j;
        c && (b.pnk = c);
        (c = a.l) && (b.pnc = c);
        (c = a.o) && (b.pnmm = c);
        (a = a.g) && (b.pns = a);
        return b
    };
    var Jn = function() {
        Rb.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.l = !1;
        this.mediaTime = -1
    };
    v(Jn, Rb);
    var Kn = function(a) {
        return gm(a.volume) && a.volume > 0
    };
    var Mn = function(a, b, c, d) {
        c = c === void 0 ? !0 : c;
        d = d === void 0 ? function() {
            return !0
        }
        : d;
        return function(e) {
            var f = e[a];
            if (Array.isArray(f) && d(e))
                return Ln(f, b, c)
        }
    }
      , Nn = function(a, b) {
        return function(c) {
            return b(c) ? c[a] : void 0
        }
    }
      , On = function(a) {
        return function(b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] === b.e || a[c] === void 0 && !b.hasOwnProperty("e"))
                    return !0;
            return !1
        }
    }
      , Ln = function(a, b, c) {
        return c === void 0 || c ? tb(a, function(d, e) {
            return Cb(b, e)
        }) : ub(b, function(d, e, f) {
            return a.slice(e > 0 ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                return g + h
            }, 0)
        })
    };
    var Pn = On([void 0, 1, 2, 3, 4, 8, 16])
      , Qn = On([void 0, 4, 8, 16])
      , Rn = {
        sv: "sv",
        v: "v",
        cb: "cb",
        e: "e",
        nas: "nas",
        msg: "msg",
        "if": "if",
        sdk: "sdk",
        p: "p",
        p0: Nn("p0", Qn),
        p1: Nn("p1", Qn),
        p2: Nn("p2", Qn),
        p3: Nn("p3", Qn),
        cp: "cp",
        tos: "tos",
        mtos: "mtos",
        amtos: "amtos",
        mtos1: Mn("mtos1", [0, 2, 4], !1, Qn),
        mtos2: Mn("mtos2", [0, 2, 4], !1, Qn),
        mtos3: Mn("mtos3", [0, 2, 4], !1, Qn),
        mcvt: "mcvt",
        ps: "ps",
        scs: "scs",
        bs: "bs",
        vht: "vht",
        mut: "mut",
        a: "a",
        a0: Nn("a0", Qn),
        a1: Nn("a1", Qn),
        a2: Nn("a2", Qn),
        a3: Nn("a3", Qn),
        ft: "ft",
        dft: "dft",
        at: "at",
        dat: "dat",
        as: "as",
        vpt: "vpt",
        gmm: "gmm",
        std: "std",
        efpf: "efpf",
        swf: "swf",
        nio: "nio",
        px: "px",
        nnut: "nnut",
        vmer: "vmer",
        vmmk: "vmmk",
        vmiec: "vmiec",
        nmt: "nmt",
        tcm: "tcm",
        bt: "bt",
        pst: "pst",
        vpaid: "vpaid",
        dur: "dur",
        vmtime: "vmtime",
        dtos: "dtos",
        dtoss: "dtoss",
        dvs: "dvs",
        dfvs: "dfvs",
        dvpt: "dvpt",
        fmf: "fmf",
        vds: "vds",
        is: "is",
        i0: "i0",
        i1: "i1",
        i2: "i2",
        i3: "i3",
        ic: "ic",
        cs: "cs",
        c: "c",
        c0: Nn("c0", Qn),
        c1: Nn("c1", Qn),
        c2: Nn("c2", Qn),
        c3: Nn("c3", Qn),
        mc: "mc",
        nc: "nc",
        mv: "mv",
        nv: "nv",
        qmt: Nn("qmtos", Pn),
        qnc: Nn("qnc", Pn),
        qmv: Nn("qmv", Pn),
        qnv: Nn("qnv", Pn),
        raf: "raf",
        rafc: "rafc",
        lte: "lte",
        ces: "ces",
        tth: "tth",
        femt: "femt",
        femvt: "femvt",
        emc: "emc",
        emuc: "emuc",
        emb: "emb",
        avms: "avms",
        nvat: "nvat",
        qi: "qi",
        psm: "psm",
        psv: "psv",
        psfv: "psfv",
        psa: "psa",
        pnk: "pnk",
        pnc: "pnc",
        pnmm: "pnmm",
        pns: "pns",
        ptlt: "ptlt",
        pngs: "pings",
        veid: "veid",
        ssb: "ssb",
        ss0: Nn("ss0", Qn),
        ss1: Nn("ss1", Qn),
        ss2: Nn("ss2", Qn),
        ss3: Nn("ss3", Qn),
        dc_rfl: "urlsigs",
        obd: "obd",
        omidp: "omidp",
        omidr: "omidr",
        omidv: "omidv",
        omida: "omida",
        omids: "omids",
        omidpv: "omidpv",
        omidam: "omidam",
        omidct: "omidct",
        omidia: "omidia",
        omiddc: "omiddc",
        omidlat: "omidlat",
        omiddit: "omiddit",
        nopd: "nopd",
        co: "co",
        tm: "tm",
        tu: "tu"
    }
      , Sn = Object.assign({}, Rn, {
        avid: function(a) {
            return function() {
                return a
            }
        }("audio"),
        avas: "avas",
        vs: "vs"
    })
      , Tn = {
        atos: "atos",
        avt: Mn("atos", [2]),
        davs: "davs",
        dafvs: "dafvs",
        dav: "dav",
        ss: function(a, b) {
            return function(c) {
                return c[a] === void 0 && b !== void 0 ? b : c[a]
            }
        }("ss", 0),
        t: "t"
    };
    var Un = function() {
        this.j = this.g = ""
    };
    var Vn = function() {}
      , Wn = function(a, b) {
        var c = {};
        if (a !== void 0)
            if (b != null)
                for (var d in b) {
                    var e = b[d];
                    d in Object.prototype || e != null && (c[d] = typeof e === "function" ? e(a) : a[e])
                }
            else
                nc(c, a);
        return Km(Im(new Gm, c))
    };
    var Xn = function() {
        var a = {};
        this.j = (a.vs = [1, 0],
        a.vw = [0, 1],
        a.am = [2, 2],
        a.a = [4, 4],
        a.f = [8, 8],
        a.bm = [16, 16],
        a.b = [32, 32],
        a.avw = [0, 64],
        a.avs = [64, 0],
        a.pv = [256, 256],
        a.gdr = [0, 512],
        a.p = [0, 1024],
        a.r = [0, 2048],
        a.m = [0, 4096],
        a.um = [0, 8192],
        a.ef = [0, 16384],
        a.s = [0, 32768],
        a.pmx = [0, 16777216],
        a.mut = [33554432, 33554432],
        a.umutb = [67108864, 67108864],
        a.tvoff = [134217728, 134217728],
        a);
        this.g = {};
        for (var b in this.j)
            this.j[b][1] > 0 && (this.g[b] = 0);
        this.l = 0
    };
    Xn.prototype.reportEvent = function(a) {
        var b = this.j[a]
          , c = b[1];
        this.l += b[0];
        c > 0 && this.g[a] == 0 && (this.g[a] = 1)
    }
    ;
    var Yn = function(a) {
        var b = cc(a.j), c = 0, d;
        for (d in a.g)
            Cb(b, d) && a.g[d] == 1 && (c += a.j[d][1],
            a.g[d] = 2);
        return c
    }
      , Zn = function(a) {
        var b = 0, c;
        for (c in a.g) {
            var d = a.g[c];
            if (d == 1 || d == 2)
                b += a.j[c][1]
        }
        return b
    };
    var $n = function() {
        this.g = this.j = 0
    };
    $n.prototype.getValue = function() {
        return this.j
    }
    ;
    var ao = function(a, b, c) {
        b >= 32 || (a.g & 1 << b && !c ? a.j &= ~(1 << b) : a.g & 1 << b || !c || (a.j |= 1 << b),
        a.g |= 1 << b)
    };
    var bo = function() {
        gn.call(this);
        this.l = new Tm;
        this.aa = this.D = this.M = 0;
        this.I = -1;
        this.ya = new Tm;
        this.B = new Tm;
        this.g = new Wm;
        this.A = this.o = -1;
        this.G = new Tm;
        this.la = 2E3;
        this.U = new $n;
        this.fa = new $n;
        this.ha = new $n
    };
    v(bo, gn);
    var co = function(a, b, c) {
        var d = a.aa;
        wl || c || a.I == -1 || (d += b - a.I);
        return d
    };
    bo.prototype.L = function(a, b, c, d) {
        if (!b.l) {
            gn.prototype.L.call(this, a, b, c, d);
            var e = Kn(b) && Kn(c)
              , f = (d ? Math.min(b.Z, c.Z) : c.Z) >= .5;
            gm(b.volume) && (this.o = this.o != -1 ? Math.min(this.o, b.volume) : b.volume,
            this.A = Math.max(this.A, b.volume));
            f && (this.M += a,
            this.D += e ? a : 0);
            en(this.g, b.Z, c.Z, b.g, a, d, e);
            Um(this.l, !0, a);
            Um(this.B, e, a);
            Um(this.G, c.fullscreen, a);
            Um(this.ya, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            ao(this.U, a, b.isVisible());
            ao(this.fa, a, b.Z >= 1);
            ao(this.ha, a, Kn(b))
        }
    }
    ;
    var eo = function() {
        this.l = !1
    };
    eo.prototype.j = function(a) {
        this.l || (this.g(a) ? (a = this.L.report(this.o, a),
        this.B |= a,
        a = a == 0) : a = !1,
        this.l = a)
    }
    ;
    var fo = function(a, b) {
        this.l = !1;
        this.o = a;
        this.L = b;
        this.B = 0
    };
    v(fo, eo);
    fo.prototype.g = function() {
        return !0
    }
    ;
    fo.prototype.A = function() {
        return !1
    }
    ;
    fo.prototype.getId = function() {
        var a = this
          , b = hc(function(c) {
            return c == a.o
        });
        return Il[b].toString()
    }
    ;
    fo.prototype.toString = function() {
        var a = "";
        this.A() && (a += "c");
        this.l && (a += "s");
        this.B > 0 && (a += ":" + this.B);
        return this.getId() + a
    }
    ;
    var go = function(a, b) {
        fo.call(this, a, b);
        this.C = []
    };
    v(go, fo);
    go.prototype.j = function(a, b) {
        b = b === void 0 ? null : b;
        b != null && this.C.push(b);
        fo.prototype.j.call(this, a)
    }
    ;
    var ho = function() {};
    var io = function() {};
    v(io, ho);
    io.prototype.j = function() {
        return null
    }
    ;
    io.prototype.l = function() {
        return []
    }
    ;
    var jo = function(a, b, c, d) {
        Am.call(this, a, b, c, d)
    };
    v(jo, Am);
    m = jo.prototype;
    m.xd = function() {
        if (this.j) {
            var a = this.j
              , b = this.l.g.l;
            try {
                try {
                    var c = em(a.getBoundingClientRect())
                } catch (l) {
                    c = new K(0,0,0,0)
                }
                var d = c.right - c.left
                  , e = c.bottom - c.top
                  , f = Vl(a, b)
                  , g = f.x
                  , h = f.y;
                var k = new K(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (l) {
                k = zl(qn)
            }
            this.o = k;
            this.g = Bm(this, this.o)
        }
    }
    ;
    m.Ke = function() {
        this.C = this.l.o.g
    }
    ;
    m.Ye = function(a) {
        var b = yc(this.R, "od") == 1;
        return vn(a, this.C, this.j, b)
    }
    ;
    m.Le = function() {
        this.timestamp = xl()
    }
    ;
    m.ib = function() {
        this.Le();
        this.xd();
        if (this.j && typeof this.j.videoWidth === "number" && typeof this.j.videoHeight === "number") {
            var a = this.j;
            var b = new pe(a.videoWidth,a.videoHeight);
            a = this.g;
            var c = a.getWidth()
              , d = a.getHeight()
              , e = b.width;
            b = b.height;
            e <= 0 || b <= 0 || c <= 0 || d <= 0 || (e /= b,
            a = zl(a),
            e > c / d ? (c /= e,
            d = (d - c) / 2,
            d > 0 && (d = a.top + d,
            a.top = Math.round(d),
            a.bottom = Math.round(d + c))) : (d *= e,
            c = Math.round((c - d) / 2),
            c > 0 && (c = a.left + c,
            a.left = Math.round(c),
            a.right = Math.round(c + d))));
            this.g = a
        }
        this.Ke();
        a = this.g;
        c = this.C;
        a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new K(Math.max(a.top, c.top),Math.min(a.right, c.right),Math.min(a.bottom, c.bottom),Math.max(a.left, c.left)) : new K(0,0,0,0);
        c = a.top >= a.bottom || a.left >= a.right ? new K(0,0,0,0) : a;
        a = this.l.o;
        b = e = d = 0;
        if ((this.g.bottom - this.g.top) * (this.g.right - this.g.left) > 0)
            if (this.Ye(c))
                c = new K(0,0,0,0);
            else {
                d = pm().B;
                b = new K(0,d.height,d.width,0);
                var f;
                d = rn(c, (f = this.A) != null ? f : this.g);
                e = rn(c, pm().g);
                b = rn(c, b)
            }
        f = c.top >= c.bottom || c.left >= c.right ? new K(0,0,0,0) : Bl(c, -this.g.left, -this.g.top);
        qm() || (e = d = 0);
        this.G = new Dl(a,this.j,this.g,f,d,e,this.timestamp,b)
    }
    ;
    m.getName = function() {
        return this.l.getName()
    }
    ;
    var ko = new K(0,0,0,0)
      , lo = function(a, b, c) {
        Am.call(this, null, a, b, c);
        this.L = a.isActive();
        this.I = 0
    };
    v(lo, jo);
    m = lo.prototype;
    m.ud = function() {
        this.B();
        return !0
    }
    ;
    m.nb = function() {
        jo.prototype.ib.call(this)
    }
    ;
    m.Le = function() {}
    ;
    m.xd = function() {}
    ;
    m.ib = function() {
        this.B();
        jo.prototype.ib.call(this)
    }
    ;
    m.Kb = function(a) {
        a = a.isActive();
        a !== this.L && (a ? this.B() : (pm().g = new K(0,0,0,0),
        this.g = new K(0,0,0,0),
        this.C = new K(0,0,0,0),
        this.timestamp = -1));
        this.L = a
    }
    ;
    function mo(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var no = {}
      , oo = (no.firstquartile = 0,
    no.midpoint = 1,
    no.thirdquartile = 2,
    no.complete = 3,
    no)
      , po = function(a, b, c, d, e, f) {
        f = f === void 0 ? new io : f;
        yn.call(this, b, c, d);
        this.ce = e;
        this.Ed = 0;
        this.ma = {};
        this.ja = new Xn;
        this.Cf = {};
        this.pa = "";
        this.sb = null;
        this.vb = !1;
        this.g = [];
        this.ab = f.j();
        this.A = f.l();
        this.B = null;
        this.l = -1;
        this.aa = this.G = void 0;
        this.K = this.H = 0;
        this.U = -1;
        this.la = this.fa = !1;
        this.P = this.D = this.j = this.Rb = this.Sa = 0;
        new Wm;
        this.V = this.ba = 0;
        this.ha = -1;
        this.na = 0;
        this.C = Me;
        this.M = [this.Kc()];
        this.Gc = 2;
        this.Eb = {};
        this.Eb.pause = "p";
        this.Eb.resume = "r";
        this.Eb.skip = "s";
        this.Eb.mute = "m";
        this.Eb.unmute = "um";
        this.Eb.exitfullscreen = "ef";
        this.o = null;
        this.xa = this.ya = !1;
        this.hb = Math.floor(Date.now() / 1E3 - 1704067200);
        this.W = 0
    };
    v(po, yn);
    po.prototype.Oa = function() {
        return !0
    }
    ;
    var qo = function(a) {
        a.We = !0;
        a.na != 0 && (a.na = 3)
    }
      , ro = function(a) {
        return a === void 0 ? a : Number(a) ? $l(a, 3) : 0
    };
    m = po.prototype;
    m.Se = function(a) {
        return Bn(this, a, Math.max(1E4, this.l / 3))
    }
    ;
    m.te = function(a, b, c, d, e, f, g) {
        var h = this
          , k = this.C(this) || {};
        nc(k, e);
        this.l = k.duration || this.l;
        this.G = k.isVpaid || this.G;
        this.aa = k.isYouTube || this.aa;
        Zf();
        this.xa = !1;
        e = so(this, b);
        to(this) === 1 && (f = e);
        yn.prototype.te.call(this, a, b, c, d, k, f, g);
        this.ab && this.ab.l && rb(this.A, function(l) {
            l.j(h)
        })
    }
    ;
    m.ue = function(a, b, c) {
        yn.prototype.ue.call(this, a, b, c);
        uo(this).L(a, b, this.ta, c);
        this.la = Kn(this.ta) && Kn(b);
        this.U == -1 && this.fa && (this.U = this.sa().l.g);
        this.ja.l = 0;
        a = this.Xa();
        b.isVisible() && this.ja.reportEvent("vs");
        a && this.ja.reportEvent("vw");
        gm(b.volume) && this.ja.reportEvent("am");
        Kn(b) ? this.ja.reportEvent("a") : this.ja.reportEvent("mut");
        this.Lb && this.ja.reportEvent("f");
        b.j != -1 && (this.ja.reportEvent("bm"),
        b.j == 1 && (this.ja.reportEvent("b"),
        Kn(b) && this.ja.reportEvent("umutb")));
        Kn(b) && b.isVisible() && this.ja.reportEvent("avs");
        this.la && a && this.ja.reportEvent("avw");
        b.Z > 0 && this.ja.reportEvent("pv");
        vo(this, this.sa().l.g, !0) && this.ja.reportEvent("gdr");
        bn(this.sa().j, 1) >= 2E3 && this.ja.reportEvent("pmx");
        this.xa && this.ja.reportEvent("tvoff")
    }
    ;
    m.Kc = function() {
        return new bo
    }
    ;
    m.sa = function() {
        return this.Zc
    }
    ;
    var uo = function(a, b) {
        return a.M[b != null && b < a.M.length ? b : a.M.length - 1]
    };
    po.prototype.Id = function() {
        return new Jn
    }
    ;
    po.prototype.wd = function(a, b, c, d) {
        a = yn.prototype.wd.call(this, a, b, c, d === void 0 ? -1 : d);
        a.fullscreen = this.Lb;
        a.l = this.na == 2;
        a.volume = c.volume;
        gm(a.volume) || (this.Sa++,
        b = this.ta,
        gm(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = c !== void 0 && c >= 0 ? c : -1;
        return a
    }
    ;
    var to = function(a) {
        var b = !!yc(B().R, "umt");
        return a.G || !b && !a.aa ? 0 : 1
    }
      , so = function(a, b) {
        a.na == 2 ? b = 0 : a.Qc == -1 ? b = 0 : (b -= a.Qc,
        b = b > Math.max(1E4, a.l / 3) ? 0 : b);
        var c = a.C(a) || {};
        c = c.currentTime !== void 0 ? c.currentTime : a.H;
        var d = c - a.H
          , e = 0;
        d >= 0 ? (a.K += b,
        a.V += Math.max(b - d, 0),
        e = Math.min(d, a.K)) : a.ba += Math.abs(d);
        d != 0 && (a.K = 0);
        a.ha == -1 && d > 0 && (a.ha = vl >= 0 ? xl() - vl : -1);
        a.H = c;
        return e
    };
    po.prototype.Bd = function(a) {
        return pm(),
        this.Lb ? 1 : yn.prototype.Bd.call(this, a)
    }
    ;
    po.prototype.Ba = function() {
        return 1
    }
    ;
    po.prototype.getDuration = function() {
        return this.l
    }
    ;
    var wo = function(a, b) {
        wb(a.A, function(c) {
            return c.o == b.o
        }) || a.A.push(b)
    }
      , xo = function(a) {
        var b = $m(a.sa().g, 1);
        return vo(a, b)
    }
      , vo = function(a, b, c) {
        return b >= 15E3 ? !0 : a.fa ? (c === void 0 ? 0 : c) ? !0 : a.l > 0 ? b >= a.l / 2 : a.U > 0 ? b >= a.U : !1 : !1
    }
      , yo = function(a) {
        var b = {}
          , c = pm();
        b.insideIframe = c.l;
        b.unmeasurable = a.Va;
        var d = a.lb()
          , e = a.X ? a.X.o : null;
        b.position = d;
        e && !Al(d, e) && (b.containerPosition = e);
        b.exposure = a.ta.Z;
        b.documentSize = c.o;
        b.viewportSize = new pe(c.g.getWidth(),c.g.getHeight());
        a.o != null && (b.presenceData = a.o);
        b.screenShare = a.ta.ua;
        return b
    }
      , zo = function(a) {
        var b = $l(a.ta.Z, 2)
          , c = a.ja.l
          , d = a.ta
          , e = uo(a)
          , f = ro(e.o)
          , g = ro(e.A)
          , h = ro(d.volume)
          , k = $l(e.C, 2)
          , l = $l(e.H, 2)
          , n = $l(d.Z, 2)
          , p = $l(e.K, 2)
          , r = $l(e.P, 2);
        d = $l(d.ua, 2);
        var t = zl(a.lb()).round();
        a = a.X && a.X.o ? zl(a.X ? a.X.o : null).round() : null;
        e = hn(e, !1);
        return {
            Mh: b,
            fc: c,
            bd: f,
            Wc: g,
            Vb: h,
            cd: k,
            Xc: l,
            Z: n,
            dd: p,
            Yc: r,
            ua: d,
            position: t,
            Xb: a,
            ed: e
        }
    }
      , Bo = function(a, b) {
        Ao(a.g, b, function() {
            return {
                Mh: 0,
                fc: void 0,
                bd: -1,
                Wc: -1,
                Vb: -1,
                cd: -1,
                Xc: -1,
                Z: -1,
                dd: -1,
                Yc: -1,
                ua: -1,
                position: void 0,
                Xb: void 0,
                ed: []
            }
        });
        a.g[b] = zo(a)
    }
      , Ao = function(a, b, c) {
        for (var d = a.length; d < b + 1; )
            a.push(c()),
            d++
    }
      , Eo = function(a, b, c) {
        var d = a.Cf[b];
        if (d != null)
            return d;
        d = Co(a, b);
        var e = hc(function(f) {
            return f == b
        });
        a = Do(a, d, d, c, oo[ic[e]]);
        b == "fully_viewable_audible_half_duration_impression" && (a.std = "csm");
        return a
    }
      , Fo = function(a, b, c) {
        var d = [b];
        if (a != b || c != b)
            d.unshift(a),
            d.push(c);
        return d
    }
      , Do = function(a, b, c, d, e) {
        if (a.Va)
            return {
                "if": 0,
                vs: 0
            };
        var f = zl(a.lb()).round()
          , g = a.X ? a.X.o : null
          , h = pm()
          , k = B()
          , l = a.sa()
          , n = a.X ? a.X.getName() : "ns"
          , p = {};
        p["if"] = h.l ? 1 : void 0;
        p.sdk = a.B ? a.B : void 0;
        p.t = a.Eh;
        p.p = [f.top, f.left, f.bottom, f.right];
        f && g && !Al(g, f) && (f = g.round(),
        p.cp = [f.top, f.left, f.bottom, f.right]);
        p.tos = Ym(l.j, !1);
        p.mtos = hn(l);
        p.mcvt = l.ba.l;
        p.ps = void 0;
        p.vht = co(l, xl(), a.na == 2);
        p.mut = l.ya.l;
        p.a = ro(a.ta.volume);
        p.mv = ro(l.A);
        p.fs = a.Lb ? 1 : 0;
        p.ft = l.G.g;
        p.at = l.B.g;
        p.as = l.o > 0 ? 1 : 0;
        p.atos = Ym(l.g);
        p.ssb = Ym(l.xa, !1);
        p.amtos = an(l.g, !1);
        p.uac = a.Sa;
        p.vpt = l.l.g;
        n == "nio" && (p.nio = 1,
        p.avms = "nio");
        p.gmm = "4";
        p.gdr = vo(a, l.l.g, !0) ? 1 : 0;
        p.efpf = a.Gc;
        if (n == "gsv" || n == "nis")
            n = a.X,
            n.I > 0 && (p.nnut = n.I);
        p.tcm = to(a);
        p.nmt = a.ba;
        p.bt = a.V;
        p.pst = a.ha;
        p.vpaid = a.G;
        p.dur = a.l;
        p.vmtime = a.H;
        p.is = a.ja.l;
        a.g.length >= 1 && (p.i0 = a.g[0].fc,
        p.a0 = [a.g[0].Vb],
        p.c0 = [a.g[0].Z],
        p.ss0 = [a.g[0].ua],
        n = a.g[0].position,
        f = a.g[0].Xb,
        p.p0 = n ? mo(n) : void 0,
        n && f && !Al(f, n) && (p.cp0 = mo(f)));
        a.g.length >= 2 && (p.i1 = a.g[1].fc,
        p.a1 = Fo(a.g[1].bd, a.g[1].Vb, a.g[1].Wc),
        p.c1 = Fo(a.g[1].cd, a.g[1].Z, a.g[1].Xc),
        p.ss1 = Fo(a.g[1].dd, a.g[1].ua, a.g[1].Yc),
        n = a.g[1].position,
        f = a.g[1].Xb,
        p.p1 = n ? mo(n) : void 0,
        n && f && !Al(f, n) && (p.cp1 = mo(f)),
        p.mtos1 = a.g[1].ed);
        a.g.length >= 3 && (p.i2 = a.g[2].fc,
        p.a2 = Fo(a.g[2].bd, a.g[2].Vb, a.g[2].Wc),
        p.c2 = Fo(a.g[2].cd, a.g[2].Z, a.g[2].Xc),
        p.ss2 = Fo(a.g[2].dd, a.g[2].ua, a.g[2].Yc),
        n = a.g[2].position,
        f = a.g[2].Xb,
        p.p2 = n ? mo(n) : void 0,
        n && f && !Al(f, n) && (p.cp2 = mo(f)),
        p.mtos2 = a.g[2].ed);
        a.g.length >= 4 && (p.i3 = a.g[3].fc,
        p.a3 = Fo(a.g[3].bd, a.g[3].Vb, a.g[3].Wc),
        p.c3 = Fo(a.g[3].cd, a.g[3].Z, a.g[3].Xc),
        p.ss3 = Fo(a.g[3].dd, a.g[3].ua, a.g[3].Yc),
        n = a.g[3].position,
        f = a.g[3].Xb,
        p.p3 = n ? mo(n) : void 0,
        n && f && !Al(f, n) && (p.cp3 = mo(f)),
        p.mtos3 = a.g[3].ed);
        p.cs = Zn(a.ja);
        b && (p.ic = Yn(a.ja),
        p.dvpt = l.l.j,
        p.dvs = cn(l.j, .5),
        p.dfvs = cn(l.j, 1),
        p.davs = cn(l.g, .5),
        p.dafvs = cn(l.g, 1),
        c && (l.l.j = 0,
        dn(l.j),
        dn(l.g)),
        a.Xa() && (p.dtos = l.M,
        p.dav = l.D,
        p.dtoss = a.Ed + 1,
        c && (l.M = 0,
        l.D = 0,
        a.Ed++)),
        p.dat = l.B.j,
        p.dft = l.G.j,
        c && (l.B.j = 0,
        l.G.j = 0));
        p.ps = [h.o.width, h.o.height];
        p.bs = [h.g.getWidth(), h.g.getHeight()];
        p.scs = [h.B.width, h.B.height];
        p.dom = h.domain;
        a.Rb && (p.vds = a.Rb);
        if (a.A.length > 0 || a.ab)
            b = Ib(a.A),
            a.ab && b.push(a.ab),
            p.pings = ub(b, function(r) {
                return r.toString()
            });
        b = ub(tb(a.A, function(r) {
            return r.A()
        }), function(r) {
            return r.getId()
        });
        Jb(b);
        p.ces = b;
        a.j && (p.vmer = a.j);
        a.D && (p.vmmk = a.D);
        a.P && (p.vmiec = a.P);
        p.avms = a.X ? a.X.getName() : "ns";
        a.X && nc(p, a.X.kb());
        d ? (p.c = $l(a.ta.Z, 2),
        p.ss = $l(a.ta.ua, 2)) : p.tth = xl() - ul;
        p.mc = $l(l.H, 2);
        p.nc = $l(l.C, 2);
        p.mv = ro(l.A);
        p.nv = ro(l.o);
        p.lte = $l(a.Od, 2);
        d = uo(a, e);
        hn(l);
        p.qmtos = hn(d);
        p.qnc = $l(d.C, 2);
        p.qmv = ro(d.A);
        p.qnv = ro(d.o);
        p.qas = d.o > 0 ? 1 : 0;
        p.qi = a.pa;
        p.avms || (p.avms = "geo");
        p.psm = l.U.g;
        p.psv = l.U.getValue();
        p.psfv = l.fa.getValue();
        p.psa = l.ha.getValue();
        k = Ac(k.R);
        k.length && (p.veid = k);
        a.o && nc(p, In(a.o));
        p.avas = a.Ic();
        p.vs = a.Ue();
        p.co = Go(a);
        p.tm = l.V;
        p.tu = l.W;
        return p
    }
      , Co = function(a, b) {
        if (Cb(Hl, b))
            return !0;
        var c = a.ma[b];
        return c !== void 0 ? (a.ma[b] = !0,
        !c) : !1
    };
    po.prototype.Ue = function() {
        return this.Va ? 2 : xo(this) ? 5 : this.Xa() ? 4 : 3
    }
    ;
    po.prototype.Ic = function() {
        return this.ya ? this.sa().B.l >= 2E3 ? 4 : 3 : 2
    }
    ;
    var Go = function(a) {
        var b = a.W.toString(10).padStart(2, "0");
        b = "" + a.hb + b;
        a.W < 99 && a.W++;
        return b
    };
    var ap = jb()
      , dp = function() {
        this.g = {};
        var a = ze();
        bp(this, a, document);
        var b = cp();
        try {
            if ("1" == b) {
                for (var c = a.parent; c != a.top; c = c.parent)
                    bp(this, c, c.document);
                bp(this, a.top, a.top.document)
            }
        } catch (d) {}
    }
      , cp = function() {
        var a = document.documentElement;
        try {
            if (!rf(ze().top))
                return "2";
            var b = []
              , c = ze(a.ownerDocument);
            for (a = c; a != c.top; a = a.parent)
                if (a.frameElement)
                    b.push(a.frameElement);
                else
                    break;
            return b && b.length != 0 ? "1" : "0"
        } catch (d) {
            return "2"
        }
    }
      , bp = function(a, b, c) {
        pn(c, "mousedown", function() {
            return ep(a)
        }, 301);
        pn(b, "scroll", function() {
            return fp(a)
        }, 302);
        pn(c, "touchmove", function() {
            return gp(a)
        }, 303);
        pn(c, "mousemove", function() {
            return hp(a)
        }, 304);
        pn(c, "keydown", function() {
            return ip(a)
        }, 305)
    }
      , ep = function(a) {
        Yb(a.g, function(b) {
            b.l > 1E5 || ++b.l
        })
    }
      , fp = function(a) {
        Yb(a.g, function(b) {
            b.g > 1E5 || ++b.g
        })
    }
      , gp = function(a) {
        Yb(a.g, function(b) {
            b.g > 1E5 || ++b.g
        })
    }
      , ip = function(a) {
        Yb(a.g, function(b) {
            b.j > 1E5 || ++b.j
        })
    }
      , hp = function(a) {
        Yb(a.g, function(b) {
            b.o > 1E5 || ++b.o
        })
    };
    var jp = function() {
        this.g = [];
        this.j = []
    }
      , kp = function(a, b) {
        return zb(a.g, function(c) {
            return c.pa == b
        })
    }
      , lp = function(a, b) {
        return b ? zb(a.g, function(c) {
            return c.va.rb == b
        }) : null
    }
      , mp = function(a, b) {
        return zb(a.j, function(c) {
            return c.Ba() == 2 && c.pa == b
        })
    }
      , op = function() {
        var a = np;
        return a.g.length == 0 ? a.j : a.j.length == 0 ? a.g : Hb(a.j, a.g)
    };
    jp.prototype.reset = function() {
        this.g = [];
        this.j = []
    }
    ;
    var pp = function(a, b) {
        a = b.Ba() == 1 ? a.g : a.j;
        var c = Ab(a, function(d) {
            return d == b
        });
        return c != -1 ? (a.splice(c, 1),
        b.X && b.X.D(),
        b.dispose(),
        !0) : !1
    }
      , qp = function(a) {
        var b = np;
        if (pp(b, a)) {
            switch (a.Ba()) {
            case 0:
                var c = function() {
                    return null
                };
            case 2:
                c = function() {
                    return mp(b, a.pa)
                }
                ;
                break;
            case 1:
                c = function() {
                    return kp(b, a.pa)
                }
            }
            for (var d = c(); d; d = c())
                pp(b, d)
        }
    }
      , rp = function(a) {
        var b = np;
        a = tb(a, function(c) {
            return !lp(b, c.va.rb)
        });
        b.g.push.apply(b.g, pa(a))
    }
      , sp = function(a) {
        var b = [];
        rb(a, function(c) {
            wb(np.g, function(d) {
                return d.va.rb === c.va.rb && d.pa === c.pa
            }) || (np.g.push(c),
            b.push(c))
        })
    }
      , np = E(jp);
    var tp = function() {
        this.g = this.j = null
    }
      , up = function(a) {
        return a.g != null
    }
      , vp = function(a, b) {
        if (a.j == null)
            return !1;
        var c = function(d, e) {
            b(d, e)
        };
        a.g = zb(a.j, function(d) {
            return d != null && d.ze()
        });
        a.g && (a.g.init(c) ? xm(a.g.g) : b(a.g.g.Ib(), a.g));
        return a.g != null
    };
    var xp = function(a) {
        a = wp(a);
        Cm.call(this, a.length ? a[a.length - 1] : new tm(C,0));
        this.l = a;
        this.j = null
    };
    v(xp, Cm);
    m = xp.prototype;
    m.getName = function() {
        return (this.j ? this.j : this.g).getName()
    }
    ;
    m.kb = function() {
        return (this.j ? this.j : this.g).kb()
    }
    ;
    m.Ua = function() {
        return (this.j ? this.j : this.g).Ua()
    }
    ;
    m.init = function(a) {
        var b = !1;
        rb(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a,
        wm(this.g, this));
        return b
    }
    ;
    m.dispose = function() {
        rb(this.l, function(a) {
            a.dispose()
        });
        Cm.prototype.dispose.call(this)
    }
    ;
    m.ze = function() {
        return wb(this.l, function(a) {
            return a.G()
        })
    }
    ;
    m.Sb = function() {
        return wb(this.l, function(a) {
            return a.G()
        })
    }
    ;
    m.tc = function(a, b, c) {
        return new jo(a,this.g,b,c)
    }
    ;
    m.nb = function(a) {
        this.j = a.j
    }
    ;
    var wp = function(a) {
        if (!a.length)
            return [];
        a = tb(a, function(c) {
            return c != null && c.G()
        });
        for (var b = 1; b < a.length; b++)
            wm(a[b - 1], a[b]);
        return a
    };
    var yp = {
        threshold: [0, .3, .5, .75, 1]
    }
      , zp = function(a, b, c, d) {
        Am.call(this, a, b, c, d);
        this.K = this.H = this.I = this.L = this.B = null
    };
    v(zp, jo);
    zp.prototype.ud = function() {
        var a = this;
        this.K || (this.K = xl());
        if (ol(298, function() {
            return Ap(a)
        }))
            return !0;
        vm(this.l, "msf");
        return !1
    }
    ;
    zp.prototype.D = function() {
        if (this.B && this.j)
            try {
                this.B.unobserve(this.j),
                this.L ? (this.L.unobserve(this.j),
                this.L = null) : this.I && (this.I.disconnect(),
                this.I = null)
            } catch (a) {}
    }
    ;
    var Bp = function(a) {
        return a.B && a.B.takeRecords ? a.B.takeRecords() : []
    }
      , Ap = function(a) {
        if (!a.j)
            return !1;
        var b = a.j
          , c = a.l.g.l
          , d = B().g.g;
        a.B = new c.IntersectionObserver(Lk(d, function(e) {
            return Cp(a, e)
        }),yp);
        d = Lk(d, function() {
            a.B.unobserve(b);
            a.B.observe(b);
            Cp(a, Bp(a))
        });
        c.ResizeObserver ? (a.L = new c.ResizeObserver(d),
        a.L.observe(b)) : c.MutationObserver && (a.I = new y.MutationObserver(d),
        a.I.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.B.observe(b);
        Cp(a, Bp(a));
        return !0
    }
      , Cp = function(a, b) {
        try {
            if (b.length) {
                a.H || (a.H = xl());
                var c = Dp(b)
                  , d = Vl(a.j, a.l.g.l)
                  , e = d.x
                  , f = d.y;
                a.o = new K(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                a.g = Bm(a, a.o);
                var g = em(c.intersectionRect);
                a.C = Bl(g, a.o.left - g.left, a.o.top - g.top)
            }
        } catch (h) {
            a.D(),
            ql(299, h)
        }
    }
      , Dp = function(a) {
        return vb(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    };
    m = zp.prototype;
    m.ib = function() {
        var a = Bp(this);
        a.length > 0 && Cp(this, a);
        jo.prototype.ib.call(this)
    }
    ;
    m.xd = function() {}
    ;
    m.Ye = function() {
        return !1
    }
    ;
    m.Ke = function() {}
    ;
    m.kb = function() {
        var a = {};
        return Object.assign(this.l.kb(), (a.niot_obs = this.K,
        a.niot_cbk = this.H,
        a))
    }
    ;
    m.getName = function() {
        return "nio"
    }
    ;
    var Ep = function(a) {
        a = a === void 0 ? C : a;
        Cm.call(this, new tm(a,2))
    };
    v(Ep, Cm);
    Ep.prototype.getName = function() {
        return "nio"
    }
    ;
    Ep.prototype.Sb = function() {
        return !pm().j && this.g.g.l.IntersectionObserver != null
    }
    ;
    Ep.prototype.tc = function(a, b, c) {
        return new zp(a,this.g,b,c)
    }
    ;
    var Gp = function() {
        var a = Fp();
        tm.call(this, C.top, a, "geo")
    };
    v(Gp, tm);
    Gp.prototype.ba = function() {
        return pm().g
    }
    ;
    Gp.prototype.G = function() {
        var a = Fp();
        this.L !== a && (this.g != this && a > this.g.L && (this.g = this,
        um(this)),
        this.L = a);
        return a == 2
    }
    ;
    var Fp = function() {
        B();
        var a = pm();
        return a.l || a.j ? 0 : 2
    };
    var Hp = function() {};
    var Ip = function() {
        this.done = !1;
        this.g = {
            hg: 0,
            Ge: 0,
            Pj: 0,
            Oe: 0,
            Ld: -1,
            rg: 0,
            qg: 0,
            sg: 0,
            Ah: 0
        };
        this.B = null;
        this.A = !1;
        this.l = null;
        this.C = 0;
        this.j = new rm(this)
    }
      , Lp = function() {
        var a = Jp;
        a.A || (a.A = !0,
        Kp(a, function() {
            return a.o.apply(a, pa(La.apply(0, arguments)))
        }),
        a.o())
    };
    Ip.prototype.sample = function() {
        Mp(this, op(), !1)
    }
    ;
    var Np = function() {
        E(Hp);
        var a = E(tp);
        up(a) && a.g.g ? xm(a.g.g) : lm(pm())
    }
      , Mp = function(a, b, c) {
        if (!a.done && (a.j.cancel(),
        b.length != 0)) {
            a.l = null;
            try {
                Np();
                var d = xl();
                B().B = d;
                if (up(E(tp)))
                    for (var e = 0; e < b.length; e++)
                        Cn(b[e], d, c);
                for (d = 0; d < b.length; d++)
                    Dn(b[d]);
                ++a.g.Oe
            } finally {
                c ? rb(b, function(f) {
                    f.ta.Z = 0
                }) : sm(a.j)
            }
        }
    }
      , Kp = function(a, b) {
        if (!a.B) {
            b = pl(142, b);
            Zf();
            var c = Ve(Ec);
            c && Se(Ec, c, b, {
                capture: !1
            }) && (a.B = b)
        }
    };
    Ip.prototype.o = function() {
        var a = qm()
          , b = xl();
        a ? (wl || (sl = b,
        rb(np.g, function(c) {
            var d = c.sa();
            d.aa = co(d, b, c.na != 1)
        })),
        wl = !0) : (this.C = Op(this, b),
        wl = !1,
        ul = b,
        rb(np.g, function(c) {
            c.Zb && (c.sa().I = b)
        }));
        Mp(this, op(), !a)
    }
    ;
    var Pp = function() {
        var a = E(tp);
        if (up(a)) {
            var b = a.g;
            rb(op(), function(c) {
                return An(c, b)
            })
        }
    }
      , Op = function(a, b) {
        a = a.C;
        wl && (a += b - sl);
        return a
    }
      , Qp = function(a) {
        a = a === void 0 ? function() {
            return {}
        }
        : a;
        ll.sf("av-js");
        hl.g = .01;
        nl([function(b) {
            var c = B()
              , d = {};
            d = (d.bin = c.j,
            d.type = "error",
            d);
            c = zc(c.R);
            if (!Jp.l) {
                var e = Jp
                  , f = C.document
                  , g = tl >= 0 ? xl() - tl : -1
                  , h = xl();
                e.g.Ld == -1 && (g = h);
                var k = pm()
                  , l = B()
                  , n = zc(l.R)
                  , p = op();
                try {
                    if (p.length > 0) {
                        var r = k.g;
                        r && (n.bs = [r.getWidth(), r.getHeight()]);
                        var t = k.o;
                        t && (n.ps = [t.width, t.height]);
                        C.screen && (n.scs = [C.screen.width, C.screen.height])
                    } else
                        n.url = encodeURIComponent(C.location.href.substring(0, 512)),
                        f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                    n.tt = g;
                    n.pt = tl;
                    n.bin = l.j;
                    C.google_osd_load_pub_page_exp !== void 0 && (n.olpp = C.google_osd_load_pub_page_exp);
                    n.deb = [1, e.g.hg, e.g.Ge, e.g.Oe, e.g.Ld, 0, e.j.j, e.g.rg, e.g.qg, e.g.sg, e.g.Ah, -1].join(";");
                    n.tvt = Op(e, h);
                    k.j && (n.inapp = 1);
                    if (C !== null && C != C.top) {
                        p.length > 0 && (n.iframe_loc = encodeURIComponent(C.location.href.substring(0, 512)));
                        var u = k.I;
                        n.is = [u.getWidth(), u.getHeight()]
                    }
                } catch (A) {
                    n.error = 1
                }
                Jp.l = n
            }
            t = Jp.l;
            r = {};
            for (var w in t)
                r[w] = t[w];
            w = B().g;
            if (yc(w.l, "prf") == 1) {
                t = new Jk;
                u = w.g;
                e = 0;
                u.g > -1 && (e = u.l.g.now() - u.g);
                u = u.o + e;
                if (u != null && typeof u !== "number")
                    throw Error("Value of float/double field must be a number, found " + typeof u + ": " + u);
                t = Ji(t, 1, u, 0);
                u = w.g;
                t = fj(t, 5, u.g > -1 ? u.j + 1 : u.j);
                t = Ji(t, 2, Ah(w.j.g.l()), "0");
                t = Ji(t, 3, Ah(w.j.g.j()), "0");
                w = Ji(t, 4, Ah(w.j.g.g()), "0");
                t = {};
                w = (t.pf = kg(w.j()),
                t)
            } else
                w = {};
            nc(r, w);
            nc(b, d, c, r, a())
        }
        ])
    }
      , Jp = E(Ip);
    var Rp = null
      , Sp = ""
      , Tp = !1
      , Up = function() {
        var a = Rp || C;
        if (!a)
            return "";
        var b = [];
        if (!a.location || !a.location.href)
            return "";
        b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
        a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
        return b.join("&")
    };
    function Vp() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/), b;
        if (((b = a) == null ? void 0 : b.length) == 2)
            return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return ((c = a) == null ? void 0 : c.length) == 3 ? "20" + a[1] + a[2] : null
    }
    var Wp = function() {
        return "ima_html5_sdk".includes("ima_html5_sdk") ? {
            Ja: "ima",
            Ka: null
        } : "ima_html5_sdk".includes("ima_native_sdk") ? {
            Ja: "nima",
            Ka: null
        } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
            Ja: "an",
            Ka: null
        } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
            Ja: "cast",
            Ka: Vp()
        } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
            Ja: "yw",
            Ka: Vp()
        } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
            Ja: "out",
            Ka: Vp()
        } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
            Ja: "r",
            Ka: Vp()
        } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
            Ja: "n",
            Ka: Vp()
        } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
            Ja: "int",
            Ka: Vp()
        } : {
            Ja: "j",
            Ka: null
        }
    }
      , Xp = Wp().Ja
      , Yp = Wp().Ka;
    var $p = function(a, b) {
        var c = {
            sv: "966"
        };
        Yp !== null && (c.v = Yp);
        c.cb = Xp;
        c.nas = np.g.length;
        c.msg = a;
        b !== void 0 && (a = Zp(b)) && (c.e = Il[a]);
        return c
    }
      , aq = function(a) {
        return a.lastIndexOf("custom_metric_viewable", 0) == 0
    }
      , Zp = function(a) {
        var b = aq(a) ? "custom_metric_viewable" : a.toLowerCase();
        return hc(function(c) {
            return c == b
        })
    };
    var bq = {
        hi: "visible",
        Qh: "audible",
        fj: "time",
        hj: "timetype"
    }
      , cq = {
        visible: function(a) {
            return /^(100|[0-9]{1,2})$/.test(a)
        },
        audible: function(a) {
            return a == "0" || a == "1"
        },
        timetype: function(a) {
            return a == "mtos" || a == "tos"
        },
        time: function(a) {
            return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
        }
    }
      , dq = function() {
        this.g = void 0;
        this.j = !1;
        this.l = 0;
        this.o = -1;
        this.B = "tos"
    }
      , eq = function(a) {
        try {
            var b = a.split(",");
            return b.length > cc(bq).length ? null : vb(b, function(c, d) {
                d = d.toLowerCase().split("=");
                if (d.length != 2 || cq[d[0]] === void 0 || !cq[d[0]](d[1]))
                    throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c
            }, {})
        } catch (c) {
            return null
        }
    }
      , fq = function(a, b) {
        if (a.g == void 0)
            return 0;
        switch (a.B) {
        case "mtos":
            return a.j ? bn(b.g, a.g) : bn(b.j, a.g);
        case "tos":
            return a.j ? $m(b.g, a.g) : $m(b.j, a.g)
        }
        return 0
    };
    var gq = function(a, b, c, d) {
        fo.call(this, b, d);
        this.C = a;
        this.I = c
    };
    v(gq, fo);
    gq.prototype.getId = function() {
        return this.C
    }
    ;
    gq.prototype.A = function() {
        return !0
    }
    ;
    gq.prototype.g = function(a) {
        var b = a.sa()
          , c = a.getDuration();
        return wb(this.I, function(d) {
            if (d.g != void 0)
                var e = fq(d, b);
            else
                b: {
                    switch (d.B) {
                    case "mtos":
                        e = d.j ? b.B.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.j ? b.B.g : b.l.g;
                        break b
                    }
                    e = 0
                }
            e == 0 ? d = !1 : (d = d.l != -1 ? d.l : c !== void 0 && c > 0 ? d.o * c : -1,
            d = d != -1 && e >= d);
            return d
        })
    }
    ;
    var hq = function() {};
    v(hq, Vn);
    hq.prototype.g = function(a) {
        var b = new Un;
        b.g = Wn(a, Rn);
        b.j = Wn(a, Tn);
        return b
    }
    ;
    var iq = function(a) {
        fo.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    v(iq, fo);
    iq.prototype.g = function(a) {
        return xo(a)
    }
    ;
    var jq = function(a) {
        this.g = a
    };
    v(jq, ho);
    var kq = function(a, b) {
        fo.call(this, a, b)
    };
    v(kq, fo);
    kq.prototype.g = function(a) {
        return a.sa().Xa()
    }
    ;
    var lq = function(a) {
        go.call(this, "measurable_impression", a)
    };
    v(lq, go);
    lq.prototype.g = function(a) {
        var b = Cb(this.C, yc(B().R, "ovms"));
        return !a.Va && (a.na != 0 || b)
    }
    ;
    var mq = function() {
        jq.apply(this, arguments)
    };
    v(mq, jq);
    mq.prototype.j = function() {
        return new lq(this.g)
    }
    ;
    mq.prototype.l = function() {
        return [new kq("viewable_impression",this.g), new iq(this.g)]
    }
    ;
    var nq = function(a, b, c) {
        lo.call(this, a, b, c)
    };
    v(nq, lo);
    nq.prototype.B = function() {
        var a = Ta("ima.admob.getViewability")
          , b = yc(this.R, "queryid");
        typeof a === "function" && b && a(b)
    }
    ;
    nq.prototype.getName = function() {
        return "gsv"
    }
    ;
    var oq = function(a) {
        a = a === void 0 ? C : a;
        Cm.call(this, new tm(a,2))
    };
    v(oq, Cm);
    oq.prototype.getName = function() {
        return "gsv"
    }
    ;
    oq.prototype.Sb = function() {
        var a = pm();
        B();
        return a.j && !1
    }
    ;
    oq.prototype.tc = function(a, b, c) {
        return new nq(this.g,b,c)
    }
    ;
    var pq = function(a, b, c) {
        lo.call(this, a, b, c)
    };
    v(pq, lo);
    pq.prototype.B = function() {
        var a = this
          , b = Ta("ima.bridge.getNativeViewability")
          , c = yc(this.R, "queryid");
        typeof b === "function" && c && b(c, function(d) {
            jc(d) && a.I++;
            var e = d.opt_nativeViewVisibleBounds || {}
              , f = d.opt_nativeViewHidden;
            a.g = fm(d.opt_nativeViewBounds || {});
            var g = a.l.o;
            g.g = f ? zl(ko) : fm(e);
            a.timestamp = d.opt_nativeTime || -1;
            pm().g = g.g;
            d = d.opt_nativeVolume;
            d !== void 0 && (g.volume = d)
        })
    }
    ;
    pq.prototype.getName = function() {
        return "nis"
    }
    ;
    var qq = function(a) {
        a = a === void 0 ? C : a;
        Cm.call(this, new tm(a,2))
    };
    v(qq, Cm);
    qq.prototype.getName = function() {
        return "nis"
    }
    ;
    qq.prototype.Sb = function() {
        var a = pm();
        B();
        return a.j && !1
    }
    ;
    qq.prototype.tc = function(a, b, c) {
        return new pq(this.g,b,c)
    }
    ;
    var rq = function() {
        tm.call(this, C, 2, "mraid");
        this.ha = 0;
        this.K = this.M = !1;
        this.I = null;
        this.j = Jl(this.l);
        this.o.g = new K(0,0,0,0);
        this.fa = !1
    };
    v(rq, tm);
    rq.prototype.G = function() {
        return this.j.Ha != null
    }
    ;
    rq.prototype.aa = function() {
        var a = {};
        this.ha && (a.mraid = this.ha);
        this.M && (a.mlc = 1);
        a.mtop = this.j.zh;
        this.I && (a.mse = this.I);
        this.fa && (a.msc = 1);
        a.mcp = this.j.Fc;
        return a
    }
    ;
    rq.prototype.A = function(a) {
        var b = La.apply(1, arguments);
        try {
            return this.j.Ha[a].apply(this.j.Ha, b)
        } catch (c) {
            ql(538, c, .01, function(d) {
                d.method = a
            })
        }
    }
    ;
    var sq = function(a, b, c) {
        a.A("addEventListener", b, c)
    };
    rq.prototype.initialize = function() {
        var a = this;
        if (this.wa)
            return !this.ec();
        this.wa = !0;
        if (this.j.Fc === 2)
            return this.I = "ng",
            vm(this, "w"),
            !1;
        if (this.j.Fc === 1)
            return this.I = "mm",
            vm(this, "w"),
            !1;
        pm().L = !0;
        this.l.document.readyState && this.l.document.readyState == "complete" ? tq(this) : pn(this.l, "load", function() {
            Zf().setTimeout(pl(292, function() {
                return tq(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    var tq = function(a) {
        B().o = !!a.A("isViewable");
        sq(a, "viewableChange", uq);
        a.A("getState") === "loading" ? sq(a, "ready", vq) : wq(a)
    }
      , wq = function(a) {
        typeof a.j.Ha.AFMA_LIDAR === "string" ? (a.M = !0,
        xq(a)) : (a.j.Fc = 3,
        a.I = "nc",
        vm(a, "w"))
    }
      , xq = function(a) {
        a.K = !1;
        var b = yc(B().R, "rmmt") == 1
          , c = !!a.A("isViewable");
        (b ? !c : 1) && Zf().setTimeout(pl(524, function() {
            a.K || (yq(a),
            ql(540, Error()),
            a.I = "mt",
            vm(a, "w"))
        }), 500);
        zq(a);
        sq(a, a.j.Ha.AFMA_LIDAR, Aq)
    }
      , zq = function(a) {
        var b = yc(B().R, "sneio") == 1
          , c = a.j.Ha.AFMA_LIDAR_EXP_1 !== void 0
          , d = a.j.Ha.AFMA_LIDAR_EXP_2 !== void 0;
        (b = b && d) && (a.j.Ha.AFMA_LIDAR_EXP_2 = !0);
        c && (a.j.Ha.AFMA_LIDAR_EXP_1 = !b)
    }
      , yq = function(a) {
        a.A("removeEventListener", a.j.Ha.AFMA_LIDAR, Aq);
        a.M = !1
    };
    rq.prototype.U = function() {
        var a = pm()
          , b = Bq(this, "getMaxSize");
        a.g = new K(0,b.width,b.height,0)
    }
    ;
    rq.prototype.V = function() {
        pm().B = Bq(this, "getScreenSize")
    }
    ;
    var Bq = function(a, b) {
        if (a.A("getState") === "loading")
            return new pe(-1,-1);
        b = a.A(b);
        if (!b)
            return new pe(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new pe(-1,-1) : new pe(a,b)
    };
    rq.prototype.dispose = function() {
        yq(this);
        tm.prototype.dispose.call(this)
    }
    ;
    var vq = function() {
        try {
            var a = E(rq);
            a.A("removeEventListener", "ready", vq);
            wq(a)
        } catch (b) {
            ql(541, b)
        }
    }
      , Aq = function(a, b) {
        try {
            var c = E(rq);
            c.K = !0;
            var d = a ? new K(a.y,a.x + a.width,a.y + a.height,a.x) : new K(0,0,0,0);
            var e = xl()
              , f = qm();
            var g = new Cl(e,f,c);
            g.g = d;
            g.volume = b;
            c.nb(g)
        } catch (h) {
            ql(542, h)
        }
    }
      , uq = function(a) {
        var b = B()
          , c = E(rq);
        a && !b.o && (b.o = !0,
        c.fa = !0,
        c.I && vm(c, "w", !0))
    };
    var Ok = new function(a, b) {
        this.key = a;
        this.defaultValue = b === void 0 ? !1 : b;
        this.valueType = "boolean"
    }
    ("45378663");
    var Dq = function() {
        this.l = this.wa = !1;
        this.g = this.j = null;
        var a = {};
        this.P = (a.start = this.Ng,
        a.firstquartile = this.Ig,
        a.midpoint = this.Kg,
        a.thirdquartile = this.Og,
        a.complete = this.Fg,
        a.error = this.Gg,
        a.pause = this.be,
        a.resume = this.qf,
        a.skip = this.Mg,
        a.viewable_impression = this.Na,
        a.mute = this.Qb,
        a.unmute = this.Qb,
        a.fullscreen = this.Jg,
        a.exitfullscreen = this.Hg,
        a.fully_viewable_audible_half_duration_impression = this.Na,
        a.measurable_impression = this.Na,
        a.abandon = this.be,
        a.engagedview = this.Na,
        a.impression = this.Na,
        a.creativeview = this.Na,
        a.progress = this.Qb,
        a.custom_metric_viewable = this.Na,
        a.bufferstart = this.be,
        a.bufferfinish = this.qf,
        a.audio_measurable = this.Na,
        a.audio_audible = this.Na,
        a);
        a = {};
        this.V = (a.overlay_resize = this.Lg,
        a.abandon = this.Kd,
        a.close = this.Kd,
        a.collapse = this.Kd,
        a.overlay_unmeasurable_impression = function(b) {
            return Eo(b, "overlay_unmeasurable_impression", qm())
        }
        ,
        a.overlay_viewable_immediate_impression = function(b) {
            return Eo(b, "overlay_viewable_immediate_impression", qm())
        }
        ,
        a.overlay_unviewable_impression = function(b) {
            return Eo(b, "overlay_unviewable_impression", qm())
        }
        ,
        a.overlay_viewable_end_of_session_impression = function(b) {
            return Eo(b, "overlay_viewable_end_of_session_impression", qm())
        }
        ,
        a);
        B().j = 3;
        Cq(this);
        this.I = null
    };
    Dq.prototype.B = function(a) {
        zn(a, !1);
        qp(a)
    }
    ;
    Dq.prototype.L = function() {}
    ;
    var Eq = function(a, b, c, d) {
        a = a.A(null, d, !0, b);
        a.B = c;
        rp([a]);
        return a
    };
    Dq.prototype.A = function(a, b, c, d) {
        var e = this;
        a = new po(C,a,c ? b : -1,7,this.Cd(),this.Ne());
        a.pa = d;
        wc(a.R);
        xc(a.R, "queryid", a.pa);
        a.ee("");
        En(a, function() {
            return e.M.apply(e, pa(La.apply(0, arguments)))
        }, function() {
            return e.U.apply(e, pa(La.apply(0, arguments)))
        });
        (d = E(tp).g) && An(a, d);
        this.I && (a.X && (a.X.A = this.I),
        this.I = null);
        a.va.rb && E(Hp);
        return a
    }
    ;
    var Fq = function(a, b, c) {
        Nb(b);
        var d = a.g;
        rb(b, function(e) {
            var f = ub(e.g, function(g) {
                var h = eq(g);
                if (h == null)
                    g = null;
                else if (g = new dq,
                h.visible != null && (g.g = h.visible / 100),
                h.audible != null && (g.j = h.audible == 1),
                h.time != null) {
                    var k = h.timetype == "mtos" ? "mtos" : "tos"
                      , l = Ic(h.time, "%") ? "%" : "ms";
                    h = parseInt(h.time, 10);
                    l == "%" && (h /= 100);
                    l == "ms" ? (g.l = h,
                    g.o = -1) : (g.l = -1,
                    g.o = h);
                    g.B = k === void 0 ? "tos" : k
                }
                return g
            });
            wb(f, function(g) {
                return g == null
            }) || wo(c, new gq(e.id,e.event,f,d))
        })
    }
      , Gq = function() {
        var a = []
          , b = B();
        a.push(E(Gp));
        yc(b.R, "mvp_lv") && a.push(E(rq));
        b = [new oq, new qq];
        b.push(new xp(a));
        b.push(new Ep(C));
        return b
    }
      , Iq = function(a) {
        if (!a.wa) {
            a.wa = !0;
            try {
                var b = xl()
                  , c = B()
                  , d = pm();
                tl = b;
                c.l = 79463069;
                a.j !== "o" && (Rp = Cf(C));
                if ($f()) {
                    Jp.g.Ge = 0;
                    Jp.g.Ld = xl() - b;
                    var e = Gq()
                      , f = E(tp);
                    f.j = e;
                    vp(f, function() {
                        Hq()
                    }) ? Jp.done || (Pp(),
                    wm(f.g.g, a),
                    Lp()) : d.l ? Hq() : Lp()
                } else
                    Tp = !0
            } catch (g) {
                throw np.reset(),
                g;
            }
        }
    }
      , Jq = function(a) {
        Jp.j.cancel();
        Sp = a;
        Jp.done = !0
    }
      , Kq = function(a) {
        if (a.j)
            return a.j;
        var b = E(tp).g;
        if (b)
            switch (b.getName()) {
            case "nis":
                a.j = "n";
                break;
            case "gsv":
                a.j = "m"
            }
        a.j || (a.j = "h");
        return a.j
    }
      , Lq = function(a, b, c) {
        if (a.g == null)
            return b.Rb |= 4,
            !1;
        a = a.g.report(c, b);
        b.Rb |= a;
        return a == 0
    };
    Dq.prototype.Kb = function(a) {
        switch (a.Ua()) {
        case 0:
            if (a = E(tp).g)
                a = a.g,
                Db(a.B, this),
                a.D && this.Oa() && ym(a);
            Hq();
            break;
        case 2:
            Lp()
        }
    }
    ;
    Dq.prototype.nb = function() {}
    ;
    Dq.prototype.Oa = function() {
        return !1
    }
    ;
    var Hq = function() {
        var a = [new Ep(C)]
          , b = E(tp);
        b.j = a;
        vp(b, function() {
            Jq("i")
        }) ? Jp.done || (Pp(),
        Lp()) : Jq("i")
    };
    Dq.prototype.U = function(a, b) {
        a.Va = !0;
        switch (a.Ba()) {
        case 1:
            Mq(a, b);
            break;
        case 2:
            this.ke(a)
        }
        this.oe(a)
    }
    ;
    var Mq = function(a, b) {
        if (!a.vb) {
            var c = Eo(a, "start", qm());
            c = a.ce.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "966";
            Yp !== null && (d.v = Yp);
            of(c, function(e, f) {
                return d[e] = e == "mtos" || e == "tos" ? f : encodeURIComponent(f)
            });
            b = Up();
            of(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + Km(Im(new Gm, d));
            Nm(b);
            a.vb = !0
        }
    };
    m = Dq.prototype;
    m.Ng = function(a) {
        var b = a.C(a);
        b && (b = b.volume,
        a.ya = gm(b) && b > 0);
        Bo(a, 0);
        return Eo(a, "start", qm())
    }
    ;
    m.Qb = function(a, b, c) {
        Mp(Jp, [a], !qm());
        return this.Na(a, b, c)
    }
    ;
    m.Na = function(a, b, c) {
        return Eo(a, c, qm())
    }
    ;
    m.Ig = function(a) {
        return Nq(a, "firstquartile", 1)
    }
    ;
    m.Kg = function(a) {
        a.fa = !0;
        return Nq(a, "midpoint", 2)
    }
    ;
    m.Og = function(a) {
        return Nq(a, "thirdquartile", 3)
    }
    ;
    m.Fg = function(a) {
        var b = Nq(a, "complete", 4);
        qo(a);
        return b
    }
    ;
    m.Gg = function(a) {
        a.na = 3;
        return Eo(a, "error", qm())
    }
    ;
    var Nq = function(a, b, c) {
        Mp(Jp, [a], !qm());
        Bo(a, c);
        c != 4 && Ao(a.M, c, a.Kc);
        return Eo(a, b, qm())
    };
    m = Dq.prototype;
    m.qf = function(a, b, c) {
        b = qm();
        a.na != 2 || b || (a.sa().I = xl());
        Mp(Jp, [a], !b);
        a.na == 2 && (a.na = 1);
        return Eo(a, c, b)
    }
    ;
    m.Mg = function(a, b) {
        b = this.Qb(a, b || {}, "skip");
        qo(a);
        return b
    }
    ;
    m.Jg = function(a, b) {
        zn(a, !0);
        return this.Qb(a, b || {}, "fullscreen")
    }
    ;
    m.Hg = function(a, b) {
        zn(a, !1);
        return this.Qb(a, b || {}, "exitfullscreen")
    }
    ;
    m.be = function(a, b, c) {
        b = a.sa();
        b.aa = co(b, xl(), a.na != 1);
        Mp(Jp, [a], !qm());
        a.na == 1 && (a.na = 2);
        return Eo(a, c, qm())
    }
    ;
    m.Lg = function(a) {
        Mp(Jp, [a], !qm());
        return a.j()
    }
    ;
    m.Kd = function(a) {
        Mp(Jp, [a], !qm());
        this.lf(a);
        qo(a);
        return a.j()
    }
    ;
    var Cq = function(a) {
        Qp(function() {
            var b = Oq();
            a.j != null && (b.sdk = a.j);
            var c = E(tp);
            up(c) && (b.avms = c.g.getName());
            return b
        })
    }
      , Pq = function(a, b, c, d) {
        var e = lp(np, c);
        e !== null && e.pa !== b && (a.B(e),
        e = null);
        e || (b = a.A(c, xl(), !1, b),
        np.j.length == 0 && (B().l = 79463069),
        sp([b]),
        e = b,
        e.B = Kq(a),
        d && (e.sb = d));
        return e
    };
    Dq.prototype.M = function() {}
    ;
    var Rq = function(a, b) {
        b.D = 0;
        for (var c in El)
            a[c] == null && (b.D |= El[c]);
        Qq(a, "currentTime");
        Qq(a, "duration")
    };
    m = Dq.prototype;
    m.ke = function() {}
    ;
    m.lf = function() {}
    ;
    m.Ae = function() {}
    ;
    m.oe = function() {}
    ;
    m.Dd = function() {}
    ;
    m.Ne = function() {
        this.g || (this.g = this.Dd());
        return this.g == null || this.l ? new io : new mq(this.g)
    }
    ;
    m.Cd = function() {
        return new hq
    }
    ;
    var Qq = function(a, b) {
        var c = a[b];
        c !== void 0 && c > 0 && (a[b] = Math.floor(c * 1E3))
    }
      , Oq = function() {
        var a = pm()
          , b = {}
          , c = {}
          , d = {};
        return Object.assign({}, (b.sv = "966",
        b), Yp !== null && (c.v = Yp,
        c), (d["if"] = a.l ? "1" : "0",
        d.nas = String(np.g.length),
        d))
    };
    var Sq = function(a) {
        fo.call(this, "audio_audible", a)
    };
    v(Sq, fo);
    Sq.prototype.g = function(a) {
        return a.Ic() == 4
    }
    ;
    var Tq = function(a) {
        go.call(this, "audio_measurable", a)
    };
    v(Tq, go);
    Tq.prototype.g = function(a) {
        a = a.Ic();
        return a == 3 || a == 4
    }
    ;
    var Uq = function() {
        jq.apply(this, arguments)
    };
    v(Uq, jq);
    Uq.prototype.j = function() {
        return new Tq(this.g)
    }
    ;
    Uq.prototype.l = function() {
        return [new Sq(this.g)]
    }
    ;
    var Vq = function() {};
    v(Vq, Vn);
    Vq.prototype.g = function(a) {
        a && (a.e === 28 && (a = Object.assign({}, a, {
            avas: 3
        })),
        a.vs === 4 || a.vs === 5) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new Un;
        b.g = Wn(a, Sn);
        b.j = Wn(a, Tn);
        return b
    }
    ;
    var Wq = function(a) {
        this.j = a
    };
    Wq.prototype.report = function(a, b) {
        var c = this.g(b);
        if (typeof c === "function") {
            var d = {};
            var e = {};
            d = Object.assign({}, Yp !== null && (d.v = Yp,
            d), (e.sv = "966",
            e.cb = Xp,
            e.e = Xq(a),
            e));
            e = Eo(b, a, qm());
            nc(d, e);
            b.Cf[a] = e;
            d = b.Ba() == 2 ? Mm(d).join("&") : b.ce.g(d).g;
            try {
                return c(b.pa, d, a),
                0
            } catch (f) {
                return 2
            }
        } else
            return 1
    }
    ;
    var Xq = function(a) {
        var b = aq(a) ? "custom_metric_viewable" : a;
        a = hc(function(c) {
            return c == b
        });
        return Il[a]
    };
    Wq.prototype.g = function() {
        return Ta(this.j)
    }
    ;
    var Yq = function(a, b) {
        this.j = a;
        this.l = b
    };
    v(Yq, Wq);
    Yq.prototype.g = function(a) {
        if (!a.sb)
            return Wq.prototype.g.call(this, a);
        if (this.l[a.sb])
            return function() {}
            ;
        ql(393, Error());
        return null
    }
    ;
    var Zq = function() {
        Dq.call(this);
        this.G = void 0;
        this.H = null;
        this.D = !1;
        this.o = {};
        this.K = 0;
        this.C = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    v(Zq, Dq);
    Zq.prototype.L = function(a, b) {
        var c = this
          , d = E(tp);
        if (up(d))
            switch (d.g.getName()) {
            case "nis":
                var e = $q(this, a, b);
                break;
            case "gsv":
                e = ar(this, a, b);
                break;
            case "exc":
                e = br(this, a)
            }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Pq(this, a, b.opt_adElement, b.opt_osdId)));
        e && e.Ba() == 1 && (e.C == Me && (e.C = function(f) {
            return c.Ae(f)
        }
        ),
        cr(this, e, b));
        return e
    }
    ;
    var cr = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        a.g != null && Array.isArray(c) && Fq(a, c, b)
    };
    Zq.prototype.Ae = function(a) {
        a.j = 0;
        a.P = 0;
        if (a.B == "h" || a.B == "n") {
            var b;
            B();
            if (a.sb && dr(this)) {
                var c = this.o[a.sb];
                c ? b = function(e) {
                    return er(c, e)
                }
                : c !== null && ql(379, Error())
            } else
                b = Ta("ima.common.getVideoMetadata");
            if (typeof b === "function")
                try {
                    var d = b(a.pa)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2
        } else if (a.B == "b")
            if (b = Ta("ytads.bulleit.getVideoMetadata"),
            typeof b === "function")
                try {
                    d = b(a.pa)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2;
        else if (a.B == "ml")
            if (b = Ta("ima.common.getVideoMetadata"),
            typeof b === "function")
                try {
                    d = b(a.pa)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2;
        else
            a.j |= 1;
        a.j || (d === void 0 ? a.j |= 8 : d === null ? a.j |= 16 : jc(d) ? a.j |= 32 : d.errorCode != null && (a.P = d.errorCode,
        a.j |= 64));
        d == null && (d = {});
        Rq(d, a);
        gm(d.volume) && gm(this.G) && (d.volume *= this.G);
        return d
    }
    ;
    var ar = function(a, b, c) {
        var d = kp(np, b);
        d || (d = c.opt_nativeTime || -1,
        d = Eq(a, b, Kq(a), d),
        c.opt_osdId && (d.sb = c.opt_osdId));
        return d
    }
      , $q = function(a, b, c) {
        var d = kp(np, b);
        d || (d = Eq(a, b, "n", c.opt_nativeTime || -1));
        return d
    }
      , br = function(a, b) {
        var c = kp(np, b);
        c || (c = Eq(a, b, "h", -1));
        return c
    };
    Zq.prototype.Dd = function() {
        if (dr(this))
            return new Yq("ima.common.triggerExternalActivityEvent",this.o);
        var a = fr(this);
        return a != null ? new Wq(a) : null
    }
    ;
    var fr = function(a) {
        B();
        switch (Kq(a)) {
        case "b":
            return "ytads.bulleit.triggerExternalActivityEvent";
        case "n":
            return "ima.bridge.triggerExternalActivityEvent";
        case "h":
        case "m":
        case "ml":
            return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Zq.prototype.ke = function(a) {
        !a.g && a.Va && Lq(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    }
    ;
    Zq.prototype.lf = function(a) {
        a.uf && (a.Xa() ? Lq(this, a, "overlay_viewable_end_of_session_impression") : Lq(this, a, "overlay_unviewable_impression"),
        a.uf = !1)
    }
    ;
    var gr = function(a, b, c, d) {
        c = c === void 0 ? {} : c;
        var e = {};
        nc(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.L(b, c);
        c = f ? f.ce : a.Cd();
        if (e.opt_bounds)
            return c.g($p("ol", d));
        if (d !== void 0)
            if (Zp(d) !== void 0)
                if (Tp)
                    a = $p("ue", d);
                else if (Iq(a),
                Sp == "i")
                    a = $p("i", d),
                    a["if"] = 0;
                else if (b = a.L(b, e)) {
                    b: {
                        Sp == "i" && (b.Va = !0,
                        a.oe(b));
                        f = e.opt_fullscreen;
                        f !== void 0 && zn(b, !!f);
                        var g;
                        if (f = !pm().j && !km())
                            Zf(),
                            f = Ue(Ec) === 0;
                        if (g = f) {
                            switch (b.Ba()) {
                            case 1:
                                Mq(b, "pv");
                                break;
                            case 2:
                                a.ke(b)
                            }
                            Jq("pv")
                        }
                        f = d.toLowerCase();
                        if (g = !g)
                            c: {
                                if (yc(B().R, "ssmol") && (g = a.l,
                                f === "loaded"))
                                    break c;
                                g = Cb(Fl, f)
                            }
                        if (g && b.na == 0) {
                            Sp != "i" && (Jp.done = !1);
                            g = e !== void 0 ? e.opt_nativeTime : void 0;
                            vl = g = typeof g === "number" ? g : xl();
                            b.Zb = !0;
                            var h = qm();
                            b.na = 1;
                            b.ma = {};
                            b.ma.start = !1;
                            b.ma.firstquartile = !1;
                            b.ma.midpoint = !1;
                            b.ma.thirdquartile = !1;
                            b.ma.complete = !1;
                            b.ma.resume = !1;
                            b.ma.pause = !1;
                            b.ma.skip = !1;
                            b.ma.mute = !1;
                            b.ma.unmute = !1;
                            b.ma.viewable_impression = !1;
                            b.ma.measurable_impression = !1;
                            b.ma.fully_viewable_audible_half_duration_impression = !1;
                            b.ma.fullscreen = !1;
                            b.ma.exitfullscreen = !1;
                            b.Ed = 0;
                            h || (b.sa().I = g);
                            Mp(Jp, [b], !h)
                        }
                        (g = b.Eb[f]) && b.ja.reportEvent(g);
                        yc(B().R, "fmd") || Cb(Gl, f) && b.ab && b.ab.j(b, null);
                        switch (b.Ba()) {
                        case 1:
                            var k = aq(f) ? a.P.custom_metric_viewable : a.P[f];
                            break;
                        case 2:
                            k = a.V[f]
                        }
                        if (k && (d = k.call(a, b, e, d),
                        yc(B().R, "fmd") && Cb(Gl, f) && b.ab && b.ab.j(b, null),
                        d !== void 0)) {
                            e = $p(void 0, f);
                            nc(e, d);
                            d = e;
                            break b
                        }
                        d = void 0
                    }
                    b.na == 3 && a.B(b);
                    a = d
                } else
                    a = $p("nf", d);
            else
                a = void 0;
        else
            Tp ? a = $p("ue") : f ? (a = $p(),
            nc(a, Do(f, !0, !1, !1))) : a = $p("nf");
        return typeof a === "string" ? c.g() : c.g(a)
    };
    Zq.prototype.M = function(a) {
        this.l && a.Ba() == 1 && hr(this, a)
    }
    ;
    Zq.prototype.oe = function(a) {
        this.l && a.Ba() == 1 && hr(this, a)
    }
    ;
    var hr = function(a, b) {
        var c;
        if (b.sb && dr(a)) {
            var d = a.o[b.sb];
            d ? c = function(f, g) {
                ir(d, f, g)
            }
            : d !== null && ql(379, Error())
        } else
            c = Ta("ima.common.triggerViewabilityMeasurementUpdate");
        if (typeof c === "function") {
            var e = yo(b);
            e.nativeVolume = a.G;
            c(b.pa, e)
        }
    }
      , dr = function(a) {
        return (B(),
        Kq(a) != "h" && Kq(a) != "m") ? !1 : a.K != 0
    };
    Zq.prototype.A = function(a, b, c, d) {
        if (Pk()) {
            var e = yc(B().R, "mm")
              , f = {};
            (e = (f[Qb.Ef] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO",
            f[Qb.VIDEO] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO",
            f)[e]) && e && (this.C = e);
            this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" && ql(1044, Error())
        }
        a = Dq.prototype.A.call(this, a, b, c, d);
        this.D && (b = this.H,
        a.o == null && (a.o = new Hn),
        b.g[a.pa] = a.o,
        a.o.B = ap);
        return a
    }
    ;
    Zq.prototype.B = function(a) {
        a && a.Ba() == 1 && this.D && delete this.H.g[a.pa];
        return Dq.prototype.B.call(this, a)
    }
    ;
    Zq.prototype.Ne = function() {
        this.g || (this.g = this.Dd());
        return this.g == null || this.l ? new io : this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new Uq(this.g) : new mq(this.g)
    }
    ;
    Zq.prototype.Cd = function() {
        return this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new Vq : new hq
    }
    ;
    var jr = function(a) {
        var b = {};
        return b.viewability = a.g,
        b.googleViewability = a.j,
        b
    }
      , kr = function(a, b, c) {
        c = c === void 0 ? {} : c;
        a = gr(E(Zq), b, c, a);
        return jr(a)
    }
      , lr = pl(193, kr, void 0, Oq);
    z("Goog_AdSense_Lidar_sendVastEvent", lr);
    var mr = pl(194, function(a, b) {
        b = b === void 0 ? {} : b;
        a = gr(E(Zq), a, b);
        return jr(a)
    });
    z("Goog_AdSense_Lidar_getViewability", mr);
    var nr = pl(195, function() {
        return ag()
    });
    z("Goog_AdSense_Lidar_getUrlSignalsArray", nr);
    var or = pl(196, function() {
        return JSON.stringify(ag())
    });
    z("Goog_AdSense_Lidar_getUrlSignalsList", or);
    var pr = function() {
        var a = Fe(Ec.querySelector("iframe[src^='//tpc.googlesyndication.com/sodar']"));
        var b = {};
        b = (b["0"] = "3",
        b["10"] = "",
        b["11"] = 2,
        b["12"] = 1,
        b);
        var c = (location.protocol.indexOf("https:") == 0 ? "https:" : "http:") + "//tpc.googlesyndication.com";
        a && a.postMessage(b, c)
    };
    var qr = ra(["//ep2.adtrafficquality.google/sodar/", ""])
      , rr = ra(["//tpc.googlesyndication.com/sodar/", ""]);
    y.console && typeof y.console.log === "function" && eb(y.console.log, y.console);
    var sr = function(a) {
        for (var b = [], c = a = ze(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement)
                b.push(c.frameElement);
            else
                break;
        return b
    };
    var tr = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = !1
    };
    tr.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var ur = function(a, b) {
        tr.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Tb = null;
        a && this.init(a, b)
    };
    mb(ur, tr);
    ur.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        b = a.relatedTarget;
        b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX,
        this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX,
        this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.Tb = a;
        a.defaultPrevented && ur.Qa.preventDefault.call(this)
    }
    ;
    ur.prototype.preventDefault = function() {
        ur.Qa.preventDefault.call(this);
        var a = this.Tb;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var vr = "closure_listenable_" + (Math.random() * 1E6 | 0)
      , wr = function(a) {
        return !(!a || !a[vr])
    };
    var xr = 0;
    var yr = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Lc = e;
        this.key = ++xr;
        this.rc = this.Bc = !1
    }
      , zr = function(a) {
        a.rc = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Lc = null
    };
    function Ar(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    }
    Ar.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.j++);
        var g = Br(a, b, d, e);
        g > -1 ? (b = a[g],
        c || (b.Bc = !1)) : (b = new yr(b,this.src,f,!!d,e),
        b.Bc = c,
        a.push(b));
        return b
    }
    ;
    Ar.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g))
            return !1;
        var e = this.g[a];
        b = Br(e, b, c, d);
        return b > -1 ? (zr(e[b]),
        Eb(e, b),
        e.length == 0 && (delete this.g[a],
        this.j--),
        !0) : !1
    }
    ;
    var Cr = function(a, b) {
        var c = b.type;
        c in a.g && Db(a.g[c], b) && (zr(b),
        a.g[c].length == 0 && (delete a.g[c],
        a.j--))
    };
    Ar.prototype.bc = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = Br(a, b, c, d));
        return e > -1 ? a[e] : null
    }
    ;
    var Br = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.rc && f.listener == b && f.capture == !!c && f.Lc == d)
                return e
        }
        return -1
    };
    var Dr = "closure_lm_" + (Math.random() * 1E6 | 0)
      , Er = {}
      , Fr = 0
      , Hr = function(a, b, c, d, e) {
        if (d && d.once)
            return Gr(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Hr(a, b[f], c, d, e);
            return null
        }
        c = Ir(c);
        return wr(a) ? a.listen(b, c, Wa(d) ? !!d.capture : !!d, e) : Jr(a, b, c, !1, d, e)
    }
      , Jr = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = Wa(e) ? !!e.capture : !!e
          , h = Kr(a);
        h || (a[Dr] = h = new Ar(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy)
            return c;
        d = Lr();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            jf || (e = g),
            e === void 0 && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(Mr(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Fr++;
        return c
    }
      , Lr = function() {
        var a = Nr
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
      , Gr = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Gr(a, b[f], c, d, e);
            return null
        }
        c = Ir(c);
        return wr(a) ? a.hc(b, c, Wa(d) ? !!d.capture : !!d, e) : Jr(a, b, c, !0, d, e)
    }
      , Or = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Or(a, b[f], c, d, e);
        else
            d = Wa(d) ? !!d.capture : !!d,
            c = Ir(c),
            wr(a) ? a.Ra(b, c, d, e) : a && (a = Kr(a)) && (b = a.bc(b, c, d, e)) && Pr(b)
    }
      , Pr = function(a) {
        if (typeof a !== "number" && a && !a.rc) {
            var b = a.src;
            if (wr(b))
                Cr(b.B, a);
            else {
                var c = a.type
                  , d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Mr(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Fr--;
                (c = Kr(b)) ? (Cr(c, a),
                c.j == 0 && (c.src = null,
                b[Dr] = null)) : zr(a)
            }
        }
    }
      , Mr = function(a) {
        return a in Er ? Er[a] : Er[a] = "on" + a
    }
      , Nr = function(a, b) {
        if (a.rc)
            a = !0;
        else {
            b = new ur(b,this);
            var c = a.listener
              , d = a.Lc || a.src;
            a.Bc && Pr(a);
            a = c.call(d, b)
        }
        return a
    }
      , Kr = function(a) {
        a = a[Dr];
        return a instanceof Ar ? a : null
    }
      , Qr = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0)
      , Ir = function(a) {
        if (typeof a === "function")
            return a;
        a[Qr] || (a[Qr] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Qr]
    };
    var N = function() {
        M.call(this);
        this.B = new Ar(this);
        this.vb = this;
        this.ha = null
    };
    mb(N, M);
    N.prototype[vr] = !0;
    m = N.prototype;
    m.addEventListener = function(a, b, c, d) {
        Hr(this, a, b, c, d)
    }
    ;
    m.removeEventListener = function(a, b, c, d) {
        Or(this, a, b, c, d)
    }
    ;
    m.dispatchEvent = function(a) {
        var b, c = this.ha;
        if (c)
            for (b = []; c; c = c.ha)
                b.push(c);
        c = this.vb;
        var d = a.type || a;
        if (typeof a === "string")
            a = new tr(a,c);
        else if (a instanceof tr)
            a.target = a.target || c;
        else {
            var e = a;
            a = new tr(d,c);
            nc(a, e)
        }
        e = !0;
        var f;
        if (b)
            for (f = b.length - 1; f >= 0; f--) {
                var g = a.currentTarget = b[f];
                e = Rr(g, d, !0, a) && e
            }
        g = a.currentTarget = c;
        e = Rr(g, d, !0, a) && e;
        e = Rr(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++)
                g = a.currentTarget = b[f],
                e = Rr(g, d, !1, a) && e;
        return e
    }
    ;
    m.O = function() {
        N.Qa.O.call(this);
        this.je();
        this.ha = null
    }
    ;
    m.listen = function(a, b, c, d) {
        return this.B.add(String(a), b, !1, c, d)
    }
    ;
    m.hc = function(a, b, c, d) {
        return this.B.add(String(a), b, !0, c, d)
    }
    ;
    m.Ra = function(a, b, c, d) {
        this.B.remove(String(a), b, c, d)
    }
    ;
    m.je = function() {
        if (this.B) {
            var a = this.B, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++)
                    ++b,
                    zr(d[e]);
                delete a.g[c];
                a.j--
            }
        }
    }
    ;
    var Rr = function(a, b, c, d) {
        b = a.B.g[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.rc && g.capture == c) {
                var h = g.listener
                  , k = g.Lc || g.src;
                g.Bc && Cr(a.B, g);
                e = h.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };
    N.prototype.bc = function(a, b, c, d) {
        return this.B.bc(String(a), b, c, d)
    }
    ;
    var Sr = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? function(a) {
        return a && AsyncContext.Snapshot.wrap(a)
    }
    : function(a) {
        return a
    }
    ;
    var Tr = function(a, b) {
        this.l = a;
        this.o = b;
        this.j = 0;
        this.g = null
    };
    Tr.prototype.get = function() {
        if (this.j > 0) {
            this.j--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else
            a = this.l();
        return a
    }
    ;
    var Ur = function(a, b) {
        a.o(b);
        a.j < 100 && (a.j++,
        b.next = a.g,
        a.g = b)
    };
    var Vr = function() {
        this.j = this.g = null
    };
    Vr.prototype.add = function(a, b) {
        var c = Wr.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.g = c;
        this.j = c
    }
    ;
    Vr.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g,
        this.g = this.g.next,
        this.g || (this.j = null),
        a.next = null);
        return a
    }
    ;
    var Wr = new Tr(function() {
        return new Xr
    }
    ,function(a) {
        return a.reset()
    }
    )
      , Xr = function() {
        this.next = this.g = this.j = null
    };
    Xr.prototype.set = function(a, b) {
        this.j = a;
        this.g = b;
        this.next = null
    }
    ;
    Xr.prototype.reset = function() {
        this.next = this.g = this.j = null
    }
    ;
    var Yr, Zr = !1, $r = new Vr, bs = function(a, b) {
        Yr || as();
        Zr || (Yr(),
        Zr = !0);
        $r.add(a, b)
    }, as = function() {
        var a = Promise.resolve(void 0);
        Yr = function() {
            a.then(cs)
        }
    };
    function cs() {
        for (var a; a = $r.remove(); ) {
            try {
                a.j.call(a.g)
            } catch (b) {
                gg(b)
            }
            Ur(Wr, a)
        }
        Zr = !1
    }
    ;var ds = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var fs = function(a) {
        this.g = 0;
        this.C = void 0;
        this.o = this.j = this.l = null;
        this.B = this.A = !1;
        if (a != Me)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    es(b, 2, c)
                }, function(c) {
                    es(b, 3, c)
                })
            } catch (c) {
                es(this, 3, c)
            }
    }
      , gs = function() {
        this.next = this.context = this.j = this.l = this.g = null;
        this.o = !1
    };
    gs.prototype.reset = function() {
        this.context = this.j = this.l = this.g = null;
        this.o = !1
    }
    ;
    var hs = new Tr(function() {
        return new gs
    }
    ,function(a) {
        a.reset()
    }
    )
      , is = function(a, b, c) {
        var d = hs.get();
        d.l = a;
        d.j = b;
        d.context = c;
        return d
    };
    fs.prototype.then = function(a, b, c) {
        return js(this, Sr(typeof a === "function" ? a : null), Sr(typeof b === "function" ? b : null), c)
    }
    ;
    fs.prototype.$goog_Thenable = !0;
    fs.prototype.I = function(a, b) {
        return js(this, null, Sr(a), b)
    }
    ;
    fs.prototype.catch = fs.prototype.I;
    fs.prototype.cancel = function(a) {
        if (this.g == 0) {
            var b = new ks(a);
            bs(function() {
                ls(this, b)
            }, this)
        }
    }
    ;
    var ls = function(a, b) {
        if (a.g == 0)
            if (a.l) {
                var c = a.l;
                if (c.j) {
                    for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++,
                    g.g == a && (e = g),
                    !(e && d > 1))); g = g.next)
                        e || (f = g);
                    e && (c.g == 0 && d == 1 ? ls(c, b) : (f ? (d = f,
                    d.next == c.o && (c.o = d),
                    d.next = d.next.next) : ms(c),
                    ns(c, e, 3, b)))
                }
                a.l = null
            } else
                es(a, 3, b)
    }
      , ps = function(a, b) {
        a.j || a.g != 2 && a.g != 3 || os(a);
        a.o ? a.o.next = b : a.j = b;
        a.o = b
    }
      , js = function(a, b, c, d) {
        var e = is(null, null, null);
        e.g = new fs(function(f, g) {
            e.l = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (l) {
                    g(l)
                }
            }
            : f;
            e.j = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    k === void 0 && h instanceof ks ? g(h) : f(k)
                } catch (l) {
                    g(l)
                }
            }
            : g
        }
        );
        e.g.l = a;
        ps(a, e);
        return e.g
    };
    fs.prototype.D = function(a) {
        this.g = 0;
        es(this, 2, a)
    }
    ;
    fs.prototype.G = function(a) {
        this.g = 0;
        es(this, 3, a)
    }
    ;
    var es = function(a, b, c) {
        if (a.g == 0) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c
                  , e = a.D
                  , f = a.G;
                if (d instanceof fs) {
                    ps(d, is(e || Me, f || null, a));
                    var g = !0
                } else if (ds(d))
                    d.then(e, f, a),
                    g = !0;
                else {
                    if (Wa(d))
                        try {
                            var h = d.then;
                            if (typeof h === "function") {
                                qs(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
            g || (a.C = c,
            a.g = b,
            a.l = null,
            os(a),
            b != 3 || c instanceof ks || rs(a, c))
        }
    }
      , qs = function(a, b, c, d, e) {
        var f = !1
          , g = function(k) {
            f || (f = !0,
            c.call(e, k))
        }
          , h = function(k) {
            f || (f = !0,
            d.call(e, k))
        };
        try {
            b.call(a, g, h)
        } catch (k) {
            h(k)
        }
    }
      , os = function(a) {
        a.A || (a.A = !0,
        bs(a.L, a))
    }
      , ms = function(a) {
        var b = null;
        a.j && (b = a.j,
        a.j = b.next,
        b.next = null);
        a.j || (a.o = null);
        return b
    };
    fs.prototype.L = function() {
        for (var a; a = ms(this); )
            ns(this, a, this.g, this.C);
        this.A = !1
    }
    ;
    var ns = function(a, b, c, d) {
        if (c == 3 && b.j && !b.o)
            for (; a && a.B; a = a.l)
                a.B = !1;
        if (b.g)
            b.g.l = null,
            ss(b, c, d);
        else
            try {
                b.o ? b.l.call(b.context) : ss(b, c, d)
            } catch (e) {
                ts.call(null, e)
            }
        Ur(hs, b)
    }
      , ss = function(a, b, c) {
        b == 2 ? a.l.call(a.context, c) : a.j && a.j.call(a.context, c)
    }
      , rs = function(a, b) {
        a.B = !0;
        bs(function() {
            a.B && ts.call(null, b)
        })
    }
      , ts = gg
      , ks = function(a) {
        nb.call(this, a)
    };
    mb(ks, nb);
    ks.prototype.name = "cancel";
    var us = function(a, b) {
        N.call(this);
        this.j = a || 1;
        this.g = b || y;
        this.l = eb(this.Dh, this);
        this.o = jb()
    };
    mb(us, N);
    m = us.prototype;
    m.enabled = !1;
    m.Fa = null;
    m.setInterval = function(a) {
        this.j = a;
        this.Fa && this.enabled ? (this.stop(),
        this.start()) : this.Fa && this.stop()
    }
    ;
    m.Dh = function() {
        if (this.enabled) {
            var a = jb() - this.o;
            a > 0 && a < this.j * .8 ? this.Fa = this.g.setTimeout(this.l, this.j - a) : (this.Fa && (this.g.clearTimeout(this.Fa),
            this.Fa = null),
            this.dispatchEvent("tick"),
            this.enabled && (this.stop(),
            this.start()))
        }
    }
    ;
    m.start = function() {
        this.enabled = !0;
        this.Fa || (this.Fa = this.g.setTimeout(this.l, this.j),
        this.o = jb())
    }
    ;
    m.stop = function() {
        this.enabled = !1;
        this.Fa && (this.g.clearTimeout(this.Fa),
        this.Fa = null)
    }
    ;
    m.O = function() {
        us.Qa.O.call(this);
        this.stop();
        delete this.g
    }
    ;
    var vs = function(a, b) {
        if (typeof a !== "function")
            if (a && typeof a.handleEvent == "function")
                a = eb(a.handleEvent, a);
            else
                throw Error("Invalid listener argument");
        return Number(b) > 2147483647 ? -1 : y.setTimeout(a, b || 0)
    }
      , ws = function(a, b) {
        var c = null;
        return (new fs(function(d, e) {
            c = vs(function() {
                d(b)
            }, a);
            c == -1 && e(Error("Failed to schedule timer."))
        }
        )).I(function(d) {
            y.clearTimeout(c);
            throw d;
        })
    };
    var xs = function() {
        return Math.round(Date.now() / 1E3)
    };
    var ys = function() {
        this.g = {};
        return this
    };
    ys.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    }
    ;
    ys.prototype.set = function(a, b) {
        this.g[a] = b
    }
    ;
    var zs = function(a, b) {
        a.g.eb = lc(a.g, "eb", 0) | b
    };
    ys.prototype.get = function(a) {
        return lc(this.g, a, null)
    }
    ;
    ys.prototype.da = function() {
        var a = [], b;
        for (b in this.g)
            a.push(b + this.g[b]);
        return a.join("_")
    }
    ;
    var As = null
      , Bs = function() {
        this.g = {};
        this.j = 0
    }
      , Cs = function() {
        As || (As = new Bs);
        return As
    }
      , Ds = function(a, b) {
        a.g[b.getName()] = b
    };
    Bs.prototype.da = function(a) {
        var b = [];
        a || (a = 0);
        for (var c in this.g) {
            var d = this.g[c];
            d instanceof Es ? d.getValue() && (a |= d.B) : (d = this.g[c].da()) && b.push(c + d)
        }
        b.push("eb" + String(a));
        return b.join("_")
    }
    ;
    var Fs = function(a, b) {
        this.o = a;
        this.l = !0;
        this.g = b
    };
    Fs.prototype.getName = function() {
        return this.o
    }
    ;
    Fs.prototype.getValue = function() {
        return this.g
    }
    ;
    Fs.prototype.da = function() {
        return this.l ? this.j() : ""
    }
    ;
    Fs.prototype.j = function() {
        return String(this.g)
    }
    ;
    var Es = function(a, b) {
        Fs.call(this, String(a), b);
        this.B = a;
        this.g = !!b
    };
    v(Es, Fs);
    Es.prototype.j = function() {
        return this.g ? "1" : "0"
    }
    ;
    var Gs = function(a, b) {
        Fs.call(this, a, b)
    };
    v(Gs, Fs);
    Gs.prototype.j = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    }
    ;
    var Hs = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0])
              , c = Number(a[1]);
            return new Gs("",new Ml(c,b,Number(a[3]) - c,Number(a[2]) - b))
        }
        return new Gs("",new Ml(0,0,0,0))
    };
    var Is = function(a) {
        var b = new Ml(-Number.MAX_VALUE / 2,-Number.MAX_VALUE / 2,Number.MAX_VALUE,Number.MAX_VALUE)
          , c = new Ml(0,0,0,0);
        if (!a || 0 == a.length)
            return c;
        for (var d = 0; d < a.length; d++) {
            a: {
                var e = b;
                var f = a[d]
                  , g = Math.max(e.left, f.left)
                  , h = Math.min(e.left + e.width, f.left + f.width);
                if (g <= h) {
                    var k = Math.max(e.top, f.top);
                    f = Math.min(e.top + e.height, f.top + f.height);
                    if (k <= f) {
                        e.left = g;
                        e.top = k;
                        e.width = h - g;
                        e.height = f - k;
                        e = !0;
                        break a
                    }
                }
                e = !1
            }
            if (!e)
                return c
        }
        return b
    }
      , Js = function(a, b) {
        var c = a.getBoundingClientRect();
        a = Vl(a, b);
        return new Ml(Math.round(a.x),Math.round(a.y),Math.round(c.right - c.left),Math.round(c.bottom - c.top))
    }
      , Ks = function(a, b, c) {
        if (b && c) {
            a: {
                var d = Math.max(b.left, c.left);
                var e = Math.min(b.left + b.width, c.left + c.width);
                if (d <= e) {
                    var f = Math.max(b.top, c.top)
                      , g = Math.min(b.top + b.height, c.top + c.height);
                    if (f <= g) {
                        d = new Ml(d,f,e - d,g - f);
                        break a
                    }
                }
                d = null
            }
            e = d ? d.height * d.width : 0;
            f = d ? b.height * b.width : 0;
            d = d && f ? Math.round(e / f * 100) : 0;
            Ds(a, new Fs("vp",d));
            d && d > 0 ? (e = Nl(b),
            f = Nl(c),
            e = e.top >= f.top && e.top < f.bottom) : e = !1;
            Ds(a, new Es(512,e));
            d && d > 0 ? (e = Nl(b),
            f = Nl(c),
            e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
            Ds(a, new Es(1024,e));
            d && d > 0 ? (e = Nl(b),
            f = Nl(c),
            e = e.left >= f.left && e.left < f.right) : e = !1;
            Ds(a, new Es(2048,e));
            d && d > 0 ? (b = Nl(b),
            c = Nl(c),
            c = b.right <= c.right && b.right > c.left) : c = !1;
            Ds(a, new Es(4096,c))
        }
    };
    var Ls = function(a, b) {
        var c = 0;
        ec(ze(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = Cs();
            a.g = {};
            var e = new Es(32,!0);
            e.l = !1;
            Ds(a, e);
            e = ze().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            Ds(a, new Es(64,e.toLowerCase().substring(e.length - 6) != "hidden" ? !0 : !1));
            a: {
                try {
                    var f = ze().top;
                    try {
                        var g = !!f.location.href || f.location.href === ""
                    } catch (n) {
                        g = !1
                    }
                    if (g) {
                        var h = sr(d);
                        var k = h && h.length != 0 ? "1" : "0";
                        break a
                    }
                    k = "2";
                    break a
                } catch (n) {
                    k = "2";
                    break a
                }
                k = void 0
            }
            Ds(a, new Es(256,k == "2"));
            Ds(a, new Es(128,k == "1"));
            h = g = ze().top;
            k == "2" && (h = ze());
            f = Js(d, h);
            Ds(a, new Gs("er",f));
            try {
                var l = h.document && !h.document.body ? null : ye(h || window)
            } catch (n) {
                l = null
            }
            l ? (h = He(ue(h.document)),
            Ds(a, new Es(16384,!!h)),
            l = h ? new Ml(h.x,h.y,l.width,l.height) : null) : l = null;
            Ds(a, new Gs("vi",l));
            if (l && "1" == k) {
                k = sr(d);
                d = [];
                for (h = 0; h < k.length; h++)
                    (e = Js(k[h], g)) && d.push(e);
                d.push(l);
                l = Is(d)
            }
            Ks(a, f, l);
            a.j && Ds(a, new Fs("ts",xs() - a.j));
            a.j = xs()
        } else
            a = Cs(),
            a.g = {},
            a.j = xs(),
            Ds(a, new Es(32,!1));
        this.l = a;
        this.g = new ys;
        this.g.set("ve", 4);
        c && zs(this.g, 1);
        ec(ze(), "ima", "video", "client", "crossdomainTag") && zs(this.g, 4);
        ec(ze(), "ima", "video", "client", "sdkTag") && zs(this.g, 8);
        ec(ze(), "ima", "video", "client", "jsTag") && zs(this.g, 2);
        b && lc(b, "fullscreen", !1) && zs(this.g, 16);
        this.j = b = null;
        if (c && (c = ec(ze(), "ima", "video", "client"),
        c.getEData)) {
            this.j = c.getEData();
            if (c = ec(ze(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c())
                    this.j.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    c = this.l,
                    b = a.er,
                    a = a.vi,
                    b && a && (b = Hs(b).getValue(),
                    a = Hs(a).getValue(),
                    k = null,
                    lc(c.g, "er", null) && (k = lc(c.g, "er", null).getValue(),
                    k.top += b.top,
                    k.left += b.left,
                    Ds(c, new Gs("er",k))),
                    lc(c.g, "vi", null) && (l = lc(c.g, "vi", null).getValue(),
                    l.top += b.top,
                    l.left += b.left,
                    d = [],
                    d.push(l),
                    d.push(b),
                    d.push(a),
                    b = Is(d),
                    Ks(c, k, b),
                    Ds(c, new Gs("vi",a))));
            a: {
                if (this.j) {
                    if (this.j.getTagLoadTimestamp) {
                        b = this.j.getTagLoadTimestamp();
                        break a
                    }
                    if (this.j.getTimeSinceTagLoadSeconds) {
                        b = this.j.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && window.performance.timing.domLoading > 0 ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", xs() - (a != null ? a : b != null ? b : xs()))
    };
    Ls.prototype.da = function() {
        var a = []
          , b = Number(this.g.get("eb"));
        this.g.remove("eb");
        var c = this.g.da();
        c && a.push(c);
        this.j && (c = this.j.serialize()) && a.push(c);
        (c = this.l.da(b)) && a.push(c);
        this.g.set("eb", b);
        return a.join("_")
    }
    ;
    new us(200);
    var Ms = function(a, b) {
        try {
            return (new Ls(a,b)).da()
        } catch (c) {
            return "tle;" + Cd(c.name, 12) + ";" + Cd(c.message, 40)
        }
    };
    var Ns = function(a) {
        this.F = G(a)
    };
    v(Ns, J);
    Ns.prototype.getId = function() {
        return Xi(this, 1)
    }
    ;
    var Os = [0, jk];
    var Ps = function(a) {
        this.F = G(a)
    };
    v(Ps, J);
    var Qs = [0, jk, -3];
    var Rs = function(a) {
        this.F = G(a)
    };
    v(Rs, J);
    Rs.prototype.getWidth = function() {
        return Ui(this, 1)
    }
    ;
    Rs.prototype.getHeight = function() {
        return Ui(this, 2)
    }
    ;
    var Ss = [0, gk, -1];
    var Ts = function(a) {
        this.F = G(a)
    };
    v(Ts, J);
    var Us = [0, dk, ik, jk, -1];
    var Vs = function(a) {
        this.F = G(a)
    };
    v(Vs, J);
    m = Vs.prototype;
    m.getAdId = function() {
        return Xi(this, 1)
    }
    ;
    m.getSize = function() {
        return Li(this, Rs, 7)
    }
    ;
    m.setSize = function(a) {
        return H(this, 7, a)
    }
    ;
    m.dc = function() {
        return Li(this, Ts, 9)
    }
    ;
    m.clearVideo = function() {
        return yi(this, 9)
    }
    ;
    var Ws = [0, jk, dk, jk, kk, Dk, Os, Ss, dk, Us, jk, Qs];
    var Xs = function(a) {
        this.F = G(a)
    };
    v(Xs, J);
    var Ys = function(a, b) {
        return hj(a, 1, b)
    }
      , Zs = function(a, b) {
        return cj(a, 4, b)
    }
      , $s = function(a, b) {
        return ej(a, 2, b)
    };
    var at = function(a) {
        this.F = G(a)
    };
    v(at, J);
    var bt = function(a, b) {
        return gj(a, 1, b)
    }
      , ct = function(a, b) {
        Pi(a, 3, Vs, b);
        return a
    }
      , dt = function(a, b) {
        return hj(a, 4, b)
    }
      , et = function(a, b) {
        return cj(a, 6, b)
    };
    var ft = [0, Dk, gk, jk, ik];
    var gt = [0, jk, dk, Ak, Ws, Dk, ft, ik, Dk, 2, kk];
    var ht = function(a) {
        this.F = G(a)
    };
    v(ht, J);
    var it = function(a) {
        this.F = G(a)
    };
    v(it, J);
    var jt = function(a, b) {
        return Pi(a, 2, at, b)
    }
      , kt = function(a, b) {
        H(a, 5, b)
    }
      , lt = function(a, b) {
        gj(a, 10, b)
    }
      , mt = function(a, b) {
        gj(a, 11, b)
    };
    var nt = [0, Dk, Ak, gt, Dk, jk, ft, jk, ik, gk, [0, Dk, ik, dk], jk, -1];
    var ot = function(a) {
        this.F = G(a)
    };
    v(ot, J);
    var pt = function(a) {
        var b = new it;
        b = hj(b, 1, 1);
        return Pi(a, 1, it, b)
    };
    var qt = Fk([0, Ak, nt]);
    var rt = function(a) {
        this.F = G(a)
    };
    v(rt, J);
    var st = function(a) {
        this.F = G(a)
    };
    v(st, J);
    var tt = function(a) {
        this.F = G(a)
    };
    v(tt, J);
    var ut = function(a) {
        this.F = G(a)
    };
    v(ut, J);
    var vt = function(a) {
        this.F = G(a)
    };
    v(vt, J);
    var wt = function(a) {
        this.F = G(a)
    };
    v(wt, J);
    var xt = function(a) {
        this.F = G(a)
    };
    v(xt, J);
    var zt = function(a) {
        this.F = G(a)
    };
    v(zt, J);
    zt.prototype.getEscapedQemQueryId = function() {
        return Xi(this, 1)
    }
    ;
    var At = function(a) {
        this.F = G(a)
    };
    v(At, J);
    var Bt = function(a) {
        this.F = G(a)
    };
    v(Bt, J);
    var Ct = [0, jk, [0, ck], [0, Dk, dk]];
    var Dt = Hk(Bt);
    var Et = function(a) {
        this.F = G(a)
    };
    v(Et, J);
    var Ft = function(a) {
        var b = new Et;
        return hj(b, 1, a)
    };
    var Gt = [0, Dk];
    var Ht = function(a) {
        this.F = G(a)
    };
    v(Ht, J);
    var It = function(a) {
        var b = new Ht;
        return gj(b, 1, a)
    }
      , Jt = function(a) {
        var b = window.Date.now();
        b = Number.isFinite(b) ? Math.round(b) : 0;
        return yi(a, 3, Ah(b))
    };
    Ht.prototype.getError = function() {
        return Li(this, Et, 10)
    }
    ;
    Ht.prototype.Pa = function(a) {
        return H(this, 10, a)
    }
    ;
    var Kt = Ik(Ht);
    var Lt = [0, jk, -1, dk, gk, -2, dk, bk, ik, Gt, ik];
    var Mt = [0, 1, [0, fk, -2], -1, jk, -1, ik, [0, 3, Dk, jk], dk, Ek, Ck];
    var Nt = function(a) {
        this.F = G(a)
    };
    v(Nt, J);
    Nt.prototype.j = Gk([0, Ak, Mt, Ak, Lt]);
    function Ot(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    b = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
    ;var Rt = function() {
        var a = Pt;
        this.B = Qt;
        this.A = "jserror";
        this.j = !0;
        this.g = a === void 0 ? null : a;
        this.l = null;
        this.o = !1;
        this.yb = this.Za
    };
    m = Rt.prototype;
    m.pe = function(a) {
        this.l = a
    }
    ;
    m.sf = function(a) {
        this.A = a
    }
    ;
    m.qe = function(a) {
        this.j = a
    }
    ;
    m.tf = function(a) {
        this.o = a
    }
    ;
    m.Bb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else
                e = b()
        } catch (h) {
            b = this.j;
            try {
                fl(d),
                b = this.yb(a, new Tk(h,{
                    message: Ot(h)
                }), void 0, c)
            } catch (k) {
                this.Za(217, k)
            }
            if (b) {
                var f, g;
                (f = window.console) == null || (g = f.error) == null || g.call(f, h)
            } else
                throw h;
        }
        return e
    }
    ;
    m.fe = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = La.apply(0, arguments);
            return e.Bb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    m.Za = function(a, b, c, d, e) {
        e = e || this.A;
        var f = void 0;
        try {
            var g = new If;
            Nf(g, 1, "context", a);
            Uk(b) || (b = new Tk(b,{
                message: Ot(b)
            }));
            b.msg && Nf(g, 2, "msg", b.msg.substring(0, 512));
            var h = b.meta || {};
            if (this.l)
                try {
                    this.l(h)
                } catch (n) {}
            if (d)
                try {
                    d(h)
                } catch (n) {}
            Mf(g, 3, [h]);
            f = Hf();
            f.j && Nf(g, 4, "top", f.j.url || "");
            Mf(g, 5, [{
                url: f.g.url || ""
            }, {
                url: f.g.url ? nf(f.g.url) : ""
            }]);
            St(this.B, e, g, this.o, c)
        } catch (n) {
            try {
                var k, l;
                St(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Ot(n),
                    url: (l = (k = f) == null ? void 0 : k.g.url) != null ? l : ""
                }, this.o, c)
            } catch (p) {}
        }
        return this.j
    }
    ;
    var Tt = function(a) {
        this.F = G(a)
    };
    v(Tt, J);
    var Ut = function(a) {
        this.F = G(a)
    };
    v(Ut, J);
    var Vt = function(a) {
        this.F = G(a)
    };
    v(Vt, J);
    var Wt = function(a) {
        this.F = G(a)
    };
    v(Wt, J);
    Wt.prototype.lb = function() {
        return Li(this, Ut, 1)
    }
    ;
    Wt.prototype.getSize = function() {
        return Li(this, Vt, 2)
    }
    ;
    Wt.prototype.setSize = function(a) {
        return H(this, 2, a)
    }
    ;
    Wt.prototype.getDuration = function() {
        return Li(this, Tt, 3)
    }
    ;
    var Xt = function(a) {
        this.F = G(a)
    };
    v(Xt, J);
    var Yt = function(a) {
        this.F = G(a)
    };
    v(Yt, J);
    var Zt = function(a) {
        this.F = G(a)
    };
    v(Zt, J);
    var $t = function(a) {
        this.F = G(a)
    };
    v($t, J);
    var au = function(a) {
        this.F = G(a)
    };
    v(au, J);
    au.prototype.getEscapedQemQueryId = function() {
        return Xi(this, 4)
    }
    ;
    var bu = function(a) {
        this.F = G(a)
    };
    v(bu, J);
    var cu = function(a) {
        this.F = G(a)
    };
    v(cu, J);
    cu.prototype.getEscapedQemQueryId = function() {
        return Xi(this, 2)
    }
    ;
    var du = function(a) {
        return Ki(a, bu, 5)
    };
    var eu = function() {}
      , fu = function() {
        E(eu);
        return []
    };
    var gu = function() {
        this.domain = "pagead2.googlesyndication.com";
        this.path = "/pagead/gen_204?id=";
        this.g = Math.random()
    }
      , hu = function() {
        var a = Qt
          , b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
      , St = function(a, b, c, d, e) {
        if (((d === void 0 ? 0 : d) ? a.g : Math.random()) < (e || .01))
            try {
                if (c instanceof If)
                    var f = c;
                else
                    f = new If,
                    tf(c, function(h, k) {
                        var l = f
                          , n = l.o++;
                        Mf(l, n, Jf(k, h))
                    });
                var g = Pf(f, "https:", a.domain, a.path + b + "&");
                g && Uf(y, g)
            } catch (h) {}
    };
    var Qt, iu, Pt = new el(1,window);
    (function(a) {
        Qt = a != null ? a : new gu;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        hu();
        iu = new Rt;
        iu.pe(function() {});
        iu.tf(!0);
        window.document.readyState === "complete" ? window.google_measure_js_timing || Pt.A() : Pt.l && Se(window, "load", function() {
            window.google_measure_js_timing || Pt.A()
        })
    }
    )();
    var ju = function(a) {
        this.F = G(a)
    };
    v(ju, J);
    var ku = function(a) {
        this.F = G(a)
    };
    v(ku, J);
    var lu = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var mu = function(a) {
        this.F = G(a)
    };
    v(mu, J);
    mu.prototype.getType = function() {
        return Ui(this, 1)
    }
    ;
    mu.prototype.getVersion = function() {
        return Ui(this, 2)
    }
    ;
    function nu(a) {
        return mg(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return b.toString(2).padStart(8, "0")
        }).join("")
    }
    function ou(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }
    function pu(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    function qu(a, b) {
        a = nu(a);
        return a.length < b ? a.padEnd(b, "0") : a
    }
    ;function ru(a, b) {
        var c = a.indexOf("11");
        if (c === -1)
            throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    }
    ;var su = function(a) {
        this.F = G(a)
    };
    v(su, J);
    var tu = function(a) {
        this.F = G(a)
    };
    v(tu, J);
    var uu = function(a) {
        this.F = G(a)
    };
    v(uu, J);
    uu.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var vu = function(a) {
        this.F = G(a)
    };
    v(vu, J);
    var wu = function(a) {
        this.F = G(a)
    };
    v(wu, J);
    var xu = function(a) {
        var b = new wu;
        return H(b, 1, a)
    };
    var yu = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , zu = 6 + yu.reduce(function(a, b) {
        return a + b
    });
    var Au = function(a) {
        this.F = G(a)
    };
    v(Au, J);
    var Bu = function(a) {
        this.F = G(a)
    };
    v(Bu, J);
    Bu.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var Cu = function(a) {
        this.F = G(a)
    };
    v(Cu, J);
    var Du = function(a) {
        this.F = G(a)
    };
    v(Du, J);
    var Eu = function(a) {
        var b = new Du;
        return H(b, 1, a)
    };
    var Fu = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , Gu = 6 + Fu.reduce(function(a, b) {
        return a + b
    });
    var Hu = function(a) {
        this.F = G(a)
    };
    v(Hu, J);
    var Iu = function(a) {
        this.F = G(a)
    };
    v(Iu, J);
    var Ju = function(a) {
        this.F = G(a)
    };
    v(Ju, J);
    Ju.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var Ku = function(a) {
        this.F = G(a)
    };
    v(Ku, J);
    var Lu = function(a) {
        this.F = G(a)
    };
    v(Lu, J);
    var Mu = function(a) {
        var b = new Lu;
        return H(b, 1, a)
    };
    var Nu = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , Ou = 6 + Nu.reduce(function(a, b) {
        return a + b
    });
    var Pu = function(a) {
        this.F = G(a)
    };
    v(Pu, J);
    var Qu = function(a) {
        this.F = G(a)
    };
    v(Qu, J);
    var Ru = function(a) {
        this.F = G(a)
    };
    v(Ru, J);
    Ru.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var Su = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , Tu = 6 + Su.reduce(function(a, b) {
        return a + b
    });
    var Uu = function(a) {
        this.F = G(a)
    };
    v(Uu, J);
    var Vu = function(a) {
        this.F = G(a)
    };
    v(Vu, J);
    var Wu = function(a) {
        this.F = G(a)
    };
    v(Wu, J);
    Wu.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var Xu = function(a) {
        this.F = G(a)
    };
    v(Xu, J);
    var Yu = function(a) {
        this.F = G(a)
    };
    v(Yu, J);
    var Zu = function(a) {
        var b = new Yu;
        return H(b, 1, a)
    };
    var $u = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , av = 6 + $u.reduce(function(a, b) {
        return a + b
    });
    var bv = function(a) {
        this.F = G(a)
    };
    v(bv, J);
    var cv = function(a) {
        this.F = G(a)
    };
    v(cv, J);
    cv.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var dv = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , ev = 6 + dv.reduce(function(a, b) {
        return a + b
    });
    var fv = function(a) {
        this.F = G(a)
    };
    v(fv, J);
    var gv = function(a) {
        this.F = G(a)
    };
    v(gv, J);
    var hv = function(a, b) {
        return Ii(a, 1, b, ph)
    }
      , iv = function(a, b) {
        return Ii(a, 2, b, ph)
    }
      , jv = function(a, b) {
        return Ii(a, 3, b, rh)
    }
      , kv = function(a, b) {
        Ii(a, 4, b, rh)
    };
    var lv = function(a) {
        this.F = G(a)
    };
    v(lv, J);
    lv.prototype.getVersion = function() {
        return Ui(this, 1)
    }
    ;
    var mv = function(a, b) {
        return fj(a, 1, b)
    }
      , nv = function(a, b) {
        return H(a, 2, b)
    }
      , ov = function(a, b) {
        return H(a, 3, b)
    }
      , pv = function(a, b) {
        return fj(a, 4, b)
    }
      , qv = function(a, b) {
        return fj(a, 5, b)
    }
      , rv = function(a, b) {
        return fj(a, 6, b)
    }
      , sv = function(a, b) {
        return Ji(a, 7, Ih(b), "")
    }
      , tv = function(a, b) {
        return fj(a, 8, b)
    }
      , uv = function(a, b) {
        return fj(a, 9, b)
    }
      , vv = function(a, b) {
        return dj(a, 10, b)
    }
      , wv = function(a, b) {
        return dj(a, 11, b)
    }
      , xv = function(a, b) {
        return Ii(a, 12, b, ph)
    }
      , yv = function(a, b) {
        return Ii(a, 13, b, ph)
    }
      , zv = function(a, b) {
        return Ii(a, 14, b, ph)
    }
      , Av = function(a, b) {
        return dj(a, 15, b)
    }
      , Bv = function(a, b) {
        return Ji(a, 16, Ih(b), "")
    }
      , Cv = function(a, b) {
        return Ii(a, 17, b, rh)
    }
      , Dv = function(a, b) {
        return Ii(a, 18, b, rh)
    }
      , Ev = function(a, b) {
        return Oi(a, 19, b)
    };
    var Fv = function(a) {
        this.F = G(a)
    };
    v(Fv, J);
    var Gv = "a".charCodeAt()
      , Hv = bc({
        Gi: 0,
        Fi: 1,
        Ci: 2,
        xi: 3,
        Di: 4,
        yi: 5,
        Ei: 6,
        Ai: 7,
        Bi: 8,
        wi: 9,
        zi: 10,
        Hi: 11
    })
      , Iv = bc({
        Ji: 0,
        Ki: 1,
        Ii: 2
    });
    var Jv = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.j = a;
        this.g = 0
    }
      , Lv = function(a) {
        a = Kv(a, 36);
        var b = new ju;
        b = Ji(b, 1, Ah(Math.floor(a / 10)), "0");
        return fj(b, 2, a % 10 * 1E8)
    }
      , Mv = function(a) {
        return String.fromCharCode(Gv + Kv(a, 6)) + String.fromCharCode(Gv + Kv(a, 6))
    }
      , Pv = function(a) {
        var b = Kv(a, 16);
        return !!Kv(a, 1) === !0 ? (a = Nv(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : Ov(a, b)
    }
      , Qv = function(a) {
        for (var b = [], c = Kv(a, 12); c--; ) {
            var d = Kv(a, 6)
              , e = Kv(a, 2)
              , f = Nv(a)
              , g = b
              , h = g.push
              , k = new fv;
            d = I(k, 1, d);
            e = I(d, 2, e);
            f = Ii(e, 3, f, rh);
            h.call(g, f)
        }
        return b
    }
      , Nv = function(a) {
        for (var b = Kv(a, 12), c = []; b--; ) {
            var d = !!Kv(a, 1) === !0
              , e = Kv(a, 16);
            if (d)
                for (d = Kv(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , Ov = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (Kv(a, 1)) {
                var f = e + 1;
                if (c && c.indexOf(f) === -1)
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , Kv = function(a, b) {
        if (a.g + b > a.j.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.j.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    Jv.prototype.skip = function(a) {
        this.g += a
    }
    ;
    function Rv(a) {
        return a == null ? null : Sv(a)
    }
    function Sv(a) {
        return Tg(a) ? Number(a) : String(a)
    }
    ;var Tv = function(a) {
        try {
            var b = mg(a).map(function(f) {
                return f.toString(2).padStart(8, "0")
            }).join("")
              , c = new Jv(b);
            if (Kv(c, 3) !== 3)
                return null;
            var d = iv(hv(new gv, Ov(c, 24, Hv)), Ov(c, 24, Hv))
              , e = Kv(c, 6);
            e !== 0 && kv(jv(d, Ov(c, e)), Ov(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var Uv = function(a) {
        try {
            var b = mg(a).map(function(d) {
                return d.toString(2).padStart(8, "0")
            }).join("")
              , c = new Jv(b);
            return Ev(Dv(Cv(Bv(Av(zv(yv(xv(wv(vv(uv(tv(sv(rv(qv(pv(ov(nv(mv(new lv, Kv(c, 6)), Lv(c)), Lv(c)), Kv(c, 12)), Kv(c, 12)), Kv(c, 6)), Mv(c)), Kv(c, 12)), Kv(c, 6)), !!Kv(c, 1)), !!Kv(c, 1)), Ov(c, 12, Iv)), Ov(c, 24, Hv)), Ov(c, 24, Hv)), !!Kv(c, 1)), Mv(c)), Pv(c)), Pv(c)), Qv(c))
        } catch (d) {
            return null
        }
    };
    var Wv = function(a) {
        if (!a)
            return null;
        var b = a.split(".");
        if (b.length > 4)
            return null;
        a = Uv(b[0]);
        if (!a)
            return null;
        var c = new Fv;
        a = H(c, 1, a);
        b.shift();
        b = x(b);
        for (c = b.next(); !c.done; c = b.next())
            switch (c = c.value,
            Vv(c)) {
            case 1:
            case 2:
                break;
            case 3:
                c = Tv(c);
                if (!c)
                    return null;
                H(a, 2, c);
                break;
            default:
                return null
            }
        return a
    }
      , Vv = function(a) {
        try {
            var b = mg(a).map(function(c) {
                return c.toString(2).padStart(8, "0")
            }).join("");
            return Kv(new Jv(b), 3)
        } catch (c) {
            return -1
        }
    };
    var Yv = function(a, b) {
        var c = Wv(a);
        if (!c || !a)
            return null;
        var d = Li(c, lv, 1)
          , e = Li(c, gv, 2) || new gv;
        c = Ui(d, 9);
        var f = Ui(d, 4)
          , g = Ui(d, 5)
          , h = Ti(d, 10)
          , k = Ti(d, 11)
          , l = Xi(d, 16)
          , n = Ti(d, 15);
        var p = aj(d, 13);
        p = Xv(p, Hv);
        var r = aj(d, 14);
        p = {
            consents: p,
            legitimateInterests: Xv(r, Hv)
        };
        r = $i(d, 17);
        r = Xv(r);
        var t = $i(d, 18);
        r = {
            consents: r,
            legitimateInterests: Xv(t)
        };
        t = aj(d, 12);
        t = Xv(t, Iv);
        var u = Ni(d, fv, 19);
        d = {};
        u = x(u);
        for (var w = u.next(); !w.done; w = u.next()) {
            w = w.value;
            var A = Yi(w, 1);
            d[A] = d[A] || {};
            for (var L = x($i(w, 3)), ja = L.next(); !ja.done; ja = L.next())
                d[A][ja.value] = Yi(w, 2)
        }
        u = aj(e, 1);
        u = Xv(u, Hv);
        w = aj(e, 2);
        w = Xv(w, Hv);
        A = $i(e, 3);
        A = Xv(A);
        e = $i(e, 4);
        return {
            tcString: a,
            tcfPolicyVersion: c,
            gdprApplies: b,
            cmpId: f,
            cmpVersion: g,
            isServiceSpecific: h,
            useNonStandardStacks: k,
            publisherCC: l,
            purposeOneTreatment: n,
            purpose: p,
            vendor: r,
            specialFeatureOptins: t,
            publisher: {
                restrictions: d,
                consents: u,
                legitimateInterests: w,
                customPurposes: {
                    consents: A,
                    legitimateInterests: Xv(e)
                }
            }
        }
    }
      , Xv = function(a, b) {
        var c = {};
        if (Array.isArray(b) && b.length !== 0) {
            b = x(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = a.indexOf(d) !== -1
        } else
            for (a = x(a),
            b = a.next(); !b.done; b = a.next())
                c[b.value] = !0;
        delete c[0];
        return c
    };
    var Zv = function(a) {
        this.g = a;
        this.defaultValue = !1
    }
      , $v = function(a, b) {
        this.g = a;
        this.defaultValue = b === void 0 ? 0 : b
    };
    var aw = new $v(745150931)
      , bw = new $v(749060184)
      , cw = new Zv(745691018)
      , dw = new Zv(45668885)
      , ew = new Zv(635466687)
      , fw = new $v(45645574)
      , gw = new Zv(45685601)
      , hw = new $v(45685602,500);
    var iw = function(a) {
        this.F = G(a)
    };
    v(iw, J);
    var jw = function(a) {
        var b = new iw;
        ui(b);
        b = Bi(b, 1, qh, 2, !0);
        var c, d = (c = Cg(b === yg ? 7 : b[F] | 0)) != null ? c : 0;
        if (Array.isArray(a)) {
            c = a.length;
            for (var e = 0; e < c; e++)
                b.push(ph(a[e], d))
        } else
            for (a = x(a),
            c = a.next(); !c.done; c = a.next())
                b.push(ph(c.value, d))
    };
    var kw = /^((market|itms|intent|itms-appss):\/\/)/i;
    var lw = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var mw = function(a) {
        var b = a.ub;
        var c = a.gb;
        var d = a.height;
        var e = a.width;
        a = a.Ea === void 0 ? !1 : a.Ea;
        this.ub = b;
        this.gb = c;
        this.height = d;
        this.width = e;
        this.Ea = a
    };
    mw.prototype.getHeight = function() {
        return this.height
    }
    ;
    mw.prototype.getWidth = function() {
        return this.width
    }
    ;
    var nw = function(a) {
        var b = a.Lh;
        var c = a.lg;
        var d = a.ub;
        var e = a.gb;
        var f = a.Kh;
        var g = a.kg;
        mw.call(this, {
            ub: d,
            gb: e,
            height: a.height,
            width: a.width,
            Ea: a.Ea === void 0 ? !1 : a.Ea
        });
        this.o = b;
        this.j = c;
        this.l = f;
        this.g = g
    };
    v(nw, mw);
    nw.prototype.getVideoUrl = function() {
        return this.o
    }
    ;
    var ow = function(a) {
        var b = a.ah;
        var c = a.mimeType;
        mw.call(this, {
            ub: a.ub,
            gb: a.gb,
            height: a.height,
            width: a.width,
            Ea: a.Ea === void 0 ? !1 : a.Ea
        });
        this.g = b;
        this.j = c
    };
    v(ow, mw);
    ow.prototype.getMediaUrl = function() {
        return this.g
    }
    ;
    function pw(a) {
        return new (Function.prototype.bind.apply(a, [null].concat(pa(La.apply(1, arguments)))))
    }
    ;var qw = function(a, b, c, d) {
        M.call(this);
        this.G = b;
        this.D = c;
        this.C = d;
        this.B = new Map;
        this.H = 0;
        this.o = new Map;
        this.A = new Map;
        this.l = void 0;
        this.j = a
    };
    v(qw, M);
    qw.prototype.O = function() {
        delete this.g;
        this.B.clear();
        this.o.clear();
        this.A.clear();
        this.l && (Te(this.j, "message", this.l),
        delete this.l);
        delete this.j;
        delete this.C;
        M.prototype.O.call(this)
    }
    ;
    var rw = function(a) {
        if (a.g)
            return a.g;
        a.D && a.D(a.j) ? a.g = a.j : a.g = zf(a.j, a.G);
        var b;
        return (b = a.g) != null ? b : null
    }
      , Xy = function(a, b, c) {
        if (rw(a))
            if (a.g === a.j)
                (b = a.B.get(b)) && b(a.g, c);
            else {
                var d = a.o.get(b);
                if (d && d.Uc) {
                    sw(a);
                    var e = ++a.H;
                    a.A.set(e, {
                        jc: d.jc,
                        tg: d.Pd(c),
                        sh: b === "addEventListener"
                    });
                    a.g.postMessage(d.Uc(c, e), "*")
                }
            }
    }
      , sw = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = a.C ? a.C(b) : void 0;
                if (c) {
                    var d = c.ff
                      , e = a.A.get(d);
                    if (e) {
                        e.sh || a.A.delete(d);
                        var f;
                        (f = e.jc) == null || f.call(e, e.tg, c.payload)
                    }
                }
            } catch (g) {}
        }
        ,
        Se(a.j, "message", a.l))
    };
    function Yy(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var Zy = function(a, b) {
        b = b === void 0 ? {} : b;
        M.call(this);
        this.g = null;
        this.A = {};
        this.C = 0;
        this.l = null;
        this.j = a;
        var c;
        this.o = (c = b.timeoutMs) != null ? c : 500;
        var d;
        this.B = (d = b.yj) != null ? d : !1
    };
    v(Zy, M);
    Zy.prototype.O = function() {
        this.A = {};
        this.l && (Te(this.j, "message", this.l),
        delete this.l);
        delete this.A;
        delete this.j;
        delete this.g;
        M.prototype.O.call(this)
    }
    ;
    var az = function(a) {
        return typeof a.j.__tcfapi === "function" || $y(a) != null
    }
      , dz = function(a, b) {
        var c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.B
        }
          , d = Oe(function() {
            return b(c)
        })
          , e = 0;
        a.o !== -1 && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.o));
        bz(a, "addEventListener", function(f) {
            f && (c = f,
            c.internalErrorState = Yy(c),
            c.internalBlockOnErrors = a.B,
            cz(c) ? (c.internalErrorState !== 0 && (c.tcString = "tcunavailable"),
            bz(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    };
    Zy.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.B
        }
          , d = Oe(function() {
            return a(c)
        })
          , e = 0;
        this.o !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Yy(c),
            c.internalBlockOnErrors = b.B,
            h && c.internalErrorState === 0 || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            bz(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Zy.prototype.removeEventListener = function(a) {
        a && a.listenerId && bz(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var fz = function(a) {
        var b = b === void 0 ? {} : b;
        return cz(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.Gj) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? ez(a, "1", 0) : !0 : !1
    }
      , ez = function(a, b, c) {
        var d = d === void 0 ? "755" : d;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var e = a.publisher.restrictions[b];
                if (e !== void 0) {
                    e = e[d === void 0 ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        if (e === 0)
            return !1;
        var f = c;
        c === 2 ? (f = 0,
        e === 2 && (f = 1)) : c === 3 && (f = 1,
        e === 1 && (f = 0));
        a = f === 0 ? a.purpose && a.vendor ? (c = gz(a.vendor.consents, d === void 0 ? "755" : d)) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && gz(a.purpose.consents, b) : !0 : f === 1 ? a.purpose && a.vendor ? gz(a.purpose.legitimateInterests, b) && gz(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
        return a
    }
      , gz = function(a, b) {
        return !(!a || !a[b])
    }
      , bz = function(a, b, c, d) {
        c || (c = function() {}
        );
        var e = a.j;
        typeof e.__tcfapi === "function" ? (a = e.__tcfapi,
        a(b, 2, c, d)) : $y(a) ? (hz(a),
        e = ++a.C,
        a.A[e] = c,
        a.g && (c = {},
        a.g.postMessage((c.__tcfapiCall = {
            command: b,
            version: 2,
            callId: e,
            parameter: d
        },
        c), "*"))) : c({}, !1)
    }
      , $y = function(a) {
        if (a.g)
            return a.g;
        a.g = zf(a.j, "__tcfapiLocator");
        return a.g
    }
      , hz = function(a) {
        if (!a.l) {
            var b = function(c) {
                try {
                    var d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                    a.A[d.callId](d.returnValue, d.success)
                } catch (e) {}
            };
            a.l = b;
            Se(a.j, "message", b)
        }
    }
      , cz = function(a) {
        if (a.gdprApplies === !1)
            return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = Yy(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Wf({
            e: String(a.internalErrorState)
        }, "tcfe"),
        !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }
      , iz = function(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(function(d) {
            return ez(a, d, c)
        })
    };
    var jz = function(a, b) {
        b = b.listener;
        (a = (0,
        a.__gpp)("addEventListener", b)) && b(a, !0)
    }
      , kz = function(a, b) {
        (0,
        a.__gpp)("removeEventListener", b.listener, b.listenerId)
    }
      , lz = {
        Pd: function(a) {
            return a.listener
        },
        Uc: function(a, b) {
            a = {};
            return a.__gppCall = {
                callId: b,
                command: "addEventListener",
                version: "1.1"
            },
            a
        },
        jc: function(a, b) {
            b = b.__gppReturn;
            a(b.returnValue, b.success)
        }
    }
      , mz = {
        Pd: function(a) {
            return a.listener
        },
        Uc: function(a, b) {
            var c = {};
            return c.__gppCall = {
                callId: b,
                command: "removeEventListener",
                version: "1.1",
                parameter: a.listenerId
            },
            c
        },
        jc: function(a, b) {
            b = b.__gppReturn;
            var c = b.returnValue.data;
            a == null || a(c, b.success)
        }
    };
    function nz(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ff: b.__gppReturn.callId
        }
    }
    var oz = function(a, b) {
        b = (b === void 0 ? {} : b).timeoutMs;
        M.call(this);
        this.caller = new qw(a,"__gppLocator",function(c) {
            return typeof c.__gpp === "function"
        }
        ,nz);
        this.caller.B.set("addEventListener", jz);
        this.caller.o.set("addEventListener", lz);
        this.caller.B.set("removeEventListener", kz);
        this.caller.o.set("removeEventListener", mz);
        this.timeoutMs = b != null ? b : 500
    };
    v(oz, M);
    oz.prototype.O = function() {
        this.caller.dispose();
        M.prototype.O.call(this)
    }
    ;
    oz.prototype.addEventListener = function(a) {
        var b = this
          , c = Oe(function() {
            a(pz, !0)
        })
          , d = this.timeoutMs === -1 ? void 0 : setTimeout(function() {
            c()
        }, this.timeoutMs);
        Xy(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (((g = e.pingData) == null ? void 0 : g.gppVersion) === void 0 || e.pingData.gppVersion === "1" || e.pingData.gppVersion === "1.0") {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else
                        Array.isArray(e.pingData.applicableSections) ? h = e : (b.removeEventListener(e.listenerId),
                        h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                    a(h, f)
                } catch (k) {
                    if (e == null ? 0 : e.listenerId)
                        try {
                            b.removeEventListener(e.listenerId)
                        } catch (l) {
                            a(qz, !0);
                            return
                        }
                    a(rz, !0)
                }
            }
        })
    }
    ;
    oz.prototype.removeEventListener = function(a) {
        Xy(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    }
    ;
    var sz = function(a, b) {
        var c = !(b.includes(2),
        0)
          , d = !1
          , e = !1
          , f = !1;
        if (a && !a.startsWith("GPP_ERROR_STRING_")) {
            var g = nu(a.split("~")[0])
              , h = ou(g.slice(0, 6))
              , k = ou(g.slice(6, 12))
              , l = new mu;
            var n = fj(l, 1, h);
            var p = fj(n, 2, k);
            for (var r = g.slice(12), t = ou(r.slice(0, 12)), u = [], w = r.slice(12).replace(/0+$/, ""), A = 0; A < t; A++) {
                if (w.length === 0)
                    throw Error("Found " + A + " of " + t + " sections [" + u + "] but reached end of input [" + r + "]");
                var L = ou(w[0]) === 0;
                w = w.slice(1);
                var ja = ru(w, r)
                  , Y = u.length === 0 ? 0 : u[u.length - 1]
                  , Ya = pu(ja) + Y;
                w = w.slice(ja.length);
                if (L)
                    u.push(Ya);
                else {
                    for (var xb = ru(w, r), xa = pu(xb), Gb = 0; Gb <= xa; Gb++)
                        u.push(Ya + Gb);
                    w = w.slice(xb.length)
                }
            }
            if (w.length > 0)
                throw Error("Found " + t + " sections [" + u + "] but has remaining input [" + w + "], entire input [" + r + "]");
            var gb = Ii(p, 3, u, rh);
            var Ba = a.includes("~") ? a.split("~").slice(1) : [];
            var yb = $i(gb, 3);
            for (var U = 0; U < yb.length; ++U) {
                var Qa = yb[U];
                if (b.includes(Qa)) {
                    var ka = Ba[U];
                    switch (Qa) {
                    case 2:
                        var Sb = void 0;
                        if ((Sb = void 0) == null ? 0 : Sb.supportTcfeu) {
                            var hb = Yv(ka, !0);
                            if (!hb)
                                throw Error("Cannot decode TCF V2 section string.");
                            c = fz(hb);
                            !iz(hb, ["3", "4"], 0) && (d = !0);
                            !iz(hb, ["2", "7", "9", "10"], 3) && (e = !0)
                        }
                        break;
                    case 7:
                        if (ka.length === 0)
                            throw Error("Cannot decode empty USNat section string.");
                        var ib = ka.split(".");
                        if (ib.length > 2)
                            throw Error("Expected at most 2 segments but got " + ib.length + " when decoding " + ka + ".");
                        var Ca = void 0
                          , dc = void 0
                          , ae = void 0
                          , be = void 0
                          , Jh = void 0
                          , tw = void 0
                          , uw = void 0
                          , vw = void 0
                          , ww = void 0
                          , xw = void 0
                          , yw = void 0
                          , zw = void 0
                          , Aw = void 0
                          , Bw = void 0
                          , Cw = void 0
                          , Dw = void 0
                          , Ew = void 0
                          , Fw = void 0
                          , Gw = void 0
                          , Hw = void 0
                          , Iw = void 0
                          , Jw = void 0
                          , Kw = void 0
                          , Lw = void 0
                          , Mw = void 0
                          , Nw = void 0
                          , Ow = void 0
                          , Pw = void 0
                          , Qw = void 0
                          , Rw = void 0
                          , Sw = ib[0];
                        if (Sw.length === 0)
                            throw Error("Cannot decode empty core segment string.");
                        var lk = qu(Sw, av)
                          , Ho = ou(lk.slice(0, 6));
                        lk = lk.slice(6);
                        if (Ho !== 1)
                            throw Error("Unable to decode unsupported USNat Section specification version " + Ho + " - only version 1 is supported.");
                        for (var Io = 0, va = [], Jo = 0; Jo < $u.length; Jo++) {
                            var Tw = $u[Jo];
                            va.push(ou(lk.slice(Io, Io + Tw)));
                            Io += Tw
                        }
                        var HI = new Wu;
                        Rw = fj(HI, 1, Ho);
                        var II = va.shift();
                        Qw = I(Rw, 2, II);
                        var JI = va.shift();
                        Pw = I(Qw, 3, JI);
                        var KI = va.shift();
                        Ow = I(Pw, 4, KI);
                        var LI = va.shift();
                        Nw = I(Ow, 5, LI);
                        var MI = va.shift();
                        Mw = I(Nw, 6, MI);
                        var NI = va.shift();
                        Lw = I(Mw, 7, NI);
                        var OI = va.shift();
                        Kw = I(Lw, 8, OI);
                        var PI = va.shift();
                        Jw = I(Kw, 9, PI);
                        var QI = va.shift();
                        Iw = I(Jw, 10, QI);
                        var RI = new Vu
                          , SI = va.shift();
                        Hw = I(RI, 1, SI);
                        var TI = va.shift();
                        Gw = I(Hw, 2, TI);
                        var UI = va.shift();
                        Fw = I(Gw, 3, UI);
                        var VI = va.shift();
                        Ew = I(Fw, 4, VI);
                        var WI = va.shift();
                        Dw = I(Ew, 5, WI);
                        var XI = va.shift();
                        Cw = I(Dw, 6, XI);
                        var YI = va.shift();
                        Bw = I(Cw, 7, YI);
                        var ZI = va.shift();
                        Aw = I(Bw, 8, ZI);
                        var $I = va.shift();
                        zw = I(Aw, 9, $I);
                        var aJ = va.shift();
                        yw = I(zw, 10, aJ);
                        var bJ = va.shift();
                        xw = I(yw, 11, bJ);
                        var cJ = va.shift();
                        ww = I(xw, 12, cJ);
                        vw = H(Iw, 11, ww);
                        var dJ = new Uu
                          , eJ = va.shift();
                        uw = I(dJ, 1, eJ);
                        var fJ = va.shift();
                        tw = I(uw, 2, fJ);
                        Jh = H(vw, 12, tw);
                        var gJ = va.shift();
                        be = I(Jh, 13, gJ);
                        var hJ = va.shift();
                        ae = I(be, 14, hJ);
                        var iJ = va.shift();
                        dc = I(ae, 15, iJ);
                        var jJ = va.shift();
                        var Uw = Ca = I(dc, 16, jJ);
                        if (ib.length === 1)
                            var Vw = Zu(Uw);
                        else {
                            var kJ = Zu(Uw)
                              , Ww = void 0
                              , Xw = void 0
                              , Yw = void 0
                              , Zw = ib[1];
                            if (Zw.length === 0)
                                throw Error("Cannot decode empty GPC segment string.");
                            var $w = qu(Zw, 3)
                              , mk = ou($w.slice(0, 2));
                            if (mk < 0 || mk > 1)
                                throw Error("Attempting to decode unknown GPC segment subsection type " + mk + ".");
                            Yw = mk + 1;
                            var lJ = ou($w.slice(2, 3))
                              , mJ = new Xu;
                            Xw = I(mJ, 2, Yw);
                            Ww = dj(Xw, 1, !!lJ);
                            Vw = H(kJ, 2, Ww)
                        }
                        var ax = Vw
                          , nk = Xe(Li(ax, Wu, 1))
                          , bx = Li(nk, Uu, 12);
                        Yi(nk, 8) !== 1 && Yi(nk, 9) !== 1 && Yi(nk, 10) !== 1 && (bx == null ? void 0 : Yi(bx, 1)) !== 1 || (d = !0);
                        var cx = void 0
                          , nJ = Xe(Li(ax, Wu, 1))
                          , dx = (cx = Li(nJ, Uu, 12)) == null ? void 0 : Yi(cx, 2);
                        dx !== 1 && dx !== 2 || (f = !0);
                        break;
                    case 8:
                        if (ka.length === 0)
                            throw Error("Cannot decode empty USCA section string.");
                        var Kh = ka.split(".");
                        if (Kh.length > 2)
                            throw Error("Expected at most 1 sub-section but got " + (Kh.length - 1) + " when decoding " + ka + ".");
                        var oJ = void 0
                          , ex = void 0
                          , fx = void 0
                          , gx = void 0
                          , hx = void 0
                          , ix = void 0
                          , jx = void 0
                          , kx = void 0
                          , lx = void 0
                          , mx = void 0
                          , nx = void 0
                          , ox = void 0
                          , px = void 0
                          , qx = void 0
                          , rx = void 0
                          , sx = void 0
                          , tx = void 0
                          , ux = void 0
                          , vx = void 0
                          , wx = void 0
                          , xx = void 0
                          , yx = void 0
                          , zx = void 0
                          , Ax = Kh[0];
                        if (Ax.length === 0)
                            throw Error("Cannot decode empty core segment string.");
                        var ok = qu(Ax, zu)
                          , Ko = ou(ok.slice(0, 6));
                        ok = ok.slice(6);
                        if (Ko !== 1)
                            throw Error("Unable to decode unsupported USCA Section specification version " + Ko + " - only version 1 is supported.");
                        for (var Lo = 0, Ra = [], Mo = 0; Mo < yu.length; Mo++) {
                            var Bx = yu[Mo];
                            Ra.push(ou(ok.slice(Lo, Lo + Bx)));
                            Lo += Bx
                        }
                        var pJ = new uu;
                        zx = fj(pJ, 1, Ko);
                        var qJ = Ra.shift();
                        yx = I(zx, 2, qJ);
                        var rJ = Ra.shift();
                        xx = I(yx, 3, rJ);
                        var sJ = Ra.shift();
                        wx = I(xx, 4, sJ);
                        var tJ = Ra.shift();
                        vx = I(wx, 5, tJ);
                        var uJ = Ra.shift();
                        ux = I(vx, 6, uJ);
                        var vJ = new tu
                          , wJ = Ra.shift();
                        tx = I(vJ, 1, wJ);
                        var xJ = Ra.shift();
                        sx = I(tx, 2, xJ);
                        var yJ = Ra.shift();
                        rx = I(sx, 3, yJ);
                        var zJ = Ra.shift();
                        qx = I(rx, 4, zJ);
                        var AJ = Ra.shift();
                        px = I(qx, 5, AJ);
                        var BJ = Ra.shift();
                        ox = I(px, 6, BJ);
                        var CJ = Ra.shift();
                        nx = I(ox, 7, CJ);
                        var DJ = Ra.shift();
                        mx = I(nx, 8, DJ);
                        var EJ = Ra.shift();
                        lx = I(mx, 9, EJ);
                        kx = H(ux, 7, lx);
                        var FJ = new su
                          , GJ = Ra.shift();
                        jx = I(FJ, 1, GJ);
                        var HJ = Ra.shift();
                        ix = I(jx, 2, HJ);
                        hx = H(kx, 8, ix);
                        var IJ = Ra.shift();
                        gx = I(hx, 9, IJ);
                        var JJ = Ra.shift();
                        fx = I(gx, 10, JJ);
                        var KJ = Ra.shift();
                        ex = I(fx, 11, KJ);
                        var LJ = Ra.shift();
                        var Cx = oJ = I(ex, 12, LJ);
                        if (Kh.length === 1)
                            var Dx = xu(Cx);
                        else {
                            var MJ = xu(Cx)
                              , Ex = void 0
                              , Fx = void 0
                              , Gx = void 0
                              , Hx = Kh[1];
                            if (Hx.length === 0)
                                throw Error("Cannot decode empty GPC segment string.");
                            var Ix = qu(Hx, 3)
                              , pk = ou(Ix.slice(0, 2));
                            if (pk < 0 || pk > 1)
                                throw Error("Attempting to decode unknown GPC segment subsection type " + pk + ".");
                            Gx = pk + 1;
                            var NJ = ou(Ix.slice(2, 3))
                              , OJ = new vu;
                            Fx = I(OJ, 2, Gx);
                            Ex = dj(Fx, 1, !!NJ);
                            Dx = H(MJ, 2, Ex)
                        }
                        var Jx = Dx
                          , Kx = Xe(Li(Jx, uu, 1));
                        Yi(Kx, 5) !== 1 && Yi(Kx, 6) !== 1 || (d = !0);
                        var PJ = Xe(Li(Jx, uu, 1));
                        var ce = Li(PJ, su, 8);
                        (ce == null ? void 0 : Yi(ce, 1)) !== 1 && (ce == null ? void 0 : Yi(ce, 1)) !== 2 && (ce == null ? void 0 : Yi(ce, 2)) !== 1 && (ce == null ? void 0 : Yi(ce, 2)) !== 2 || (f = !0);
                        break;
                    case 9:
                        if (ka.length === 0)
                            throw Error("Cannot decode empty USVA section string.");
                        var qk = qu(ka, ev)
                          , No = ou(qk.slice(0, 6));
                        qk = qk.slice(6);
                        if (No !== 1)
                            throw Error("Unable to decode unsupported USVA Section specification version " + No + " - only version 1 is supported.");
                        for (var Oo = 0, kb = [], Po = 0; Po < dv.length; Po++) {
                            var Lx = dv[Po];
                            kb.push(ou(qk.slice(Oo, Oo + Lx)));
                            Oo += Lx
                        }
                        var QJ = No
                          , RJ = new cv
                          , SJ = fj(RJ, 1, QJ)
                          , TJ = kb.shift()
                          , UJ = I(SJ, 2, TJ)
                          , VJ = kb.shift()
                          , WJ = I(UJ, 3, VJ)
                          , XJ = kb.shift()
                          , YJ = I(WJ, 4, XJ)
                          , ZJ = kb.shift()
                          , $J = I(YJ, 5, ZJ)
                          , aK = kb.shift();
                        var bK = I($J, 6, aK);
                        var cK = new bv
                          , dK = kb.shift()
                          , eK = I(cK, 1, dK)
                          , fK = kb.shift()
                          , gK = I(eK, 2, fK)
                          , hK = kb.shift()
                          , iK = I(gK, 3, hK)
                          , jK = kb.shift()
                          , kK = I(iK, 4, jK)
                          , lK = kb.shift()
                          , mK = I(kK, 5, lK)
                          , nK = kb.shift()
                          , oK = I(mK, 6, nK)
                          , pK = kb.shift()
                          , qK = I(oK, 7, pK)
                          , rK = kb.shift();
                        var sK = I(qK, 8, rK);
                        var tK = H(bK, 7, sK)
                          , uK = kb.shift()
                          , vK = I(tK, 8, uK)
                          , wK = kb.shift()
                          , xK = I(vK, 9, wK)
                          , yK = kb.shift()
                          , zK = I(xK, 10, yK)
                          , AK = kb.shift()
                          , Qo = I(zK, 11, AK);
                        Yi(Qo, 5) !== 1 && Yi(Qo, 6) !== 1 || (d = !0);
                        var Mx = Yi(Qo, 8);
                        Mx !== 1 && Mx !== 2 || (f = !0);
                        break;
                    case 10:
                        if (ka.length === 0)
                            throw Error("Cannot decode empty USCO section string.");
                        var Lh = ka.split(".");
                        if (Lh.length > 2)
                            throw Error("Expected at most 2 segments but got " + Lh.length + " when decoding " + ka + ".");
                        var BK = void 0
                          , Nx = void 0
                          , Ox = void 0
                          , Px = void 0
                          , Qx = void 0
                          , Rx = void 0
                          , Sx = void 0
                          , Tx = void 0
                          , Ux = void 0
                          , Vx = void 0
                          , Wx = void 0
                          , Xx = void 0
                          , Yx = void 0
                          , Zx = void 0
                          , $x = void 0
                          , ay = void 0
                          , by = void 0
                          , cy = void 0
                          , dy = Lh[0];
                        if (dy.length === 0)
                            throw Error("Cannot decode empty core segment string.");
                        var rk = qu(dy, Gu)
                          , Ro = ou(rk.slice(0, 6));
                        rk = rk.slice(6);
                        if (Ro !== 1)
                            throw Error("Unable to decode unsupported USCO Section specification version " + Ro + " - only version 1 is supported.");
                        for (var So = 0, pb = [], To = 0; To < Fu.length; To++) {
                            var ey = Fu[To];
                            pb.push(ou(rk.slice(So, So + ey)));
                            So += ey
                        }
                        var CK = new Bu;
                        cy = fj(CK, 1, Ro);
                        var DK = pb.shift();
                        by = I(cy, 2, DK);
                        var EK = pb.shift();
                        ay = I(by, 3, EK);
                        var FK = pb.shift();
                        $x = I(ay, 4, FK);
                        var GK = pb.shift();
                        Zx = I($x, 5, GK);
                        var HK = pb.shift();
                        Yx = I(Zx, 6, HK);
                        var IK = new Au
                          , JK = pb.shift();
                        Xx = I(IK, 1, JK);
                        var KK = pb.shift();
                        Wx = I(Xx, 2, KK);
                        var LK = pb.shift();
                        Vx = I(Wx, 3, LK);
                        var MK = pb.shift();
                        Ux = I(Vx, 4, MK);
                        var NK = pb.shift();
                        Tx = I(Ux, 5, NK);
                        var OK = pb.shift();
                        Sx = I(Tx, 6, OK);
                        var PK = pb.shift();
                        Rx = I(Sx, 7, PK);
                        Qx = H(Yx, 7, Rx);
                        var QK = pb.shift();
                        Px = I(Qx, 8, QK);
                        var RK = pb.shift();
                        Ox = I(Px, 9, RK);
                        var SK = pb.shift();
                        Nx = I(Ox, 10, SK);
                        var TK = pb.shift();
                        var fy = BK = I(Nx, 11, TK);
                        if (Lh.length === 1)
                            var gy = Eu(fy);
                        else {
                            var UK = Eu(fy)
                              , hy = void 0
                              , iy = void 0
                              , jy = void 0
                              , ky = Lh[1];
                            if (ky.length === 0)
                                throw Error("Cannot decode empty GPC segment string.");
                            var ly = qu(ky, 3)
                              , sk = ou(ly.slice(0, 2));
                            if (sk < 0 || sk > 1)
                                throw Error("Attempting to decode unknown GPC segment subsection type " + sk + ".");
                            jy = sk + 1;
                            var VK = ou(ly.slice(2, 3))
                              , WK = new Cu;
                            iy = I(WK, 2, jy);
                            hy = dj(iy, 1, !!VK);
                            gy = H(UK, 2, hy)
                        }
                        var my = gy
                          , ny = Xe(Li(my, Bu, 1));
                        Yi(ny, 5) !== 1 && Yi(ny, 6) !== 1 || (d = !0);
                        var XK = Xe(Li(my, Bu, 1));
                        var oy = Yi(XK, 8);
                        oy !== 1 && oy !== 2 || (f = !0);
                        break;
                    case 12:
                        if (ka.length === 0)
                            throw Error("Cannot decode empty usct section string.");
                        var Mh = ka.split(".");
                        if (Mh.length > 2)
                            throw Error("Expected at most 2 segments but got " + Mh.length + " when decoding " + ka + ".");
                        var YK = void 0
                          , py = void 0
                          , qy = void 0
                          , ry = void 0
                          , sy = void 0
                          , ty = void 0
                          , uy = void 0
                          , vy = void 0
                          , wy = void 0
                          , xy = void 0
                          , yy = void 0
                          , zy = void 0
                          , Ay = void 0
                          , By = void 0
                          , Cy = void 0
                          , Dy = void 0
                          , Ey = void 0
                          , Fy = void 0
                          , Gy = void 0
                          , Hy = void 0
                          , Iy = void 0
                          , Jy = void 0
                          , Ky = Mh[0];
                        if (Ky.length === 0)
                            throw Error("Cannot decode empty core segment string.");
                        var tk = qu(Ky, Ou)
                          , Uo = ou(tk.slice(0, 6));
                        tk = tk.slice(6);
                        if (Uo !== 1)
                            throw Error("Unable to decode unsupported USCT Section specification version " + Uo + " - only version 1 is supported.");
                        for (var Vo = 0, Za = [], Wo = 0; Wo < Nu.length; Wo++) {
                            var Ly = Nu[Wo];
                            Za.push(ou(tk.slice(Vo, Vo + Ly)));
                            Vo += Ly
                        }
                        var ZK = new Ju;
                        Jy = fj(ZK, 1, Uo);
                        var $K = Za.shift();
                        Iy = I(Jy, 2, $K);
                        var aL = Za.shift();
                        Hy = I(Iy, 3, aL);
                        var bL = Za.shift();
                        Gy = I(Hy, 4, bL);
                        var cL = Za.shift();
                        Fy = I(Gy, 5, cL);
                        var dL = Za.shift();
                        Ey = I(Fy, 6, dL);
                        var eL = new Iu
                          , fL = Za.shift();
                        Dy = I(eL, 1, fL);
                        var gL = Za.shift();
                        Cy = I(Dy, 2, gL);
                        var hL = Za.shift();
                        By = I(Cy, 3, hL);
                        var iL = Za.shift();
                        Ay = I(By, 4, iL);
                        var jL = Za.shift();
                        zy = I(Ay, 5, jL);
                        var kL = Za.shift();
                        yy = I(zy, 6, kL);
                        var lL = Za.shift();
                        xy = I(yy, 7, lL);
                        var mL = Za.shift();
                        wy = I(xy, 8, mL);
                        vy = H(Ey, 7, wy);
                        var nL = new Hu
                          , oL = Za.shift();
                        uy = I(nL, 1, oL);
                        var pL = Za.shift();
                        ty = I(uy, 2, pL);
                        var qL = Za.shift();
                        sy = I(ty, 3, qL);
                        ry = H(vy, 8, sy);
                        var rL = Za.shift();
                        qy = I(ry, 9, rL);
                        var sL = Za.shift();
                        py = I(qy, 10, sL);
                        var tL = Za.shift();
                        var My = YK = I(py, 11, tL);
                        if (Mh.length === 1)
                            var Ny = Mu(My);
                        else {
                            var uL = Mu(My)
                              , Oy = void 0
                              , Py = void 0
                              , Qy = void 0
                              , Ry = Mh[1];
                            if (Ry.length === 0)
                                throw Error("Cannot decode empty GPC segment string.");
                            var Sy = qu(Ry, 3)
                              , uk = ou(Sy.slice(0, 2));
                            if (uk < 0 || uk > 1)
                                throw Error("Attempting to decode unknown GPC segment subsection type " + uk + ".");
                            Qy = uk + 1;
                            var vL = ou(Sy.slice(2, 3))
                              , wL = new Ku;
                            Py = I(wL, 2, Qy);
                            Oy = dj(Py, 1, !!vL);
                            Ny = H(uL, 2, Oy)
                        }
                        var Ty = Ny
                          , Xo = Xe(Li(Ty, Ju, 1))
                          , vk = Li(Xo, Hu, 8);
                        Yi(Xo, 5) !== 1 && Yi(Xo, 6) !== 1 && (vk == null ? void 0 : Yi(vk, 2)) !== 1 && (vk == null ? void 0 : Yi(vk, 3)) !== 1 || (d = !0);
                        var xL = Xe(Li(Ty, Ju, 1));
                        var wk = Li(xL, Hu, 8);
                        (wk == null ? void 0 : Yi(wk, 1)) !== 1 && (wk == null ? void 0 : Yi(wk, 1)) !== 2 || (f = !0);
                        break;
                    case 13:
                        if (ka.length === 0)
                            throw Error("Cannot decode empty USFL section string.");
                        var xk = qu(ka, Tu)
                          , Yo = ou(xk.slice(0, 6));
                        xk = xk.slice(6);
                        if (Yo !== 1)
                            throw Error("Unable to decode unsupported USFL Section specification version " + Yo + " - only version 1 is supported.");
                        for (var Zo = 0, Sa = [], $o = 0; $o < Su.length; $o++) {
                            var Uy = Su[$o];
                            Sa.push(ou(xk.slice(Zo, Zo + Uy)));
                            Zo += Uy
                        }
                        var yL = Yo
                          , zL = new Ru
                          , AL = fj(zL, 1, yL)
                          , BL = Sa.shift()
                          , CL = I(AL, 2, BL)
                          , DL = Sa.shift()
                          , EL = I(CL, 3, DL)
                          , FL = Sa.shift()
                          , GL = I(EL, 4, FL)
                          , HL = Sa.shift()
                          , IL = I(GL, 5, HL)
                          , JL = Sa.shift();
                        var KL = I(IL, 6, JL);
                        var LL = new Qu
                          , ML = Sa.shift()
                          , NL = I(LL, 1, ML)
                          , OL = Sa.shift()
                          , PL = I(NL, 2, OL)
                          , QL = Sa.shift()
                          , RL = I(PL, 3, QL)
                          , SL = Sa.shift()
                          , TL = I(RL, 4, SL)
                          , UL = Sa.shift()
                          , VL = I(TL, 5, UL)
                          , WL = Sa.shift()
                          , XL = I(VL, 6, WL)
                          , YL = Sa.shift()
                          , ZL = I(XL, 7, YL)
                          , $L = Sa.shift();
                        var aM = I(ZL, 8, $L);
                        var bM = H(KL, 7, aM);
                        var cM = new Pu
                          , dM = Sa.shift()
                          , eM = I(cM, 1, dM)
                          , fM = Sa.shift()
                          , gM = I(eM, 2, fM)
                          , hM = Sa.shift();
                        var iM = I(gM, 3, hM);
                        var jM = H(bM, 8, iM)
                          , kM = Sa.shift()
                          , lM = I(jM, 9, kM)
                          , mM = Sa.shift()
                          , nM = I(lM, 10, mM)
                          , oM = Sa.shift()
                          , pM = I(nM, 11, oM)
                          , qM = Sa.shift()
                          , yk = I(pM, 12, qM)
                          , zk = Li(yk, Pu, 8);
                        Yi(yk, 5) !== 1 && Yi(yk, 6) !== 1 && (zk == null ? void 0 : Yi(zk, 2)) !== 1 && (zk == null ? void 0 : Yi(zk, 3)) !== 1 || (d = !0);
                        var Vy = void 0
                          , Wy = (Vy = Li(yk, Pu, 8)) == null ? void 0 : Yi(Vy, 1);
                        Wy !== 1 && Wy !== 2 || (f = !0)
                    }
                }
            }
        }
        return {
            Rj: c,
            eh: d,
            Tj: e,
            Bj: f
        }
    }
      , rz = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            internalErrorState: 2,
            gppString: "GPP_ERROR_STRING_UNAVAILABLE",
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , pz = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , qz = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    };
    jw([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21, 23]);
    jw([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21, 23]);
    jw([1, 6, 7, 9, 10, 11, 12, 22, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21, 23]);
    new iw;
    var O = function(a, b) {
        this.g = this.A = this.o = "";
        this.I = null;
        this.L = this.j = "";
        this.B = !1;
        var c;
        a instanceof O ? (this.B = b !== void 0 ? b : a.B,
        tz(this, a.o),
        this.A = a.A,
        this.g = a.g,
        uz(this, a.I),
        this.j = a.j,
        vz(this, wz(a.l)),
        this.L = a.D()) : a && (c = String(a).match(mf)) ? (this.B = !!b,
        tz(this, c[1] || "", !0),
        this.A = xz(c[2] || ""),
        this.g = xz(c[3] || "", !0),
        uz(this, c[4]),
        this.j = xz(c[5] || "", !0),
        vz(this, c[6] || "", !0),
        this.L = xz(c[7] || "")) : (this.B = !!b,
        this.l = new yz(null,this.B))
    };
    O.prototype.toString = function() {
        var a = []
          , b = this.o;
        b && a.push(zz(b, Az, !0), ":");
        var c = this.g;
        if (c || b == "file")
            a.push("//"),
            (b = this.A) && a.push(zz(b, Az, !0), "@"),
            a.push(Bz(encodeURIComponent(String(c)))),
            c = this.I,
            c != null && a.push(":", String(c));
        if (c = this.j)
            this.g && c.charAt(0) != "/" && a.push("/"),
            a.push(zz(c, c.charAt(0) == "/" ? Cz : Dz, !0));
        (c = this.l.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", zz(c, Ez));
        return a.join("")
    }
    ;
    O.prototype.resolve = function(a) {
        var b = this.G()
          , c = !!a.o;
        c ? tz(b, a.o) : c = !!a.A;
        c ? b.A = a.A : c = !!a.g;
        c ? b.g = a.g : c = a.I != null;
        var d = a.j;
        if (c)
            uz(b, a.I);
        else if (c = !!a.j) {
            if (d.charAt(0) != "/")
                if (this.g && !this.j)
                    d = "/" + d;
                else {
                    var e = b.j.lastIndexOf("/");
                    e != -1 && (d = b.j.slice(0, e + 1) + d)
                }
            e = d;
            if (e == ".." || e == ".")
                d = "";
            else if (Sc(e, "./") || Sc(e, "/.")) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var h = e[g++];
                    h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.j = d : c = a.l.toString() !== "";
        c ? vz(b, wz(a.l)) : c = !!a.L;
        c && (b.L = a.D());
        return b
    }
    ;
    O.prototype.G = function() {
        return new O(this)
    }
    ;
    var tz = function(a, b, c) {
        a.o = c ? xz(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }
      , uz = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || b < 0)
                throw Error("Bad port number " + b);
            a.I = b
        } else
            a.I = null
    }
      , vz = function(a, b, c) {
        b instanceof yz ? (a.l = b,
        Fz(a.l, a.B)) : (c || (b = zz(b, Gz)),
        a.l = new yz(b,a.B))
    }
      , Hz = function(a) {
        return a.l
    }
      , Iz = function(a, b, c) {
        a.l.set(b, c);
        return a
    }
      , Jz = function(a, b) {
        return a.l.get(b)
    };
    O.prototype.D = function() {
        return this.L
    }
    ;
    var Kz = function(a) {
        return a instanceof O ? a.G() : new O(a,void 0)
    }
      , xz = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , zz = function(a, b, c) {
        return typeof a === "string" ? (a = encodeURI(a).replace(b, Lz),
        c && (a = Bz(a)),
        a) : null
    }
      , Lz = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , Bz = function(a) {
        return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
    }
      , Az = /[#\/\?@]/g
      , Dz = /[#\?:]/g
      , Cz = /[#\?]/g
      , Gz = /[#\?@]/g
      , Ez = /#/g
      , yz = function(a, b) {
        this.j = this.g = null;
        this.l = a || null;
        this.o = !!b
    }
      , Mz = function(a) {
        a.g || (a.g = new Map,
        a.j = 0,
        a.l && of(a.l, function(b, c) {
            a.add(Ad(b), c)
        }))
    };
    yz.prototype.add = function(a, b) {
        Mz(this);
        this.l = null;
        a = Nz(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    }
    ;
    yz.prototype.remove = function(a) {
        Mz(this);
        a = Nz(this, a);
        return this.g.has(a) ? (this.l = null,
        this.j -= this.g.get(a).length,
        this.g.delete(a)) : !1
    }
    ;
    yz.prototype.clear = function() {
        this.g = this.l = null;
        this.j = 0
    }
    ;
    yz.prototype.isEmpty = function() {
        Mz(this);
        return this.j == 0
    }
    ;
    var Oz = function(a, b) {
        Mz(a);
        b = Nz(a, b);
        return a.g.has(b)
    };
    m = yz.prototype;
    m.forEach = function(a, b) {
        Mz(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    m.Jc = function() {
        Mz(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    m.Jb = function(a) {
        Mz(this);
        var b = [];
        if (typeof a === "string")
            Oz(this, a) && (b = b.concat(this.g.get(Nz(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    m.set = function(a, b) {
        Mz(this);
        this.l = null;
        a = Nz(this, a);
        Oz(this, a) && (this.j -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.j += 1;
        return this
    }
    ;
    m.get = function(a, b) {
        if (!a)
            return b;
        a = this.Jb(a);
        return a.length > 0 ? String(a[0]) : b
    }
    ;
    m.toString = function() {
        if (this.l)
            return this.l;
        if (!this.g)
            return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Jb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    }
    ;
    var wz = function(a) {
        var b = new yz;
        b.l = a.l;
        a.g && (b.g = new Map(a.g),
        b.j = a.j);
        return b
    }
      , Nz = function(a, b) {
        b = String(b);
        a.o && (b = b.toLowerCase());
        return b
    }
      , Fz = function(a, b) {
        b && !a.o && (Mz(a),
        a.l = null,
        a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            this.remove(e),
            c.length > 0 && (this.l = null,
            this.g.set(Nz(this, e), Ib(c)),
            this.j += c.length))
        }, a));
        a.o = b
    };
    var Pz, Qz, Rz, Sz = function() {
        return y.navigator ? y.navigator.userAgent : ""
    }, Tz = Sc(Sz(), "(iPad") || Sc(Sz(), "(Macintosh") || Sc(Sz(), "(iPod") || Sc(Sz(), "(iPhone");
    var Uz = function() {
        this.S = {}
    }
      , Vz = function() {
        var a = jn(window);
        if (a) {
            if (a) {
                var b = a.pageViewId;
                a = a.clientId;
                typeof a === "string" && (b += a.replace(/\D/g, "").substring(0, 6))
            } else
                b = null;
            return +b
        }
        b = Cf(window);
        a = b.google_global_correlator;
        a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * 8796093022208));
        return a
    }
      , Xz = function(a, b) {
        var c = Wz[7] || "google_ps_7";
        a = a.S;
        var d = a[c];
        return d === void 0 ? (a[c] = b(),
        a[c]) : d
    }
      , Yz = function(a) {
        var b = Vz();
        return Xz(a, function() {
            return b
        })
    }
      , $z = function() {
        if (Zz)
            var a = Zz;
        else {
            a = ((a = a === void 0 ? jn() : a) ? rf(a.master) ? a.master : null : null) || window;
            var b = a.google_persistent_state_async;
            a = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Zz = b : a.google_persistent_state_async = Zz = new Uz
        }
        return Yz(a)
    }
      , Zz = null
      , aA = {}
      , Wz = (aA[8] = "google_prev_ad_formats_by_region",
    aA[9] = "google_prev_ad_slotnames_by_region",
    aA);
    var bA = ra(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , cA = function() {
        var a = a === void 0 ? "jserror" : a;
        var b = b === void 0 ? .01 : b;
        var c = c === void 0 ? re(bA) : c;
        this.j = a;
        this.l = b;
        this.o = c;
        this.g = !1
    };
    cA.prototype.qe = function(a) {
        this.g = a
    }
    ;
    cA.prototype.Za = function(a, b, c, d) {
        c = c === void 0 ? this.l : c;
        d = d === void 0 ? this.j : d;
        if (Math.random() > c)
            return this.g;
        Uk(b) || (b = new Tk(b,{
            context: a,
            id: d
        }));
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (b = y.document,
        a = Bf("SCRIPT", b),
        vd(a, this.o),
        (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b),
        y.error_rep_loaded = !0);
        return this.g
    }
    ;
    cA.prototype.Bb = function(a, b) {
        try {
            return b()
        } catch (c) {
            if (!this.Za(a, c, this.l, this.j))
                throw c;
        }
    }
    ;
    cA.prototype.fe = function(a, b, c) {
        var d = this;
        return function() {
            var e = La.apply(0, arguments);
            return d.Bb(a, function() {
                return b.apply(c, e)
            })
        }
    }
    ;
    function dA(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    }
    ;function eA(a, b, c) {
        tf(b, function(d, e) {
            var f = c && c[e];
            !d && d !== 0 || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)),
            c && (c[e] = !0))
        });
        return a
    }
    var jA = function(a, b, c, d, e, f, g, h) {
        f = f === void 0 ? Infinity : f;
        g = g === void 0 ? !1 : g;
        el.call(this, a, h);
        var k = this;
        this.W = b;
        this.domain = c;
        this.path = d;
        this.ba = e;
        this.L = 0;
        this.C = {};
        this.H = {};
        this.aa = [];
        this.report = {};
        this.j = 0;
        this.G = [];
        this.M = f;
        a = this.g.navigator;
        this.V = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now || fA(this, "dat", 1);
        a && a.deviceMemory && fA(this, "dmc", a.deviceMemory);
        this.g === this.g.top && fA(this, "top", 1);
        this.K = !g;
        this.P = function() {
            k.g.setTimeout(function() {
                k.o()
            }, 1100)
        }
        ;
        this.U = function() {
            for (var n = x(k.aa), p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                try {
                    p()
                } catch (t) {}
            }
            n = k.g;
            var r = r === void 0 ? {} : r;
            typeof window.CustomEvent === "function" ? p = new CustomEvent("rum_blp",r) : (p = document.createEvent("CustomEvent"),
            p.initCustomEvent("rum_blp", !!r.bubbles, !!r.cancelable, r.detail));
            n.dispatchEvent(p);
            k.o()
        }
        ;
        this.ha = Pe(function() {
            k.o()
        });
        this.fa = function() {
            var n = k.g.document;
            (n.hidden != null ? n.hidden : n.mozHidden != null ? n.mozHidden : n.webkitHidden != null && n.webkitHidden) && k.ha()
        }
        ;
        this.D = this.g.setTimeout(function() {
            k.o()
        }, 5E3);
        this.B = b.length + c.length + d.length + e.length + 3;
        rb(this.events, function(n) {
            gA(k, n)
        });
        b = dA(this.g);
        var l = function() {
            var n = La.apply(0, arguments)[0]
              , p = n[0];
            n = n[1];
            var r = p.length + n.length + 2;
            k.B + k.j + r > 8E3 && k.o();
            k.G.push([p, n]);
            k.j += r;
            hA(k);
            return 0
        };
        rb(b, function(n) {
            return l(n)
        });
        b.length = 0;
        b.push = l;
        fA(this, "puid", (this.L + 1).toString(36) + "~" + jb().toString(36));
        iA(this)
    };
    v(jA, el);
    var iA = function(a) {
        a.g.document.readyState === "complete" ? a.g.setTimeout(function() {
            a.o()
        }, 0) : Se(a.g, "load", a.P);
        var b = Ve(a.g.document);
        typeof b !== "undefined" && Se(a.g, b, a.fa);
        Se(a.g, "pagehide", a.U)
    }
      , fA = function(a, b, c) {
        c = String(c);
        a.B = a.C[b] != null ? a.B + (c.length - a.C[b].length) : a.B + (b.length + c.length + 2);
        a.C[b] = c
    }
      , mA = function(a, b, c, d, e) {
        e = e === void 0 ? "" : e;
        var f = kA(a, b, c, d, e);
        a.B + a.j + f > 8E3 && (a.o(),
        f = b.length + c.length + 2);
        lA(a, b, c, d, e);
        a.j += f;
        hA(a)
    }
      , kA = function(a, b, c, d, e) {
        return a.report[b] == null ? b.length + c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a.report[b].length
    }
      , lA = function(a, b, c, d, e) {
        a.report[b] = d && a.report[b] != null ? a.report[b] + ("" + (e === void 0 ? "" : e) + c) : c
    }
      , hA = function(a) {
        a.B + a.j >= 6E3 && a.o()
    };
    jA.prototype.o = function() {
        if (this.l && this.K) {
            try {
                this.j && (this.sendBeacon(this.report),
                this.L === this.M && this.A())
            } catch (a) {
                (new cA).Za(358, a)
            }
            this.report = {};
            this.j = 0;
            this.events.length = 0;
            this.g.clearTimeout(this.D);
            this.D = 0
        }
    }
    ;
    var nA = function(a, b) {
        var c = a.W + "//" + a.domain + a.path + a.ba
          , d = {};
        c = eA(c, a.C, d);
        c = eA(c, b, d);
        b = a.g;
        b.google_timing_params && (c = eA(c, b.google_timing_params, d),
        b.google_timing_params = void 0);
        rb(a.G, function(e) {
            var f = x(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = eA(c, (g[e] = f,
            g))
        });
        a.G.length = 0;
        return c
    };
    jA.prototype.sendBeacon = function(a) {
        this.L++;
        a = nA(this, a);
        var b = !1;
        try {
            b = !!(this.V && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.V = !1
        }
        b || Uf(this.g, a);
        fA(this, "puid", (this.L + 1).toString(36) + "~" + jb().toString(36))
    }
    ;
    var gA = function(a, b) {
        var c = "met." + b.type
          , d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value
          , e = Math.round(b.duration);
        b = "" + b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (e > 0 ? "_" + e.toString(36) : "") + (b.taskId != null ? "__" + Math.round(b.taskId).toString(36) : "");
        mA(a, c, b, !0, "~")
    };
    jA.prototype.I = function(a) {
        this.l && this.L < this.M && (el.prototype.I.call(this, a),
        gA(this, a))
    }
    ;
    jA.prototype.A = function() {
        el.prototype.A.call(this);
        this.g.clearTimeout(this.D);
        this.j = this.D = 0;
        this.report = {};
        kc(this.H);
        kc(this.C);
        Te(this.g, "load", this.P);
        Te(this.g, "pagehide", this.U)
    }
    ;
    var P = function() {
        this.g = new jA(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);
        var a = $z();
        a != null && fA(this.g, "c", a);
        a = Math.floor(Number(this.g.C.c) / 2);
        a != null && fA(this.g, "slotId", a)
    };
    P.prototype.o = function() {
        var a = this.g;
        a.K = !0;
        a.o()
    }
    ;
    var Q = function(a, b, c) {
        if (c != null) {
            a = a.g;
            var d = b + "=" + c;
            a.H[d] || (mA(a, b, c, !1),
            d.length < 1E3 && (a.H[d] = !0))
        }
    }
      , oA = function(a, b) {
        for (var c in b)
            b[c] = typeof b[c] === "object" ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
        a = a.g;
        var d = !1;
        c = 0;
        for (var e = x(Object.keys(b)), f = e.next(); !f.done; f = e.next())
            f = f.value,
            a.report[f] != null && (d = !0),
            c += kA(a, f, b[f], !1);
        (a.B + a.j + c > 8E3 || d) && a.o();
        d = x(Object.keys(b));
        for (e = d.next(); !e.done; e = d.next())
            e = e.value,
            lA(a, e, b[e], !1);
        a.j += c;
        hA(a)
    }
      , pA = function(a) {
        var b = P.getInstance().g;
        b.l && b.I(new al(a,4,Xk() - 0,0))
    };
    P.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; d != null && d !== document.documentElement; ) {
            var g = void 0
              , h = void 0;
            if (((g = d) == null ? 0 : g.getAttribute("data-ck-navigates")) || ((h = d) == null ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = (g = (f = d) == null ? void 0 : f.getAttribute("data-ck-navigates")) != null ? g : !1;
                h = g = void 0;
                f = (h = (g = d) == null ? void 0 : g.getAttribute("data-ck-tag")) != null ? h : "notag";
                break
            }
            g = void 0;
            d = (g = d.parentElement) != null ? g : void 0
        }
        d = this.g;
        d.l && d.I(new al(a + "_" + b + "x" + c + "|" + e + "|" + f,4,Xk(),0))
    }
    ;
    P.getInstance = function() {
        return E(P)
    }
    ;
    var qA = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" ")
      , rA = ["c.googlesyndication.com"];
    function sA(a, b) {
        b = b === void 0 ? window.location.protocol : b;
        var c = !1;
        a == null || !a.startsWith("http") || (a == null ? 0 : a.startsWith("https")) ? c = !1 : tA(a, rA) ? c = !1 : b.includes("https") && tA(a, qA) && (c = !0);
        return c ? (a = new O(a),
        Q(P.getInstance(), "htp", "1"),
        tz(a, "https"),
        a.toString()) : a
    }
    function uA(a) {
        if (!a)
            return !1;
        try {
            return (typeof a === "string" ? new O(a) : a).o === "gcache"
        } catch (b) {
            return !1
        }
    }
    function vA(a) {
        return uA(a) && !!Jz(new O(a), "url")
    }
    function wA(a) {
        try {
            var b = typeof a === "string" ? new O(a) : a;
            if (uA(b)) {
                var c, d;
                return (d = (c = Jz(b, "url")) != null ? c : Jz(b, "tag.check_url")) != null ? d : null
            }
        } catch (e) {}
        return null
    }
    function tA(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)","i")).test(a)
    }
    ;var xA = -1;
    function yA(a, b) {
        b = b != null ? b : "";
        Rd && (b = "");
        if (!Jc(Ed(a))) {
            var c = a instanceof kd || !kw.test(a) ? a : ld(a);
            if (c instanceof kd)
                var d = c;
            else {
                d = d === void 0 ? pd : d;
                a: if (d = d === void 0 ? pd : d,
                !(a instanceof kd)) {
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof nd && e.Yg(a)) {
                            a = ld(a);
                            break a
                        }
                    }
                    a = void 0
                }
                d = a || md
            }
            a = window;
            if (d instanceof kd)
                if (d instanceof kd)
                    d = d.g;
                else
                    throw Error("");
            else
                d = rd.test(d) ? d : void 0;
            d !== void 0 && a.open(d, "_blank", b)
        }
    }
    ;function zA(a, b) {
        for (var c; !(c = a.next()).done; )
            b(c.value)
    }
    var AA = function(a, b) {
        this.g = a[y.Symbol.iterator]();
        this.j = b
    };
    AA.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    AA.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    }
    ;
    var BA = function(a, b) {
        return new AA(a,b)
    };
    var CA = function(a, b) {
        var c = new Set(a);
        zA(b[Symbol.iterator](), function(d) {
            return c.add(d)
        });
        return c
    };
    var DA = new Map
      , EA = function() {
        this.j = this.g = null
    };
    function FA(a, b, c, d) {
        var e = Yl(a);
        qe(b, e) ? (e = setTimeout(function() {
            return FA(a, b, c, d)
        }, 200),
        d.j = e) : (GA(d),
        c(e))
    }
    function HA(a) {
        var b = new EA, c = new Promise(function(f) {
            var g = Yl(a);
            if ("ResizeObserver"in window) {
                var h = new ResizeObserver(function(k) {
                    window.requestAnimationFrame(function() {
                        for (var l = new pe(0,0), n = x(k), p = n.next(); !p.done; p = n.next())
                            if (p = p.value,
                            p.contentBoxSize ? (p = Array.isArray(p.contentBoxSize) ? p.contentBoxSize[0] : p.contentBoxSize,
                            l.width = Math.floor(p.inlineSize),
                            l.height = Math.floor(p.blockSize)) : (l.width = Math.floor(p.contentRect.width),
                            l.height = Math.floor(p.contentRect.height)),
                            !qe(g, l))
                                return GA(b),
                                f(l)
                    })
                }
                );
                b.g = h;
                h.observe(a)
            } else
                FA(a, g, f, b)
        }
        ), d, e = (d = DA.get(c)) != null ? d : new Set;
        e.add(b);
        DA.set(c, e);
        return c
    }
    function IA(a, b) {
        b = b === void 0 ? new pe(1,1) : b;
        var c = function(g) {
            var h = HA(a), k, l = (k = DA.get(g)) != null ? k : new Set, n;
            k = (n = DA.get(h)) != null ? n : new Set;
            DA.set(g, CA(l, k));
            return h
        }, d = function(g, h) {
            c(g).then(function(k) {
                return b.width <= k.width && b.height <= k.height ? (JA(g),
                h(k)) : d(g, h)
            })
        }, e, f = new Promise(function(g) {
            e = g
        }
        );
        d(f, e);
        return f
    }
    function JA(a) {
        a = DA.get(a);
        a = x(a);
        for (var b = a.next(); !b.done; b = a.next())
            GA(b.value)
    }
    function GA(a) {
        a.j && window.clearTimeout(a.j);
        a.g && (a.g.disconnect(),
        a.g = null)
    }
    ;function KA(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    function LA(a, b) {
        var c;
        if (c = c === void 0 ? typeof omidExports === "undefined" ? null : omidExports : c)
            a = a.split("."),
            a.slice(0, a.length - 1).reduce(KA, c)[a[a.length - 1]] = b
    }
    ;var MA = new Map([[2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]], [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/, /^(https?:\/\/|\/\/)?(\w\.?)+\.dv\.tech\/.*$/]], [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]], [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]], [6, []], [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]], [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]], [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]]);
    LA("OmidSessionClient.verificationVendorIdForScriptUrl", function(a) {
        for (var b = x(MA.keys()), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = x(MA.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a))
                    return c
        }
        return 1
    });
    LA("OmidSessionClient.VerificationVendorId", {
        OTHER: 1,
        MOAT: 2,
        DOUBLEVERIFY: 3,
        INTEGRAL_AD_SCIENCE: 4,
        PIXELATE: 5,
        NIELSEN: 6,
        COMSCORE: 7,
        MEETRICS: 8,
        GOOGLE: 9
    });
    var NA = function(a, b, c) {
        this.id = a;
        this.J = b;
        this.j = c;
        this.g = !1
    }
      , OA = function(a) {
        return a.g || a.j
    }
      , PA = function() {
        this.g = []
    }
      , QA = function() {
        this.g = new Map;
        this.j = !1;
        this.o = new PA;
        this.B = new NA(0,0,!1);
        this.l = [this.o]
    }
      , R = function(a) {
        var b = RA;
        if (b.j || b.g.has(a.id) || a.J == null && a.control == null || a.Dj == 0)
            return b.B;
        var c = b.o;
        if (a.control != null)
            for (var d = x(b.l), e = d.next(); !e.done; e = d.next()) {
                if (e = e.value,
                e.g.includes(a.control)) {
                    c = e;
                    break
                }
            }
        else
            a.ia != null && (c = a.ia);
        d = 0;
        a.control != null ? d = a.control.J : a.J != null && (d = a.J);
        a = new NA(a.id,d,!!a.Fj);
        c.g.push(a);
        b.l.includes(c) || b.l.push(c);
        b.g.set(a.id, a);
        return a
    }
      , SA = function() {
        var a = RA;
        a = [].concat(pa(a.g.keys())).filter(function(c) {
            return OA(this.g.get(c))
        }, a);
        var b = fu();
        return [].concat(pa(a), pa(b))
    }
      , TA = function(a) {
        var b = RA;
        b.j || (a.j(b.l, b.g),
        b.j = !0)
    };
    QA.prototype.reset = function() {
        for (var a = x(this.g), b = a.next(); !b.done; b = a.next())
            b = x(b.value),
            b.next(),
            b.next().value.g = !1;
        this.j = !1
    }
    ;
    var RA = new QA
      , Bc = function() {
        return UA.g.filter(function(a) {
            return OA(a)
        }).map(function(a) {
            return a.id
        })
    };
    var VA = function(a) {
        this.g = a
    };
    VA.prototype.j = function(a, b) {
        a = x(this.g);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value))
                c.g = !0
    }
    ;
    var WA = function(a, b) {
        this.g = a;
        this.l = b
    };
    v(WA, VA);
    WA.prototype.j = function(a, b) {
        VA.prototype.j.call(this, a, b);
        var c = [];
        a = [];
        for (var d = x(this.g), e = d.next(); !e.done; e = d.next())
            e = e.value,
            b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        Q(P.getInstance(), "sei", b);
        Q(P.getInstance(), "nsei", a);
        Q(P.getInstance(), "bi", this.l)
    }
    ;
    var XA = function(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
      , YA = function(a) {
        try {
            return y.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (XA(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , $A = function() {
        this.g = ZA
    };
    $A.prototype.da = function(a) {
        var b = [];
        aB(this, a, b);
        return b.join("")
    }
    ;
    var aB = function(a, b, c) {
        if (b == null)
            c.push("null");
        else {
            if (typeof b == "object") {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        aB(a, a.g ? a.g.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        typeof e != "function" && (c.push(f),
                        bB(d, c),
                        c.push(":"),
                        aB(a, a.g ? a.g.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                bB(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , cB = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\u000b"
    }
      , dB = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
      , bB = function(a, b) {
        b.push('"', a.replace(dB, function(c) {
            var d = cB[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1),
            cB[c] = d);
            return d
        }), '"')
    };
    var eB = function() {
        this.l = null;
        this.g = "missing-id";
        this.j = !1
    }
      , fB = function(a) {
        var b = null;
        try {
            b = document.getElementsByClassName("lima-exp-data")
        } catch (c) {
            return a.onError("missing-element", a.g),
            null
        }
        if (b.length > 1)
            return a.onError("multiple-elements", a.g),
            null;
        b = b[0];
        return b ? b.innerHTML : (a.onError("missing-element", a.g),
        null)
    }
      , hB = function() {
        var a = gB
          , b = fB(a);
        if (b !== null)
            if (XA(b)) {
                var c = JSON.parse(b);
                b = c.experimentIds;
                var d = c.binaryIdentifier;
                c = c.adEventId;
                var e = typeof d === "string";
                if (typeof c == "string") {
                    var f = P.getInstance();
                    c != null && fA(f.g, "qqid", c)
                }
                e && (a.g = d);
                if (typeof b !== "string")
                    a.onError("missing-flags", a.g);
                else {
                    if (!e)
                        a.onError("missing-binary-id", a.g);
                    a.l = b
                }
            } else
                a.onError("invalid-json", a.g)
    };
    eB.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    }
    ;
    var iB = function() {
        eB.apply(this, arguments)
    };
    v(iB, eB);
    iB.prototype.onError = function(a, b) {
        var c = P.getInstance();
        Q(c, "eee", a);
        Q(c, "bi", b)
    }
    ;
    iB.getInstance = function() {
        return E(iB)
    }
    ;
    function jB() {
        return kB.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    }
    ;var UA = new PA
      , lB = new PA
      , mB = new PA
      , nB = new PA
      , oB = new PA
      , pB = new PA
      , qB = new PA
      , rB = new PA;
    R({
        id: 95342637,
        J: 0
    });
    R({
        id: 318475490,
        J: 0
    });
    R({
        id: 324123032,
        J: 0
    });
    R({
        id: 420706097,
        J: 10
    });
    R({
        id: 420706098,
        J: 10
    });
    R({
        id: 95342168,
        J: 10
    });
    R({
        id: 95342169,
        J: 10
    });
    R({
        id: 21062100,
        J: 0
    });
    R({
        id: 420706142,
        J: 0
    });
    R({
        id: 44745813,
        J: 0
    });
    R({
        id: 95355265,
        J: 0
    });
    R({
        id: 44746068,
        J: 0
    });
    R({
        id: 21064565,
        J: 0
    });
    R({
        id: 21064567,
        J: 0
    });
    R({
        id: 418572006,
        J: 10
    });
    R({
        id: 95338773,
        J: 10,
        ia: nB
    });
    R({
        id: 95338774,
        J: 10,
        ia: nB
    });
    R({
        id: 95334214,
        J: 10
    });
    R({
        id: 95334215,
        J: 10
    });
    R({
        id: 44749839,
        J: 0
    });
    R({
        id: 44714743,
        J: 0
    });
    R({
        id: 44715336,
        J: 10
    });
    R({
        id: 44724516,
        J: 0
    });
    R({
        id: 44726389,
        J: 10
    });
    R({
        id: 44752711,
        J: 50
    });
    R({
        id: 44752052,
        J: 50
    });
    R({
        id: 44752657,
        J: 50
    });
    R({
        id: 44733246,
        J: 10
    });
    R({
        id: 95343833,
        J: 10,
        ia: lB
    });
    R({
        id: 95343834,
        J: 10,
        ia: lB
    });
    R({
        id: 95343835,
        J: 10,
        ia: lB
    });
    R({
        id: 95343836,
        J: 10,
        ia: lB
    });
    R({
        id: 95343837,
        J: 10,
        ia: lB
    });
    R({
        id: 95343832,
        J: 10,
        ia: lB
    });
    R({
        id: 44751889,
        J: 10
    });
    R({
        id: 44751890,
        J: 10
    });
    R({
        id: 44752995,
        J: 10
    });
    R({
        id: 44752996,
        J: 10
    });
    R({
        id: 44762627,
        J: 0
    });
    R({
        id: 44762628,
        J: 0
    });
    R({
        id: 44801479,
        J: 10,
        ia: mB
    });
    R({
        id: 44801480,
        J: 10,
        ia: mB
    });
    R({
        id: 44752538,
        J: 0
    });
    R({
        id: 44754608,
        J: 10
    });
    R({
        id: 44754609,
        J: 10
    });
    R({
        id: 44776384,
        J: 0
    });
    R({
        id: 44789282,
        J: 0
    });
    R({
        id: 95344889,
        J: 0
    });
    R({
        id: 95355192,
        J: 0
    });
    R({
        id: 95334260,
        J: 0
    });
    R({
        id: 95345698,
        J: 0
    });
    R({
        id: 95356427,
        J: 0
    });
    R({
        id: 95356737,
        J: 0
    });
    var sB = R({
        id: 75259416,
        J: 0
    })
      , tB = R({
        id: 75259420,
        J: 0
    })
      , uB = R({
        id: 75259421,
        J: 0
    });
    R({
        id: 45401791,
        J: 0
    });
    R({
        id: 95326337,
        J: 990,
        ia: oB
    });
    var vB = typeof window !== "undefined" ? window : null, wB, xB = (wB = vB == null ? void 0 : vB.navigator) != null ? wB : null, yB = (xB == null ? 0 : xB.cookieDeprecationLabel) ? 990 : 0;
    R({
        id: 95322906,
        J: (xB == null ? 0 : xB.cookieDeprecationLabel) ? 10 : 0,
        ia: pB
    });
    var zB = R({
        id: 95320461,
        J: 0,
        ia: pB
    })
      , AB = R({
        id: 95322907,
        J: yB,
        ia: pB
    });
    R({
        id: 44809192,
        J: 10,
        ia: rB
    });
    R({
        id: 44809193,
        J: 10,
        ia: rB
    });
    R({
        id: 95320804,
        J: 10,
        ia: rB
    });
    R({
        id: 95320805,
        J: 10,
        ia: rB
    });
    R({
        id: 95322027,
        J: 1E3,
        ia: qB
    });
    var BB = R({
        id: 46130031,
        J: 0
    });
    R({
        id: 95328713,
        J: 10
    });
    R({
        id: 95328714,
        J: 10
    });
    var CB = R({
        id: 95327848,
        J: 0
    });
    R({
        id: 31065644,
        J: 1
    });
    var DB = R({
        id: 31065645,
        J: 1
    })
      , EB = new PA;
    R({
        id: 95331588,
        J: 0,
        ia: EB
    });
    R({
        id: 95331589,
        J: 1E3,
        ia: EB
    });
    var FB = R({
        id: 95332182,
        J: 0
    });
    R({
        id: 95347814,
        J: 10
    });
    R({
        id: 95347815,
        J: 10
    });
    if (typeof window !== "undefined" && typeof window.initializeVirtualDom === "undefined") {
        var gB = iB.getInstance();
        gB.j || (hB(),
        gB.j = !0);
        var kB = gB.l, GB;
        gB.j || (hB(),
        gB.j = !0);
        GB = gB.g;
        if (kB != null) {
            var HB = new WA(jB(),GB);
            TA(HB)
        }
    }
    ;var IB = /OS (\S+) like/
      , JB = /Android ([\d\.]+)/;
    function KB(a, b) {
        a = (a = a.exec(Wc())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return Uc(a, b) >= 0
    }
    var LB = function() {
        return Yd || Vd && "ontouchstart"in document.documentElement
    }
      , MB = function(a) {
        return (a = a === void 0 ? null : a) && typeof a.getAttribute === "function" ? a.getAttribute("playsinline") ? !0 : !1 : !1
    };
    var NB = function(a) {
        N.call(this);
        this.g = a;
        this.o = this.A = !1;
        this.C = this.D = 0;
        this.j = new us(1E3);
        Rm(this, this.j);
        Hr(this.j, "tick", this.G, !1, this);
        Hr(this.g, "pause", this.l, !1, this);
        Hr(this.g, "playing", this.l, !1, this);
        Hr(this.g, "ended", this.l, !1, this);
        Hr(this.g, "timeupdate", this.l, !1, this)
    };
    v(NB, N);
    var OB = function(a) {
        var b = "currentTime";
        if (a.g[b])
            return a.g[b];
        b = "getCurrentTime";
        return a.g[b] ? a.g[b]() : 0
    };
    NB.prototype.l = function(a) {
        switch (a.type) {
        case "playing":
            PB(this);
            break;
        case "pause":
        case "ended":
            this.j.enabled && this.j.stop();
            break;
        case "timeupdate":
            !this.A && OB(this) > 0 && (this.A = !0,
            PB(this))
        }
    }
    ;
    var PB = function(a) {
        !a.j.enabled && a.A && (a.D = OB(a) * 1E3,
        a.C = Date.now(),
        a.o = !1,
        a.j.start())
    };
    NB.prototype.G = function() {
        var a = Date.now()
          , b = a - this.C
          , c = OB(this) * 1E3;
        c - this.D < b * .5 ? this.o || (this.o = !0,
        this.dispatchEvent("playbackStalled")) : this.o = !1;
        this.D = c;
        this.C = a
    }
    ;
    var QB = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" ")
      , RB = /\bocr\b/;
    function SB(a) {
        if (Jc(Ed(a)) || Rd && a.length > 2048)
            return !1;
        try {
            if ((new O(a)).D().match(RB))
                return !0
        } catch (b) {}
        return QB.find(function(b) {
            return a.match(b) != null
        }) != null
    }
    ;function TB(a, b) {
        return Jc(b) ? !1 : (new RegExp(a)).test(b)
    }
    function UB(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            d.length == 2 && (c = Kc(d[0]),
            d = Kc(d[1]),
            c.length > 0 && (b[c] = d))
        });
        return b
    }
    function VB(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a)
            return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a))
            return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    }
    ;var WB = function() {
        this.g = Date.now()
    };
    WB.prototype.reset = function() {
        this.g = Date.now()
    }
    ;
    var XB = function(a) {
        a = a.g + 5E3 - Date.now();
        return a > 0 ? a : 0
    };
    var YB = function(a, b) {
        this.url = a;
        this.g = b === void 0 ? null : b
    };
    var ZB = function(a) {
        switch (a) {
        case 0:
            return "No Error";
        case 1:
            return "Access denied to content document";
        case 2:
            return "File not found";
        case 3:
            return "Firefox silently errored";
        case 4:
            return "Application custom error";
        case 5:
            return "An exception occurred";
        case 6:
            return "Http response at 400 or 500 level";
        case 7:
            return "Request was aborted";
        case 8:
            return "Request timed out";
        case 9:
            return "The resource is not available offline";
        default:
            return "Unrecognized error code"
        }
    };
    var $B = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.errorCode = a
    };
    v($B, Error);
    function aC(a) {
        return td(a === null ? "null" : a === void 0 ? "undefined" : a)
    }
    ;var bC = function(a) {
        M.call(this);
        this.o = a;
        this.j = {}
    };
    mb(bC, M);
    var cC = [];
    bC.prototype.listen = function(a, b, c, d) {
        return dC(this, a, b, c, d)
    }
    ;
    var dC = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (cC[0] = c.toString()),
        c = cC);
        for (var g = 0; g < c.length; g++) {
            var h = Hr(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h)
                break;
            a.j[h.key] = h
        }
        return a
    };
    bC.prototype.hc = function(a, b, c, d) {
        return eC(this, a, b, c, d)
    }
    ;
    var eC = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++)
                eC(a, b, c[g], d, e, f);
        else {
            b = Gr(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b)
                return a;
            a.j[b.key] = b
        }
        return a
    };
    bC.prototype.Ra = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.Ra(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = Wa(d) ? !!d.capture : !!d,
            e = e || this.o || this,
            c = Ir(c),
            d = !!d,
            b = wr(a) ? a.bc(b, c, d, e) : a ? (a = Kr(a)) ? a.bc(b, c, d, e) : null : null,
            b && (Pr(b),
            delete this.j[b.key])
    }
    ;
    var fC = function(a) {
        Yb(a.j, function(b, c) {
            this.j.hasOwnProperty(c) && Pr(b)
        }, a);
        a.j = {}
    };
    bC.prototype.O = function() {
        bC.Qa.O.call(this);
        fC(this)
    }
    ;
    bC.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var gC = function() {
        N.call(this);
        this.headers = new Map;
        this.j = !1;
        this.g = null;
        this.H = "";
        this.o = 0;
        this.l = this.G = this.A = this.D = !1;
        this.K = 0;
        this.C = null;
        this.U = "";
        this.M = !1
    };
    mb(gC, N);
    var hC = /^https?$/i
      , iC = ["POST", "PUT"]
      , lC = function(a, b, c, d) {
        if (a.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.H + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.H = b;
        a.o = 0;
        a.D = !1;
        a.j = !0;
        a.g = new XMLHttpRequest;
        a.g.onreadystatechange = Sr(eb(a.P, a));
        try {
            a.G = !0,
            a.g.open(c, String(b), !0),
            a.G = !1
        } catch (g) {
            jC(a);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        var e = Array.from(d.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        })
          , f = y.FormData && b instanceof y.FormData;
        !Cb(iC, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = x(d);
        for (d = c.next(); !d.done; d = c.next())
            e = x(d.value),
            d = e.next().value,
            e = e.next().value,
            a.g.setRequestHeader(d, e);
        a.U && (a.g.responseType = a.U);
        "withCredentials"in a.g && a.g.withCredentials !== a.M && (a.g.withCredentials = a.M);
        try {
            kC(a),
            a.K > 0 && (a.C = setTimeout(a.W.bind(a), a.K)),
            a.A = !0,
            a.g.send(b),
            a.A = !1
        } catch (g) {
            jC(a)
        }
    };
    gC.prototype.W = function() {
        typeof Pa != "undefined" && this.g && (this.o = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    var jC = function(a) {
        a.j = !1;
        a.g && (a.l = !0,
        a.g.abort(),
        a.l = !1);
        a.o = 5;
        mC(a);
        nC(a)
    }
      , mC = function(a) {
        a.D || (a.D = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    gC.prototype.abort = function(a) {
        this.g && this.j && (this.j = !1,
        this.l = !0,
        this.g.abort(),
        this.l = !1,
        this.o = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        nC(this))
    }
    ;
    gC.prototype.O = function() {
        this.g && (this.j && (this.j = !1,
        this.l = !0,
        this.g.abort(),
        this.l = !1),
        nC(this, !0));
        gC.Qa.O.call(this)
    }
    ;
    gC.prototype.P = function() {
        this.Da() || (this.G || this.A || this.l ? oC(this) : this.V())
    }
    ;
    gC.prototype.V = function() {
        oC(this)
    }
    ;
    var oC = function(a) {
        if (a.j && typeof Pa != "undefined")
            if (a.A && (a.g ? a.g.readyState : 0) == 4)
                setTimeout(a.P.bind(a), 0);
            else if (a.dispatchEvent("readystatechange"),
            (a.g ? a.g.readyState : 0) == 4) {
                a.j = !1;
                try {
                    var b = pC(a);
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = b === 0) {
                            var f = String(a.H).match(mf)[1] || null;
                            !f && y.self && y.self.location && (f = y.self.location.protocol.slice(0, -1));
                            e = !hC.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.o = 6,
                    mC(a))
                } finally {
                    nC(a)
                }
            }
    }
      , nC = function(a, b) {
        if (a.g) {
            kC(a);
            var c = a.g;
            a.g = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = null
            } catch (d) {}
        }
    }
      , kC = function(a) {
        a.C && (clearTimeout(a.C),
        a.C = null)
    };
    gC.prototype.isActive = function() {
        return !!this.g
    }
    ;
    var pC = function(a) {
        try {
            return (a.g ? a.g.readyState : 0) > 2 ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }
      , qC = function(a) {
        if (a.g) {
            a: {
                a = a.g.responseText;
                if (y.JSON)
                    try {
                        var b = y.JSON.parse(a);
                        break a
                    } catch (c) {}
                b = YA(a)
            }
            return b
        }
    };
    var rC = function() {};
    rC.prototype.get = function(a) {
        return sC({
            url: a.url,
            timeout: a.timeout,
            withCredentials: a.withCredentials === void 0 ? !0 : a.withCredentials,
            method: "GET",
            headers: a.headers === void 0 ? {} : a.headers
        })
    }
    ;
    var sC = function(a) {
        var b = a.url;
        var c = a.timeout;
        var d = a.withCredentials;
        var e = a.method;
        var f = a.content === void 0 ? void 0 : a.content;
        var g = a.headers === void 0 ? {} : a.headers;
        return tC({
            url: b,
            timeout: c,
            withCredentials: d,
            method: e,
            content: f,
            headers: g
        }).then(function(h) {
            return Promise.resolve(h)
        }, function(h) {
            return h instanceof Error && h.message == 6 && d ? tC({
                url: b,
                timeout: c,
                withCredentials: !d,
                method: e,
                content: f,
                headers: g
            }) : Promise.reject(h)
        })
    }
      , tC = function(a) {
        var b = a.url;
        var c = a.timeout;
        var d = a.withCredentials;
        var e = a.method;
        var f = a.content === void 0 ? void 0 : a.content;
        a = a.headers === void 0 ? {} : a.headers;
        var g = new gC;
        g.M = d;
        g.K = Math.max(0, XB(c));
        for (var h in a)
            g.headers.set(h, a[h]);
        var k = new bC;
        return new Promise(function(l, n) {
            k.hc(g, "success", function() {
                a: {
                    if (im())
                        try {
                            qC(g);
                            var p = "application/json";
                            break a
                        } catch (u) {
                            p = "application/xml";
                            break a
                        }
                    g.g && (g.g ? g.g.readyState : 0) == 4 ? (p = g.g.getResponseHeader("Content-Type"),
                    p = p === null ? void 0 : p) : p = void 0;
                    p = p || ""
                }
                if (p.indexOf("application/json") != -1)
                    try {
                        l(qC(g) || {})
                    } catch (u) {
                        n(new $B(5,pC(g)))
                    }
                else {
                    try {
                        var r = g.g ? g.g.responseXML : null
                    } catch (u) {
                        r = null
                    }
                    if (r == null) {
                        try {
                            var t = g.g ? g.g.responseText : ""
                        } catch (u) {
                            t = ""
                        }
                        if (typeof DOMParser != "undefined")
                            r = new DOMParser,
                            t = aC(t),
                            r = r.parseFromString(ud(t), "application/xml");
                        else
                            throw Error("Your browser does not support loading xml documents");
                    }
                    l(r)
                }
                k.dispose();
                g.dispose()
            });
            k.hc(g, ["error", "timeout"], function() {
                n(new $B(g.o,pC(g)));
                k.dispose();
                g.dispose()
            });
            lC(g, sA(b), e, f)
        }
        )
    };
    z("google.javascript.ads.imalib.common.UrlLoader", rC);
    var uC = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
    function vC() {
        var a = a === void 0 ? document : a;
        var b;
        return !((b = a.featurePolicy) == null || !b.features().includes("attribution-reporting"))
    }
    function wC(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    }
    function xC() {
        var a = window.navigator
          , b = window.document;
        return !!(window.isSecureContext && "runAdAuction"in a && a.runAdAuction instanceof Function && wC("run-ad-auction", b))
    }
    ;var yC = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        }
        )
    };
    var zC = RegExp("^(https?:)?\\/\\/ad\\.doubleclick\\.net/ddm/track(imp|clk)")
      , CC = function(a, b, c, d, e) {
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? null : e;
        var f, g;
        Ka(function(h) {
            if (h.g == 1) {
                h.l = 2;
                b = d ? sA(b, "https") : sA(b);
                if (f = zC.test(b))
                    b = b.replace("?", ";tpsrc=ima?"),
                    e = e || "";
                c = c || SB(b);
                g = e != null && window.fetch != null;
                return a.j || g ? za(h, AC(a, b, c, e), 5) : za(h, BC(a, b, c, e), 5)
            }
            if (h.g != 2)
                return Aa(h, 0);
            Da(h);
            h.g = 0
        })
    }
      , BC = function(a, b, c, d) {
        d = vC() ? d : null;
        return im() ? DC(b) : EC(a, b, c, d)
    }
      , FC = function(a, b) {
        var c = {
            keepalive: !0,
            method: "get",
            redirect: "follow",
            credentials: "include"
        };
        a && (c.referrerPolicy = "no-referrer");
        b ? "setAttributionReporting"in XMLHttpRequest.prototype ? (c.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
        },
        c.mode = "no-cors") : c.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        } : c.mode = "no-cors";
        return c
    }
      , AC = function(a, b, c, d) {
        d = d === void 0 ? null : d;
        var e, f, g, h, k, l, n, p, r;
        return Ka(function(t) {
            if (t.g == 1)
                return Q(P.getInstance(), "faa", "1"),
                Q(P.getInstance(), "alp", d === null ? "0" : "1"),
                e = vC(),
                Q(P.getInstance(), "arpa", e ? "1" : "0"),
                f = d === "" && e,
                g = FC(c, f),
                h = fetch(b, g).then(function() {
                    Q(P.getInstance(), "fas", "1")
                }, function() {
                    Q(P.getInstance(), "faf", "1");
                    a.j = !1;
                    return BC(a, b, c, d)
                }),
                k = e && d ? fetch(d, FC(c, !0)) : Promise.resolve(),
                l = x,
                za(t, Promise.allSettled([h, k]), 2);
            n = l(t.j);
            r = p = n.next().value;
            if (r.status === "rejected")
                throw r.reason;
            t.g = 0
        })
    }
      , EC = function(a, b, c, d) {
        var e = new yC
          , f = Ae(document, "IMG")
          , g = (a.l++).toString();
        a.g.set(g, f);
        f.addEventListener("load", function() {
            a.g.delete(g);
            e.resolve()
        });
        f.addEventListener("error", function(h) {
            a.g.delete(g);
            e.reject(h)
        });
        c && (f.referrerPolicy = "no-referrer");
        d != null && (f.attributionSrc = d);
        f.src = b;
        return e.promise
    }
      , DC = function(a) {
        var b;
        return Ka(function(c) {
            b = new rC;
            return za(c, b.get({
                url: a,
                timeout: new WB
            }), 0)
        })
    };
    var GC = function(a) {
        this.g = a;
        this.o = "";
        this.l = -1;
        this.j = null;
        this.B = !1
    }
      , IC = function(a, b) {
        if (a.l >= 0) {
            var c = b == null ? function() {}
            : b
              , d = function() {
                HC(a, c);
                a.g.removeEventListener("loadedmetadata", d, !1)
            };
            a.g.addEventListener("loadedmetadata", d, !1);
            a.g.src = a.o;
            a.j !== null && a.g.setAttribute("crossOrigin", a.j);
            a.g.load()
        } else
            b != null && b()
    }
      , HC = function(a, b) {
        var c = a.g.seekable.length > 0;
        a.B ? c ? (a.g.currentTime = a.l,
        JC(a),
        b()) : setTimeout(function() {
            return void HC(a, b)
        }, 100) : (JC(a),
        b())
    }
      , JC = function(a) {
        a.l = -1;
        a.o = "";
        a.B = !1;
        a.j = null
    };
    var KC = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Rh: "beginFullscreen",
        CAN_PLAY: "canPlay",
        CAN_PLAY_THROUGH: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        ei: "end",
        fi: "endFullscreen",
        ERROR: "error",
        ki: "focusSkipButton",
        LOAD_START: "loadStart",
        LOADED: "loaded",
        Oi: "mediaLoadTimeout",
        Pi: "mediaPlaybackTimeout",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        SEEKED: "seeked",
        SEEKING: "seeking",
        dj: "skip",
        cg: "skipShown",
        STALLED: "stalled",
        Fe: "start",
        TIME_UPDATE: "timeUpdate",
        gj: "timedMetadata",
        pj: "volumeChange",
        WAITING: "waiting",
        sj: "windowFocusChanged",
        li: "fullyLoaded"
    };
    var LC = function() {};
    var MC = {}
      , NC = (MC[18] = -1,
    MC[22] = -1,
    MC[43] = 350,
    MC[44] = 350,
    MC[45] = 350,
    MC[59] = -1,
    MC[133] = 350,
    MC[134] = 350,
    MC[135] = 350,
    MC[136] = 350,
    MC[139] = 50,
    MC[140] = 50,
    MC[141] = 50,
    MC[160] = 350,
    MC[242] = 150,
    MC[243] = 150,
    MC[244] = 150,
    MC[245] = 150,
    MC[247] = 150,
    MC[249] = 50,
    MC[250] = 50,
    MC[251] = 50,
    MC[278] = 150,
    MC[342] = -1,
    MC[343] = -1,
    MC[344] = -1,
    MC[345] = -1,
    MC[346] = -1,
    MC[347] = -1,
    MC)
      , OC = {}
      , PC = (OC[18] = !1,
    OC[22] = !1,
    OC[43] = !0,
    OC[44] = !0,
    OC[45] = !0,
    OC[59] = !1,
    OC[133] = !0,
    OC[134] = !0,
    OC[135] = !0,
    OC[136] = !0,
    OC[139] = !0,
    OC[140] = !0,
    OC[141] = !0,
    OC[160] = !0,
    OC[242] = !0,
    OC[243] = !0,
    OC[244] = !0,
    OC[245] = !0,
    OC[247] = !0,
    OC[249] = !0,
    OC[250] = !0,
    OC[251] = !0,
    OC[278] = !0,
    OC[342] = !1,
    OC[343] = !1,
    OC[344] = !1,
    OC[345] = !1,
    OC[346] = !1,
    OC[347] = !1,
    OC)
      , QC = {}
      , RC = (QC[18] = "video/mp4",
    QC[22] = "video/mp4",
    QC[43] = "video/webm",
    QC[44] = "video/webm",
    QC[45] = "video/webm",
    QC[59] = "video/mp4",
    QC[133] = "video/mp4",
    QC[134] = "video/mp4",
    QC[135] = "video/mp4",
    QC[136] = "video/mp4",
    QC[139] = "audio/mp4",
    QC[140] = "audio/mp4",
    QC[141] = "audio/mp4",
    QC[160] = "video/mp4",
    QC[242] = "video/webm",
    QC[243] = "video/webm",
    QC[244] = "video/webm",
    QC[245] = "video/webm",
    QC[247] = "video/webm",
    QC[249] = "audio/webm",
    QC[250] = "audio/webm",
    QC[251] = "audio/webm",
    QC[278] = "video/webm",
    QC[342] = "video/mp4",
    QC[343] = "video/mp4",
    QC[344] = "video/mp4",
    QC[345] = "video/mp4",
    QC[346] = "video/mp4",
    QC[347] = "video/mp4",
    QC)
      , SC = {}
      , TC = (SC[18] = "avc1.42001E, mp4a.40.2",
    SC[22] = "avc1.64001F, mp4a.40.2",
    SC[43] = "vp8, vorbis",
    SC[44] = "vp8, vorbis",
    SC[45] = "vp8, vorbis",
    SC[59] = "avc1.4D001F, mp4a.40.2",
    SC[133] = "avc1.4D401E",
    SC[134] = "avc1.4D401E",
    SC[135] = "avc1.4D401E",
    SC[136] = "avc1.4D401E",
    SC[139] = "mp4a.40.2",
    SC[140] = "mp4a.40.2",
    SC[141] = "mp4a.40.2",
    SC[160] = "avc1.4D401E",
    SC[242] = "vp9",
    SC[243] = "vp9",
    SC[244] = "vp9",
    SC[245] = "vp9",
    SC[247] = "vp9",
    SC[249] = "opus",
    SC[250] = "opus",
    SC[251] = "opus",
    SC[278] = "vp9",
    SC[342] = "avc1.42E01E, mp4a.40.2",
    SC[343] = "avc1.42E01E, mp4a.40.2",
    SC[344] = "avc1.42E01E, mp4a.40.2",
    SC[345] = "avc1.42E01E, mp4a.40.2",
    SC[346] = "avc1.42E01E, mp4a.40.2",
    SC[347] = "avc1.4D001F, mp4a.40.2",
    SC);
    var UC = [243, 134, 242, 133, 244, 135]
      , VC = [139, 140, 249, 250, 141, 251];
    function WC(a, b) {
        b = x(b);
        for (var c = b.next(), d = {}; !c.done; d = {
            de: void 0
        },
        c = b.next()) {
            d.de = c.value;
            c = void 0;
            var e = (c = a.find(function(f) {
                return function(g) {
                    return g.Ya === f.de
                }
            }(d))) == null ? void 0 : c.g;
            if (e)
                return Q(P.getInstance(), "dmsi", String(d.de)),
                e
        }
        return ""
    }
    ;var XC = function(a) {
        this.g = a.getElementsByTagName("BaseURL")[0].textContent || "";
        this.codecs = a.getAttribute("codecs") || "";
        this.Ya = Number(a.getAttribute("id"))
    };
    var YC = function(a) {
        this.g = [];
        this.j = [];
        a = a.getElementsByTagName("MPD")[0];
        if (!a)
            throw Error("MANIFEST string is empty.");
        if (a.nodeName !== "MPD")
            throw Error("MPD string is not a valid MANIFEST document");
        Q(P.getInstance(), "dmpl", String(a.getElementsByTagName("Period").length));
        a = x(a.getElementsByTagName("Representation"));
        for (var b = a.next(); !b.done; b = a.next())
            b = new XC(b.value),
            /(opus|mp4a)/.test(b.codecs) ? this.g.push(b) : /(vp9|avc1)/.test(b.codecs) && this.j.push(b)
    };
    var ZC = function(a) {
        this.g = a
    }
      , $C = function(a) {
        var b, c, d, e;
        return Ka(function(f) {
            switch (f.g) {
            case 1:
                return f.l = 2,
                za(f, fetch(a.g), 4);
            case 4:
                return b = f.j,
                za(f, b.text(), 5);
            case 5:
                c = f.j;
                var g = new DOMParser;
                var h = td(c);
                g = g.parseFromString(ud(h), "text/xml");
                h = document.createNodeIterator(g, NodeFilter.SHOW_ELEMENT);
                for (var k; k = h.nextNode(); )
                    if (k = k.namespaceURI,
                    k === "http://www.w3.org/1999/xhtml" || k === "http://www.w3.org/2000/svg" || k === "http://www.w3.org/1998/Math/MathML")
                        throw Error("unsafe XML");
                d = g;
                if (d.documentElement.nodeName === "parsererror")
                    return pA("dmpe"),
                    f.return(null);
                e = new YC(d);
                g = f.return;
                h = e.j;
                k = [];
                k = k.length === 0 ? UC : [].concat(pa(k), pa(UC));
                h = WC(h, k);
                k = WC(e.g, VC);
                return g.call(f, h && k ? [h, k] : null);
            case 2:
                return Da(f),
                pA("dmle"),
                f.return(null)
            }
        })
    };
    var aD = {
        Nj: 2E5,
        Lj: 7E4,
        Ia: 3E5,
        Ij: 5E3,
        Xj: 5E3,
        Mj: 6E3
    };
    var bD = RegExp("/itag/(\\d+)/");
    function cD(a) {
        var b = Number(qf(a, "itag"));
        return b ? b : (a = a.match(bD)) && a.length === 2 ? Number(a[1]) : null
    }
    function dD(a) {
        var b = RC[a];
        a = TC[a];
        b ? (b = Ed(b).toLowerCase(),
        b = a ? b + '; codecs="' + Ed(a) + '"' : b) : b = "";
        return b
    }
    function eD(a, b) {
        if (typeof CustomEvent === "function")
            return new CustomEvent(a,{
                detail: b
            });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    }
    ;function fD() {
        return window.ManagedMediaSource || window.MediaSource
    }
    function gD(a) {
        return a !== null && !!window.ManagedMediaSource && a instanceof window.ManagedMediaSource
    }
    function hD(a) {
        return fD() !== void 0 && fD().isTypeSupported(a)
    }
    function iD(a) {
        return [43, 44, 45].includes(a) && ke ? !1 : PC[a] ? (a = dD(a),
        !!a && hD(a)) : !1
    }
    ;var jD = function() {
        N.apply(this, arguments)
    };
    v(jD, N);
    jD.prototype.C = function() {
        return !1
    }
    ;
    jD.prototype.D = function() {
        return -1
    }
    ;
    jD.prototype.G = function() {}
    ;
    var kD = function(a, b) {
        jD.call(this);
        var c = this;
        this.j = b;
        this.A = this.l = this.g = 0;
        this.o = null;
        this.uri = new O(a);
        this.state = 0;
        var d;
        this.H = (d = this.j) == null ? void 0 : d.initialize();
        Qm(this, function() {
            Pm(c.j)
        })
    };
    v(kD, jD);
    kD.prototype.D = function() {
        return this.g
    }
    ;
    kD.prototype.C = function() {
        return this.state === 3
    }
    ;
    kD.prototype.G = function(a) {
        this.state === 1 ? (this.g += a,
        this.state = 2) : this.state === 0 && (this.g += a,
        this.state = 1,
        lD(this))
    }
    ;
    var lD = function(a) {
        Ka(function(b) {
            if (b.g == 1)
                return a.state === 2 && (a.state = 1),
                za(b, mD(a), 4);
            var c = a.A > 3;
            if (c) {
                a.o === null && (a.o = 400);
                var d = eD("media_source_error", {
                    code: a.l > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.l + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.l < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0),
            b.g = 0)
        })
    }
      , mD = function(a) {
        var b;
        return Ka(function(c) {
            switch (c.g) {
            case 1:
                b = a.l + "-" + (a.g - 1);
                Iz(a.uri, "range", b);
                if (!a.j) {
                    c.g = 2;
                    break
                }
                return za(c, a.H, 3);
            case 3:
                return c.return(nD(a));
            case 2:
                return c.l = 4,
                za(c, oD(a), 6);
            case 6:
                Aa(c, 0);
                break;
            case 4:
                Da(c),
                a.A++,
                c.g = 0
            }
        })
    }
      , nD = function(a) {
        var b;
        return Ka(function(c) {
            switch (c.g) {
            case 1:
                return a.j ? za(c, a.j.dc(a.uri), 2) : c.return(Promise.reject());
            case 2:
                if (b = c.j)
                    return b.za && (a.state = 3),
                    pD(a, b.video),
                    c.return();
                c.l = 3;
                return za(c, oD(a), 5);
            case 5:
                Aa(c, 0);
                break;
            case 3:
                Da(c),
                a.A++,
                c.g = 0
            }
        })
    }
      , oD = function(a) {
        var b, c, d, e, f, g, h;
        return Ka(function(k) {
            if (k.g == 1)
                return b = 0,
                c = a.g - a.l,
                za(k, fetch(a.uri.toString()), 2);
            d = k.j;
            if (d.status >= 400)
                return Q(P.getInstance(), "lvlfes", d.status.toString()),
                a.o = d.status,
                k.return(Promise.reject());
            f = (e = d.body) == null ? void 0 : e.getReader();
            if (!f)
                return pA("lvlmr"),
                a.o = d.status,
                k.return(Promise.reject());
            g = [];
            h = function() {
                var l, n, p, r, t, u;
                return Ka(function(w) {
                    if (w.g == 1)
                        return za(w, f.read(), 2);
                    l = w.j;
                    n = l.done;
                    p = l.value;
                    if (n)
                        return r = b < c,
                        qD(a, g, r),
                        w.return();
                    g.push(p);
                    b += (t = p) == null ? void 0 : t.length;
                    pD(a, (u = p) == null ? void 0 : u.buffer);
                    return za(w, h(), 0)
                })
            }
            ;
            return za(k, h(), 0)
        })
    }
      , qD = function(a, b, c) {
        c && (a.state = 3,
        pD(a, new ArrayBuffer(0)));
        var d = new Uint8Array(b.reduce(function(g, h) {
            return g + h.length
        }, 0))
          , e = 0;
        b = x(b);
        for (var f = b.next(); !f.done; f = b.next())
            f = f.value,
            d.set(f, e),
            e += f.length;
        a.j && d.buffer.byteLength > 0 && a.j.yc(d.buffer, a.uri, 0, c)
    }
      , pD = function(a, b) {
        b !== null && (b = b.slice(0),
        a.l += b.byteLength,
        a.dispatchEvent({
            type: "progress",
            zd: b
        }))
    };
    kD.prototype.O = function() {
        var a;
        ((a = this.j) == null ? 0 : a.Wa()) && this.j.close();
        jD.prototype.O.call(this)
    }
    ;
    var sD = function(a) {
        this.uri = a;
        this.g = rD(a)
    }
      , rD = function(a) {
        return new Map(a.j.split("/").reduce(function(b, c, d, e) {
            d % 2 && b.set(e[d - 1], c);
            return b
        }, new Map))
    }
      , tD = function(a) {
        var b, c;
        return (b = a.uri) == null ? void 0 : (c = b.j) == null ? void 0 : c.startsWith("/videoplayback")
    };
    sD.prototype.getId = function() {
        return uD(this, "id")
    }
    ;
    var vD = function(a) {
        a = Jz(a.uri, "range");
        if (!a)
            return null;
        a = a.split("-")[0];
        return !a || isNaN(Number(a)) ? null : Number(a)
    }
      , uD = function(a, b) {
        var c = Jz(a.uri, b);
        return c ? c : (a = a.g.get(b)) ? a : null
    };
    var wD = ["doubleclick.net"];
    function xD() {
        if (Ld() || D("iPad") || D("iPod"))
            var a = !1;
        else if (Kd()) {
            if (Rz === void 0) {
                a: {
                    if (Pz === void 0) {
                        if (Tz) {
                            a = Sc(Sz(), "Safari");
                            var b = (new O(window.location.href)).l.Jb("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && b.lastIndexOf("afma-", 0) == 0) {
                                    var c = b.lastIndexOf("v");
                                    if (c > -1 && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || b !== "0.0.0") {
                                a = Pz = !0;
                                break a
                            }
                        }
                        Pz = !1
                    }
                    a = Pz
                }
                a || (Qz === void 0 && (Qz = Sc(Sz(), "afma-sdk-a") ? !0 : !1),
                a = Qz);
                Rz = a
            }
            a = Rz ? !0 : kf() ? !1 : yD()
        } else
            a = !1;
        return a
    }
    function yD() {
        var a = !1
          , b = (new O(window.location.href)).g;
        wD.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    }
    ;var zD, CD = function(a, b, c) {
        if (typeof a === "number")
            var d = {
                name: AD(a)
            };
        else
            d = a,
            a = BD(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        nb.call(this, b)
    };
    mb(CD, nb);
    CD.prototype.getName = function() {
        return this.g.name || ""
    }
    ;
    var DD = {
        eg: 1,
        Ti: 2,
        NOT_FOUND_ERR: 3,
        Kf: 4,
        Nf: 5,
        Ui: 6,
        dg: 7,
        ABORT_ERR: 8,
        ag: 9,
        jj: 10,
        TIMEOUT_ERR: 11,
        Zf: 12,
        INVALID_ACCESS_ERR: 13,
        INVALID_STATE_ERR: 14
    }
      , ED = (y.g || y.j || DD).eg
      , FD = (y.g || y.j || DD).NOT_FOUND_ERR
      , GD = (y.g || y.j || DD).Kf
      , HD = (y.g || y.j || DD).Nf
      , ID = (y.g || y.j || DD).dg
      , JD = (y.g || y.j || DD).ABORT_ERR
      , KD = (y.g || y.j || DD).ag
      , LD = (y.g || y.j || DD).TIMEOUT_ERR
      , MD = (y.g || y.j || DD).Zf
      , ND = (y.DOMException || DD).INVALID_ACCESS_ERR
      , OD = (y.DOMException || DD).INVALID_STATE_ERR
      , BD = function(a) {
        switch (a) {
        case "UnknownError":
            return ED;
        case "NotFoundError":
            return FD;
        case "ConstraintError":
            return GD;
        case "DataError":
            return HD;
        case "TransactionInactiveError":
            return ID;
        case "AbortError":
            return JD;
        case "ReadOnlyError":
            return KD;
        case "TimeoutError":
            return LD;
        case "QuotaExceededError":
            return MD;
        case "InvalidAccessError":
            return ND;
        case "InvalidStateError":
            return OD;
        default:
            return ED
        }
    }
      , AD = function(a) {
        switch (a) {
        case ED:
            return "UnknownError";
        case FD:
            return "NotFoundError";
        case GD:
            return "ConstraintError";
        case HD:
            return "DataError";
        case ID:
            return "TransactionInactiveError";
        case JD:
            return "AbortError";
        case KD:
            return "ReadOnlyError";
        case LD:
            return "TimeoutError";
        case MD:
            return "QuotaExceededError";
        case ND:
            return "InvalidAccessError";
        case OD:
            return "InvalidStateError";
        default:
            return "UnknownError"
        }
    }
      , PD = function(a, b) {
        return "error"in a ? new CD(a.error,b) : new CD({
            name: "UnknownError"
        },b)
    }
      , QD = function(a, b) {
        return "name"in a ? new CD(a,b + ": " + a.message) : new CD({
            name: "UnknownError"
        },b)
    };
    function RD(a) {
        this.g = a
    }
    var SD = y.IDBKeyRange || y.webkitIDBKeyRange;
    /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
    var TD = function() {
        this.B = [];
        this.o = this.l = !1;
        this.j = void 0;
        this.L = this.G = this.C = !1;
        this.A = 0;
        this.g = null;
        this.I = 0
    };
    TD.prototype.cancel = function(a) {
        if (this.l)
            this.j instanceof TD && this.j.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.I--,
                b.I <= 0 && b.cancel())
            }
            this.L = !0;
            this.l || UD(this, new VD(this))
        }
    }
    ;
    TD.prototype.D = function(a, b) {
        this.C = !1;
        WD(this, a, b)
    }
    ;
    var WD = function(a, b, c) {
        a.l = !0;
        a.j = c;
        a.o = !b;
        XD(a)
    }
      , ZD = function(a) {
        if (a.l) {
            if (!a.L)
                throw new YD(a);
            a.L = !1
        }
    };
    TD.prototype.Ga = function(a) {
        ZD(this);
        WD(this, !0, a)
    }
    ;
    var UD = function(a, b) {
        ZD(a);
        WD(a, !1, b)
    }
      , aE = function(a, b) {
        return $D(a, b, null)
    }
      , $D = function(a, b, c, d) {
        var e = a.l;
        e || (b === c ? b = c = Sr(b) : (b = Sr(b),
        c = Sr(c)));
        a.B.push([b, c, d]);
        e && XD(a);
        return a
    };
    TD.prototype.then = function(a, b, c) {
        var d, e, f = new fs(function(g, h) {
            e = g;
            d = h
        }
        );
        $D(this, e, function(g) {
            g instanceof VD ? f.cancel() : d(g);
            return bE
        }, this);
        return f.then(a, b, c)
    }
    ;
    TD.prototype.$goog_Thenable = !0;
    var cE = function(a) {
        return wb(a.B, function(b) {
            return typeof b[1] === "function"
        })
    }
      , bE = {}
      , XD = function(a) {
        if (a.A && a.l && cE(a)) {
            var b = a.A
              , c = dE[b];
            c && (y.clearTimeout(c.g),
            delete dE[b]);
            a.A = 0
        }
        a.g && (a.g.I--,
        delete a.g);
        b = a.j;
        for (var d = c = !1; a.B.length && !a.C; ) {
            var e = a.B.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.o ? g : f)
                try {
                    var h = f.call(e || null, b);
                    h === bE && (h = void 0);
                    h !== void 0 && (a.o = a.o && (h == b || h instanceof Error),
                    a.j = b = h);
                    if (ds(b) || typeof y.Promise === "function" && b instanceof y.Promise)
                        d = !0,
                        a.C = !0
                } catch (k) {
                    b = k,
                    a.o = !0,
                    cE(a) || (c = !0)
                }
        }
        a.j = b;
        d && (h = eb(a.D, a, !0),
        d = eb(a.D, a, !1),
        b instanceof TD ? ($D(b, h, d),
        b.G = !0) : b.then(h, d));
        c && (b = new eE(b),
        dE[b.g] = b,
        a.A = b.g)
    }
      , YD = function() {
        nb.call(this)
    };
    mb(YD, nb);
    YD.prototype.message = "Deferred has already fired";
    YD.prototype.name = "AlreadyCalledError";
    var VD = function() {
        nb.call(this)
    };
    mb(VD, nb);
    VD.prototype.message = "Deferred was canceled";
    VD.prototype.name = "CanceledError";
    var eE = function(a) {
        this.g = y.setTimeout(eb(this.l, this), 0);
        this.j = a
    };
    eE.prototype.l = function() {
        delete dE[this.g];
        throw this.j;
    }
    ;
    var dE = {};
    var fE = function() {
        N.call(this)
    };
    mb(fE, N);
    fE.prototype.g = null;
    fE.prototype.next = function(a) {
        if (a)
            this.g["continue"](a);
        else
            this.g["continue"]()
    }
    ;
    fE.prototype.remove = function() {
        var a = new TD;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return UD(a, QD(c, "deleting via cursor")),
            a
        }
        b.onsuccess = function() {
            a.Ga()
        }
        ;
        b.onerror = function(c) {
            UD(a, PD(c.target, "deleting via cursor"))
        }
        ;
        return a
    }
    ;
    fE.prototype.getValue = function() {
        return this.g.value
    }
    ;
    var gE = function(a, b) {
        var c = new fE;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.dispose(),
            QD(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        }
        ;
        d.onerror = function() {
            c.dispatchEvent("e")
        }
        ;
        return c
    };
    function hE(a) {
        this.g = a
    }
    hE.prototype.getName = function() {
        return this.g.name
    }
    ;
    var iE = function(a, b, c) {
        var d = new TD;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + yd(c),
            UD(d, QD(f, b)),
            d
        }
        e.onsuccess = function(f) {
            d.Ga(f.target.result)
        }
        ;
        e.onerror = function(f) {
            b += " with key " + yd(c);
            UD(d, PD(f.target, b))
        }
        ;
        return d
    };
    hE.prototype.get = function(a) {
        return iE(this, "getting from index " + this.getName(), a)
    }
    ;
    var jE = function(a, b) {
        return gE(a.g, b)
    };
    function kE(a) {
        this.g = a
    }
    kE.prototype.getName = function() {
        return this.g.name
    }
    ;
    var lE = function(a, b, c, d, e) {
        var f = new TD;
        try {
            var g = e ? a.g[b](d, e) : a.g[b](d)
        } catch (h) {
            return c += yd(d),
            e && (c += ", with key " + yd(e)),
            UD(f, QD(h, c)),
            f
        }
        g.onsuccess = function(h) {
            f.Ga(h.target.result)
        }
        ;
        g.onerror = function(h) {
            c += yd(d);
            e && (c += ", with key " + yd(e));
            UD(f, PD(h.target, c))
        }
        ;
        return f
    }
      , mE = function(a, b) {
        return lE(a, "put", "putting into " + a.getName() + " with value", b)
    };
    kE.prototype.add = function(a, b) {
        return lE(this, "add", "adding into " + this.getName() + " with value ", a, b)
    }
    ;
    kE.prototype.remove = function(a) {
        var b = new TD;
        try {
            var c = this.g["delete"](a instanceof RD ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + yd(a),
            UD(b, QD(e, c)),
            b
        }
        c.onsuccess = function() {
            b.Ga()
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + yd(a);
            UD(b, PD(e.target, f))
        }
        ;
        return b
    }
    ;
    kE.prototype.get = function(a) {
        var b = new TD;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + yd(a),
            UD(b, QD(e, c)),
            b
        }
        c.onsuccess = function(e) {
            b.Ga(e.target.result)
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + yd(a);
            UD(b, PD(e.target, f))
        }
        ;
        return b
    }
    ;
    kE.prototype.clear = function() {
        var a = "clearing store " + this.getName()
          , b = new TD;
        try {
            var c = this.g.clear()
        } catch (d) {
            return UD(b, QD(d, a)),
            b
        }
        c.onsuccess = function() {
            b.Ga()
        }
        ;
        c.onerror = function(d) {
            UD(b, PD(d.target, a))
        }
        ;
        return b
    }
    ;
    var nE = function(a) {
        try {
            return new hE(a.g.index("timestamp"))
        } catch (b) {
            throw QD(b, "getting index timestamp");
        }
    };
    var oE = function(a, b) {
        N.call(this);
        this.g = a;
        this.l = b;
        this.j = new bC(this);
        this.j.listen(this.g, "complete", eb(this.dispatchEvent, this, "complete"));
        this.j.listen(this.g, "abort", eb(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Pf)
    };
    mb(oE, N);
    m = oE.prototype;
    m.Pf = function(a) {
        a.target instanceof CD ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: PD(a.target, "in transaction")
        })
    }
    ;
    m.objectStore = function(a) {
        try {
            return new kE(this.g.objectStore(a))
        } catch (b) {
            throw QD(b, "getting object store " + a);
        }
    }
    ;
    m.commit = function(a) {
        if (this.g.commit || !a)
            try {
                this.g.commit()
            } catch (b) {
                throw QD(b, "cannot commit the transaction");
            }
    }
    ;
    m.wait = function() {
        var a = new TD;
        Gr(this, "complete", eb(a.Ga, a));
        var b = Gr(this, "abort", function() {
            Pr(c);
            UD(a, new CD(JD,"waiting for transaction to complete"))
        });
        var c = Gr(this, "error", function(e) {
            Pr(b);
            UD(a, e.target)
        });
        var d = this.l;
        return aE(a, function() {
            return d
        })
    }
    ;
    m.abort = function() {
        this.g.abort()
    }
    ;
    m.O = function() {
        oE.Qa.O.call(this);
        this.j.dispose()
    }
    ;
    function pE(a) {
        N.call(this);
        this.g = a;
        this.j = new bC(this);
        this.j.listen(this.g, "abort", eb(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Qf);
        this.j.listen(this.g, "versionchange", this.vg);
        this.j.listen(this.g, "close", eb(this.dispatchEvent, this, "close"))
    }
    mb(pE, N);
    m = pE.prototype;
    m.Zd = !0;
    m.Qf = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    }
    ;
    m.vg = function(a) {
        this.dispatchEvent(new qE(a.oldVersion,a.newVersion))
    }
    ;
    m.close = function() {
        this.Zd && (this.g.close(),
        this.Zd = !1)
    }
    ;
    m.Wa = function() {
        return this.Zd
    }
    ;
    m.getName = function() {
        return this.g.name
    }
    ;
    m.getVersion = function() {
        return Number(this.g.version)
    }
    ;
    var rE = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new oE(c,a)
        } catch (d) {
            throw QD(d, "creating transaction");
        }
    };
    pE.prototype.O = function() {
        pE.Qa.O.call(this);
        this.j.dispose()
    }
    ;
    var qE = function(a, b) {
        tr.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    mb(qE, tr);
    var sE = function(a) {
        var b = new TD;
        zD == void 0 && (zD = y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.moz_indexedDB);
        var c = zD.open("IndexedDbVideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new pE(d.target.result);
            b.Ga(d)
        }
        ;
        c.onerror = function(d) {
            UD(b, PD(d.target, "opening database IndexedDbVideoChunkPersistentStorage"))
        }
        ;
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new pE(d.target.result);
                a(new qE(d.oldVersion,d.newVersion), e, new oE(d.target.transaction,e))
            }
        }
        ;
        c.onblocked = function() {}
        ;
        return b
    };
    var tE = function() {
        N.apply(this, arguments);
        this.g = null
    };
    v(tE, N);
    tE.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(sE(this.j)).then(function(b) {
            a.g = b
        }, function(b) {
            Q(P.getInstance(), "codf", b.message)
        })
    }
    ;
    tE.prototype.Wa = function() {
        return this.g !== null && this.g.Wa()
    }
    ;
    tE.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            uE(a, b)
        }
        )).then(function() {
            return vE()
        }).then(function() {
            a.g.close()
        })
    }
    ;
    var vE = function() {
        var a;
        return ((a = navigator.storage) == null ? 0 : a.estimate) ? navigator.storage.estimate().then(function(b) {
            Q(P.getInstance(), "csue", String(b.usage))
        }) : Promise.resolve(void 0)
    };
    tE.prototype.dc = function(a) {
        return (a = wE(a, 0)) ? xE(this, yE(a), a.Rc) : Promise.resolve(null)
    }
    ;
    tE.prototype.yc = function(a, b, c, d) {
        (b = wE(b, c)) ? (c = b.startIndex,
        zE(this, {
            Aj: yE(b),
            startIndex: c,
            Hc: c + a.byteLength - 1,
            Rc: b.Rc,
            timestamp: new Date(Date.now()),
            za: d,
            Ya: b.Ya,
            video: a
        })) : Promise.resolve(void 0)
    }
    ;
    tE.prototype.j = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk"))
            try {
                b.g.deleteObjectStore("MediaSourceVideoChunk")
            } catch (d) {
                throw QD(d, "deleting object store MediaSourceVideoChunk");
            }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new kE(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw QD(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw QD(d, "creating new index timestamp with key path timestamp");
        }
    }
    ;
    var uE = function(a, b) {
        var c = new Date(Date.now());
        c.setDate(c.getDate() - 30);
        c = new RD(SD.upperBound(c, void 0));
        var d = jE(nE(rE(a.g).objectStore("MediaSourceVideoChunk")), c)
          , e = d.listen("n", function() {
            d.remove();
            d.next()
        });
        Gr(d, "c", function() {
            Pr(e);
            b()
        })
    }
      , wE = function(a, b) {
        var c = new sD(a);
        a = c.getId();
        var d = uD(c, "itag")
          , e = uD(c, "source")
          , f = uD(c, "lmt");
        c = vD(c);
        var g = [];
        a ? d ? e ? f ? c === null && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
        return g.length > 0 ? (Q(P.getInstance(), "civp", g.join("-")),
        null) : {
            videoId: a,
            Ya: d,
            source: e,
            Rc: f,
            startIndex: c + b
        }
    }
      , yE = function(a) {
        for (var b = [a.videoId, a.source, a.startIndex].join(), c = 0, d = 0; d < b.length; d++)
            c = Math.imul(31, c) + b.charCodeAt(d) | 0;
        return c.toString() + "," + a.Ya
    }
      , xE = function(a, b, c) {
        var d = rE(a.g).objectStore("MediaSourceVideoChunk");
        return Promise.resolve(d.get(b)).then(function(e) {
            if (!e)
                return Q(P.getInstance(), "cenf", "1"),
                null;
            if (e.Rc !== c)
                return Q(P.getInstance(), "cdl", "1"),
                d.remove(b).then(null, function(f) {
                    Q(P.getInstance(), "crdlvf", f.message)
                }),
                null;
            Q(P.getInstance(), "cefml", "1");
            return {
                Ya: e.Ya,
                Hc: e.Hc,
                za: e.za,
                video: e.video
            }
        }, function(e) {
            Q(P.getInstance(), "cgvf", e.message);
            return null
        })
    }
      , zE = function(a, b) {
        a = rE(a.g).objectStore("MediaSourceVideoChunk");
        Promise.resolve(mE(a, b)).then(function() {
            Q(P.getInstance(), "cavs", "1")
        }, function(c) {
            Q(P.getInstance(), "cavf", c.message)
        })
    };
    var AE = function(a) {
        jD.call(this);
        var b = this;
        this.H = this.j = this.g = 0;
        this.o = this.K = null;
        this.uri = new O(a);
        this.state = 0;
        this.l = (this.A = xD() && !vA(this.uri)) ? pw(tE) : null;
        Qm(this, function() {
            Pm(b.l)
        });
        this.K = this.A ? this.l.initialize() : null
    };
    v(AE, jD);
    AE.prototype.D = function() {
        return this.g
    }
    ;
    AE.prototype.C = function() {
        return this.state === 3
    }
    ;
    AE.prototype.G = function(a) {
        this.state === 1 ? (this.g += a,
        this.state = 2) : this.state === 0 && (this.g += a,
        this.state = 1,
        BE(this))
    }
    ;
    var BE = function(a) {
        Ka(function(b) {
            if (b.g == 1)
                return a.state === 2 && (a.state = 1),
                za(b, CE(a), 4);
            var c = a.H > 3;
            if (c && a.o !== null) {
                var d = eD("media_source_error", {
                    code: a.j > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.j + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.j < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0),
            b.g = 0)
        })
    }
      , CE = function(a) {
        var b;
        return Ka(function(c) {
            switch (c.g) {
            case 1:
                b = a.j + "-" + (a.g - 1);
                Iz(a.uri, "range", b);
                if (!a.A) {
                    c.g = 2;
                    break
                }
                return za(c, a.K, 3);
            case 3:
                return c.return(DE(a));
            case 2:
                return c.l = 4,
                za(c, EE(a), 6);
            case 6:
                Aa(c, 0);
                break;
            case 4:
                Da(c),
                FE(a),
                c.g = 0
            }
        })
    }
      , DE = function(a) {
        var b;
        return Ka(function(c) {
            switch (c.g) {
            case 1:
                return za(c, a.l.dc(a.uri), 2);
            case 2:
                if (b = c.j) {
                    b.za && (a.state = 3);
                    GE(a, b.video, 0);
                    c.g = 0;
                    break
                }
                c.l = 4;
                return za(c, EE(a), 6);
            case 6:
                Aa(c, 0);
                break;
            case 4:
                Da(c),
                FE(a),
                c.g = 0
            }
        })
    }
      , FE = function(a) {
        var b = new sD(a.uri);
        if (OA(BB) && tD(b)) {
            a: if (tD(b)) {
                var c = uD(b, "mn");
                var d = c ? c.split(",") : null;
                var e = uD(b, "fvip");
                c = b.uri.G();
                if (d && e) {
                    var f = (Number(uD(b, "fallback_count")) || 0) + 1;
                    if (d = d[f]) {
                        c.g = "r" + e + "---" + d + ".googlevideo.com";
                        Iz(c, "fallback_count", f);
                        b = c;
                        break a
                    }
                }
                var g, h;
                e = Number(((h = (g = Jz(c, "cmo")) == null ? void 0 : g.split("=")) != null ? h : [])[1]) || 0;
                b.uri.g.match(/^r{1,2}(\d+)---(.+)\.googlevideo.com$/) && (c.g = "redirector.googlevideo.com");
                Iz(c, "cmo", "pf=" + (e + 1));
                b = c
            } else
                b = b.uri;
            a.uri = b;
            a.dispatchEvent(eD("bandaid_fallback_count"))
        } else
            OA(FB) && vA(a.uri) && (a.uri = new O(wA(a.uri)));
        a.H++
    }
      , EE = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest
              , e = 0
              , f = a.g - a.j;
            d.addEventListener("load", function() {
                pA("lvlcl");
                if (d.status >= 400)
                    Q(P.getInstance(), "lvlxes", d.status.toString()),
                    a.o = d.status,
                    c();
                else {
                    var g = d.response;
                    g.byteLength < f && (a.state = 3);
                    var h = GE(a, g, e);
                    e += h;
                    a.A && g.byteLength > 0 && a.l.yc(g, a.uri, 0, g.byteLength < f);
                    b()
                }
            });
            d.addEventListener("timeout", function() {
                pA("lvlct");
                a.o = d.status;
                c()
            });
            d.addEventListener("error", function() {
                pA("lvlce");
                a.o = d.status;
                c()
            });
            d.addEventListener("progress", function() {
                if (d.status >= 400)
                    a.o = d.status;
                else {
                    var g = GE(a, d.response, e);
                    e += g
                }
            });
            d.responseType = "arraybuffer";
            d.open("get", a.uri.toString());
            d.send(null)
        }
        )
    }
      , GE = function(a, b, c) {
        if (b === null)
            return 0;
        b = b.slice(c);
        a.j += b.byteLength;
        a.dispatchEvent({
            type: "progress",
            zd: b
        });
        return b.byteLength
    };
    AE.prototype.O = function() {
        this.A && this.l.Wa() && this.l.close();
        jD.prototype.O.call(this)
    }
    ;
    var HE = function() {};
    HE.prototype.bh = function(a, b, c) {
        return c === 0 ? 1E6 : b - a < 5E3 ? 3E5 : 0
    }
    ;
    var JE = function(a, b) {
        var c = this;
        this.g = a;
        this.index = b;
        this.j = [];
        this.g || pA("msms_sbf" + this.index);
        this.g.addEventListener("updateend", function() {
            IE(c)
        });
        this.g.addEventListener("error", function() {
            pA("msms_sbe" + c.index)
        })
    }
      , IE = function(a) {
        if (a.j.length > 0 && !a.g.updating) {
            var b = a.j.shift();
            a.g.appendBuffer(b)
        }
    };
    var KE = function() {
        this.g = this.cache = null
    };
    m = KE.prototype;
    m.initialize = function() {
        var a = this;
        return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b) {
            a.cache = b
        }, function(b) {
            Q(P.getInstance(), "codf", b.message)
        })
    }
    ;
    m.Wa = function() {
        return this.cache !== null
    }
    ;
    m.close = function() {
        return Promise.resolve()
    }
    ;
    m.dc = function(a) {
        var b = this;
        a = LE(this, a);
        return this.Wa() && a ? this.cache.match(a).then(function(c) {
            if (!c)
                return Q(P.getInstance(), "cenf", "1"),
                Promise.resolve(null);
            Q(P.getInstance(), "cef", "1");
            return c.arrayBuffer().then(function(d) {
                var e = vD(b.g), f;
                (f = Jz(b.g.uri, "range")) ? (f = f.split("-")[1],
                f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
                e = e + d.byteLength - 1;
                f = f > e;
                return {
                    Ya: uD(b.g, "itag"),
                    Hc: e,
                    za: f,
                    video: d
                }
            })
        }, function(c) {
            Q(P.getInstance(), "cgvf", c.message);
            return Promise.resolve(null)
        }) : (Q(P.getInstance(), "cgvf", "1"),
        Promise.resolve(null))
    }
    ;
    m.yc = function(a, b) {
        b = LE(this, b);
        a = new Response(a);
        this.Wa() && b ? this.cache.put(b, a).then(function() {
            Q(P.getInstance(), "cavs", "1")
        }, function(c) {
            Q(P.getInstance(), "cavf", c.message)
        }) : (Q(P.getInstance(), "cavf", "1"),
        Promise.resolve())
    }
    ;
    var LE = function(a, b) {
        a.g = new sD(b);
        b = a.g.getId();
        var c = uD(a.g, "itag")
          , d = uD(a.g, "source")
          , e = uD(a.g, "lmt");
        a = uD(a.g, "range");
        if (b && c && d && a)
            return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
        Q(P.getInstance(), "civp", "1");
        return null
    };
    var OE = function(a) {
        N.call(this);
        var b = this;
        this.l = a;
        this.j = [];
        this.A = null;
        this.C = 0;
        this.M = !1;
        this.G = 0;
        this.D = [];
        if (OA(sB)) {
            var c = null;
            xD() && (OA(uB) ? c = pw(KE) : c = pw(tE));
            this.o = this.l.map(function(d) {
                return pw(kD, d.url, vA(d.url) ? null : c)
            })
        } else
            this.o = this.l.map(function(d) {
                return pw(AE, d.url)
            });
        this.g = pw(fD());
        this.H = function() {
            ME(b)
        }
        ;
        this.g.addEventListener("sourceopen", this.H);
        this.K = NE(this)
    };
    v(OE, N);
    var NE = function(a) {
        for (var b = [], c = 0; c < a.l.length; ++c)
            b.push(new HE);
        return b
    }
      , ME = function(a) {
        pA("msms_oso");
        for (var b = {
            Ca: 0
        }; b.Ca < a.l.length; b = {
            ie: void 0,
            Sc: void 0,
            tb: void 0,
            Ca: b.Ca,
            Tc: void 0
        },
        ++b.Ca) {
            var c = a.l[b.Ca];
            Q(P.getInstance(), "msms_mime" + b.Ca, c.mimeType);
            Q(P.getInstance(), "msms_cs" + b.Ca, c.Ia.toString());
            OA(tB) ? (b.ie = new JE(a.g.addSourceBuffer(c.mimeType),b.Ca),
            b.Sc = a.o[b.Ca],
            b.Sc.listen("progress", function(d) {
                return function(e) {
                    var f = d.ie
                      , g = d.Sc;
                    e = e.zd;
                    e.byteLength !== 0 && (f.j.push(e),
                    IE(f));
                    g.C() && (a.C++,
                    a.C === a.j.length && PE(a))
                }
            }(b)),
            b.Sc.listen("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.j.push(b.ie.g)) : (b.tb = a.g.addSourceBuffer(c.mimeType),
            b.tb ? (b.Tc = a.o[b.Ca],
            OA(sB) && b.tb.addEventListener("updateend", function(d) {
                return function() {
                    if (a.D.length > 0 && !d.tb.updating) {
                        var e = a.D.shift();
                        d.tb.appendBuffer(e)
                    }
                }
            }(b)),
            b.tb.addEventListener("error", function(d) {
                return function() {
                    pA("msms_sbe" + d.Ca)
                }
            }(b)),
            b.Tc.listen("progress", function(d) {
                return function(e) {
                    var f = d.tb
                      , g = d.Tc;
                    e = e.zd;
                    e.byteLength !== 0 && (OA(sB) ? f.updating ? a.D.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
                    g.C() && (a.C++,
                    a.C === a.j.length && PE(a))
                }
            }(b)),
            b.Tc.listen("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.j.push(b.tb)) : pA("msms_sbf" + b.Ca))
        }
        Q(P.getInstance(), "msms_ns", a.j.length.toString());
        a.M = !0;
        QE(a)
    }
      , PE = function(a) {
        Promise.all(a.j.map(function(b) {
            return new Promise(function(c) {
                b.updating ? b.addEventListener("updateend", function() {
                    c()
                }) : c()
            }
            )
        })).then(function() {
            a.g.endOfStream()
        })
    }
      , QE = function(a) {
        if (a.M)
            for (var b = 0; b < a.l.length; ++b) {
                var c = a.o[b]
                  , d = a.j[b];
                d = d.buffered.length === 0 ? 0 : d.buffered.end(0) * 1E3;
                d = a.K[b].bh(a.G, d, c.D());
                d !== 0 && c.G(d)
            }
    }
      , RE = function(a) {
        a.A = qd(a.g).toString();
        return a.A
    };
    OE.prototype.O = function() {
        this.A && window.URL.revokeObjectURL(this.A);
        for (var a = x(this.o), b = a.next(); !b.done; b = a.next())
            b.value.dispose();
        this.g.removeEventListener("sourceopen", this.H);
        N.prototype.O.call(this)
    }
    ;
    OE.prototype.nd = function(a) {
        this.K.filter(function() {
            return !1
        }).map(function(b) {
            return b
        }).forEach(function(b) {
            b.g = Object.assign({}, aD, b.g, a)
        })
    }
    ;
    var SE = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel")
      , TE = RegExp("outstream.min.js")
      , UE = RegExp("outstream.min.css")
      , VE = RegExp("fonts.gstatic.com")
      , WE = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback")
      , XE = RegExp("custom.elements.min.js");
    function YE(a, b) {
        var c = 0
          , d = 0
          , e = 0
          , f = 0
          , g = 0
          , h = 0
          , k = 0
          , l = !1
          , n = !1;
        if (typeof Ta("performance.getEntriesByType", y) === "function" && "transferSize"in y.PerformanceResourceTiming.prototype) {
            var p = y.performance.getEntriesByType("resource");
            p = x(p);
            for (var r = p.next(); !r.done; r = p.next())
                r = r.value,
                SE.test(r.name) || (f += 1,
                r.transferSize ? (c += r.transferSize,
                r.encodedBodySize && r.transferSize < r.encodedBodySize && (h += 1,
                e += r.encodedBodySize,
                TE.test(r.name) && (l = !0),
                UE.test(r.name) && (n = !0)),
                WE.test(r.name) && (d += r.transferSize)) : r.transferSize === 0 && r.encodedBodySize === 0 ? XE.test(r.name) ? c += 6686 : VE.test(r.name) || (k += 1,
                oA(P.getInstance(), {
                    event_name: "unmeasurable_asset",
                    resource_name: r.name,
                    encoded_body_size: r.encodedBodySize,
                    transfer_size: r.transferSize
                })) : (g += 1,
                e += r.encodedBodySize,
                TE.test(r.name) && (l = !0),
                UE.test(r.name) && (n = !0)));
            p = 0;
            if (a.duration) {
                for (r = 0; r < a.buffered.length; r++)
                    p += a.buffered.end(r) - a.buffered.start(r);
                p = Math.min(p, a.duration)
            }
            oA(P.getInstance(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: l,
                css_cached: n,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: p.toFixed(2)
            })
        } else
            Q(P.getInstance(), "error", "reporting_timing_not_supported")
    }
    ;var ZE = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.Ia = c;
        this.g = d === void 0 ? null : d
    };
    function $E(a) {
        var b = P.getInstance()
          , c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime,
        Q(b, "vqdf", String(c.droppedVideoFrames)),
        Q(b, "vqtf", String(c.totalVideoFrames)),
        Q(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : Q(b, "vqu", "1")
    }
    ;function aF(a) {
        this.g = a
    }
    aF.prototype.toString = function() {
        return this.g
    }
    ;
    var bF = new aF("video_mute")
      , cF = new aF("video_caption_visibility");
    function dF(a) {
        M.call(this);
        this.A = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.j = {};
        this.D = !!a
    }
    mb(dF, M);
    dF.prototype.subscribe = function(a, b, c) {
        var d = this.j[a];
        d || (d = this.j[a] = []);
        var e = this.A;
        this.g[e] = a;
        this.g[e + 1] = b;
        this.g[e + 2] = c;
        this.A = e + 3;
        d.push(e);
        return e
    }
    ;
    var eF = function(a, b, c) {
        var d = a.j[cF.toString()];
        if (d) {
            var e = a.g;
            (d = d.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && a.B(d)
        }
    };
    dF.prototype.B = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.j[b];
            this.o != 0 ? (this.l.push(a),
            this.g[a + 1] = function() {}
            ) : (c && Db(c, a),
            delete this.g[a],
            delete this.g[a + 1],
            delete this.g[a + 2])
        }
        return !!b
    }
    ;
    dF.prototype.C = function(a, b) {
        var c = this.j[a];
        if (c) {
            var d = Array(arguments.length - 1), e = arguments.length, f;
            for (f = 1; f < e; f++)
                d[f - 1] = arguments[f];
            if (this.D)
                for (f = 0; f < c.length; f++)
                    e = c[f],
                    fF(this.g[e + 1], this.g[e + 2], d);
            else {
                this.o++;
                try {
                    for (f = 0,
                    e = c.length; f < e && !this.Da(); f++) {
                        var g = c[f];
                        this.g[g + 1].apply(this.g[g + 2], d)
                    }
                } finally {
                    if (this.o--,
                    this.l.length > 0 && this.o == 0)
                        for (; c = this.l.pop(); )
                            this.B(c)
                }
            }
        }
    }
    ;
    var fF = function(a, b, c) {
        bs(function() {
            a.apply(b, c)
        })
    };
    dF.prototype.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.B, this),
            delete this.j[a])
        } else
            this.g.length = 0,
            this.j = {}
    }
    ;
    dF.prototype.O = function() {
        dF.Qa.O.call(this);
        this.clear();
        this.l.length = 0
    }
    ;
    function gF(a) {
        M.call(this);
        this.g = new dF(a);
        Rm(this, this.g)
    }
    mb(gF, M);
    gF.prototype.subscribe = function(a, b, c) {
        return this.g.subscribe(a.toString(), b, c)
    }
    ;
    gF.prototype.clear = function(a) {
        this.g.clear(a !== void 0 ? a.toString() : void 0)
    }
    ;
    var hF = function(a) {
        a = a === void 0 ? null : a;
        M.call(this);
        this.g = new bC(this);
        Rm(this, this.g);
        this.Cb = a
    };
    v(hF, M);
    var iF = function(a, b, c) {
        a.Cb && (a.Cb.subscribe(cF, b, c),
        Qm(a, function() {
            eF(a.Cb.g, b, c)
        }))
    };
    var jF = function(a, b) {
        hF.call(this, b);
        iF(this, function(c) {
            c ? a.g.mode = "showing" : a.ob()
        }, this)
    };
    v(jF, hF);
    var kF = function() {
        N.call(this);
        this.j = new bC(this);
        Rm(this, this.j)
    };
    v(kF, N);
    var mF = function(a, b, c) {
        c = c === void 0 ? !0 : c;
        kF.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = Ce("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        lF(this);
        c ? this.g.mode = "showing" : this.ob()
    };
    v(mF, kF);
    var lF = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    mF.prototype.ob = function() {
        this.g.mode = "hidden"
    }
    ;
    function nF(a, b) {
        if (typeof ReportingObserver !== "undefined") {
            var c = function(e) {
                e = x(e);
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    a(f) && b(f)
            }
              , d = new ReportingObserver(c,{
                buffered: !0
            });
            y.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }
    function oF(a) {
        a = a === void 0 ? null : a;
        nF(function(b) {
            return b.body && b.body.id === "HeavyAdIntervention"
        }, function(b) {
            var c = b.body.message
              , d = P.getInstance();
            Q(d, "ham", c);
            c.includes("CPU") ? Q(d, "hacpu", "true") : c.includes("network") && Q(d, "habytes", "true");
            a && a(b)
        })
    }
    ;var pF = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" ")
      , qF = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disablePictureInPicture disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play requestPictureInPicture setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" ")
      , rF = {
        childList: !0
    }
      , sF = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}
    .toString())
      , tF = HTMLElement;
    sF && (tF = function() {
        var a = Object.getPrototypeOf(this).constructor;
        return y.Reflect.construct(HTMLElement, [], a)
    }
    ,
    Object.setPrototypeOf(tF, HTMLElement),
    Object.setPrototypeOf(tF.prototype, HTMLElement.prototype));
    var uF = function(a) {
        if (a !== null) {
            a = x(a);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value,
                b.nodeName === "TRACK".toString())
                    return b
        }
        return null
    }
      , vF = function(a, b) {
        this.code = a;
        this.message = b === void 0 ? "" : b
    }
      , wF = function(a) {
        vF.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, a === void 0 ? "" : a)
    };
    v(wF, vF);
    var AF = function(a, b) {
        b = b === void 0 ? !1 : b;
        var c = tF.call(this) || this;
        Q(P.getInstance(), "ulv", "1");
        c.Hh = b;
        c.oa = null;
        c.hf = null;
        c.He = null;
        c.T = Ce("VIDEO");
        xF(c);
        c.Cb = a || new gF;
        yF(c);
        c.Dc = null;
        zF(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.T);
        oF(function() {
            Q(P.getInstance(), "has", c.src || c.La);
            Q(P.getInstance(), "hat", String(c.T.currentTime))
        });
        c.kd = !1;
        c.mf = !1;
        c.lc = null;
        c.td = null;
        c.Ih = !1;
        c.re = !1;
        c.zg = null;
        c.Yb = null;
        return c
    };
    v(AF, tF);
    var BF = function(a) {
        a.T.load();
        OA(CB) && a.T.dispatchEvent(new Event("canplaythrough"))
    };
    AF.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
        case "src":
            CF(this, c);
            break;
        case "demuxedaudiosrc":
        case "demuxedvideosrc":
            DF(this);
            break;
        case "muted":
            this.T[a] = c === "" ? !0 : !!c;
            EF(this, a, c);
            break;
        default:
            EF(this, a, c)
        }
    }
    ;
    AF.prototype.nd = function(a) {
        this.Yb = a;
        var b;
        (b = this.oa) == null || b.nd(a)
    }
    ;
    var FF = function() {
        navigator.audioSession && (navigator.audioSession.type = "ambient")
    }
      , EF = function(a, b, c) {
        c !== a.T.getAttribute(b) && (c === null ? a.T.removeAttribute(b) : a.T.setAttribute(b, c))
    }
      , GF = function(a) {
        a.oa && (a.T.removeEventListener("timeupdate", a.lc),
        a.oa.dispose(),
        a.oa = null)
    };
    AF.prototype.Ma = function(a) {
        this.He = a;
        this.T.dispatchEvent(new Event("error"))
    }
    ;
    var xF = function(a) {
        HF(a);
        IF(a);
        a.T.addEventListener("loadedmetadata", function() {
            a.td = IA(a);
            a.td.then(function(b) {
                var c = a.T.videoWidth;
                var d = a.T.videoHeight
                  , e = b.width
                  , f = b.height;
                c > 0 && d > 0 && e > 0 && f > 0 ? (b = b.width / b.height,
                c /= d,
                c = Math.min(c, b) / Math.max(c, b) >= .97 ? "cover" : "contain") : c = null;
                c !== null && Pl(a.T, {
                    "object-fit": c
                })
            })
        });
        a.T.addEventListener("play", function() {
            a.mf || (YE(a.T, "first_play"),
            a.mf = !0)
        });
        a.T.addEventListener("pause", function() {
            a.kd || (YE(a.T, "first_pause"),
            $E(a.T),
            a.kd = !0)
        });
        Hr(y, "pagehide", function() {
            a.kd || (YE(a.T, "first_pause"),
            $E(a.T),
            a.kd = !0)
        });
        a.T.addEventListener("stalled", function() {
            Q(P.getInstance(), "ves", "1")
        });
        (new NB(a.T)).listen("playbackStalled", function() {
            return Q(P.getInstance(), "pbs", "1")
        });
        a.T.addEventListener("media_source_error", function(b) {
            GF(a);
            b = b.detail;
            a.Ma(new vF(b.code,b.message))
        });
        JF(a)
    }
      , zF = function(a) {
        var b = uF(a.childNodes);
        b && KF(a, b);
        a.Dc === null && LF(a)
    }
      , LF = function(a) {
        if (y.MutationObserver) {
            var b = new MutationObserver(function(c) {
                c = x(c);
                for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value,
                    d.type === "childList" && (d = uF(d.addedNodes))) {
                        KF(a, d);
                        b.disconnect();
                        break
                    }
            }
            );
            b.observe(a, rF)
        }
    }
      , yF = function(a) {
        a.T.addEventListener("volumechange", function() {
            a.Cb.g.C(bF.toString(), a.T.muted);
            a.Hh || a.Cb.g.C(cF.toString(), a.T.muted)
        })
    }
      , KF = function(a, b) {
        if (a.Dc === null && b.hasAttribute("src")) {
            var c = b.getAttribute("src");
            a.Dc = new mF(a.T,c,b.hasAttribute("default"));
            new jF(a.Dc,a.Cb);
            c.includes("kind=asr") && Q(P.getInstance(), "act", "1")
        }
    }
      , CF = function(a, b) {
        if (b !== a.hf) {
            a.hf = b;
            a.Ih && b && uA(b) && (b = wA(b));
            var c = b ? cD(b) : null
              , d = !!c && iD(c);
            Q(P.getInstance(), "umsem", d ? "1" : "0");
            d ? (b = pw(ZE, b, dD(c), NC[c] * 1E3, null),
            a.oa = pw(OE, [b]),
            a.Yb && a.oa.nd(a.Yb),
            a.oa.listen("media_source_error", function(e) {
                e = eD("media_source_error", e.detail);
                a.T.dispatchEvent(e)
            }),
            a.lc = function() {
                var e = a.oa;
                e.G = a.T.currentTime * 1E3;
                QE(e)
            }
            ,
            a.T.addEventListener("timeupdate", a.lc),
            gD(a.oa.g) && (EF(a, "disableRemotePlayback", "true"),
            FF()),
            EF(a, "src", RE(a.oa))) : (GF(a),
            EF(a, "src", b));
            a.re || BF(a)
        }
    }
      , MF = function(a, b) {
        b && $C(pw(ZC, b)).then(function(c) {
            a.re = !0;
            (c == null ? void 0 : c.length) === 2 ? (a.La = c[0],
            a.Ta = c[1]) : a.src = a.zg
        })
    }
      , DF = function(a) {
        a.src && a.Ma(new vF(MediaError.MEDIA_ERR_ABORTED,"Setting demuxed src after src is already set."));
        if (!a.Ta && !a.La && a.oa)
            GF(a),
            EF(a, "src", null),
            BF(a);
        else if (a.Ta && a.La) {
            var b = cD(uA(a.La) ? wA(a.La) : a.La)
              , c = cD(uA(a.Ta) ? wA(a.Ta) : a.Ta);
            if (b && iD(b))
                if (c && iD(c)) {
                    var d = !!b && iD(b) && !!c && iD(c);
                    Q(P.getInstance(), "umsed", d ? "1" : "0");
                    b = pw(ZE, a.La, dD(b), -1, null);
                    c = pw(ZE, a.Ta, dD(c), -1, null);
                    a.oa = pw(OE, [b, c]);
                    a.Yb && a.oa.nd(a.Yb);
                    a.oa.listen("media_source_error", function(e) {
                        e = eD("media_source_error", e.detail);
                        a.T.dispatchEvent(e)
                    });
                    a.lc = function() {
                        var e = a.oa;
                        e.G = a.T.currentTime * 1E3;
                        QE(e)
                    }
                    ;
                    a.T.addEventListener("timeupdate", a.lc);
                    gD(a.oa.g) && (EF(a, "disableRemotePlayback", "true"),
                    FF());
                    EF(a, "src", RE(a.oa));
                    a.re || BF(a)
                } else
                    a.Ma(new wF('Audio itag "' + c + '" not supported.'));
            else
                a.Ma(new wF('Video itag "' + b + '" not supported.'))
        }
    }
      , HF = function(a) {
        for (var b = x(qF), c = b.next(), d = {}; !c.done; d = {
            fb: void 0,
            getValue: void 0
        },
        c = b.next())
            d.fb = c.value,
            d.fb in a.T && (typeof a.T[d.fb] === "function" ? (d.getValue = a.T[d.fb].bind(a.T),
            Object.defineProperty(a, d.fb, {
                set: function(e) {
                    return function(f) {
                        a.T[e.fb] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return e.getValue
                    }
                }(d)
            })) : Object.defineProperty(a, d.fb, {
                set: function(e) {
                    return function(f) {
                        a.T[e.fb] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return a.T[e.fb]
                    }
                }(d)
            }))
    }
      , IF = function(a) {
        Object.defineProperty(a, "error", {
            set: function() {},
            get: function() {
                return a.T.error ? a.T.error : a.He
            }
        })
    }
      , JF = function(a) {
        a.T.style.width = Wl();
        a.T.style.height = Wl()
    };
    AF.prototype.disconnectedCallback = function() {
        this.td && JA(this.td);
        tF.prototype.disconnectedCallback && tF.prototype.disconnectedCallback.call(this)
    }
    ;
    da.Object.defineProperties(AF.prototype, {
        Ta: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        La: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    da.Object.defineProperties(AF, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return pF
            }
        }
    });
    y.customElements && (y.customElements.get("lima-video") || y.customElements.define("lima-video", AF));
    function NF() {
        var a = pw(tE);
        a.initialize().then(function() {
            var b = eD("initialized");
            a.dispatchEvent(b)
        });
        return a
    }
    var PF = function(a, b, c, d, e) {
        M.call(this);
        this.G = a;
        this.j = c;
        this.o = e;
        this.aa = this.U = this.hb = this.D = this.l = this.vb = 0;
        this.C = [];
        this.M = !1;
        this.ba = this.fa = this.ha = null;
        this.xa = !1;
        this.Gc = this.K = this.B = this.ya = this.Sa = null;
        this.za = !1;
        this.H = new O(b.url);
        this.Ia = b.Ia;
        this.la = d;
        (this.P = b.g) || this.H.l.remove("alr");
        Q(P.getInstance(), "sl_dv" + this.o, (this.P !== null).toString());
        this.V = !this.P;
        this.g = new XMLHttpRequest;
        this.W = .1;
        if (this.A = xD() && !vA(this.H))
            this.B = NF(),
            Rm(this, this.B);
        OF(this)
    };
    v(PF, M);
    var QF = function(a, b) {
        b = eD("media_source_error", b);
        a.G.dispatchEvent(b)
    }
      , RF = function(a, b) {
        QF(a, {
            code: a.l > 1 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: b
        })
    }
      , OF = function(a) {
        a.ha = function() {
            SF(a);
            if (a.V) {
                var b = a.g.responseText;
                a.M = !b || b.length < a.Ia;
                a.U = 0;
                pA("sl_cc" + a.o + "_" + a.l);
                a.D++;
                TF(a)
            }
        }
        ;
        a.fa = function() {
            SF(a)
        }
        ;
        a.ba = function() {
            pA("sl_ec" + a.o + "_" + a.l);
            RF(a, "Failed to load chunk " + a.l + " for stream " + a.o)
        }
        ;
        a.g.addEventListener("load", a.ha);
        a.g.addEventListener("progress", a.fa);
        a.g.addEventListener("error", a.ba);
        a.j.addEventListener("updateend", function() {
            a.j.buffered.length && (a.hb = a.j.buffered.end(0),
            a.A ? a.za && !a.j.updating && a.l === a.D && (pA("sl_lc" + a.o),
            a.la()) : a.M && !a.j.updating && a.l === a.D && (pA("sl_lc" + a.o),
            a.la()));
            !a.xa && a.G.buffered.length > 1 && (Q(P.getInstance(), "dbr", "1"),
            a.xa = !0)
        });
        a.j.addEventListener("update", function() {
            a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift())
        });
        a.j.addEventListener("error", function() {
            pA("msb_err" + a.o);
            QF(a, {
                code: MediaError.MEDIA_ERR_DECODE,
                message: "Error on SourceBuffer " + a.o
            })
        });
        a.A ? (a.B.Wa() ? UF(a) : a.Sa = Hr(a.B, "initialized", function() {
            UF(a)
        }),
        a.ya = Hr(a.B, "get_video_succeeded", function() {
            TF(a)
        })) : UF(a)
    }
      , WF = function(a) {
        pA("sl_rc" + a.o + "_" + a.l);
        var b = VF(a);
        a.g.open("get", b);
        a.g.overrideMimeType("text/plain; charset=x-user-defined");
        a.g.send(null);
        a.A && (a.K = null,
        a.Gc = b)
    }
      , SF = function(a) {
        if (a.g.status >= 400)
            RF(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
        else {
            if (!a.V) {
                var b = a.g.getResponseHeader("content-type");
                if (b && b.indexOf("text/plain") >= 0) {
                    a.g.readyState === XMLHttpRequest.DONE && (a.H = new O(a.g.response),
                    a.l = 0,
                    a.D = 0,
                    a.vb++,
                    UF(a));
                    return
                }
                a.V = !0;
                pA("sl_redc" + a.o);
                Q(P.getInstance(), "sl_tr" + a.o, a.vb.toString())
            }
            a.H.l.remove("alr");
            if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE)
                b = XF(a, a.U),
                a.U = a.g.response.length,
                a.aa += b.byteLength,
                YF(a, b);
            if (a.A && a.g.readyState === XMLHttpRequest.DONE && (b = XF(a, 0),
            b.byteLength > 0)) {
                var c = a.g.responseText;
                a.za = !c || c.length < a.Ia;
                a.B.yc(b, new O(a.Gc), 0, a.za)
            }
        }
    }
      , YF = function(a, b) {
        b.byteLength > 0 && (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b))
    }
      , XF = function(a, b) {
        a = a.g.response;
        for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
            c[d] = a.charCodeAt(d + b) & 255;
        return c.buffer
    }
      , TF = function(a) {
        var b = xA;
        b !== -1 && b < a.aa + a.Ia ? (a.G.pause(),
        xA = -1,
        b = !1) : (b = a.D === a.l && !a.j.updating && !a.C.length,
        b = a.A ? !a.za && b && a.G.currentTime >= a.W : !a.M && b && a.G.currentTime >= a.W);
        b && (a.W = a.hb + .1,
        UF(a))
    }
      , VF = function(a) {
        var b = a.A && a.K ? a.K + 1 : a.l * a.Ia;
        return Iz(a.H, "range", b + "-" + (b + a.Ia - 1)).toString()
    }
      , UF = function(a) {
        if (a.A) {
            var b = new O(VF(a));
            a.B.dc(b).then(function(c) {
                c ? (a.K = Number(c.Hc),
                a.za = c.za,
                YF(a, c.video),
                c = eD("get_video_succeeded"),
                a.B.dispatchEvent(c),
                a.D++) : WF(a);
                a.l++
            })
        } else
            WF(a),
            a.l++
    };
    PF.prototype.O = function() {
        this.A && this.B.Wa() && this.B.close();
        this.g.removeEventListener("load", this.ha);
        this.g.removeEventListener("progress", this.fa);
        this.g.removeEventListener("error", this.ba);
        Pr(this.Sa);
        Pr(this.ya);
        M.prototype.O.call(this)
    }
    ;
    var $F = function(a, b) {
        M.call(this);
        var c = this;
        this.B = a;
        this.G = b;
        this.g = new MediaSource;
        this.D = [];
        this.l = [];
        this.j = this.o = null;
        this.A = !1;
        this.C = function() {
            ZF(c)
        }
        ;
        this.g.addEventListener("sourceopen", this.C)
    };
    v($F, M);
    var aG = function(a) {
        a.o && a.B.removeEventListener("timeupdate", a.o)
    }
      , ZF = function(a) {
        pA("msmsw_oso");
        a.o = function() {
            if (!a.A)
                for (var e = x(a.l), f = e.next(); !f.done; f = e.next())
                    TF(f.value)
        }
        ;
        a.B.addEventListener("timeupdate", a.o);
        for (var b = 0; b < a.G.length; b++) {
            var c = a.G[b];
            Q(P.getInstance(), "msmsw_mime" + b, c.mimeType);
            Q(P.getInstance(), "msmsw_cs" + b, c.Ia.toString());
            var d = a.g.addSourceBuffer(c.mimeType);
            d ? (a.D.push(d),
            c = pw(PF, a.B, c, d, function() {
                a: if (!a.A) {
                    for (var e = x(a.l), f = e.next(); !f.done; f = e.next())
                        if (f = f.value,
                        f.A ? !f.za || f.j.updating || f.C.length : !f.M || f.j.updating || f.C.length)
                            break a;
                    a.g.endOfStream();
                    a.A = !0;
                    aG(a)
                }
            }, b),
            a.l.push(c)) : pA("msmsw_sbf" + b)
        }
        Q(P.getInstance(), "msmsw_ns", a.D.length.toString())
    };
    $F.prototype.O = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = x(this.l), b = a.next(); !b.done; b = a.next())
            b.value.dispose();
        aG(this);
        this.g.removeEventListener("sourceopen", this.C);
        M.prototype.O.call(this)
    }
    ;
    var bG = function(a, b, c, d) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        N.call(this);
        this.g = a;
        this.W = d;
        this.K = this.U = this.H = !1;
        this.M = this.D = this.o = null;
        this.loaded = this.l = !1;
        this.P = this.ba = null;
        this.A = 0;
        this.j = new bC(this);
        Rm(this, this.j);
        this.hb = b && Wd && !le || c;
        this.fa = [];
        this.la = new GC(a)
    };
    v(bG, N);
    m = bG.prototype;
    m.dispatchEvent = function(a) {
        return this.W ? (this.fa.push(a),
        !0) : N.prototype.dispatchEvent.call(this, a)
    }
    ;
    m.Ce = function() {
        var a = this.la;
        a.o = a.g.currentSrc;
        a.B = a.g.seekable.length > 0;
        a.j = a.g.getAttribute("crossOrigin");
        a.l = a.g.ended ? -1 : a.g.currentTime
    }
    ;
    m.uc = function(a) {
        IC(this.la, a)
    }
    ;
    m.releaseEvents = function() {
        var a = this;
        this.W && (this.W = !1,
        this.fa.forEach(function(b) {
            a.dispatchEvent(b)
        }))
    }
    ;
    m.De = function() {
        this.Ub();
        this.j.listen(this.g, "ended", this.Vd);
        this.j.listen(this.g, "pause", this.Xd);
        this.j.listen(this.g, "playing", this.gd);
        this.j.listen(this.g, "timeupdate", this.Yd);
        this.j.listen(this.g, "volumechange", this.df);
        this.j.listen(this.g, "error", this.onError);
        this.j.listen(this.g, "canplay", this.fh);
        this.j.listen(this.g, "canplaythrough", this.gh);
        this.j.listen(this.g, "loadstart", this.ih);
        this.j.listen(this.g, "durationchange", this.hh);
        this.j.listen(this.g, "waiting", this.qh);
        this.j.listen(this.g, "seeked", this.mh);
        this.j.listen(this.g, "seeking", this.nh);
        this.j.listen(this.g, "stalled", this.oh);
        this.j.listen(this.g, "progress", this.lh);
        this.j.listen(this.g, "loadeddata", this.Wd);
        this.j.listen(this.g, "windowFocusChanged", this.rh)
    }
    ;
    m.Ub = function() {
        fC(this.j)
    }
    ;
    var cG = function(a) {
        a.loaded = !1;
        a.l = !1;
        a.H = !1;
        a.K = !1;
        a.A = 0;
        a.o = null;
        a.M = null;
        Pm(a.D)
    };
    m = bG.prototype;
    m.getCurrentTime = function() {
        return this.g.currentTime
    }
    ;
    m.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    }
    ;
    m.getVolume = function() {
        return this.isMuted() ? 0 : this.g.volume
    }
    ;
    m.Ze = function() {
        return this.g.paused
    }
    ;
    m.isMuted = function() {
        return this.g.muted
    }
    ;
    m.Nd = function() {
        return !1
    }
    ;
    m.Vd = function() {
        this.dispatchEvent("end");
        dG(this)
    }
    ;
    m.Xd = function() {
        this.g.ended || this.dispatchEvent("pause");
        dG(this)
    }
    ;
    m.gd = function() {
        this.dispatchEvent("play");
        this.hb && this.kc()
    }
    ;
    m.kc = function() {
        this.l || (this.l = !0,
        dG(this),
        this.dispatchEvent("start"))
    }
    ;
    m.Yd = function() {
        var a = this.getCurrentTime();
        if (!this.l) {
            if (a <= 0)
                return;
            if (le && this.g.ended && this.getDuration() === 1) {
                this.onError();
                return
            }
            this.kc()
        }
        this.A = Math.max(this.A, a);
        this.dispatchEvent("timeUpdate")
    }
    ;
    m.qh = function() {
        this.dispatchEvent("waiting")
    }
    ;
    m.df = function() {
        this.dispatchEvent("volumeChange")
    }
    ;
    m.hh = function() {
        this.dispatchEvent("durationChange")
    }
    ;
    m.onError = function() {
        dG(this);
        this.dispatchEvent("error")
    }
    ;
    m.fh = function() {
        this.dispatchEvent("canPlay");
        this.Wd()
    }
    ;
    m.gh = function() {
        this.dispatchEvent("canPlayThrough")
    }
    ;
    m.ih = function() {
        this.dispatchEvent("loadStart")
    }
    ;
    m.mh = function() {
        this.dispatchEvent("seeked")
    }
    ;
    m.nh = function() {
        this.dispatchEvent("seeking")
    }
    ;
    m.oh = function() {
        this.dispatchEvent("stalled")
    }
    ;
    m.lh = function() {
        this.g.buffered && this.g.buffered.length && this.g.buffered.end(this.g.buffered.length - 1) === this.getDuration() && (pA("vfl"),
        this.dispatchEvent("fullyLoaded"))
    }
    ;
    m.Wd = function() {
        this.loaded || (pA("vil"),
        this.loaded = !0,
        this.dispatchEvent("loaded"))
    }
    ;
    m.rh = function(a) {
        this.dispatchEvent(a)
    }
    ;
    m.load = function(a, b) {
        b = b === void 0 ? null : b;
        var c = P.getInstance().g;
        c.K = !0;
        c.o();
        pA("hvd_lc");
        cG(this);
        if ($d || LB()) {
            c = this.g;
            try {
                "removeAttribute"in c && c.removeAttribute("crossOrigin")
            } catch (t) {}
        }
        this.U = !1;
        if (b)
            try {
                if (b instanceof ow) {
                    pA("hvd_src");
                    var d = b.getMediaUrl();
                    if (!d)
                        throw Error("Invalid ad media url");
                    pA("hvd_admu");
                    b.j === "application/dash+xml" && this.g instanceof AF ? MF(this.g, d) : this.g.src = d;
                    this.g.load()
                } else if (b instanceof nw) {
                    var e = b.getVideoUrl()
                      , f = b.j
                      , g = b.l
                      , h = b.g
                      , k = b.ub
                      , l = b.gb;
                    if (!e)
                        throw Error("Invalid video url");
                    if (!f)
                        throw Error("Invalid audio url");
                    if (!b.Ea)
                        throw Error("Invalid MSE compatibility");
                    if (!window.MediaSource)
                        throw Error("Invalid media source");
                    if (this.g instanceof AF)
                        this.g.La = e,
                        this.g.Ta = f,
                        this.g.load();
                    else {
                        if (!g)
                            throw Error("Invalid video mime type");
                        if (!h)
                            throw Error("Invalid audio mime type");
                        if (!k)
                            throw Error("Invalid video codec");
                        if (!l)
                            throw Error("Invalid audio codec");
                        pA("hvd_addu");
                        if (!b.Ea)
                            throw Error("Invalid MSE compatibility");
                        pA("hvd_admse");
                        d = h + '; codecs="' + l + '"';
                        if (!(window.MediaSource && hD(g + '; codecs="' + k + '"') && hD(d)))
                            throw Error("MSE not available");
                        pA("hvd_ymse");
                        pA("hvd_mse");
                        k = !1;
                        try {
                            window.location.search.indexOf("goog_limavideo=true") !== -1 && (k = !0)
                        } catch (t) {}
                        var n = this.g;
                        if (this.Be(k) && n instanceof AF)
                            n.La = e,
                            n.Ta = f;
                        else {
                            this.ba = new $F(n,[new ZE(e,g,35E4,new LC), new ZE(f,h,82E3,new LC)]);
                            Rm(this, this.ba);
                            var p = this.ba;
                            p.j || (p.j = qd(p.g).toString());
                            var r = p.j;
                            n.src = r
                        }
                        n.load()
                    }
                } else
                    pA("hvd_uad");
                return
            } catch (t) {
                pA("hvd_amlf")
            }
        a ? (pA("hvd_src"),
        e = this.g,
        e.src = a,
        e.load()) : (pA("hvd_vn"),
        this.g.load())
    }
    ;
    m.Be = function(a) {
        return y.customElements ? a ? !0 : !1 : !1
    }
    ;
    m.unload = function() {
        this.g.removeAttribute("src");
        this.g.removeAttribute("demuxedVideoSrc");
        this.g.removeAttribute("demuxedAudioSrc");
        this.g.load()
    }
    ;
    m.play = function() {
        this.l || eG(this);
        return this.g.play()
    }
    ;
    m.pause = function() {
        this.g.pause()
    }
    ;
    var eG = function(a) {
        a.P || (a.P = vs(function() {
            a.l || a.dispatchEvent("mediaPlaybackTimeout")
        }, 8E3))
    }
      , dG = function(a) {
        a.P && (y.clearTimeout(a.P),
        a.P = null)
    };
    bG.prototype.setVolume = function(a) {
        this.g.volume = a
    }
    ;
    bG.prototype.canPlayType = function(a) {
        if (typeof this.g.canPlayType !== "function")
            return Q(P.getInstance(), "vmcpy", "1"),
            !0;
        a = this.g.canPlayType(a);
        return a !== "" && a != null
    }
    ;
    bG.prototype.getVideoUrl = function() {
        return this.g.currentSrc
    }
    ;
    bG.prototype.getSize = function() {
        return Yl(this.g)
    }
    ;
    RegExp.prototype.hasOwnProperty("sticky");
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var fG = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , gG = function() {
        for (var a = Array(36), b = 0, c, d = 0; d < 36; d++)
            d == 8 || d == 13 || d == 18 || d == 23 ? a[d] = "-" : d == 14 ? a[d] = "4" : (b <= 2 && (b = 33554432 + Math.random() * 16777216 | 0),
            c = b & 15,
            b >>= 4,
            a[d] = fG[d == 19 ? c & 3 | 8 : c]);
        return a.join("")
    };
    var iG = function(a) {
        O.call(this, a);
        this.C = new Map;
        a = this.j;
        var b = a.indexOf(";")
          , c = null;
        b >= 0 ? (this.j = a.substring(0, b),
        c = a.substring(b + 1)) : this.j = a;
        hG(this, c)
    };
    v(iG, O);
    iG.prototype.toString = function() {
        return jG(this, O.prototype.toString.call(this))
    }
    ;
    iG.prototype.D = function() {
        return ""
    }
    ;
    var hG = function(a, b) {
        Jc(Ed(b)) || b.split(";").forEach(function(c) {
            var d = c.indexOf("=");
            if (!(d <= 0)) {
                var e = Ad(c.substring(0, d));
                c = Ad(c.substring(d + 1));
                d = a.C.get(e);
                d != null ? d.includes(c) || d.push(c) : d = [Ed(c)];
                a.C.set(e, d)
            }
        }, a)
    }
      , kG = function(a) {
        if (Jc(Ed("ord")))
            return null;
        a = a.C.get("ord");
        return a != null ? a : null
    }
      , lG = function(a, b) {
        Jc(Ed("ord")) || (b = b.map(Ed),
        a.C.set("ord", b))
    }
      , jG = function(a, b) {
        b = [Ed(b)];
        b.push.apply(b, pa(mG(a)));
        return b.join(";")
    }
      , mG = function(a) {
        var b = kG(a);
        b == null ? b = [Ed(Date.now())] : Jc(Ed("ord")) || a.C.delete("ord");
        var c = [];
        a.C.forEach(function(d, e) {
            d.forEach(function(f) {
                c.push(e + "=" + f)
            })
        });
        c.push("ord=" + b[0]);
        lG(a, b);
        return c
    };
    iG.prototype.G = function() {
        return new iG(this.toString())
    }
    ;
    var S = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        PROTECTED_AUDIENCE_API_ERROR: 1014,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        UNSUPPORTED_URL: 1022,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        ej: 2002
    };
    S[-1] = "DEPRECATED_ERROR_CODE";
    S[100] = "VAST_MALFORMED_RESPONSE";
    S[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    S[102] = "VAST_UNSUPPORTED_VERSION";
    S[200] = "VAST_TRAFFICKING_ERROR";
    S[201] = "VAST_UNEXPECTED_LINEARITY";
    S[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    S[300] = "VAST_WRAPPER_ERROR";
    S[301] = "VAST_LOAD_TIMEOUT";
    S[302] = "VAST_TOO_MANY_REDIRECTS";
    S[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    S[400] = "VIDEO_PLAY_ERROR";
    S[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    S[403] = "VAST_LINEAR_ASSET_MISMATCH";
    S[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    S[500] = "OVERLAY_AD_PLAYING_FAILED";
    S[501] = "NONLINEAR_DIMENSIONS_ERROR";
    S[502] = "OVERLAY_AD_LOADING_FAILED";
    S[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    S[602] = "COMPANION_REQUIRED_ERROR";
    S[603] = "COMPANION_AD_LOADING_FAILED";
    S[900] = "UNKNOWN_ERROR";
    S[901] = "VPAID_ERROR";
    S[1005] = "FAILED_TO_REQUEST_ADS";
    S[1007] = "VAST_ASSET_NOT_FOUND";
    S[1009] = "VAST_EMPTY_RESPONSE";
    S[1010] = "UNKNOWN_AD_RESPONSE";
    S[1011] = "UNSUPPORTED_LOCALE";
    S[1012] = "ADS_REQUEST_NETWORK_ERROR";
    S[1013] = "INVALID_AD_TAG";
    S[1014] = "PROTECTED_AUDIENCE_API_ERROR";
    S[1020] = "STREAM_INITIALIZATION_FAILED";
    S[1021] = "ASSET_FALLBACK_FAILED";
    S[1022] = "UNSUPPORTED_URL";
    S[1101] = "INVALID_ARGUMENTS";
    S[1204] = "NATIVE_MESSAGE_ERROR";
    S[1205] = "AUTOPLAY_DISALLOWED";
    S[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    S[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var nG = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    v(nG, Error);
    m = nG.prototype;
    m.getAd = function() {
        return this.ad
    }
    ;
    m.getInnerError = function() {
        return this.g
    }
    ;
    m.getMessage = function() {
        return this.errorMessage
    }
    ;
    m.getErrorCode = function() {
        return this.errorCode
    }
    ;
    m.getVastErrorCode = function() {
        return this.errorCode < 1E3 ? this.errorCode : 900
    }
    ;
    m.getType = function() {
        return this.type
    }
    ;
    m.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    m.da = function() {
        for (var a = {}, b = a = (a.type = this.getType(),
        a.errorCode = this.getErrorCode(),
        a.errorMessage = this.getMessage(),
        a), c = this.getInnerError(), d = 0; d < 3; ++d)
            if (c instanceof nG) {
                var e = {};
                e = (e.type = c.getType(),
                e.errorCode = c.getErrorCode(),
                e.errorMessage = c.getMessage(),
                e);
                b = b.innerError = e;
                c = c.getInnerError()
            } else {
                c != null && (b.innerError = String(c));
                break
            }
        return a
    }
    ;
    var oG = ra(["https://imasdk.googleapis.com/js/sdkloader/car.js"]);
    re(oG);
    function pG(a) {
        return a ? (a = /\/(\d+)(?:,\d+){0,2}\//.exec(a)) && a.length === 2 ? a[1] : null : null
    }
    function qG(a) {
        if (a === "")
            return null;
        a = new O(a);
        var b = Jz(a, "slotname") || Jz(a, "iu");
        if (!(b = b ? pG(b) : null)) {
            var c;
            b = (a = (c = Jz(a, "client")) != null ? c : "") ? a : null
        }
        return b
    }
    function rG(a, b) {
        try {
            var c = new URL(a);
            return c.searchParams.get("slotname") || c.searchParams.get("iu") || ""
        } catch (d) {
            b == null || b(d)
        }
        return ""
    }
    function sG(a) {
        try {
            var b = (new URL(a)).searchParams.get("cust_params");
            return b == null ? {} : Object.fromEntries(b.split("&").map(function(c) {
                return c.split("=")
            }).map(function(c) {
                var d;
                return [c[0], decodeURIComponent((d = c[1]) != null ? d : "").split(",")]
            }).filter(function(c) {
                return c[0].length > 0
            }))
        } catch (c) {}
        return {}
    }
    ;var tG = function(a) {
        var b = {};
        b = (b.IABUSPrivacy_String = "uspString",
        b.IABTCF_gdprApplies = "gdprApplies",
        b.IABTCF_TCString = "tcString",
        b.IABTCF_AddtlConsent = "addtlConsent",
        b.IABGPP_HDR_GppString = "gppString",
        b.IABGPP_GppSID = "gppSid",
        b);
        for (var c in b)
            a[c] != null && (a[b[c]] = a[c],
            delete a[c]);
        c = a.uspString;
        this.uspString = typeof c === "string" ? c : "";
        c = a.gdprApplies;
        this.j = typeof c === "boolean" ? c ? "1" : "0" : typeof c !== "number" || c !== 1 && c !== 0 ? typeof c !== "string" || c !== "1" && c !== "0" ? "" : c === "1" ? "1" : "0" : c === 1 ? "1" : "0";
        c = a.tcString;
        this.g = typeof c === "string" ? c : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
        c = a.gppString;
        this.gppString = typeof c === "string" ? c : "";
        a = a.gppSid;
        this.l = typeof a === "string" ? a : ""
    };
    var uG = function(a) {
        this.g = a
    }
      , wG = function(a) {
        return vG(a)
    }
      , xG = function(a, b) {
        return fc(a.g, b) && (a = a.g[b],
        typeof a === "boolean") ? a : !1
    }
      , yG = function(a) {
        return fc(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration,
        typeof a === "number") ? a : NaN
    }
      , vG = function(a) {
        if (fc(a.g, "forceExperimentIds")) {
            a = a.g.forceExperimentIds;
            var b = []
              , c = 0;
            Array.isArray(a) && a.forEach(function(d) {
                typeof d === "number" && (b[c++] = d)
            });
            return b
        }
        return null
    };
    var T = function() {
        this.G = "always";
        this.U = 4;
        this.L = null;
        this.B = 1;
        this.g = 0;
        this.o = !0;
        this.locale = "en";
        this.l = null;
        this.j = !1;
        this.aa = this.W = "";
        this.C = null;
        this.ba = this.V = -1;
        this.A = "";
        this.M = !1;
        this.ha = null;
        this.K = !0;
        this.D = gG();
        this.P = {};
        this.I = "";
        this.H = 0;
        try {
            this.ha = Sf()[0]
        } catch (a) {}
    }
      , zG = function(a) {
        a = Ed(a);
        Jc(a) || (a = a.substring(0, 20));
        return a
    };
    m = T.prototype;
    m.setCompanionBackfill = function(a) {
        this.G = a
    }
    ;
    m.getCompanionBackfill = function() {
        return this.G
    }
    ;
    m.setNumRedirects = function(a) {
        this.U = a
    }
    ;
    m.getNumRedirects = function() {
        return this.U
    }
    ;
    m.setPpid = function(a) {
        this.L = a
    }
    ;
    m.getPpid = function() {
        return this.L
    }
    ;
    m.setVpaidAllowed = function(a) {
        typeof a === "boolean" && (this.B = a ? 1 : 0)
    }
    ;
    m.setVpaidMode = function(a) {
        this.B = a
    }
    ;
    m.Eg = function() {
        return this.B
    }
    ;
    m.setAutoPlayAdBreaks = function(a) {
        this.o = a
    }
    ;
    m.Rg = function() {
        return this.o
    }
    ;
    m.wh = function(a) {
        this.j = a
    }
    ;
    m.Dg = function() {
        return this.j
    }
    ;
    m.setLocale = function(a) {
        if (a = VB(a))
            this.locale = a
    }
    ;
    m.getLocale = function() {
        return this.locale
    }
    ;
    m.setPlayerType = function(a) {
        this.W = zG(a)
    }
    ;
    m.getPlayerType = function() {
        return this.W
    }
    ;
    m.setPlayerVersion = function(a) {
        this.aa = zG(a)
    }
    ;
    m.getPlayerVersion = function() {
        return this.aa
    }
    ;
    var AG = function(a) {
        if (a.C == null) {
            var b = {}
              , c = Hz(new O(ze().location.href));
            if (Oz(c, "tcnfp"))
                try {
                    b = JSON.parse(c.get("tcnfp"))
                } catch (d) {}
            a.C = new uG(b)
        }
        return a.C
    };
    m = T.prototype;
    m.xh = function(a) {
        this.V = a
    }
    ;
    m.yh = function(a) {
        this.ba = a
    }
    ;
    m.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.M = a
    }
    ;
    m.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.M
    }
    ;
    m.isCookiesEnabled = function() {
        return this.K
    }
    ;
    m.setCookiesEnabled = function(a) {
        a != null && (this.K = a)
    }
    ;
    m.setSessionId = function(a) {
        this.D = a
    }
    ;
    m.vh = function() {}
    ;
    m.Cg = function() {
        return !0
    }
    ;
    m.setFeatureFlags = function(a) {
        this.P = a
    }
    ;
    m.getFeatureFlags = function() {
        return this.P
    }
    ;
    m.da = function(a) {
        a = a === void 0 ? null : a;
        var b = {};
        a != null && (b.activeViewPushUpdates = a);
        b.activityMonitorMode = this.g;
        b.adsToken = this.A;
        b.autoPlayAdBreaks = this.o;
        b.companionBackfill = this.getCompanionBackfill();
        b.cookiesEnabled = this.isCookiesEnabled();
        b.disableCustomPlaybackForIOS10Plus = this.getDisableCustomPlaybackForIOS10Plus();
        b.engagementDetection = !0;
        b.isFunctionalTest = !1;
        b.isVpaidAdapter = this.j;
        b["1pJar"] = "";
        b.numRedirects = this.getNumRedirects();
        b.pageCorrelator = this.V;
        b.persistentStateCorrelator = $z();
        b.playerType = this.getPlayerType();
        b.playerVersion = this.getPlayerVersion();
        b.ppid = this.getPpid();
        b.privacyControls = "";
        b.reportMediaRequests = !1;
        b.sessionId = this.D;
        b.streamCorrelator = this.ba;
        a = AG(this).g;
        b.testingConfig = a;
        b.urlSignals = this.ha;
        b.vpaidMode = this.B;
        b.featureFlags = this.getFeatureFlags();
        b.cookieDeprecationLabel = this.I;
        b.cookieDeprecationLabelStatus = this.H;
        return b
    }
    ;
    T.prototype.getFeatureFlags = T.prototype.getFeatureFlags;
    T.prototype.setFeatureFlags = T.prototype.setFeatureFlags;
    T.prototype.getDisableFlashAds = T.prototype.Cg;
    T.prototype.setDisableFlashAds = T.prototype.vh;
    T.prototype.setSessionId = T.prototype.setSessionId;
    T.prototype.setCookiesEnabled = T.prototype.setCookiesEnabled;
    T.prototype.isCookiesEnabled = T.prototype.isCookiesEnabled;
    T.prototype.getDisableCustomPlaybackForIOS10Plus = T.prototype.getDisableCustomPlaybackForIOS10Plus;
    T.prototype.setDisableCustomPlaybackForIOS10Plus = T.prototype.setDisableCustomPlaybackForIOS10Plus;
    T.prototype.setStreamCorrelator = T.prototype.yh;
    T.prototype.setPageCorrelator = T.prototype.xh;
    T.prototype.getPlayerVersion = T.prototype.getPlayerVersion;
    T.prototype.setPlayerVersion = T.prototype.setPlayerVersion;
    T.prototype.getPlayerType = T.prototype.getPlayerType;
    T.prototype.setPlayerType = T.prototype.setPlayerType;
    T.prototype.getLocale = T.prototype.getLocale;
    T.prototype.setLocale = T.prototype.setLocale;
    T.prototype.getIsVpaidAdapter = T.prototype.Dg;
    T.prototype.setIsVpaidAdapter = T.prototype.wh;
    T.prototype.isAutoPlayAdBreaks = T.prototype.Rg;
    T.prototype.setAutoPlayAdBreaks = T.prototype.setAutoPlayAdBreaks;
    T.prototype.getVpaidMode = T.prototype.Eg;
    T.prototype.setVpaidMode = T.prototype.setVpaidMode;
    T.prototype.setVpaidAllowed = T.prototype.setVpaidAllowed;
    T.prototype.getPpid = T.prototype.getPpid;
    T.prototype.setPpid = T.prototype.setPpid;
    T.prototype.getNumRedirects = T.prototype.getNumRedirects;
    T.prototype.setNumRedirects = T.prototype.setNumRedirects;
    T.prototype.getCompanionBackfill = T.prototype.getCompanionBackfill;
    T.prototype.setCompanionBackfill = T.prototype.setCompanionBackfill;
    var BG = new T;
    var CG = function(a, b) {
        (0,
        a.__uspapi)("getUSPData", 1, function(c, d) {
            b.Ga({
                Me: c != null ? c : void 0,
                Pe: d ? void 0 : 2
            })
        })
    }
      , DG = {
        Pd: function(a) {
            return a.Ga
        },
        Uc: function(a, b) {
            a = {};
            return a.__uspapiCall = {
                callId: b,
                command: "getUSPData",
                version: 1
            },
            a
        },
        jc: function(a, b) {
            b = b.__uspapiReturn;
            var c;
            a({
                Me: (c = b.returnValue) != null ? c : void 0,
                Pe: b.success ? void 0 : 2
            })
        }
    };
    function EG(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ff: b.__uspapiReturn.callId
        }
    }
    var FG = function(a, b) {
        b = b === void 0 ? {} : b;
        M.call(this);
        var c;
        this.timeoutMs = (c = b.timeoutMs) != null ? c : 500;
        this.caller = new qw(a,"__uspapiLocator",function(d) {
            return typeof d.__uspapi === "function"
        }
        ,EG);
        this.caller.B.set("getDataWithCallback", CG);
        this.caller.o.set("getDataWithCallback", DG)
    };
    v(FG, M);
    FG.prototype.O = function() {
        this.caller.dispose();
        M.prototype.O.call(this)
    }
    ;
    var GG = function(a, b) {
        var c = {};
        if (rw(a.caller)) {
            var d = Oe(function() {
                b(c)
            });
            Xy(a.caller, "getDataWithCallback", {
                Ga: function(e) {
                    e.Pe || (c = e.Me);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else
            b(c)
    };
    var HG = function(a) {
        this.F = G(a)
    };
    v(HG, J);
    function IG(a) {
        var b = {};
        Hz(new O(a)).forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    function JG(a) {
        return a === "1" || a === "true"
    }
    var KG = function(a, b, c, d, e) {
        b = b === void 0 ? {} : b;
        c = c === void 0 ? {} : c;
        this.j = a === void 0 ? !1 : a;
        this.o = d === void 0 ? !1 : d;
        this.B = e === void 0 ? !1 : e;
        a = {};
        b = x(Object.entries(b));
        for (d = b.next(); !d.done; d = b.next())
            e = x(d.value),
            d = e.next().value,
            e = e.next().value,
            e != null && (a[d] = String(e));
        this.l = a;
        this.g = new tG(c)
    }
      , LG = function(a, b, c) {
        var d = !1;
        d = d === void 0 ? !1 : d;
        c = c === void 0 ? !1 : c;
        var e = new O(a);
        var f = e.j;
        (e = Ic(e.g, "googleads.g.doubleclick.net") && TB("/pagead/(live/)?ads", f)) || (f = new iG(a),
        e = f.g,
        f = jG(f, f.j),
        e = !Ic(e, ".g.doubleclick.net") && (Ic(e, "doubleclick.net") || Ic(e, "pagead2.googlesyndication.com")) && TB("/(ad|pfad)[x|i|j]?/", f));
        e || (e = new O(a),
        f = e.j,
        e = Ic(e.g, "doubleclick.net") && TB("/gampad/(live/)?ads", f));
        e || (e = (new O(a)).g == "bid.g.doubleclick.net");
        e || (e = new O(a),
        f = e.j,
        e = e.g === "ad.doubleclick.net" && TB("/dv3/adv", f));
        e || (e = new O(a),
        f = e.j,
        e = e.g === "pubads.g.doubleclick.net" && (TB("/ssai/", f) || TB("/ondemand/", f)));
        return new KG(e,IG(a),b,d,c)
    }
      , OG = function(a) {
        var b = a.g.g;
        var c = MG(a, "gdpr_consent");
        b = b && b !== "tcunavailable" ? b : b === "tcunavailable" ? c || b : c || "";
        if (b === "tcunavailable")
            return null;
        var d;
        return (d = Yv(b, NG(a))) != null ? d : null
    }
      , MG = function(a, b) {
        if (a.l.hasOwnProperty(b))
            return a.l[b]
    }
      , QG = function(a) {
        var b;
        (b = PG(a)) || (NG(a) ? (a = OG(a),
        a = !!a && fz(a)) : a = !0,
        b = !a);
        return b
    }
      , PG = function(a) {
        a = MG(a, "ltd");
        return JG(a)
    }
      , NG = function(a) {
        var b = MG(a, "gdpr")
          , c = a.g.j;
        b = (c === "1" || c === "0" ? c : b !== void 0 ? b : "").toLowerCase();
        return b === "true" || b === "1" || a.o
    }
      , RG = function(a) {
        var b = new HG;
        if (NG(a)) {
            var c = OG(a);
            c = !!c && !iz(c, ["2", "7", "9", "10"], 3)
        } else
            c = !1;
        cj(b, 8, c);
        a = !QG(a);
        cj(b, 5, a);
        return b
    }
      , SG = function(a) {
        try {
            var b = a.g.gppString
              , c = a.g.l.split("_").map(function(d) {
                return Number(d)
            });
            return sz(b, c).eh
        } catch (d) {
            return !1
        }
    };
    var TG = function(a) {
        this.F = G(a)
    };
    v(TG, J);
    TG.prototype.getVersion = function() {
        return Xi(this, 2)
    }
    ;
    var UG = function(a) {
        this.F = G(a)
    };
    v(UG, J);
    var VG = function(a, b) {
        return gj(a, 2, b)
    }
      , WG = function(a, b) {
        return gj(a, 3, b)
    }
      , XG = function(a, b) {
        return gj(a, 4, b)
    }
      , YG = function(a, b) {
        return gj(a, 5, b)
    }
      , ZG = function(a, b) {
        return gj(a, 9, b)
    }
      , $G = function(a, b) {
        return Oi(a, 10, b)
    }
      , aH = function(a, b) {
        return cj(a, 11, b)
    }
      , bH = function(a, b) {
        return gj(a, 1, b)
    }
      , cH = function(a, b) {
        return cj(a, 7, b)
    };
    var dH = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function eH(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }
    function fH(a) {
        var b, c;
        return typeof ((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }
    function gH() {
        var a = window;
        if (!fH(a))
            return null;
        var b = eH(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(dH).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function hH(a) {
        var b;
        return aH($G(YG(VG(bH(XG(cH(ZG(WG(new UG, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new TG;
            d = gj(d, 1, c.brand);
            return gj(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }
    function iH() {
        var a, b;
        return (b = (a = gH()) == null ? void 0 : a.then(function(c) {
            return hH(c)
        })) != null ? b : null
    }
    ;var kH = function() {
        this.jb = new KG;
        this.secureSignals = null;
        gG();
        this.deviceId = "";
        this.Mc = this.Md = !1;
        this.yd = 0;
        this.Nc = !1;
        this.g = this.referrer = this.Td = null;
        this.rd = !1;
        new Zt;
        new Xt;
        jH(this)
    }
      , lH = function() {
        var a = kH.getInstance()
          , b = "h.3.695.1";
        BG.j && (b += "/vpaid_adapter");
        a.Mc && (b += "/ima_cast");
        a.Nc && (b += "/ima_tv_web");
        return b
    }
      , jH = function(a) {
        var b = iH();
        b && b.then(function(c) {
            if (c == null)
                c = null;
            else {
                c = c.da();
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    g > 255 && (d[e++] = g & 255,
                    g >>= 8);
                    d[e++] = g
                }
                c = kg(d, 3)
            }
            a.g = c
        })
    };
    kH.getInstance = function() {
        return E(kH)
    }
    ;
    var nH = function(a) {
        var b = {
            yd: 0,
            Md: !1,
            Mc: !1,
            Nc: !1,
            Td: null
        };
        a = a === void 0 ? !1 : a;
        var c = AG(BG);
        if (c && xG(c, "forceCustomPlayback") || BG.j)
            return !0;
        if (LB() && a)
            return !1;
        a = a && (LB() || $d && KB(IB, 10)) && BG.getDisableCustomPlaybackForIOS10Plus();
        return (Xd || Zd) && !a || Wd && (!Wd || !KB(JB, 4)) || mH(b) ? !0 : !1
    }
      , oH = function(a) {
        var b = {
            yd: 0,
            Md: !1,
            Mc: !1,
            Nc: !1,
            Td: null
        };
        return a === null ? !1 : BG.j ? !0 : $d || LB() ? MB(a) ? LB() || $d && KB(IB, 10) && BG.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : Wd && (!Wd || !KB(JB, 4)) || mH(b) ? !0 : !1
    }
      , pH = function() {
        var a = AG(BG);
        return a && xG(a, "disableOnScreenDetection") ? !1 : !im()
    }
      , mH = function(a) {
        return qH(a) === 1 || qH(a) === 2
    }
      , qH = function(a) {
        var b = a.yd;
        var c = a.Md;
        var d = a.Mc;
        var e = a.Nc;
        a = a.Td;
        switch (b) {
        case 1:
            return 3;
        case 2:
            return 1
        }
        b = y.navigator || null;
        return c || d || e || b && jm(b) || a === "tvos" || a === "kepler" ? 1 : km() ? 2 : 0
    };
    var rH = function(a, b) {
        return a.indexOf(b) == 0 ? a.substr(b.length) : null
    };
    function sH() {
        var a = Ef();
        a = x(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            b.url && b.url.includes("amp=1"))
                return !0;
        return window.context != null ? (a = Number(window.context.ampcontextVersion),
        isNaN(a) ? !1 : Math.floor(a) > 0) : Hf().l != null
    }
    function tH() {
        var a = ze().location.ancestorOrigins;
        return a ? a.length > 0 ? [].concat(pa(a)).join(",") : "" : ""
    }
    ;function uH(a, b) {
        Iz(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (c <= 0)
                return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; f > 0 && e.length > c; )
                d = b.slice(0, f--),
                e = encodeURIComponent(d);
            Iz(a, "url", d)
        } catch (g) {}
        return a.toString()
    }
    ;var V = {}
      , vH = (V.creativeView = "creativeview",
    V.start = "start",
    V.midpoint = "midpoint",
    V.firstQuartile = "firstquartile",
    V.thirdQuartile = "thirdquartile",
    V.complete = "complete",
    V.mute = "mute",
    V.unmute = "unmute",
    V.pause = "pause",
    V.rewind = "rewind",
    V.resume = "resume",
    V.fullscreen = "fullscreen",
    V.exitFullscreen = "exitfullscreen",
    V.expand = "expand",
    V.collapse = "collapse",
    V.close = "close",
    V.acceptInvitation = "acceptinvitation",
    V.adCanPlay = "adCanPlay",
    V.adStarted = "adStarted",
    V.abandon = "abandon",
    V.acceptInvitationLinear = "acceptinvitationlinear",
    V.engagedView = "engagedview",
    V.instreamAdComplete = "instreamAdComplete",
    V.skipShown = "skipshown",
    V.skippableStateChanged = "skippableStateChanged",
    V.skip = "skip",
    V.progress = "progress",
    V.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP",
    V.annotation_start = "annotation_start",
    V.annotation_click = "annotation_click",
    V.annotation_close = "annotation_close",
    V.cta_annotation_shown = "cta_annotation_shown",
    V.cta_annotation_clicked = "cta_annotation_clicked",
    V.cta_annotation_closed = "cta_annotation_closed",
    V.replay = "replay",
    V.stop = "stop",
    V.autoplayDisallowed = "autoplayDisallowed",
    V.error = "error",
    V.mediaLoadTimeout = "mediaLoadTimeout",
    V.linearChanged = "linearChanged",
    V.click = "click",
    V.contentPauseRequested = "contentPauseRequested",
    V.contentResumeRequested = "contentResumeRequested",
    V.discardAdBreak = "discardAdBreak",
    V.updateAdsRenderingSettings = "updateAdsRenderingSettings",
    V.durationChange = "durationChange",
    V.expandedChanged = "expandedChanged",
    V.autoClose = "autoClose",
    V.userClose = "userClose",
    V.userRecall = "userRecall",
    V.prefetched = "prefetched",
    V.loaded = "loaded",
    V.init = "init",
    V.allAdsCompleted = "allAdsCompleted",
    V.adMetadata = "adMetadata",
    V.adBreakReady = "adBreakReady",
    V.adBreakFetchError = "adBreakFetchError",
    V.log = "log",
    V.volumeChange = "volumeChange",
    V.companionBackfill = "companionBackfill",
    V.companionInitialized = "companionInitialized",
    V.companionImpression = "companionImpression",
    V.companionClick = "companionClick",
    V.impression = "impression",
    V.interaction = "interaction",
    V.adProgress = "adProgress",
    V.adBuffering = "adBuffering",
    V.trackingUrlPinged = "trackingUrlPinged",
    V.measurable_impression = "measurable_impression",
    V.custom_metric_viewable = "custom_metric_viewable",
    V.viewable_impression = "viewable_impression",
    V.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression",
    V.audio_audible = "audio_audible",
    V.audio_measurable = "audio_measurable",
    V.overlay_resize = "overlay_resize",
    V.overlay_unmeasurable_impression = "overlay_unmeasurable_impression",
    V.overlay_unviewable_impression = "overlay_unviewable_impression",
    V.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression",
    V.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression",
    V.externalActivityEvent = "externalActivityEvent",
    V.adEvent = "adEvent",
    V.configure = "configure",
    V.remainingTime = "remainingTime",
    V.destroy = "destroy",
    V.resize = "resize",
    V.volume = "volume",
    V.authorIconClicked = "videoAuthorIconClicked",
    V.authorNameClicked = "videoAuthorClicked",
    V.videoClicked = "videoClicked",
    V.videoIconClicked = "videoIconClicked",
    V.learnMoreClicked = "videoLearnMoreClicked",
    V.muteClicked = "videoMuteClicked",
    V.titleClicked = "videoTitleClicked",
    V.videoSkipClicked = "SKIPPED",
    V.unmuteClicked = "videoUnmuteClicked",
    V.vpaidEvent = "vpaidEvent",
    V.show_ad = "show_ad",
    V.video_card_endcap_collapse = "video_card_endcap_collapse",
    V.video_card_endcap_dismiss = "video_card_endcap_dismiss",
    V.video_card_endcap_impression = "video_card_endcap_impression",
    V.mediaUrlPinged = "mediaUrlPinged",
    V.breakStart = "breakstart",
    V.breakEnd = "breakend",
    V.omidReady = "omidReady",
    V.omidUnavailable = "omidUnavailable",
    V.omidAdSessionCompleted = "omidAdSessionCompleted",
    V.omidAdSessionAbandoned = "omidAdSessionAbandoned",
    V.verificationNotExecuted = "verificationNotExecuted",
    V.loadStart = "loadStart",
    V.seeked = "seeked",
    V.seeking = "seeking",
    V);
    var wH = new function() {
        this.l = 0;
        this.g = new Map;
        this.j = typeof window !== "undefined" && window.fetch != null
    }
    ;
    function xH(a) {
        var b = b === void 0 ? wH : b;
        var c = c === void 0 ? null : c;
        a = new YB(a,c ? c : c);
        var d = d === void 0 ? !1 : d;
        var e = e === void 0 ? !1 : e;
        a.g != null || e ? CC(b, a.url, d, e, a.g) : CC(b, a.url, d)
    }
    ;var W = function() {
        this.l = Math.random() < .01;
        this.j = Math.floor(Math.random() * 4503599627370496);
        this.g = null
    };
    W.prototype.report = function(a, b, c) {
        b = b === void 0 ? {} : b;
        if (y.G_testRunner == null && (this.l || (c === void 0 ? 0 : c))) {
            b.lid = a;
            lH() && (b.sdkv = lH());
            this.g && (b.palv = this.g);
            a = SA().sort().join(",");
            Jc(Ed(a)) || (b.e = a);
            b = yH(this, b);
            var d = new O("https://pagead2.googlesyndication.com/pagead/gen_204");
            Yb(b, function(e, f) {
                e != null && Iz(d, f, e == null ? "" : typeof e === "boolean" ? e ? "t" : "f" : "" + e)
            }, this);
            b = d.toString();
            a = Jz(d, "url");
            a != null && bd() && b.length > 2083 && (b = uH(d, a));
            xH(b)
        }
    }
    ;
    var yH = function(a, b) {
        b.id = "ima_html5";
        var c = ze();
        var d = document;
        c = new O(c.parent === c ? c.location.href : d.referrer);
        b.c = a.j;
        b.domain = c.g;
        return b
    };
    W.getInstance = function() {
        return E(W)
    }
    ;
    function zH(a) {
        var b = Date.now()
          , c = {};
        a = (c["x-afma-token-requester-type"] = a,
        c);
        c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(tH());
        return (new rC).get({
            url: c,
            withCredentials: !0,
            timeout: new WB,
            headers: a
        }).then(function(d) {
            var e = Date.now();
            d = d.newToken || "";
            var f = {};
            W.getInstance().report(182, (f.t = e - b,
            f.aos = tH(),
            f));
            return new AH(d)
        }).catch(function(d) {
            var e = "not instanceof Error";
            d instanceof Error && (e = ZB(Number(d.message)));
            d = Date.now();
            var f = {};
            W.getInstance().report(182, (f.except = e,
            f.t = d - b,
            f));
            return Promise.resolve(BH)
        })
    }
    var CH = function() {
        N.call(this);
        this.g = null;
        this.o = new bC(this);
        Rm(this, this.o);
        this.j = new us(72E5);
        this.l = Promise.resolve(BH)
    };
    v(CH, N);
    var DH = function(a) {
        var b = "requester_type_8";
        b = b === void 0 ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.l = zH(b).then(c);
        a.j = new us(72E5);
        a.o.listen(a.j, "tick", function() {
            a.l = zH(b).then(c)
        });
        a.j.start();
        Qm(a, function() {
            a.j.stop()
        })
    };
    CH.prototype.getId = function() {
        var a = this;
        return Ka(function(b) {
            if (b.g == 1)
                return a.g != null && a.g !== BH ? (b.g = 2,
                b = void 0) : b = za(b, a.l, 3),
                b;
            b.g != 2 && (a.g = b.j);
            return b.return(a.g)
        })
    }
    ;
    var AH = function(a) {
        this.id = a
    }
      , BH = new AH("");
    var EH = function(a, b, c, d, e) {
        this.name = a;
        this.type = b;
        this.data = c;
        this.id = d;
        this.g = e
    }
      , FH = function(a) {
        N.call(this);
        this.o = [];
        this.j = !1;
        this.l = a || "goog_" + Fd++
    };
    v(FH, N);
    FH.prototype.connect = function() {
        for (this.j = !0; this.o.length !== 0; ) {
            var a = this.o.shift();
            a && this.sendMessage(a)
        }
    }
    ;
    var GH = function(a, b, c, d, e, f) {
        a.j ? a.sendMessage(new EH(b,c,d,e,f)) : a.o.push(new EH(b,c,d,e,f))
    };
    FH.prototype.sendMessage = function() {}
    ;
    var HH = function(a, b, c, d, e, f) {
        e = e === void 0 ? "" : e;
        f = f === void 0 ? "" : f;
        tr.call(this, a);
        this.messageType = b;
        this.qa = c;
        this.wc = d;
        this.origin = e;
        this.id = f
    };
    v(HH, tr);
    HH.prototype.getId = function() {
        return this.id
    }
    ;
    HH.prototype.toString = function() {
        return ""
    }
    ;
    var IH = {
        IMAGE: "Image",
        FLASH: "Flash",
        ALL: "All"
    }
      , JH = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    }
      , KH = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch",
        SELECT_FLUID: "SelectFluid"
    }
      , LH = {
        bi: "DisallowResize",
        bj: "ResizeSmaller"
    }
      , MH = function() {
        this.allowCustom = !0;
        this.creativeType = this.resourceType = "All";
        this.sizeCriteria = "SelectExactMatch";
        this.nearMatchPercent = 90;
        this.adSlotIds = [];
        this.ld = "DisallowResize"
    };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", IH);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", JH);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", KH);
    var OH = function(a, b) {
        b = b === void 0 ? new MH : b;
        this.g = a;
        this.settings = b ? b : new MH;
        this.resourceType = NH(JH, this.settings.resourceType) ? this.settings.resourceType : "All";
        this.creativeType = NH(IH, this.settings.creativeType) ? this.settings.creativeType : "All";
        this.sizeCriteria = NH(KH, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
        this.ld = NH(LH, this.settings.ld) ? this.settings.ld : "DisallowResize";
        this.adSlotIds = this.settings.adSlotIds != null ? this.settings.adSlotIds : [];
        this.nearMatchPercent = typeof this.settings.nearMatchPercent === "number" && this.settings.nearMatchPercent > 0 && this.settings.nearMatchPercent <= 100 ? this.settings.nearMatchPercent : 90
    }
      , RH = function(a, b) {
        var c = [];
        b.forEach(function(d) {
            a.settings.allowCustom && (!Jc(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && PH(a, d) ? c.push(d) : (d = QH(a, d),
            d != null && !Jc(d.getContent()) && c.push(d)))
        });
        return c
    };
    OH.prototype.Te = function() {
        return this.resourceType
    }
    ;
    var PH = function(a, b) {
        var c;
        if (c = b.getContentType() !== "Flash") {
            if (c = a.resourceType === "All" || a.resourceType === b.Te())
                c = b.getContentType(),
                c = c == null ? !0 : a.creativeType === "All" || a.creativeType === c;
            c && (c = b.getAdSlotId(),
            c = a.adSlotIds.length === 0 ? !0 : c != null ? a.adSlotIds.includes(c) : !1)
        }
        if (c)
            if (c = b.getSize(),
            (b = !!b.data.fluidSize) || a.g.Re)
                a = b && a.g.Re;
            else if (a.sizeCriteria === "IgnoreSize" || qe(a.g.size, c))
                a = !0;
            else {
                if (b = a.sizeCriteria === "SelectNearMatch")
                    a.ld === "ResizeSmaller" ? (c.width <= a.g.size.width && c.height <= a.g.size.height ? b = c : (b = a.g.size,
                    b = Math.min(b.width / c.width, b.height / c.height),
                    b = new pe(b * c.width,b * c.height)),
                    c = b,
                    b = c.width,
                    c = c.height) : (b = c.width,
                    c = c.height),
                    b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            }
        else
            a = !1;
        return a
    }
      , QH = function(a, b) {
        b = SH(b);
        return b == null ? null : b.find(function(c) {
            return PH(a, c)
        }) || null
    }
      , NH = function(a, b) {
        return b != null && gc(a, b)
    };
    function TH(a) {
        var b = new Xt;
        var c = a.qc;
        var d = c.clientWidth;
        var e = c.clientHeight;
        typeof c.getBoundingClientRect === "function" && Ee(te(c), c) ? (c = c.getBoundingClientRect(),
        d = document.elementsFromPoint(c.x + .5 * d, c.y + .5 * e)) : d = [];
        if (d = UH(d, a)) {
            a = new Wt;
            c = d.getBoundingClientRect();
            e = c.y;
            c = c.x;
            var f = new Ut;
            e = fj(f, 1, e);
            e = fj(e, 2, c);
            c = d.duration;
            var g = d.clientWidth;
            f = d.clientHeight;
            var h = new Vt;
            g = fj(h, 1, g);
            f = fj(g, 2, f);
            c === Number.POSITIVE_INFINITY || isNaN(c) || (g = new Tt,
            c = ej(g, 1, c),
            H(a, 3, c));
            d = Number(window.getComputedStyle(d).opacity);
            e = H(a, 1, e).setSize(f);
            ej(e, 4, d);
            b = H(b, 2, a)
        } else
            a = new Wt,
            b = H(b, 2, a);
        return b
    }
    function UH(a, b) {
        if (a.length === 0)
            return null;
        var c = b.ga.g, d, e, f = (e = (d = b.Aa) == null ? void 0 : d.g) != null ? e : null;
        a = a.filter(function(g) {
            return g.tagName === "VIDEO" && !g.isEqualNode(c) && !g.isEqualNode(f)
        });
        return a.length > 0 ? a[0] : null
    }
    ;var VH = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    VH.prototype.getErrorCode = function() {
        return this.errorCode
    }
    ;
    VH.prototype.getMessage = function() {
        return this.message
    }
    ;
    var WH = new VH("Failed to initialize ad playback element before starting ad playback.",400)
      , XH = new VH("The provided {0} information: {1} is invalid.",1101);
    function YH(a, b) {
        var c = b === void 0 ? null : b;
        var d = La.apply(2, arguments);
        if (!(c instanceof nG)) {
            var e = a.getErrorCode()
              , f = a.getMessage();
            if (d.length > 0)
                for (var g = 0; g < d.length; g++)
                    f = f.replace(new RegExp("\\{" + g + "\\}","ig"), d[g]);
            d = new nG("adPlayError",f,e);
            d.g = c;
            c = d
        }
        return c
    }
    ;function ZH(a, b, c) {
        b = b === void 0 ? window : b;
        c = c === void 0 ? function() {}
        : c;
        try {
            return b.localStorage.getItem(a)
        } catch (d) {
            return c(d),
            null
        }
    }
    function $H(a, b, c) {
        var d = window;
        d = d === void 0 ? window : d;
        c = c === void 0 ? function() {}
        : c;
        return Ti(b, 5) ? ZH(a, d, c) : null
    }
    function aI(a, b, c, d) {
        c = c === void 0 ? window : c;
        d = d === void 0 ? function() {}
        : d;
        try {
            return c.localStorage.setItem(a, b),
            !0
        } catch (e) {
            d(e)
        }
        return !1
    }
    function bI(a, b, c, d) {
        var e = window;
        e = e === void 0 ? window : e;
        d = d === void 0 ? function() {}
        : d;
        return Ti(c, 5) ? aI(a, b, e, d) : !1
    }
    function cI(a, b, c) {
        b = b === void 0 ? window : b;
        c = c === void 0 ? function() {}
        : c;
        try {
            b.localStorage.removeItem(a)
        } catch (d) {
            c(d)
        }
    }
    function dI(a, b, c, d) {
        c = c === void 0 ? window : c;
        d = d === void 0 ? function() {}
        : d;
        Ti(b, 5) && cI(a, c, d)
    }
    function eI(a, b) {
        a = a === void 0 ? window : a;
        try {
            return a.localStorage.length
        } catch (c) {
            (b === void 0 ? function() {}
            : b)(c)
        }
        return null
    }
    function fI(a) {
        var b = b === void 0 ? window : b;
        var c = c === void 0 ? function() {}
        : c;
        return Ti(a, 5) ? eI(b, c) : null
    }
    function gI(a, b, c) {
        b = b === void 0 ? window : b;
        c = c === void 0 ? function() {}
        : c;
        try {
            return b.localStorage.key(a)
        } catch (d) {
            c(d)
        }
        return null
    }
    function hI(a, b) {
        var c = c === void 0 ? window : c;
        var d = d === void 0 ? function() {}
        : d;
        return Ti(b, 5) ? gI(a, c, d) : null
    }
    function iI(a, b) {
        a = a === void 0 ? window : a;
        b = b === void 0 ? function() {}
        : b;
        try {
            return Object.keys(a.localStorage)
        } catch (c) {
            b(c)
        }
        return null
    }
    function jI(a) {
        var b = b === void 0 ? window : b;
        var c = c === void 0 ? function() {}
        : c;
        return Ti(a, 5) ? iI(b, c) : null
    }
    ;function kI(a) {
        return kg(a, 3)
    }
    ;var lI = {
        og: [],
        mg: 0,
        ug: [],
        Qj: !1
    };
    var mI = function() {};
    mI.getInstance = function() {
        throw Error("Must be overridden");
    }
    ;
    var nI = function() {
        this.g = 0
    };
    v(nI, mI);
    nI.zb = void 0;
    nI.getInstance = function() {
        return nI.zb ? nI.zb : nI.zb = new nI
    }
    ;
    function oI(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? {} : d;
        var e = nI.getInstance();
        e.g === 0 && (e.g = Math.random() < .001 ? 2 : 1);
        e.g === 2 && (e = {},
        Wf(Object.assign({}, (e.c = String(a),
        e.pc = String(Af()),
        e.em = c,
        e.lid = b,
        e.eids = fu().join(),
        e), d), "esp"))
    }
    ;function pI() {
        var a = window;
        var b = b === void 0 ? function() {}
        : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                Te(a, "load", d)
            };
            Se(a, "load", d)
        }
        )
    }
    ;var qI = function() {
        this.cache = {}
    }
      , sI = function() {
        rI || (rI = new qI);
        return rI
    }
      , tI = function(a) {
        var b = Rv(bj(a));
        if (!b)
            return 3;
        if (Si(a, 2) === void 0)
            return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    qI.prototype.get = function(a, b, c) {
        function d(k) {
            oI(6, a, k == null ? void 0 : k.message);
            e = !0
        }
        if (this.cache[a])
            return {
                ca: this.cache[a],
                success: !0
            };
        var e = !1
          , f = "_GESPSK-" + a;
        b = c ? ZH(f, window, d) : $H(f, b, d);
        if (e)
            return {
                ca: null,
                success: !1
            };
        if (!b)
            return {
                ca: null,
                success: !0
            };
        try {
            var g = Kt(b);
            this.cache[a] = g;
            return {
                ca: g,
                success: !0
            }
        } catch (k) {
            var h;
            oI(5, a, (h = k) == null ? void 0 : h.message);
            return {
                ca: null,
                success: !1
            }
        }
    }
    ;
    qI.prototype.set = function(a, b, c) {
        function d(g) {
            oI(7, e, g == null ? void 0 : g.message)
        }
        var e = Xe(Si(a, 1))
          , f = "_GESPSK-" + e;
        Jt(a);
        if (c ? !aI(f, a.da(), window, d) : !bI(f, a.da(), b, d))
            return !1;
        this.cache[e] = a;
        return !0
    }
    ;
    qI.prototype.remove = function(a, b, c) {
        function d(e) {
            oI(8, a, e == null ? void 0 : e.message)
        }
        c ? cI("_GESPSK-" + a, window, d) : dI("_GESPSK-" + a, b, window, d);
        delete this.cache[a]
    }
    ;
    var rI = null;
    var uI = function(a) {
        var b = new Map;
        a = x(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = c.value;
            c = d.l();
            var e = void 0
              , f = (e = b.get(c)) != null ? e : new Map;
            d = x(d.j());
            for (e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var g = e.l();
                f.has(g) || f.set(g, []);
                f.get(g).push(e)
            }
            b.set(c, f)
        }
        this.g = b
    }
      , vI = function(a, b, c) {
        var d, e, f;
        return !!((d = a.g) == null ? 0 : (e = d.get(c)) == null ? 0 : (f = e.get(b)) == null ? 0 : f.some(function(g) {
            return g.j()
        }))
    }
      , wI = function(a, b) {
        a = x(a.g.values());
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = void 0;
            if ((d = c.value.get(b)) == null ? 0 : d.some(function(e) {
                return e.j()
            }))
                return !0
        }
        return !1
    }
      , yI = function(a, b) {
        return xI(a, b, function(c) {
            return c.j()
        })
    }
      , xI = function(a, b, c) {
        var d = new Set;
        a = a.g.get(b);
        if (!a)
            return d;
        a = x(a.entries());
        for (b = a.next(); !b.done; b = a.next()) {
            var e = x(b.value);
            b = e.next().value;
            e = e.next().value;
            e.some(function(f) {
                return c(f)
            }) && d.add(b)
        }
        return d
    };
    function zI(a) {
        var b = new Map;
        oI(56, "", null);
        for (var c = new uI([]), d = Array, e = d.from, f = Set, g = [], h = RegExp("^_GESPSK-(.+)$"), k = fI(a), l, n = 0; n < ((l = k) != null ? l : 0); n++) {
            var p = hI(n, a);
            p !== null && (p = (h.exec(p) || [])[1]) && g.push(p)
        }
        f = new f(g);
        g = x([]);
        for (h = g.next(); !h.done; h = g.next())
            for (h = x(yI(c, h.value)),
            k = h.next(); !k.done; k = h.next())
                f.add(k.value);
        d = e.call(d, f);
        d = x(d);
        f = d.next();
        for (e = {}; !f.done; e = {
            wb: void 0
        },
        f = d.next())
            if (e.wb = f.value,
            f = void 0,
            (f = b.get(e.wb)) == null || Si(f, 2) == null)
                if (h = g = void 0,
                f = sI().get(e.wb, a, AI(e.wb, (h = (g = void 0) == null ? void 0 : g.split(",")) != null ? h : [], c)).ca)
                    g = tI(f),
                    g !== 2 && g !== 3 && (cj(f, 9, !1),
                    (g = Si(f, 2)) && g.length > 1024 && (h = {},
                    oI(55, e.wb, null, (h.sl = String(g.length),
                    h)),
                    g = f.Pa(Ft(108)),
                    yi(g, 2)),
                    b.set(e.wb, f),
                    f = Si(f, 2),
                    h = g = void 0,
                    k = {},
                    oI(19, e.wb, null, (k.hs = f ? "1" : "0",
                    k.sl = String((h = (g = f) == null ? void 0 : g.length) != null ? h : -1),
                    k)));
        a = new Nt;
        b = x(b);
        for (c = b.next(); !c.done; c = b.next())
            c = x(c.value),
            c.next(),
            c = c.next().value,
            Pi(a, 2, Ht, c);
        if (!Ni(a, Ht, 2).length)
            return null;
        b = {};
        oI(50, "", null, (b.ns = String(Ni(a, Ht, 2).length),
        b));
        return kI(a.j())
    }
    function AI(a, b, c) {
        return b.some(function(d) {
            return vI(c, a, d)
        })
    }
    ;var BI = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, BI.prototype);
        this.name = "InputError"
    };
    v(BI, Error);
    var CI = function() {
        this.pb = !1
    }
      , DI = function() {
        CI.apply(this, arguments);
        this.jd = new yC
    };
    v(DI, CI);
    var EI = function(a, b) {
        a.pb || (a.pb = !0,
        a.hd = b,
        a.jd.resolve(b))
    };
    da.Object.defineProperties(DI.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.jd.promise
            }
        },
        nf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.pb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ae
            }
        }
    });
    var FI = function() {
        DI.apply(this, arguments)
    };
    v(FI, DI);
    var GI = function(a, b) {
        EI(a, b)
    }
      , rM = function(a, b) {
        b.then(function(c) {
            EI(a, c)
        })
    };
    FI.prototype.Pa = function(a) {
        this.pb || (this.pb = !0,
        this.hd = null,
        this.ae = a,
        this.jd.reject(a))
    }
    ;
    var sM = function(a) {
        this.pb = !1;
        this.g = a
    };
    v(sM, CI);
    sM.prototype.nf = function() {
        return this.g.pb
    }
    ;
    da.Object.defineProperties(sM.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.ae
            }
        }
    });
    var tM = function(a) {
        sM.call(this, a);
        this.g = a
    };
    v(tM, sM);
    da.Object.defineProperties(tM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.hd
            }
        }
    });
    var uM = function(a) {
        sM.call(this, a);
        this.g = a
    };
    v(uM, sM);
    da.Object.defineProperties(uM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return (a = this.g.hd) != null ? a : null
            }
        }
    });
    var vM = function() {
        DI.apply(this, arguments)
    };
    v(vM, DI);
    vM.prototype.notify = function() {
        EI(this, null)
    }
    ;
    var wM = function(a, b) {
        b.then(function() {
            a.notify()
        })
    };
    var xM = function() {
        M.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    v(xM, M);
    var yM = function(a, b) {
        a.j.push({
            zc: !1,
            Fd: b
        })
    };
    xM.prototype.zc = function(a) {
        var b = this.j.find(function(c) {
            return c.Fd === a
        });
        b && (b.zc = !0)
    }
    ;
    xM.prototype.O = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        M.prototype.O.call(this)
    }
    ;
    function zM(a, b) {
        var c, d;
        return Ka(function(e) {
            if (e.g == 1)
                return c = b ? a.filter(function(f) {
                    return !f.zc
                }) : a,
                za(e, Promise.all(c.map(function(f) {
                    return f.Fd.promise
                })), 2);
            if (a.length === c.length)
                return e.return();
            d = a.filter(function(f) {
                return f.zc
            });
            return za(e, Promise.race([Promise.all(d.map(function(f) {
                return f.Fd.promise
            })), new Promise(function(f) {
                return void setTimeout(f, b)
            }
            )]), 0)
        })
    }
    var AM = function(a, b, c) {
        M.call(this);
        this.id = a;
        this.A = b;
        this.timeoutMs = c;
        this.B = !1;
        this.g = new xM;
        Rm(this, this.g)
    };
    v(AM, M);
    AM.prototype.start = function() {
        var a = this, b, c;
        return Ka(function(d) {
            if (d.g == 1) {
                if (a.B)
                    return d.return();
                a.B = !0;
                d.l = 2;
                return za(d, zM(a.g.j, (b = a.P) != null ? b : a.timeoutMs), 4)
            }
            if (d.g != 2) {
                if (!a.Da()) {
                    for (var e = 0, f = x(a.g.l), g = f.next(); !g.done; g = f.next()) {
                        if (g.value.g.hd == null)
                            throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    a.j()
                }
                return Aa(d, 0)
            }
            c = Da(d);
            if (a.Da())
                return d.return();
            c instanceof BI ? a.D(c) : c instanceof Error && (a.A.qb({
                methodName: a.id,
                Wb: c
            }),
            a.o(c));
            d.g = 0
        })
    }
    ;
    var BM = function(a) {
        var b = b === void 0 ? new FI : b;
        a.g.g.push(b);
        return b
    }
      , CM = function(a, b) {
        yM(a.g, b);
        b = new tM(b);
        a.g.l.push(b);
        return b
    };
    AM.prototype.D = function() {}
    ;
    AM.prototype.o = function(a) {
        if (this.g.g.length)
            for (var b = new BI(a.message), c = x(this.g.g), d = c.next(); !d.done; d = c.next())
                if (d = d.value,
                !d.nf) {
                    var e = b;
                    d.pb = !0;
                    d.ae = e;
                    d.jd.reject(e)
                }
        if (!(a instanceof BI)) {
            var f;
            (f = console) == null || f.error(a)
        }
    }
    ;
    var DM = function(a, b, c, d, e) {
        AM.call(this, a, c);
        this.f = b;
        this.C = e;
        a = {};
        d = x(Object.entries(d));
        for (b = d.next(); !b.done; b = d.next())
            if (c = x(b.value),
            b = c.next().value,
            c = c.next().value)
                yM(this.g, c),
                a[b] = new uM(c);
        this.l = a
    };
    v(DM, AM);
    DM.prototype.j = function() {
        for (var a = this.f, b = a.apply, c = {}, d = x(Object.entries(this.l)), e = d.next(); !e.done; e = d.next()) {
            var f = x(e.value);
            e = f.next().value;
            f = f.next().value;
            c[e] = f.value
        }
        a = b.call(a, this, [c].concat(pa(this.C)));
        EM(this, a)
    }
    ;
    DM.prototype.D = function(a) {
        this.o(a)
    }
    ;
    DM.prototype.reportError = function() {}
    ;
    var FM = function(a, b) {
        if (a.B)
            throw Error("Invalid operation: producer has already started");
        yM(a.g, b);
        return a
    };
    var GM = function(a, b, c, d, e, f, g) {
        DM.call(this, a, b, c, d, g);
        this.yb = f;
        this.finished = new vM;
        a = Object.keys(e);
        a = x(a);
        for (b = a.next(); !b.done; b = a.next())
            this[b.value] = BM(this)
    };
    v(GM, DM);
    var EM = function(a, b) {
        b = x(Object.entries(b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = x(c.value);
            c = d.next().value;
            d = d.next().value;
            d instanceof Error && a[c].Pa(d);
            EI(a[c], d)
        }
        a.finished.notify()
    };
    GM.prototype.o = function(a) {
        this.yb ? EM(this, this.yb(a)) : DM.prototype.o.call(this, a)
    }
    ;
    function HM(a, b) {
        a.id = b.id;
        a.Ob = b.Ob;
        a.yb = b.yb;
        return a
    }
    function IM(a, b, c) {
        return new GM(a.id,a,b,c,a.Ob,a.yb,La.apply(3, arguments))
    }
    ;var JM = function(a) {
        M.call(this);
        this.G = a;
        this.B = [];
        this.D = [];
        this.C = {};
        this.j = [];
        this.l = new yC;
        this.o = {}
    };
    v(JM, M);
    var KM = function(a, b) {
        Rm(a, b);
        a.B.push(b);
        return b
    };
    JM.prototype.g = function(a, b) {
        return KM(this, IM.apply(null, [a, this.G, b].concat(pa(La.apply(2, arguments)))))
    }
    ;
    var LM = function(a) {
        var b, c, d, e, f, g, h, k, l, n, p, r;
        Ka(function(t) {
            switch (t.g) {
            case 1:
                if (!a.j.length) {
                    t.g = 2;
                    break
                }
                return za(t, Promise.all(a.j.map(function(u) {
                    return u.l.promise
                })), 2);
            case 2:
                b = x(a.B);
                for (c = b.next(); !c.done; c = b.next())
                    d = c.value,
                    d.start();
                e = x(a.D);
                for (f = e.next(); !f.done; f = e.next())
                    g = f.value,
                    LM(g);
                if (!a.o) {
                    t.g = 4;
                    break
                }
                h = Object.keys(a.o);
                if (!h.length) {
                    t.g = 4;
                    break
                }
                return za(t, Promise.all(Object.values(a.o).map(function(u) {
                    return u.promise
                })), 6);
            case 6:
                for (k = t.j,
                l = 0,
                n = x(h),
                p = n.next(); !p.done; p = n.next())
                    r = p.value,
                    a.C[r] = k[l++];
            case 4:
                return a.l.resolve(a.C),
                t.return(a.l.promise)
            }
        })
    };
    JM.prototype.O = function() {
        M.prototype.O.call(this);
        this.B.length = 0;
        this.D.length = 0;
        this.j.length = 0
    }
    ;
    var NM = HM(MM, {
        id: 1041,
        Ob: {}
    });
    function MM(a, b) {
        sI().set(a.ca, a.jb, b) && Si(a.ca, 2) != null && oI(27, Xe(Si(a.ca, 1)));
        return {}
    }
    ;var OM = function(a, b, c) {
        AM.call(this, 1094, c);
        var d = d === void 0 ? new vM : d;
        this.g.g.push(d);
        this.l = d;
        this.G = CM(this, a);
        b && (this.C = CM(this, b))
    };
    v(OM, AM);
    OM.prototype.j = function() {
        var a = this.G.value;
        if (this.C)
            for (var b = x(this.C.value), c = b.next(); !c.done; c = b.next()) {
                c = x(c.value.j());
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value,
                    d.j() && sI().remove(d.l(), a, !0)
            }
        if (Ti(a, 5)) {
            if (a) {
                var e;
                b = (e = jI(a)) != null ? e : [];
                e = x(b);
                for (b = e.next(); !b.done; b = e.next())
                    b = b.value,
                    b.startsWith("_GESPSK") && dI(b, a)
            }
            rI = new qI;
            this.l.notify()
        }
    }
    ;
    var PM = function(a, b) {
        AM.call(this, 1048, b);
        this.l = BM(this);
        this.C = BM(this);
        this.G = CM(this, a)
    };
    v(PM, AM);
    PM.prototype.j = function() {
        var a = this.G.value
          , b = function(c) {
            var d = {};
            oI(c, Xe(Si(a, 1)), null, (d.tic = String(Math.round((Date.now() - Xe(Rv(bj(a)))) / 6E4)),
            d))
        };
        switch (tI(a)) {
        case 0:
            b(24);
            break;
        case 1:
            b(25);
            EI(this.C, a);
            break;
        case 2:
            b(26);
            EI(this.l, a);
            break;
        case 3:
            oI(9, Xe(Si(a, 1)));
            EI(this.l, a);
            break;
        case 4:
            b(23),
            EI(this.l, a)
        }
    }
    ;
    var QM = function(a, b, c, d) {
        AM.call(this, 1027, d);
        this.Ec = a;
        this.G = b;
        this.C = c;
        this.ka = BM(this);
        this.l = BM(this)
    };
    v(QM, AM);
    QM.prototype.j = function() {
        var a = sI().get(this.Ec, this.C, this.G).ca;
        if (!a) {
            a = Jt(It(this.Ec));
            var b = this.l
              , c = a.Pa(Ft(100));
            EI(b, c)
        }
        EI(this.ka, a)
    }
    ;
    var SM = HM(RM, {
        id: 1046,
        Ob: {
            ka: void 0
        }
    });
    function RM(a) {
        return {
            ka: a.Ch
        }
    }
    ;var TM = function(a, b, c) {
        AM.call(this, 1047, c);
        this.collectorFunction = a;
        this.ka = BM(this);
        this.l = BM(this);
        this.C = BM(this);
        this.G = CM(this, b)
    };
    v(TM, AM);
    TM.prototype.j = function() {
        var a = this
          , b = this.G.value
          , c = Xe(Si(b, 1));
        oI(18, c);
        try {
            var d = Xk();
            this.collectorFunction().then(function(e) {
                oI(29, c, null, {
                    delta: String(Xk() - d)
                });
                var f = a.ka
                  , g = gj(b, 2, e);
                EI(f, g);
                EI(a.C, e != null ? e : null)
            }).catch(function(e) {
                oI(28, c, UM(e));
                e = a.l;
                var f = b.Pa(Ft(106));
                EI(e, f)
            })
        } catch (e) {
            oI(1, c, UM(e)),
            GI(this.l, b.Pa(Ft(107)))
        }
    }
    ;
    function UM(a) {
        return typeof a === "string" ? a : a instanceof Error ? a.message : null
    }
    ;var WM = HM(VM, {
        id: 1028,
        Ob: {
            ka: void 0
        }
    });
    function VM(a) {
        var b = Xe(Si(a.ca, 1));
        Qi(a.ca, 3) != null || oI(35, b);
        return {
            ka: a.ca
        }
    }
    ;var YM = HM(XM, {
        id: 1050,
        Ob: {
            ka: void 0
        }
    });
    function XM(a, b) {
        var c = Xe(Si(a.ca, 1));
        if (a.signal == null)
            return oI(41, c),
            a.ca.Pa(Ft(111)),
            {
                ka: a.ca
            };
        if (typeof a.signal !== "string")
            return oI(21, c),
            {
                ka: a.ca.Pa(Ft(113))
            };
        if (a.signal.length > b)
            return b = {},
            oI(12, c, null, (b.sl = String(a.signal.length),
            b)),
            c = a.ca.Pa(Ft(108)),
            yi(c, 2),
            {
                ka: a.ca
            };
        a.signal.length || oI(20, c);
        yi(a.ca, 10);
        return {
            ka: a.ca
        }
    }
    ;var ZM = function(a) {
        this.output = new vM;
        wM(this.output, a)
    };
    var $M = function(a) {
        ZM.call(this, a)
    };
    v($M, ZM);
    var aN = function(a, b, c, d, e) {
        JM.call(this, e, 2);
        this.A = new FI;
        var f = KM(this, new QM(a,b,d,e))
          , g = new FI;
        EI(g, d);
        this.g(NM, {
            ca: f.l,
            jb: g
        }, b);
        d = this.g(WM, {
            ca: f.ka
        });
        f = KM(this, new PM(d.ka,e));
        d = KM(this, new TM(c,f.l,e));
        this.g(NM, {
            ca: d.l,
            jb: g
        }, b);
        d = this.g(YM, {
            ca: d.ka,
            signal: d.C
        }, 1024);
        this.g(NM, {
            ca: d.ka,
            jb: g
        }, b);
        var h = new $M(pI());
        f = FM(this.g(SM, {
            Ch: f.C
        }), h.output);
        c = KM(this, new TM(c,f.ka,e));
        this.g(NM, {
            ca: c.ka,
            jb: g
        }, b);
        b = d.ka.promise.then(function(k) {
            var l;
            if (k == null)
                k = void 0;
            else {
                var n;
                k = (n = Si(k, 2)) != null ? n : void 0
            }
            return {
                id: a,
                collectorGeneratedData: (l = k) != null ? l : null
            }
        }).catch(function() {
            return {
                id: a,
                collectorGeneratedData: null
            }
        });
        rM(this.A, b)
    };
    v(aN, JM);
    var bN = function(a, b, c, d, e, f) {
        f = f === void 0 ? lI : f;
        AM.call(this, 1059, e);
        this.H = b;
        this.G = f;
        this.C = BM(this);
        this.K = CM(this, a);
        this.l = CM(this, c);
        this.M = d ? CM(this, d) : void 0
    };
    v(bN, AM);
    bN.prototype.j = function() {
        var a, b, c = new uI((b = (a = this.M) == null ? void 0 : a.value) != null ? b : []);
        b = this.K.value;
        var d = b.id;
        a = b.collectorFunction;
        var e;
        b = Xe((e = b.networkCode) != null ? e : d);
        c = !!d && !!wI(c, d);
        if (Ti(this.l.value, 5) || c)
            e = {},
            oI(42, b, null, (e.ea = String(Number(this.H)),
            e)),
            c = new aN(b,c,a,this.l.value,this.A,this.G),
            LM(c),
            rM(this.C, c.A.promise)
    }
    ;
    var cN = function(a, b, c) {
        c = c === void 0 ? lI : c;
        AM.call(this, 1057, b);
        this.l = a;
        this.H = c;
        this.C = BM(this);
        this.G = BM(this)
    };
    v(cN, AM);
    cN.prototype.j = function() {
        if (this.l)
            if (typeof this.l !== "object")
                oI(46, "UNKNOWN_COLLECTOR_ID"),
                dN(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id
                  , b = this.l.networkCode;
                a && b && (delete this.l.id,
                oI(47, a + ";" + b));
                a = b != null ? b : a;
                typeof a !== "string" ? (b = {},
                oI(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a),
                b)),
                dN(this, "INVALID_COLLECTOR_ID", 102)) : typeof this.l.collectorFunction !== "function" ? (oI(14, a),
                dN(this, a, 105)) : this.H.ug.includes(a) ? (oI(22, a),
                dN(this, a, 104)) : EI(this.G, this.l)
            }
        else
            oI(39, "UNKNOWN_COLLECTOR_ID"),
            dN(this, "UNKNOWN_COLLECTOR_ID", 110)
    }
    ;
    var dN = function(a, b, c) {
        a = a.C;
        b = It(b).Pa(Ft(c));
        EI(a, b)
    };
    var fN = function(a, b, c, d, e, f) {
        var g = document;
        g = g === void 0 ? document : g;
        f = f === void 0 ? lI : f;
        this.l = b;
        this.B = c;
        this.A = g;
        this.D = d;
        this.C = e;
        this.j = f;
        this.L = [];
        this.I = [];
        this.g = new eN;
        this.o = 0;
        a = x(a);
        for (b = a.next(); !b.done; b = a.next())
            this.push(b.value)
    };
    fN.prototype.push = function(a) {
        this.B || this.D();
        var b = new JM(this.g,3);
        a = KM(b, new cN(a,this.g,this.j));
        b.g(NM, {
            ca: a.C,
            jb: this.l
        }, void 0);
        a = KM(b, new bN(a.G,this.B,this.l,void 0,this.g,this.j));
        LM(b);
        b = a.C.promise;
        this.L.push(b);
        a = x(this.I);
        for (var c = a.next(); !c.done; c = a.next())
            b.then(c.value)
    }
    ;
    fN.prototype.addOnSignalResolveCallback = function(a) {
        this.I.push(a);
        for (var b = x(this.L), c = b.next(); !c.done; c = b.next())
            c.value.then(a)
    }
    ;
    var gN = function(a, b) {
        a.g.g.push(b)
    };
    fN.prototype.clearAllCache = function() {
        var a = this
          , b = this.A.currentScript instanceof HTMLScriptElement ? this.A.currentScript.src : "";
        if (this.o === 1) {
            var c = {};
            oI(49, "", null, (c.url = b,
            c))
        } else if (this.j.og.includes(String(uf(b != null ? b : ""))))
            c = {},
            oI(48, "", null, (c.url = b,
            c));
        else {
            this.C && this.C();
            var d = new JM(this.g,4);
            c = new OM(this.l,void 0,this.g);
            KM(d, c);
            LM(d);
            this.o = 1;
            setTimeout(function() {
                a.o = 0
            }, this.j.mg * 1E3);
            d = {};
            oI(43, "", null, (d.url = b,
            d));
            return c.l.promise
        }
    }
    ;
    var eN = function() {
        this.g = []
    };
    eN.prototype.qb = function(a) {
        this.g.forEach(function(b) {
            return void b.qb(a)
        })
    }
    ;
    var hN = function(a) {
        this.push = function(b) {
            a.push(b)
        }
        ;
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        }
        ;
        this.addErrorHandler = function(b) {
            gN(a, {
                qb: function(c) {
                    return void b(c.methodName, c.Wb)
                }
            })
        }
        ;
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    function iN(a, b, c, d, e, f, g) {
        g = g === void 0 ? lI : g;
        if (!jN(a, "encryptedSignalProviders", c, f) || !jN(a, "secureSignalProviders", c, f)) {
            oI(38, "");
            var h = {
                qb: function(k) {
                    return void c(k.methodName, k.Wb)
                }
            };
            kN(a, "encryptedSignalProviders", b, g, h, d, e, f);
            kN(a, "secureSignalProviders", b, g, h, function() {}, e, f)
        }
    }
    function jN(a, b, c, d) {
        if (a[b] === void 0 || a[b]instanceof Array)
            return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }
    function kN(a, b, c, d, e, f, g, h) {
        var k, l = new fN((k = a[b]) != null ? k : [],c,b === "secureSignalProviders",f,g,d);
        a[b] = new hN(l);
        h && l.addOnSignalResolveCallback(h);
        gN(l, e)
    }
    function lN(a, b, c, d, e, f) {
        var g = g === void 0 ? lI : g;
        var h = new FI;
        EI(h, b);
        iN(a, h, c, d, e, f, g)
    }
    function mN(a, b, c, d) {
        var e = nN
          , f = oN
          , g = new Map;
        b = b.map(function(h) {
            var k = h.Ec;
            return new Promise(function(l) {
                g.set(k, l)
            }
            )
        });
        lN(a, c, d, e, f, function(h) {
            var k = h.collectorGeneratedData;
            h = h.id;
            var l;
            return void ((l = g.get(h)) == null ? void 0 : l({
                collectorGeneratedData: k,
                id: h
            }))
        });
        return b
    }
    ;function pN() {
        var a;
        return (a = y.googletag) != null ? a : y.googletag = {
            cmd: []
        }
    }
    ;function qN(a, b) {
        a = RG(a);
        Ti(a, 5) && lN(pN(), a, function() {}, nN, oN, b)
    }
    function rN(a, b) {
        b = RG(b);
        return Ti(b, 5) && a.length !== 0 ? mN(pN(), a, b, function() {}) : null
    }
    function oN() {}
    function nN() {}
    ;var sN = function() {
        var a = {};
        this.g = function(b, c) {
            return a[b] != null ? a[b] : c
        }
        ;
        this.j = function(b, c) {
            return a[b] != null ? a[b] : c
        }
    };
    function tN(a) {
        return E(sN).g(a.g, a.defaultValue)
    }
    function uN(a) {
        return E(sN).j(a.g, a.defaultValue)
    }
    ;function vN(a, b, c, d) {
        var e = new yC
          , f = ""
          , g = function(k) {
            try {
                var l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Te(a, "message", g),
                l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (n) {}
        }
          , h = wN(a);
        return h ? (Se(a, "message", g),
        f = c(h),
        e.promise) : (c = xN(a)) ? (f = String(Math.floor(sf() * 2147483647)),
        Se(a, "message", g),
        b(c, f),
        e.promise) : null
    }
    function yN(a) {
        return vN(a, function(b, c) {
            var d, e;
            return void ((d = (e = b.getGmaQueryInfo) != null ? e : b.getGmaSig) == null ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }
    function zN() {
        var a = window;
        return !!wN(a) || !!xN(a)
    }
    function wN(a) {
        var b;
        if (typeof ((b = a.gmaSdk) == null ? void 0 : b.getQueryInfo) === "function")
            return a.gmaSdk
    }
    function xN(a) {
        var b, c, d, e, f, g;
        if (typeof ((b = a.webkit) == null ? void 0 : (c = b.messageHandlers) == null ? void 0 : (d = c.getGmaQueryInfo) == null ? void 0 : d.postMessage) === "function" || typeof ((e = a.webkit) == null ? void 0 : (f = e.messageHandlers) == null ? void 0 : (g = f.getGmaSig) == null ? void 0 : g.postMessage) === "function")
            return a.webkit.messageHandlers
    }
    (function(a) {
        return Ye(function(b) {
            if (!bf(b))
                return !1;
            for (var c = x(Object.entries(a)), d = c.next(); !d.done; d = c.next()) {
                var e = x(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (e.Vg === !0)
                        continue;
                    return !1
                }
                if (!e(b[d]))
                    return !1
            }
            return !0
        })
    }
    )({
        vc: $e,
        pn: $e,
        eid: cf(),
        vnm: cf(),
        js: $e
    }, "RawGmaSdkStaticSignalObject");
    var BN = function() {
        this.timeoutMs = AN;
        this.j = yN;
        this.signal = null;
        this.g = 0
    }
      , CN = function(a) {
        if (!zN() || !$d && !LB() && !tN(gw))
            return Promise.resolve(null);
        var b;
        return ((b = a.j(window)) != null ? b : Promise.resolve(null)).catch(function() {
            return "0"
        })
    }
      , EN = function(a) {
        var b;
        return Ka(function(c) {
            if (c.g == 1)
                return b = Date.now() - a.g,
                !a.signal || b > 3E5 ? c = za(c, DN(a), 3) : (c.g = 2,
                c = void 0),
                c;
            c.g != 2 && (a.signal = c.j,
            a.g = Date.now());
            return c.return(a.signal)
        })
    }
      , DN = function(a) {
        return Promise.race([CN(a).then(function(b) {
            if (b == null)
                return null;
            a.signal = b.length > 1E4 ? "0" : b;
            a.g = Date.now();
            return a.signal
        }), ws(a.timeoutMs, "0")])
    };
    function ZA(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }
    function FN(a, b) {
        return b && b.toString().indexOf("__REGEXP") === 0 ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/),
        new RegExp(a[1],a[2] || "")) : b
    }
    var IN = function(a, b, c) {
        FH.call(this, b);
        var d = this;
        this.A = a;
        this.g = null;
        this.C = new bC(this);
        this.C.listen(ze(), "message", function(e) {
            try {
                a: {
                    var f = e.Tb
                      , g = GN(f.data);
                    if (HN(d, g)) {
                        if (d.g === null)
                            d.g = f.source,
                            d.j || d.connect();
                        else if (d.g !== f.source)
                            break a;
                        HN(d, g) && d.dispatchEvent(new HH(g.name,g.type,g.data || {},g.sid,f.origin,g.id,g.replyToMessageId))
                    }
                }
            } catch (h) {
                throw c == null || c.qb({
                    Wb: h
                }),
                h;
            }
        })
    };
    v(IN, FH);
    var GN = function(a) {
        if (a == null || typeof a !== "string" || !a.startsWith("ima://"))
            return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, FN)
        } catch (b) {
            return null
        }
    };
    IN.prototype.sendMessage = function(a) {
        if (this.g != null && this.g.postMessage != null) {
            var b = this.g
              , c = b.postMessage
              , d = {};
            d.name = a.name;
            d.type = a.type;
            a.data != null && (d.data = a.data);
            a.id && (d.id = a.id);
            a.g && (d.replyToMessageId = a.g);
            d.sid = this.l;
            d.channel = this.A;
            a = "ima://" + (new $A).da(d);
            c.call(b, a, "*")
        }
        this.g != null && this.g.postMessage == null && W.getInstance().report(11)
    }
    ;
    IN.prototype.O = function() {
        Pm(this.C);
        this.g = null;
        FH.prototype.O.call(this)
    }
    ;
    var HN = function(a, b) {
        if (b == null)
            return !1;
        var c = b.channel;
        if (c == null || c !== a.A)
            return !1;
        b = b.sid;
        return b == null || a.l !== "*" && b !== a.l ? !1 : !0
    };
    var JN = function() {
        N.call(this);
        this.G = !1;
        this.g = null;
        this.A = this.D = this.M = !1;
        this.j = 0;
        this.o = [];
        this.C = !1;
        this.U = this.P = Infinity;
        this.l = 0;
        this.H = {};
        this.K = new bC(this);
        Rm(this, this.K)
    };
    v(JN, N);
    var LN = function(a, b) {
        b == null || a.G || (a.g = b,
        KN(a),
        a.G = !0)
    }
      , NN = function(a) {
        a.g != null && a.G && (MN(a),
        a.G = !1,
        a.D = !1,
        a.A = !1,
        a.j = 0,
        a.o = [],
        a.C = !1)
    }
      , KN = function(a) {
        MN(a);
        !(a.g instanceof N) && "ontouchstart"in document.documentElement && $d ? (a.H = {
            touchstart: function(b) {
                a.D = !0;
                a.j = b.touches.length;
                a.l && (window.clearTimeout(a.l),
                a.l = 0,
                a.M = !0);
                a.C = ON(a, b.touches) || b.touches.length !== 1;
                a.C ? (a.P = Infinity,
                a.U = Infinity) : (a.P = b.touches[0].clientX,
                a.U = b.touches[0].clientY);
                b = b.touches;
                a.o = [];
                for (var c = 0; c < b.length; c++)
                    a.o.push(b[c].identifier)
            },
            touchmove: function(b) {
                a.j = b.touches.length;
                if (!$d || !KB(IB, 8) || Math.pow(b.changedTouches[0].clientX - a.P, 2) + Math.pow(b.changedTouches[0].clientY - a.U, 2) > 25)
                    a.A = !0
            },
            touchend: function(b) {
                return void PN(a, b)
            }
        },
        Yb(a.H, function(b, c) {
            a.g.addEventListener(c, b, !1)
        })) : a.K.listen(a.g, "click", a.V)
    }
      , MN = function(a) {
        a.K.Ra(a.g, "click", a.V);
        Yb(a.H, function(b, c) {
            this.g.removeEventListener(c, b, !1)
        }, a);
        a.H = {}
    }
      , PN = function(a, b) {
        !a.D || a.j !== 1 || a.A || a.M || a.C || !ON(a, b.changedTouches) || (a.l = window.setTimeout(function() {
            return void QN(a)
        }, 300));
        a.j = b.touches.length;
        a.j === 0 && (a.D = !1,
        a.A = !1,
        a.o = []);
        a.M = !1
    };
    JN.prototype.V = function() {
        QN(this)
    }
    ;
    var ON = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a.o.includes(b[c].identifier))
                return !0;
        return !1
    }
      , QN = function(a) {
        a.l = 0;
        a.dispatchEvent(new tr("click"))
    };
    JN.prototype.O = function() {
        NN(this);
        N.prototype.O.call(this)
    }
    ;
    var RN = function(a) {
        return Ka(function(b) {
            return b.g == 1 ? za(b, a.g.promise, 2) : b.return({
                serializedConfig: a.serializedConfig,
                errorMessage: null,
                latencyMs: 0
            })
        })
    }
      , SN = new function() {
        this.g = new yC;
        this.serializedConfig = null
    }
    ;
    var TN = [0, Ak, Ct];
    var UN = function(a) {
        this.F = G(a)
    };
    v(UN, J);
    var VN = Fk([0, Ak, Ct, Ak, TN]);
    function WN(a, b, c) {
        var d, e, f;
        a = ((f = (d = Li(a, vt, 2)) == null ? void 0 : (e = Ni(d, ut, 1)) == null ? void 0 : e.map(function(g) {
            return Xi(g, 1)
        })) != null ? f : []).some(function(g) {
            return g === b
        });
        W.getInstance().report(190, {
            fm: a,
            fl: c
        })
    }
    function XN(a, b) {
        if (!a || !b)
            return !1;
        a = Li(a, tt, 3);
        var c;
        a = !!b && (a == null ? void 0 : (c = Hi(a, 1, void 0, Ph)) == null ? void 0 : c.get(b));
        W.getInstance().report(196, {
            status: a,
            network: b
        });
        return a != null ? a : !1
    }
    function YN(a, b) {
        if (!a || !b)
            return !1;
        var c;
        return !((c = Li(a, st, 5)) == null || !Ni(c, rt, 1).find(function(d) {
            return (d == null ? void 0 : Xi(d, 1)) === b && (d == null ? void 0 : Ti(d, 2))
        }))
    }
    function ZN(a) {
        if (!a)
            return null;
        var b = new UN;
        a = Ni(a, At, 6);
        a = x(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = void 0;
            if (c = (d = Li(c.value, zt, 4)) == null ? void 0 : Li(d, xt, 2)) {
                d = new zt;
                var e = new xt;
                c = Wi(c, 1);
                c = yi(e, 1, Ah(c));
                d = H(d, 2, c);
                Pi(b, 1, zt, d)
            }
        }
        return Ni(b, zt, 1).length === 0 ? null : b
    }
    ;function $N(a, b, c) {
        var d = RG(a);
        if (Ti(d, 8))
            return !1;
        a = PG(a) || !Ti(d, 5);
        b = XN(b, c);
        return a && !b ? !1 : !0
    }
    ;var aO = function(a, b) {
        M.call(this);
        var c = this;
        this.g = a;
        this.j = new Map;
        this.l = function(d) {
            var e = c.j.get(d.messageType);
            if (e) {
                var f = "goog_" + Fd++
                  , g = d.getId();
                e(d.qa).then(function(h) {
                    GH(c.g, d.type, d.messageType, h, f, g)
                })
            }
        }
        ;
        this.g.listen(b, this.l);
        Qm(this, function() {
            c.j.clear();
            c.g.Ra(b, c.l)
        })
    };
    v(aO, M);
    var bO = {
        Zg: function(a, b) {
            var c = a.injector_basename
              , d = a.sodar_query_id
              , e = a.bg_hash_basename
              , f = a.bg_binary;
            a = window;
            var g = g === void 0 ? !1 : g;
            var h = (g === void 0 ? 0 : g) ? "//ep1.adtrafficquality.google/bg/" + Bd(e) + ".js" : "//pagead2.googlesyndication.com/bg/" + Bd(e) + ".js";
            e = g;
            e = e === void 0 ? !1 : e;
            g = a.document;
            var k = {};
            k._bgu_ = h;
            k._bgp_ = f;
            b && (k._li_ = b);
            d && (k._sid_ = d);
            (b = a.GoogleTyFxhY) && typeof b.push == "function" || (b = a.GoogleTyFxhY = []);
            b.push(k);
            b = ue(g);
            b = Ae(b.g, "SCRIPT");
            b.type = "text/javascript";
            b.async = !0;
            c = (e === void 0 ? 0 : e) ? re(qr, Bd(c) + ".js") : re(rr, Bd(c) + ".js");
            vd(b, c);
            (c = (a.GoogleTyFxhYEET || {})[b.src]) ? c() : g.getElementsByTagName("head")[0].appendChild(b)
        }
    }
      , cO = function() {
        this.g = !1
    }
      , dO = function(a) {
        var b;
        return Ka(function(c) {
            switch (c.g) {
            case 1:
                return c.l = 2,
                za(c, (new rC).get({
                    url: "//pagead2.googlesyndication.com/getconfig/sodar?tid=pal&tv=imaq_h.3.695.1",
                    withCredentials: !1,
                    timeout: new WB
                }), 4);
            case 4:
                b = c.j;
                Aa(c, 3);
                break;
            case 2:
                return Da(c),
                c.return(null);
            case 3:
                if (!(typeof b === "object" && b !== null && "injector_basename"in b && "sodar_query_id"in b && "bg_hash_basename"in b && "bg_binary"in b))
                    return c.return(null);
                try {
                    bO.Zg(b, "imaq_h.3.695.1")
                } catch (d) {
                    return c.return(null)
                }
                a.g = !0;
                return c.return(b.sodar_query_id)
            }
        })
    };
    var eO = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var fO = function(a, b) {
        M.call(this);
        this.g = a;
        this.timeoutMs = b;
        Rm(this, this.g)
    };
    v(fO, M);
    var hO = function(a) {
        if (!rw(a.g.caller))
            return Promise.resolve(null);
        var b = new yC
          , c = null;
        a.g.addEventListener(function(e) {
            if (e.pingData.internalErrorState === 1)
                b.resolve(null);
            else if (e.eventName === "listenerRegistered")
                c = e.listenerId,
                e.pingData.applicableSections.length === 1 && e.pingData.applicableSections[0] === -1 && b.resolve(new gO("","-1"));
            else if (e.eventName === "signalStatus" && e.data === "ready") {
                e = e.pingData;
                var f, g = ((f = e.applicableSections) != null ? f : []).join("_");
                b.resolve(new gO(e.gppString,g))
            }
        });
        var d = new Promise(function(e) {
            setTimeout(function() {
                e(null)
            }, a.timeoutMs)
        }
        );
        d = Promise.race([b.promise, d]);
        d.then(function() {
            c !== null && a.g.removeEventListener(c)
        });
        return d
    }
      , gO = function(a, b) {
        this.gppString = a;
        this.sid = b
    };
    var iO = ra(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"])
      , jO = ra(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"])
      , kO = ra(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"])
      , lO = ra(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"])
      , mO = re(iO)
      , nO = re(jO)
      , oO = re(kO)
      , pO = re(lO);
    function qO(a) {
        var b;
        return (b = a.omidSessionInterface) != null ? b : null
    }
    function rO(a) {
        var b, c, d, e, f, g;
        return Ka(function(h) {
            if (h.g == 1)
                return b = Ce("IFRAME", {
                    style: "display: none",
                    title: "Advertisement"
                }),
                c = new Promise(function(k) {
                    b.addEventListener("load", function() {
                        k()
                    })
                }
                ),
                a.appendChild(b),
                za(h, c, 2);
            d = Ce("SCRIPT");
            e = sO();
            vd(d, e);
            f = new Promise(function(k, l) {
                d.addEventListener("load", function() {
                    var n = Fe(b);
                    n && qO(n) ? k(b) : l()
                })
            }
            );
            g = b.contentDocument || b.contentWindow.document;
            g.head.appendChild(d);
            return h.return(f)
        })
    }
    function sO() {
        switch (uN(fw)) {
        case 0:
            return mO;
        case 1:
            return nO;
        case 2:
            return oO;
        case 3:
            return pO;
        default:
            return mO
        }
    }
    ;var tO = function(a, b) {
        N.call(this);
        this.j = b;
        this.g = qO(a)
    };
    v(tO, N);
    var vO = function(a) {
        try {
            a.g && a.g.registerSessionObserver(function(b) {
                b.type === "sessionStart" ? uO(a, a.j) : b.type === "sessionFinish" && vO(a)
            })
        } catch (b) {
            a.dispatchEvent(new Event("error"))
        }
    }
      , uO = function(a, b) {
        b instanceof AF && (b = b.T);
        var c;
        if (((c = b.tagName) == null ? void 0 : c.toUpperCase()) !== "AUDIO")
            try {
                a.g && a.g.setVideoElement(b)
            } catch (d) {
                a.dispatchEvent(new Event("error"))
            }
    };
    tO.prototype.O = function() {
        try {
            this.g && this.g.finishAdSession()
        } catch (a) {}
        N.prototype.O.call(this)
    }
    ;
    var wO = function(a) {
        this.data = a
    };
    m = wO.prototype;
    m.getTotalAds = function() {
        return this.data.totalAds
    }
    ;
    m.getMaxDuration = function() {
        return this.data.maxDuration
    }
    ;
    m.getAdPosition = function() {
        return this.data.adPosition
    }
    ;
    m.getPodIndex = function() {
        return this.data.podIndex
    }
    ;
    m.getTimeOffset = function() {
        return this.data.timeOffset
    }
    ;
    m.getIsBumper = function() {
        return this.data.isBumper
    }
    ;
    wO.prototype.getIsBumper = wO.prototype.getIsBumper;
    wO.prototype.getTimeOffset = wO.prototype.getTimeOffset;
    wO.prototype.getPodIndex = wO.prototype.getPodIndex;
    wO.prototype.getAdPosition = wO.prototype.getAdPosition;
    wO.prototype.getMaxDuration = wO.prototype.getMaxDuration;
    wO.prototype.getTotalAds = wO.prototype.getTotalAds;
    var xO = function(a) {
        this.data = a
    };
    m = xO.prototype;
    m.getContent = function() {
        return this.data.content
    }
    ;
    m.getContentType = function() {
        return this.data.contentType
    }
    ;
    m.getWidth = function() {
        return this.getSize().width
    }
    ;
    m.getHeight = function() {
        return this.getSize().height
    }
    ;
    m.getAdSlotId = function() {
        return this.data.adSlotId
    }
    ;
    m.getSize = function() {
        var a = this.data.size;
        return new pe(a.width,a.height)
    }
    ;
    m.Te = function() {
        return this.data.resourceType
    }
    ;
    var SH = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new xO(b)
        }) : []
    };
    xO.prototype.getAdSlotId = xO.prototype.getAdSlotId;
    xO.prototype.getHeight = xO.prototype.getHeight;
    xO.prototype.getWidth = xO.prototype.getWidth;
    xO.prototype.getContentType = xO.prototype.getContentType;
    xO.prototype.getContent = xO.prototype.getContent;
    var yO = function(a, b) {
        this.j = a;
        this.g = b
    };
    yO.prototype.getAdIdValue = function() {
        return this.j
    }
    ;
    yO.prototype.getAdIdRegistry = function() {
        return this.g
    }
    ;
    yO.prototype.getAdIdRegistry = yO.prototype.getAdIdRegistry;
    yO.prototype.getAdIdValue = yO.prototype.getAdIdValue;
    var X = function(a) {
        this.data = a
    };
    X.prototype.getAdId = function() {
        return this.data.adId
    }
    ;
    X.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    }
    ;
    X.prototype.getCreativeId = function() {
        return this.data.creativeId
    }
    ;
    var zO = function(a) {
        return a.data.adQueryId
    };
    X.prototype.getAdSystem = function() {
        return this.data.adSystem
    }
    ;
    X.prototype.getAdvertiserName = function() {
        return this.data.advertiserName
    }
    ;
    X.prototype.getApiFramework = function() {
        return this.data.apiFramework
    }
    ;
    var AO = function(a) {
        var b;
        return (b = a.data.clickThroughUrl) != null ? b : null
    }
      , BO = function(a) {
        var b;
        return (b = a.data.attributionParams) != null ? b : null
    };
    m = X.prototype;
    m.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    }
    ;
    m.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    }
    ;
    m.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    }
    ;
    m.isLinear = function() {
        return this.data.linear
    }
    ;
    m.Xg = function() {
        return this.data.skippable
    }
    ;
    m.getContentType = function() {
        return this.data.contentType
    }
    ;
    m.getDescription = function() {
        return this.data.description
    }
    ;
    m.getTitle = function() {
        return this.data.title
    }
    ;
    m.getDuration = function() {
        return this.data.duration
    }
    ;
    m.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    }
    ;
    m.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    }
    ;
    m.getWidth = function() {
        return this.data.width
    }
    ;
    m.getHeight = function() {
        return this.data.height
    }
    ;
    m.getUiElements = function() {
        return this.data.uiElements
    }
    ;
    m.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    }
    ;
    m.getAdPodInfo = function() {
        return new wO(this.data.adPodInfo)
    }
    ;
    m.getCompanionAds = function(a, b, c) {
        var d = this.data.companions;
        if (!d)
            return [];
        d = d.map(function(e) {
            return new xO(e)
        });
        return RH(new OH({
            size: new pe(a,b),
            Re: c ? c.sizeCriteria === "SelectFluid" : !1
        },c), d)
    }
    ;
    m.getTraffickingParameters = function() {
        return UB(Ed(this.data.traffickingParameters))
    }
    ;
    m.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    }
    ;
    m.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    }
    ;
    m.getMediaUrl = function() {
        return this.data.mediaUrl
    }
    ;
    m.getSurveyUrl = function() {
        return this.data.surveyUrl
    }
    ;
    m.getDealId = function() {
        return this.data.dealId
    }
    ;
    m.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new yO(a.adIdValue,a.adIdRegistry)
        })
    }
    ;
    m.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    }
    ;
    m.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    }
    ;
    m.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    }
    ;
    m.af = function() {
        return this.data.disableUi
    }
    ;
    X.prototype.isUiDisabled = X.prototype.af;
    X.prototype.getSkipTimeOffset = X.prototype.getSkipTimeOffset;
    X.prototype.getUniversalAdIdRegistry = X.prototype.getUniversalAdIdRegistry;
    X.prototype.getUniversalAdIdValue = X.prototype.getUniversalAdIdValue;
    X.prototype.getUniversalAdIds = X.prototype.getUniversalAdIds;
    X.prototype.getDealId = X.prototype.getDealId;
    X.prototype.getSurveyUrl = X.prototype.getSurveyUrl;
    X.prototype.getMediaUrl = X.prototype.getMediaUrl;
    X.prototype.getVastMediaBitrate = X.prototype.getVastMediaBitrate;
    X.prototype.getTraffickingParametersString = X.prototype.getTraffickingParametersString;
    X.prototype.getTraffickingParameters = X.prototype.getTraffickingParameters;
    X.prototype.getCompanionAds = X.prototype.getCompanionAds;
    X.prototype.getAdPodInfo = X.prototype.getAdPodInfo;
    X.prototype.getMinSuggestedDuration = X.prototype.getMinSuggestedDuration;
    X.prototype.getUiElements = X.prototype.getUiElements;
    X.prototype.getHeight = X.prototype.getHeight;
    X.prototype.getWidth = X.prototype.getWidth;
    X.prototype.getVastMediaHeight = X.prototype.getVastMediaHeight;
    X.prototype.getVastMediaWidth = X.prototype.getVastMediaWidth;
    X.prototype.getDuration = X.prototype.getDuration;
    X.prototype.getTitle = X.prototype.getTitle;
    X.prototype.getDescription = X.prototype.getDescription;
    X.prototype.getContentType = X.prototype.getContentType;
    X.prototype.isSkippable = X.prototype.Xg;
    X.prototype.isLinear = X.prototype.isLinear;
    X.prototype.getWrapperAdSystems = X.prototype.getWrapperAdSystems;
    X.prototype.getWrapperCreativeIds = X.prototype.getWrapperCreativeIds;
    X.prototype.getWrapperAdIds = X.prototype.getWrapperAdIds;
    X.prototype.getApiFramework = X.prototype.getApiFramework;
    X.prototype.getAdvertiserName = X.prototype.getAdvertiserName;
    X.prototype.getAdSystem = X.prototype.getAdSystem;
    X.prototype.getCreativeId = X.prototype.getCreativeId;
    X.prototype.getCreativeAdId = X.prototype.getCreativeAdId;
    X.prototype.getAdId = X.prototype.getAdId;
    var CO = function(a) {
        this.g = a
    };
    CO.prototype.getCuePoints = function() {
        return this.g
    }
    ;
    CO.prototype.getCuePoints = CO.prototype.getCuePoints;
    var DO = function() {
        this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
        this.autoAlign = this.useVideoAdUi = !0;
        this.bitrate = -1;
        this.enablePreloading = !1;
        this.loadVideoTimeout = 8E3;
        this.mimeTypes = null;
        this.playAdsAfterTime = -1;
        this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.uiElements = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = !1
    };
    DO.prototype.da = function(a) {
        var b = {};
        Object.assign(b, this);
        a && (b.disableClickThrough = !0);
        return b
    }
    ;
    DO.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            b != null && (this.autoAlign = b);
            b = Jd(a.bitrate);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && b.length !== 0 && (this.mimeTypes = b);
            b = Jd(a.playAdsAfterTime);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = Jd(a.loadVideoTimeout);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = a.useVideoAdUi === !1 ? !1 : this.useVideoAdUi
        }
    }
    ;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var EO = function(a) {
        this.F = G(a)
    };
    v(EO, J);
    var FO = function(a) {
        this.F = G(a)
    };
    v(FO, J);
    var GO = function(a) {
        this.F = G(a)
    };
    v(GO, J);
    var HO = function(a) {
        this.F = G(a)
    };
    v(HO, J);
    var IO = function(a) {
        this.F = G(a)
    };
    v(IO, J);
    var JO = function(a) {
        return Ki(a, cu, 5)
    };
    IO.prototype.getWidth = function() {
        return Ui(this, 9)
    }
    ;
    IO.prototype.getHeight = function() {
        return Ui(this, 10)
    }
    ;
    var KO = Ik(IO);
    function LO(a) {
        var b;
        return (b = (new Map([["https://googleads.g.doubleclick.net", BigInt(200)], ["https://td.doubleclick.net", BigInt(300)], ["https://f.creativecdn.com", BigInt(400)], ["https://fledge.us.criteo.com", BigInt(500)], ["https://fledge.eu.criteo.com", BigInt(600)], ["https://fledge.as.criteo.com", BigInt(700)], ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)], ["https://at-us-east.amazon-adsystem.com", BigInt(900)], ["https://x.adroll.com", BigInt(1E3)], ["https://fledge.dynalyst.jp", BigInt(1100)]])).get(a)) != null ? b : BigInt(100)
    }
    ;function MO(a) {
        var b = a.Gh
          , c = a.Cj
          , d = a.Oj
          , e = a.auctionNonce
          , f = a.tj
          , g = a.multiBidLimit;
        a = !Ti(b, 14);
        for (var h = {}, k = x(Ni(b, FO, 7)), l = k.next(); !l.done; l = k.next()) {
            l = l.value;
            var n = {}
              , p = void 0
              , r = (p = d) == null ? void 0 : p.Kj.Sj.Uj.zj;
            p = Xi(l, 1);
            if (Xi(l, 2).length)
                try {
                    if (n = JSON.parse(Xi(l, 2)),
                    sf() * 100 < 1) {
                        var t = void 0;
                        (t = r) == null || t.Xe({
                            Je: p,
                            status: "SUCCESS",
                            xf: 100
                        })
                    }
                } catch (Ya) {
                    t = void 0,
                    (t = r) == null || t.Xe({
                        Je: p,
                        status: "ERROR",
                        xf: 1
                    })
                }
            else
                t = void 0,
                (t = r) == null || t.Xe({
                    Je: p,
                    status: "EMPTY",
                    xf: 1
                });
            h[Xi(l, 1)] = n
        }
        if (d = Li(b, au, 6))
            h["https://googleads.g.doubleclick.net"] = ji(d),
            h["https://td.doubleclick.net"] = ji(d);
        d = {};
        k = Ni(b, HO, 11);
        k = x(k);
        for (l = k.next(); !l.done; l = k.next())
            l = l.value,
            d[Xi(l, 1)] = Ui(l, 2);
        k = {};
        Ui(b, 21) !== 0 && (k["*"] = Ui(b, 21));
        if (Ni(b, GO, 32).length > 0) {
            var u = {};
            l = x(Ni(b, GO, 32));
            for (n = l.next(); !n.done; n = l.next())
                n = n.value,
                u[Xi(n, 1)] = Ui(n, 2)
        }
        l = {};
        th(wi(b.F, 18)) != null && (l["https://googleads.g.doubleclick.net"] = Vi(b, 18),
        l["https://td.doubleclick.net"] = Vi(b, 18));
        n = x(Hi(b, 24, EO));
        for (r = n.next(); !r.done; r = n.next())
            p = x(r.value),
            r = p.next().value,
            p = p.next().value,
            Vi(p, 4) && (l[r] = Vi(p, 4));
        n = {};
        r = x(Hi(b, 24, EO));
        for (p = r.next(); !p.done; p = r.next())
            t = x(p.value),
            p = t.next().value,
            t = t.next().value,
            t = Xi(t, 5),
            t.length && (n[p] = {
                type: t
            });
        var w, A;
        if ((w = Li(b, au, 6)) == null ? 0 : (A = Ki(w, $t, 3)) == null ? 0 : Ti(A, 71))
            n["https://td.doubleclick.net"] = {
                type: "default-local-reporting"
            };
        w = {};
        g && g > 1 && (w["*"] = g);
        g = Xi(b, 1).split("/td/")[0];
        (A = Li(b, cu, 5)) == null ? A = void 0 : (r = A.F,
        A = new A.constructor(si(r, r[F] | 0)),
        r = A.F,
        r[F] &= -3);
        var L;
        A != null && (L = Li(A, bu, 5)) != null && yi(L, 2);
        L = Object;
        r = L.assign;
        p = Xi(b, 1);
        t = Xi(b, 2);
        var ja = Bi(b, 3, Nh, Jg === Jg ? 2 : 4);
        u = r.call(L, {}, {
            seller: g,
            decisionLogicURL: p,
            trustedScoringSignalsURL: t,
            interestGroupBuyers: ja,
            sellerExperimentGroupId: Vi(b, 17),
            auctionSignals: JSON.parse(Xi(b, 4) || "{}"),
            sellerSignals: (A == null ? void 0 : ji(A)) || [],
            sellerTimeout: Ui(b, 15) || 50,
            perBuyerExperimentGroupIds: l,
            perBuyerSignals: h,
            perBuyerTimeouts: d,
            perBuyerCumulativeTimeouts: k,
            perBuyerRealTimeReportingConfig: n,
            perBuyerMultiBidLimits: w,
            reportingTimeout: 5E3
        }, u ? {
            perBuyerGroupLimits: u
        } : {}, a ? {
            resolveToConfig: a
        } : {});
        b == null ? h = 0 : (h = JO(b),
        h = Ti(h, 25));
        h && (u.sellerCurrency = "USD",
        u.perBuyerCurrencies = Object.fromEntries(Hi(b, 22, void 0, Qh)));
        Xi(b, 28) && (u.directFromSellerSignalsHeaderAdSlot = Xi(b, 28));
        if (NO(u.interestGroupBuyers, f)) {
            u.auctionReportBuyerKeys = u.interestGroupBuyers.map(LO);
            f = {
                interestGroupCount: {
                    bucket: BigInt(0),
                    scale: 1
                },
                bidCount: {
                    bucket: BigInt(1),
                    scale: 1
                }
            };
            f.totalGenerateBidLatency = {
                bucket: BigInt(2),
                scale: 1
            };
            f.totalSignalsFetchLatency = {
                bucket: BigInt(3),
                scale: 1
            };
            u.auctionReportBuyers = f;
            var Y = Y === void 0 ? BigInt(0) : Y;
            u.auctionReportBuyerDebugModeConfig = {
                enabled: !0,
                debugKey: Y
            }
        }
        e && (u.auctionNonce = e,
        u.additionalBids = Promise.resolve());
        Hi(b, 33, void 0, Qh).size && (u.deprecatedRenderURLReplacements = Object.fromEntries(Hi(b, 33, void 0, Qh).entries()),
        (e = u.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (u.deprecatedRenderURLReplacements["${RENDER_DATA}"] = e));
        e = Object;
        Y = e.assign;
        f = Xi(b, 1);
        h = Vi(b, 17);
        L = new cu;
        d = JO(b);
        Ai(d, bu) && (d = new bu,
        w = du(JO(b)),
        w = Zi(w, 2),
        d = Ji(d, 2, Ah(w), "0"),
        w = du(JO(b)),
        w = Zi(w, 4),
        d = Ji(d, 4, Ah(w), "0"),
        H(L, 5, d));
        JO(b).getEscapedQemQueryId() && (d = JO(b).getEscapedQemQueryId(),
        Ji(L, 2, Ih(d), ""));
        d = JO(b);
        Xi(d, 6) && (d = JO(b),
        d = Xi(d, 6),
        Ji(L, 6, Ih(d), ""));
        d = JO(b);
        Ti(d, 21) && dj(L, 21, !0);
        d = JO(b);
        Ti(d, 4) && dj(L, 4, !0);
        d = JO(b);
        Xi(d, 11) && (d = JO(b),
        d = Xi(d, 11),
        Ji(L, 11, Ih(d), ""));
        d = JO(b);
        Ti(d, 32) && dj(L, 32, !0);
        L = ji(L);
        d = Ui(b, 15) || 50;
        if (Ti(b, 30)) {
            if (c == null || !c.length)
                throw Error("top_td_without_component_auction");
        } else
            c = [u].concat(pa(c != null ? c : []));
        c = Y.call(e, {}, {
            seller: g,
            decisionLogicURL: f,
            sellerExperimentGroupId: h,
            sellerSignals: L,
            sellerTimeout: d,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: c
        }, a ? {
            resolveToConfig: a
        } : {});
        Xi(b, 28) && (c.directFromSellerSignalsHeaderAdSlot = Xi(b, 28));
        return c
    }
    function NO(a, b) {
        return a.some(function(c) {
            return LO(c) !== BigInt(100)
        }) && (b != null ? b : !1)
    }
    ;var PO = function(a, b) {
        M.call(this);
        var c = this;
        this.navigator = b;
        this.j = function(d) {
            var e = Date.now();
            try {
                var f = OO(c, d.tdconfig)
            } catch (g) {
                f = Promise.resolve({
                    Mb: !1,
                    result: null
                })
            }
            return f.then(function(g) {
                var h = new Yt;
                h = Ji(h, 1, Ah(e), "0");
                h = Ji(h, 2, Ah(Date.now()), "0");
                var k = g.Mb, l;
                g = (l = g.result) != null ? l : "";
                l = {};
                return l.ffconfig = g,
                l.timeout = 2E3,
                l.auctioninterval = h.da(),
                l.isauctiontimeout = k,
                l
            })
        }
        ;
        this.g = new aO(a,"fledge");
        Rm(this, this.g)
    };
    v(PO, M);
    var OO = function(a, b) {
        b = KO(b);
        var c = MO({
            Gh: b
        });
        b = ws(2E3, null).then(function() {
            return {
                Mb: !0,
                result: null
            }
        });
        a = a.navigator.runAdAuction(c).then(function(d) {
            d !== null && typeof d !== "string" ? d = null : d == null && (d = null);
            return {
                Mb: !1,
                result: d
            }
        });
        return Promise.race([b, a])
    };
    var RO = function(a, b, c) {
        M.call(this);
        this.C = a;
        this.B = b;
        this.A = c;
        this.g = this.j = this.o = null;
        this.l = 0;
        a = new bC(this);
        Rm(this, a);
        QO(this);
        a.listen(this.B, "adsManager", this.D)
    };
    v(RO, M);
    var QO = function(a) {
        rO(a.C).then(function(b) {
            a.j = b;
            SO(a, Fe(b))
        }).catch(function() {
            return void TO(a)
        })
    };
    RO.prototype.D = function(a) {
        if (["complete", "skip", "error"].includes(a.messageType)) {
            this.l++;
            if (this.l === 10) {
                this.l = 0;
                var b;
                (b = this.g) == null || b.dispose();
                QO(this)
            }
            a = Fe(this.j);
            var c;
            a && ((c = a.frames) == null ? 0 : c.omid_v1_present) || W.getInstance().report(188, {})
        }
    }
    ;
    var UO = function(a) {
        if (a.g && a.o) {
            var b = a.g;
            try {
                b.g && b.g.setSessionClientWindow(a.o)
            } catch (c) {
                b.dispatchEvent(new Event("error"))
            }
        }
    }
      , SO = function(a, b) {
        a.g = new tO(b,a.A);
        a.g.listen("error", function() {
            return void TO(a)
        });
        vO(a.g);
        UO(a)
    }
      , TO = function(a) {
        GH(a.B, "omid", "iframeFailed");
        a.dispose()
    };
    RO.prototype.O = function() {
        this.j && (De(this.j),
        this.j = null);
        var a;
        (a = this.g) == null || a.dispose();
        M.prototype.O.call(this)
    }
    ;
    var VO = function(a, b, c, d) {
        M.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.j = new bC(this);
        Rm(this, this.j);
        this.j.listen(this.o, d, this.A)
    };
    v(VO, M);
    var WO = function(a, b) {
        var c = b.qa;
        switch (b.messageType) {
        case "showVideo":
            a.l.pd();
            break;
        case "hide":
            a.l.ob();
            break;
        case "resizeAndPositionVideo":
            b = c.resizeAndPositionVideo;
            a.l.me(new Ml(b.x,b.y,b.width,b.height));
            break;
        case "restoreSizeAndPositionVideo":
            a.l.ne()
        }
    };
    VO.prototype.A = function(a) {
        var b = a.qa;
        switch (a.messageType) {
        case "activate":
            this.l.xc(this.g);
            break;
        case "startTracking":
            a = this.g;
            var c = this.B;
            this.j.listen(a, bc(KC), c);
            this.j.listen(a, eO, c);
            this.g.De();
            break;
        case "stopTracking":
            a = this.g;
            c = this.B;
            this.j.Ra(a, bc(KC), c);
            this.j.Ra(a, eO, c);
            this.g.Ub();
            break;
        case "exitFullscreen":
            a = this.g.g;
            (Xd || Zd) && a.webkitDisplayingFullscreen && a.webkitExitFullscreen();
            break;
        case "play":
            this.g.play();
            break;
        case "pause":
            this.g.pause();
            break;
        case "load":
            a = this.g;
            c = b.videoUrl;
            var d = b.muxedMediaUrl
              , e = b.muxedMimeType
              , f = b.muxedAudioCodec
              , g = b.muxedVideoCodec
              , h = b.demuxedAudioUrl
              , k = b.demuxedVideoUrl
              , l = b.demuxedAudioMimeType
              , n = b.demuxedVideoMimeType
              , p = b.demuxedAudioCodec
              , r = b.demuxedVideoCodec;
            b = b.mseCompatible;
            var t = null;
            k && h && b && n && l && r && p && (t = new nw({
                Lh: k,
                lg: h,
                Wj: null,
                vj: null,
                Kh: n,
                kg: l,
                ub: r,
                gb: p,
                height: null,
                width: null,
                Ea: b,
                Vj: null,
                uj: null
            }));
            h = null;
            d && e && g && f && (h = new ow({
                ah: d,
                Ya: null,
                mimeType: e,
                ub: g,
                gb: f,
                height: null,
                width: null,
                Ea: b,
                Ej: null
            }));
            t ? a.load(c, t) : h ? a.load(c, h) : a.load(c, null);
            break;
        case "unload":
            this.g.unload();
            break;
        case "setCurrentTime":
            this.g.g.currentTime = b.currentTime;
            break;
        case "setVolume":
            this.g.setVolume(b.volume)
        }
    }
    ;
    VO.prototype.B = function(a) {
        var b = {};
        switch (a.type) {
        case "autoplayDisallowed":
            a = "autoplayDisallowed";
            break;
        case "beginFullscreen":
            a = "fullscreen";
            break;
        case "endFullscreen":
            a = "exitFullscreen";
            break;
        case "click":
            a = "click";
            break;
        case "end":
            a = "end";
            break;
        case "error":
            a = "error";
            break;
        case "loaded":
            a = "loaded";
            break;
        case "mediaLoadTimeout":
            a = "mediaLoadTimeout";
            break;
        case "pause":
            a = "pause";
            b.ended = this.g.g.ended;
            break;
        case "play":
            a = "play";
            break;
        case "skip":
            a = "skip";
            break;
        case "start":
            a = "start";
            b.volume = this.g.getVolume();
            break;
        case "timeUpdate":
            a = "timeupdate";
            b.currentTime = this.g.getCurrentTime();
            b.duration = this.g.getDuration();
            break;
        case "volumeChange":
            a = "volumeChange";
            b.volume = this.g.getVolume();
            break;
        case "loadedmetadata":
            a = a.type;
            b.duration = this.g.getDuration();
            break;
        case "abort":
        case "canplay":
        case "canplaythrough":
        case "durationchange":
        case "emptied":
        case "loadstart":
        case "loadeddata":
        case "progress":
        case "ratechange":
        case "seeked":
        case "seeking":
        case "stalled":
        case "suspend":
        case "waiting":
            a = a.type;
            break;
        default:
            return
        }
        GH(this.o, this.C, a, b)
    }
    ;
    var XO = function(a, b) {
        M.call(this);
        this.j = b;
        this.g = null;
        this.l = new VO(a,b,this.j.ga,"videoDisplay1");
        Rm(this, this.l);
        var c = this.j.Aa;
        c != null && (this.g = new VO(a,b,c,"videoDisplay2"),
        Rm(this, this.g))
    };
    v(XO, M);
    function YO(a, b, c, d) {
        var e = Bf("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    }
    ;function ZO() {
        var a, b, c, d = ze();
        d = d === void 0 ? window : d;
        d = ((c = d === void 0 ? null : d) != null ? c : window).googletag;
        c = (d == null ? 0 : d.apiReady) ? d : void 0;
        return (b = c == null ? void 0 : (a = c.companionAds) == null ? void 0 : a.call(c)) != null ? b : null
    }
    function $O(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = x(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value,
            typeof d !== "string") {
                var e = {};
                c.push((e.adWidth = d.getWidth(),
                e.adHeight = d.getHeight(),
                e))
            } else
                d === "fluid" && (d = {},
                c.push((d.fluidSize = !0,
                d)));
        return b.adSizes = c,
        b
    }
    function aP(a) {
        var b = ZO();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(r) {
                return [r.getSlotId().getId(), r]
            }));
            a = x(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value
                  , f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = ve(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth
                          , k = e.adHeight;
                        e.fluidSize && (k = Zl(d),
                        h = k.width,
                        k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering)
                            try {
                                var l = "google_companion_" + f.getSlotId().getId()
                                  , n = YO(d, l, h, k)
                                  , p = n.contentWindow ? n.contentWindow.document : n.contentDocument;
                                Td && p.open("text/html", "replace");
                                zd(p, aC(g));
                                p.close()
                            } catch (r) {}
                        else
                            wd(d, aC(g)),
                            d.style.width = h + "px",
                            d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    }
    ;var bP = function(a, b, c, d, e, f) {
        HH.call(this, a, b, c, d, e);
        this.g = f
    };
    v(bP, HH);
    var cP = function(a, b) {
        N.call(this);
        this.A = a;
        this.o = b;
        this.g = {};
        this.j = new bC(this);
        Rm(this, this.j);
        this.j.listen(ze(), "message", this.l)
    };
    v(cP, N);
    var dP = function(a, b) {
        var c = b.g;
        a.g.hasOwnProperty(c) && GH(a.g[c], b.type, b.messageType, b.qa)
    }
      , eP = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new IN(b,c),
        a.j.listen(c, a.A, function(e) {
            this.dispatchEvent(new bP(e.type,e.messageType,e.qa,e.wc,e.origin,b))
        }),
        c.g = d,
        c.connect(),
        a.g[b] = c)
    };
    cP.prototype.O = function() {
        for (var a = x(Object.values(this.g)), b = a.next(); !b.done; b = a.next())
            Pm(b.value);
        N.prototype.O.call(this)
    }
    ;
    cP.prototype.l = function(a) {
        a = a.Tb;
        var b = GN(a.data);
        if (b != null) {
            var c = b.channel;
            if (this.o && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                eP(this, c, d, a.source);
                this.dispatchEvent(new bP(b.name,b.type,b.data || {},d,a.origin,c))
            }
        }
    }
    ;
    function fP() {
        return !!Ta("googletag.cmd", ze())
    }
    function gP() {
        var a = Ta("googletag.console", ze());
        return a != null ? a : null
    }
    var hP = function() {
        bC.call(this);
        this.g = null;
        this.l = new cP("gpt",!0);
        Rm(this, this.l);
        this.listen(this.l, "gpt", this.A);
        fP() || ze().top === ze() || (this.g = new cP("gpt",!1),
        Rm(this, this.g),
        this.listen(this.g, "gpt", this.B))
    };
    v(hP, bC);
    hP.prototype.A = function(a) {
        var b = a.origin
          , c = "//imasdk.googleapis.com".match(mf);
        b = b.match(mf);
        if (c[3] == b[3] && c[4] == b[4])
            if (this.g != null)
                eP(this.g, a.g, a.wc, ze().parent),
                this.g != null && dP(this.g, a);
            else if (c = a.qa,
            c != null && c.scope !== void 0) {
                b = c.scope;
                c = c.args;
                var d;
                if (b === "proxy") {
                    var e = a.messageType;
                    e === "isGptPresent" ? d = fP() : e === "isConsolePresent" && (d = gP() != null)
                } else if (fP())
                    if (b === "pubads" || b === "companionAds") {
                        d = a.messageType;
                        var f = ze().googletag;
                        if (f != null && f[b] != null && (b = f[b](),
                        b != null && (d = b[d],
                        d != null)))
                            try {
                                e = d.apply(b, c)
                            } catch (g) {}
                        d = e
                    } else if (b === "console") {
                        if (e = gP(),
                        e != null && (b = e[a.messageType],
                        b != null))
                            try {
                                b.apply(e, c)
                            } catch (g) {}
                    } else
                        b === null && (e = a.messageType,
                        e === "googleGetCompanionAdSlots" ? (e = ZO()) ? (e = e.getSlots().map($O),
                        d = e.length ? e : null) : d = null : (e === "googleSetCompanionAdContents" && aP(c == null ? void 0 : c[0]),
                        d = null));
                d !== void 0 && (a.qa.returnValue = d,
                dP(this.l, a))
            }
    }
    ;
    hP.prototype.B = function(a) {
        dP(this.l, a)
    }
    ;
    var iP = function(a, b) {
        if (a.g) {
            var c = a.g;
            Pm(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l,
        Pm(a.g[b]),
        delete a.g[b])
    };
    var kP = function(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , d = c.shift();
        if (typeof d == "undefined")
            throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, l, n, p) {
            if (l == "%")
                return "%";
            var r = c.shift();
            if (typeof r == "undefined")
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = r;
            return jP[l].apply(null, arguments)
        })
    }
      , jP = {
        s: function(a, b, c) {
            return isNaN(c) || c == "" || a.length >= Number(c) ? a : a = b.indexOf("-", 0) > -1 ? a + Dd(" ", Number(c) - a.length) : Dd(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || e == "" || (d = parseFloat(a).toFixed(e));
            var f = Number(a) < 0 ? "-" : b.indexOf("+") >= 0 ? "+" : b.indexOf(" ") >= 0 ? " " : "";
            Number(a) >= 0 && (d = f + d);
            if (isNaN(c) || d.length >= Number(c))
                return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = b.indexOf("-", 0) >= 0 ? f + d + Dd(" ", a) : f + Dd(b.indexOf("0", 0) >= 0 ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, h) {
            return jP.f(parseInt(a, 10), b, c, d, 0, f, g, h)
        }
    };
    jP.i = jP.d;
    jP.u = jP.d;
    function lP() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return b !== void 0 && typeof b.allowedFeatures == "function" && typeof b.allowedFeatures() == "object" && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var oP = function(a, b, c) {
        c = c === void 0 ? !1 : c;
        N.call(this);
        this.C = b;
        this.V = c;
        this.K = this.H = null;
        this.G = !1;
        this.D = "goog_" + Fd++;
        this.o = new Map;
        this.g = null;
        c = ze();
        var d = Ta("google.ima.gptProxyInstance", c);
        d != null ? c = d : (d = new hP,
        z("google.ima.gptProxyInstance", d, c),
        c = d);
        this.W = c;
        this.A = null;
        this.l = new bC(this);
        Rm(this, this.l);
        c = this.D;
        d = mP(this, c);
        var e = window.document;
        if (uC.length && e.head)
            for (var f = x(uC), g = f.next(); !g.done; g = f.next())
                if ((g = g.value) && e.head) {
                    var h = Bf("META");
                    e.head.appendChild(h);
                    h.httpEquiv = "origin-trial";
                    h.content = g
                }
        e = lP();
        c = Ce("IFRAME", {
            src: d,
            allowFullscreen: !0,
            allow: e,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
            title: "Advertisement"
        });
        this.l.hc(c, "load", this.fa);
        a.appendChild(c);
        this.frameElement = c;
        this.j = nP(this);
        this.M = new PO(this.j,navigator);
        Rm(this, this.M);
        c = this.M;
        c.g.j.set("auction", c.j);
        this.P = new XO(this.j,this.C);
        Rm(this, this.P);
        this.C.ga && this.l.listen(this.j, "displayContainer", this.U);
        this.l.listen(this.j, "mouse", this.aa);
        this.l.listen(this.j, "touch", this.ba);
        c = b.rd();
        km() || Tc(Wc(), "CrKey") && Tc(Wc(), "SmartSpeaker") || Tc(Wc(), "Edge/18.") || c || (this.A = new RO(a,this.j,b.ga.g),
        Rm(this, this.A))
    };
    v(oP, N);
    var nP = function(a, b) {
        b = b === void 0 ? "*" : b;
        var c = a.o.get(b);
        c == null && (c = new IN(a.D,b),
        a.G && (c.g = Fe(a.frameElement),
        c.connect()),
        a.o.set(b, c));
        return c
    };
    oP.prototype.xc = function(a) {
        var b;
        (b = this.A) != null && (a = a.g,
        b.A = a,
        b.g && (b = b.g,
        b.j = a,
        uO(b, a)))
    }
    ;
    oP.prototype.O = function() {
        this.g !== null && (this.g.dispose(),
        this.g = null);
        this.o.forEach(function(a) {
            Pm(a)
        });
        this.o.clear();
        iP(this.W, this.D);
        De(this.frameElement);
        N.prototype.O.call(this)
    }
    ;
    var pP = function(a) {
        var b = window;
        try {
            do {
                try {
                    if (b.location.href.indexOf(a) === 0 || b.document.referrer.indexOf(a) === 0)
                        return !0
                } catch (c) {}
                b = b.parent
            } while (b !== b.top)
        } catch (c) {}
        return !1
    }
      , mP = function(a, b) {
        var c = (wf() ? "https:" : "http:") + kP("//imasdk.googleapis.com/js/core/bridge3.695.1_%s.html", BG.getLocale())
          , d = new URL(c,window.location.href);
        a.V && d.searchParams.append("gdpr", "1");
        pP(c) && d.searchParams.append("f", b);
        a = new Map;
        a.set("fid", b);
        (b = Wk()) && a.set("deid", b);
        d.hash = Array.from(a.entries(), function(e) {
            var f = x(e);
            e = f.next().value;
            f = f.next().value;
            return e + "=" + f
        }).join("&");
        return d.toString()
    };
    oP.prototype.aa = function(a) {
        var b = a.qa
          , c = Ul(this.frameElement)
          , d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.frameElement.dispatchEvent(d)
    }
    ;
    var qP = function(a, b) {
        var c = Ul(a.frameElement)
          , d = !!("TouchEvent"in window && TouchEvent.length > 0);
        b = b.map(function(f) {
            return d ? new Touch({
                identifier: f.identifier,
                target: a.frameElement,
                clientX: f.clientX,
                clientY: f.clientY,
                screenX: f.screenX,
                screenY: f.screenY,
                pageX: f.pageX + c.x,
                pageY: f.pageY + c.y
            }) : document.createTouch(window, a.frameElement, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY)
        });
        if (d)
            return b;
        var e;
        return (e = document.createTouchList) == null ? void 0 : e.apply(document, b)
    };
    oP.prototype.ba = function(a) {
        var b = a.qa
          , c = Ul(this.frameElement);
        if ("TouchEvent"in window && TouchEvent.length > 0)
            b = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: b.detail,
                ctrlKey: b.ctrlKey,
                altKey: b.altKey,
                shiftKey: b.shiftKey,
                metaKey: b.metaKey,
                touches: qP(this, b.touches),
                targetTouches: qP(this, b.targetTouches),
                changedTouches: qP(this, b.changedTouches)
            },
            a = new TouchEvent(a.messageType,b),
            this.frameElement.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, qP(this, b.touches), qP(this, b.targetTouches), qP(this, b.changedTouches), b.scale, b.rotation);
            this.frameElement.dispatchEvent(d)
        }
    }
    ;
    oP.prototype.U = function(a) {
        switch (a.messageType) {
        case "showVideo":
            this.g == null ? (this.g = new JN,
            this.l.listen(this.g, "click", this.la)) : NN(this.g);
            LN(this.g, this.C.ac());
            break;
        case "hide":
            this.g !== null && (this.g.dispose(),
            this.g = null)
        }
        var b = this.P;
        WO(b.l, a);
        b.g && WO(b.g, a)
    }
    ;
    oP.prototype.la = function() {
        GH(this.j, "displayContainer", "videoClick")
    }
    ;
    oP.prototype.fa = function() {
        this.H = $k();
        this.K = Xk();
        var a = Fe(this.frameElement);
        this.o.forEach(function(c) {
            c.g = a;
            c.connect()
        });
        var b;
        (b = this.A) != null && (b.o = a,
        UO(b));
        this.G = !0
    }
    ;
    var rP = ra(["https://s0.2mdn.net/instream/video/client.js"])
      , sP = null
      , tP = function() {
        N.call(this);
        this.g = null;
        this.j = new Map;
        this.l = new Map;
        this.wa = this.C = !1;
        this.o = null;
        this.A = new bC(this);
        Rm(this, this.A)
    };
    v(tP, N);
    var uP = function() {
        sP == null && (sP = new tP);
        return sP
    }
      , ir = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && GH(a.g, "activityMonitor", "viewabilityMeasurement", d)
    };
    tP.prototype.destroy = function() {
        this.A.Ra(this.g, "activityMonitor", this.D);
        this.wa = !1;
        this.j.clear()
    }
    ;
    tP.prototype.O = function() {
        this.destroy();
        N.prototype.O.call(this)
    }
    ;
    tP.prototype.init = function(a) {
        if (!this.wa) {
            if (this.g = a || null)
                this.A.listen(this.g, "activityMonitor", this.D),
                vP(this);
            if (!(y.ima && y.ima.video && y.ima.video.client && y.ima.video.client.tagged)) {
                z("ima.video.client.sdkTag", !0);
                var b = y.document;
                a = Ae(document, "SCRIPT");
                var c = re(rP);
                vd(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            Cc();
            E(Zq).K = BG.g;
            this.C = !0;
            E(Zq).l = !0;
            this.o = null;
            a = E(Zq);
            b = Kq(a) == "h" || Kq(a) == "b";
            c = !(B(),
            !1);
            b && c && (a.D = !0,
            a.H = new dp);
            this.wa = !0
        }
    }
    ;
    var xP = function(a) {
        if (a == null)
            return !1;
        if ((Xd || Zd) && a.webkitDisplayingFullscreen !== null)
            return a.webkitDisplayingFullscreen;
        a = wP(a);
        var b = window.screen.availHeight || window.screen.height;
        return (window.screen.availWidth || window.screen.width) - a.width <= 0 && b - a.height <= 42
    }
      , wP = function(a) {
        var b = {
            left: a.offsetLeft,
            top: a.offsetTop,
            width: a.offsetWidth,
            height: a.offsetHeight
        };
        try {
            typeof a.getBoundingClientRect === "function" && Ee(te(a), a) && (b = a.getBoundingClientRect())
        } catch (c) {}
        return b
    }
      , yP = function(a, b, c, d, e) {
        e = e === void 0 ? {} : e;
        if (a.wa) {
            d && e.opt_osdId == null && (e.opt_osdId = d);
            if (a.o)
                return a.o(b, c, e);
            if (a = d ? a.l.get(d) : BG.l)
                e.opt_fullscreen == null && (e.opt_fullscreen = xP(a)),
                e.opt_adElement == null && (e.opt_adElement = a);
            return iu.Bb(469, fb(kr, b, c, e)) || {}
        }
        return {}
    }
      , zP = function(a) {
        var b;
        BG.g !== 0 ? b = E(Zq).l : b = a.C;
        return b
    }
      , AP = function(a, b) {
        var c = String(Math.floor(Math.random() * 1E9));
        a.l.set(c, b);
        BG.g !== 0 && (E(Zq).o[c] = a);
        return c
    }
      , BP = function(a, b, c) {
        if (c)
            a.j.get(c) === b && a.j.delete(c);
        else {
            var d = [];
            a.j.forEach(function(e, f) {
                e === b && d.push(f)
            });
            d.forEach(a.j.delete, a.j)
        }
    }
      , er = function(a, b) {
        a = a.j.get(b);
        return typeof a === "function" ? a() : {}
    }
      , vP = function(a) {
        if (typeof window.Goog_AdSense_Lidar_getUrlSignalsArray === "function") {
            var b = {};
            b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
            var c;
            (c = a.g) == null || GH(c, "activityMonitor", "pageSignals", b)
        }
    };
    tP.prototype.D = function(a) {
        var b = a.qa
          , c = b.queryId
          , d = {}
          , e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
        case "getPageSignals":
            vP(this);
            break;
        case "reportVastEvent":
            e = b.vastEvent;
            a = b.osdId;
            var f = {};
            f.opt_fullscreen = b.isFullscreen;
            b.isOverlay && (f.opt_bounds = b.overlayBounds);
            d.viewabilityData = yP(this, e, c, a, f);
            var g;
            (g = this.g) == null || GH(g, "activityMonitor", "viewability", d);
            break;
        case "fetchAdTagUrl":
            c = {},
            c.eventId = b.eventId,
            a = b.osdId,
            fc(b, "isFullscreen") && (e = b.isFullscreen),
            fc(b, "loggingId") && (b = b.loggingId,
            c.loggingId = b,
            W.getInstance().report(43, {
                step: "beforeLookup",
                logid: b,
                time: Date.now()
            })),
            c.engagementString = CP(this, a, e),
            this.g && GH(this.g, "activityMonitor", "engagement", c)
        }
    }
    ;
    var CP = function(a, b, c) {
        var d, e = b ? (d = a.l.get(b)) != null ? d : null : BG.l;
        a = {};
        c != null && (a.fullscreen = c);
        c = "";
        try {
            c = Ms(function() {
                return e
            }, a)
        } catch (f) {
            c = f,
            c = "sdktle;" + Cd(c.name, 12) + ";" + Cd(c.message, 40)
        }
        return c
    };
    z("ima.common.getVideoMetadata", function(a) {
        return er(uP(), a)
    });
    z("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        ir(uP(), a, b)
    });
    var DP = new pe(5,5)
      , EP = function(a) {
        bG.call(this, a);
        this.V = this.G = this.C = null;
        this.aa = !1;
        this.size = this.getSize();
        this.fullscreen = this.Nd()
    };
    v(EP, bG);
    m = EP.prototype;
    m.Be = function(a) {
        if (!y.customElements)
            return !1;
        if (a)
            return !0;
        tN(ew) && W.getInstance().report(153, {
            limvid: "vd"
        });
        return tN(ew) ? !0 : !1
    }
    ;
    m.unload = function() {
        cG(this);
        this.U = !1;
        var a = this.g;
        a: {
            var b = this.g;
            try {
                if ("removeAttribute"in b) {
                    b.removeAttribute("src");
                    var c = !0;
                    break a
                }
            } catch (d) {}
            c = !1
        }
        c || (a.src = "");
        a.load()
    }
    ;
    m.getVideoUrl = function() {
        return this.g.src
    }
    ;
    m.setVolume = function(a) {
        var b = this.g;
        b.volume = Math.max(a, 0);
        b.muted = a === 0 ? !0 : !1
    }
    ;
    m.me = function(a) {
        var b = this.g;
        b.style.left = String(a.left) + "px";
        b.style.top = String(a.top) + "px";
        b.style.width = String(a.width) + "px";
        b.style.height = String(a.height) + "px"
    }
    ;
    m.ne = function() {
        var a = this.g;
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0";
        a.style.right = "0"
    }
    ;
    m.play = function() {
        var a = this;
        this.aa = !1;
        if (!this.U && !bd())
            return this.K = !0,
            Promise.resolve();
        this.K = !1;
        this.o = this.g.play();
        return this.o != null ? (this.M = null,
        this.o.then(function() {
            a.o = null;
            a.gd(a.M);
            a.M = null
        }).catch(function(b) {
            a.o = null;
            var c = "";
            b != null && b.name != null && (c = b.name);
            if (c === "AbortError" || c === "NotAllowedError")
                a.dispatchEvent("autoplayDisallowed");
            else
                a.onError()
        })) : Promise.resolve()
    }
    ;
    m.pause = function() {
        this.o == null && (this.aa = !0,
        this.g.pause())
    }
    ;
    m.Ze = function() {
        var a = this.g;
        return a.paused ? $d || me ? a.currentTime < a.duration : !0 : !1
    }
    ;
    m.Nd = function() {
        return xP(this.g)
    }
    ;
    m.getSize = function() {
        return new pe(this.g.offsetWidth,this.g.offsetHeight)
    }
    ;
    m.O = function() {
        this.V && JA(this.V);
        this.Ub();
        bG.prototype.O.call(this)
    }
    ;
    m.De = function() {
        this.Ub();
        var a = this.g;
        this.j.listen(a, eO, this.kh);
        this.j.listen(a, "ended", this.Vd);
        this.j.listen(a, "webkitbeginfullscreen", this.Sa);
        this.j.listen(a, "webkitendfullscreen", this.cf);
        this.j.listen(a, "loadedmetadata", this.onLoadedMetadata);
        this.j.listen(a, "pause", this.Xd);
        this.j.listen(a, "playing", this.gd);
        this.j.listen(a, "timeupdate", this.Yd);
        this.j.listen(a, "volumechange", this.df);
        this.j.listen(a, "error", this.onError);
        this.j.listen(a, le || $d && (!$d || !KB(IB, 8)) ? "loadeddata" : "canplay", this.Wd);
        this.C = new JN;
        this.j.listen(this.C, "click", this.Rf);
        LN(this.C, a);
        this.G = new us(1E3);
        this.j.listen(this.G, "tick", this.ya);
        this.G.start()
    }
    ;
    m.Ub = function() {
        this.C != null && (NN(this.C),
        this.C = null);
        this.G != null && this.G.dispose();
        fC(this.j);
        cG(this)
    }
    ;
    m.kh = function(a) {
        this.dispatchEvent(a.type)
    }
    ;
    m.kc = function() {
        if (!this.l) {
            this.l = !0;
            this.dispatchEvent("start");
            try {
                if (tN(ew) && y.customElements) {
                    var a = y.customElements.get("lima-video");
                    this.g instanceof a ? W.getInstance().report(153, {
                        limvid: "limastart"
                    }) : W.getInstance().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (b) {
                W.getInstance().report(153, {
                    limvid: "startfail"
                })
            }
        }
    }
    ;
    m.onLoadedMetadata = function() {
        this.U = !0;
        this.K && this.play();
        this.K = !1;
        FP(this)
    }
    ;
    m.gd = function(a) {
        this.o != null ? this.M = a : (this.dispatchEvent("play"),
        $d || LB() || le || this.kc())
    }
    ;
    m.Yd = function(a) {
        if (!this.l && ($d || LB() || le)) {
            if (this.getCurrentTime() <= 0)
                return;
            if (le && this.g.ended && this.getDuration() === 1) {
                this.onError(a);
                return
            }
            this.kc()
        }
        if ($d || Tc(Wc(), "Nintendo WiiU")) {
            if (this.getCurrentTime() - this.A > 1.5) {
                this.H = !0;
                this.g.currentTime = this.A;
                return
            }
            this.H = !1;
            this.getCurrentTime() > this.A && (this.A = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    }
    ;
    m.Xd = function() {
        if (this.l && $d && !this.aa && (GP(this) < 2 || this.H)) {
            this.D = new us(250);
            this.j.listen(this.D, "tick", this.xa);
            this.D.start();
            var a = !0
        } else
            a = !1;
        a || this.o || this.dispatchEvent("pause")
    }
    ;
    m.Vd = function() {
        var a = !0;
        if ($d || Tc(Wc(), "Nintendo WiiU"))
            a = this.A >= this.g.duration - 1.5;
        !this.H && a && this.dispatchEvent("end")
    }
    ;
    m.cf = function() {
        this.dispatchEvent("endFullscreen")
    }
    ;
    m.onError = function() {
        this.dispatchEvent("error")
    }
    ;
    m.Rf = function() {
        this.dispatchEvent("click")
    }
    ;
    var FP = function(a) {
        var b = a.g;
        b instanceof HTMLElement && (a.V = IA(b, DP),
        a.V.then(function(c) {
            a.Da() || Q(P.getInstance(), "ps", c.width + "x" + c.height)
        }))
    };
    EP.prototype.ya = function() {
        var a = this.getSize()
          , b = this.Nd();
        if (a.width !== this.size.width || a.height !== this.size.height)
            !this.fullscreen && b ? this.dispatchEvent("beginFullscreen") : this.fullscreen && !b && this.cf(),
            this.size = a,
            this.fullscreen = b
    }
    ;
    EP.prototype.xa = function() {
        if (this.g.ended || !this.Ze())
            Pm(this.D);
        else {
            var a = this.g;
            a = a.duration - a.currentTime;
            var b = GP(this);
            b > 0 && (b >= 2 || a < 2) && (Pm(this.D),
            this.play())
        }
    }
    ;
    var GP = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; b >= 0; b--)
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
            b = 0
        }
        return b - a.g.currentTime
    };
    EP.prototype.Sa = function() {
        W.getInstance().report(139);
        this.dispatchEvent("beginFullscreen")
    }
    ;
    var KP = function(a) {
        if (a instanceof HP || a instanceof IP || a instanceof JP)
            return a;
        if (typeof a.next == "function")
            return new HP(function() {
                return a
            }
            );
        if (typeof a[Symbol.iterator] == "function")
            return new HP(function() {
                return a[Symbol.iterator]()
            }
            );
        if (typeof a.Fb == "function")
            return new HP(function() {
                return a.Fb()
            }
            );
        throw Error("Not an iterator or iterable.");
    }
      , HP = function(a) {
        this.g = a
    };
    HP.prototype.Fb = function() {
        return new IP(this.g())
    }
    ;
    HP.prototype[Symbol.iterator] = function() {
        return new JP(this.g())
    }
    ;
    HP.prototype.j = function() {
        return new JP(this.g())
    }
    ;
    var IP = function(a) {
        this.g = a
    };
    v(IP, Fn);
    IP.prototype.next = function() {
        return this.g.next()
    }
    ;
    IP.prototype[Symbol.iterator] = function() {
        return new JP(this.g)
    }
    ;
    IP.prototype.j = function() {
        return new JP(this.g)
    }
    ;
    var JP = function(a) {
        HP.call(this, function() {
            return a
        });
        this.l = a
    };
    v(JP, HP);
    JP.prototype.next = function() {
        return this.l.next()
    }
    ;
    var LP = function(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof LP)
                for (c = a.Jc(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    };
    LP.prototype.Jb = function() {
        MP(this);
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.j[this.g[b]]);
        return a
    }
    ;
    LP.prototype.Jc = function() {
        MP(this);
        return this.g.concat()
    }
    ;
    LP.prototype.has = function(a) {
        return NP(this.j, a)
    }
    ;
    LP.prototype.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.size != a.size)
            return !1;
        b = b || OP;
        MP(this);
        for (var c, d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c)))
                return !1;
        return !0
    }
    ;
    var OP = function(a, b) {
        return a === b
    };
    LP.prototype.isEmpty = function() {
        return this.size == 0
    }
    ;
    LP.prototype.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    }
    ;
    LP.prototype.remove = function(a) {
        return this.delete(a)
    }
    ;
    LP.prototype.delete = function(a) {
        return NP(this.j, a) ? (delete this.j[a],
        --this.size,
        this.l++,
        this.g.length > 2 * this.size && MP(this),
        !0) : !1
    }
    ;
    var MP = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                NP(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            b = {};
            for (d = c = 0; c < a.g.length; ) {
                var e = a.g[c];
                NP(b, e) || (a.g[d++] = e,
                b[e] = 1);
                c++
            }
            a.g.length = d
        }
    };
    m = LP.prototype;
    m.get = function(a, b) {
        return NP(this.j, a) ? this.j[a] : b
    }
    ;
    m.set = function(a, b) {
        NP(this.j, a) || (this.size += 1,
        this.g.push(a),
        this.l++);
        this.j[a] = b
    }
    ;
    m.forEach = function(a, b) {
        for (var c = this.Jc(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    m.keys = function() {
        return KP(this.Fb(!0)).j()
    }
    ;
    m.values = function() {
        return KP(this.Fb(!1)).j()
    }
    ;
    m.entries = function() {
        var a = this;
        return BA(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    m.Fb = function(a) {
        MP(this);
        var b = 0
          , c = this.l
          , d = this
          , e = new Fn;
        e.next = function() {
            if (c != d.l)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return Gn;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    var NP = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var QP = function() {
        N.call(this);
        this.currentTime = this.o = 0;
        this.duration = NaN;
        this.j = !0;
        this.controls = this.loop = this.autoplay = this.D = !1;
        this.volume = 1;
        this.muted = !1;
        this.K = 1;
        this.playbackRate = 0;
        this.g = null;
        this.A = 0;
        this.P = 4;
        this.C = this.l = null;
        this.buffered = new PP;
        this.M = new PP;
        this.H = "";
        this.tagName = "VIDEO";
        this.height = this.width = 0;
        this.canPlayType = function() {
            return ""
        }
        ;
        this.G = new bC(this);
        Rm(this, this.G);
        var a = AG(BG);
        a && (this.duration = yG(a))
    };
    v(QP, N);
    var RP = function() {
        var a = ["video/mp4"]
          , b = ["video/ogg"]
          , c = new QP;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        }
        ;
        return c
    };
    QP.prototype.play = function() {
        SP(this);
        return null
    }
    ;
    var SP = function(a) {
        a.D && (a.currentTime = 0,
        a.dispatchEvent("timeupdate"));
        a.j && (a.j = !1,
        a.dispatchEvent("play"),
        a.o = a.P,
        a.o <= 2 ? a.dispatchEvent("waiting") : a.dispatchEvent("playing"));
        if (a.g === null || a.g.Da())
            a.g = new us(10),
            Rm(a, a.g),
            a.g.listen("tick", function() {
                var b = jb() - a.A
                  , c = a.currentTime + b / 1E3;
                a.A += b;
                a.o > 2 && (a.currentTime = Math.min(c, a.duration));
                a.dispatchEvent("timeupdate");
                if (a.currentTime === a.duration) {
                    a.j = !0;
                    a.D = !0;
                    var d;
                    (d = a.g) == null || d.stop();
                    a.dispatchEvent("ended")
                }
            });
        a.A = jb();
        a.g.start();
        a.autoplay = !1
    };
    m = QP.prototype;
    m.pause = function() {
        this.autoplay = !1;
        if (!this.j) {
            var a;
            (a = this.g) == null || a.stop();
            this.j = !0;
            this.dispatchEvent("timeupdate");
            this.dispatchEvent("pause")
        }
    }
    ;
    m.load = function() {
        this.o = 0;
        this.j = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + Math.random() * 20 : a = this.duration;
        this.duration = Number(a);
        this.dispatchEvent("durationchange");
        a = this.M;
        a.g.push(new TP(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new TP(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        this.currentTime > 0 && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.K
    }
    ;
    m.setVolume = function(a) {
        this.volume = a;
        this.dispatchEvent("volumechange")
    }
    ;
    m.setAttribute = function(a, b) {
        a != null && UP.set(a, b)
    }
    ;
    m.getAttribute = function(a) {
        return UP.get(a)
    }
    ;
    m.ph = function(a) {
        var b = null
          , c = null;
        switch (a.type) {
        case "loadeddata":
            b = "Loaded";
            break;
        case "playing":
            b = "Playing";
            c = "#00f";
            break;
        case "pause":
            b = "Paused";
            break;
        case "ended":
            b = "Ended",
            c = "#000"
        }
        b && this.C && (this.C.innerText = b);
        c && this.l && (this.l.style.backgroundColor = c)
    }
    ;
    da.Object.defineProperties(QP.prototype, {
        src: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H
            },
            set: function(a) {
                this.H = a
            }
        }
    });
    var UP = new LP
      , TP = function(a) {
        this.startTime = 0;
        this.endTime = a
    }
      , PP = function() {
        this.length = 0;
        this.g = []
    };
    PP.prototype.start = function(a) {
        return this.g[a].startTime
    }
    ;
    PP.prototype.end = function(a) {
        return this.g[a].endTime
    }
    ;
    var WP = function(a) {
        M.call(this);
        this.o = a;
        this.g = this.j = null;
        this.l = VP(this);
        this.j = document.createElement("div");
        this.j.style.display = "none";
        this.o.appendChild(this.j);
        this.j.appendChild(this.l);
        this.g = document.createElement("div");
        this.g.style.position = "absolute";
        this.g.style.width = "100%";
        this.g.style.height = "100%";
        this.g.style.left = "0px";
        this.g.style.top = "0px";
        this.j.appendChild(this.g);
        oF(function() {
            Q(P.getInstance(), "haob", "1")
        })
    };
    v(WP, M);
    WP.prototype.initialize = function() {
        this.l && this.l.load()
    }
    ;
    WP.prototype.O = function() {
        De(this.j);
        M.prototype.O.call(this)
    }
    ;
    var VP = function(a) {
        var b = AG(BG);
        if (xG(b, "useVideoElementFake"))
            a = RP(),
            b = Ce("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }),
            Object.assign(b, a),
            a.l = Ce("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }),
            a.C = Ce("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }),
            a.l.appendChild(a.C),
            b.appendChild(a.l),
            a.G.listen(a, ["loadeddata", "playing", "pause", "ended"], a.ph),
            a = b;
        else {
            b = !1;
            try {
                window.location.search.indexOf("goog_limavideo=true") !== -1 && (b = !0)
            } catch (c) {}
            if (XP(a, b)) {
                b && console.log("force lima video in wrapper");
                a = null;
                try {
                    a = new AF
                } catch (c) {
                    a = document.createElement("lima-video"),
                    tN(ew) && W.getInstance().report(153, {
                        limvid: "firefail"
                    })
                }
                a.style.backgroundColor = "#000";
                a.style.height = "100%";
                a.style.width = "100%";
                a.style.position = "absolute";
                a.style.left = "0";
                a.style.top = "0"
            } else
                a = document.createElement("video"),
                a.style.backgroundColor = "#000",
                a.style.height = "100%",
                a.style.width = "100%",
                a.style.position = "absolute",
                a.style.left = "0",
                a.style.top = "0",
                a.title = "Advertisement".toString()
        }
        a.setAttribute("webkit-playsinline", "true");
        a.setAttribute("playsinline", "true");
        return a
    }
      , XP = function(a, b) {
        if (!y.customElements)
            return !1;
        if (b)
            return !0;
        if (cd() && te(a.o) !== document)
            return !1;
        tN(ew) && W.getInstance().report(153, {
            limvid: "vw"
        });
        return tN(ew) ? !0 : !1
    };
    WP.prototype.ac = function() {
        return this.g
    }
    ;
    WP.prototype.ob = function() {
        var a = this.j;
        a != null && (a.style.display = "none")
    }
    ;
    var $P = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (a == null || !Ee(te(d), d))
            throw YH(XH, null, "containerElement", "element");
        this.j = b;
        this.P = oH(this.j || null);
        this.M = MB(this.j || null);
        this.K = String(Math.floor(Math.random() * 1E9));
        this.D = !1;
        this.qc = a;
        this.H = b != null;
        BG.g = 2;
        this.I = YP(b ? b : null);
        d = Ce("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.o = d;
        this.g = null;
        ZP(this) && b ? a = new EP(b) : (this.g = new WP(this.o),
        a = new EP(this.g.l));
        this.ga = a;
        this.Aa = this.l = null;
        if (a = this.g && BG.o)
            a = !(ZP(this) || Xd || Zd || km() || Wd && (!Wd || !KB(JB, 4)));
        a && (this.l = new WP(this.o),
        this.Aa = new EP(this.l.l));
        this.B = c || null;
        this.G = this.B != null;
        ZP(this) && b ? typeof b.getBoundingClientRect !== "function" ? (c = this.o,
        BG.l = c) : c = b : c = this.o;
        this.C = c;
        this.A = new oP(this.o,this,!1);
        this.size = new pe(0,0);
        this.L = "";
        b && (b = Kz(b.src || b.currentSrc),
        b.toString().length < 200 ? this.L = b.toString() : b.g.length < 200 && (this.L = b.g));
        this.we = new Map;
        this.we.set("videoDisplay1", this.ga);
        this.Aa && this.we.set("videoDisplay2", this.Aa);
        this.rd() && !BG.j && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.")
    };
    m = $P.prototype;
    m.initialize = function() {
        this.D = !0;
        this.g != null && this.g.initialize();
        this.l != null && this.l.initialize()
    }
    ;
    m.wa = function() {
        return this.D
    }
    ;
    m.destroy = function() {
        var a = this;
        this.j = null;
        Pm(this.g);
        Pm(this.l);
        Pm(this.A);
        this.ga.uc(function() {
            return Pm(a.ga)
        });
        this.Aa != null && this.Aa.uc(function() {
            return Pm(a.Aa)
        });
        De(this.o)
    }
    ;
    m.pd = function() {
        if (this.g != null) {
            var a = this.g.j;
            a != null && (a.style.display = "block")
        }
    }
    ;
    m.xc = function(a) {
        this.ga !== a && this.g && this.l && this.Aa && (a.setVolume(this.ga.getVolume()),
        a = this.ga,
        this.ga = this.Aa,
        this.Aa = a,
        a = this.g,
        this.g = this.l,
        this.l = a,
        this.l.ob(),
        this.A.xc(this.ga))
    }
    ;
    m.ob = function() {
        this.g != null && this.g.ob()
    }
    ;
    m.ac = function() {
        return this.G && this.B ? this.B : this.g != null ? this.g.ac() : null
    }
    ;
    var ZP = function(a) {
        return nH(a.I) && a.H
    };
    $P.prototype.rd = function() {
        var a = ["VIDEO", "AUDIO"], b;
        return ZP(this) && !!this.j && !a.includes((b = this.j.tagName) == null ? void 0 : b.toUpperCase())
    }
    ;
    $P.prototype.setSize = function(a, b) {
        var c = this.o;
        c != null && (a === -1 ? (c.style.right = "0",
        c.style.left = "0") : c.style.width = a + "px",
        b === -1 ? (c.style.bottom = "0",
        c.style.top = "0") : c.style.height = b + "px");
        c = this.A;
        c.frameElement.width = a === -1 ? "100%" : String(a);
        c.frameElement.height = b === -1 ? "100%" : String(b);
        try {
            c.frameElement.offsetTop = c.frameElement.offsetTop
        } catch (d) {}
        this.size = new pe(a,b)
    }
    ;
    $P.prototype.getSize = function() {
        return this.size
    }
    ;
    var YP = function(a) {
        return a != null && typeof a.getAttribute === "function" && a.getAttribute("playsinline") != null ? !0 : !1
    };
    $P.prototype.me = function(a) {
        this.ga.me(a)
    }
    ;
    $P.prototype.ne = function() {
        this.ga.ne()
    }
    ;
    $P.prototype.destroy = $P.prototype.destroy;
    $P.prototype.initialize = $P.prototype.initialize;
    var aQ = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    }
      , bQ = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.data = a
    };
    v(bQ, Error);
    m = bQ.prototype;
    m.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new bQ(a) : a != null ? Error(a) : null
    }
    ;
    m.getMessage = function() {
        return this.data.errorMessage
    }
    ;
    m.getErrorCode = function() {
        return this.data.errorCode
    }
    ;
    m.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return a < 1E3 ? a : 900
    }
    ;
    m.getType = function() {
        return this.data.type
    }
    ;
    m.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    bQ.prototype.getType = bQ.prototype.getType;
    bQ.prototype.getVastErrorCode = bQ.prototype.getVastErrorCode;
    bQ.prototype.getErrorCode = bQ.prototype.getErrorCode;
    bQ.prototype.getMessage = bQ.prototype.getMessage;
    bQ.prototype.getInnerError = bQ.prototype.getInnerError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", aQ);
    var cQ = {
        AD_ERROR: "adError"
    }
      , dQ = function(a, b) {
        b = b === void 0 ? null : b;
        tr.call(this, "adError");
        this.error = a;
        this.g = b
    };
    v(dQ, tr);
    dQ.prototype.getError = function() {
        return this.error
    }
    ;
    dQ.prototype.getUserRequestContext = function() {
        return this.g
    }
    ;
    dQ.prototype.getUserRequestContext = dQ.prototype.getUserRequestContext;
    dQ.prototype.getError = dQ.prototype.getError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", cQ);
    var eQ = {
        AD_CAN_PLAY: "adCanPlay",
        Ph: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        xe: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        Ee: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        ye: "fully_viewable_audible_half_duration_impression",
        Uf: "overlay_resize",
        Vf: "overlay_unmeasurable_impression",
        Wf: "overlay_unviewable_impression",
        Yf: "overlay_viewable_immediate_impression",
        Xf: "overlay_viewable_end_of_session_impression",
        ji: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        kj: "userRecall",
        Wi: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        cg: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        AD_BREAK_FETCH_ERROR: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        Vh: "companionBackfill",
        ij: "trackingUrlPinged",
        lj: "video_card_endcap_collapse",
        mj: "video_card_endcap_dismiss",
        nj: "video_card_endcap_impression",
        Yh: "companionInitialized",
        Xh: "companionImpression",
        Wh: "companionClick",
        Qi: "mediaUrlPinged",
        LOAD_START: "loadStart",
        Si: "navigationRequested"
    }
      , fQ = function(a, b, c) {
        b = b === void 0 ? null : b;
        c = c === void 0 ? null : c;
        tr.call(this, a);
        this.ad = b;
        this.j = c
    };
    v(fQ, tr);
    fQ.prototype.getAd = function() {
        return this.ad
    }
    ;
    fQ.prototype.getAdData = function() {
        return this.j
    }
    ;
    fQ.prototype.getAdData = fQ.prototype.getAdData;
    fQ.prototype.getAd = fQ.prototype.getAd;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", eQ);
    var gQ = function(a, b) {
        b = b === void 0 ? null : b;
        fQ.call(this, "adMetadata", a);
        this.g = b
    };
    v(gQ, fQ);
    gQ.prototype.Ag = function() {
        return this.g
    }
    ;
    gQ.prototype.getAdCuePoints = gQ.prototype.Ag;
    var hQ = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var iQ = function(a, b) {
        N.call(this);
        this.l = a;
        this.A = b;
        this.j = this.l.currentTime;
        this.g = new us(250);
        Rm(this, this.g);
        this.o = new bC(this);
        Rm(this, this.o);
        dC(this.o, this.g, "tick", this.C, !1, this)
    };
    v(iQ, N);
    iQ.prototype.lb = function() {
        return this.j
    }
    ;
    iQ.prototype.start = function() {
        jQ(this);
        this.g.start()
    }
    ;
    iQ.prototype.stop = function() {
        this.g.stop()
    }
    ;
    iQ.prototype.C = function() {
        var a = this.l.currentTime;
        a !== this.lb() && (this.j = a,
        jQ(this))
    }
    ;
    var jQ = function(a) {
        var b = {};
        b.currentTime = a.lb();
        GH(a.A, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var kQ = Ud && "srcdoc"in Ae(document, "IFRAME");
    function lQ(a, b) {
        a.open("text/html", "replace");
        zd(a, aC(String(b)));
        a.close()
    }
    ;var mQ = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , nQ = function(a) {
        a = Kc(a);
        if (a == "")
            return null;
        var b = String(a.slice(0, 4)).toLowerCase();
        if (("url(" < b ? -1 : "url(" == b ? 0 : 1) == 0)
            return null;
        if (a.indexOf("(") > 0) {
            if (/"|'/.test(a))
                return null;
            b = /([\-\w]+)\(/g;
            for (var c; c = b.exec(a); )
                if (!(c[1].toLowerCase()in mQ))
                    return null
        }
        return a
    };
    function oQ(a, b) {
        a = y[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }
    function pQ(a) {
        var b = y.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    oQ("Element", "attributes") || oQ("Node", "attributes");
    oQ("Element", "innerHTML") || oQ("HTMLElement", "innerHTML");
    oQ("Node", "nodeName");
    oQ("Node", "nodeType");
    oQ("Node", "parentNode");
    oQ("Node", "childNodes");
    oQ("HTMLElement", "style") || oQ("Element", "style");
    oQ("HTMLStyleElement", "sheet");
    var qQ = pQ("getPropertyValue")
      , rQ = pQ("setProperty");
    oQ("Element", "namespaceURI") || oQ("Node", "namespaceURI");
    function sQ(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if (Rd && document.documentMode < 10) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if (typeof b[c] != "function")
            throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }
    ;var tQ = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };
    function uQ(a) {
        if (!a)
            return "";
        var b = document.createElement("div").style;
        vQ(a).forEach(function(c) {
            var d = Ud && c in tQ ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            d.lastIndexOf("--", 0) != 0 && d.lastIndexOf("var", 0) != 0 && (c = sQ(qQ, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "",
            c = nQ(c),
            c != null && sQ(rQ, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
        });
        return b.cssText || ""
    }
    function vQ(a) {
        Va(a) ? a = Ib(a) : (a = cc(a),
        Db(a, "cssText"));
        return a
    }
    ;var wQ = function(a, b, c) {
        N.call(this);
        this.j = a;
        this.l = b;
        this.C = c;
        this.g = null;
        this.G = this.D = "";
        this.H = 0;
        this.o = this.slot = this.frameElement = null;
        this.A = ""
    };
    v(wQ, N);
    wQ.prototype.init = function(a) {
        this.A = a;
        a = "about:blank";
        Rd && (a = "");
        this.frameElement = Ce("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
            title: "Advertisement"
        });
        Pl(this.frameElement, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.j.qc;
        a.appendChild(this.frameElement);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        this.o == null && (this.o = new bC(this));
        this.o.listen(a, "message", this.K);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.A + '");\x3c/script></body>');
        if (me || ke || Sd) {
            var b = this.frameElement.contentWindow;
            b && lQ(b.document, a)
        } else
            b = this.frameElement,
            kQ ? (a = aC(a),
            b.srcdoc = ud(a)) : (b = b.contentWindow) && lQ(b.document, a)
    }
    ;
    wQ.prototype.K = function(a) {
        try {
            var b = a.Tb.data;
            try {
                var c = JSON.parse(b)
            } catch (t) {
                return
            }
            var d = c.session;
            if (d != null && this.A === d)
                switch (c.type) {
                case "friendlyReady":
                    var e = xQ(this);
                    if (e != null) {
                        this.g = e;
                        this.D = e.currentSrc;
                        var f = e.style.cssText
                          , g = document.implementation.createHTMLDocument("").createElement("DIV");
                        g.style.cssText = f;
                        this.G = uQ(g.style);
                        this.H = e.currentTime
                    } else {
                        var h = this.j.qc
                          , k = "border: 0; margin: 0; padding: 0; position: absolute; "
                          , l = this.j.getSize();
                        k += "width:" + l.width + "px;";
                        k += "height:" + l.height + "px;";
                        this.g = Ce("VIDEO", {
                            style: k,
                            autoplay: !0
                        });
                        h.appendChild(this.g)
                    }
                    var n = this.j.qc;
                    h = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var p = Yl(this.g);
                    h += "width:" + p.width + "px;";
                    h += "height:" + p.height + "px;";
                    this.slot = Ce("DIV", {
                        style: h
                    });
                    n.appendChild(this.slot);
                    try {
                        this.frameElement.contentWindow.loader.initFriendly(this.g, this.slot)
                    } catch (t) {
                        yQ(this)
                    }
                    GH(this.l, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !lf() && !kf() && Pl(this.g, {
                        visibility: "visible"
                    });
                    GH(this.l, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    zQ(this);
                    GH(this.l, "vpaid", "", b);
                    break;
                case "startAd":
                    n = {};
                    if (this.g) {
                        k = this.g.paused;
                        var r = this.g.currentTime > 0;
                        n.apl = r && !k ? "1" : "0";
                        n.ip = k ? "1" : "0";
                        n.iavp = r ? "1" : "0"
                    } else
                        n.apl = "n";
                    W.getInstance().report(99, n);
                    GH(this.l, "vpaid", "", b);
                    this.pd();
                    break;
                default:
                    GH(this.l, "vpaid", "", b)
                }
        } catch (t) {
            yQ(this)
        }
    }
    ;
    var yQ = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.A;
        b = JSON.stringify(b);
        a.postMessage(b)
    };
    wQ.prototype.postMessage = function(a) {
        window.postMessage(a, "*")
    }
    ;
    var xQ = function(a) {
        return (a.C === "videoDisplayUnknown" ? a.j.ga : a.j.we.get(a.C)).g
    };
    wQ.prototype.pd = function() {
        xQ(this) != null && this.j.pd()
    }
    ;
    var zQ = function(a) {
        a.g && !lf() && !kf() && Pl(a.g, {
            visibility: "hidden"
        })
    };
    wQ.prototype.O = function() {
        Pm(this.o);
        this.o = null;
        De(this.slot);
        this.slot = null;
        De(this.frameElement);
        this.frameElement = null;
        var a = xQ(this);
        a != null ? (a.style.cssText = this.G,
        lf() || kf() ? (a.src = this.D,
        a.currentTime = this.H) : (a.removeAttribute("src"),
        this.j.ob())) : (De(this.g),
        this.g = null);
        N.prototype.O.call(this)
    }
    ;
    var AQ = function(a, b) {
        M.call(this);
        this.j = a;
        this.l = b;
        this.g = new Map
    };
    v(AQ, M);
    var BQ = function(a, b) {
        try {
            var c = b.session;
            switch (b.vpaidEventType) {
            case "createFriendlyIframe":
                c = "videoDisplayUnknown";
                b.videoDisplayName && (c = b.videoDisplayName);
                var d = b.session
                  , e = new wQ(a.j,a.l,c);
                a.g.set(d, e);
                e.init(d);
                break;
            case "vpaidNonLinear":
                var f = a.g.get(c);
                f && zQ(f);
                break;
            case "destroyFriendlyIframe":
                var g = a.g.get(c);
                g && (g.dispose(),
                a.g.delete(c))
            }
        } catch (h) {
            W.getInstance().report(125, {
                msg: h.message
            })
        }
    };
    AQ.prototype.O = function() {
        this.g.forEach(function(a) {
            a.dispose()
        })
    }
    ;
    var CQ = function(a) {
        this.F = G(a)
    };
    v(CQ, J);
    CQ.prototype.getValue = function() {
        return Xi(this, 1)
    }
    ;
    CQ.prototype.getVersion = function() {
        return Yi(this, 5)
    }
    ;
    var DQ = Ik(CQ);
    var EQ = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    m = EQ.prototype;
    m.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.rf;
            d = c.md || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Vc
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "")
    }
    ;
    m.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Kc(d[e]);
            if (f.lastIndexOf(c, 0) == 0)
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    m.remove = function(a, b, c) {
        var d = this.get(a) !== void 0;
        this.set(a, "", {
            Vc: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    m.Jc = function() {
        return FQ(this).keys
    }
    ;
    m.Jb = function() {
        return FQ(this).values
    }
    ;
    m.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    m.clear = function() {
        for (var a = FQ(this).keys, b = a.length - 1; b >= 0; b--)
            this.remove(a[b])
    }
    ;
    var FQ = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = Kc(a[f]),
            d = e.indexOf("="),
            d == -1 ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    function GQ(a, b, c) {
        return Ti(b, 5) ? HQ(a, c) : null
    }
    var IQ;
    function JQ(a) {
        return IQ ? IQ : a.origin === "null" ? IQ = !1 : IQ = KQ(a)
    }
    function KQ(a) {
        if (!a.navigator.cookieEnabled)
            return !1;
        var b = new EQ(a.document);
        if (!b.isEmpty())
            return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Vc: 60,
            rf: a.isSecureContext ? "none" : void 0,
            md: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1")
            return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    }
    function HQ(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new EQ({
            cookie: b
        })).get(a) || ""
    }
    function LQ(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = Object.assign({}, c, {
            rf: "none",
            md: !0
        })),
        (new EQ(d.document)).set(a, b, c))
    }
    ;var MQ = function() {
        this.g = window
    }
      , NQ = function(a, b) {
        return Ti(b, 5) ? !!JQ(a.g) : !1
    }
      , OQ = function(a, b, c, d) {
        if (d) {
            var e = Sv(Wi(c, 2)) - Date.now() / 1E3;
            e = {
                Vc: Math.max(e, 0),
                path: Xi(c, 3),
                domain: Xi(c, 4),
                md: !1
            };
            c = c.getValue();
            a = a.g;
            Ti(d, 5) && LQ(b, c, e, a)
        }
    }
      , PQ = function(a, b, c) {
        if (c && GQ(b, c, a.g)) {
            var d = a.g.location.hostname;
            if (d === "localhost")
                d = ["localhost"];
            else if (d = d.split("."),
            d.length < 2)
                d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f)
                    e.push(d.slice(f).join("."));
                d = e
            }
            d = x(d);
            for (var g = d.next(); !g.done; g = d.next())
                e = b,
                f = a.g,
                g = g.value,
                Ti(c, 5) && f.origin !== "null" && (new EQ(f.document)).remove(e, "/", g)
        }
    };
    function QQ() {
        this.g = [];
        this.j = []
    }
    m = QQ.prototype;
    m.isEmpty = function() {
        return this.g.length === 0 && this.j.length === 0
    }
    ;
    m.clear = function() {
        this.g = [];
        this.j = []
    }
    ;
    m.contains = function(a) {
        return Cb(this.g, a) || Cb(this.j, a)
    }
    ;
    m.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;
            c < 0 && (c = Math.max(0, b.length + c));
            if (typeof b === "string")
                c = typeof a !== "string" || a.length != 1 ? -1 : b.lastIndexOf(a, c);
            else {
                for (; c >= 0; c--)
                    if (c in b && b[c] === a)
                        break b;
                c = -1
            }
        }
        c >= 0 ? (Eb(b, c),
        b = !0) : b = !1;
        return b || Db(this.j, a)
    }
    ;
    m.Jb = function() {
        for (var a = [], b = this.g.length - 1; b >= 0; --b)
            a.push(this.g[b]);
        b = this.j.length;
        for (var c = 0; c < b; ++c)
            a.push(this.j[c]);
        return a
    }
    ;
    var Z = function(a, b, c, d, e, f, g, h) {
        N.call(this);
        var k = this;
        this.K = a;
        this.g = b;
        this.adTagUrl = c;
        this.fa = d;
        this.Sa = e;
        this.D = g;
        this.jb = h;
        this.H = null;
        this.o = new DO;
        this.U = !1;
        this.volume = 1;
        this.fa = d;
        this.ba = -1;
        this.C = this.l = this.j = null;
        this.A = new iQ({
            currentTime: 0
        },this.D);
        this.G = new QQ;
        this.aa = this.xa = this.la = this.W = !1;
        this.ya = new AQ(b,g);
        Rm(this, this.ya);
        this.P = f && this.g.B != null;
        this.V = function() {
            var l = k.g.ga
              , n = l.getCurrentTime();
            l = l.getDuration();
            return {
                currentTime: n,
                duration: l,
                isPlaying: !0,
                volume: k.volume
            }
        }
        ;
        this.M = new bC(this);
        Rm(this, this.M);
        this.M.listen(this.D, "adsManager", this.hb)
    };
    v(Z, N);
    Z.prototype.hb = function(a) {
        var b = this
          , c = {
            type: a.messageType,
            data: a.qa
        };
        switch (c.type) {
        case "error":
            RQ(this);
            SQ(this, c.data);
            break;
        case "contentPauseRequested":
            W.getInstance().report(130);
            TQ(this);
            this.A.stop();
            UQ(this, c);
            break;
        case "contentResumeRequested":
            VQ(this, function() {
                UQ(b, c)
            });
            break;
        case "remainingTime":
            this.ba = c.data.remainingTime;
            break;
        case "companionBackfill":
            a = Ta("window.google_show_companion_ad");
            a != null && a();
            break;
        case "skipShown":
            this.U = !0;
            UQ(this, c);
            break;
        case "vpaidEvent":
            BQ(this.ya, c.data);
            break;
        case "skippableStateChanged":
            a = c.data.adData;
            (a == null ? void 0 : a.skippable) != null && (this.U = a.skippable);
            UQ(this, c);
            break;
        case "volumeChange":
            a = c.data.adData;
            a != null && typeof a.volume === "number" && (this.volume = a.volume);
            UQ(this, c);
            break;
        case "firstQuartile":
            UQ(this, {
                type: vH.firstQuartile,
                data: c.data
            });
            UQ(this, c);
            break;
        case "thirdQuartile":
            UQ(this, {
                type: vH.thirdQuartile,
                data: c.data
            });
            UQ(this, c);
            break;
        case "updateGfpCookie":
            WQ(this, c.data);
            break;
        default:
            UQ(this, c)
        }
    }
    ;
    var UQ = function(a, b) {
        var c = b.data.adData
          , d = null;
        c && (c.companions == null && a.H != null && (c.companions = a.H),
        d = new X(c),
        a.j = d);
        switch (b.type) {
        case "adBreakReady":
        case "mediaUrlPinged":
            b = new fQ(b.type,null,b.data);
            break;
        case "adMetadata":
            c = null;
            b.data.adCuePoints != null && (c = new CO(b.data.adCuePoints));
            b = new gQ(d,c);
            break;
        case "allAdsCompleted":
            a.j = null;
            a.xa = !0;
            b = new fQ(b.type,d);
            break;
        case "contentPauseRequested":
            a.aa = !1;
            b = new fQ(b.type,d);
            break;
        case "contentResumeRequested":
            a.j = null;
            a.aa = !0;
            b = new fQ(b.type,d);
            break;
        case "loaded":
            a.ba = d.getDuration();
            a.U = !1;
            if (pH()) {
                var e = a.K
                  , f = d
                  , g = a.Sa;
                e.j.set(zO(f), a.V);
                zP(e) && yP(e, "loaded", zO(f), g)
            }
            b = new fQ(b.type,d,c);
            break;
        case "skip":
            a.H = null;
            b = new fQ(b.type,d);
            break;
        case "start":
            c && (c = c.companions) && (a.H = c);
            a.g.ac() != null && (a.l == null ? (a.l = new JN,
            a.M.listen(a.l, "click", a.jh)) : NN(a.l),
            LN(a.l, a.g.ac()));
            b = new fQ(b.type,d);
            break;
        case "complete":
            a.l != null && NN(a.l);
            pH() && BP(a.K, a.V, zO(d));
            a.j = null;
            a.H = null;
            b = new fQ(b.type,d);
            break;
        case "log":
            c = null;
            e = b.data.logData;
            e != null && e.type != null ? (f = e.type,
            f = f === "adLoadError" || f === "adPlayError") : f = !1;
            f && (c = {
                adError: new bQ(e)
            });
            b = new fQ(b.type,d,c);
            break;
        case "interaction":
            b = new fQ(b.type,d,b.data.interactionData);
            break;
        case "adProgress":
            b = new fQ(b.type,d,new hQ(b.data));
            break;
        default:
            b = new fQ(b.type,d)
        }
        N.prototype.dispatchEvent.call(a, b);
        a.xa && a.aa && a.destroy()
    }
      , SQ = function(a, b) {
        var c = new dQ(new bQ(b));
        a.W ? (N.prototype.dispatchEvent.call(a, c),
        pH() && a.j && BP(a.K, a.V, zO(a.j)),
        a.j = null) : a.G.j.push(c);
        a = {
            error: b.errorCode,
            vis: Ue(document)
        };
        W.getInstance().report(7, a)
    }
      , XQ = function(a, b) {
        GH(a.D, "adsManager", b.type, b.data)
    }
      , VQ = function(a, b) {
        W.getInstance().report(131);
        RQ(a, b);
        a.Da() || a.A.start()
    }
      , TQ = function(a) {
        var b = a.g.ga;
        ZP(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && b.Ce != null && b.Ce()
    }
      , RQ = function(a, b) {
        var c = a.g.ga;
        ZP(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && c.uc != null ? c.uc(b) : b && b()
    };
    m = Z.prototype;
    m.addEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."),
        W.getInstance().report(217, {
            method: "AdsManager.addEventListener w/ handler scope"
        }));
        if (Array.isArray(a)) {
            console.warn("Array not supported. Listen for a single event type.");
            W.getInstance().report(217, {
                method: "AdsManager.addEventListener w/ array"
            });
            a = x(a);
            for (var e = a.next(); !e.done; e = a.next())
                this.addEventListener(e.value, b, c, d)
        } else
            N.prototype.listen.call(this, a, b, c, d)
    }
    ;
    m.removeEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."),
        W.getInstance().report(217, {
            method: "AdsManager.removeEventListener w/ handler scope"
        }));
        if (Array.isArray(a)) {
            console.warn("Array not supported. Listen for a single event type.");
            W.getInstance().report(217, {
                method: "AdsManager.removeEventListener w/ array"
            });
            a = x(a);
            for (var e = a.next(); !e.done; e = a.next())
                this.removeEventListener(e.value, b, c, d)
        } else
            N.prototype.Ra.call(this, a, b, c, d)
    }
    ;
    m.jf = function() {
        N.prototype.je.call(this)
    }
    ;
    m.listen = function() {
        throw Error("Not supported; use addEventListener instead.");
    }
    ;
    m.dispatchEvent = function() {
        console.error("Dispatching events is not supported.");
        W.getInstance().report(217, {
            method: "AdsManager.dispatchEvent"
        });
        return !1
    }
    ;
    m.configureAdsManager = function(a, b) {
        this.C = a;
        a.currentTime != null && (this.A = new iQ(a,this.D),
        this.A.start());
        b != null && (this.o = YQ(b))
    }
    ;
    m.init = function(a, b, c, d) {
        if (this.G.isEmpty()) {
            var e = this.g
              , f = null;
            e.j && d == null && (f = {
                vd: "setnull"
            });
            e.j && e.j === d && (f = {
                vd: "match"
            });
            if (e.j && e.j !== d) {
                f = oH(d || null);
                var g = MB(d || null);
                f = {
                    vd: "diff",
                    oc: e.P,
                    nc: f,
                    oi: e.M,
                    ni: g
                }
            }
            !e.j && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.K,
            W.getInstance().report(93, f));
            d != null && (e.I = YP(d),
            nH(e.I) && (e.H = !0,
            Pm(e.g),
            Pm(e.l),
            Pm(e.Aa),
            e.g = null,
            e.l = null,
            e.Aa = null,
            Pm(e.ga),
            e.ga = new EP(d),
            typeof d.getBoundingClientRect !== "function" ? (e.C = e.o,
            BG.l = e.C) : e.C = d,
            e.A.xc(e.ga)));
            this.W = !0;
            this.resize(a, b, c);
            d = this.o.da(this.P);
            e = {};
            a = (e.adsRenderingSettings = d,
            e.width = a,
            e.height = b,
            e.viewMode = c,
            e);
            XQ(this, {
                type: "init",
                data: a
            })
        } else {
            for (; !this.G.isEmpty(); )
                b = a = this.G,
                b.g.length === 0 && (b.g = b.j,
                b.g.reverse(),
                b.j = []),
                a = a.g.pop(),
                N.prototype.dispatchEvent.call(this, a);
            this.dispose()
        }
    }
    ;
    m.isCustomPlaybackUsed = function() {
        return ZP(this.g)
    }
    ;
    m.isCustomClickTrackingUsed = function() {
        return this.P
    }
    ;
    m.getRemainingTime = function() {
        return this.ba
    }
    ;
    m.getAdSkippableState = function() {
        return this.U
    }
    ;
    m.discardAdBreak = function() {
        XQ(this, {
            type: "discardAdBreak"
        })
    }
    ;
    m.updateAdsRenderingSettings = function(a) {
        if (a != null) {
            a = YQ(a);
            var b = this.o.bitrate
              , c = a.bitrate;
            W.getInstance().report(96, {
                init: this.W ? "1" : "0",
                start: this.la ? "1" : "0",
                old: b,
                "new": c,
                changed: b !== c ? "1" : "0"
            });
            this.o = a;
            a = this.o.da(this.P);
            b = {};
            a = (b.adsRenderingSettings = a,
            b);
            XQ(this, {
                type: "updateAdsRenderingSettings",
                data: a
            })
        }
    }
    ;
    m.skip = function() {
        XQ(this, {
            type: "skip"
        })
    }
    ;
    m.start = function() {
        if (this.adTagUrl) {
            (Xd || Zd) && W.getInstance().report(50, {
                customPlayback: ZP(this.g)
            });
            this.g.wa() || W.getInstance().report(26, {
                adtagurl: this.adTagUrl,
                customPlayback: ZP(this.g)
            });
            dm(this.g.o) && W.getInstance().report(30, {
                adtagurl: this.adTagUrl,
                customPlayback: ZP(this.g)
            });
            var a = this.g.B, b = this.g.o, c;
            if (c = a && b && !dm(a))
                a = wP(a),
                b = wP(b),
                c = a.width > 0 && a.height > 0 && b.width > 0 && b.height > 0 && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            W.getInstance().report(31, {
                adtagurl: this.adTagUrl,
                customPlayback: ZP(this.g),
                covers: b
            })
        }
        if (!this.g.wa() && !ZP(this.g))
            throw YH(WH);
        b = this.g;
        b.G = this.P && b.B != null;
        this.g.A.frameElement.style.opacity = "1";
        if (this.C != null && this.getVolume() === 1) {
            var d, e;
            if (typeof ((d = this.C) == null ? void 0 : d.muted) === "boolean" && ((e = this.C) == null ? 0 : e.muted))
                this.setVolume(0);
            else {
                var f;
                if (typeof ((f = this.C) == null ? void 0 : f.volume) === "number") {
                    var g;
                    d = (g = this.C) == null ? void 0 : g.volume;
                    if (d >= 0 && d <= 1) {
                        var h;
                        this.setVolume((h = this.C) == null ? void 0 : h.volume)
                    }
                }
            }
        }
        this.la = !0;
        XQ(this, {
            type: "start"
        })
    }
    ;
    m.jh = function() {
        if (!this.o.disableClickThrough && this.j != null) {
            var a = AO(this.j);
            a != null && yA(a, BO(this.j))
        }
    }
    ;
    m.resize = function(a, b, c) {
        this.g.setSize(a, b);
        var d = {};
        a = (d.width = a,
        d.height = b,
        d.viewMode = c,
        d);
        XQ(this, {
            type: "resize",
            data: a
        })
    }
    ;
    m.stop = function() {
        XQ(this, {
            type: "stop"
        })
    }
    ;
    m.expand = function() {
        XQ(this, {
            type: "expand"
        })
    }
    ;
    m.collapse = function() {
        XQ(this, {
            type: "collapse"
        })
    }
    ;
    m.getVolume = function() {
        return this.volume
    }
    ;
    m.setVolume = function(a) {
        this.volume = a;
        this.g.ga.setVolume(a);
        var b = {};
        a = (b.volume = a,
        b);
        XQ(this, {
            type: "volume",
            data: a
        })
    }
    ;
    m.pause = function() {
        XQ(this, {
            type: "pause"
        })
    }
    ;
    m.resume = function() {
        XQ(this, {
            type: "resume"
        })
    }
    ;
    m.destroy = function() {
        this.dispose()
    }
    ;
    m.getCuePoints = function() {
        return this.fa
    }
    ;
    m.Bg = function() {
        return this.j
    }
    ;
    m.O = function() {
        XQ(this, {
            type: "destroy"
        });
        this.l != null && this.l.dispose();
        this.M.dispose();
        this.G.clear();
        this.A && (this.A.stop(),
        this.A.dispose());
        pH() && BP(this.K, this.V);
        N.prototype.O.call(this)
    }
    ;
    m.pg = function() {
        W.getInstance().report(124, {
            api: "clicked"
        });
        var a = this.j && AO(this.j), b;
        if (a && ((b = this.j) == null ? 0 : b.af())) {
            var c;
            yA(a, (c = this.j) == null ? void 0 : BO(c))
        }
        XQ(this, {
            type: "click"
        })
    }
    ;
    m.focus = function() {
        GH(this.D, "userInteraction", "focusUiElement")
    }
    ;
    var WQ = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new CQ;
        d = gj(d, 1, c ? "0" : "1");
        d = yi(d, 2, Ah(2147483647));
        d = gj(d, 3, "/");
        d = gj(d, 4, window.location.hostname);
        var e = new MQ, f, g;
        a = (g = (f = a.jb) == null ? void 0 : RG(f)) != null ? g : null;
        OQ(e, "__gpi_opt_out", d, a);
        if (!c || b)
            PQ(e, "__gads", a),
            PQ(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.pg;
    Z.prototype.getCurrentAd = Z.prototype.Bg;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;
    Z.prototype.dispatchEvent = Z.prototype.dispatchEvent;
    Z.prototype.listen = Z.prototype.listen;
    Z.prototype.removeAllEventListeners = Z.prototype.jf;
    function YQ(a) {
        if (a instanceof DO)
            return W.getInstance().report(174, {
                valid: !0
            }),
            a;
        W.getInstance().report(174, {
            valid: !1
        });
        var b = new DO;
        b.append(a);
        return b
    }
    ;var ZQ = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    }
      , $Q = function(a, b) {
        tr.call(this, "adsManagerLoaded");
        this.g = a;
        this.j = b
    };
    v($Q, tr);
    $Q.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    }
    ;
    $Q.prototype.getUserRequestContext = function() {
        return this.j
    }
    ;
    $Q.prototype.getUserRequestContext = $Q.prototype.getUserRequestContext;
    $Q.prototype.getAdsManager = $Q.prototype.getAdsManager;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", ZQ);
    var aR = function(a) {
        this.F = G(a)
    };
    v(aR, J);
    var bR = function(a) {
        this.F = G(a)
    };
    v(bR, J);
    var cR = function(a) {
        this.F = G(a)
    };
    v(cR, J);
    var eR = function() {
        var a = dR();
        return $i(a, 2)
    }
      , fR = function() {
        var a = dR();
        return Li(a, bR, 4)
    };
    var gR = Hk(cR);
    var hR = null;
    function dR() {
        var a;
        return (a = hR) != null ? a : hR = gR("[]")
    }
    ;function iR() {
        var a = dR();
        return (a = Li(a, aR, 1)) ? bi(a) : new aR
    }
    ;var kR = function(a) {
        var b = jR;
        if (b.j)
            return Promise.resolve(b.j);
        b = RN(b.g).then(function(c) {
            var d = c.serializedConfig;
            var e = c.errorMessage;
            if (d)
                d = Dt(d);
            else
                throw Error(e != null ? e : "Unknown PPC error");
            WN(d, a, c.latencyMs);
            return d
        }).catch(function(c) {
            W.getInstance().report(189, {
                message: c.message
            });
            return null
        });
        return Promise.race([b, ws(500, null)])
    }
      , jR = new function() {
        var a;
        this.g = a = a === void 0 ? SN : a
    }
    ;
    var lR = function() {
        this.g = window
    }
      , mR = function(a, b, c) {
        var d = c.ge;
        c = c.he;
        return Ti(b, 8) || (d || !Ti(b, 5)) && c || !JQ(a.g) ? !1 : !0
    };
    function nR(a, b) {
        return a && (a === b.Hb || a === b.adUnitCode)
    }
    function oR(a, b) {
        if (!b.length)
            return [];
        var c, d, e = (d = (c = a.getEvents) == null ? void 0 : c.call(a).filter(function(f) {
            return f.eventType === "auctionEnd"
        })) != null ? d : [];
        return b.map(function(f) {
            for (var g = x(e), h = g.next(); !h.done; h = g.next()) {
                var k = void 0
                  , l = void 0;
                h = (l = (k = h.value.args) == null ? void 0 : k.adUnits) != null ? l : [];
                k = x(h);
                for (l = k.next(); !l.done; l = k.next()) {
                    l = l.value;
                    var n = void 0
                      , p = void 0;
                    if ((n = h = (n = l.ortb2Imp) == null ? void 0 : (p = n.ext) == null ? void 0 : p.gpid) && !(n = nR(l.code, f))) {
                        var r = p = void 0
                          , t = void 0
                          , u = void 0
                          , w = void 0
                          , A = void 0
                          , L = void 0;
                        n = nR((L = l.ortb2Imp) == null ? void 0 : (A = L.ext) == null ? void 0 : (w = A.data) == null ? void 0 : w.pbadslot, f) || nR((u = l.ortb2Imp) == null ? void 0 : (t = u.ext) == null ? void 0 : (r = t.data) == null ? void 0 : (p = r.adserver) == null ? void 0 : p.adslot, f)
                    }
                    if (n)
                        return h
                }
            }
        })
    }
    ;function pR() {
        var a = window, b, c;
        return (c = ((b = a._pbjsGlobals) != null ? b : []).concat(["pbjs"]).map(function(d) {
            return a[d]
        }).find(function(d) {
            return Array.isArray(d == null ? void 0 : d.que)
        })) != null ? c : null
    }
    ;function qR(a, b) {
        var c, d, e;
        b == null ? e = void 0 : e = b.get.call(b, a);
        return (d = (c = e) != null ? c : b == null ? void 0 : b.get(uf(a))) != null ? d : 0
    }
    ;var rR = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/
      , sR = new Map
      , tR = new Map;
    function uR(a, b) {
        b = b === void 0 ? 1 : b;
        var c = function(d) {
            var e, f = (e = d.responseTimestamp) != null ? e : 0, g, h;
            e = (h = d.ttl) != null ? h : 0 - ((g = d.ttlBuffer) != null ? g : b);
            return f + e * 1E3 > (new Date).getTime()
        };
        return function(d) {
            var e;
            return ((e = d.getStatusCode) == null ? void 0 : e.call(d)) === 1
        }(a) && c(a) && "rendered" !== a.status
    }
    function vR(a, b) {
        var c = a.reduce(function(e, f) {
            var g = f.bidder;
            e[g] || (e[g] = []);
            e[g].push(f);
            return e
        }, {})
          , d = [];
        Object.keys(c).forEach(function(e) {
            d.push(c[e].sort(function(f, g) {
                var h, k;
                return ((h = f.timeToRespond) != null ? h : 0) - ((k = g.timeToRespond) != null ? k : 0)
            }).reduce(function(f, g) {
                var h, k;
                return ((h = f.cpm) != null ? h : 0) >= ((k = g.cpm) != null ? k : 0) ? f : g
            }))
        });
        d.sort(function(e, f) {
            var g, h;
            return ((g = f.cpm) != null ? g : 0) - ((h = e.cpm) != null ? h : 0)
        });
        return b ? d.slice(0, b) : d
    }
    function wR(a) {
        switch (a) {
        case null:
        case void 0:
        case "client":
            return 1;
        case "s2s":
            return 2;
        default:
            return 0
        }
    }
    function xR(a, b, c) {
        var d = b.getBidResponsesForAdUnitCode;
        if (!d || !a.code)
            return [];
        var e;
        d = (e = d(a.code)) == null ? void 0 : e.bids;
        return d != null && d.length ? d.filter(function(f) {
            var g;
            if (!uR(f, (g = b.getConfig) == null ? void 0 : g.call(b).ttlBuffer))
                return !1;
            var h;
            g = (h = b.getConfig) == null ? void 0 : h.call(b).useBidCache;
            var k;
            h = (k = b.getConfig) == null ? void 0 : k.call(b).bidCacheFilterFunction;
            k = f.auctionId === c;
            h = g && !k && typeof h === "function" ? !!h(f) : !0;
            return (f.adUnitCode !== a.code || g || k) && h
        }) : []
    }
    function yR(a, b, c) {
        var d = function(k) {
            return !!k && (k === b.Hb || k === b.adUnitCode)
        }, e = function(k) {
            var l, n, p, r, t, u, w;
            return d(k == null ? void 0 : k.code) || d(k == null ? void 0 : (l = k.ortb2Imp) == null ? void 0 : (n = l.ext) == null ? void 0 : (p = n.data) == null ? void 0 : p.pbadslot) || d(k == null ? void 0 : (r = k.ortb2Imp) == null ? void 0 : (t = r.ext) == null ? void 0 : (u = t.data) == null ? void 0 : (w = u.adserver) == null ? void 0 : w.adslot)
        }, f;
        if (a = (f = a.adUnits) == null ? void 0 : f.find(e))
            return a;
        var g;
        if (a = c == null ? void 0 : (g = c.adUnits) == null ? void 0 : g.find(e))
            return a;
        var h;
        if (c = c == null ? void 0 : (h = c.adUnitCodes) == null ? void 0 : h.find(d))
            return {
                code: c
            }
    }
    function zR(a, b, c) {
        for (var d = []; b && !d.includes(b); ) {
            d.unshift(b);
            var e = void 0
              , f = void 0;
            b = (e = a) == null ? void 0 : (f = e.aliasRegistry) == null ? void 0 : f[b]
        }
        Ii(c, 10, d, Hh)
    }
    function AR(a, b, c, d) {
        var e = a.cpm
          , f = a.originalCpm
          , g = a.currency
          , h = a.originalCurrency
          , k = a.dealId
          , l = a.adserverTargeting
          , n = a.bidder
          , p = a.adId
          , r = a.mediaType
          , t = a.height
          , u = a.width
          , w = a.meta
          , A = new Vs;
        if (typeof e === "number" && (yi(A, 2, Ah(Math.round(e * 1E6))),
        !h || h === g)) {
            e = Math.round(Number(f) * 1E6);
            if (!(f = isNaN(e))) {
                var L = L === void 0 ? 0 : L;
                var ja;
                f = (ja = Qi(A, 2)) != null ? ja : L;
                f = e === f
            }
            f || yi(A, 8, Ah(e))
        }
        typeof g === "string" && gj(A, 3, g);
        ["string", "number"].includes(typeof k) && (g = new Ns,
        k = gj(g, 1, String(k)),
        H(A, 6, k));
        if (typeof l === "object")
            for (k = x(["", "_" + n]),
            g = k.next(); !g.done; g = k.next()) {
                L = g.value;
                g = [];
                ja = x(Object.entries(l));
                for (e = ja.next(); !e.done; e = ja.next()) {
                    e = x(e.value);
                    f = e.next().value;
                    e = e.next().value;
                    f = ("" + f + L).slice(0, 20);
                    var Y = h = void 0;
                    if ((h = c) == null ? 0 : (Y = h[f]) == null ? 0 : Y.length)
                        if (c[f][0] === String(e))
                            g.push(f);
                        else {
                            g = [];
                            break
                        }
                }
                L = Bi(A, 4, Nh, void 0 === Jg ? 2 : 4);
                Ii(A, 4, L.concat(g), Hh)
            }
        switch (r || "banner") {
        case "banner":
            hj(A, 5, 1);
            break;
        case "native":
            hj(A, 5, 2);
            break;
        case "video":
            hj(A, 5, 3);
            c = new Ts;
            var Ya;
            if ((b == null ? void 0 : (Ya = b.video) == null ? void 0 : Ya.context) === "adpod") {
                var xb, xa = b == null ? void 0 : (xb = b.video) == null ? void 0 : xb.adPodDurationSec;
                yi(c, 1, Ah(xa))
            } else
                xb = b == null ? void 0 : (xa = b.video) == null ? void 0 : xa.maxduration,
                yi(c, 1, Ah(xb));
            var Gb;
            if (typeof (b == null ? void 0 : (Gb = b.video) == null ? void 0 : Gb.skip) === "number") {
                var gb;
                b = !!(b == null ? 0 : (gb = b.video) == null ? 0 : gb.skip);
                cj(c, 2, b)
            }
            var Ba;
            gb = (Ba = a.meta) == null ? void 0 : Ba.adServerCatId;
            Ba = gj(c, 3, gb);
            if (typeof l !== "object")
                l = null;
            else {
                var yb, U;
                gb = String((U = (yb = l["hb_pb_cat_dur_" + n]) != null ? yb : l.hb_pb_cat_dur) != null ? U : "");
                var Qa, ka, Sb, hb;
                yb = String((hb = (Sb = (ka = (Qa = l["hb_cache_id_" + n]) != null ? Qa : l["hb_uuid_" + n]) != null ? ka : l.hb_cache_id) != null ? Sb : l.hb_uuid) != null ? hb : "");
                l = gb && yb ? gb + "_" + yb : yb ? yb : null
            }
            gj(Ba, 4, l);
            H(A, 9, c)
        }
        Number.isFinite(t) && Number.isFinite(u) && (l = A.setSize,
        n = new Rs,
        u = ej(n, 1, Math.round(u)),
        t = ej(u, 2, Math.round(t)),
        l.call(A, t));
        typeof p === "string" && gj(A, 1, p);
        var ib;
        (d == null ? 0 : d.gg) && Array.isArray(w == null ? void 0 : w.advertiserDomains) && (w == null ? 0 : (ib = w.advertiserDomains[0]) == null ? 0 : ib.length) && gj(A, 10, w.advertiserDomains[0].substring(0, d == null ? void 0 : d.gg));
        if (a.meta && d) {
            var Ca, dc;
            d.ig && typeof a.meta.agencyId === "string" && ((dc = a.meta.agencyId) == null ? 0 : dc.length) && (Ca != null || (Ca = new Ps),
            gj(Ca, 1, a.meta.agencyId.substring(0, d.ig)));
            var ae;
            d.jg && typeof a.meta.agencyName === "string" && ((ae = a.meta.agencyName) == null ? 0 : ae.length) && (Ca != null || (Ca = new Ps),
            gj(Ca, 2, a.meta.agencyName.substring(0, d.jg)));
            var be;
            d.wg && typeof a.meta.networkId === "string" && ((be = a.meta.networkId) == null ? 0 : be.length) && (Ca != null || (Ca = new Ps),
            gj(Ca, 3, a.meta.networkId.substring(0, d.wg)));
            var Jh;
            d.xg && typeof a.meta.networkName === "string" && ((Jh = a.meta.networkName) == null ? 0 : Jh.length) && (Ca != null || (Ca = new Ps),
            gj(Ca, 4, a.meta.networkName.substring(0, d.xg)));
            Ca && H(A, 11, Ca)
        }
        return A
    }
    function BR(a, b, c, d, e, f, g) {
        var h = xR(c, a, d);
        if (h.length) {
            var k, l = (k = a.getConfig) == null ? void 0 : k.call(a).enableSendAllBids, n, p;
            k = (n = a.getConfig) == null ? void 0 : (p = n.call(a).sendBidsControl) == null ? void 0 : p.bidLimit;
            h = vR(h, l && k || 0);
            if (h.length)
                for (h = x(h),
                l = h.next(); !l.done; l = h.next()) {
                    l = l.value;
                    p = l.adUnitCode !== c.code;
                    n = !p && l.auctionId !== d;
                    if (!r && !n && !p && l.transactionId) {
                        var r = l.transactionId;
                        Si(b, 4) != null || gj(b, 4, r)
                    }
                    try {
                        p = void 0,
                        (p = e) == null || p(l, l.transactionId)
                    } catch (u) {}
                    var t = n;
                    n = a;
                    p = b;
                    k = AR(l, c.mediaTypes, f, g);
                    t = et(dt(bt(new at, l.bidder), 1), t);
                    t = hj(t, 7, wR(l.source));
                    k = ct(t, k);
                    zR(n, l.bidder, k);
                    n = jt(p, k);
                    typeof l.timeToRespond === "number" && yi(n, 2, Ah(Math.round(l.timeToRespond)))
                }
        }
    }
    var CR = function(a, b, c) {
        this.pbjs = a;
        this.slot = b;
        var d;
        this.Pb = (d = c == null ? void 0 : c.Pb) != null ? d : {};
        this.Gd = !(c == null || !c.Gd);
        var e;
        this.Hd = (e = c == null ? void 0 : c.Hd) != null ? e : new Map;
        var f;
        this.gf = (f = c == null ? void 0 : c.gf) != null ? f : new Map;
        var g;
        this.Ie = (g = c == null ? void 0 : c.Ie) != null ? g : new ht;
        this.Ud = c == null ? void 0 : c.Ud;
        this.j = c;
        var h, k;
        this.g = ((h = this.slot.Hb) != null ? h : "") + ((k = this.slot.adUnitCode) != null ? k : "");
        this.qd = !(c == null || !c.qd);
        this.kf = c == null ? void 0 : c.kf
    }
      , DR = function(a, b, c) {
        var d = a.pbjs.getBidResponsesForAdUnitCode;
        if (d) {
            var e, f, g, h, k, l, n, p, r = (p = (l = (e = d((h = a.slot.Hb) != null ? h : "")) == null ? void 0 : e.bids) != null ? l : (f = d((k = a.slot.adUnitCode) != null ? k : "")) == null ? void 0 : f.bids) != null ? p : (g = d((n = tR.get(a.g)) != null ? n : "")) == null ? void 0 : g.bids;
            if (r != null && r.length && (e = r.filter(function(w) {
                var A = w.auctionId;
                var L = w.adId;
                return A !== c && Object.values(a.Pb).some(function(ja) {
                    return ja.includes(L)
                })
            }),
            e.length)) {
                var t, u;
                d = (t = a.pbjs.adUnits) == null ? void 0 : (u = t.find(function(w) {
                    w = w.code;
                    return w === a.slot.Hb || w === a.slot.adUnitCode || w === tR.get(a.g)
                })) == null ? void 0 : u.mediaTypes;
                t = x(e);
                for (u = t.next(); !u.done; u = t.next())
                    u = u.value,
                    e = AR(u, d, a.Pb, a.j),
                    e = jt(b, ct(et(dt(bt(new at, u.bidder), 1), !0), e)),
                    zR(a.pbjs, u.bidder, e),
                    typeof u.timeToRespond === "number" && yi(e, 2, Ah(Math.round(u.timeToRespond)))
            }
        }
    }
      , ER = function(a, b, c, d, e) {
        e = a.gf.get(e != null ? e : function() {
            return null
        }
        );
        (e == null ? void 0 : Yi(e, 1)) !== 1 && H(c, 5, e);
        Ai(b, Xs) || (e ? Yi(e, 1) === 1 ? kt(b, e) : kt(b, $s(Ys(Zs(new Xs, a.Gd), 1), qR(d, a.Hd))) : kt(b, Ys(Zs(new Xs, a.Gd), qR(d, a.Hd) ? 2 : 3)))
    }
      , FR = function(a, b) {
        var c = new Map
          , d = function(k) {
            var l = c.get(k);
            l || (l = {},
            c.set(k, l));
            return l
        }
          , e = [];
        a = x(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args
              , h = f.eventType;
            f = f.elapsedTime;
            h === "bidTimeout" && e.push.apply(e, pa(g));
            switch (h) {
            case "bidRequested":
                if (g.auctionId !== b)
                    continue;
                if (!Array.isArray(g.bids))
                    continue;
                g = x(g.bids);
                for (h = g.next(); !h.done; h = g.next())
                    if (h = h.value.bidId)
                        d(h).requestTime = f;
                break;
            case "noBid":
                g.auctionId === b && g.bidId && (d(g.bidId).uh = f)
            }
        }
        d = new Map;
        a = x(c.entries());
        for (f = a.next(); !f.done; f = a.next())
            g = x(f.value),
            f = g.next().value,
            h = g.next().value,
            g = h.requestTime,
            h = h.uh,
            g && h && d.set(f, {
                latency: h - g,
                Mb: !1
            });
        e = x(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value,
            a = f.bidId,
            f = f.auctionId,
            a && f === b && (a = d.get(a)))
                a.Mb = !0;
        return d
    };
    CR.prototype.fetch = function() {
        var a = this, b, c, d = ((c = (b = this.pbjs) == null ? void 0 : b.getEvents) != null ? c : function() {
            return []
        }
        )(), e = d.filter(function(U) {
            var Qa = U.eventType;
            U = U.args;
            return Qa === "auctionEnd" && U.auctionId
        }), f = function(U) {
            return U === a.slot.Hb || U === a.slot.adUnitCode
        }, g = function(U) {
            var Qa;
            U = (Qa = U.args.adUnits) == null ? void 0 : Qa.find(function(ka) {
                var Sb, hb, ib, Ca, dc, ae, be;
                return f(ka == null ? void 0 : (Sb = ka.ortb2Imp) == null ? void 0 : (hb = Sb.ext) == null ? void 0 : (ib = hb.data) == null ? void 0 : ib.pbadslot) || f(ka == null ? void 0 : (Ca = ka.ortb2Imp) == null ? void 0 : (dc = Ca.ext) == null ? void 0 : (ae = dc.data) == null ? void 0 : (be = ae.adserver) == null ? void 0 : be.adslot)
            });
            (U == null ? void 0 : U.code) != null && tR.set(a.g, U.code);
            return U
        }, h;
        b = (h = this.kf) != null ? h : function() {
            var U, Qa = (U = sR.get(a.g)) != null ? U : 0, ka;
            U = (ka = e.filter(function(hb) {
                var ib, Ca, dc;
                return Number((ib = hb.args) == null ? void 0 : ib.timestamp) > Qa && (g(hb) || ((Ca = hb.args) == null ? void 0 : (dc = Ca.adUnitCodes) == null ? void 0 : dc.find(f)))
            })) != null ? ka : [];
            if (!U.length)
                return null;
            var Sb;
            return (Sb = U.reduce(function(hb, ib) {
                return Number(ib.args.timestamp) > Number(hb.args.timestamp) ? ib : hb
            })) == null ? void 0 : Sb.args
        }();
        if (!b)
            return b;
        var k = b.bidderRequests === void 0 ? [] : b.bidderRequests;
        h = b.bidsReceived === void 0 ? [] : b.bidsReceived;
        var l = b.auctionId;
        c = b.timestamp;
        if (l && c != null && k.length) {
            sR.set(this.g, c);
            c = new ot;
            var n = pt(c);
            this.pbjs.version && rR.test(this.pbjs.version) && gj(n, 6, this.pbjs.version);
            var p, r, t, u;
            if ((r = (p = this.pbjs).getConfig) == null ? 0 : (t = r.call(p).cache) == null ? 0 : (u = t.url) == null ? 0 : u.length) {
                var w, A, L;
                lt(n, (A = (w = this.pbjs).getConfig) == null ? void 0 : (L = A.call(w).cache) == null ? void 0 : L.url)
            }
            H(n, 9, this.Ie);
            p = Ne(function() {
                return FR(d, l)
            });
            var ja;
            r = x(k);
            u = r.next();
            for (t = {}; !u.done; t = {
                bidderCode: void 0,
                wf: void 0
            },
            u = r.next())
                for (w = u.value,
                t.bidderCode = w.bidderCode,
                A = w.bids,
                u = w.timeout,
                t.wf = w.src,
                w = x(A),
                A = w.next(),
                k = {}; !A.done; k = {
                    Ac: void 0
                },
                A = w.next()) {
                    var Y = A.value;
                    k.Ac = Y.bidId;
                    A = Y.transactionId;
                    var Ya = Y.adUnitCode
                      , xb = Y.getFloor;
                    L = Y.mediaTypes;
                    Y = Y.ortb2Imp;
                    if (k.Ac && (f(Ya) || Ya === tR.get(this.g))) {
                        qh(wi(n.F, 3)) != null || (Ya === this.slot.adUnitCode ? hj(n, 3, 1) : Ya === this.slot.Hb && hj(n, 3, 2));
                        var xa = void 0
                          , Gb = void 0
                          , gb = void 0;
                        ((xa = this.j) == null ? 0 : xa.Ve) && Si(n, 11) == null && typeof ((Gb = Y) == null ? void 0 : (gb = Gb.ext) == null ? void 0 : gb.gpid) === "string" && (xa = void 0,
                        mt(n, Y.ext.gpid.substring(0, (xa = this.j) == null ? void 0 : xa.Ve)));
                        A && (ja != null || (ja = A),
                        Si(n, 4) != null || gj(n, 4, A));
                        sh(wi(n.F, 8)) == null && Number.isFinite(u) && ej(n, 8, u);
                        xa = h.find(function(U) {
                            return function(Qa) {
                                return Qa.requestId === U.Ac
                            }
                        }(k));
                        if (!xa || !this.qd)
                            if (Y = jt(n, function(U) {
                                return function() {
                                    var Qa = bt(new at, U.bidderCode);
                                    zR(a.pbjs, U.bidderCode, Qa);
                                    hj(Qa, 7, wR(U.wf));
                                    return Qa
                                }
                            }(t)()),
                            ER(this, n, Y, Ya, xb),
                            xa) {
                                dt(Y, 1);
                                typeof xa.timeToRespond === "number" && Number.isFinite(xa.timeToRespond) && yi(Y, 2, Ah(Math.round(xa.timeToRespond)));
                                try {
                                    Ya = k = void 0,
                                    (Ya = (k = this).Ud) == null || Ya.call(k, xa, A)
                                } catch (U) {}
                                A = AR(xa, L, this.Pb, this.j);
                                ct(Y, A)
                            } else
                                (A = p().get(k.Ac)) && !A.Mb ? (dt(Y, 2),
                                Number.isFinite(A.latency) && yi(Y, 2, Ah(Math.round(A.latency)))) : (A = dt(Y, 3),
                                Number.isFinite(u) && yi(A, 2, Ah(Math.round(u))))
                    }
                }
            if (this.qd) {
                var Ba = yR(this.pbjs, this.slot, b);
                Ba && BR(this.pbjs, n, Ba, l, this.Ud, this.Pb, this.j)
            } else {
                var yb;
                ((yb = (Ba = this.pbjs).getConfig) == null ? 0 : yb.call(Ba).useBidCache) && DR(this, n, l)
            }
            return {
                Pg: c,
                transactionId: ja,
                arg: b
            }
        }
    }
    ;
    function GR(a, b, c) {
        return (new CR(a,b,c)).fetch()
    }
    ;var AN = uN(hw)
      , HR = function(a) {
        N.call(this);
        var b = this;
        this.P = new cO;
        var c = wG(AG(this.getSettings()));
        c && c.length > 0 && (RA.reset(),
        TA(new VA(c)));
        this.A = new MQ;
        this.o = null;
        this.g = a;
        this.D = new Map;
        this.l = this.g.A;
        this.H = new bC(this);
        Rm(this, this.H);
        this.V = new Zy(window,{
            timeoutMs: 500
        });
        this.W = new FG(window,{
            timeoutMs: 500
        });
        this.K = new BN;
        EN(this.K);
        a = new oz(window,{
            timeoutMs: 500
        });
        this.M = new fO(a,500);
        Rm(this, this.M);
        this.G = {};
        BG.g !== 0 ? (this.j = new tP,
        Rm(this, this.j)) : this.j = uP();
        tN(dw) ? this.U = dO(this.P) : this.U = Promise.resolve(null);
        pH() && (this.j.init(nP(this.l)),
        this.C = AP(this.j, this.g.C),
        Qm(this, function() {
            var d = b.C;
            b.j.l.delete(d);
            BG.g !== 0 && (E(Zq).o[d] = null)
        }))
    };
    v(HR, N);
    m = HR.prototype;
    m.addEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."),
        W.getInstance().report(217, {
            method: "AdsLoader.addEventListener w/ handler scope"
        }));
        if (Array.isArray(a))
            throw Error("Array not supported. Listen for a single event type.");
        N.prototype.listen.call(this, a, b, c, d)
    }
    ;
    m.removeEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."),
        W.getInstance().report(217, {
            method: "AdsLoader.removeEventListener w/ handler scope"
        }));
        if (Array.isArray(a))
            throw Error("Array not supported. Listen for a single event type.");
        N.prototype.Ra.call(this, a, b, c, d)
    }
    ;
    m.jf = function() {
        N.prototype.je.call(this)
    }
    ;
    m.listen = function() {
        throw Error("Not supported; use addEventListener instead.");
    }
    ;
    m.dispatchEvent = function() {
        throw Error("Dispatching events is not supported.");
    }
    ;
    m.destroy = function() {
        this.dispose()
    }
    ;
    m.getVersion = function() {
        return "h.3.695.1"
    }
    ;
    m.requestAds = function(a, b) {
        var c = this;
        if (a.adTagUrl || a.adsResponse) {
            var d = []
              , e = null;
            az(this.V) && d.push(new Promise(function(h) {
                dz(c.V, function(k) {
                    e = k;
                    h()
                })
            }
            ));
            var f = null;
            rw(this.W.caller) && d.push(new Promise(function(h) {
                GG(c.W, function(k) {
                    f = k;
                    h()
                })
            }
            ));
            var g = null;
            d.push(hO(this.M).then(function(h) {
                g = h
            }));
            Promise.all(d).then(function() {
                IR(c, a, b, {
                    se: e,
                    ve: f,
                    Jd: g
                })
            })
        } else
            d = {},
            JR(this, (d.errorCode = 1013,
            d.errorMessage = "The ad request must either have an ad tag URL or an ads response.",
            d.type = "adLoadError",
            d), "")
    }
    ;
    var IR = function(a, b, c, d) {
        var e = b.adTagUrl
          , f = "goog_" + Fd++;
        a.D.set(f, c || null);
        var g = KR({
            adTagUrl: e,
            se: d.se,
            ve: d.ve,
            Jd: d.Jd
        }), h, k = LG(e, g || {}, tN(cw) ? (h = fR()) == null ? void 0 : Ti(h, 2) : !1);
        qN(k, function() {
            LR(a, k)
        });
        var l, n = (l = b.adTagUrl) == null ? void 0 : l.includes("GOOGLE_INSTREAM_VIDEO_NONCE"), p = QG(k);
        c = MR(a, p, n);
        d = EN(a.K);
        e = e ? qG(e) : null;
        e = kR(e);
        Promise.all([c, d, e, a.U]).then(function(r) {
            var t = x(r);
            t.next();
            r = t.next().value;
            var u = t.next().value;
            t = t.next().value;
            var w = {};
            W.getInstance().report(182, (w.aid = !!BG.A,
            w.aidf = !!a.o,
            w.hsc = !p && n,
            w));
            NR(a, f, b, g, k, r, u, t)
        })
    };
    HR.prototype.getSettings = function() {
        return BG
    }
    ;
    HR.prototype.contentComplete = function() {
        GH(nP(this.l), "adsLoader", "contentComplete")
    }
    ;
    var OR = function(a, b, c) {
        b.length !== 0 && (b = rN(b.map(function(d) {
            return {
                Ec: d
            }
        }), c)) && b.forEach(function(d) {
            d.then(function(e) {
                e && LR(a, c)
            })
        })
    }
      , LR = function(a, b) {
        if (b = zI(RG(b)))
            a.G.espSignals = b,
            GH(nP(a.l), "adsLoader", "signalsRefresh", a.G)
    }
      , PR = function(a, b) {
        var c = a.D.get(b);
        a.D.delete(b);
        return c != null ? c : null
    }
      , JR = function(a, b, c) {
        c = new dQ(new bQ(b),PR(a, c));
        N.prototype.dispatchEvent.call(a, c);
        a = {
            error: b.errorCode,
            vis: Ue(document)
        };
        W.getInstance().report(7, a)
    }
      , KR = function(a) {
        var b = a.se
          , c = a.ve;
        a = a.Jd;
        var d, e, f, g, h, k, l = {};
        var n = n === void 0 ? y : n;
        return l.gfcLoaded = yf(n.top, "googlefcLoaded"),
        l.addtlConsent = (d = b == null ? void 0 : b.addtlConsent) != null ? d : null,
        l.gdprApplies = (e = b == null ? void 0 : b.gdprApplies) != null ? e : null,
        l.tcString = (f = b == null ? void 0 : b.tcString) != null ? f : null,
        l.uspString = (g = c == null ? void 0 : c.uspString) != null ? g : null,
        l.gppString = (h = a == null ? void 0 : a.gppString) != null ? h : null,
        l.gppSid = (k = a == null ? void 0 : a.sid) != null ? k : null,
        l
    }
      , QR = function(a, b) {
        var c = {};
        c.contentMediaUrl = a.g.L;
        c.customClickTrackingProvided = a.g.B != null;
        c.isAmp = sH();
        a: {
            try {
                var d = window.top.location.href
            } catch (A) {
                d = 2;
                break a
            }
            d = d == null ? 2 : d == window.document.location.href ? 0 : 1
        }
        c.iframeState = d;
        c.imaHostingDomain = window.document.domain;
        c.imaHostingPageUrl = window.document.URL;
        if (im())
            var e = window.location.href;
        else {
            var f = Hf();
            d = f.j;
            var g = f.g;
            f = f.l;
            var h = null;
            if (f)
                b: {
                    try {
                        e = Kz(f.url);
                        var k = e.j
                          , l = rH(k, "/v/");
                        l || (l = rH(k, "/a/"));
                        if (!l)
                            throw Error("Can not extract standalone amp url.");
                        var n = rH("/" + l, "/s/")
                          , p = wz(e.l);
                        p.remove("amp_js_v");
                        p.remove("amp_lite");
                        var r = n ? Kz("https://" + n) : Kz("http://" + l);
                        vz(r, p);
                        h = r.toString();
                        break b
                    } catch (A) {
                        h = null;
                        break b
                    }
                    h = void 0
                }
            e = h ? h : d && d.url ? d.url : g && g.url ? g.url : ""
        }
        c.topAccessiblePageUrl = e;
        c.referrer = window.document.referrer;
        c.domLoadTime = a.l.H;
        c.sdkImplLoadTime = a.l.K;
        c.supportsResizing = !ZP(a.g);
        e = ze().location.ancestorOrigins;
        c.topOrigin = e ? e.length > 0 && e[e.length - 1].length < 200 ? e[e.length - 1] : "" : null;
        c.osdId = a.C;
        c.usesCustomVideoPlayback = ZP(a.g);
        c.usesProxyMediaElement = a.g.rd();
        c.usesInlinePlayback = a.g.I;
        e = a.g.qc;
        a = [];
        l = k = "";
        if (e != null) {
            k = e;
            l = !0;
            l = l === void 0 ? !1 : l;
            n = [];
            for (p = 0; k && p < 25; ++p) {
                r = "";
                l !== void 0 && l || (r = (r = k.nodeType !== 9 && k.id) ? "/" + r : "");
                a: {
                    if (k && k.nodeName && k.parentElement)
                        for (d = k.nodeName.toString().toLowerCase(),
                        g = k.parentElement.childNodes,
                        h = f = 0; h < g.length; ++h) {
                            var t = g[h];
                            if (t.nodeName && t.nodeName.toString().toLowerCase() === d) {
                                if (k === t) {
                                    d = "." + f;
                                    break a
                                }
                                ++f
                            }
                        }
                    d = ""
                }
                n.push((k.nodeName && k.nodeName.toString().toLowerCase()) + r + d);
                k = k.parentElement
            }
            k = n.join();
            if (e) {
                e = (e = e.ownerDocument) && (e.defaultView || e.parentWindow) || null;
                l = [];
                if (e)
                    try {
                        var u = e.parent;
                        for (n = 0; u && u !== e && n < 25; ++n) {
                            var w = u.frames;
                            for (p = 0; p < w.length; ++p)
                                if (e === w[p]) {
                                    l.push(p);
                                    break
                                }
                            e = u;
                            u = e.parent
                        }
                    } catch (A) {}
                l = l.join()
            } else
                l = ""
        }
        a.push(k, l);
        if (b != null) {
            for (u = 0; u < lw.length - 1; ++u)
                a.push(qf(b, lw[u]) || "");
            b = qf(b, "videoad_start_delay");
            u = "";
            b && (b = parseInt(b, 10),
            u = b < 0 ? "postroll" : b == 0 ? "preroll" : "midroll");
            a.push(u)
        } else
            for (b = 0; b < lw.length; ++b)
                a.push("");
        return c.videoAdKey = uf(a.join(":")).toString(),
        c
    }
      , RR = function(a, b, c) {
        a = PG(a);
        b = !XN(c, b);
        return {
            ge: a,
            he: b
        }
    }
      , SR = function(a, b, c) {
        var d = RG(a);
        a = RR(a, b, c);
        return mR(new lR, d, a)
    }
      , TR = function(a, b, c) {
        var d = RG(a);
        a = RR(a, b, c);
        b = new lR;
        if (mR(b, d, {
            ge: a.ge,
            he: a.he
        })) {
            var e;
            d = (e = HQ("__eoi", b.g)) != null ? e : void 0
        } else
            d = void 0;
        return d
    }
      , UR = function(a, b, c) {
        if (dd() && xf(window.fetch) && xf(window.AbortController))
            try {
                var d = window.isSecureContext && !["localhost", "127.0.0.1"].includes(window.location.hostname)
                  , e = window.document;
                var f = !!(d && "browsingTopics"in e && e.browsingTopics instanceof Function && wC("browsing-topics", e));
                if (a.j) {
                    var g = MG(a, "rdp");
                    var h = JG(g) ? "1" : ""
                } else
                    h = "";
                d = h === "1";
                var k, l = MG(a, "us_privacy"), n = a.g.uspString || l || "";
                n = n.toUpperCase();
                l = n;
                if (l.length == 4 && (l.indexOf("-") == -1 || l.substring(1) === "---") && l[0] >= "1" && l[0] <= "9" && lu.hasOwnProperty(l[1]) && lu.hasOwnProperty(l[2]) && lu.hasOwnProperty(l[3])) {
                    var p = new ku;
                    var r = fj(p, 1, parseInt(n[0], 10));
                    var t = I(r, 2, lu[n[1]]);
                    var u = I(t, 3, lu[n[2]]);
                    var w = I(u, 4, lu[n[3]])
                } else
                    w = null;
                var A = w;
                var L;
                if (!(L = (A == null ? void 0 : Yi(A, 3)) === 2 || SG(a)))
                    if (NG(a)) {
                        var ja = OG(a);
                        L = ja ? !iz(ja, ["3", "4"], 0) : !0
                    } else
                        L = !1;
                if (!(k = L)) {
                    var Y = MG(a, "npa")
                      , Ya = JG(Y);
                    k = (a.j && Ya ? "1" : "") === "1"
                }
                var xb;
                if (!(xb = k || d || QG(a))) {
                    if (a.j) {
                        var xa = MG(a, "tfcd");
                        var Gb = xa === "0" || xa === "false" ? (0).toString() : JG(xa) ? (1).toString() : ""
                    } else
                        Gb = "";
                    var gb;
                    if (!(gb = Gb === (1).toString())) {
                        if (a.j) {
                            var Ba = MG(a, "tfua");
                            var yb = Ba === "0" || Ba === "false" ? (0).toString() : JG(Ba) ? (1).toString() : ""
                        } else
                            yb = "";
                        gb = yb === (1).toString()
                    }
                    xb = gb
                }
                k = !xb;
                if (c && b) {
                    var U, Qa, ka;
                    var Sb = (ka = (U = Li(c, wt, 4)) == null ? void 0 : (Qa = Hi(U, 1, void 0, Ph)) == null ? void 0 : Qa.get(b)) != null ? ka : !0
                } else
                    Sb = !0;
                b = f && k && Sb;
                if (tN(cw)) {
                    var hb = !!navigator.globalPrivacyControl
                      , ib = a.B && hb;
                    return b && !ib
                }
                return b
            } catch (dc) {
                var Ca;
                W.getInstance().report(209, {
                    message: (Ca = dc) == null ? void 0 : Ca.message
                })
            }
        return !1
    }
      , MR = function(a, b, c) {
        if (b)
            return a.o = null,
            Promise.resolve([]);
        b = [];
        b.push(VR());
        c && b.push(WR(a));
        return Promise.all(b)
    }
      , NR = function(a, b, c, d, e, f, g, h) {
        c = YR(a, c, d, e, f, g, h);
        b = nP(a.l, b);
        a.H.listen(b, "adsLoader", function(k) {
            var l = k.messageType;
            switch (l) {
            case "adsLoaded":
                l = k.qa;
                k = k.wc;
                l = new Z(a.j,a.g,l.adTagUrl || "",l.adCuePoints,a.C,l.isCustomClickTrackingAllowed,nP(a.l, k),e);
                k = new $Q(l,PR(a, k));
                N.prototype.dispatchEvent.call(a, k);
                break;
            case "error":
                JR(a, k.qa, k.wc);
                break;
            case "cookieUpdate":
                k = k.qa;
                if (k == null)
                    break;
                if (BG.isCookiesEnabled()) {
                    l = new HG;
                    l = cj(l, 5, !0);
                    var n = k.gfpCookie;
                    n && OQ(a.A, "__gads", DQ(n), l);
                    (n = k.gfpCookieV2) && OQ(a.A, "__gpi", DQ(n), l)
                }
                if (n = k.eoidCookie) {
                    l = new lR;
                    n = DQ(n);
                    var p = Xe(Sv(Wi(n, 2))) - Date.now() / 1E3;
                    p = {
                        Vc: Math.max(p, 0),
                        path: Xe(Xi(n, 3)),
                        domain: Xe(Xi(n, 4)),
                        md: !1
                    };
                    LQ("__eoi", Xe(n.getValue()), p, l.g)
                }
                OR(a, k.encryptedSignalBidderIds || [], e);
                break;
            case "trackingUrlPinged":
                N.prototype.dispatchEvent.call(a, new fQ(l,null,k.qa))
            }
        });
        GH(b, "adsLoader", "requestAds", c);
        b = {};
        W.getInstance().report(155, (b.ws = zN(),
        b.blob = f != null ? f : "undef",
        b))
    }
      , WR = function(a) {
        var b;
        return Ka(function(c) {
            if (c.g == 1)
                return a.o || (a.o = new CH,
                DH(a.o)),
                za(c, a.o.getId(), 2);
            b = c.j;
            BG.A = b.id || "";
            c.g = 0
        })
    }
      , VR = function() {
        return dd() && (OA(AB) || OA(zB)) ? OA(zB) ? new Promise(function(a) {
            setTimeout(function() {
                a()
            }, 50)
        }
        ) : ZR().then(function(a) {
            var b, c = (b = a.label) != null ? b : "";
            BG.I = c;
            BG.H = a.status
        }) : Promise.resolve()
    }
      , ZR = function() {
        if (navigator.cookieDeprecationLabel) {
            var a = navigator.cookieDeprecationLabel.getValue().then(function(c) {
                return {
                    label: c,
                    status: 1
                }
            }).catch(function() {
                return {
                    label: "",
                    status: 2
                }
            })
              , b = new Promise(function(c) {
                setTimeout(function() {
                    c({
                        label: "",
                        status: 5
                    })
                }, 50)
            }
            );
            return Promise.race([b, a])
        }
        return Promise.resolve({
            label: "",
            status: 3
        })
    }
      , YR = function(a, b, c, d, e, f, g) {
        var h = {};
        h = (h.limaExperimentIds = SA().sort().join(","),
        h);
        var k = Af();
        if (g && a.P.g)
            try {
                pr()
            } catch (Ba) {}
        var l = iR()
          , n = {};
        l = (n.experimentStateProto = l.da(),
        n);
        n = a.getSettings().da(zP(a.j));
        var p = QR(a, b.adTagUrl)
          , r = xC()
          , t = eR()
          , u = {};
        c = (u.consentSettings = c,
        u.imalibExperiments = h,
        u.genotypeExperimentData = l,
        u.settings = n,
        u.videoEnvironment = p,
        u.isFledgeEligible = r,
        u.pvsid = k,
        u.sqid = g,
        u.eventfeExperimentIds = t,
        u);
        Object.assign(c, b.da());
        BG.isCookiesEnabled() && (g = RG(d),
        c.isBrowserCookieEnabled = NQ(a.A, g),
        h = g ? GQ("__gads", g, a.A.g) : null,
        h !== null && (c.gfpCookieValue = h),
        h = g ? GQ("__gpi", g, a.A.g) : null,
        h !== null && (c.gfpCookieV2Id = h),
        g = g ? GQ("__gpi_opt_out", g, a.A.g) : null,
        g !== null && (c.gfpCookieV2OptOut = g));
        g = b.adTagUrl ? qG(b.adTagUrl) : null;
        h = SR(d, g, f);
        c.eoidCookieEnabled = h;
        (h = TR(d, g, f)) && (c.eoidCookieValue = h);
        c.ivtDetectionOnlyStorageAllowed = $N(d, f, g);
        if (h = zI(RG(d)))
            a.G.espSignals = h,
            c.espSignals = h;
        e && (c.gmaSignals = e);
        c.isEapLoader = !1;
        e = function(Ba) {
            W.getInstance().report(195, {
                message: Ba == null ? void 0 : Ba.message
            })
        }
        ;
        try {
            var w = pR();
            if (w) {
                var A = rG(b.adTagUrl, e)
                  , L = A ? OA(DB) ? 1 : YN(f, pG(A)) ? 2 : 0 : 0
                  , ja = uN(bw);
                switch (L) {
                case 1:
                case 2:
                    var Y, Ya = (Y = GR(w, {
                        adUnitCode: A
                    }, {
                        Pb: sG(b.adTagUrl),
                        Ve: ja || L !== 1 ? 0 : 100,
                        qd: uN(aw) === 1
                    })) == null ? void 0 : Y.Pg;
                    c.clientBidsProto = Ya ? kI(qt(Ya)) : void 0
                }
                if (ja) {
                    var xb;
                    c.globalPlacementId = (xb = oR(w, [{
                        adUnitCode: A
                    }])[0]) == null ? void 0 : xb.substring(0, ja)
                }
            }
        } catch (Ba) {
            e(Ba)
        }
        try {
            var xa = ZN(f);
            xa && (c.publisherInitiatedExperimentDataProto = kI(VN(xa)))
        } catch (Ba) {
            var Gb;
            W.getInstance().report(214, {
                message: (Gb = Ba) == null ? void 0 : Gb.message
            })
        }
        c.topicsEnabled = UR(d, g, f);
        try {
            c.quicksilverSignals = TH(a.g).da()
        } catch (Ba) {
            var gb;
            W.getInstance().report(212, {
                message: (gb = Ba) == null ? void 0 : gb.message
            }, !0)
        }
        return c
    };
    HR.prototype.contentComplete = HR.prototype.contentComplete;
    HR.prototype.getSettings = HR.prototype.getSettings;
    HR.prototype.requestAds = HR.prototype.requestAds;
    HR.prototype.getVersion = HR.prototype.getVersion;
    HR.prototype.destroy = HR.prototype.destroy;
    HR.prototype.dispatchEvent = HR.prototype.dispatchEvent;
    HR.prototype.listen = HR.prototype.listen;
    var $R = function() {
        this.l = this.j = "unknown";
        this.g = "0";
        this.adsResponse = null;
        this.adTagUrl = "";
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.forceNonLinearFullSlot = !1;
        this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
        this.omidAccessModeRules = {};
        this.pageUrl = null;
        this.vastLoadTimeout = 5E3
    };
    $R.prototype.da = function() {
        var a = {};
        a.adsResponse = this.adsResponse;
        a.videoPlayActivation = this.j;
        a.videoPlayMuted = this.l;
        a.videoContinuousPlay = this.g;
        a.adTagUrl = this.adTagUrl;
        a.contentDuration = this.contentDuration;
        a.contentKeywords = this.contentKeywords;
        a.contentTitle = this.contentTitle;
        a.linearAdSlotWidth = this.linearAdSlotWidth;
        a.linearAdSlotHeight = this.linearAdSlotHeight;
        a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
        a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
        a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
        a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
        a.vastLoadTimeout = this.vastLoadTimeout;
        a.omidAccessModeRules = this.omidAccessModeRules;
        a.pageUrl = this.pageUrl;
        return a
    }
    ;
    $R.prototype.setAdWillAutoPlay = function(a) {
        this.j = a ? "auto" : "click"
    }
    ;
    $R.prototype.setAdWillPlayMuted = function(a) {
        this.l = a ? "muted" : "unmuted"
    }
    ;
    $R.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    }
    ;
    $R.prototype.setContinuousPlayback = $R.prototype.setContinuousPlayback;
    $R.prototype.setAdWillPlayMuted = $R.prototype.setAdWillPlayMuted;
    $R.prototype.setAdWillAutoPlay = $R.prototype.setAdWillAutoPlay;
    var aS = function(a, b) {
        tr.call(this, a);
        this.g = b
    };
    mb(aS, tr);
    aS.prototype.j = function() {
        return this.g
    }
    ;
    var cS = function(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        N.call(this);
        this.H = c;
        this.G = b;
        this.o = a;
        this.j = null;
        this.D = !1;
        this.C = e;
        this.l = this.g = this.A = null;
        this.K = d || "en";
        bS(this)
    };
    v(cS, N);
    var bS = function(a) {
        a.j = Ae(document, "DIV");
        a.j.id = "adContainer";
        Pl(a.j, {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "none"
        });
        BG.setLocale(a.K);
        a.o.appendChild(a.j);
        a.A = new $P(a.j);
        a.l = new HR(a.A);
        a.l.getSettings().setPlayerType("html5_games");
        a.l.addEventListener("adsManagerLoaded", function(b) {
            return dS(a, b)
        });
        a.l.addEventListener("adError", function(b) {
            return a.Nb(b)
        })
    }
      , dS = function(a, b) {
        var c = new DO;
        c.useStyledLinearAds = !0;
        try {
            a.g = b.getAdsManager({}, c)
        } catch (e) {
            a.Nb(e);
            return
        }
        a.g.addEventListener("adError", a.Nb);
        b = x(["allAdsCompleted", "complete", "skip", "userClose"]);
        for (c = b.next(); !c.done; c = b.next())
            a.g.addEventListener(c.value, function(e) {
                switch (e.type) {
                case "allAdsCompleted":
                case "complete":
                case "userClose":
                case "skip":
                    eS(a)
                }
            });
        try {
            var d = a.C ? ye(window) : Yl(a.o);
            a.g.init(d.width, d.height, "normal")
        } catch (e) {
            a.Nb(e)
        }
        try {
            a.G()
        } catch (e) {
            a.Ma("Error invoking onAdLoaded callback")
        }
    };
    m = cS.prototype;
    m.initialize = function() {
        this.A.initialize();
        this.D = !0
    }
    ;
    m.requestAds = function(a) {
        if (this.D)
            if (Jc(a))
                this.Ma("Empty ad tag url"),
                eS(this);
            else {
                var b = a;
                Sc(b, "pubads.g.doubleclick.net") || Sc(b, "googleads.g.doubleclick.net") ? (b = new O(b),
                a = Ed(b.l.get("channel")),
                b.l.remove("channel"),
                a = Jc(a) ? "interstitial" : a + "+interstitial",
                Iz(b, "channel", a),
                a = b.toString()) : a = b;
                b = new $R;
                b.adTagUrl = a;
                b.forceNonLinearFullSlot = !0;
                a = this.C ? ye(window) : Yl(this.o);
                b.linearAdSlotWidth = a.width;
                b.linearAdSlotHeight = a.height;
                b.nonLinearAdSlotWidth = a.width;
                b.nonLinearAdSlotHeight = a.height;
                this.l.requestAds(b)
            }
        else
            this.Ma("Cannot request ad before initializing"),
            eS(this)
    }
    ;
    m.vf = function() {
        if (this.g != null)
            try {
                Pl(this.j, "display", "block"),
                this.g.start()
            } catch (a) {
                this.Nb(a)
            }
    }
    ;
    m.resize = function(a, b) {
        this.o.style.height = b + "px";
        this.o.style.width = a + "px";
        if (this.g != null)
            try {
                this.g.resize(a, b, "normal")
            } catch (c) {
                this.Nb(c)
            }
    }
    ;
    m.Nb = function(a) {
        fS(this);
        a = a instanceof dQ ? a.getError().getMessage() : a instanceof bQ ? a.getMessage() : "Error loading or playing the ad";
        this.Ma(a);
        eS(this)
    }
    ;
    m.Ma = function(a) {
        this.dispatchEvent(new aS("adError",a))
    }
    ;
    var eS = function(a) {
        fS(a);
        try {
            a.H()
        } catch (b) {
            a.Ma("Error invoking done callback")
        }
    }
      , fS = function(a) {
        a.g && a.g.destroy();
        a.g = null;
        Pl(a.j, "display", "none")
    };
    cS.prototype.initialize = cS.prototype.initialize;
    cS.prototype.requestAds = cS.prototype.requestAds;
    cS.prototype.resize = cS.prototype.resize;
    cS.prototype.showAd = cS.prototype.vf;
    aS.prototype.getErrorMessage = aS.prototype.j;
    z("google.outstream.AdsController", cS, window);
    z("google.outstream.ErrorEvent.Type.AD_ERROR", "adError", window);
    var gS = {
        qj: "wait",
        Sh: "browse",
        PLAY: "play",
        Ni: "lose",
        rj: "win",
        cj: "reward"
    }
      , lS = function() {
        var a = hS
          , b = iS
          , c = this;
        this.L = jS;
        this.C = a;
        this.o = b;
        this.j = null;
        this.g = !1;
        this.l = new cS(document.body,function() {
            c.g = !0
        }
        ,function() {
            c.g = !1;
            c.j != null && c.j();
            kS(c, c.B)
        }
        ,void 0,!0);
        this.A = 0;
        this.B = "wait";
        kS(this)
    }
      , kS = function(a, b) {
        if (!a.g) {
            a.l.initialize();
            var c = "&channel=adbreak_api";
            a.C && (c += "+" + a.C);
            b && (c += "+" + b);
            b = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_text_image&client=" + a.L + c;
            a.o && (b += "&adtest=on");
            a.l.requestAds(b)
        }
    };
    lS.prototype.I = function(a, b) {
        a: {
            for (var c in gS)
                if (gS[c] === a) {
                    a = gS[c];
                    break a
                }
            a = void 0
        }
        if (!a)
            throw Error("Invalid gamePlay value");
        this.B = a;
        this.j = b;
        this.g && (this.o || Date.now() - this.A > 3E5) ? (this.l.vf(),
        this.A = Date.now()) : (kS(this, a),
        b())
    }
    ;
    lS.prototype.D = function() {
        return this.g
    }
    ;
    lS.prototype.adBreak = lS.prototype.I;
    lS.prototype.isAdCached = lS.prototype.D;
    var mS = window.document.querySelector('script[src*="outstream.js"][data-ad-client]:not([data-checked-head])');
    if (mS) {
        mS.setAttribute("data-checked-head", "true");
        var jS = mS.getAttribute("data-ad-client")
          , hS = mS.getAttribute("data-ad-channel")
          , iS = mS.getAttribute("data-adtest") === "on";
        window.gameads = new lS
    }
    ;z("google.ima.AdCuePoints.POSTROLL", -1, window);
    z("google.ima.AdCuePoints.PREROLL", 0, window);
    z("google.ima.AdDisplayContainer", $P, window);
    z("google.ima.AdError.ErrorCode", S, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    z("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    z("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    z("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.Type", aQ, window);
    z("google.ima.AdErrorEvent.Type", cQ, window);
    z("google.ima.AdEvent.Type", eQ, window);
    z("google.ima.AdsLoader", HR, window);
    z("google.ima.AdsManagerLoadedEvent.Type", ZQ, window);
    z("google.ima.CompanionAdSelectionSettings", MH, window);
    z("google.ima.CompanionAdSelectionSettings.CreativeType", IH);
    z("google.ima.CompanionAdSelectionSettings.ResourceType", JH);
    z("google.ima.CompanionAdSelectionSettings.SizeCriteria", KH);
    z("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    z("ima.ImaSdkSettings", T, window);
    z("google.ima.settings", BG, window);
    z("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    z("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    z("google.ima.AdsRenderingSettings", DO, window);
    z("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    z("google.ima.AdsRequest", $R, window);
    z("google.ima.VERSION", "3.695.1");
    z("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "limited",
        FULL: "full"
    });
    z("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    z("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    z("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
    z("google.ima.secureSignals", {
        clearAllCache: function() {
            var a = window.localStorage;
            if (a !== void 0)
                for (var b = x(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value,
                    c.startsWith("_GESPSK"))
                        try {
                            a.removeItem(c)
                        } catch (d) {}
            rI = new qI
        }
    });
}
).call(this);
