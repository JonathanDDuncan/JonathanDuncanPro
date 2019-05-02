/************************************************
 * REVOLUTION 5.4.2 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.8 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 ************************************************/
! function (a) {
    "use strict";
    var b = jQuery.fn.revolution,

        c = {
            alias: "SlideAnimations Min JS",
            name: "revolution.extensions.slideanims.min.js",
            min_core: "5.4.5",
            version: "1.8"
        };
    jQuery.extend(!0, b, {
        animateSlide: function (a, d, e, f, h, i, j, k) {
            return "stop" === b.compare_version(c).check ? k : g(a, d, e, f, h, i, j, k)
        }
    });
    var d = function (a, c, d, e) {
        var f = a,
            g = f.find(".defaultimg"),
            h = g.data("mediafilter"),
            i = f.data("zoomstart"),
            j = f.data("rotationstart");
        void 0 != g.data("currotate") && (j = g.data("currotate")), void 0 != g.data("curscale") && "box" == e ? i = 100 * g.data("curscale") : void 0 != g.data("curscale") && (i = g.data("curscale")), b.slotSize(g, c);
        var k = g.attr("src"),
            l = g.data("bgcolor"),
            m = c.width,
            n = c.height,
            o = g.data("fxof"),
            p = 0;
        void 0 === l && (l = g.css("backgroundColor")), "on" == c.autoHeight && (n = c.c.height()), void 0 == o && (o = 0);
        var q = 0,
            r = g.data("bgfit"),
            s = g.data("bgrepeat"),
            t = g.data("bgposition");
        void 0 == r && (r = "cover"), void 0 == s && (s = "no-repeat"), void 0 == t && (t = "center center");
        var u = "";
        switch (u = void 0 !== l && l.indexOf("gradient") >= 0 ? "background:" + l : "background-color:" + l + ";background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + t, e) {
            case "box":
                for (var v = 0, w = 0, x = 0; x < c.slots; x++) {
                    w = 0;
                    for (var y = 0; y < c.slots; y++) f.append('<div class="slot" style="position:absolute;top:' + (p + w) + "px;left:" + (o + v) + "px;width:" + c.slotw + "px;height:" + c.sloth + 'px;overflow:hidden;"><div class="slotslide ' + h + '" data-x="' + v + '" data-y="' + w + '" style="position:absolute;top:0px;left:0px;width:' + c.slotw + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - w) + "px;left:" + (0 - v) + "px;width:" + m + "px;height:" + n + "px;" + u + ';"></div></div></div>'), w += c.sloth, void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
                        rotationZ: j
                    });
                    v += c.slotw
                }
                break;
            case "vertical":
            case "horizontal":
                if ("horizontal" == e) {
                    if (!d) var q = 0 - c.slotw;
                    for (var y = 0; y < c.slots; y++) f.append('<div class="slot" style="position:absolute;top:' + (0 + p) + "px;left:" + (o + y * c.slotw) + "px;overflow:hidden;width:" + (c.slotw + .3) + "px;height:" + n + 'px"><div class="slotslide ' + h + '" style="position:absolute;top:0px;left:' + q + "px;width:" + (c.slotw + .6) + "px;height:" + n + 'px;overflow:hidden;"><div style="position:absolute;top:0px;left:' + (0 - y * c.slotw) + "px;width:" + m + "px;height:" + n + "px;" + u + ';"></div></div></div>'), void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
                        rotationZ: j
                    })
                } else {
                    if (!d) var q = 0 - c.sloth;
                    for (var y = 0; y < c.slots + 2; y++) f.append('<div class="slot" style="position:absolute;top:' + (p + y * c.sloth) + "px;left:" + o + "px;overflow:hidden;width:" + m + "px;height:" + c.sloth + 'px"><div class="slotslide ' + h + '" style="position:absolute;top:' + q + "px;left:0px;width:" + m + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - y * c.sloth) + "px;left:0px;width:" + m + "px;height:" + n + "px;" + u + ';"></div></div></div>'), void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
                        rotationZ: j
                    })
                }
        }
    },
        e = function (a, b, c, d) {
            function y() {
                jQuery.each(v, function (a, c) {
                    c[0] != b && c[8] != b || (q = c[1], r = c[2], s = t), t += 1
                })
            }
            var e = a[0].opt,
                f = punchgs.Power1.easeIn,
                g = punchgs.Power1.easeOut,
                h = punchgs.Power1.easeInOut,
                i = punchgs.Power2.easeIn,
                j = punchgs.Power2.easeOut,
                k = punchgs.Power2.easeInOut,
                m = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                n = punchgs.Power3.easeInOut,
                o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                p = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                q = 0,
                r = 1,
                s = 0,
                t = 0,
                v = (new Array, [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, g, g, 500, 6],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, h, h, 700, 5],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, k, k, 700, 3],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, k, k, 700, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, g, g, 300, 5],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, g, g, 300, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, g, g, 300, 5],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, g, g, 300, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, j, j, 500, 8],
                    ["slotfade-horizontal", 9, 0, 0, 1e3, "horizontal", !0, null, 9, j, j, 2e3, 10],
                    ["slotfade-vertical", 10, 0, 0, 1e3, "vertical", !0, null, 10, j, j, 2e3, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["crossfade", 11, 1, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["fadethroughdark", 11, 2, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["fadethroughlight", 11, 3, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["fadethroughtransparent", 11, 4, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1],
                    ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1],
                    ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1],
                    ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1],
                    ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1],
                    ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1],
                    ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1],
                    ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1],
                    ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16, n, n, 1e3, 2],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, h, h, 500, 7],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, h, h, 500, 5],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, n, n, 500, 1],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, n, n, 500, 1],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, m, n, 500, 1],
                    ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, n, n, 500, 1],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, k, k, 500, 1],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, j, j, 500, 1],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, j, j, 500, 1],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, k, k, 500, 1],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, k, k, 500, 1],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28, k, k, 1e3, 1],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, k, k, 1e3, 1],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, k, k, 1e3, 1],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, k, k, 1e3, 1],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, k, k, 1e3, 1],
                    ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, k, k, 1e3, 1],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, k, k, 1e3, 1],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, k, k, 1e3, 1],
                    ["parallaxtoright", 15, 3, 1, 0, "horizontal", !0, !0, 36, k, i, 1500, 1],
                    ["parallaxtoleft", 12, 3, 1, 0, "horizontal", !0, !0, 37, k, i, 1500, 1],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, k, f, 1500, 1],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, k, f, 1500, 1],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, k, i, 1e3, 1],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, k, i, 1e3, 1],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, k, i, 1e3, 1],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, k, i, 1e3, 1],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, k, i, 1e3, 1],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, k, i, 1e3, 1],
                    ["slidingoverlayup", 27, 0, 1, 0, "horizontal", !0, !0, 47, h, g, 2e3, 1],
                    ["slidingoverlaydown", 28, 0, 1, 0, "horizontal", !0, !0, 48, h, g, 2e3, 1],
                    ["slidingoverlayright", 30, 0, 1, 0, "horizontal", !0, !0, 49, h, g, 2e3, 1],
                    ["slidingoverlayleft", 29, 0, 1, 0, "horizontal", !0, !0, 50, h, g, 2e3, 1],
                    ["parallaxcirclesup", 31, 0, 1, 0, "horizontal", !0, !0, 51, k, f, 1500, 1],
                    ["parallaxcirclesdown", 32, 0, 1, 0, "horizontal", !0, !0, 52, k, f, 1500, 1],
                    ["parallaxcirclesright", 33, 0, 1, 0, "horizontal", !0, !0, 53, k, f, 1500, 1],
                    ["parallaxcirclesleft", 34, 0, 1, 0, "horizontal", !0, !0, 54, k, f, 1500, 1],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, k, i, 1e3, 1],
                    ["parallaxright", 15, 3, 1, 0, "horizontal", !0, !0, 55, k, i, 1500, 1],
                    ["parallaxleft", 12, 3, 1, 0, "horizontal", !0, !0, 56, k, i, 1500, 1],
                    ["parallaxup", 14, 3, 1, 0, "horizontal", !0, !0, 57, k, f, 1500, 1],
                    ["parallaxdown", 13, 3, 1, 0, "horizontal", !0, !0, 58, k, f, 1500, 1],
                    ["grayscale", 11, 5, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["grayscalecross", 11, 6, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["brightness", 11, 7, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["brightnesscross", 11, 8, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["blurlight", 11, 9, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["blurlightcross", 11, 10, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["blurstrong", 11, 9, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["blurstrongcross", 11, 10, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1]
                ]);
            e.duringslidechange = !0, e.testanims = !1, 1 == e.testanims && (e.nexttesttransform = void 0 === e.nexttesttransform ? 34 : e.nexttesttransform + 1, e.nexttesttransform = e.nexttesttransform > 70 ? 0 : e.nexttesttransform, b = v[e.nexttesttransform][0], console.log(b + "  " + e.nexttesttransform + "  " + v[e.nexttesttransform][1] + "  " + v[e.nexttesttransform][2])), jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax", "parralaxto"], function (a, c) {
                b == c + "horizontal" && (b = 1 != d ? c + "left" : c + "right"), b == c + "vertical" && (b = 1 != d ? c + "up" : c + "down")
            }), "random" == b && (b = Math.round(Math.random() * v.length - 1)) > v.length - 1 && (b = v.length - 1), "random-static" == b && (b = Math.round(Math.random() * o.length - 1), b > o.length - 1 && (b = o.length - 1), b = o[b]), "random-premium" == b && (b = Math.round(Math.random() * p.length - 1), b > p.length - 1 && (b = p.length - 1), b = p[b]);
            var w = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == e.isJoomla && void 0 != window.MooTools && -1 != w.indexOf(b)) {
                var x = Math.round(Math.random() * (p.length - 2)) + 1;
                x > p.length - 1 && (x = p.length - 1), 0 == x && (x = 1), b = p[x]
            }
            y(), q > 30 && (q = 30), q < 0 && (q = 0);
            var z = new Object;
            return z.nexttrans = q, z.STA = v[s], z.specials = r, z
        },
        f = function (a, b) {
            return void 0 == b || jQuery.isNumeric(a) ? a : void 0 == a ? a : a.split(",")[b]
        },
        g = function (a, b, c, g, h, i, j, k) {
            function V(a, b, c, d, e) {
                var f = a.find(".slot"),
                    g = 6,
                    h = [2, 1.2, .9, .7, .55, .42],
                    j = a.width(),
                    l = a.height();
                f.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');
                for (var n = 0; n < g; n++) f.parent().clone(!1).appendTo(i);
                a.find(".slot-circle-wrapper").each(function (a) {
                    if (a < g) {
                        var d = jQuery(this),
                            f = d.find(".slot"),
                            i = j > l ? h[a] * j : h[a] * l,
                            m = i,
                            n = m / 2 - j / 2 + 0,
                            o = i / 2 - l / 2 + 0,
                            p = 0 != a ? "50%" : "0",
                            q = l / 2 - i / 2,
                            r = 33 == c ? j / 2 - m / 2 : 34 == c ? j - m : j / 2 - m / 2,
                            s = {
                                scale: 1,
                                transformOrigo: "50% 50%",
                                width: m + "px",
                                height: i + "px",
                                top: q + "px",
                                left: r + "px",
                                borderRadius: p
                            },
                            t = {
                                scale: 1,
                                top: l / 2 - i / 2,
                                left: j / 2 - m / 2,
                                ease: e
                            },
                            u = o,
                            v = 33 == c ? n : 34 == c ? n + j / 2 : n,
                            w = {
                                width: j,
                                height: l,
                                autoAlpha: 1,
                                top: u + "px",
                                position: "absolute",
                                left: v + "px"
                            },
                            x = {
                                top: o + "px",
                                left: n + "px",
                                ease: e
                            },
                            y = b,
                            z = 0;
                        k.add(punchgs.TweenLite.fromTo(d, y, s, t), z), k.add(punchgs.TweenLite.fromTo(f, y, w, x), z), k.add(punchgs.TweenLite.fromTo(d, .001, {
                            autoAlpha: 0
                        }, {
                                autoAlpha: 1
                            }), 0)
                    }
                })
            }
            var l = c[0].opt,
                m = h.index(),
                n = g.index(),
                o = n < m ? 1 : 0;
            "arrow" == l.sc_indicator && (o = l.sc_indicator_dir);
            var p = e(c, b, i, o),
                q = p.STA,
                r = p.specials,
                a = p.nexttrans;
            "on" == i.data("kenburns") && (a = 11);
            var s = g.data("nexttransid") || 0,
                t = f(g.data("masterspeed"), s);
            t = "default" === t ? q[11] : "random" === t ? Math.round(1e3 * Math.random() + 300) : void 0 != t ? parseInt(t, 0) : q[11], t = t > l.delay ? l.delay : t, t += q[4], l.slots = f(g.data("slotamount"), s), l.slots = void 0 == l.slots || "default" == l.slots ? q[12] : "random" == l.slots ? Math.round(12 * Math.random() + 4) : l.slots, l.slots = l.slots < 1 ? "boxslide" == b ? Math.round(6 * Math.random() + 3) : "flyin" == b ? Math.round(4 * Math.random() + 1) : l.slots : l.slots, l.slots = (4 == a || 5 == a || 6 == a) && l.slots < 3 ? 3 : l.slots, l.slots = 0 != q[3] ? Math.min(l.slots, q[3]) : l.slots, l.slots = 9 == a ? l.width / l.slots : 10 == a ? l.height / l.slots : l.slots, l.rotate = f(g.data("rotate"), s), l.rotate = void 0 == l.rotate || "default" == l.rotate ? 0 : 999 == l.rotate || "random" == l.rotate ? Math.round(360 * Math.random()) : l.rotate, l.rotate = l.ie || l.ie9 ? 0 : l.rotate, 11 != a && (null != q[7] && d(j, l, q[7], q[5]), null != q[6] && d(i, l, q[6], q[5])), k.add(punchgs.TweenLite.set(i.find(".defaultvid"), {
                y: 0,
                x: 0,
                top: 0,
                left: 0,
                scale: 1
            }), 0), k.add(punchgs.TweenLite.set(j.find(".defaultvid"), {
                y: 0,
                x: 0,
                top: 0,
                left: 0,
                scale: 1
            }), 0), k.add(punchgs.TweenLite.set(i.find(".defaultvid"), {
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(j.find(".defaultvid"), {
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(i, {
                autoAlpha: 1,
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(j, {
                autoAlpha: 1,
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(i.parent(), {
                backgroundColor: "transparent"
            }), 0), k.add(punchgs.TweenLite.set(j.parent(), {
                backgroundColor: "transparent"
            }), 0);
            var u = f(g.data("easein"), s),
                v = f(g.data("easeout"), s);
            if (u = "default" === u ? q[9] || punchgs.Power2.easeInOut : u || q[9] || punchgs.Power2.easeInOut, v = "default" === v ? q[10] || punchgs.Power2.easeInOut : v || q[10] || punchgs.Power2.easeInOut, 0 == a) {
                var w = Math.ceil(l.height / l.sloth),
                    x = 0;
                i.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    x += 1, x == w && (x = 0), k.add(punchgs.TweenLite.from(b, t / 600, {
                        opacity: 0,
                        top: 0 - l.sloth,
                        left: 0 - l.slotw,
                        rotation: l.rotate,
                        force3D: "auto",
                        ease: u
                    }), (15 * a + 30 * x) / 1500)
                })
            }
            if (1 == a) {
                var y, z = 0;
                i.find(".slotslide").each(function (a) {
                    var b = jQuery(this),
                        c = Math.random() * t + 300,
                        d = 500 * Math.random() + 200;
                    c + d > y && (y = d + d, z = a), k.add(punchgs.TweenLite.from(b, c / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: l.rotate,
                        ease: u
                    }), d / 1e3)
                })
            }
            if (2 == a) {
                var A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function () {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        left: l.slotw,
                        ease: u,
                        force3D: "auto",
                        rotation: 0 - l.rotate
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function () {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.from(a, t / 1e3, {
                        left: 0 - l.slotw,
                        ease: u,
                        force3D: "auto",
                        rotation: l.rotate
                    }), 0), k.add(A, 0)
                })
            }
            if (3 == a) {
                var A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function () {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        top: l.sloth,
                        ease: u,
                        rotation: l.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function () {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.from(a, t / 1e3, {
                        top: 0 - l.sloth,
                        rotation: l.rotate,
                        ease: v,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), k.add(A, 0)
                })
            }
            if (4 == a || 5 == a) {
                setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var B = t / 1e3,
                    A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function (b) {
                    var c = jQuery(this),
                        d = b * B / l.slots;
                    5 == a && (d = (l.slots - b - 1) * B / l.slots / 1.5), A.add(punchgs.TweenLite.to(c, 3 * B, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + l.height,
                        opacity: .5,
                        rotation: l.rotate,
                        ease: u,
                        delay: d
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function (b) {
                    var c = jQuery(this),
                        d = b * B / l.slots;
                    5 == a && (d = (l.slots - b - 1) * B / l.slots / 1.5), A.add(punchgs.TweenLite.from(c, 3 * B, {
                        top: 0 - l.height,
                        opacity: .5,
                        rotation: l.rotate,
                        force3D: "auto",
                        ease: punchgs.eo,
                        delay: d
                    }), 0), k.add(A, 0)
                })
            }
            if (6 == a) {
                l.slots < 2 && (l.slots = 2), l.slots % 2 && (l.slots = l.slots + 1);
                var A = new punchgs.TimelineLite;
                setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), j.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    if (a + 1 < l.slots / 2) var c = 90 * (a + 2);
                    else var c = 90 * (2 + l.slots - a);
                    A.add(punchgs.TweenLite.to(b, (t + c) / 1e3, {
                        top: 0 + l.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: l.rotate,
                        ease: u
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    if (a + 1 < l.slots / 2) var c = 90 * (a + 2);
                    else var c = 90 * (2 + l.slots - a);
                    A.add(punchgs.TweenLite.from(b, (t + c) / 1e3, {
                        top: 0 - l.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: l.rotate,
                        ease: v
                    }), 0), k.add(A, 0)
                })
            }
            if (7 == a) {
                t *= 2, t > l.delay && (t = l.delay);
                var A = new punchgs.TimelineLite;
                setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), j.find(".slotslide").each(function () {
                    var a = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        left: 0 - l.slotw / 2 + "px",
                        top: 0 - l.height / 2 + "px",
                        width: 2 * l.slotw + "px",
                        height: 2 * l.height + "px",
                        opacity: 0,
                        rotation: l.rotate,
                        force3D: "auto",
                        ease: u
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function (a) {
                    var b = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                            left: 0 - a * l.slotw + "px",
                            ease: v,
                            force3D: "auto",
                            top: "0px",
                            width: l.width,
                            height: l.height,
                            opacity: 1,
                            rotation: 0,
                            delay: .1
                        }), 0), k.add(A, 0)
                })
            }
            if (8 == a) {
                t *= 3, t > l.delay && (t = l.delay);
                var A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function () {
                    var a = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        left: 0 - l.width / 2 + "px",
                        top: 0 - l.sloth / 2 + "px",
                        width: 2 * l.width + "px",
                        height: 2 * l.sloth + "px",
                        force3D: "auto",
                        ease: u,
                        opacity: 0,
                        rotation: l.rotate
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function (a) {
                    var b = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                            left: "0px",
                            top: 0 - a * l.sloth + "px",
                            width: i.find(".defaultimg").data("neww") + "px",
                            height: i.find(".defaultimg").data("newh") + "px",
                            opacity: 1,
                            ease: v,
                            rotation: 0
                        }), 0), k.add(A, 0)
                })
            }
            if (9 == a || 10 == a) {
                var D = 0;
                i.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    D++ , k.add(punchgs.TweenLite.fromTo(b, t / 2e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                            autoAlpha: 1,
                            ease: u,
                            delay: a * l.slots / 100 / 2e3
                        }), 0)
                })
            }
            if (27 == a || 28 == a || 29 == a || 30 == a) {
                var E = i.find(".slot"),
                    F = 27 == a || 28 == a ? 1 : 2,
                    G = 27 == a || 29 == a ? "-100%" : "+100%",
                    H = 27 == a || 29 == a ? "+100%" : "-100%",
                    I = 27 == a || 29 == a ? "-80%" : "80%",
                    J = 27 == a || 29 == a ? "+80%" : "-80%",
                    K = 27 == a || 29 == a ? "+10%" : "-10%",
                    L = {
                        overwrite: "all"
                    },
                    M = {
                        autoAlpha: 0,
                        zIndex: 1,
                        force3D: "auto",
                        ease: u
                    },
                    N = {
                        position: "inherit",
                        autoAlpha: 0,
                        overwrite: "all",
                        zIndex: 1
                    },
                    O = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: v
                    },
                    P = {
                        overwrite: "all",
                        zIndex: 2,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    Q = {
                        autoAlpha: 1,
                        force3D: "auto",
                        overwrite: "all",
                        ease: u
                    },
                    R = {
                        overwrite: "all",
                        zIndex: 2,
                        autoAlpha: 1
                    },
                    S = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: u
                    },
                    T = 1 == F ? "y" : "x";
                L[T] = "0px", M[T] = G, N[T] = K, O[T] = "0%", P[T] = H, Q[T] = G, R[T] = I, S[T] = J, E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), k.add(punchgs.TweenLite.fromTo(j, t / 1e3, L, M), 0), k.add(punchgs.TweenLite.fromTo(i.find(".defaultimg"), t / 2e3, N, O), t / 2e3), k.add(punchgs.TweenLite.fromTo(E, t / 1e3, P, Q), 0), k.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"), t / 1e3, R, S), 0)
            }
            if (31 == a || 32 == a || 33 == a || 34 == a) {
                t = 6e3, u = punchgs.Power3.easeInOut;
                var U = t / 1e3;
                var mas = U - U / 5, _nt = a,
                    fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%", fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%", ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%", tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%";
                k.add(punchgs.TweenLite.fromTo(j, U - .2 * U, {
                    y: 0,
                    x: 0
                }, {
                        y: ty,
                        x: tx,
                        ease: v
                    }), .2 * U), k.add(punchgs.TweenLite.fromTo(i, U, {
                        y: fy,
                        x: fx
                    }, {
                            y: "0%",
                            x: "0%",
                            ease: u
                        }), 0), i.find(".slot").remove(), i.find(".defaultimg").clone().appendTo(i).addClass("slot"), V(i, U, _nt, "in", u)
            }
            if (11 == a) {
                r > 12 && (r = 0);
                var D = 0,
                    W = 2 == r ? "#000000" : 3 == r ? "#ffffff" : "transparent";
                switch (r) {
                    case 0:
                        k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                            autoAlpha: 0
                        }, {
                                autoAlpha: 1,
                                force3D: "auto",
                                ease: u
                            }), 0);
                        break;
                    case 1:
                        k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                            autoAlpha: 0
                        }, {
                                autoAlpha: 1,
                                force3D: "auto",
                                ease: u
                            }), 0), k.add(punchgs.TweenLite.fromTo(j, t / 1e3, {
                                autoAlpha: 1
                            }, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: u
                                }), 0);
                        break;
                    case 2:
                    case 3:
                    case 4:
                        k.add(punchgs.TweenLite.set(j.parent(), {
                            backgroundColor: W,
                            force3D: "auto"
                        }), 0), k.add(punchgs.TweenLite.set(i.parent(), {
                            backgroundColor: "transparent",
                            force3D: "auto"
                        }), 0), k.add(punchgs.TweenLite.to(j, t / 2e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: u
                        }), 0), k.add(punchgs.TweenLite.fromTo(i, t / 2e3, {
                            autoAlpha: 0
                        }, {
                                autoAlpha: 1,
                                force3D: "auto",
                                ease: u
                            }), t / 2e3);
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        var X = jQuery.inArray(r, [9, 10]) >= 0 ? 5 : jQuery.inArray(r, [11, 12]) >= 0 ? 10 : 0,
                            Y = jQuery.inArray(r, [5, 6, 7, 8]) >= 0 ? 100 : 0,
                            Z = jQuery.inArray(r, [7, 8]) >= 0 ? 300 : 0,
                            $ = "blur(" + X + "px) grayscale(" + Y + "%) brightness(" + Z + "%)",
                            _ = "blur(0px) grayscale(0%) brightness(100%)";
                        k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                            autoAlpha: 0,
                            filter: $,
                            "-webkit-filter": $
                        }, {
                                autoAlpha: 1,
                                filter: _,
                                "-webkit-filter": _,
                                force3D: "auto",
                                ease: u
                            }), 0), jQuery.inArray(r, [6, 8, 10]) >= 0 && k.add(punchgs.TweenLite.fromTo(j, t / 1e3, {
                                autoAlpha: 1,
                                filter: _,
                                "-webkit-filter": _
                            }, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: u,
                                    filter: $,
                                    "-webkit-filter": $
                                }), 0)
                }
                k.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), k.add(punchgs.TweenLite.set(j.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)
            }
            if (26 == a) {
                var D = 0;
                t = 0, k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                    autoAlpha: 0
                }, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: u
                    }), 0), k.add(punchgs.TweenLite.to(j, t / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: u
                    }), 0), k.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
                        autoAlpha: 1
                    }), 0), k.add(punchgs.TweenLite.set(j.find("defaultimg"), {
                        autoAlpha: 1
                    }), 0)
            }
            if (12 == a || 13 == a || 14 == a || 15 == a) {
                t = t, t > l.delay && (t = l.delay), setTimeout(function () {
                    punchgs.TweenLite.set(j.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var aa = l.width,
                    ba = l.height,
                    ca = i.find(".slotslide, .defaultvid"),
                    da = 0,
                    ea = 0,
                    fa = 1,
                    ga = 1,
                    ha = 1,
                    ia = t / 1e3,
                    ja = ia;
                "fullwidth" != l.sliderLayout && "fullscreen" != l.sliderLayout || (aa = ca.width(), ba = ca.height()), 12 == a ? da = aa : 15 == a ? da = 0 - aa : 13 == a ? ea = ba : 14 == a && (ea = 0 - ba), 1 == r && (fa = 0), 2 == r && (fa = 0), 3 == r && (ia = t / 1300), 4 != r && 5 != r || (ga = .6), 6 == r && (ga = 1.4), 5 != r && 6 != r || (ha = 1.4, fa = 0, aa = 0, ba = 0, da = 0, ea = 0), 6 == r && (ha = .6);
                7 == r && (aa = 0, ba = 0);
                var la = i.find(".slotslide"),
                    ma = j.find(".slotslide, .defaultvid");
                if (k.add(punchgs.TweenLite.set(h, {
                    zIndex: 15
                }), 0), k.add(punchgs.TweenLite.set(g, {
                    zIndex: 20
                }), 0), 8 == r ? (k.add(punchgs.TweenLite.set(h, {
                    zIndex: 20
                }), 0), k.add(punchgs.TweenLite.set(g, {
                    zIndex: 15
                }), 0), k.add(punchgs.TweenLite.set(la, {
                    left: 0,
                    top: 0,
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    ease: u,
                    force3D: "auto"
                }), 0)) : k.add(punchgs.TweenLite.from(la, ia, {
                    left: da,
                    top: ea,
                    scale: ha,
                    opacity: fa,
                    rotation: l.rotate,
                    ease: u,
                    force3D: "auto"
                }), 0), 4 != r && 5 != r || (aa = 0, ba = 0), 1 != r) switch (a) {
                    case 12:
                        k.add(punchgs.TweenLite.to(ma, ja, {
                            left: 0 - aa + "px",
                            force3D: "auto",
                            scale: ga,
                            opacity: fa,
                            rotation: l.rotate,
                            ease: v
                        }), 0);
                        break;
                    case 15:
                        k.add(punchgs.TweenLite.to(ma, ja, {
                            left: aa + "px",
                            force3D: "auto",
                            scale: ga,
                            opacity: fa,
                            rotation: l.rotate,
                            ease: v
                        }), 0);
                        break;
                    case 13:
                        k.add(punchgs.TweenLite.to(ma, ja, {
                            top: 0 - ba + "px",
                            force3D: "auto",
                            scale: ga,
                            opacity: fa,
                            rotation: l.rotate,
                            ease: v
                        }), 0);
                        break;
                    case 14:
                        k.add(punchgs.TweenLite.to(ma, ja, {
                            top: ba + "px",
                            force3D: "auto",
                            scale: ga,
                            opacity: fa,
                            rotation: l.rotate,
                            ease: v
                        }), 0)
                }
            }
            if (16 == a) {
                var A = new punchgs.TimelineLite;
                k.add(punchgs.TweenLite.set(h, {
                    position: "absolute",
                    "z-index": 20
                }), 0), k.add(punchgs.TweenLite.set(g, {
                    position: "absolute",
                    "z-index": 15
                }), 0), h.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), h.find(".tp-half-one").clone(!0).appendTo(h).addClass("tp-half-two"), h.find(".tp-half-two").removeClass("tp-half-one");
                var aa = l.width,
                    ba = l.height;
                "on" == l.autoHeight && (ba = c.height()), h.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + aa + "px;height:" + ba + 'px;"></div>'), h.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + aa + "px;height:" + ba + 'px;"></div>'), h.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), h.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), k.add(punchgs.TweenLite.set(h.find(".tp-half-two"), {
                    width: aa,
                    height: ba,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: ba / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), k.add(punchgs.TweenLite.set(h.find(".tp-half-one"), {
                    width: aa,
                    height: ba / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var oa = (h.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    pa = Math.round(20 * Math.random() - 10),
                    qa = Math.round(20 * Math.random() - 10),
                    ra = .4 * Math.random() - .2,
                    sa = .4 * Math.random() - .2,
                    ta = 1 * Math.random() + 1,
                    ua = 1 * Math.random() + 1,
                    va = .3 * Math.random() + .3;
                k.add(punchgs.TweenLite.set(h.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-one"), t / 800, {
                    width: aa,
                    height: ba / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                        scale: ta,
                        rotation: oa,
                        y: 0 - ba - ba / 4,
                        autoAlpha: 0,
                        ease: u
                    }), 0), k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-two"), t / 800, {
                        width: aa,
                        height: ba,
                        overflow: "hidden",
                        position: "absolute",
                        top: ba / 2,
                        left: "0px",
                        force3D: "auto",
                        transformOrigin: "center bottom"
                    }, {
                            scale: ua,
                            rotation: pa,
                            y: ba + ba / 4,
                            ease: u,
                            autoAlpha: 0,
                            onComplete: function () {
                                punchgs.TweenLite.set(h, {
                                    position: "absolute",
                                    "z-index": 15
                                }), punchgs.TweenLite.set(g, {
                                    position: "absolute",
                                    "z-index": 20
                                }), h.find(".tp-half-one").length > 0 && (h.find(".tp-half-one .defaultimg").unwrap(), h.find(".tp-half-one .slotholder").unwrap()), h.find(".tp-half-two").remove()
                            }
                        }), 0), A.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
                            autoAlpha: 1
                        }), 0), null != h.html() && k.add(punchgs.TweenLite.fromTo(g, (t - 200) / 1e3, {
                            scale: va,
                            x: l.width / 4 * ra,
                            y: ba / 4 * sa,
                            rotation: qa,
                            force3D: "auto",
                            transformOrigin: "center center",
                            ease: v
                        }, {
                                autoAlpha: 1,
                                scale: 1,
                                x: 0,
                                y: 0,
                                rotation: 0
                            }), 0), k.add(A, 0)
            }
            if (17 == a && i.find(".slotslide").each(function (a) {
                var b = jQuery(this);
                k.add(punchgs.TweenLite.fromTo(b, t / 800, {
                    opacity: 0,
                    rotationY: 0,
                    scale: .9,
                    rotationX: -110,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: u,
                        delay: .06 * a
                    }), 0)
            }), 18 == a && i.find(".slotslide").each(function (a) {
                var b = jQuery(this);
                k.add(punchgs.TweenLite.fromTo(b, t / 500, {
                    autoAlpha: 0,
                    rotationY: 110,
                    scale: .9,
                    rotationX: 10,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: u,
                        delay: .06 * a
                    }), 0)
            }), 19 == a || 22 == a) {
                var A = new punchgs.TimelineLite;
                k.add(punchgs.TweenLite.set(h, {
                    zIndex: 20
                }), 0), k.add(punchgs.TweenLite.set(g, {
                    zIndex: 20
                }), 0), setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var wa = 90,
                    fa = 1,
                    xa = "center center ";
                1 == o && (wa = -90), 19 == a ? (xa = xa + "-" + l.height / 2, fa = 0) : xa += l.height / 2, punchgs.TweenLite.set(c, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), i.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: l.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: xa,
                        rotationX: wa
                    }, {
                            left: 0,
                            rotationY: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            rotationX: 0,
                            delay: 50 * a / 1e3,
                            ease: u
                        }), 0), A.add(punchgs.TweenLite.to(b, .1, {
                            autoAlpha: 1,
                            delay: 50 * a / 1e3
                        }), 0), k.add(A)
                }), j.find(".slotslide").each(function (a) {
                    var b = jQuery(this),
                        c = -90;
                    1 == o && (c = 90), A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: xa,
                        rotationX: 0
                    }, {
                            autoAlpha: 1,
                            rotationY: l.rotate,
                            top: 0,
                            z: 10,
                            scale: 1,
                            rotationX: c,
                            delay: 50 * a / 1e3,
                            force3D: "auto",
                            ease: v
                        }), 0), k.add(A)
                }), k.add(punchgs.TweenLite.set(h, {
                    zIndex: 18
                }), 0)
            }
            if (20 == a) {
                if (setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), 1 == o) var ya = -l.width,
                    wa = 80,
                    xa = "20% 70% -" + l.height / 2;
                else var ya = l.width,
                    wa = -80,
                    xa = "80% 70% -" + l.height / 2;
                i.find(".slotslide").each(function (a) {
                    var b = jQuery(this),
                        c = 50 * a / 1e3;
                    k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: ya,
                        rotationX: 40,
                        z: -600,
                        opacity: fa,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: xa,
                        transformStyle: "flat",
                        rotationY: wa
                    }, {
                            left: 0,
                            rotationX: 0,
                            opacity: 1,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: c,
                            ease: u
                        }), 0)
                }), j.find(".slotslide").each(function (a) {
                    var b = jQuery(this),
                        c = 50 * a / 1e3;
                    if (c = a > 0 ? c + t / 9e3 : 0, 1 != o) var d = -l.width / 2,
                        e = 30,
                        f = "20% 70% -" + l.height / 2;
                    else var d = l.width / 2,
                        e = -30,
                        f = "80% 70% -" + l.height / 2;
                    v = punchgs.Power2.easeInOut, k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: f,
                        transformStyle: "flat",
                        rotationY: 0
                    }, {
                            opacity: 1,
                            rotationX: 20,
                            top: 0,
                            z: -600,
                            left: d,
                            force3D: "auto",
                            rotationY: e,
                            delay: c,
                            ease: v
                        }), 0)
                })
            }
            if (21 == a || 25 == a) {
                setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var wa = 90,
                    ya = -l.width,
                    za = -wa;
                if (1 == o)
                    if (25 == a) {
                        var xa = "center top 0";
                        wa = l.rotate
                    } else {
                        var xa = "left center 0";
                        za = l.rotate
                    }
                else if (ya = l.width, wa = -90, 25 == a) {
                    var xa = "center bottom 0";
                    za = -wa, wa = l.rotate
                } else {
                    var xa = "right center 0";
                    za = l.rotate
                }
                i.find(".slotslide").each(function (a) {
                    var b = jQuery(this),
                        c = t / 1.5 / 3;
                    k.add(punchgs.TweenLite.fromTo(b, 2 * c / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: za,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: xa,
                        rotationY: wa
                    }, {
                            left: 0,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            autoAlpha: 1,
                            scale: 1,
                            rotationY: 0,
                            force3D: "auto",
                            delay: c / 1e3,
                            ease: u
                        }), 0)
                }), 1 != o ? (ya = -l.width, wa = 90, 25 == a ? (xa = "center top 0", za = -wa, wa = l.rotate) : (xa = "left center 0", za = l.rotate)) : (ya = l.width, wa = -90, 25 == a ? (xa = "center bottom 0", za = -wa, wa = l.rotate) : (xa = "right center 0", za = l.rotate)), j.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: xa,
                        rotationY: 0
                    }, {
                            left: 0,
                            rotationX: za,
                            top: 0,
                            z: 0,
                            autoAlpha: 1,
                            force3D: "auto",
                            scale: 1,
                            rotationY: wa,
                            ease: v
                        }), 0)
                })
            }
            if (23 == a || 24 == a) {
                setTimeout(function () {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var wa = -90,
                    fa = 1,
                    Aa = 0;
                if (1 == o && (wa = 90), 23 == a) {
                    var xa = "center center -" + l.width / 2;
                    fa = 0
                } else var xa = "center center " + l.width / 2;
                punchgs.TweenLite.set(c, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), i.find(".slotslide").each(function (a) {
                    var b = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: Aa,
                        rotationX: l.rotate,
                        force3D: "auto",
                        opacity: fa,
                        top: 0,
                        scale: 1,
                        transformPerspective: 1200,
                        transformOrigin: xa,
                        rotationY: wa
                    }, {
                            left: 0,
                            rotationX: 0,
                            autoAlpha: 1,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: 50 * a / 500,
                            ease: u
                        }), 0)
                }), wa = 90, 1 == o && (wa = -90), j.find(".slotslide").each(function (b) {
                    var c = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(c, t / 1e3, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformStyle: "flat",
                        transformPerspective: 1200,
                        transformOrigin: xa,
                        rotationY: 0
                    }, {
                            left: Aa,
                            rotationX: l.rotate,
                            top: 0,
                            scale: 1,
                            rotationY: wa,
                            delay: 50 * b / 500,
                            ease: v
                        }), 0), 23 == a && k.add(punchgs.TweenLite.fromTo(c, t / 2e3, {
                            autoAlpha: 1
                        }, {
                                autoAlpha: 0,
                                delay: 50 * b / 500 + t / 3e3,
                                ease: v
                            }), 0)
                })
            }
            return k
        }
}(jQuery);