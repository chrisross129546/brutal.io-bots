(function (n, s, m) {
    var cb, db, ua, va;
    
    function eb() {
        var b = -1 < navigator.userAgent.indexOf('Chrome'), f = -1 < navigator.userAgent.indexOf('Safari');
        b && f && (f = !1);
        return f;
    }
    
    function fb() {
        var b = 'LOW';
        V && (b = 'HIGH');
        var f = m('#graphicsID')[0];
        f && (f.childNodes[0].data = 'GRAPHICS: ' + b);
    }
    
    function gb() {
        m('#copycheckimage').hide();
        m('#copyLink').show();
        m('#copyLinkBox').hide();
        m('#overlay2').fadeIn(200);
        m('#pfArrow').hide();
        m('#pfText').hide();
        setTimeout(function () {m('#copycheckimage').fadeIn(300);}, 200);
        setTimeout(function () {m('#overlay2').fadeOut(200);},
            1E3);
        wa = !1;
    }
    
    function zb() {p && p.disconnect();}
    
    function hb() {
        m('#overlay').hide();
        W = !1;
    }
    
    function Ab() {
        m('#overlay').fadeIn(500);
        Ha();
    }
    
    function ib() {
        W = !0;
        K || (x = null);
        setTimeout(Ab, 1E3);
    }
    
    function Ia() {
        try {return n.self !== n.top;}
        catch (b) {return !0;}
    }
    
    function Ja() {return !n.localStorage.tutorial || 3 > n.localStorage.tutorial;}
    
    function Ha() {
        0 == jb && cpmstarAPI({
            kind: 'createmodule',
            module: 'anchor79283',
            config: {
                kind: 'anchor',
                options: { dir: 1, width: '1050px' },
                request: { poolid: '79283', kind: 'banner' }
            }
        });
        if ('undefined' == typeof freestar &&
            !L) if (null != adsense && adsense) n.googletag && (n.googletag.cmd.push(function () {Ka && (Ka = !1, setTimeout(function () {Ka = !0;}, 12E4), n.googletag && n.googletag.pubads && n.googletag.pubads().refresh && n.googletag.pubads().refresh(n.ads));}), jb++); else {
            m('#mpu-top').show();
            var b = m('#ldr-top');
            b && b.show();
            refreshSlots();
        }
    }
    
    function kb(b, f, k, g, d, e) {
        for (var h = 6, a = -1; 2 > a; a += 2) {
            1 == a && (h = 6);
            for (var l = 0; l < h; l++) {
                b.save();
                b.translate(f, k);
                b.rotate((l / h * 2 * Math.PI - g) * a);
                var c = 20 * d;
                -1 == a ? b.translate((50 + c) * e, 0) : b.translate((57 +
                    1.4 * c) * e, 0);
                b.scale(.9 * e, .9 * e);
                q.frames['powerup_part' + (1 + l % 3)].draw(b);
                b.restore();
            }
        }
    }
    
    function xa(b, f) {
        for (var k = ''; ;) {
            var g = b.getUint16(f, !0);
            f += 2;
            if (0 == g) break;
            k += String.fromCharCode(g);
        }
        return { nick: k, offset: f };
    }
    
    function lb(b, f, k) {
        var g = z.getBounds();
        return b + k >= g[0].x && b - k <= g[1].x && f + k >= g[0].y && f - k <= g[1].y ? !0 : !1;
    }
    
    function da(b, f, k) {return b < f ? f : b > k ? k : b;}
    
    function ga(b, f, k, g) {
        b && (this._size = b);
        f && (this._color = f);
        this._stroke = !!k;
        g && (this._strokeColor = g);
    }
    
    function ka(b) {
        '' == b && (b = '<Unnamed>');
        return b;
    }
    
    function ea(b, f, k, g, d, e) {
        e /= 2;
        b.beginPath();
        b.moveTo(f, k + e);
        b.lineTo(f, k + d - e);
        b.quadraticCurveTo(f, k + d, f + e, k + d);
        b.lineTo(f + g - e, k + d);
        b.quadraticCurveTo(f + g, k + d, f + g, k + d - e);
        b.lineTo(f + g, k + e);
        b.quadraticCurveTo(f + g, k, f + g - e, k);
        b.lineTo(f + e, k);
        b.quadraticCurveTo(f, k, f, k + e);
        b.closePath();
        b.fill();
    }
    
    function Bb(b, f, k, g, d, e) {
        e /= 2;
        b.beginPath();
        b.moveTo(f, k + e);
        b.lineTo(f, k + d);
        b.lineTo(f + g, k + d);
        b.lineTo(f + g, k + e);
        b.quadraticCurveTo(f + g, k, f + g - e, k);
        b.lineTo(f + e, k);
        b.quadraticCurveTo(f, k, f, k + e);
        b.closePath();
        b.fill();
    }
    
    function mb(b, f, k) {
        var g = b * Math.cos(k) - f * Math.sin(k);
        b = f * Math.cos(k) + b * Math.sin(k);
        return { x: g, y: b };
    }
    
    var La = n.location.href.split('/'), ya = La[2], Cb = ya.split('.');
    lastPart = La[La.length - 1];
    var L = !1, Ma = Cb.length;
    2 < Ma && (L = !L);
    var Na = 'https:' == n.location.protocol, Db = n.location != n.parent.location ? s.referrer : s.location.href,
        Eb = 'brutal.io'.replace('.', '-') + '.';
    Db.includes(Eb + 'com') && (n.parent.location = n.location);
    var T, M, $ = 1E3 / 30 * 3, J, nb = 0, ob = 0, Q, aa, K = !1, R = !0, Oa = !1, D = 0, Pa = 0, C = 1600, E = 5E3,
        pa = 1, W = !0, Qa = 1, Ra = !1,
        pb = n.localStorage.muteVol, r = 1, Fb = 0, V = !0, Sa = !1, fa = 1.2, za = 1.2, Ta = !1, qb = 0, rb = !1,
        ha = !1, X = 1, Ua = !1, Gb = 0, Hb = 8, la = 0, Va = 0, Wa = 0, Xa, Ya, sb, tb, ub = 0, ba = 0, Za = !0,
        $a = !0, ab = !1, F, S, q, p, A = {}, x, N = 0, z, B, vb, H, Aa, qa = {}, wa = !1, U = 0, Ka = !0, ma = !1,
        jb = 0;
    (function () {
        var b = n.location.search;
        '?' == b.charAt(0) && (b = b.slice(1));
        for (var b = b.split('&'), f = 0; f < b.length; f++) {
            var k = b[f].split('=');
            qa[k[0]] = k[1];
        }
    })();
    'true' == n.localStorage.lq && (V = !1);
    var Ba = null, wb = function () {
        var b = '';
        Na && (b = 's');
        m.get('http' + b + '://ip2l.wings.io/cc', function (b) {
            Ba =
                b.substring(0, 2);
            n.localStorage.brutalCC = Ba;
            n.localStorage.brutalCCTime = +new Date;
        }, 'text');
    };
    void 0 == n.localStorage.brutalCCTime || void 0 != n.localStorage.brutalCC && 2 != n.localStorage.brutalCC.length ? wb() : 288E5 < +new Date - n.localStorage.brutalCCTime ? wb() : Ba = n.localStorage.brutalCC;
    var bb = function () {
        D = +new Date;
        var b = 0;
        0 < Pa && (b = D - Pa);
        Pa = D;
        F.update(b);
        F.draw(b);
        n.requestAnimationFrame && n.requestAnimationFrame(bb);
        Oa && (Oa = !1);
    }, Ib = function () {
        M = new Stats;
        M.setMode(1);
        var b = s.getElementById('canvas');
        M.domElement.style.position =
            'absolute';
        M.domElement.style.left = .25 * b.width + 'px';
        M.domElement.style.top = b.height - 18 - 30 + 'px';
        s.getElementById('fps').appendChild(M.domElement);
        T = new Stats;
        T.domElement.style.position = 'absolute';
        T.domElement.style.left = .25 * b.width - 100 + 'px';
        T.domElement.style.top = b.height - 18 - 30 + 'px';
        s.getElementById('fps').appendChild(T.domElement);
        setInterval(function () {T.update();}, 1E3 / 60);
    };
    s.body.onselectstart = function () {return !1;};
    n.clickPlay = function (b) {
        K ? hb() : (ha = !1, X = 1, n.localStorage.nick = b, Fb++, J.mouseMoved =
            !1, p.sendNick(b, Ra), Ra && (m('#continueTop').hide(), m('#continueBR').hide(), m('#continue').hide(), m('#nickInput').show(), m('#skinPanel').hide(), m('#howto').show(), m('#beta').show(), Ra = !1));
    };
    n.setContinue = function () {
        m('#topGui').show();
        m('#roomFailed').hide();
        m('#tips').show();
        Ia() || (parent.location.hash = '');
        p.getServerAndConnect();
    };
    n.toggleGraphics = function () {
        V = !V;
        F.resize();
        n.localStorage.lq = !V;
        fb();
    };
    n.copyRoomLink = function () {
        m('#copyLink').hide();
        m('#copyLinkBox').show();
        var b = m('#roomlinkInput')[0];
        b.value = 'http://brutal.io/#' + p.roomID;
        wa = !0;
        eb() && (m('#copyButton')[0].childNodes[0].data = 'Close', m('#safariTooltip').show());
        setTimeout(function () {
            b.setSelectionRange(0, b.value.length);
            b.select();
            b.focus();
        }, 100);
    };
    n.setCopy = function () {
        var b = m('#roomlinkInput')[0];
        b.value = 'http://brutal.io/#' + p.roomID;
        b.setSelectionRange(0, b.value.length);
        b.select();
        b.focus();
        if (eb()) m('#copyLinkBox').hide(), m('#copyLink').show(), wa = !1; else {
            try {s.execCommand('copy');}
            catch (f) {}
            gb();
        }
    };
    n.clickNoNames = function (b) {
        Sa = !Sa;
        b.checked = Sa;
    };
    void 0 == pb && (pb = 1);
    var xb = n.navigator.userAgent;
    -1 < xb.indexOf('MSIE ') || xb.indexOf('Trident/');
    'undefined' !== typeof n.orientation && (n.location.href = 'https://itunes.apple.com/us/app/wings.io/id1098205567?l=pt&ls=1&mt=8');
    var Ca;
    n.onblur = function () {
        L || (Ca = setTimeout(zb, 3E5));
        R = !1;
    };
    n.onfocus = function () {
        Ca && (clearTimeout(Ca), Ca = null);
        Oa = R = !0;
        for (var b in A) A[b].resume();
    };
    n.localStorage.nick && (m('#nick')[0].value = n.localStorage.nick);
    var na = 0, Da = 0;
    setInterval(function () {
        if (W) {
            var b = m('#tips')[0];
            na += .08;
            var f = (Math.sin(na) + 1) / 2;
            if (na > 1.5 * Math.PI) {
                Da++;
                3 < Da && (Da = 0);
                na -= 2 * Math.PI;
                var k;
                switch (Da) {
                    case 0:
                        k = 'GRAB ENERGY TO GROW YOUR FLAIL!';
                        break;
                    case 1:
                        k = 'CLICK TO THROW FLAIL!';
                        break;
                    case 2:
                        k = 'CLICK AND HOLD TO ATTRACT FLAIL AGAIN!';
                        break;
                    default:
                        k = 'DESTROY OTHER PLAYER\'S CAR WITH YOUR FLAIL!';
                }
                b.innerHTML = k;
            }
            b.style.opacity = Math.sqrt(f, 5);
        }
    }, 50);
    n.onbeforeunload = function () {if (K) return 'Are you sure you want to quit?';};
    s.oncontextmenu = function () {return !1;};
    Ha();
    ga.prototype = {
        _value: '',
        _color: '#000000',
        _stroke: !1,
        _strokeColor: '#000000',
        _strokeWidth: 3,
        _size: 16,
        _canvas: null,
        _ctx: null,
        _dirty: !1,
        _scale: 1,
        _font: 'px \'proxima-nova-1\',\'proxima-nova-2\', Arial Black',
        _usingRoundedFrame: !1,
        _hmargin: 0,
        _vmargin: -1,
        _margin: 6,
        _frameOpacity: .3,
        _shadowBlur: 0,
        _roundedFrameStyle: '#006666',
        _addTop: 0,
        _minWidth: 0,
        setAddTop: function (b) {b != this._addTop && (this._addTop = b, this._dirty = !0);},
        setMinWidth: function (b) {b != this._minWidth && (this._minWidth = b, this._dirty = !0);},
        setFont: function (b) {
            this._font != b && (this._font = b, this._dirty =
                !0);
        },
        setSize: function (b) {this._size != b && (this._size = b, this._dirty = !0);},
        setScale: function (b) {this._scale != b && (this._scale = b, this._dirty = !0);},
        setColor: function (b) {this._color != b && (this._color = b, this._dirty = !0);},
        setStroke: function (b) {this._stroke != b && (this._stroke = b, this._dirty = !0);},
        setShadowBlur: function (b) {this._shadowBlur != b && (this._shadowBlur = b, this._dirty = !0);},
        setStrokeWidth: function (b) {this._strokeWidth != b && (this._strokeWidth = b, this._dirty = !0);},
        setStrokeColor: function (b) {
            this._strokeColor != b &&
            (this._strokeColor = b, this._dirty = !0);
        },
        setValue: function (b) {b != this._value && (this._value = b, this._dirty = !0);},
        setHMargin: function (b) {b != this._hmargin && (this._hmargin = b, this._dirty = !0);},
        setVMargin: function (b) {b != this._vmargin && (this._vmargin = b, this._dirty = !0);},
        setMargin: function (b) {b != this._margin && (this._margin = b, this._dirty = !0);},
        setUsingRoundedFrame: function (b) {b != this._usingRoundedFrame && (this._usingRoundedFrame = b, this._dirty = !0);},
        setRoundedFrameOpacity: function (b) {
            b != this._frameOpacity && (this._frameOpacity =
                b, this._dirty = !0);
        },
        setRoundedFrameStyle: function (b) {b != this._roundedFrameStyle && (this._roundedFrameStyle = b, this._dirty = !0);},
        render: function () {
            null == this._canvas && (this._canvas = s.createElement('canvas'), this._ctx = this._canvas.getContext('2d'));
            if (this._dirty) {
                this._dirty = !1;
                var b = this._canvas, f = this._ctx, k = this._value, g = this._scale, d = this._size,
                    e = 'Bold ' + d + this._font;
                f.font = e;
                var h = f.measureText(k).width, a = 0;
                h < this._minWidth && (a = this._minWidth - h, h = this._minWidth);
                var d = d - .1 * d, l = this._margin;
                this._shadowBlur >
                l && (l = this._shadowBlur);
                b.width = (h + 2 + 2 * l) * g;
                b.height = (d + 2 * l + this._addTop) * g;
                f.font = e;
                f.textBaseline = 'middle';
                f.scale(g, g);
                f.globalAlpha = 1;
                this._usingRoundedFrame && (f.fillStyle = this._roundedFrameStyle, f.globalAlpha = this._frameOpacity, ea(f, 0, 0, b.width, b.height, 30), f.globalAlpha = 1);
                b = l + a / 2;
                d = l + this._addTop + d / 2;
                f.fillStyle = this._color;
                this._stroke && (f.lineJoin = 'round', f.lineWidth = this._strokeWidth, f.strokeStyle = this._strokeColor, f.strokeText(k, b, d));
                0 < this._shadowBlur && (f.shadowBlur = this._shadowBlur,
                    f.shadowColor = this._strokeColor);
                f.fillText(k, b, d);
            }
            return this._canvas;
        }
    };
    var Jb = function () {
            this.loaded = !1;
            this.onLoad = null;
            this.gameSheet;
            this.spriteSheetLoaded = !1;
            this.splashScreen;
            this.splashScreenLoaded = !1;
            this.frames = {};
            this.whiteCarGlow = this.gridMask = this.bgGridOn = this.bgGrid2 = this.bgGrid = null;
            this.loadSplashScreen = function () {
                this.splashScreen = new Image;
                this.splashScreen.src = 'images/splashscreen.jpg';
                this.splashScreen.onload = function () {
                    q.splashScreenLoaded = !0;
                    F.updateBackgroundImage();
                };
            };
            this.loadGameSpritesheet =
                function () {
                    this.gameSheet = new Image;
                    this.gameSheet.src = 'images/sheet.png';
                    this.gameSheet.onload = function () {
                        q.loadGameSpritesheetFrames();
                        q.spriteSheetLoaded = !0;
                        q.loadPatterns();
                        q.loadAnimations();
                        q.whiteCarGlow = q.frames.car_l3_min_glow.renderTintedFrame('#AAAAAA');
                        q.loaded = !0;
                        q.onLoad();
                    };
                };
            this.loadPatterns = function () {
                var b = q.frames.grid.renderToCanvas();
                q.bgGrid = F.context.createPattern(b, 'repeat');
                b = q.frames.core_charge.renderToCanvas();
                q.bgCoreCharge = F.context.createPattern(b, 'repeat');
                b = q.frames.core.renderToCanvas();
                q.bgCore = F.context.createPattern(b, 'repeat');
                b = q.frames.grid_red.renderToCanvas();
                q.bgGridRed = F.context.createPattern(b, 'repeat');
                b = q.frames.grid_green.renderToCanvas();
                q.bgGridGreen = F.context.createPattern(b, 'repeat');
            };
            this.loadGameSpritesheetFrames = function () {
                for (var b = gameSheetInfo.length, f = 0; f < b; f++) {
                    var k = gameSheetInfo[f], g = new Ea;
                    g.setFrameInfo(k, this.gameSheet);
                    this.frames[k[0]] = g;
                }
            };
            this.loadAnimations = function () {};
            this.load = function (b) {
                this.onLoad = b;
                this.loadGameSpritesheet();
                this.loadSplashScreen();
            };
            this.loadTintImage = function (b, f, k) {
                var g = s.createElement('canvas'), d = g.getContext('2d'), e = b.width, h = b.height;
                g.width = e;
                g.height = h;
                var a = s.createElement('canvas');
                a.width = e;
                a.height = h;
                e = a.getContext('2d');
                e.fillStyle = k;
                e.fillRect(0, 0, a.width, a.height);
                e.globalCompositeOperation = 'destination-atop';
                e.drawImage(b, 0, 0);
                d.globalAlpha = 1;
                d.drawImage(a, 0, 0);
                f(g);
            };
        }, Kb = function () {
            var b = this;
            this.angle = Math.PI;
            this.throttle = 0;
            this.rotationValue = .1;
            this.varAngle = 0;
            this.mouseMoved = !1;
            b.keydown = function (b) {
                67 ==
                b.keyCode && W && wa ? setTimeout(function () {gb();}, 10) : W || (32 == b.keyCode ? K && p.sendClick(!0) : 188 != b.keyCode && 49 != b.keyCode && (222 == b.keyCode ? Za = !Za : 51 != b.keyCode && 52 != b.keyCode && 53 != b.keyCode && 54 != b.keyCode && (55 == b.keyCode && L ? ab = !ab : 56 == b.keyCode ? drawBackground = !drawBackground : 57 == b.keyCode ? $a = !$a : 48 != b.keyCode && (75 == b.keyCode ? L && p.leave() : 27 == b.keyCode ? (m('#overlay').show(), Ha(), W = !0, K || (x = null)) : 70 == b.keyCode ? (s.fullscreenElement || s.mozFullScreenElement || s.webkitFullscreenElement || s.msFullscreenElement ?
                    s.exitFullscreen ? s.exitFullscreen() : s.msExitFullscreen ? s.msExitFullscreen() : s.mozCancelFullScreen ? s.mozCancelFullScreen() : s.webkitExitFullscreen && s.webkitExitFullscreen() : s.documentElement.requestFullscreen ? s.documentElement.requestFullscreen() : s.documentElement.msRequestFullscreen ? s.documentElement.msRequestFullscreen() : s.documentElement.mozRequestFullScreen ? s.documentElement.mozRequestFullScreen() : s.documentElement.webkitRequestFullscreen && s.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
                    B.clearTip()) : 79 != b.keyCode && 90 == b.keyCode && K && L && (Ta = !Ta)))));
            };
            b.keyup = function (b) {W || 32 != b.keyCode || (K ? p.sendClick(!1) : 1 == pa ? (pa = 0, F.followTopPlayer()) : (pa = 1, x = null));};
            b.mousedown = function (b) {W || K && 0 == b.button && p.sendClick(!0);};
            b.mouseup = function (b) {W || K && 0 == b.button && p.sendClick(!1);};
            b.mousemove = function (f) {W || (b.mouseMoved = !0, nb = f.clientX, ob = f.clientY);};
            this.addListeners = function () {
                s.addEventListener('mousedown', b.mousedown, !1);
                s.addEventListener('mousemove', b.mousemove, !1);
                s.addEventListener('mouseup',
                    b.mouseup, !1);
                s.addEventListener('keydown', b.keydown, !1);
                s.addEventListener('keyup', b.keyup, !1);
            };
        }, Lb = function () {
            var b = [];
            this.draw = function (f) {
                for (var k = [], g = b.length, d = 0; d < g; d++) {
                    var e = b[d];
                    e.a -= .1;
                    0 < e.a ? (f.save(), f.beginPath(), f.fillStyle = e.style, f.globalAlpha = e.a, f.arc(e.x, e.y, 50 * Math.sqrt(1 - e.a), 0, 2 * Math.PI), f.closePath(), f.fill(), f.restore()) : k.push(e);
                }
                for (f = 0; f < k.length; f++) g = b.indexOf(k[f]), b.splice(g, 1);
                k.length = 0;
            };
            this.addExplosion = function (f, k, g) {
                var d = {};
                d.x = f;
                d.y = k;
                d.a = 1;
                d.style = g;
                b.push(d);
            };
        },
        Mb = function () {
            var b, f, k, g = 0, d = !0, e, h, a, l, c, w, v, G, I, y = !1, u, t, m, n, p, O, P, ja, ra = 0, sa = !0,
                Y = 300, oa = !1, Fa = null, z = null, ta = 0, Ga = 0, A = 0, B = !1, C = null, F = -1, D = .02, L,
                J = D, E = 0, H = null, M = 0, U = '', T, R = !1, ca = null, V = 0, S = .02, X = S, Z = 0, ia = null,
                da = '', $, fa = 0, ba = 0;
            this.draw = function (u) {
                if (0 < g && !ha) {
                    var I = 0, n = +new Date - g;
                    4E3 > n ? I = 3E3 > n ? 1 : 1 - (n - 3E3) / 1E3 : g = 0;
                    n = !1;
                    if (!e) {
                        var q = 30;
                        k ? (h = new ga(50 * r, '#00FFFF', !1, '#00AAAA'), h.setValue(k), h.setUsingRoundedFrame(!0), n = !0, h.setAddTop(35), h.setShadowBlur(4)) : (h = null, q = 35);
                        e = new ga(q * r, '#00FFFF',
                            !1, '#00AAAA');
                        e.setValue(f);
                        e.setUsingRoundedFrame(!n);
                        e.setShadowBlur(3);
                        k || e.setAddTop(-2);
                    }
                    q = .21 * canvas.height;
                    d || (q = .55 * canvas.height, e.setColor('#f90600'), e.setStrokeColor('#f90600'), e.setRoundedFrameStyle('#f90600'), h && (h.setColor('#f90600'), h.setStrokeColor('#f90600'), h.setRoundedFrameStyle('#FF9999'), h.setRoundedFrameOpacity(.1)));
                    var p = e.render();
                    n && h.setMinWidth(p.width);
                    var m;
                    k && (m = h.render());
                    u.globalAlpha = I;
                    m && u.drawImage(m, .5 * canvas.width - m.width / 2, q - 5);
                    u.drawImage(p, .5 * canvas.width -
                        p.width / 2, q);
                    u.globalAlpha = 1;
                }
                y && (t = s.createElement('canvas'), I = t.getContext('2d'), this.renderLeaderboard(I, t), y = !1);
                t && !ha && K && this.drawLeaderboard(u);
                J += (D - J) / 10;
                .03 > J && !B && 0 < E ? (E -= .05, 0 > E && (E = 0, H = null)) : B && (E += .05, .8 < E && (E = .8));
                0 < E && !ha && this.drawCapacity(u);
                X += (S - X) / 10;
                !R && 0 < Z ? (Z -= .05, 0 > Z && (Z = 0, ia = null)) : R && (Z += .05, .8 < Z && (Z = .8));
                0 < Z && !ha && this.drawPowerup(u);
                O && !ha && (0 < ra && sa || !sa || 0 < Y) && (null == ja && (I = parseInt(20 * r) + 1, P = new ga(I, Fa, !1, Fa), P.setValue(O), P.setUsingRoundedFrame(!0), P.setRoundedFrameStyle(z),
                    P.setShadowBlur(7), ja = P.render()), u.drawImage(ja, Q / 2 - ja.width / 2, 1.1 * ja.height * (oa ? 1 - Y / 300 : Y / 300) - ja.height));
                b != r && (c = null, b = r);
                a && !W && (q = .3 * canvas.height, I = l / 1E3 * 10, 1 < I && (I = 1), c || (c = new ga(25 * r, '#FF0000', !1, '#FF0000'), c.setValue(a), c.setHMargin(10), c.setVMargin(10), c.setUsingRoundedFrame(!1), c.setShadowBlur(6), w = c.render(), v = new ga(15 * r, '#FF0000', !1, '#FF0000'), v.setValue(warningSecondMessage), v.setHMargin(10), v.setVMargin(10), v.setUsingRoundedFrame(!1), v.setShadowBlur(6), G = v.render()), u.save(), u.translate(.5 *
                    canvas.width - w.width / 2, q), m = .2 * r, n = Math.sin(l / 100) * m, u.globalAlpha = I - m + n, u.drawImage(w, 0, 0), u.drawImage(G, w.width / 2 - G.width / 2, .8 * w.height), u.restore());
            };
            this.update = function (a) {
                l += a;
                0 < Y ? (Y -= a, 0 >= Y && !oa && (O = null)) : Y = 0;
                sa && (ra -= a);
                sa && 0 >= Y && oa && 0 >= ra && (oa = !1, Y = 300);
                ta -= a;
                0 > ta && (ta += 1E3);
                0 < Ga && (Ga -= a);
                0 < A && (A -= a);
            };
            this.renderLeaderboard = function (a, c) {
                function b(c) {
                    p += h + e;
                    c = a.measureText(ka(c)).width;
                    k < c && (k = c);
                }
                
                m = 230;
                p = 0;
                var l = 5 * r, e = 10 * r, d = 23 * r, h = 18 * r, O, w = 0 * r, f = 5 * r;
                p += l + d + l + 12;
                O = 6 + l + d + l;
                for (var g = u.length,
                         k = 0, y = !1, P = 0; P < g; P++) {
                    var v = u[P];
                    v && (N != v.id || y || (y = !0), b(v.nick.substring(0, 16)));
                }
                !y && x && b(x.nick);
                k > w && (m += k - w);
                n = m * r;
                c.width = n;
                c.height = p;
                a.fillStyle = 'rgba(0,255,255,0.1)';
                ea(a, 6, 6, n - 12, p - 12, 15 * r);
                a.shadowColor = 'rgba(0,100,100,1.0)';
                a.shadowBlur = 6;
                a.fillStyle = 'rgba(0,100,100,1.0)';
                Bb(a, 6, 6, n - 12, 32 * r, 15 * r);
                a.font = d + 'px \'proxima-nova-1\',\'proxima-nova-2\', Arial Black';
                a.textBaseline = 'middle';
                w = a.measureText('LEADERBOARD').width;
                a.fillStyle = 'rgba(0,255,255,0.7)';
                a.shadowColor = 'rgba(0,255,255,0.7)';
                a.shadowBlur = 2;
                a.fillText('LEADERBOARD', n / 2 - w / 2, l + 6 + d / 2);
                d = h + 'px \'proxima-nova-1\',\'proxima-nova-2\', Arial Black';
                a.font = d;
                O += f;
                for (P = 0; P < g; P++) if (v = u[P]) {
                    var f = 0 == P && 0 < la, G, t = P + 1 + '. ';
                    f && (G = a.measureText(t).width, t += '    ');
                    var t = t + ka(v.nick), I = 0;
                    a.fillStyle = N == v.id ? 'rgba(0,255,255,1.0)' : 'rgba(0,255,255,0.4)';
                    a.font = d;
                    w = a.measureText(t).width;
                    a.fillText(t, 6 + l, O + I + h / 2);
                    w = a.measureText(v.score).width;
                    a.fillText(v.score, n - l - w - 6, O + I + h / 2);
                    f && (a.save(), a.translate(6 + l + G + 10, O + I + h / 2 - 1), a.scale(.8, .8), q.frames.crown.draw(a),
                        a.restore());
                    O += h + e;
                }
                !y && x && (a.fillStyle = 'rgba(0,255,255,1.0)', t = fa + '. ' + ka(x.nick), w = a.measureText(t).width, a.fillText(t, 6 + l, O + I + h / 2), w = a.measureText(ba).width, a.fillText(ba, n - l - w - 6, O + I + h / 2));
            };
            this.drawLeaderboard = function (a) {a.drawImage(t, Q - n - 5, 5);};
            this.preRenderPowerupBar = function (a, c) {
                ca = s.createElement('canvas');
                var b = ca.getContext('2d'), l = .18 * Q;
                ca.width = l + 20;
                ca.height = 40;
                b.fillStyle = c;
                b.shadowColor = c;
                b.shadowBlur = 15;
                ea(b, 10, 10, l, 20, 20);
                b.shadowBlur = 0;
                b.fillStyle = a;
                ea(b, 12.5, 12.5, l - 5, 15, 20);
            };
            this.drawPowerup = function (a) {
                a.globalAlpha = Z;
                var c = 'hsl(' + V + ', 100%, 55%)', b = 'hsl(' + V + ', 100%, 20%)';
                null == ca && this.preRenderPowerupBar(b, c);
                var l = .5 * Q - ca.width / 2, e = .1 * aa - ca.height / 2;
                'RED FLAIL' != da && (ia = null);
                da = 'RED FLAIL';
                ia || (ia = new ga(17 * r, c, !1, b), ia.setValue('RED FLAIL'), ia.setStrokeWidth(5), ia.setUsingRoundedFrame(!1), $ = ia.render());
                a.globalAlpha = Z;
                a.drawImage($, l + ca.width / 2 - $.width / 2, e - 17 - 3);
                a.drawImage(ca, l, e);
                a.fillStyle = c;
                ea(a, l + 1.5 + 10, e + 1.5 + 10, .18 * Q * X - 3, 17, 6);
                a.globalAlpha = 1;
            };
            this.preRenderCapacityBar =
                function (a, c) {
                    C = s.createElement('canvas');
                    var b = C.getContext('2d'), l = .18 * Q;
                    C.width = l + 20;
                    C.height = 35;
                    b.fillStyle = c;
                    b.shadowColor = c;
                    b.shadowBlur = 10;
                    ea(b, 10, 10, l, 15, 10);
                    b.shadowBlur = 0;
                    b.fillStyle = a;
                    ea(b, 12.5, 12.5, l - 5, 10, 10);
                };
            this.drawCapacity = function (a) {
                a.globalAlpha = E;
                var c = 'hsl(' + F + ', 100%, 70%)', b = 'hsl(' + F + ', 100%, 10%)';
                null == C && this.preRenderCapacityBar(b, c);
                var l = .5 * Q - C.width / 2, e = .9 * aa - C.height / 2, h = 15, d = 'CAPACITY';
                1 == D ? (h = 20, d = 'FULL CAPACITY', M += .1) : x && x.charging && (d = 'CHARGING');
                if (1 > L && 1 == D ||
                    1 == L && 1 > D) H = null, M = 0;
                J > D && (x && x.attached && (d = 'TRANSFERRING...'), h = 16, H = null, M = 0);
                d != U && (H = null);
                U = d;
                L = D;
                H || (H = new ga(h * r, c, !1, b), H.setValue(d), H.setStrokeWidth(5), H.setUsingRoundedFrame(!1), T = H.render());
                a.globalAlpha = (Math.cos(M) + 1) / 2;
                a.drawImage(T, l + C.width / 2 - T.width / 2, e - h - 3);
                a.globalAlpha = 1;
                a.drawImage(C, l, e);
                a.fillStyle = c;
                ea(a, l + 1.5 + 10, e + 1.5 + 10, .18 * Q * J - 3, 12, 6);
                a.globalAlpha = 1;
            };
            this.addMessage = function (a, c, b) {
                f = a;
                e = null;
                k = b;
                g = +new Date;
                d = c;
            };
            this.showTargetLockedMessage = function () {I || (I = '[ LOCKED ]');};
            this.clearTargetLockedMessage = function () {I = null;};
            this.showWarningMessage = function (c, b) {
                a = c;
                warningSecondMessage = b;
                l = 0;
            };
            this.clearWarningMessage = function () {c = a = null;};
            this.setLastWinner = function (a, c) {
                ka(a);
                c && (Ga = 6E3);
            };
            this.refreshLeaderboard = function (a) {
                u = a;
                y = !0;
            };
            this.showPowerupBar = function (a) {
                V = 0;
                ca = null;
                S = X = a / 255;
            };
            this.setPowerupProgress = function (a) {
                0 < a && (R = !0);
                S = a / 255;
                .02 > S && (S = .02);
            };
            this.hidePowerupBar = function () {R = !1;};
            this.showCapacity = function (a) {
                a = 180;
                -1 != a && (C = null);
                F = a;
            };
            this.setCapacity =
                function (a) {
                    0 < a && (B = !0);
                    D = a / 255;
                    .02 > D && (D = .02);
                };
            this.hideCapacity = function () {
                B = !1;
                D = .02;
            };
            this.showTip = function (a, c, b, l) {
                O && this.clearTip();
                O = a;
                ra = c;
                sa = 0 < c;
                ja = null;
                Y = 300;
                oa = !0;
                b ? (Fa = b, z = l) : (Fa = '#00FFFF', z = '#006666');
            };
            this.clearTip = function () {
                oa = !1;
                Y = 300;
            };
            this.updateRank = function (a, c) {
                fa = a;
                ba = c;
            };
        }, Nb = function () {
            function b(a, c, b, l, e, d, h, w) {
                var u = Math.PI / 2 * 3, g = a, k = c, y = Math.PI / b;
                d.strokeStyle = h;
                d.fillStyle = w;
                f.redFlailDeployed && (d.fillStyle = q.bgGridRed);
                d.beginPath();
                d.moveTo(a, c - l);
                for (i = 0; i < b; i++) g = a +
                    Math.cos(u) * l, k = c + Math.sin(u) * l, d.lineTo(g, k), u += y, g = a + Math.cos(u) * e, k = c + Math.sin(u) * e, d.lineTo(g, k), u += y;
                d.lineTo(a, c - l);
                d.closePath();
                d.lineWidth = f.redFlailDeployed ? 6 : 2;
                f.redFlailDeployed && d.scale(.7, .7);
                d.fill();
                d.stroke();
                0 < f.flashFlailValue && (d.fillStyle = '#FFFFFF', d.strokeStyle = '#FFFFFF', d.globalAlpha = f.flashFlailValue / 200, d.fill(), d.stroke());
            }
            
            var f = this;
            this.killReason = 0;
            this.id = -1;
            this.dstAngle = this.origAngle = this.angle = this.energy = this.transferEnergy = this.dstY = this.dstX = this.origY = this.origX =
                this.prevY = this.prevX = this.y = this.x = 0;
            this.chainSegments = [];
            this.hue = this.flailDstRadius = this.flailRadius = this.flailDstAngle = this.flailOrigAngle = this.flailAngle = this.flailDstY = this.flailDstX = this.flailOrigY = this.flailOrigX = this.flailPrevY = this.flailPrevX = this.flailY = this.flailX = 0;
            this.attached = !0;
            this.charging = this.inside = this.still = this.decay = this.shock = this.invulnerable = this.attracting = !1;
            this.flashFlailValue = 0;
            this.nick = '';
            this.lastUpdateTime;
            this.highlightSin = this.highlightTime = 0;
            var k = !0, g, d,
                e, h, a, l, c, w, v, G, I;
            this.beingDeleted = !1;
            this.shipScale = 1;
            this.killedByID = 0;
            var y = 1, u = 1, t = 0, n = !1, m = 0, p = this.locatorValue = 0;
            this.dangerLowFreq = this.redFlailDeployed = this.redFlail = !1;
            this.holoIn = this.holoAngle = this.lowFreqFrame = 0;
            this.update = function (a) {
                if (this.beingDeleted) 3 != this.killReason && (this.flailX += .4 * (this.flailDstX - this.flailOrigX) / 3, this.flailY += .4 * (this.flailDstY - this.flailOrigY) / 3); else {
                    var c = da((D - this.lastUpdateTime) / $, 0, 1);
                    this.prevX = this.x;
                    this.prevY = this.y;
                    var b = c * (this.dstX - this.origX) +
                        this.origX, l = c * (this.dstY - this.origY) + this.origY;
                    this.x = b;
                    this.y = l;
                    this.angle = c * (this.dstAngle - this.origAngle) + this.origAngle;
                    this.flailRadius += (this.flailDstRadius - this.flailRadius) / 20;
                    for (var e = this.chainSegments.length, d = 0; d < e; d++) {
                        var h = this.chainSegments[d];
                        h.prevX = h.x;
                        h.prevY = h.y;
                        b = c * (h.dstX - h.origX) + h.origX;
                        l = c * (h.dstY - h.origY) + h.origY;
                        h.x = b;
                        h.y = l;
                    }
                    this.flailPrevX = this.flailX;
                    this.flailPrevY = this.flailY;
                    b = c * (this.flailDstX - this.flailOrigX) + this.flailOrigX;
                    l = c * (this.flailDstY - this.flailOrigY) +
                        this.flailOrigY;
                    this.flailX = b;
                    this.flailY = l;
                    this.flailAngle = c * (this.flailDstAngle - this.flailOrigAngle) + this.flailOrigAngle;
                }
                this.highlightSin += .1 + this.transferEnergy / 255 * .5;
                this.highlightTime -= a;
                0 > this.highlightTime && (this.highlightTime = 0);
                this.beingDeleted && (this.shipScale -= .1, 0 > this.shipScale && (this.id == N && (N = 0, x = null, B.hideCapacity(), B.hidePowerupBar(), B.clearWarningMessage()), delete A[this.id]));
                this.invulnerable ? (t -= a, 0 >= t && (t = 250, y = (n = !n) ? 1 : .4)) : (u = this.redFlailDeployed ? this.dangerLowFreq ? .6 :
                    1 : 1, y = 1);
                this.shock && (this.id != N || this.redFlailDeployed || z.shake(), this.shock = !1, m = 200);
                0 < m && (m -= a);
                0 < this.locatorValue && (this.locatorValue -= a);
                p += .2;
                p > 2 * Math.PI && (p = 0);
                Ja() && 4 == F.getTutorialState() && (c = this.flailX - this.x, b = this.flailY - this.y, 350 < Math.sqrt(c * c + b * b) && F.setTutorialState(5));
                this.redFlailDeployed && (this.lowFreqFrame++, 2 < this.lowFreqFrame && (this.dangerLowFreq = !this.dangerLowFreq, this.lowFreqFrame = 0));
                this.redFlail && !this.redFlailDeployed ? (this.holoIn += (1 - this.holoIn) / 8, .99 < this.holoIn &&
                (this.holoIn = 1)) : (this.holoIn -= a / 1E3 * 2, 0 > this.holoIn && (this.holoIn = 0));
                0 < this.flashFlailValue && (this.flashFlailValue -= a, 0 >= this.flashFlailValue && (this.flashFlailValue = 0));
            };
            this.drawCar = function (b, e) {
                0 == e ? (q.frames.car_l1_min.draw(b), w.draw(b), v.draw(b)) : (a.draw(b), l.draw(b), c.draw(b));
                this.beingDeleted && (b.scale(1.4, 1.4), q.frames.car_shock.draw(b));
                0 < m && (b.scale(1.8, 1.8), q.frames.car_shock.draw(b), q.whiteCarGlow.draw(b));
            };
            this.drawAfter = function (a) {
                var c = d, l = e, w = h;
                0 < m && (w = l = c = 'hsl(0, 0%, 100%)');
                a.save();
                a.translate(this.x, this.y);
                a.rotate(-this.angle);
                a.globalAlpha = this.shipScale * y;
                if (this.attached) this.drawCar(a, 0); else {
                    this.drawCar(a, 1);
                    var f = this.transferEnergy / 255, g = this.highlightTime / 250;
                    f < g && (f = g);
                    1 < f && (f = 1);
                    g = (Math.sin(this.highlightSin) + 1) / 2;
                    a.globalAlpha = f * g * this.shipScale * y;
                    255 == this.transferEnergy && G.draw(a);
                    this.drawCar(a, 0);
                    a.globalAlpha = 1 * this.shipScale * y;
                }
                a.restore();
                0 < this.holoIn && (this.holoAngle += .01, a.globalAlpha = .3, kb(a, this.x, this.y, this.holoAngle, 0, 1 * this.holoIn), a.globalAlpha =
                    1);
                a.save();
                a.globalAlpha = this.shipScale * y;
                var v = this.chainSegments.length;
                a.beginPath();
                f = this.x + 20 * Math.sin(this.angle);
                g = this.y + 20 * Math.cos(this.angle);
                a.moveTo(f, g);
                for (var t, n, q, r = 0; r < v; r++) t = this.chainSegments[r], n = t.x, q = t.y, r + 1 < v && (n = this.chainSegments[r + 1].x, q = this.chainSegments[r + 1].y), r % 2 && a.bezierCurveTo(f, g, t.x, t.y, n, q), f = t.x, g = t.y;
                !this.attached || this.beingDeleted || this.redFlail || a.lineTo(this.flailX, this.flailY);
                a.lineWidth = 2;
                a.strokeStyle = this.attached ? w : c;
                this.redFlail && (a.strokeStyle =
                    '#FF0000');
                a.stroke();
                a.restore();
                this.redFlailDeployed && (q = f - this.flailX, v = g - this.flailY, n = Math.sqrt(q * q + v * v), q = q / n * 5, v = v / n * 5, a.beginPath(), a.fillStyle = '#FF0000', a.arc(f - q, g - v, 4, 0, 2 * Math.PI), a.fill());
                !this.attached && this.attracting && (k = !k, a.save(), a.beginPath(), a.fillStyle = w, a.strokeStyle = w, this.redFlail && (a.fillStyle = '#FF0000', a.strokeStyle = '#FF0000'), f = .5, k && (f = 1), a.arc(t.x, t.y, 10 * f, 0, 2 * Math.PI), a.closePath(), a.fill(), k && (a.globalAlpha = .5 * this.shipScale * y, a.lineWidth = 3, a.beginPath(), a.arc(t.x,
                    t.y, 15, 0, 2 * Math.PI), a.closePath(), a.stroke(), a.globalAlpha = .5 * this.shipScale * y, a.lineWidth = 2, a.beginPath(), a.arc(t.x, t.y, 20, 0, 2 * Math.PI), a.closePath(), a.stroke()), a.restore());
                t = this.flailRadius;
                var s;
                if (this.decay || this.still) s = Math.sin(p), s = .7 < s ? s - .7 : 0, t *= 1 - .1 * s;
                a.save();
                a.globalAlpha = this.shipScale * y;
                a.translate(this.flailX, this.flailY);
                a.rotate(this.flailAngle);
                f = (t / 215 * 8 + 2) * this.shipScale;
                V && (a.scale(f, f), g = .2, this.redFlailDeployed && (g = .3), a.globalAlpha = g * this.shipScale * y, I.draw(a), a.globalAlpha =
                    1 * this.shipScale * y * u, a.scale(1 / f, 1 / f));
                f = 10 + (this.flailRadius - 15) / 135 * 25;
                g = f / 4;
                30 < g && (g = 30);
                v = 0;
                0 < m && (v = m / 200 * 20);
                b(0, 0, f, t * this.shipScale + v, (t - 4 - g) * this.shipScale, a, l, w);
                if (this.decay || this.still) a.globalAlpha = 1 / .3 * s * .5, b(0, 0, f, t * this.shipScale + v, (t - 4 - g) * this.shipScale, a, l, '#FF0000');
                a.restore();
                this.redFlailDeployed || (a.save(), a.globalAlpha = this.shipScale * y, a.beginPath(), f = t - 6 - g, 0 > f && (f = .1), a.arc(this.flailX, this.flailY, f * this.shipScale, 0, 2 * Math.PI, !1), a.fillStyle = c, a.fill(), a.restore());
                this.attached ||
                N != this.id || (c = this.locatorValue / 1E3, 0 > c && (c = 0), l = t + 30 + 40 * c, a.beginPath(), a.globalAlpha = .2 * (1 - c), a.lineWidth = 4, a.strokeStyle = '#FFFFFF', a.moveTo(this.flailX - l, this.flailY + l), a.lineTo(this.flailX + l, this.flailY + l), a.lineTo(this.flailX + l, this.flailY - l), a.lineTo(this.flailX - l, this.flailY - l), a.closePath(), a.lineCap = 'round', c = 2 * l, a.setLineDash([.15 * c, .7 * c, .3 * c, .7 * c, .3 * c, .7 * c, .3 * c, .7 * c, .3 * c]), a.stroke(), a.globalAlpha = 1, a.lineCap = 'butt', a.lineWidth = 1, a.setLineDash([]));
            };
            this.draw = function (a) {};
            this.drawFlailIcon =
                function (a) {
                    a.save();
                    if (this.decay) {
                        var c = 1 + .1 * Math.sin(p);
                        a.scale(c, c);
                    }
                    c = 0;
                    0 < m ? (c = m / 200 * 5, b(0, 0, 10, 10, 13 + c, a, '#FFFFFF', '#FFFFFF')) : (b(0, 0, 10, 10, 13, a, e, h), a.beginPath(), a.fillStyle = d, a.arc(0, 0, 9, 0, 2 * Math.PI), a.closePath(), a.fill());
                    a.restore();
                };
            this.drawInput = function (a) {
                a.lineWidth = 1;
                a.beginPath();
                a.strokeStyle = 'rgba(255,255,255,0.2)';
                a.arc(this.x, this.y, 75 / fa, 0, 2 * Math.PI);
                a.closePath();
                a.stroke();
                var c = -J.angle + Math.PI, b = !J.hover;
                .01 >= b && (b = .3);
                a.save();
                a.translate(this.x, this.y);
                a.rotate(c);
                a.translate(0,
                    -28 - 10 * b);
                c = .9;
                this.attached && (c = 1.1);
                1 == J.throttle && (c += .2);
                a.fillStyle = 'rgba(255,255,255,0.2)';
                a.beginPath();
                a.moveTo(-8 * b * c, 0);
                a.lineTo(8 * b * c, 0);
                a.lineTo(0, -20 * b * c);
                a.fill();
                a.restore();
            };
            this.drawInfo = function (a) {
                a.save();
                a.translate(this.x, this.y);
                this.id == la && (a.translate(0, -60), q.frames.crown.draw(a), a.translate(0, 60));
                a.fillStyle = 'rgba(255,255,255,1)';
                a.globalAlpha = .85;
                a.fillStyle = 'rgba(0,255,255,0.5)';
                a.font = 'Bold 15px \'proxima-nova-1\',\'proxima-nova-2\', arial, sans-serif';
                a.textBaseline = 'hanging';
                var c = a.measureText(f.nick).width;
                a.fillText(f.nick, -c / 2, 38);
                a.restore();
            };
            this.GetRedGlowInfo = function () {
                var a = {};
                a.x = this.flailX;
                a.y = this.flailY;
                a.scale = this.flailRadius / 215 * 8 + 2;
                return a;
            };
            this.updateChainFlail = function (a, c, b) {
                var l;
                l = a.getUint8(c);
                c += 1;
                for (var e = 0; e < l; e++) {
                    b && this.chainSegments.push({ x: 0, y: 0, prevX: 0, prevY: 0, dstX: 0, dstY: 0, origX: 0, origY: 0 });
                    var d = a.getFloat32(c, !0);
                    c += 4;
                    var h = -a.getFloat32(c, !0);
                    c += 4;
                    var f = this.chainSegments[e];
                    f.origX = f.x;
                    f.origY = f.y;
                    f.dstX = 10 * d;
                    f.dstY = 10 * h;
                    b && (f.origX =
                        f.dstX, f.origY = f.dstY, f.x = f.dstX, f.y = f.dstY);
                }
                return c;
            };
            this.updateNetworkFlail = function (a, c, b, l) {
                var e, d, h, f;
                e = a.getFloat32(c, !0);
                c += 4;
                d = -a.getFloat32(c, !0);
                c += 4;
                h = -a.getFloat32(c, !0);
                c += 4;
                var w = this.id == N;
                f = a.getUint32(c, !0);
                c += 4;
                this.energy = f;
                var g = f / 5E3;
                1 < g && (g = 1);
                g = 1 / (1.7 + .3 * Math.pow(g, 1 / 3));
                f = 4 * Math.pow(f / 100, g) - 3;
                var u;
                179 == l ? (u = a.getUint8(c, !0), c += 1) : (u = a.getUint16(c, !0), c += 2);
                g = this.attached;
                this.attached = u & 1;
                N == this.id && (g && !this.attached ? (this.locatorValue = 1E3, B.showCapacity(this.hue), F.setTutorialState(3)) :
                    !g && this.attached && (B.hideCapacity(), g = F.getTutorialState(), 4 == g ? F.setTutorialState(1) : 6 == g && F.setTutorialState(7)));
                this.attracting = u & 2;
                this.invulnerable = u & 4;
                this.shock = u & 8;
                g = this.decay;
                this.decay = u & 16;
                var k = this.still;
                this.still = u & 32;
                this.inside = u & 64;
                this.charging = u & 128;
                179 != l && (l = this.redFlail, this.redFlail = u & 256, !l && this.redFlail ? this.preRenderRedCar() : l && !this.redFlail && this.preRender(this.hue), l = this.redFlailDeployed, this.redFlailDeployed = u & 512, u = 0, this.redFlailDeployed && (u = a.getUint8(c, !0),
                    c++), !l && this.redFlailDeployed ? (this.flashFlailValue = 200, this.preRender(0), w && B.showPowerupBar(u)) : l && !this.redFlailDeployed && (this.flashFlailValue = 200, w && B.hidePowerupBar()), this.redFlailDeployed && w && B.setPowerupProgress(u));
                a = !g && this.decay;
                l = !k && this.still;
                if (w) {
                    if (a || l) a ? B.showWarningMessage('LOSING ENERGY!', 'GET CLOSER TO BALL') : B.showWarningMessage('LOSING ENERGY!', 'MOVE!');
                    (g && !this.decay || k && !this.still) && B.clearWarningMessage();
                }
                if (a || l) p = 0;
                this.flailOrigX = this.flailX;
                this.flailOrigY = this.flailY;
                this.flailOrigAngle = this.flailAngle;
                this.flailDstX = 10 * e;
                this.flailDstY = 10 * d;
                this.flailDstAngle = h;
                this.flailDstRadius = 10 * f;
                if (x == this || ba == this.id) e = 1.2, e = (f - 1.5) / 20, 1 < e && (e = 1), e = 1 - .3 * e, this.inside && (e = .8), .8 > e && (e = .8), za = e;
                b && (this.flailOrigX = this.flailDstX, this.flailOrigY = this.flailDstY, this.flailX = this.flailDstX, this.flailY = this.flailDstY, this.flailOrigAngle = this.flailDstAngle, this.flailRadius = this.flailDstRadius);
                return c;
            };
            this.updateNetwork = function (a, c, b, l) {
                var e, d, h;
                e = a.getUint8(c, !0);
                c += 1;
                e > this.transferEnergy && (this.highlightTime = 250);
                e != this.transferEnergy && this.id == N && B.setCapacity(e);
                this.transferEnergy = e;
                e = a.getFloat32(c, !0);
                c += 4;
                d = -a.getFloat32(c, !0);
                c += 4;
                h = a.getFloat32(c, !0);
                this.origX = this.x;
                this.origY = this.y;
                this.origAngle = this.angle;
                this.dstX = 10 * e;
                this.dstY = 10 * d;
                this.dstAngle = h;
                c = this.updateChainFlail(a, c + 4, b, l);
                c = this.updateNetworkFlail(a, c, b, l);
                b && (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, this.origAngle = this.dstAngle, this.hue = a.getUint16(c,
                    !0), c += 2, this.preRender(this.hue), this.redFlail && !this.redFlailDeployed ? this.preRenderRedCar() : this.redFlail && this.redFlailDeployed && this.preRender(0));
                this.lastUpdateTime = D;
                return c;
            };
            this.deleteNetwork = function (a, c) {
                this.id == N && (ba = this.killedByID, cameraSmooth = 30);
                R && 0 != this.killReason ? (this.beingDeleted = !0, this.id == N && (3 == this.killReason ? (B.addMessage('ELECTROCUTED'), z.shake(), this.shock = !0) : 2 == this.killReason ? (B.addMessage('DELETED BY SENTINEL'), z.shake()) : 5 == this.killReason && (z.shake(), ha = !0))) :
                    (this.id == N && (N = 0, x = null, B.hideCapacity(), B.hidePowerupBar(), B.clearWarningMessage()), delete A[this.id]);
                return c;
            };
            this.preRender = function (b) {
                g = 'hsl(' + b + ', 100%, 20%)';
                d = 'hsl(' + b + ', 100%, 30%)';
                e = 'hsl(' + b + ', 100%, 40%)';
                h = 'hsl(' + b + ', 100%, 50%)';
                chainGlow = 'hsl(' + b + ', 100%, 70%)';
                b = 'hsl(' + b + ', 100%, 40%)';
                a = q.frames.car_l1_min.renderTintedFrame('#AAAAAA');
                l = q.frames.car_l2_min.renderTintedFrame(g);
                c = q.frames.car_l3_min.renderTintedFrame(d);
                w = q.frames.car_l2_min.renderTintedFrame(e);
                v = q.frames.car_l3_min_glow.renderTintedFrame(h);
                G = q.frames.grid_mask_hard.renderTintedFrame(b);
                I = q.frames.grid_mask_hard.renderTintedFrame(b);
            };
            this.preRenderRedCar = function () {
                a = q.frames.car_l1_min.renderTintedFrame('#AAAAAA');
                l = q.frames.car_l2_min.renderTintedFrame('hsl(0, 100%, 20%)');
                c = q.frames.car_l3_min.renderTintedFrame('hsl(0, 100%, 30%)');
                w = q.frames.car_l2_min.renderTintedFrame('hsl(0, 100%, 40%)');
                v = q.frames.car_l3_min_glow.renderTintedFrame('hsl(0, 100%, 50%)');
                G = q.frames.grid_mask_hard.renderTintedFrame('hsl(0, 100%, 40%)');
                I = q.frames.grid_mask_hard.renderTintedFrame('hsl(' +
                    this.hue + ', 100%, 40%)');
            };
            this.resume = function () {};
            this.cleanup = function () {};
            this.setKilledBy = function (a) {this.killedByID = a;};
        }, Ob = function () {
            this.id = -1;
            this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
            this.energy = 255;
            this.dstAngle = this.origAngle = this.angle = 0;
            this.nick = '';
            this.hue = 0;
            this.lastUpdateTime;
            var b = this.killedByID = 0, f, k, g = 0;
            this.canInterpolate = this.beingDeleted = !1;
            this.beginGraby = this.beginGrabX = this.blendIn = 0;
            this.flailGrabbed = !1;
            var d = 0;
            this.update = function (b) {
                b *=
                    .06;
                if (this.beingDeleted) {
                    var h = A[this.killedByID];
                    if (h) {
                        var a = Math.pow(g, 2), l;
                        this.flailGrabbed ? (l = h.flailX, h = h.flailY) : (l = h.x, h = h.y);
                        this.x = this.beginGrabX + (l - this.beginGrabX) * a;
                        this.y = this.beginGrabY + (h - this.beginGrabY) * a;
                    }
                    g += .07 * b;
                    1 < g && delete A[this.id];
                } else b = da((D - this.lastUpdateTime) / $, 0, 1), this.prevX = this.x, this.prevY = this.y, a = b * (this.dstY - this.origY) + this.origY, this.x = b * (this.dstX - this.origX) + this.origX, this.y = a, this.angle = b * (this.dstAngle - this.origAngle) + this.origAngle;
                this.beingDeleted &&
                (d += .2);
            };
            this.drawAfter = function (b) {};
            this.draw = function (e) {
                if (this.canInterpolate) {
                    e.save();
                    e.translate(this.x, this.y);
                    e.rotate(-this.angle);
                    b += .05;
                    var h = .3 - .05 * Math.sin(b), a = .3 + .05 * Math.sin(b);
                    e.scale(h, a);
                    this.beingDeleted && (e.rotate(d), 0 < this.killedByID ? e.scale(1.7, 1.7) : e.scale(1 - g, 1 - g));
                    k.draw(e);
                    e.restore();
                }
            };
            this.drawInput = function (b) {};
            this.drawInfo = function (b) {};
            this.updateNetwork = function (b, d, a) {
                var l, c, g;
                b.getUint16(d, !0);
                d += 2;
                l = b.getFloat32(d, !0);
                d += 4;
                c = -b.getFloat32(d, !0);
                d += 4;
                g = b.getFloat32(d,
                    !0);
                d += 4;
                this.origX = this.x;
                this.origY = this.y;
                this.origAngle = this.angle;
                this.dstX = 10 * l;
                this.dstY = 10 * c;
                this.dstAngle = g;
                a ? (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, this.origAngle = this.dstAngle, this.hue = b.getUint16(d, !0), d += 2, f = 'hsl(' + this.hue + ', 100%, 50%)', k = q.frames.energy.renderTintedFrame(f)) : this.canInterpolate = !0;
                this.lastUpdateTime = D;
                return d;
            };
            this.deleteNetwork = function (b, d) {
                if (R) return this.flailGrabbed = b.getUint8(d), d++, this.beingDeleted = !0, this.beginGrabX =
                    this.x, this.beginGrabY = this.y, d;
                delete A[this.id];
                return ++d;
            };
            this.resume = function () {};
            this.cleanup = function () {};
            this.setKilledBy = function (b) {this.killedByID = b;};
        }, Qb = function (b) {
            this.subType = b;
            this.id = -1;
            this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
            this.energy = 255;
            this.dstAngle = this.origAngle = this.angle = 0;
            this.nick = '';
            this.lastUpdateTime;
            var f = this.killedByID = 0, k = 0, g, d, e, h = 0;
            this.canInterpolate = this.beingDeleted = !1;
            this.blendIn = 0;
            this.flailGrabbed = !1;
            this.impulseValue =
                0;
            this.positive = !0;
            var a = new Pb;
            a.fixedColor = !0;
            this.update = function (b) {
                var c = .06 * b;
                if (this.beingDeleted) h += .07 * c, 1 < h && delete A[this.id]; else {
                    c = da((D - this.lastUpdateTime) / $, 0, 1);
                    this.prevX = this.x;
                    this.prevY = this.y;
                    var d = c * (this.dstY - this.origY) + this.origY;
                    this.x = c * (this.dstX - this.origX) + this.origX;
                    this.y = d;
                    this.angle = c * (this.dstAngle - this.origAngle) + this.origAngle;
                }
                this.impulseValue -= b / 1E3;
                0 > this.impulseValue && (this.impulseValue = 0);
                a && (a.setPosition(this.x, this.y), a.enabled = !0, a.update(b));
            };
            this.drawAfter =
                function (a) {};
            this.draw = function (b) {
                a && (b.globalAlpha = .3 * (1 - h), a.draw(b), b.globalAlpha = 1);
                b.save();
                b.translate(this.x, this.y);
                b.rotate(this.angle + Math.PI);
                e && (b.scale(2.7, 2.7), b.globalAlpha = .4 * (1 - h), e.draw(b), b.scale(1 / 2.7, 1 / 2.7));
                f = this.impulseValue * this.impulseValue * Math.PI * 2;
                f += Math.PI / 2;
                var c = .6 + (.1 * Math.sin(f) - .1), g = .6 - .1 * Math.sin(f);
                this.positive || (k -= .1, c *= 1.7 + .1 * Math.sin(k), g *= 1.7 + .1 * Math.cos(k));
                var v = 0;
                this.beingDeleted && (v = .5 * -(Math.abs(h - .5) - .5) + .25);
                b.scale(c + v, g + v);
                b.globalAlpha = 1 - Math.pow(h,
                    3);
                d.draw(b);
                this.beingDeleted && d.draw(b);
                b.restore();
            };
            this.drawInput = function (a) {};
            this.drawInfo = function (a) {};
            this.updateNetwork = function (l, c, f) {
                var h, k, n;
                l.getUint16(c, !0);
                c += 2;
                h = l.getFloat32(c, !0);
                c += 4;
                k = -l.getFloat32(c, !0);
                c += 4;
                n = l.getFloat32(c, !0);
                c += 4;
                this.origX = this.x;
                this.origY = this.y;
                this.origAngle = this.angle;
                this.dstX = 10 * h;
                this.dstY = 10 * k;
                this.dstAngle = n;
                l.getUint8(c) && (this.impulseValue = 1);
                c += 1;
                f && (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, this.origAngle =
                    this.dstAngle, this.positive = l.getUint8(c), c += 1, this.hue = this.positive ? 116 : 0, g = 'hsl(' + this.hue + ', 100%, 50%)', d = q.frames.tri.renderTintedFrame(g), a.style = g, 3 == b && (e = q.frames.grid_mask.renderTintedFrame(g)));
                this.lastUpdateTime = D;
                return c;
            };
            this.deleteNetwork = function (a, c) {
                R && 0 != this.killReason ? (this.flailGrabbed = a.getUint8(c), this.beingDeleted = !0) : delete A[this.id];
                return ++c;
            };
            this.resume = function () {};
            this.cleanup = function () {};
        }, Rb = function (b) {
            this.id = -1;
            this.y = this.x = this.shapeIndex = 0;
            this.subType = b;
            this.margin = 30;
            this.hitValue = 0;
            this.pulsing = !1;
            this.coreRotation = this.pulseValue = 0;
            var f, k, g, d, e = 0, h = 0, a = 1, l = !1, c = 0, w = 0, v = !1;
            this.update = function (a) {
                0 < this.hitValue && (this.hitValue -= a / 1E3 * 10, 0 > this.hitValue && (this.hitValue = 0));
                if (this.pulsing || 0 < this.pulseValue) this.pulseValue += .3, this.pulseValue > 2 * Math.PI && (this.pulseValue = 0), this.pulsing = !1;
            };
            this.render = function (a, c, b) {
                a.save();
                var l = H.objects[this.shapeIndex - 1];
                1 == l.type ? l.drawPath(a, !0, this.margin) : c ? l.drawPath(a, e, h, this.margin) : l.drawPath(a,
                    0, 0, this.margin);
                var d;
                c = 5;
                0 == this.subType ? b ? (a.fillStyle = q.bgGridGreen, d = '#00FF00') : (a.fillStyle = '#003a08', d = '#00BB00', c = 2) : 1 == this.subType ? (a.fillStyle = '#023139', d = '#0bdfff') : 2 == this.subType ? (a.fillStyle = q.bgGridRed, d = '#FF0000') : 4 == this.subType ? (a.fillStyle = 1 == b ? q.bgCoreCharge : 0 == b ? q.bgCore : '#000000', c = 4, a.setLineDash([8, 11]), d = '#0bdfff', a.lineCap = 'round') : 5 == this.subType && (a.fillStyle = '#000000', 1 == b ? (d = '#ffd200', a.setLineDash([20, 20]), c = 7) : 0 == b ? (d = '#00FF00', a.setLineDash([10, 10]), c = 5) : (d = '#000',
                    c = 0), a.lineCap = 'round');
                a.strokeStyle = d;
                a.fillStyle && (a.scale(.4, .4), a.rotate(Math.PI / 4), a.fill(), a.scale(2.5, 2.5));
                0 < c && (a.shadowColor = d, a.shadowBlur = this.margin, a.lineWidth = c, a.stroke(), 2 == this.subType && a.stroke());
                a.restore();
            };
            var G = 0, n = 0, y = 0;
            this.drawObject = function (b) {
                var t = H.objects[this.shapeIndex - 1];
                if (t) if (v || this.preRender(), 2 == this.subType && (a = (l = !l) ? .6 : 1), f) if (1 == t.type) {
                    b.save();
                    var q = 0, m = 0;
                    0 == this.subType && (m = 1 - c / 255, G += .05 + m / 5, Math.sqrt(Math.sin(G) * Math.sin(G)), q = .05 * m);
                    b.translate(t.posX,
                        t.posY);
                    b.scale(1 + .2 * this.hitValue - Math.cos(G) * q, 1 + .2 * this.hitValue + Math.sin(G) * q);
                    t = 1 + .2 * (1 - (Math.cos(this.pulseValue) + 1) / 2);
                    b.scale(t, t);
                    b.rotate(.2 * this.hitValue);
                    t = f;
                    5 == this.subType && (n += coreRotation, 1 == U ? 0 < n && (y += .05, .15 < y && (y = .15)) : 2 == U ? t = k : 4 == U && (b.scale(2.9, 2.9), d.draw(b), b.scale(1 / 2.9, 1 / 2.9), t = g), 1 != U && (y -= .05, 0 > y && (y = 0)), b.scale(1 + y, 1 + y), b.rotate(n));
                    b.translate(-f.width / 2, -f.height / 2);
                    b.globalAlpha = (1 - .2 * this.hitValue) * a;
                    b.drawImage(t, 0, 0);
                    0 == this.subType && (b.globalAlpha = m, this.hitValue >
                    m && (b.globalAlpha = this.hitValue), b.drawImage(k, 0, 0));
                    b.globalAlpha = 1;
                    b.restore();
                } else b.globalAlpha = a, 4 == this.subType && 4 == U ? b.drawImage(g, -e, -h) : b.drawImage(f, -e, -h), 4 == this.subType ? (1 == U ? (w += .1, m = Math.sin(w) / 2 + 1 - .5, b.globalAlpha = Math.sqrt(m)) : b.globalAlpha = 1, 0 != U && 4 != U && b.drawImage(k, -e, -h)) : w = 0, b.globalAlpha = 1; else this.render(b, !1, 0);
            };
            this.draw = function (a) {(4 == this.subType || 5 == this.subType && 4 != U) && this.drawObject(a);};
            this.drawAfter = function (a) {4 == this.subType || 5 == this.subType && 4 != U || this.drawObject(a);};
            this.drawInput = function (a) {};
            this.drawInfo = function (a) {};
            this.updateNetwork = function (a, l, d) {
                var e, f, h, g;
                e = a.getFloat32(l, !0);
                l += 4;
                f = -a.getFloat32(l, !0);
                l += 4;
                h = a.getFloat32(l, !0);
                l += 4;
                g = a.getUint8(l, !0);
                l += 1;
                if (0 == b) a.getUint8(l, !0) && (this.hitValue = 1), l += 1, c = a.getUint8(l++, !0); else if (5 == b) {
                    var w = a.getUint8(l++, !0);
                    U = w & -9;
                    w & 8 && (this.pulsing = !0);
                    coreRotation = a.getFloat32(l, !0);
                    l += 4;
                }
                this.x = e;
                this.y = f;
                this.angle = h;
                this.shapeIndex = g;
                d && this.preRender();
                return l;
            };
            this.preRender = function () {
                var a = H.objects[this.shapeIndex -
                1];
                if (a) {
                    f = s.createElement('canvas');
                    var c = f.getContext('2d');
                    if (2 == a.type) {
                        for (var b = a.vertexes.length, l, w, y, G, n = 0; n < b; n++) {
                            var m = a.vertexes[n].x, p = a.vertexes[n].y;
                            if (void 0 == l || m < l) l = m;
                            if (void 0 == w || m > w) w = m;
                            if (void 0 == y || p < y) y = p;
                            if (void 0 == G || p > G) G = p;
                        }
                        f.width = w - l + 2 * this.margin;
                        f.height = G - y + 2 * this.margin;
                        e = -l + this.margin;
                        h = -y + this.margin;
                        this.render(c, !0, 0);
                        4 == this.subType && (k = s.createElement('canvas'), a = k.getContext('2d'), k.width = f.width, k.height = f.height, this.render(a, !0, 1), g = s.createElement('canvas'),
                            a = g.getContext('2d'), g.width = f.width, g.height = f.height, this.render(a, !0, 2));
                    } else 1 == a.type && (f.width = 2 * a.radius + 2 * this.margin, f.height = 2 * a.radius + 2 * this.margin, this.render(c, !0, 0), 0 == this.subType ? (k = s.createElement('canvas'), a = k.getContext('2d'), k.width = f.width, k.height = f.height, this.render(a, !0, 1)) : 5 == this.subType && (k = s.createElement('canvas'), a = k.getContext('2d'), k.width = f.width, k.height = f.height, this.render(a, !0, 1), g = s.createElement('canvas'), a = g.getContext('2d'), g.width = f.width, g.height = f.height,
                        this.render(a, !0, 2), d = q.frames.grid_mask_hard.renderTintedFrame('#9d00c6')));
                    v = !0;
                }
            };
            this.deleteNetwork = function (a, c) {return c;};
            this['delete'] = function () {delete A[this.id];};
            this.resume = function () {};
            this.cleanup = function () {};
        }, Sb = function (b) {
            this.id = -1;
            this.subType = b;
            this.update = function (b) {};
            this.draw = function (b) {};
            this.drawAfter = function (b) {};
            this.drawInfo = function (b) {};
            this.updateNetwork = function (b, k, g) {return k;};
            this.deleteNetwork = function (b, k) {return k;};
            this.resume = function () {};
            this.cleanup = function () {};
        },
        Tb = function () {
            this.id = -1;
            this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
            this.energy = 255;
            this.hue = this.dstAngle = this.origAngle = this.angle = 0;
            this.nick = '';
            this.type = 1;
            this.lastUpdateTime;
            var b = 2 * Math.random() * Math.PI, f = 2 * Math.random() * Math.PI, k, g, d, e,
                h = 2 * Math.random() * Math.PI, a = 0;
            this.canInterpolate = this.beingDeleted = !1;
            this.beginGraby = this.beginGrabX = this.killedByID = this.blendIn = 0;
            this.flailGrabbed = !1;
            var l;
            this.update = function (c) {
                c *= .06;
                if (this.beingDeleted) {
                    var b =
                        A[this.killedByID];
                    if (b) {
                        var l = Math.pow(a, 2), d;
                        this.flailGrabbed ? (d = b.flailX, b = b.flailY) : (d = b.x, b = b.y);
                        this.x = this.beginGrabX + (d - this.beginGrabX) * l;
                        this.y = this.beginGrabY + (b - this.beginGrabY) * l;
                        a += .07 * c;
                        1 < a && delete A[this.id];
                    } else delete A[this.id];
                } else c = da((D - this.lastUpdateTime) / $, 0, 1), this.prevX = this.x, this.prevY = this.y, l = c * (this.dstY - this.origY) + this.origY, this.x = c * (this.dstX - this.origX) + this.origX, this.y = l, this.angle = c * (this.dstAngle - this.origAngle) + this.origAngle;
                this.canInterpolate && (this.blendIn +=
                    .1, 1 < this.blendIn && (this.blendIn = 1));
            };
            this.drawAfter = function (a) {};
            this.draw = function (a) {
                if (this.canInterpolate) {
                    var d = .1 * this.energy * .2;
                    .6 < d && (d = .6);
                    a.save();
                    a.translate(this.x, this.y);
                    b += .06;
                    var d = .15 + d, g = .7 - .05 * Math.sin(b), k = .7 + .05 * Math.sin(b);
                    a.scale(g * d, k * d);
                    d = 2 + .5 * Math.sin(h);
                    h += .1;
                    a.scale(d, d);
                    a.globalAlpha = .5 * this.blendIn;
                    e.draw(a);
                    a.globalAlpha = 1 * this.blendIn;
                    a.scale(1 / d, 1 / d);
                    a.scale(.5, .5);
                    f += .03;
                    a.rotate(f);
                    a.translate(-66, -66);
                    a.drawImage(l, 0, 0);
                    a.restore();
                }
            };
            this.preRenderParticle = function (a) {
                l =
                    s.createElement('canvas');
                var b = l.getContext('2d');
                l.width = 132;
                l.height = 132;
                for (var e = 35 + 5 * Math.sin(0), h = 1; h <= a; h++) {
                    var f = h / a * 2 * Math.PI, g = Math.sin(0 + f) * e + 66, f = Math.cos(0 + f) * e + 66;
                    b.translate(g, f);
                    d.draw(b);
                    b.translate(-g, -f);
                }
            };
            this.drawInput = function (a) {};
            this.drawInfo = function (a) {};
            this.GetRedGlowInfo = function () {
                var a = {};
                a.x = this.x;
                a.y = this.y;
                a.scale = 1.5;
                return a;
            };
            this.updateNetwork = function (a, b, l) {
                var f, h, y, u;
                u = a.getUint16(b, !0);
                b += 2;
                f = a.getFloat32(b, !0);
                b += 4;
                h = -a.getFloat32(b, !0);
                b += 4;
                y = a.getFloat32(b,
                    !0);
                b += 4;
                this.energy = u;
                this.origX = this.x;
                this.origY = this.y;
                this.origAngle = this.angle;
                this.dstX = 10 * f;
                this.dstY = 10 * h;
                this.dstAngle = y;
                l ? (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, this.origAngle = this.dstAngle, this.hue = a.getUint16(b, !0), b += 2, k = 'hsl(' + this.hue + ', 100%, 60%)', g = 'hsl(' + this.hue + ', 100%, 30%)', d = q.frames.energy2.renderTintedFrame(k), q.frames.energy2.renderTintedFrame(g), e = q.frames.grid_mask.renderTintedFrame(k), this.type = a.getUint8(b), b += 1, this.preRenderParticle(this.type)) :
                    this.canInterpolate = !0;
                this.lastUpdateTime = D;
                return b;
            };
            this.deleteNetwork = function (a, b) {
                this.flailGrabbed = a.getUint8(b);
                b++;
                this.beingDeleted = !0;
                this.beginGrabX = this.x;
                this.beginGrabY = this.y;
                return b;
            };
            this.resume = function () {};
            this.cleanup = function () {};
            this.setKilledBy = function (a) {this.killedByID = a;};
        }, Ub = function () {
            var b = this, f = !1, k, g;
            this.objects = [];
            this.serverVersion = this.version = 0;
            this.loaded = this.pendingVerify = !1;
            var d = function () {
                this.vertexes = [];
                this.type = 2;
                this.add = function (a, b) {
                    this.vertexes.push({
                        x: a,
                        y: b
                    });
                };
                this.drawPath = function (a, b, c, d) {
                    a.beginPath();
                    d = this.vertexes.length;
                    var e = this.vertexes[0];
                    a.moveTo(e.x + b, e.y + c);
                    for (e = 1; e < d; e++) {
                        var f = this.vertexes[e];
                        a.lineTo(f.x + b, f.y + c);
                    }
                    a.closePath();
                };
            }, e = function () {
                this.posY = this.posX = 0;
                this.radius = 10;
                this.type = 1;
                this.drawPath = function (a, b, c) {
                    a.beginPath();
                    b ? a.arc(this.radius + c, this.radius + c, this.radius, 0, 2 * Math.PI) : a.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
                    a.closePath();
                };
            };
            this.loadCircle = function (a, b, c) {
                var d = new e, f = a.getFloat32(b, !0);
                b +=
                    4;
                var h = a.getFloat32(b, !0);
                b += 4;
                a = a.getFloat32(b, !0);
                b += 4;
                d.posX = 10 * f;
                d.posY = 10 * -h;
                d.radius = 10 * a;
                d.subType = c;
                this.objects.push(d);
                return b;
            };
            this.loadPolygon = function (a, b, c) {
                var e = a.getUint16(b, !0);
                b += 2;
                var f = new d;
                f.subType = c;
                for (c = 0; c < e; c++) {
                    var h = a.getFloat32(b, !0);
                    b += 4;
                    var g = a.getFloat32(b, !0);
                    b += 4;
                    f.add(10 * h, 10 * -g);
                }
                this.objects.push(f);
                return b;
            };
            this.loadColliders = function (a) {
                this.objects = [];
                var l = new XMLHttpRequest;
                l.open('GET', a, !0);
                l.responseType = 'arraybuffer';
                l.onload = function (a) {
                    if (a = l.response) {
                        a =
                            new DataView(a);
                        var d = 0, e = a.getUint8(d, !0), d = d + 1;
                        if (191 != e) console.log('ERROR LOADING MAP FILE'); else {
                            e = a.getUint8(d, !0);
                            d += 1;
                            b.version = e;
                            for (console.log('Map Version: ' + b.version); ;) {
                                var f = a.getUint8(d, !0), d = d + 1;
                                if (0 == f) break;
                                e = a.getUint8(d, !0);
                                d += 1;
                                if (1 == f || 2 == f) f = a.getUint8(d, !0), d += 1, 1 == f ? d = b.loadCircle(a, d, e) : 2 == f && (d = b.loadPolygon(a, d, e));
                            }
                            b.pendingVerify && b.verifyMapVersion(b.serverVersion);
                            b.loaded = !0;
                        }
                    }
                };
                l.send(null);
                console.log('Map loaded!');
            };
            this.verifyMapVersion = function (a) {
                console.log('Server map version: ' +
                    a + ' Local: ' + b.version);
                a < b.version ? b.loadColliders('map.io.client.' + a) : a > b.version && n.location.reload(!0);
            };
            this.setPendingMapVerify = function (a) {
                b.serverVersion = a;
                b.pendingVerify = !0;
            };
            this.drawColliders = function (a) {for (var b = this.objects.length, c = 0; c < b; c++) this.objects[c].draw(a, 1);};
            this.drawWater = function (a) {if (drawWater) for (var b = this.objects.length, c = 0; c < b; c++) this.objects[c].draw(a, 2);};
            this.drawGrassSand = function (a) {for (var b = this.objects.length, c = 0; c < b; c++) this.objects[c].draw(a, 3);};
            this.drawGradient =
                function (a) {
                    var b = (canvas.width / 2 + (z.x * z.zoom - canvas.width / 2)) / z.zoom,
                        c = (canvas.height / 2 + (z.y * z.zoom - canvas.height / 2)) / z.zoom, d = .75 * C,
                        d = a.createLinearGradient(0, -d, 0, d);
                    d.addColorStop(0, 'rgba(0,0,0,0.0)');
                    d.addColorStop(1, 'rgba(0,0,255,0.5)');
                    a.globalAlpha = .5;
                    a.fillStyle = d;
                    a.fillRect(b - canvas.width / 2 / z.zoom, c - canvas.height / 2 / z.zoom, canvas.width / z.zoom, canvas.height / z.zoom);
                    a.globalAlpha = 1;
                };
            this.preRenderSideLine = function (a) {
                var b = s.createElement('canvas'), c = b.getContext('2d');
                a ? (b.width = 60, b.height =
                    C + 60) : (b.width = E + 60, b.height = 60);
                c.strokeStyle = '#0bdfff';
                c.beginPath();
                c.lineCap = 'round';
                c.moveTo(30, 30);
                a ? c.lineTo(30, 30 + C) : c.lineTo(30 + E, 30);
                c.shadowColor = '#0bdfff';
                c.shadowBlur = 30;
                c.lineWidth = 5;
                c.stroke();
                return b;
            };
            this.preRenderSideLines = function () {
                k = this.preRenderSideLine(!0);
                g = this.preRenderSideLine(!1);
                f = !0;
            };
            this.drawLimits = function (a) {
                var b = 2 * C, c = z.getBounds(), d = E / 2;
                if (!f || Ua) Ua = !1, this.preRenderSideLines();
                d <= c[1].x && (a.fillStyle = '#023139', a.fillRect(d, -b / 2, 2500, b));
                -d >= c[0].x && (a.fillStyle =
                    '#023139', a.fillRect(-d - 2500, -b / 2, 2500, b));
                -C / 2 > c[0].y && (a.fillStyle = '#023139', a.fillRect(-d - 2, -C / 2 - 2500, 2 * d + 4, 2500));
                C / 2 < c[1].y && (a.fillStyle = '#023139', a.fillRect(-d - 2, C / 2, 2 * d + 4, 2500));
                d <= c[1].x && a.drawImage(k, d - 30, -C / 2 - 30);
                -d >= c[0].x && a.drawImage(k, -d - 30, -C / 2 - 30);
                -C / 2 > c[0].y && a.drawImage(g, -d - 30, -C / 2 - 30);
                C / 2 < c[1].y && a.drawImage(g, -d - 30, C / 2 - 30);
            };
            this.draw = function (a) {
                var b = z.getBounds(), c = 1 / z.zoom;
                a.save();
                a.globalCompositeOperation = 'source-over';
                a.fillStyle = q.bgGrid;
                a.fillRect(b[0].x, b[0].y, canvas.width *
                    c, canvas.height * c);
                a.restore();
            };
            var h = !1;
            this.update = function (a) {if (ma || !h) h = !0;};
        }, Vb = function () {
            var b = [], f, k, g = 0;
            this.radiusFromMinimapRadiusPerc = function (b) {return b = 8E3 / E * (3 + 8 * b);};
            this.radiusToMinimapRadius = function (b) {return this.radiusFromMinimapRadiusPerc((b - 1) / 540);};
            this.draw = function (b) {
                if (H.loaded) {
                    var e = Q - 150 * r - 30 * r, h = aa - 150 * r - 30 * r;
                    b.save();
                    var a = r != g;
                    g = r;
                    k && !a || this.preRenderColliders();
                    b.drawImage(k, e - 5 * r, h - 5 * r);
                    f && b.drawImage(f, e - 5 * r, h - 5 * r);
                    if (x) {
                        var a = (x.flailX + E / 2) / E, l = (x.flailY + C / 2) /
                            C, c = this.radiusToMinimapRadius(x.flailRadius);
                        b.fillStyle = 'hsl(' + x.hue + ', 100%, 50%)';
                        b.strokeStyle = 'hsl(' + x.hue + ', 100%, 40%)';
                        b.lineWidth = 1;
                        b.beginPath();
                        b.arc(e + 150 * a * r, h + 150 * l * r, c * r, 0, 2 * Math.PI);
                        b.fill();
                        if (x.attached) b.beginPath(), b.arc(e + 150 * a * r, h + 150 * l * r, (c + 2) * r, 0, 2 * Math.PI), b.stroke(); else {
                            var l = x.y + C / 2, a = (x.x + E / 2) / E, l = l / C, c = 4 * r, w = 6 * r;
                            b.translate(e + 150 * a * r, h + 150 * l * r);
                            b.rotate(-x.angle);
                            b.beginPath();
                            b.rect(-c / 2, -w / 2, c, w);
                            b.fill();
                        }
                    }
                    b.restore();
                }
            };
            this.update = function (b) {};
            this.updateInfo = function (d) {
                var e =
                    1, f = d.getUint16(e, !0), e = e + 2;
                b = [];
                for (var a = 0; a < f; a++) {
                    var l = d.getUint8(e++, !0), c = d.getUint8(e++, !0), g = d.getUint8(e++, !0);
                    b.push({ x: l, y: 256 - c, r: g });
                }
                this.preRenderPlayers();
            };
            this.preRenderPlayers = function () {
                f = s.createElement('canvas');
                var d = f.getContext('2d');
                f.width = 160 * r;
                f.height = 160 * r;
                var e = b.length;
                qb = e;
                for (var h = 0; h < e; h++) {
                    var a = b[h], l = parseInt(a.x) / 256, c = parseInt(a.y) / 256,
                        a = this.radiusFromMinimapRadiusPerc(a.r / 256);
                    d.fillStyle = '#777777';
                    d.beginPath();
                    d.arc(5 * r + 150 * l * r, 5 * r + 150 * c * r, a * r, 0, 2 * Math.PI);
                    d.fill();
                }
            };
            this.preRenderColliders = function () {
                if (H.loaded) {
                    k = s.createElement('canvas');
                    var b = k.getContext('2d');
                    k.width = 160 * r;
                    k.height = 160 * r;
                    b.lineWidth = 3;
                    b.strokeStyle = '#00FFFF';
                    b.fillStyle = '#002222';
                    var e = 5 * r, f, a = 150 * r;
                    ea(b, e, e, a, a, 10);
                    b.stroke();
                    b.globalAlpha = .9;
                    b.globalAlpha = 1;
                    for (var a = 150 * r / E, l = H.objects, c = l.length, g = 0; g < c; g++) {
                        var v = l[g];
                        if (1 == v.type) {
                            e = v.posX;
                            f = v.posY;
                            var n = v.radius, e = (e + E / 2) / E;
                            f = (f + C / 2) / C;
                            b.fillStyle = '#00FF00';
                            b.beginPath();
                            b.arc(150 * e * r + 5 * r, 150 * f * r + 5 * r, n * a, 0, 2 * Math.PI);
                            b.fill();
                        } else if (4 != v.subType) {
                            switch (v.subType) {
                                case 1:
                                    e = '#0bdfff';
                                    break;
                                case 2:
                                    e = '#FF0000';
                                    break;
                                default:
                                    e = '#FFFFFF';
                            }
                            b.fillStyle = e;
                            b.lineWidth = 1;
                            var n = E / 2, m = C / 2, v = v.vertexes, y = v.length;
                            b.beginPath();
                            for (var u = 0; u < y; u++) e = (v[u].x + n) * a + 5 * r, f = (v[u].y + m) * a + 5 * r, 0 == u ? b.moveTo(e, f) : b.lineTo(e, f);
                            b.closePath();
                            b.fill();
                        }
                    }
                }
            };
        }, Xb = function () {
            function b(a) {
                for (var b = 1; ;) {
                    var c = a.getUint8(b, !0), b = b + 1;
                    if (0 == c) break;
                    switch (c) {
                        case 1:
                            a.getUint16(b, !0);
                            b += 2;
                            b = xa(a, b);
                            c = b.nick;
                            b = b.offset;
                            B.addMessage('YOU DELETED',
                                !0, ka(c));
                            z.shake();
                            break;
                        case 2:
                            a.getUint16(b, !0);
                            b += 2;
                            b = xa(a, b);
                            c = b.nick;
                            b = b.offset;
                            B.addMessage('DELETED BY', !1, ka(c));
                            z.shake();
                            break;
                        default:
                            console.log('Unknown event code');
                    }
                }
            }
            
            function f(a, b) {
                for (var c = 1, d = [], e = !1; ;) {
                    var f = a.getUint16(c, !0), c = c + 2;
                    if (0 == f) break;
                    var e = !0, h;
                    165 == b ? (h = a.getUint16(c, !0), c += 2) : (h = a.getUint32(c, !0), c += 4);
                    var c = xa(a, c), g = c.nick, c = c.offset, k = {};
                    k.nick = g;
                    k.score = h;
                    k.id = f;
                    d.push(k);
                }
                e && B.refreshLeaderboard(d);
                return c;
            }
            
            function k(a, b) {
                for (var c = 1; ;) {
                    var d = a.getUint16(c,
                        !0), c = c + 2;
                    if (0 == d) {
                        c != a.byteLength && (la = a.getUint16(c, !0), c += 2, 0 < la && (d = a.getFloat32(c, !0), c += 4, c = -a.getFloat32(c, !0), Xa = Va, Ya = Wa, sb = 10 * d, tb = 10 * c, ub = D));
                        break;
                    }
                    var e = a.getUint8(c, !0), c = c + 1, f;
                    switch (e) {
                        case 0:
                            (f = A[d]) ? c = f.updateNetwork(a, c, !1, b) : console.log('entity with id: ' + d + ' not found');
                            break;
                        case 1:
                            var e = a.getUint8(c, !0), c = c + 1, h = a.getUint8(c, !0), c = c + 1, c = xa(a, c),
                                g = c.nick, c = c.offset;
                            f = e;
                            var k = null;
                            switch (f) {
                                case 5:
                                    k = new Nb;
                                    break;
                                case 4:
                                    0 == h ? k = new Ob : 1 == h ? k = new Tb : 2 == h || 3 == h ? k = new Qb(h) : 4 == h && (k =
                                        new Wb(h));
                                    break;
                                case 1:
                                    k = 3 == h ? new Sb : new Rb(h);
                                    break;
                                default:
                                    console.log('ERROR: Creating unknown entity type: ' + f + ' Subtype: ' + h), assert(!1, 'Invalid Entity');
                            }
                            (f = k) ? (f.nick = g, f.id = d, A[d] = f, c = f.updateNetwork(a, c, !0, b)) : console.log('Unable to create entity. Entity Type is: ' + e);
                            break;
                        case 2:
                            e = a.getUint16(c, !0);
                            c += 2;
                            g = a.getUint8(c);
                            c += 1;
                            (f = A[d]) ? (f.killReason = g, f.killedByID = e, d = f == x, c = f.deleteNetwork(a, c), d && K && (K = !1, x = null, J.angle = Math.PI, J.throttle = 0, B.clearTip(), Gb++, Hb++, Ja() && F.resetTutorial(),
                                ib())) : console.log('ERROR: Entity does not exist: ' + d);
                            break;
                        default:
                            console.log('Invalid entity flag');
                    }
                }
            }
            
            var g, d;
            this.sentHello = this.hasConnection = !1;
            this.remoteSecurePort = this.remotePort = this.remoteIP = null;
            this.connectRetry = 0;
            this.directed = this.lastUpdateBool = !1;
            this.roomID = 0;
            var e = ya, e = 1 == Ma || 3 == Ma ? ya + ':81' : 'master.' + ya;
            this.getServerAndConnect = function () {
                var a, b;
                Ia() || (b = parent.location.hash);
                if (b) a = b, a = a.substring(1, a.length), p.directed = !0; else if (qa.ip) {
                    a = qa.ip;
                    a = a.replace('%3A', ':');
                    a = a.split(':');
                    p.remoteIP = a[0];
                    p.remotePort = a[1];
                    p.remoteSecurePort = p.remotePort;
                    p.connect();
                    return;
                }
                b = Ba;
                qa.cc && (b = qa.cc);
                b ? (b = (Na ? 'https://' : 'http://') + e + '/room?v=3&p=web&c=' + b, a && (b += '&r=' + a), m.ajax({
                    url: b,
                    type: 'GET',
                    success: function (a) {
                        3 !== a.version ? location.reload(!0) : a.error ? 'ROOM_NOT_FOUND' === a.error || 'ROOM_FULL' === a.error ? (m('#topGui').hide(), m('#topGuiConnecting').hide(), m('#roomFailed').show(), m('#tips').hide(), a = 'ROOM_NOT_FOUND' === a.error ? 'LINK EXPIRED!' : 'SERVER IS FULL!', m('#linkText')[0].innerHTML = a) :
                            setTimeout(p.getServerAndConnect, 1E3) : (p.remoteIP = a.ip, p.remotePort = a.port, p.remoteSecurePort = a.securePort, p.roomID = a.roomID || 0, p.connect());
                    },
                    error: function () {setTimeout(p.getServerAndConnect, 1E3);},
                    method: 'GET',
                    cache: !1,
                    crossDomain: !0
                })) : setTimeout(p.getServerAndConnect, 200);
            };
            this.connect = function () {
                if (R || L) {
                    var a;
                    Na ? (a = p.remoteIP.split('.'), a = 'wss://' + a[0] + '-' + a[1] + '-' + a[2] + '-' + a[3] + '.brutal.io:' + p.remoteSecurePort) : a = 'ws://' + p.remoteIP + ':' + p.remotePort;
                    L && console.log('Connecting to ' + a + '...');
                    try {
                        g =
                            new WebSocket(a);
                    }
                    catch (b) {
                        setTimeout(p.getServerAndConnect, 1E3);
                        return;
                    }
                    g.binaryType = 'arraybuffer';
                    g.onopen = p.onSocketOpen;
                    g.onclose = p.onSocketClose;
                    g.onmessage = p.onSocketMessage;
                    g.onerror = p.onError;
                } else setTimeout(p.getServerAndConnect, 100);
            };
            this.disconnect = function () {
                x = null;
                N = 0;
                p.directed && (Ia() || (n.location.hash = ''), p.directed = !1);
                p.roomID = 0;
                g && g.close();
            };
            this.onSocketOpen = function (a) {
                L && console.log('Connected!');
                p.connectRetry = 0;
                p.hasConnection = !0;
                p.directed = !1;
                q.loaded && p.hello();
                z.reset();
            };
            this.onSocketClose =
                function (a) {p.connectionClosed();};
            this.onSocketMessage = function (a) {p.processMessage(a.data);};
            this.onError = function (a) {console.log('socket error');};
            this.hello = function () {
                p.sendHello();
                p.ping();
                p.sentHello = !0;
                m('#copyLink').fadeIn(300);
                m('#topGui').show();
                m('#topGuiConnecting').hide();
                m('.btn-needs-server').removeAttr('disabled');
                m('#nick').focus();
            };
            var h;
            this.processMessage = function (a) {
                a = new DataView(a);
                var e = a.getUint8(0);
                if (0 == e) L && (a = +new Date - d, M.updateLag(a), 150 < a ? this.ping() : setTimeout(function () {p.ping();},
                    150 - a)); else if (160 == e) {
                    var c = 1, e = a.getFloat32(c, !0), c = c + 4, g = a.getFloat32(c, !0);
                    a = a.getUint8(c + 4, !0);
                    H.loaded ? H.verifyMapVersion(a) : H.setPendingMapVerify(a);
                    E = 10 * e;
                    C = 10 * g;
                    L && console.log('Received Map Config: ' + E + ', ' + C);
                    Ua = rb = !0;
                } else 161 == e ? (ma = !0, m('#firstRightBox').hide(), m('#mobileBoxId').hide(), m('#afterRightBox').show(), m('#linksID').css({ bottom: '38px' }), c = 1, g = a.getUint32(c, !0), c += 4, N = g, ba = 0, K = !0, hb()) : 180 == e || 179 == e ? (c = +new Date, g = c - h, 150 < g && L && console.log('Delta: ' + g + ' - LAG WARNING !'), h =
                    c, k(a, e), objectCount = Object.keys(A).length, s.title = 0 < objectCount && L ? 'brutal.io (' + qb + ', ' + objectCount + ')' : 'brutal.io!') : 164 == e ? b(a) : 165 == e || 181 == e ? (c = f(a, e), g = a.getUint16(c, !0), c += 2, 0 < g ? (165 == e ? (e = a.getUint16(c, !0), c += 2) : (e = a.getUint32(c, !0), c += 4), g = a.getUint16(c, !0), c += 2, B.updateRank(g, e)) : B.updateRank(0, 0), e = a.getUint32(c, !0), c += 4, a = a.getUint32(c, !0), c += 4, ab && console.log('GrabbedEnergy: ' + e + ', ToBeGrabbedEnergy: ' + a + ' TOTAL: ' + (e + a))) : 166 == e && Aa.updateInfo(a);
            };
            this.connectionClosed = function () {
                F.gameCleanup();
                p.sentHello = !1;
                p.hasConnection = !1;
                ib(-1);
                m('#topGui').hide();
                m('#topGuiConnecting').show();
                m('#copyLink').fadeOut(300);
                m('.btn-needs-server').attr('disabled', 'disabled');
                var a = this.connectRetry;
                5 < a && (a = 5);
                setTimeout(this.getServerAndConnect, 1E3 + 1E3 * a);
                p.connectRetry++;
            };
            this.sendSingleByte = function (a) {
                var b = new ArrayBuffer(1);
                (new DataView(b)).setUint8(0, a);
                g.send(b);
            };
            this.sendHello = function () {
                var a = new ArrayBuffer(5), b = new DataView(a);
                b.setUint8(0, 1);
                b.setUint16(1, 960 / 10 * 1, !0);
                b.setUint16(3, 540 / 10 * 1,
                    !0);
                g.send(a);
            };
            this.sendNick = function (a, b) {
                myName = a;
                var c = new ArrayBuffer(3 + 2 * a.length), d = new DataView(c);
                d.setUint8(0, 3);
                for (var e = 0; e < a.length; ++e) d.setUint16(1 + 2 * e, a.charCodeAt(e), !0);
                g.send(c);
            };
            this.sendInput = function () {
                var a = new ArrayBuffer(10), b = new DataView(a);
                b.setUint8(0, 5);
                b.setFloat64(1, J.angle, !0);
                var c = 0;
                if (J.throttle || !R) c |= 1;
                if (!R || W) c |= 2;
                b.setUint8(9, c, !0);
                g.send(a);
            };
            this.sendResize = function () {
                var a = new ArrayBuffer(5), b = new DataView(a);
                b.setUint8(0, 7);
                b.setUint16(1, Q / 10 * 1, !0);
                b.setUint16(3,
                    aa / 10 * 1, !0);
                g.send(a);
            };
            this.sendClick = function (a) {
                var b = new ArrayBuffer(2), c = new DataView(b);
                c.setUint8(0, 8);
                a ? c.setUint8(1, 1) : c.setUint8(1, 0);
                g.send(b);
            };
            this.leave = function () {
                var a = new ArrayBuffer(1);
                (new DataView(a)).setUint8(0, 4);
                g.send(a);
            };
            this.ping = function () {
                if (this.hasConnection) {
                    var a = new ArrayBuffer(1);
                    (new DataView(a)).setUint8(0, 0);
                    g.send(a);
                    d = +new Date;
                }
            };
        }, $b = function (b) {
            function f() {K && p.hasConnection && p.sendInput();}
            
            var k = this, g, d;
            this.context = d;
            var e = [{}, {}], h = 0, a = 1E3, l = !1, c = 0, w = 0, v =
                0;
            k.getTutorialState = function () {return h;};
            k.setTutorialState = function (a) {h != a && (h = a);};
            k.resetTutorial = function () {
                l = !0;
                h = 0;
                a = 1E3;
            };
            k.update = function (b) {
                x && !x.inGame && 0 == pa && (x = null);
                B && B.update(b);
                laserExists = !1;
                for (var c in A) A[c].update(b), c == N && (x = A[c]);
                z.update(b);
                S.update(b);
                ua = (g.width / 2 + (z.x * z.zoom - g.width / 2)) / z.zoom;
                va = (g.height / 2 + (z.y * z.zoom - g.height / 2)) / z.zoom;
                0 < ba && 1 < cameraSmooth && (cameraSmooth -= .2, 1 > cameraSmooth && (cameraSmooth = 1));
                H.update(b);
                Aa.update(b);
                this.updateOffscreenInfo(0);
                0 < la &&
                this.updateOffscreenInfo(1);
                if (null != x) if (J.mouseMoved) {
                    c = 1;
                    V || (c = 2);
                    cb = (nb + (z.x * z.zoom - g.width * c / 2)) / z.zoom;
                    db = (ob + (z.y * z.zoom - g.height * c / 2)) / z.zoom;
                    c = cb - x.x;
                    var d = db - x.y, e = Math.sqrt(c * c + d * d);
                    c /= e;
                    d /= e;
                    J.throttle = e > 75 / fa ? 1 : 0;
                    var f = e = 0;
                    R && (e = c, f = -d);
                    0 != e && (c = Math.atan(f / e), 0 > e && (c = Math.PI + c), c += Math.PI / 2, J.angle = c);
                } else J.throttle = 0, J.angle = Math.PI;
                l && x && K && (0 == h ? (a -= b, 0 > a && (h = 1)) : 1 == h ? (h = 2, B.showTip('CLICK TO RELEASE FLAIL FROM YOUR CAR', 0)) : 3 == h ? (h = 4, B.clearTip()) : 4 != h && (5 == h ? (h = 6, B.showTip('CLICK AND HOLD TO ATTRACT FLAIL',
                    0, '#00FF00', '#006600')) : 7 == h && (B.clearTip(), n.localStorage.tutorial ? n.localStorage.tutorial++ : n.localStorage.tutorial = 1, l = !1)));
            };
            k.draw = function (a) {
                if (q.loaded) if (ma) {
                    if (z.setupContext(d), H.draw(d), rb) {
                        for (var b in A) {
                            var e = A[b];
                            e.draw(d, a);
                        }
                        for (b in A) e = A[b], e.drawAfter(d, a);
                        for (b in A) A[b].drawInfo(d);
                        S.drawBehind(d);
                        S.drawLayer2(d);
                        S.draw(d);
                        S.drawExplosions(d);
                        vb.draw(d);
                        H.drawLimits(d);
                        K && x && x.drawInput(d);
                        this.drawOffscreenInfo(d, 0);
                        0 < la && this.drawOffscreenInfo(d, 1);
                        z.startUILayer();
                        K && Aa.draw(d);
                        Za && B.draw(d);
                        z.setupContext(d);
                    }
                } else z.startUILayer(), q.splashScreenLoaded && (d.scale(v, v), d.drawImage(q.splashScreen, c, w));
            };
            k.updateOffscreenInfo = function (a) {
                if (null != x) {
                    var b = z.getBounds(), c = b[1].x, d = b[0].x, f = b[0].y, h = b[1].y, g, l;
                    0 == a ? (g = x.flailX, l = x.flailY) : (b = da((D - ub) / $, 0, 1), Va = b * (sb - Xa) + Xa, Wa = b * (tb - Ya) + Ya, g = Va, l = Wa);
                    b = 0 == a ? x.flailRadius + 30 : 50;
                    if (x && !lb(g, l, b)) {
                        var b = ua - g, k = (va - l) / b, n = va - k * ua;
                        e[a].y = 0 > b ? k * c + n : k * d + n;
                        e[a].y < f ? e[a].y = f : e[a].y > h && (e[a].y = h);
                        e[a].x = (e[a].y - n) / k;
                        c = e[a].x - g;
                        d = e[a].y -
                            l;
                        c = Math.sqrt(c * c + d * d);
                        e[a].scale = 1;
                        300 < c && (e[a].scale = 1 - (c - 300) / 4E3, c = 0 == a ? .4 : .5, e[a].scale < c && (e[a].scale = c));
                        1 == a && (e[a].scale += .1);
                        1 < k ? k = 1 : -1 > k && (k = -1);
                        e[a].angle = Math.acos(k);
                        0 > b && (e[a].angle += Math.PI);
                        e[a].outside = !0;
                    } else e[a].outside = !1;
                }
            };
            k.drawOffscreenInfo = function (a, b) {
                if (x && e[b].outside) {
                    a.save();
                    a.translate(e[b].x, e[b].y);
                    a.save();
                    var c = mb(0, 50, -e[b].angle);
                    a.translate(c.x, c.y);
                    a.scale(e[b].scale, e[b].scale);
                    c = x.hue;
                    if (0 == b) {
                        if (x.drawFlailIcon(a), x.decay) {
                            var d = mb(0, 30, -e[b].angle);
                            a.translate(d.x,
                                d.y);
                            q.frames.decay_alert.draw(a);
                        }
                    } else q.frames.crown.draw(a), c = 47;
                    a.restore();
                    a.rotate(-e[b].angle);
                    a.translate(0, 30);
                    d = .9;
                    1 == b && (d *= e[b].scale);
                    a.fillStyle = 'hsl(' + c + ', 100%, 70%)';
                    a.beginPath();
                    a.moveTo(-8 * d, 0);
                    a.lineTo(8 * d, 0);
                    a.lineTo(0, -20 * d);
                    a.fill();
                    a.restore();
                }
            };
            k.gameCleanup = function () {
                x = void 0;
                K = !1;
                for (id in A) delete A[id];
                A = {};
            };
            k.updateBackgroundImage = function () {
                var a = 1, a = aa / q.splashScreen.height, b = Q / q.splashScreen.width;
                b > a && (a = b);
                var b = Q / a, d = aa / a, e = q.splashScreen.width, f = q.splashScreen.height;
                v = a;
                c = b / 2 - e / 2;
                w = d / 2 - f / 2;
            };
            var G;
            k.resize = function (a) {
                s();
                !ma && q.splashScreenLoaded && k.updateBackgroundImage();
                p.hasConnection && (G && clearTimeout(G), G = setTimeout(p.sendResize, 200));
            };
            var s = function () {
                var a = 2;
                V && (a = 1);
                g.width = n.innerWidth / a;
                g.height = n.innerHeight / a;
                Q = g.width;
                aa = g.height;
                var b = aa * a, c = -50 + 50 * a + '%', a = 'translate(' + c + ',' + c + ') scale(' + a + ')';
                m('#canvas').css({ transform: a });
                m('#canvas').css({ '-ms-transform': a });
                m('#canvas').css({ '-webkit-transform': a });
                r = .92 * Math.max(aa / 850, Q / 1500);
                r *= n.devicePixelRatio /
                    Qa;
                c = Math.min(1, b / 850);
                a = 450 * c;
                0 < a && (c = 'translate(-50%,0%) scale(' + c + ')', m('#mainDialog').css({ transform: c }), m('#mainDialog').css({ '-ms-transform': c }), m('#mainDialog').css({ '-webkit-transform': c }), b = b / 2 - .38 * a, m('#mainDialog').css({ top: b + 'px' }));
                T && (T.domElement.style.position = 'absolute', T.domElement.style.left = .23 * g.width + 100 + 'px', T.domElement.style.top = g.height - 18 - 30 + 'px');
                M && (M.domElement.style.position = 'absolute', M.domElement.style.left = .23 * g.width + 'px', M.domElement.style.top = g.height - 18 - 30 + 'px');
            };
            g = b;
            d = g.getContext('2d');
            k.context = d;
            s();
            H = new Ub;
            H.loadColliders('map.io.client');
            S = new Yb;
            q = new Jb;
            q.load(function () {
                console.log('Resources loaded!');
                B = new Mb;
                vb = new Lb;
                p.hasConnection && !p.sentHello && p.hello();
                setInterval(f, 40);
            });
            l = Ja();
            myName = '';
            z = new Zb(g, d, 0, -2E3);
            Aa = new Vb;
            p = new Xb;
            p.getServerAndConnect();
        }, Zb = function (b, f, k, g) {
            var d = this;
            this.x = k;
            this.y = g;
            this.minZoom = 1;
            this.maxZoom = 2;
            this.zoom = this.minZoom;
            var e = 0, h, a = 0, l = 0, c = 0, m = 0;
            this.setupContext = function (a) {
                var e = d.zoom;
                ha && (X -= .01, 0 > X &&
                (X = 0), e *= X);
                var f = b.width / 2 - d.x * e, g = b.height / 2 - d.y * e;
                a.setTransform(1, 0, 0, 1, 0, 0);
                a.translate(f + c, g + m);
                a.rotate(1 - X);
                a.scale(e, e);
            };
            this.applyShake = function (b) {
                if (ma) if (0 < e) {
                    var d = h;
                    250 > e && (d = e / 1E3 / .5 * h);
                    a += 1;
                    l += 1.1;
                    var f = Math.sin(a) * (d / 4), d = Math.cos(l) * d;
                    c = f;
                    m = d;
                    e -= b;
                } else m = c = 0;
            };
            this.update = function (a) {
                if (K || 1 != pa || W) Ta && (za = .3), fa += (za - fa) / 10, d.zoom = 1 / (n.devicePixelRatio / Qa) * fa * 1, d.zoom *= r;
                var b = d.x, c = d.y;
                if (x) b = x.x, c = x.y; else if (0 < ba) {
                    var e = A[ba];
                    e && (b += (e.x - b) / cameraSmooth, c += (e.y - c) / cameraSmooth);
                }
                d.x =
                    b;
                d.y = c;
                this.applyShake(a);
            };
            this.setPosition = function (a, b) {
                d.x = a;
                d.y = b;
            };
            this.shake = function () {ma && (e = 500, h = 15);};
            this.getBounds = function () {
                return [{
                    x: d.x - b.width / 2 / d.zoom,
                    y: d.y - b.height / 2 / d.zoom
                }, { x: d.x + b.width / 2 / d.zoom, y: d.y + b.height / 2 / d.zoom }];
            };
            this.getOuterBounds = function () {
                return [{
                    x: d.x - b.width / 2 / d.minZoom,
                    y: d.y - b.height / 2 / d.minZoom
                }, { x: d.x + b.width / 2 / d.minZoom, y: d.y + b.height / 2 / d.minZoom }];
            };
            this.getInnerBounds = function () {
                return [{ x: d.x - b.width / 2 / d.maxZoom, y: d.y - b.height / 2 / d.maxZoom }, {
                    x: d.x + b.width /
                        2 / d.maxZoom, y: d.y + b.height / 2 / d.maxZoom
                }];
            };
            this.startUILayer = function () {f.setTransform(1, 0, 0, 1, 0, 0);};
            this.reset = function () {
                this.x = 0;
                this.y = -2E3;
                za = 1.2;
            };
        }, Ea = function () {
            this.width;
            this.height;
            var b, f, k, g, d = void 0;
            this.y = this.x = 0;
            var e, h;
            this.canvas;
            this.frameWithCanvas = function (a, b, c) {
                this.width = a.width;
                this.height = a.height;
                this.canvas = a;
                e = b;
                h = c;
            };
            this.setFrameInfo = function (a, l) {
                d = l;
                b = a[1];
                f = a[2];
                this.width = a[3];
                this.height = a[4];
                k = a[5];
                g = a[6];
                e = -this.width * k;
                h = -this.height * g;
            };
            this.draw = function (a) {
                d ?
                    a.drawImage(d, b, f, this.width, this.height, e + this.x, h + this.y, this.width, this.height) : a.drawImage(this.canvas, 0, 0, this.width, this.height, e + this.x, h + this.y, this.width, this.height);
            };
            this.renderTintedFrame = function (a) {
                var g = s.createElement('canvas'), c = g.getContext('2d');
                g.width = this.width;
                g.height = this.height;
                var k = s.createElement('canvas');
                k.width = this.width;
                k.height = this.height;
                var n = k.getContext('2d');
                n.fillStyle = a;
                n.fillRect(0, 0, k.width, k.height);
                n.globalCompositeOperation = 'destination-atop';
                n.drawImage(d,
                    b, f, this.width, this.height, 0, 0, this.width, this.height);
                c.globalAlpha = 1;
                c.drawImage(k, 0, 0);
                a = new Ea;
                a.frameWithCanvas(g, e, h);
                return a;
            };
            this.getImageCopy = function () {
                var a = s.createElement('canvas');
                a.width = this.width;
                a.height = this.height;
                var e = a.getContext('2d');
                e.drawImage(d, b, f, this.width, this.height, 0, 0, this.width, this.height);
                var c = e.getImageData(0, 0, this.width, this.height);
                return { canvas: a, ctx: e, toData: c.data, to: c };
            };
            this.generateTintImage2 = function (a, g, c, k) {
                var n = s.createElement('canvas');
                n.width =
                    this.width;
                n.height = this.height;
                var m = n.getContext('2d');
                m.drawImage(d, b, f, this.width, this.height, 0, 0, this.width, this.height);
                for (var q = m.getImageData(0, 0, this.width, this.height), p = q.data, r = p.length, t = 0; t < r;) p[t] = p[t++] * (1 - k) + a * k, p[t] = p[t++] * (1 - k) + g * k, p[t] = p[t++] * (1 - k) + c * k, p[t] = .8 * p[t++];
                m.putImageData(q, 0, 0);
                a = new Ea;
                a.frameWithCanvas(n, e, h);
                return a;
            };
            this.generateTintImage = function (a, b, c, d) {
                var f = s.createElement('canvas');
                f.width = this.width;
                f.height = this.height;
                var g = f.getContext('2d');
                g.globalAlpha =
                    1;
                g.globalCompositeOperation = 'copy';
                g.drawImage(a[3], 0, 0);
                g.globalCompositeOperation = 'lighter';
                0 < b && (g.globalAlpha = b / 255, g.drawImage(a[0], 0, 0));
                0 < c && (g.globalAlpha = c / 255, g.drawImage(a[1], 0, 0));
                0 < d && (g.globalAlpha = d / 255, g.drawImage(a[2], 0, 0));
                a = new Ea;
                a.frameWithCanvas(f, e, h);
                return a;
            };
            this.generateRGBKs = function () {
                var a = [], e = s.createElement('canvas');
                e.getContext('2d');
                e.width = this.width;
                e.height = this.height;
                e = s.createElement('canvas');
                e.width = this.width;
                e.height = this.height;
                e = e.getContext('2d');
                e.drawImage(d, b, f, this.width, this.height, 0, 0, this.width, this.height);
                for (var c = e.getImageData(0, 0, this.width, this.height).data, g = c.length, h = this.getImageCopy(), k = this.getImageCopy(), n = this.getImageCopy(), e = this.getImageCopy(), m = 0; m < g; m += 4) h.toData[m] = c[m], h.toData[m + 1] = 0, h.toData[m + 2] = 0, h.toData[m + 3] = c[m + 3], k.toData[m] = 0, k.toData[m + 1] = c[m + 1], k.toData[m + 2] = 0, k.toData[m + 3] = c[m + 3], n.toData[m] = 0, n.toData[m + 1] = 0, n.toData[m + 2] = c[m + 2], n.toData[m + 3] = c[m + 3], e.toData[m] = 0, e.toData[m + 1] = 0, e.toData[m + 2] = 0, e.toData[m +
                3] = c[m + 3];
                h.ctx.putImageData(h.to, 0, 0);
                k.ctx.putImageData(k.to, 0, 0);
                n.ctx.putImageData(n.to, 0, 0);
                e.ctx.putImageData(e.to, 0, 0);
                c = new Image;
                c.src = h.canvas.toDataURL();
                h = new Image;
                h.src = k.canvas.toDataURL();
                k = new Image;
                k.src = n.canvas.toDataURL();
                n = new Image;
                n.src = e.canvas.toDataURL();
                a.push(c);
                a.push(h);
                a.push(k);
                a.push(n);
                return a;
            };
            this.renderToCanvas = function () {
                var a = s.createElement('canvas'), e = a.getContext('2d');
                a.width = this.width;
                a.height = this.height;
                var c = s.createElement('canvas');
                c.width = this.width;
                c.height = this.height;
                c.getContext('2d');
                d ? e.drawImage(d, b, f, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
                e.globalAlpha = 1;
                e.drawImage(c, 0, 0);
                return a;
            };
        }, Yb = function () {
            var b = {}, f = [], k = [], g = [], d = [];
            this.addAnimationInfo = function (e, d) {b[e] = d;};
            this.setAnimationInterval = function (e, d) {b[e].setInterval(d);};
            this.createAnimation = function (e) {
                e = b[e];
                var d = new yb;
                d.setup(e);
                return d;
            };
            this.runAnimation = function (b) {f.push(b);};
            this.runAnimationLayer2 =
                function (b) {k.push(b);};
            this.runAnimationBehind = function (b) {g.push(b);};
            this.addBlast = function (b, d, a, f, c) {
                var g = S.createAnimation('explosion');
                g.setScale(a);
                g.posX = b;
                g.posY = d;
                S.runAnimationBehind(g);
                a = ua;
                g = va;
                b = 1 - Math.sqrt((a - b) * (a - b) + (g - d) * (g - d)) / PLAY_DISTANCE;
                .01 < b && soundManager.playSound(SOUND_PLANE_EXPL, b * c, 1, f, null);
            };
            this.addExplosion = function (b, f, a, g) {
                var c;
                (c = !lb(b, f, 100)) || (c = !(50 > +new Date - D));
                c || (1 >= d.length && (c = new Explosion, c.init(b, f, a, g), d.push(c)), this.addBlast(b, f, 1, PLAY_RULE_MAX3, 1),
                    z.shake());
            };
            this.update = function (b) {
                for (var h in f) {
                    var a = f[h];
                    a.update(b);
                    a.deleting && (f.splice(h, 1), delete a);
                }
                for (h in g) a = g[h], a.update(b), a.deleting && (g.splice(h, 1), delete a);
                for (h in k) a = k[h], a.update(b), a.deleting && (k.splice(h, 1), delete a);
                for (var l in d) h = d[l], h.update(b), h.deleting && (d.splice(l, 1), delete h);
            };
            this.drawBehind = function (b) {
                for (var d in g) {
                    var a = g[d];
                    b.save();
                    b.translate(a.posX, a.posY);
                    b.scale(a.scaleX, a.scaleY);
                    b.rotate(a.rotation);
                    a.draw(b);
                    b.restore();
                }
            };
            this.drawLayer2 = function (b) {
                for (var d in k) {
                    var a =
                        k[d];
                    b.save();
                    b.translate(a.posX, a.posY);
                    b.scale(a.scaleX, a.scaleY);
                    b.rotate(a.rotation);
                    a.draw(b);
                    b.restore();
                }
            };
            this.draw = function (b) {
                for (var d in f) {
                    var a = f[d];
                    b.save();
                    b.translate(a.posX, a.posY);
                    b.scale(a.scaleX, a.scaleY);
                    b.rotate(a.rotation);
                    a.draw(b);
                    b.restore();
                }
            };
            this.drawExplosions = function (b) {for (var f in d) d[f].draw(b);};
        }, yb = function () {
            var b = 0, f = 0, k = 0;
            this.frames;
            this.frameCount = 0;
            this.deleting = !1;
            this.posY = this.posX = 0;
            this.scaleY = this.scaleX = 1;
            this.rotation = 0;
            this.alpha = 1;
            this.copy = function (b) {
                b =
                    new yb;
                b.frames = this.frames;
                b.frameCount = this.frameCount;
                b.deleting = this.deleting;
                b.posX = this.posX;
                b.posY = this.posY;
                b.scaleX = this.scaleX;
                b.scaleY = this.scaleY;
                b.rotation = this.rotation;
                b.alpha = this.alpha;
                b.setInterval(f);
                return b;
            };
            this.setup = function (b) {
                f = b.interval;
                this.frames = b.frames;
                this.frameCount = b.frames.length;
            };
            this.setInterval = function (b) {f = b;};
            this.update = function (g) {this.deleting || (k > f && (b++, k -= f), k += g, b >= this.frameCount && (this.deleting = !0));};
            this.setScale = function (b) {
                this.scaleY = this.scaleX =
                    b;
            };
            this.draw = function (f) {
                1 > this.alpha && (f.globalAlpha = this.alpha);
                this.frames[b].draw(f);
            };
        };
    gameSheetInfo = [['car', 223, 347, 22, 43, .5, .512], ['car_glow', 206, 141, 38, 59, .5, .508], ['car_l1_min', 226, 392, 20, 39, .5, .526], ['car_l2_min', 235, 61, 10, 28, .5, .446], ['car_l3_min', 170, 409, 22, 43, .5, .5], ['car_l3_min_glow', 183, 306, 38, 59, .5, .508], ['car_shock', 206, 2, 40, 57, .525, .526], ['core', 2, 2, 100, 100, .5, .5], ['core_charge', 2, 104, 100, 100, .5, .5], ['crown', 170, 454, 31, 27, .5, .5], ['decay_alert', 235, 91, 9, 20, .5, .5], ['energy', 2, 408, 82,
        82, .5, .5], ['energy2', 102, 308, 79, 79, .5, .5], ['grid', 104, 2, 100, 100, .5, .5], ['grid_green', 2, 206, 100, 100, .5, .5], ['grid_mask', 2, 308, 98, 98, .5, .505], ['grid_mask_hard', 104, 206, 98, 98, .5, .505], ['grid_red', 104, 104, 100, 100, .5, .5], ['pause', 194, 409, 30, 34, .5, .735], ['powerup_part', 204, 206, 42, 85, .5, .5], ['powerup_part1', 203, 445, 19, 29, .289, .5], ['powerup_part2', 223, 293, 22, 52, .386, .5], ['powerup_part3', 206, 61, 27, 78, .5, .5], ['powerup_redflail', 183, 367, 38, 40, .5, .5], ['tri', 86, 408, 82, 82, .5, .5]];
    var Pb = function () {
        this.tailAddJointInterval =
            50;
        this.timeToNextJoint = 0;
        this.tailJoints = [[]];
        this.trailTime = 400;
        this.trailTimeEffectStart = 600;
        this.trailEffectTime = 0;
        this.enabled = !1;
        this.width = 1.2;
        var b, f;
        this.fixedColor = !1;
        this.style;
        this.update = function (k) {
            var g = this.tailJoints.length - 1;
            if (0 >= this.timeToNextJoint && -1 < g) {
                this.timeToNextJoint = this.tailAddJointInterval;
                this.enabled && this.tailJoints[g].push({
                    x: b,
                    y: f,
                    origX: b,
                    origY: f,
                    t: D,
                    fx: (600 - Math.abs(this.trailEffectTime - 600)) / 600,
                    style: this.style
                });
                for (var d = 0; d <= g; d++) {
                    var e = this.tailJoints[d].length;
                    if (0 < e) {
                        e = D - this.tailJoints[d][0].t;
                        e > this.trailTime && (this.tailJoints[d].splice(0, 1), 0 == this.tailJoints[d].length && this.tailJoints.splice(d, 1));
                        break;
                    }
                }
            }
            for (var h = this.timeToNextJoint / 50, g = this.tailJoints.length - 1, d = 0; d <= g; d++) e = this.tailJoints[d].length, 1 >= e || (e = D - this.tailJoints[d][0].t, e > this.trailTime - this.tailAddJointInterval && (e = this.tailJoints[d][0].origY - this.tailJoints[d][1].origY, this.tailJoints[d][0].x = this.tailJoints[d][1].origX + (this.tailJoints[d][0].origX - this.tailJoints[d][1].origX) *
                h, this.tailJoints[d][0].y = this.tailJoints[d][1].origY + e * h));
            this.timeToNextJoint -= k;
            this.trailEffectTime = 0 > this.trailEffectTime ? 0 : this.trailEffectTime - k;
        };
        this.draw = function (b) {
            if ($a && V) for (var f = this.tailJoints.length, d = 0; d < f; d++) for (var e = this.tailJoints[d].length, h = 0; h < e - 1; h++) {
                b.strokeStyle = this.tailJoints[d][h].style;
                var a = h / e * (8 + 8 * this.tailJoints[d][h].fx);
                0 == a && (a = .1);
                b.lineWidth = a * this.width;
                b.beginPath();
                b.lineTo(this.tailJoints[d][h].x, this.tailJoints[d][h].y);
                b.lineTo(this.tailJoints[d][h +
                1].x, this.tailJoints[d][h + 1].y);
                b.stroke();
            }
        };
        this.setPosition = function (k, g) {
            b = k;
            f = g;
        };
        this.push = function () {this.tailJoints.push([]);};
        this.trailEffect = function () {this.trailEffectTime = 1200;};
        this.clear = function () {this.tailJoints = [[]];};
    }, Wb = function () {
        this.id = -1;
        this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
        this.energy = 255;
        this.nick = '';
        this.hue = 0;
        this.lastUpdateTime;
        var b = this.killedByID = 0, f, k, g = 0;
        this.canInterpolate = this.beingDeleted = !1;
        this.beginGraby = this.beginGrabX =
            this.blendIn = 0;
        this.flailGrabbed = !1;
        var d = 0, e = 0;
        this.update = function (b) {
            b *= .06;
            if (this.beingDeleted) {
                var a = A[this.killedByID];
                if (a) {
                    var f = Math.pow(g, 2), c;
                    this.flailGrabbed ? (c = a.flailX, a = a.flailY) : (c = a.x, a = a.y);
                    this.x = this.beginGrabX + (c - this.beginGrabX) * f;
                    this.y = this.beginGrabY + (a - this.beginGrabY) * f;
                }
                g += .07 * b;
                1 < g && delete A[this.id];
            } else f = da((D - this.lastUpdateTime) / $, 0, 1), this.prevX = this.x, this.prevY = this.y, c = f * (this.dstY - this.origY) + this.origY, this.x = f * (this.dstX - this.origX) + this.origX, this.y = c, d +=
                .01 * b, e += .08 * b;
            1 > this.blendIn && (this.blendIn += (1 - this.blendIn) / 8, .99 < this.blendIn && (this.blendIn = 1));
        };
        this.drawAfter = function (b) {};
        this.draw = function (h) {
            if (this.canInterpolate) {
                var a = this.x, l = this.y;
                this.beingDeleted && (a = this.beginGrabX, l = this.beginGrabY);
                h.save();
                h.translate(a, l);
                var c = ((Math.sin(e) + 1) / 2 * .6 + .4) * (1 - g);
                h.scale(2 * this.blendIn, 2 * this.blendIn);
                h.globalAlpha = c;
                f.draw(h);
                h.globalAlpha = 1;
                h.scale(1 / (2 * this.blendIn), 1 / (2 * this.blendIn));
                h.scale(1.5 * this.blendIn, 1.5 * this.blendIn);
                h.scale(1 *
                    this.blendIn, 1 * this.blendIn);
                h.globalAlpha = 1 - g;
                h.fillStyle = '#012426';
                h.beginPath();
                h.arc(0, 0, 35, 0, 2 * Math.PI);
                h.fill();
                h.closePath();
                h.restore();
                h.globalAlpha = .3 * (1 - g);
                kb(h, a, l, d, g, this.blendIn);
                h.globalAlpha = 1;
                h.save();
                h.translate(this.x, this.y);
                h.rotate(-d);
                b += .1;
                a = 1.2 - .05 * Math.sin(b);
                l = 1.2 + .05 * Math.sin(b);
                this.beingDeleted && (a *= .5 + .5 * (1 - g), l *= .5 + .5 * (1 - g));
                h.scale(a * this.blendIn, l * this.blendIn);
                h.globalAlpha = .8 * c;
                k.draw(h);
                h.globalAlpha = 1;
                q.frames.powerup_redflail.draw(h);
                h.restore();
            }
        };
        this.drawInput =
            function (b) {};
        this.drawInfo = function (b) {};
        this.updateNetwork = function (b, a, d) {
            var c;
            c = b.getFloat32(a, !0);
            a += 4;
            b = -b.getFloat32(a, !0);
            a += 4;
            this.origX = this.x;
            this.origY = this.y;
            this.dstX = 10 * c;
            this.dstY = 10 * b;
            d ? (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, f = q.frames.grid_mask_hard.renderTintedFrame('#00FFFF'), k = q.frames.grid_mask_hard.renderTintedFrame('#FF0000')) : this.canInterpolate = !0;
            this.lastUpdateTime = D;
            return a;
        };
        this.deleteNetwork = function (b, a) {
            if (R && 0 != this.killReason) return this.flailGrabbed =
                b.getUint8(a), a++, this.beingDeleted = !0, this.beginGrabX = this.x, this.beginGrabY = this.y, a;
            delete A[this.id];
            return ++a;
        };
        this.resume = function () {};
        this.cleanup = function () {};
        this.setKilledBy = function (b) {this.killedByID = b;};
    };
    n.onload = function () {
        L && Ib();
        null == F && (n.devicePixelRatio && (Qa = 1 < n.devicePixelRatio ? 2 : 1), F = new $b(s.getElementById('canvas')), n.addEventListener('resize', F.resize, !1), J = new Kb, J.addListeners(), n.requestAnimationFrame ? n.requestAnimationFrame(bb) : setInterval(bb, 1E3 / 60), m('#overlay').show());
        F.resize();
        fb();
    };
})(window, document, jQuery);