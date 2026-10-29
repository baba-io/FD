(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 861526, e => {
    "use strict";
    var t = e.i(998494)
      , i = e.i(377336)
      , s = e.i(562706);
    let a = {
        open: {
            loop: "ambience.open",
            spread: !0,
            highpass: 60,
            lowpass: 12e3
        },
        court: {
            loop: "ambience.court",
            spread: !0,
            highpass: 120,
            lowpass: 5e3
        },
        park: {
            loop: "ambience.park",
            spread: !0,
            highpass: 60,
            lowpass: 14e3
        },
        mall: {
            loop: "ambience.mall",
            spread: !1,
            highpass: 80,
            lowpass: 14e3
        }
    }
      , r = {
        gridworks: "open",
        [t.LESSON_MAP_ID]: "court",
        "drift-park": "park",
        [t.DRIFT_PARK_MAP_ID]: "park",
        "whoop-world": "mall",
        [t.WHOOP_WORLD_MAP_ID]: "mall"
    };
    e.s(["AMBIENCE_NAMES", 0, ["open", "court", "park", "mall"], "AmbienceBed", 0, class {
        context;
        name;
        nodes;
        sources;
        output;
        slot;
        stopped;
        constructor(e, t, r, n, o) {
            this.context = e,
            this.name = r,
            this.nodes = [],
            this.sources = [],
            this.stopped = !1;
            const h = a[r]
              , l = i.LOOPS[h.loop];
            this.slot = o ? new s.LoopSlot(h.loop,o,l.voices.max) : null,
            this.slot && (this.slot.priority = l.voices.importance);
            const c = e => (this.nodes.push(e),
            e)
              , u = e.currentTime;
            this.output = c(e.createGain()),
            this.output.gain.setValueAtTime(0, u),
            this.output.gain.setTargetAtTime(l.level, u, 2 / 3);
            const p = c(e.createBiquadFilter());
            p.type = "highpass",
            p.frequency.value = h.highpass;
            const d = c(e.createBiquadFilter());
            d.type = "lowpass",
            d.frequency.value = h.lowpass,
            p.connect(d).connect(this.output).connect(t),
            (h.spread && 1 === n.numberOfChannels ? [-.7, .7] : [null]).forEach( (t, i) => {
                let s = c(e.createBufferSource());
                s.buffer = n,
                s.loop = !0;
                let a = s;
                if (null !== t) {
                    let i = c(e.createStereoPanner());
                    i.pan.value = t;
                    let s = c(e.createGain());
                    s.gain.value = Math.SQRT1_2,
                    a = a.connect(i).connect(s)
                }
                a.connect(p),
                s.start(u, i * n.duration / 2),
                this.sources.push(s)
            }
            )
        }
        get nodeCount() {
            return this.nodes.length
        }
        stop(e=2) {
            if (this.stopped)
                return;
            this.stopped = !0,
            this.slot?.release();
            let t = this.context.currentTime;
            for (let i of (this.output.gain.cancelScheduledValues(t),
            this.output.gain.setTargetAtTime(0, t, Math.max(.005, e / 3)),
            this.sources[0].onended = () => {
                for (let e of this.nodes)
                    e.disconnect()
            }
            ,
            this.sources))
                i.stop(t + e + .1)
        }
    }
    , "ambienceBuffer", 0, function(e) {
        return i.LOOPS[a[e].loop].buffers.bed
    }
    , "ambienceForMap", 0, function(e) {
        return e && r[e] || "court"
    }
    ])
}
, 106801, e => {
    "use strict";
    let t = {
        "fx.time-resume": {
            url: "/sim/audio/fx/time-resume.wav",
            preload: !0
        },
        "car.exhaust-mid": {
            url: "/sim/audio/cars/exhaust-mid.wav"
        },
        "car.exhaust-high": {
            url: "/sim/audio/cars/exhaust-high.wav"
        },
        "car.exhaust-body": {
            url: "/sim/audio/cars/exhaust-body.wav"
        },
        "car.tire-skid": {
            url: "/sim/audio/cars/tire-skid.wav"
        },
        "drone.fpv-race-pass": {
            url: "/sim/audio/drone/fpv-race-pass.mp3",
            preload: !0
        },
        "drone.mini-quad-loop": {
            url: "/sim/audio/drone/mini-quad-loop.mp3",
            preload: !0
        },
        "drone.fly-by": {
            url: "/sim/audio/drone/fly-by.mp3"
        },
        "game.whoosh": {
            url: "/sim/audio/game/whoosh.mp3",
            preload: !0
        },
        "game.riser": {
            url: "/sim/audio/game/riser.mp3",
            preload: !0
        },
        "game.hit": {
            url: "/sim/audio/game/hit.mp3",
            preload: !0
        },
        "game.chimes": {
            url: "/sim/audio/game/chimes.mp3",
            preload: !0
        },
        "ui.toggle": {
            url: "/sim/audio/interface/toggle.mp3",
            preload: !0
        },
        "ui.switch": {
            url: "/sim/audio/interface/switch.mp3",
            preload: !0
        },
        "ui.tick": {
            url: "/sim/audio/interface/tick.mp3",
            preload: !0
        },
        "race.countdown": {
            url: "/sim/audio/race/countdown.mp3",
            preload: !0
        },
        "ui.hover": {
            url: "/sim/audio/interface/hover.mp3",
            preload: !0
        },
        "ui.click": {
            url: "/sim/audio/interface/click.mp3",
            preload: !0
        },
        "ui.confirm": {
            url: "/sim/audio/interface/confirm.mp3",
            preload: !0
        },
        "race.start": {
            url: "/sim/audio/race/start.mp3",
            preload: !0
        },
        "game.shot": {
            url: "/sim/audio/combat/shot.mp3",
            preload: !0
        },
        "game.hitmarker": {
            url: "/sim/audio/combat/hitmarker.mp3",
            preload: !0
        },
        "game.shield": {
            url: "/sim/audio/combat/shield.mp3",
            preload: !0
        },
        "game.puff": {
            url: "/sim/audio/combat/puff.mp3",
            preload: !0
        },
        "race.cheer": {
            url: "/sim/audio/race/cheer.mp3"
        },
        "impact.plastic-1": {
            url: "/sim/audio/impacts/plastic-1.mp3",
            preload: !0
        },
        "impact.plastic-2": {
            url: "/sim/audio/impacts/plastic-2.mp3",
            preload: !0
        },
        "impact.plastic-3": {
            url: "/sim/audio/impacts/plastic-3.mp3",
            preload: !0
        },
        "impact.plastic-4": {
            url: "/sim/audio/impacts/plastic-4.mp3",
            preload: !0
        },
        "impact.grass-1": {
            url: "/sim/audio/impacts/grass-1.mp3",
            preload: !0
        },
        "impact.grass-2": {
            url: "/sim/audio/impacts/grass-2.mp3",
            preload: !0
        },
        "impact.frame-crack": {
            url: "/sim/audio/impacts/frame-crack.mp3",
            preload: !0
        },
        "impact.scrape": {
            url: "/sim/audio/impacts/scrape.mp3",
            preload: !0
        },
        "ambience.airfield": {
            url: "/sim/audio/ambience/airfield.mp3"
        },
        "ambience.park": {
            url: "/sim/audio/ambience/park.mp3"
        },
        "ambience.mall": {
            url: "/sim/audio/ambience/mall.mp3"
        }
    }
      , i = new WeakMap;
    function s(e) {
        let t = i.get(e);
        return t || i.set(e, t = new Map),
        t
    }
    function a(e, i) {
        let a = s(e)
          , r = a.get(i);
        if (r)
            return r.promise;
        let n = t[i].url
          , o = {
            buffer: null,
            promise: null
        };
        return o.promise = (async () => {
            let t = await fetch(n);
            if (!t.ok)
                throw Error(`Audio ${t.status}: ${n}`);
            let i = await e.decodeAudioData(await t.arrayBuffer());
            return o.buffer = i,
            i
        }
        )(),
        o.promise.catch( () => {
            a.get(i) === o && a.delete(i)
        }
        ),
        a.set(i, o),
        o.promise
    }
    function r(e, t) {
        let i = s(e).get(t);
        return i ? i.buffer : (a(e, t).catch(e => console.warn("Sound could not load", e)),
        null)
    }
    e.s(["BUFFERS", 0, t, "loadBuffer", 0, a, "preloadBuffers", 0, function(e) {
        for (let i of Object.keys(t))
            t[i].preload && r(e, i)
    }
    , "readyBuffer", 0, r])
}
, 303344, e => {
    "use strict";
    var t = e.i(106801);
    let i = e.i(377336).LOOPS.car.buffers;
    Object.fromEntries(Object.entries(i).map( ([e,i]) => [e, t.BUFFERS[i].url]));
    let s = new WeakMap;
    e.s(["loadCarSamples", 0, function(e) {
        let a = s.get(e);
        if (a)
            return a;
        let r = Promise.all(Object.entries(i).map(async ([i,s]) => [i, await (0,
        t.loadBuffer)(e, s)])).then(e => Object.fromEntries(e)).catch(t => {
            throw s.delete(e),
            console.warn("Car recordings could not load", t),
            t
        }
        );
        return s.set(e, r),
        r
    }
    ])
}
, 437815, 1792, e => {
    "use strict";
    var t = e.i(931245)
      , i = e.i(879262)
      , s = e.i(303344)
      , a = e.i(189004)
      , r = e.i(234979);
    function n(e, t, i) {
        let s = t * Math.cos(i)
          , a = Math.sin(i);
        return Math.max(0, e) * Math.sqrt(s * s + a * a)
    }
    e.s(["tyreSlideSpeed", 0, n], 1792);
    let o = e => Math.max(0, Math.min(1, e));
    var h = e.i(377336)
      , l = e.i(562706);
    let c = h.LOOPS.car
      , u = c.voices;
    e.s(["CarAudioVoice", 0, class {
        context;
        ready;
        nodes;
        sources;
        mid;
        high;
        body;
        tire;
        midGain;
        highGain;
        engineGain;
        exhaustFilter;
        cutDepth;
        cut;
        limiter;
        tireGain;
        tireFilter;
        intakeGain;
        intakeFilter;
        airFilter;
        pan;
        output;
        shift;
        previousDistance;
        previousRpm;
        previousGear;
        lastTime;
        loaded;
        disposed;
        audible;
        silentSince;
        parked;
        links;
        slot;
        constructor(e, t, a, r, n, o=!1) {
            this.context = e,
            this.nodes = [],
            this.sources = [],
            this.previousDistance = null,
            this.previousRpm = 0,
            this.previousGear = NaN,
            this.lastTime = null,
            this.loaded = !1,
            this.disposed = !1,
            this.audible = !1,
            this.silentSince = -1 / 0,
            this.parked = !1,
            this.links = [],
            this.slot = n ? new l.LoopSlot("car",n,u.max) : null;
            const h = (0,
            i.carSoundProfile)(r)
              , p = e => (this.nodes.push(e),
            e);
            this.pan = p(e.createPanner()),
            this.pan.panningModel = "HRTF",
            this.pan.distanceModel = "inverse",
            this.pan.refDistance = c.distance.ref,
            this.pan.rolloffFactor = c.distance.rolloff,
            this.pan.maxDistance = c.distance.max,
            this.airFilter = p(e.createBiquadFilter()),
            this.airFilter.type = "lowpass",
            this.output = p(e.createGain()),
            this.output.gain.value = 0,
            this.pan.connect(this.airFilter).connect(this.output).connect(t),
            this.mid = p(e.createBufferSource()),
            this.mid.loop = !0,
            this.high = p(e.createBufferSource()),
            this.high.loop = !0,
            this.body = p(e.createBufferSource()),
            this.body.loop = !0,
            this.tire = p(e.createBufferSource()),
            this.tire.loop = !0,
            this.midGain = p(e.createGain()),
            this.midGain.gain.value = 0,
            this.highGain = p(e.createGain()),
            this.highGain.gain.value = 0;
            const d = p(e.createGain());
            d.gain.value = h.bodyMix;
            const f = p(e.createBiquadFilter());
            f.type = "lowpass",
            f.frequency.value = 800;
            const m = p(e.createBiquadFilter());
            m.type = "highpass",
            m.frequency.value = 45;
            const g = p(e.createBiquadFilter());
            g.type = "lowshelf",
            g.frequency.value = 280,
            g.gain.value = 10 * h.bodyMix,
            this.exhaustFilter = p(e.createBiquadFilter()),
            this.exhaustFilter.type = "lowpass",
            this.exhaustFilter.Q.value = .65,
            this.engineGain = p(e.createGain()),
            this.engineGain.gain.value = 0,
            this.cut = p(e.createGain()),
            this.cut.gain.value = 1,
            this.limiter = p(e.createOscillator()),
            this.limiter.type = "square",
            this.limiter.frequency.value = h.cut,
            this.cutDepth = p(e.createGain()),
            this.cutDepth.gain.value = 0,
            this.limiter.connect(this.cutDepth).connect(this.cut.gain),
            this.mid.connect(this.midGain).connect(m),
            this.high.connect(this.highGain).connect(m),
            this.body.connect(f).connect(d).connect(m),
            this.links.push([this.limiter, this.cutDepth], [this.mid, this.midGain], [this.high, this.highGain], [this.body, f]),
            this.shift = o ? p(e.createGain()) : null,
            this.shift?.connect(this.pan),
            m.connect(g).connect(this.exhaustFilter).connect(this.engineGain).connect(this.cut).connect(this.shift ?? this.pan),
            this.tireFilter = p(e.createBiquadFilter()),
            this.tireFilter.type = "bandpass",
            this.tireFilter.frequency.value = 2400,
            this.tireFilter.Q.value = .5,
            this.tireGain = p(e.createGain()),
            this.tireGain.gain.value = 0,
            this.tire.connect(this.tireFilter).connect(this.tireGain).connect(this.pan),
            this.links.push([this.tire, this.tireFilter]);
            const v = p(e.createBufferSource());
            v.buffer = a,
            v.loop = !0,
            this.intakeFilter = p(e.createBiquadFilter()),
            this.intakeFilter.type = "bandpass",
            this.intakeFilter.Q.value = .6,
            this.intakeGain = p(e.createGain()),
            this.intakeGain.gain.value = 0,
            v.connect(this.intakeFilter).connect(this.intakeGain).connect(this.pan),
            this.links.push([v, this.intakeFilter]),
            this.ready = (0,
            s.loadCarSamples)(e).then(e => {
                if (this.disposed)
                    return;
                let t = [this.mid, this.high, this.body, this.tire]
                  , i = [e.mid, e.high, e.body, e.tire];
                t.forEach( (e, t) => {
                    e.buffer = i[t],
                    e.start(0, (r + 1) * (.317 + .173 * t) % i[t].duration)
                }
                ),
                v.start(0, (r + 1) * .193 % a.duration),
                this.limiter.start(),
                this.sources.push(...t, v, this.limiter),
                this.loaded = !0
            }
            ).catch( () => {
                this.nodes.forEach(e => e.disconnect())
            }
            )
        }
        update(e, t, s, a, r, n, o, h) {
            let l = this.audibility(t, h);
            if (0 === l)
                return;
            let c = (0,
            i.carSoundProfile)(o)
              , u = (0,
            i.driftSound)(s, a, r, o);
            this.perform(e, t, l, r, n, o, c, u, !0)
        }
        updateRacing(e, t, s, a, h, l) {
            var c, u, p;
            let d, f = this.audibility(t, l);
            if (0 === f) {
                this.previousGear = NaN;
                return
            }
            let m = (0,
            i.carSoundProfile)(h)
              , g = function(e, t) {
                let {limiterRpm: i} = r.DRIFT_CAR_SPEC
                  , s = e.rpm ?? 0
                  , a = o(e.throttle ?? 0)
                  , h = o((s / i - .985) / .012) * o((a - .2) / .3)
                  , l = e.wheelSlipRatios
                  , c = e.wheelSlipAngles
                  , u = 0;
                if (l && c) {
                    let t = (t, i) => (n(e.speed, l[t], c[t]) + n(e.speed, l[i], c[i])) / 2;
                    u = Math.max(t(0, 1), t(2, 3))
                }
                return {
                    rpm: s * t.redline / i,
                    throttle: Math.sqrt(a),
                    load: o(s / i),
                    limiter: h,
                    tire: o((u - .5) / 6.5),
                    gear: e.gear ?? 0
                }
            }(s, m)
              , v = null !== this.lastTime && .25 > Math.abs(s.clock - this.lastTime) && a > 0 && a < .1;
            this.shift && v && g.gear !== this.previousGear && !Number.isNaN(this.previousGear) && (c = this.shift.gain,
            u = this.context.currentTime,
            p = g.gear > this.previousGear,
            d = r.DRIFT_CAR_SPEC.shiftTime,
            c.cancelScheduledValues(u),
            c.setTargetAtTime(p ? .26 : .7, u, .006),
            p || c.setTargetAtTime(1.18, u + .4 * d, .012),
            c.setTargetAtTime(1.14, u + d, .015),
            c.setTargetAtTime(1, u + d + .07, .06)),
            this.previousGear = g.gear,
            this.perform(e, t, f, s.clock, a, h, m, g, !1)
        }
        audibility(e, t) {
            if (this.disposed || !this.loaded)
                return 0;
            let s = this.context.currentTime;
            this.slot && (this.slot.priority = t ? u.importance * (0,
            i.carDistanceGain)(e) : 0);
            let a = t && (this.slot?.allowed() ?? !0) ? (0,
            i.carRangeGain)(e) : 0;
            return 0 === a ? (this.audible && (this.output.gain.setTargetAtTime(0, s, .055),
            this.silentSince = s),
            !this.parked && s - this.silentSince >= .5 && this.park(!0),
            this.audible = !1,
            this.previousDistance = null,
            this.lastTime = null,
            0) : (this.parked && this.park(!1),
            this.audible = !0,
            a)
        }
        perform(e, i, s, r, n, o, h, l, u) {
            let p = this.context.currentTime
              , d = null !== this.lastTime && .25 > Math.abs(r - this.lastTime) && n > 0 && n < .1
              , f = d && null !== this.previousDistance && 8 > Math.abs(i - this.previousDistance) ? (i - this.previousDistance) / n : 0;
            this.previousDistance = i,
            this.lastTime = r;
            let m = (0,
            t.dopplerFactor)(f);
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.pan.positionX, e.x),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.pan.positionY, e.y + .5),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.pan.positionZ, e.z),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.airFilter.frequency, (0,
            a.evaluateCurve)(c.curves.absorption, i)),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.output.gain, s * c.level);
            let g = d && u ? this.previousRpm + (l.rpm - this.previousRpm) * (1 - Math.exp(-n / .16)) : l.rpm;
            this.previousRpm = g;
            let v = h.pitch * m;
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.mid.playbackRate, Math.pow(g / 5200, .8) * v, .045),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.high.playbackRate, Math.pow(g / 6100, .8) * v, .045),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.body.playbackRate, (.65 + g / h.redline * .55) * v, .07);
            let y = Math.max(0, Math.min(1, (g / h.redline - .58) / .38));
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.midGain.gain, 1 - y, .09),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.highGain.gain, y, .09),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.exhaustFilter.frequency, h.exhaustHz * (.45 + .55 * l.throttle)),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.engineGain.gain, h.gain * (.28 + .34 * l.throttle) * (.8 + .2 * l.load));
            let b = Math.min(l.limiter, Math.max(0, (g / h.redline - .95) / .03));
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.cut.gain, 1 - .4 * b, .015),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.cutDepth.gain, .4 * b, .015),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.limiter.frequency, h.cut * (1 + .055 * Math.sin(3.1 * r + o))),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.intakeFilter.frequency, 1100 + .18 * g),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.intakeGain.gain, h.intake * l.throttle * l.load * .4),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.tire.playbackRate, h.tire * (1 + .035 * l.load) * m, .1);
            let w = .86 + .14 * Math.sin(7.3 * r + 1.9 * o);
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.tireGain.gain, .42 * Math.pow(l.tire, .85) * w, .085),
            ( (e, t, i=.055) => e.setTargetAtTime(t, p, i))(this.tireFilter.frequency, 1800 + 1200 * l.tire)
        }
        park(e) {
            for (let[t,i] of (this.parked = e,
            this.links))
                e ? t.disconnect() : t.connect(i)
        }
        dispose() {
            if (this.disposed)
                return;
            if (this.disposed = !0,
            this.slot?.release(),
            !this.loaded)
                return void this.nodes.forEach(e => e.disconnect());
            let e = this.context.currentTime;
            this.output.gain.cancelScheduledValues(e),
            this.output.gain.setTargetAtTime(0, e, .015),
            this.sources[0].onended = () => this.nodes.forEach(e => e.disconnect()),
            this.sources.forEach(t => t.stop(e + .1))
        }
    }
    ], 437815)
}
, 786016, e => {
    "use strict";
    var t = e.i(377336)
      , i = e.i(562706);
    let s = t.LOOPS.coaster;
    e.s(["CoasterRailVoice", 0, class {
        context;
        source;
        highpass;
        pan;
        output;
        layers;
        nodes;
        slot;
        disposed;
        audible;
        parked;
        silentSince;
        constructor(e, t, a, r=0, n) {
            this.context = e,
            this.layers = [],
            this.nodes = [],
            this.disposed = !1,
            this.audible = !1,
            this.parked = !1,
            this.silentSince = -1 / 0;
            const o = e => (this.nodes.push(e),
            e);
            this.slot = n ? new i.LoopSlot("coaster",n,s.voices.max) : null,
            this.source = o(e.createBufferSource()),
            this.source.buffer = a,
            this.source.loop = !0;
            const h = this.highpass = o(e.createBiquadFilter());
            h.type = "highpass",
            h.frequency.value = 30,
            this.source.connect(h),
            this.output = o(e.createGain()),
            this.output.gain.value = 0,
            this.pan = o(e.createPanner()),
            this.pan.panningModel = "HRTF",
            this.pan.distanceModel = "inverse",
            this.pan.refDistance = s.distance.ref,
            this.pan.rolloffFactor = s.distance.rolloff,
            this.pan.maxDistance = s.distance.max;
            const l = o(e.createBiquadFilter());
            for (const [i,s,a] of (l.type = "lowpass",
            l.frequency.value = 3800,
            this.output.connect(this.pan).connect(l).connect(t),
            [[100, .85, .55], [420, .3, .85], [1900, .13, .6]])) {
                const t = o(e.createBiquadFilter());
                t.type = "bandpass",
                t.frequency.value = i,
                t.Q.value = a;
                const r = o(e.createGain());
                r.gain.value = s,
                h.connect(t).connect(r).connect(this.output),
                this.layers.push(t)
            }
            this.source.start(0, Math.abs(.371 * r) % a.duration)
        }
        update(e, t, a, r, n) {
            let o, h, l, c, u, p, d, f, m, g, v, y, b;
            if (this.disposed)
                return;
            let w = this.context.currentTime
              , x = (h = Math.min(1, (o = Number.isFinite(t) ? Math.max(0, t) : 0) / 30),
            {
                gain: Math.pow(h, .85) * (1 - (l = Math.max(0, Math.min(1, (a - 30) / 45))) * l * (3 - 2 * l)),
                rumbleHz: 80 + 2.5 * Math.min(o, 45),
                railHz: 320 + 9 * Math.min(o, 45),
                airHz: 1100 + 35 * Math.min(o, 45),
                rate: .7 + .55 * h
            });
            if (this.slot && (this.slot.priority = n ? s.voices.importance * x.gain * (0,
            i.distanceAudibility)(a, s.distance.ref, s.distance.rolloff) : 0),
            !n || x.gain <= 0 || !(this.slot?.allowed() ?? !0)) {
                this.audible && (this.output.gain.setTargetAtTime(0, w, .12),
                this.silentSince = w),
                this.audible = !1,
                !this.parked && w - this.silentSince >= .5 && this.park(!0);
                return
            }
            this.parked && this.park(!1),
            this.audible = !0,
            c = this.pan.positionX,
            u = e.x,
            c.setTargetAtTime(u, w, .12),
            p = this.pan.positionY,
            d = e.y,
            p.setTargetAtTime(d, w, .12),
            f = this.pan.positionZ,
            m = e.z,
            f.setTargetAtTime(m, w, .12);
            let M = 1 + .09 * Math.sin(2.3 * r) + .045 * Math.sin(5.1 * r);
            g = this.output.gain,
            v = x.gain * M * .7,
            g.setTargetAtTime(v, w, .12),
            y = this.source.playbackRate,
            b = x.rate,
            y.setTargetAtTime(b, w, .12),
            [x.rumbleHz, x.railHz, x.airHz].forEach( (e, t) => {
                let i;
                return i = this.layers[t].frequency,
                i.setTargetAtTime(e, w, .12)
            }
            )
        }
        park(e) {
            this.parked = e,
            e ? this.source.disconnect() : this.source.connect(this.highpass)
        }
        dispose() {
            if (this.disposed)
                return;
            this.disposed = !0,
            this.slot?.release();
            let e = this.context.currentTime;
            this.output.gain.cancelScheduledValues(e),
            this.output.gain.setTargetAtTime(0, e, .015),
            this.source.onended = () => this.nodes.forEach(e => e.disconnect()),
            this.source.stop(e + .1)
        }
    }
    ])
}
, 579832, e => {
    "use strict";
    var t = e.i(786016)
      , i = e.i(437815)
      , s = e.i(11871)
      , a = e.i(861526)
      , r = e.i(106801)
      , n = e.i(719057)
      , o = e.i(189004)
      , h = e.i(302633)
      , l = e.i(138794)
      , c = e.i(236606)
      , u = e.i(931245)
      , p = e.i(254126)
      , d = e.i(573558)
      , f = e.i(377336)
      , m = e.i(383839)
      , g = e.i(562706);
    function v(e, t, i, s) {
        let a = Math.max(1, Math.floor(e.sampleRate * t))
          , r = e.createBuffer(1, a, e.sampleRate)
          , n = r.getChannelData(0)
          , o = (0,
        m.seededRandom)(s)
          , h = 0
          , l = 0
          , c = 0;
        for (let e = 0; e < a; e++) {
            let t = 2 * o() - 1;
            if (!i) {
                n[e] = t;
                continue
            }
            h = .99765 * h + .099046 * t,
            l = .963 * l + .2965164 * t,
            c = .57 * c + 1.0526913 * t,
            n[e] = (h + l + c + .1848 * t) * .11
        }
        return r
    }
    function y(e, t, i, s) {
        e.setTargetAtTime(t, s, i)
    }
    class b {
        context;
        mixer;
        voices;
        variator;
        noises;
        cooldowns = new Map;
        sceneOwner = 0;
        nextScene = 1;
        phaseState = "flight";
        sceneState = null;
        gestureInstalled = !1;
        started = !1;
        listener = {
            x: 0,
            y: 0,
            z: 0
        };
        source = {
            x: 0,
            y: 0,
            z: 0
        };
        absorbHz = (0,
        u.distanceLowpassHz)(0);
        rotors = null;
        hybrid = null;
        fadingMotors = [];
        motor;
        distance = 0;
        rotorSlot = null;
        windSlot = null;
        rotorsQuietSince = -1 / 0;
        wind = null;
        windQuietSince = -1 / 0;
        targets = [];
        bed = null;
        bedName = null;
        scrape = null;
        scrapeSlot = null;
        scrapeQuietSince = -1 / 0;
        host;
        sounds;
        others;
        constructor(e, t={}) {
            this.context = e,
            this.mixer = new c.Mixer(e,t.destination),
            this.sounds = t.sounds ?? {},
            this.motor = t.motor ?? "hybrid",
            this.voices = new g.VoiceManager,
            this.variator = new m.Variator(t.random ?? Math.random),
            this.noises = {
                pink: v(e, 1.5, !0, 1),
                white: v(e, .5, !1, 2),
                left: v(e, 1.5, !0, 3),
                right: v(e, 1.5, !0, 4)
            },
            this.host = {
                context: e,
                busInput: e => this.mixer.buses[e],
                noise: e => "white" === e ? this.noises.white : this.noises.pink,
                buffer: t => (0,
                r.readyBuffer)(e, t),
                random: () => this.variator.roll()
            },
            this.others = new d.OtherPilotsAudio(this,{
                enabled: t.otherPilots,
                kinds: t.otherKinds
            })
        }
        startGraph() {
            this.started || (this.started = !0,
            (0,
            r.preloadBuffers)(this.context))
        }
        installGestureResume() {
            if (this.gestureInstalled)
                return;
            this.gestureInstalled = !0;
            let e = () => {
                this.startGraph(),
                "suspended" === this.context.state && this.context.resume()
            }
            ;
            window.addEventListener("pointerdown", e),
            window.addEventListener("keydown", e)
        }
        claimScene(e) {
            let t = {
                id: this.nextScene++
            };
            return this.sceneOwner = t.id,
            this.sceneState = e ?? null,
            this.mixer.setState(this.sceneState ?? this.phaseState),
            this.mixer.setSceneGain(0),
            t
        }
        setSceneGain(e, t) {
            e.id === this.sceneOwner && this.mixer.setSceneGain(t)
        }
        releaseScene(e) {
            e.id === this.sceneOwner && (this.sceneOwner = 0,
            this.sceneState = null,
            this.mixer.setState(this.phaseState),
            this.mixer.setSceneGain(0))
        }
        setRoom(e, t) {
            e.id === this.sceneOwner && this.mixer.setRoom(t)
        }
        setAmbience(e, t) {
            if (e.id !== this.sceneOwner || t === this.bedName || (this.bed?.stop(),
            this.bed = null,
            this.bedName = t,
            !t))
                return;
            let i = e => {
                this.bedName !== t || this.bed || (this.bed = new a.AmbienceBed(this.context,this.mixer.buses.world,t,e,this.voices))
            }
              , s = (0,
            a.ambienceBuffer)(t)
              , n = (0,
            r.readyBuffer)(this.context, s);
            n ? i(n) : (0,
            r.loadBuffer)(this.context, s).then(i, e => console.warn("Ambience could not load", e))
        }
        prepareAmbience(e) {
            return (0,
            r.loadBuffer)(this.context, (0,
            a.ambienceBuffer)(e)).then( () => void 0)
        }
        get ambience() {
            return this.bedName
        }
        setScrape(e, t) {
            let i = this.context.currentTime;
            if ((0,
            n.scrapeGain)(e) > 0) {
                if (this.scrapeQuietSince = 1 / 0,
                !this.scrape) {
                    let e = (0,
                    r.readyBuffer)(this.context, f.LOOPS["impact.scrape"].buffers.slide)
                      , i = e ? this.droneSlot("impact.scrape") : null;
                    if (!e || !i)
                        return;
                    this.scrapeSlot = i,
                    this.scrape = new n.ScrapeVoice(this.context,this.mixer.buses.world,e,t, () => this.variator.roll())
                }
            } else if (this.scrape && (this.scrapeQuietSince > i && (this.scrapeQuietSince = i),
            i - this.scrapeQuietSince >= h.RELEASE_AFTER)) {
                this.scrape.release(),
                this.scrape = null,
                this.scrapeSlot?.release(),
                this.scrapeSlot = null;
                return
            }
            this.scrape?.set(e, t)
        }
        setMixState(e) {
            this.phaseState = e,
            this.sceneState || this.mixer.setState(e)
        }
        setMix(e) {
            this.mixer.setFaders(e)
        }
        setVisible(e) {
            this.mixer.setVisible(e)
        }
        get mutesInBackground() {
            return this.mixer.mutesInBackground
        }
        busInput(e) {
            return this.mixer.buses[e]
        }
        otherMotorsInput() {
            return this.mixer.otherMotors
        }
        createCoasterVoice(e) {
            return new t.CoasterRailVoice(this.context,this.mixer.buses.world,this.noises.pink,e,this.voices)
        }
        createCarVoice(e, t=!1) {
            return new i.CarAudioVoice(this.context,this.mixer.buses.world,this.noises.pink,e,this.voices,t)
        }
        play(e, t={}) {
            let i = this.sounds[e] ?? f.SOUNDS[e];
            if ("running" !== this.context.state)
                return null;
            let s = {
                ...i.defaults,
                ...t.params
            };
            if (i.requires) {
                let e = s[i.requires];
                if (!Number.isFinite(e) || !(e > 0))
                    return null
            }
            let a = this.context.currentTime
              , r = i.cooldown;
            if (r && a - (this.cooldowns.get(r.group) ?? -1 / 0) < r.seconds)
                return null;
            let n = i.layers.reduce( (e, t) => "sample" === t.kind ? Math.max(e, t.takes.length) : e, 1)
              , h = this.variator.next(e, n, i.variation);
            i.layers.some(e => "sample" === e.kind && e.takes.length > 1 && e.takes.length < n) && (h.layerTakes = i.layers.map( (t, i) => "sample" === t.kind && t.takes.length > 1 && t.takes.length < n ? this.variator.pick(`${e}#${i}`, t.takes.length) : h.take));
            let l = Math.max(0, t.level ?? 1) * (0,
            o.resolveValue)(i.level, s, 1) * h.level
              , c = t.at && i.distance ? t.at : null
              , u = c && i.distance ? (0,
            g.distanceAudibility)(Math.hypot(c.x - this.listener.x, c.y - this.listener.y, c.z - this.listener.z), i.distance.ref, i.distance.rolloff) : 1
              , d = new p.OneShotVoice(e,i.voices.importance * l * u,this.context,e => this.voices.release(e));
            return this.voices.admit(d, i.voices.max) ? d.build(i, this.host, t, s, h) ? (r && this.cooldowns.set(r.group, a),
            i.duck && this.mixer.duck(i.duck, t.delay),
            d) : (this.voices.release(d),
            d.discard(),
            null) : null
        }
        setListener(e) {
            this.listener = {
                x: e.x,
                y: e.y,
                z: e.z
            };
            let t = this.context.listener
              , i = this.context.currentTime;
            t.positionX ? (y(t.positionX, e.x, .035, i),
            y(t.positionY, e.y, .035, i),
            y(t.positionZ, e.z, .035, i),
            y(t.forwardX, e.forwardX, .035, i),
            y(t.forwardY, e.forwardY, .035, i),
            y(t.forwardZ, e.forwardZ, .035, i),
            y(t.upX, e.upX, .035, i),
            y(t.upY, e.upY, .035, i),
            y(t.upZ, e.upZ, .035, i)) : (t.setPosition(e.x, e.y, e.z),
            t.setOrientation(e.forwardX, e.forwardY, e.forwardZ, e.upX, e.upY, e.upZ))
        }
        setSource(e) {
            this.source = {
                x: e.x,
                y: e.y,
                z: e.z
            },
            this.rotors?.place(this.source),
            this.hybrid?.place(this.source)
        }
        setDistance(e) {
            this.absorbHz = (0,
            u.distanceLowpassHz)(e),
            this.distance = Number.isFinite(e) ? Math.max(0, e) : 0,
            this.rotors?.setAbsorption(this.absorbHz),
            this.hybrid?.setAbsorption(this.absorbHz),
            this.hybrid?.setPerspective(this.distance, (0,
            u.onboardAmount)(this.distance))
        }
        setAirspeed(e, t=1, i=0) {
            let s = this.context.currentTime
              , a = Number.isFinite(e) ? Math.max(0, e) : 0
              , r = (0,
            u.windGain)(a) * t;
            if (r > 1e-4)
                this.windQuietSince = 1 / 0,
                !this.wind && (this.windSlot = this.droneSlot("drone.wind")) && (this.wind = new h.WindVoice(this.context,this.mixer.buses.wind,this.noises.pink,[this.noises.left, this.noises.right],a));
            else if (this.wind && (this.windQuietSince > s && (this.windQuietSince = s),
            s - this.windQuietSince >= h.RELEASE_AFTER)) {
                this.wind.release(),
                this.wind = null,
                this.windSlot?.release(),
                this.windSlot = null;
                return
            }
            this.wind?.set(a, r, i)
        }
        setMotors(e, t, i, a="freestyle", r=0) {
            if ("hybrid" === this.motor)
                return void this.setHybridMotors(e, t, i, a, r);
            let n = this.context.currentTime
              , o = s.DRONE_PROFILES[a]
              , l = o.sound
              , c = Math.min(h.MAX_FREQ, .45 * this.context.sampleRate)
              , p = Number.isFinite(i) && i > 0 ? i : 1
              , d = !1;
            for (let i = 0; i < h.MOTOR_COUNT; i++) {
                let s = 1 + .0015 * Math.sin(31 * n + 1.7 * i) + 7e-4 * Math.sin(73 * n + i)
                  , a = 1 + .025 * Math.sin(47 * n + 2.3 * i);
                this.targets[i] = (0,
                h.motorTargets)(e[i], t, l, o.blades, p, s, a, u.MOTOR_DETUNE[i]),
                d ||= this.targets[i].audible
            }
            if (d)
                this.rotorsQuietSince = 1 / 0,
                !this.rotors && (this.rotorSlot = this.droneSlot("drone.rotors")) && (this.rotors = new h.RotorVoice(this.context,this.mixer.buses.motors,this.noises.pink,this.source,this.absorbHz));
            else if (this.rotors && (this.rotorsQuietSince > n && (this.rotorsQuietSince = n),
            n - this.rotorsQuietSince >= h.RELEASE_AFTER)) {
                this.rotors.release(),
                this.rotors = null,
                this.rotorSlot?.release(),
                this.rotorSlot = null;
                return
            }
            if (this.rotors)
                for (let e = 0; e < h.MOTOR_COUNT; e++)
                    this.rotors.setMotor(e, this.targets[e], l, c)
        }
        droneSlot(e) {
            let {voices: t} = f.LOOPS[e]
              , i = new g.LoopSlot(e,this.voices,t.max);
            return (i.priority = t.importance,
            i.allowed()) ? i : (i.release(),
            null)
        }
        get droneNodeCount() {
            return (this.rotors?.nodeCount ?? 0) + (this.hybrid?.nodeCount ?? 0) + (this.wind?.nodeCount ?? 0) + this.fadingMotors.reduce( (e, t) => e + t.voice.nodeCount, 0)
        }
        setHybridMotors(e, t, i, s, a) {
            let r = this.context.currentTime;
            if (this.releaseFadedMotors(r),
            (0,
            l.motorsAudible)(e, t, s))
                this.rotorsQuietSince = 1 / 0,
                this.hybrid && this.hybrid.craft !== s && this.fadeOutHybrid(r),
                !this.hybrid && (this.rotorSlot = this.droneSlot("drone.motor")) && (this.hybrid = this.createMotorVoice(s, "motors", this.source),
                this.hybrid.setPerspective(this.distance, (0,
                u.onboardAmount)(this.distance)));
            else if (this.hybrid && (this.rotorsQuietSince > r && (this.rotorsQuietSince = r),
            r - this.rotorsQuietSince >= h.RELEASE_AFTER))
                return void this.releaseHybrid();
            this.hybrid?.update({
                motors: e,
                armed: t,
                doppler: i,
                inflow: Number.isFinite(a) ? a : 0
            })
        }
        fadeOutHybrid(e) {
            let t = this.hybrid;
            t && (t.setLevel(0),
            this.fadingMotors.push({
                voice: t,
                until: e + .15
            }),
            this.hybrid = null,
            this.rotorSlot?.release(),
            this.rotorSlot = null)
        }
        releaseFadedMotors(e, t=!1) {
            for (let i = this.fadingMotors.length - 1; i >= 0; i--)
                (t || !(e < this.fadingMotors[i].until)) && (this.fadingMotors[i].voice.release(),
                this.fadingMotors.splice(i, 1))
        }
        releaseHybrid() {
            this.hybrid?.release(),
            this.hybrid = null,
            this.rotorSlot?.release(),
            this.rotorSlot = null
        }
        createMotorVoice(e, t, i=null, s={}) {
            return new l.HybridMotorVoice(this.context,s.output ?? this.mixer.buses[t],{
                craft: e,
                random: s.random ?? ( () => this.variator.roll()),
                pose: i,
                absorbHz: this.absorbHz,
                distance: s.distance
            })
        }
        dispose() {
            this.rotors?.release(),
            this.rotors = null,
            this.releaseHybrid(),
            this.releaseFadedMotors(this.context.currentTime, !0),
            this.wind?.release(),
            this.wind = null,
            this.windSlot?.release(),
            this.windSlot = null,
            this.others.dispose()
        }
        suspend() {
            "running" === this.context.state && this.context.suspend()
        }
        resume() {
            this.startGraph(),
            "suspended" === this.context.state && this.context.resume()
        }
    }
    let w = null;
    e.s(["DroneAudioEngine", 0, b, "getDroneAudio", 0, function() {
        if (w)
            return w;
        let e = function() {
            if ("u" > typeof AudioContext)
                return AudioContext
        }();
        if (!e)
            return null;
        try {
            return (w = new b(new e)).installGestureResume(),
            w
        } catch {
            return null
        }
    }
    ])
}
, 138794, e => {
    "use strict";
    var t = e.i(11871)
      , i = e.i(106801)
      , s = e.i(189004)
      , a = e.i(302633)
      , r = e.i(931245)
      , n = e.i(377336)
      , o = e.i(383839);
    let h = n.LOOPS["drone.motor"]
      , l = [.4, -.4, .22, -.22]
      , c = new Float32Array(9).map( (e, t) => Math.sin(t / 8 * Math.PI / 2))
      , u = new Float32Array(9).map( (e, t) => Math.cos(t / 8 * Math.PI / 2));
    function p(e, t, i, s) {
        e.setTargetAtTime(t, s, i)
    }
    let d = new WeakMap
      , f = new WeakMap;
    class m {
        context;
        region;
        random;
        gain;
        grains;
        current;
        rate;
        silentSince;
        constructor(e, t, i, s) {
            this.context = e,
            this.region = i,
            this.random = s,
            this.grains = [],
            this.current = null,
            this.rate = 1,
            this.silentSince = 1 / 0,
            this.gain = e.createGain(),
            this.gain.gain.value = 0,
            this.gain.connect(t)
        }
        get nodeCount() {
            return 1 + 2 * this.grains.length
        }
        update(e, t, i, s) {
            p(this.gain.gain, s * this.region.gain, .028, e);
            for (let t = this.grains.length - 1; t >= 0; t--) {
                let i = this.grains[t];
                i !== this.current && i.stopAt <= e && (i.source.disconnect(),
                i.gain.disconnect(),
                this.grains.splice(t, 1))
            }
            let a = this.current;
            if (a && (a.position += this.rate * t),
            s < 1e-4) {
                this.silentSince > e && (this.silentSince = e),
                a && e - this.silentSince >= .3 ? e - a.started >= .09 && this.fadeOut(a, e) : a && this.handOver(a, e, !0);
                return
            }
            for (let t of (this.silentSince = 1 / 0,
            this.rate = i,
            this.grains))
                p(t.source.playbackRate, i, .035, e);
            a ? this.handOver(a, e, !1) : this.start(e)
        }
        handOver(e, t, i) {
            let s = (this.region.end - e.position) / Math.max(.05, this.rate);
            t - e.started >= .09 && (!i && t >= e.switchAt || s < .16) && (this.fadeOut(e, t),
            this.start(t))
        }
        start(e) {
            let t = (0,
            i.readyBuffer)(this.context, this.region.buffer);
            if (!t)
                return;
            let {start: s, end: a} = this.region
              , r = .45 + .6500000000000001 * this.random()
              , n = a - s
              , o = Math.min(n / 2, .46499999999999997 * Math.max(.5, this.rate))
              , h = s + this.random() * (n - o)
              , l = this.context.createBufferSource();
            l.buffer = t,
            l.loop = !0,
            l.loopStart = s,
            l.loopEnd = a,
            l.playbackRate.value = this.rate;
            let u = this.context.createGain();
            u.gain.value = 0,
            u.gain.setValueCurveAtTime(c, e, .08),
            l.connect(u).connect(this.gain),
            l.start(e, h);
            let p = {
                source: l,
                gain: u,
                started: e,
                switchAt: e + r,
                position: h,
                stopAt: 1 / 0
            };
            this.grains.push(p),
            this.current = p
        }
        fadeOut(e, t) {
            e.gain.gain.setValueCurveAtTime(u, t, .08),
            e.stopAt = t + .08 + .01;
            try {
                e.source.stop(e.stopAt)
            } catch {}
            this.current === e && (this.current = null)
        }
        release() {
            for (let e of this.grains) {
                try {
                    e.source.stop()
                } catch {}
                e.source.disconnect(),
                e.gain.disconnect()
            }
            this.grains = [],
            this.current = null,
            this.gain.disconnect()
        }
    }
    e.s(["HybridMotorVoice", 0, class {
        context;
        options;
        craft;
        nodes;
        sources;
        body;
        rip;
        synths;
        noiseFilter;
        noiseGain;
        frame;
        bark;
        shelf;
        chop;
        chopDepth;
        lfo;
        level;
        panner;
        absorb;
        reflection;
        reflectionGain;
        weights;
        load;
        onboard;
        distance;
        last;
        wander;
        constructor(e, i, s) {
            this.context = e,
            this.options = s,
            this.nodes = [],
            this.sources = [],
            this.synths = [],
            this.panner = null,
            this.absorb = null,
            this.reflection = null,
            this.reflectionGain = null,
            this.weights = [],
            this.load = r.IDLE_LOAD,
            this.onboard = 1,
            this.distance = 0,
            this.last = -1,
            this.wander = 0;
            const n = e => (this.nodes.push(e),
            e)
              , c = this.craft = s.craft
              , u = s.random
              , p = n(e.createGain());
            if (this.frame = n(e.createBiquadFilter()),
            this.frame.type = "peaking",
            this.frame.frequency.value = r.CRAFT_MOTORS[c].frameHz,
            this.frame.Q.value = 1.2,
            this.frame.gain.value = 0,
            this.bark = n(e.createBiquadFilter()),
            this.bark.type = "peaking",
            this.bark.frequency.value = 2600,
            this.bark.Q.value = .9,
            this.bark.gain.value = 0,
            this.shelf = n(e.createBiquadFilter()),
            this.shelf.type = "highshelf",
            this.shelf.frequency.value = 3500,
            this.shelf.gain.value = 0,
            this.chop = n(e.createGain()),
            this.level = n(e.createGain()),
            p.connect(this.frame).connect(this.bark).connect(this.shelf).connect(this.chop).connect(this.level),
            this.lfo = n(e.createOscillator()),
            this.lfo.type = "triangle",
            this.lfo.frequency.value = 10,
            this.chopDepth = n(e.createGain()),
            this.chopDepth.gain.value = 0,
            this.lfo.connect(this.chopDepth).connect(this.chop.gain),
            this.sources.push(this.lfo),
            s.pose) {
                const t = s.distance ?? h.distance
                  , a = this.panner = n(e.createPanner());
                a.panningModel = "equalpower",
                a.distanceModel = "inverse",
                a.refDistance = t.ref,
                a.maxDistance = t.max ?? 1e4,
                a.rolloffFactor = t.rolloff ?? 1,
                a.coneInnerAngle = 360,
                a.coneOuterAngle = 0,
                a.coneOuterGain = 0,
                this.placeNow(s.pose);
                const r = this.absorb = n(e.createBiquadFilter());
                r.type = "lowpass",
                r.frequency.value = s.absorbHz ?? 14e3,
                r.Q.value = .5,
                this.level.connect(a).connect(r).connect(i),
                this.reflection = n(e.createDelay(.1)),
                this.reflection.delayTime.value = .004,
                this.reflectionGain = n(e.createGain()),
                this.reflectionGain.gain.value = 0,
                r.connect(this.reflection).connect(this.reflectionGain).connect(i)
            } else
                this.level.connect(i);
            const g = r.CRAFT_MOTORS[c];
            this.body = g.body.map( ({region: t}) => new m(e,p,r.MOTOR_REGIONS[t],u)),
            this.rip = new m(e,p,r.MOTOR_REGIONS["f2.rip"],u);
            const v = function(e, i) {
                let s = f.get(e);
                s || f.set(e, s = new Map);
                let a = s.get(i);
                if (!a) {
                    let r = t.DRONE_PROFILES[i].sound.harmonics
                      , n = new Float32Array(r.length + 1)
                      , o = new Float32Array(r.length + 1);
                    r.forEach( (e, t) => {
                        o[t + 1] = e
                    }
                    ),
                    a = e.createPeriodicWave(n, o),
                    s.set(i, a)
                }
                return a
            }(e, c);
            for (let t = 0; t < a.MOTOR_COUNT; t++) {
                const i = n(e.createStereoPanner());
                i.pan.value = l[t],
                i.connect(p);
                const s = n(e.createOscillator());
                s.setPeriodicWave(v),
                s.frequency.value = 80;
                const a = n(e.createGain());
                a.gain.value = 0,
                s.connect(a).connect(i);
                const r = n(e.createOscillator());
                r.type = "sine",
                r.frequency.value = 80;
                const o = n(e.createGain());
                o.gain.value = 0,
                r.connect(o).connect(i),
                this.sources.push(s, r),
                this.synths.push({
                    tone: s,
                    toneGain: a,
                    whine: r,
                    whineGain: o,
                    drift: 0
                })
            }
            const y = n(e.createBufferSource());
            y.buffer = function(e) {
                let t = d.get(e);
                if (t)
                    return t;
                let i = Math.floor(6.37 * e.sampleRate)
                  , s = (t = e.createBuffer(1, i, e.sampleRate)).getChannelData(0)
                  , a = (0,
                o.seededRandom)(45)
                  , r = 0
                  , n = 0
                  , h = 0;
                for (let e = 0; e < i; e++) {
                    let t = 2 * a() - 1;
                    r = .99765 * r + .099046 * t,
                    n = .963 * n + .2965164 * t,
                    h = .57 * h + 1.0526913 * t,
                    s[e] = (r + n + h + .1848 * t) * .11
                }
                return d.set(e, t),
                t
            }(e),
            y.loop = !0,
            this.noiseFilter = n(e.createBiquadFilter()),
            this.noiseFilter.type = "bandpass",
            this.noiseFilter.frequency.value = 1200,
            this.noiseFilter.Q.value = t.DRONE_PROFILES[c].sound.ductQ,
            this.noiseGain = n(e.createGain()),
            this.noiseGain.gain.value = 0,
            y.connect(this.noiseFilter).connect(this.noiseGain).connect(p),
            this.sources.push(y);
            const b = e.currentTime;
            for (const e of this.sources)
                e === y ? y.start(b, 6.37 * u()) : e.start(b)
        }
        get nodeCount() {
            return this.nodes.length + this.rip.nodeCount + this.body.reduce( (e, t) => e + t.nodeCount, 0)
        }
        placeNow(e) {
            let t = this.panner;
            t.positionX ? (t.positionX.value = e.x,
            t.positionY.value = e.y,
            t.positionZ.value = e.z) : t.setPosition(e.x, e.y, e.z)
        }
        place(e) {
            let t = this.panner;
            if (!t)
                return;
            let i = this.context.currentTime;
            t.positionX ? (p(t.positionX, e.x, .035, i),
            p(t.positionY, e.y, .035, i),
            p(t.positionZ, e.z, .035, i)) : t.setPosition(e.x, e.y, e.z)
        }
        setAbsorption(e) {
            this.absorb && p(this.absorb.frequency, e, .035, this.context.currentTime)
        }
        setPerspective(e, t) {
            this.distance = Number.isFinite(e) ? Math.max(0, e) : 0,
            this.onboard = Math.max(0, Math.min(1, t))
        }
        setLevel(e) {
            this.last < 0 ? this.level.gain.value = Math.max(0, e) : p(this.level.gain, Math.max(0, e), .028, this.context.currentTime)
        }
        update(e) {
            let i = this.context
              , n = i.currentTime
              , o = this.last < 0
              , h = o ? 0 : Math.max(0, Math.min(.1, n - this.last));
            this.last = n;
            let l = this.craft
              , c = t.DRONE_PROFILES[l]
              , u = c.sound
              , d = r.CRAFT_MOTORS[l]
              , f = c.blades
              , m = Number.isFinite(e.doppler) && e.doppler > 0 ? e.doppler : 1
              , g = Math.min(18e3, .45 * i.sampleRate)
              , v = this.options.random
              , y = 0
              , b = 0;
            for (let t = 0; t < a.MOTOR_COUNT; t++) {
                let i = (0,
                r.motorToRpm)(e.motors[t], e.armed, 1);
                y += i / a.MOTOR_COUNT,
                b += i * i / a.MOTOR_COUNT
            }
            let w = y * u.maxRpm / 60;
            o && (this.load = {
                ...r.IDLE_LOAD,
                share: y
            }),
            this.load = (0,
            r.nextMotorLoad)(this.load, {
                share: y,
                thrust: b,
                inflow: e.inflow,
                shaftHz: w,
                pitch: c.flight.prop.pitch,
                induced: (0,
                r.inducedSpeed)(c.quad.mass, c.propRadius)
            }, h);
            let {punch: x, brake: M, rip: k, wash: T} = this.load
              , R = this.onboard
              , S = 1 - R
              , A = y > 0;
            this.wander = Math.max(-.006, Math.min(.006, .995 * this.wander + (v() - .5) * .0012));
            let F = 1 + this.wander + .002 * Math.sin(.71 * n)
              , O = A ? (0,
            s.evaluateCurve)(r.MOTOR_CURVES.body, y) * d.levels.body * u.gain * (1 + .35 * x) * (1 - .3 * M) * (.9 + .1 * S) : 0;
            (0,
            r.bodyWeights)(d.body, y, this.weights),
            this.body.forEach( (e, t) => {
                let i = d.body[t]
                  , s = (0,
                r.regionRate)(e.region, w, f, i.pitch ?? 1) * m * F;
                e.update(n, h, s, O * this.weights[t])
            }
            );
            let _ = A ? (0,
            s.evaluateCurve)(r.MOTOR_CURVES.rip, Math.min(1, k + .5 * x)) * d.levels.rip * u.gain * (.35 + .65 * S) : 0;
            this.rip.update(n, h, (0,
            r.regionRate)(this.rip.region, w, f, d.ripPitch) * m * F, _);
            for (let t = 0; t < a.MOTOR_COUNT; t++) {
                let i = this.synths[t];
                i.drift = Math.max(-.004, Math.min(.004, .99 * i.drift + (v() - .5) * 8e-4));
                let o = 1 + i.drift + .0015 * Math.sin(31 * n + 1.7 * t) + 7e-4 * Math.sin(73 * n + t)
                  , h = 1 + .025 * Math.sin(47 * n + 2.3 * t)
                  , l = (0,
                r.motorToRpm)(e.motors[t], e.armed, 1)
                  , c = l * u.maxRpm * r.MOTOR_DETUNE[t]
                  , y = (0,
                r.isAudibleRpm)(c)
                  , b = f * c / 60 * m * o
                  , w = u.polePairs * c / 60 * m * o;
                p(i.tone.frequency, (0,
                a.clampFreq)(b), .035, n),
                p(i.toneGain.gain, y && b < g ? (0,
                s.evaluateCurve)(r.MOTOR_CURVES.tone, l) * d.levels.tone * u.gain * h * (1 + .5 * x) : 0, .028, n),
                p(i.whine.frequency, (0,
                a.clampFreq)(w), .035, n),
                p(i.whineGain.gain, y && w < g ? (0,
                s.evaluateCurve)(r.MOTOR_CURVES.whine, l) * d.levels.whine * u.whine * u.gain * (.55 + .9 * R) : 0, .028, n)
            }
            let E = f * w * m;
            p(this.noiseFilter.frequency, (0,
            a.clampFreq)(Math.max(400, 2.4 * E * (1 - .35 * T - .3 * M))), .035, n),
            p(this.noiseGain.gain, A ? (0,
            s.evaluateCurve)(r.MOTOR_CURVES.noise, y) * d.levels.noise * u.noise * u.gain * (1 + .6 * x + 1.5 * M + 2 * T) * (.8 + .4 * S) : 0, .028, n);
            let q = .4 * T;
            p(this.chop.gain, 1 - q, .028, n),
            p(this.chopDepth.gain, q, .028, n),
            p(this.lfo.frequency, 8 + 5 * v(), .12, n),
            p(this.bark.gain, 7 * x + 2 * k, .028, n),
            p(this.frame.gain, 7 * R - 1, .035, n),
            p(this.shelf.gain, 2 * S - 3 * R, .035, n),
            this.reflection && this.reflectionGain && (p(this.reflection.delayTime, Math.max(.002, Math.min(.025, .0045 * this.distance)), .1, n),
            p(this.reflectionGain.gain, .32 * S, .028, n))
        }
        release() {
            for (let e of this.sources)
                try {
                    e.stop()
                } catch {}
            for (let e of this.body)
                e.release();
            for (let e of (this.rip.release(),
            this.nodes))
                e.disconnect()
        }
    }
    , "loadMotorBuffers", 0, function(e) {
        return Promise.all(Object.values(h.buffers).map(t => (0,
        i.loadBuffer)(e, t)))
    }
    , "motorsAudible", 0, function(e, i, s) {
        let n = t.DRONE_PROFILES[s].sound.maxRpm;
        for (let t = 0; t < a.MOTOR_COUNT; t++)
            if ((0,
            r.isAudibleRpm)((0,
            r.motorToRpm)(e[t], i, n)))
                return !0;
        return !1
    }
    ])
}
, 236606, e => {
    "use strict";
    var t = e.i(859324)
      , i = e.i(393038);
    let s = {
        knee: .7,
        ceiling: .8413951416451951
    };
    function a(e=-3, t=20) {
        return Math.pow(Math.pow(10, -(e + (0 - e) / t) / 20), .6)
    }
    function r(e) {
        return e.muted || !Number.isFinite(e.gain) ? 0 : Math.max(0, Math.min(1, e.gain))
    }
    let n = {
        master: {
            gain: 1,
            muted: !1
        },
        categories: Object.fromEntries(t.BUS_IDS.map(e => [e, {
            gain: 1,
            muted: !1
        }])),
        muteInBackground: !0
    };
    e.s(["FULL_MIX", 0, n, "Mixer", 0, class {
        context;
        buses;
        otherMotors;
        sceneGate;
        stateFilter;
        duckGain;
        master;
        background;
        faders;
        masterGain;
        visible;
        muteInBackground;
        stateName;
        duckState;
        reverb;
        impulses;
        constructor(e, i=e.destination) {
            this.context = e,
            this.faders = {
                motors: 1,
                wind: 1,
                world: 1,
                interface: 1,
                race: 1
            },
            this.masterGain = .7,
            this.visible = !0,
            this.muteInBackground = !0,
            this.stateName = "flight",
            this.duckState = null,
            this.reverb = null,
            this.impulses = new Map;
            const r = t => {
                let i = e.createGain();
                return i.gain.value = t,
                i
            }
            ;
            this.buses = Object.fromEntries(t.BUS_IDS.map(e => [e, r(1)]));
            const n = e.createDynamicsCompressor();
            n.threshold.value = -18,
            n.knee.value = 10,
            n.ratio.value = 4,
            n.attack.value = .004,
            n.release.value = .12,
            this.sceneGate = r(0),
            this.stateFilter = e.createBiquadFilter(),
            this.stateFilter.type = "lowpass",
            this.stateFilter.frequency.value = t.OPEN_LOWPASS_HZ,
            this.stateFilter.Q.value = -3.0103,
            this.duckGain = r(1);
            const o = r(.49)
              , h = e.createDynamicsCompressor();
            h.threshold.value = -3,
            h.knee.value = 0,
            h.ratio.value = 20,
            h.attack.value = .001,
            h.release.value = .1,
            this.master = r(this.masterGain / a()),
            this.background = r(1);
            const l = e.createWaveShaper();
            for (const e of (l.curve = function(e=8193) {
                let {knee: t, ceiling: i} = s
                  , a = new Float32Array(e);
                for (let s = 0; s < e; s++) {
                    let r = s / (e - 1) * 2 - 1
                      , n = Math.abs(r)
                      , o = n <= t ? n : t + (i - t) * Math.tanh((n - t) / (i - t));
                    a[s] = Math.sign(r) * o
                }
                return a
            }(),
            t.WORLD_BUSES))
                this.buses[e].connect(n);
            n.connect(this.sceneGate).connect(this.stateFilter).connect(this.duckGain).connect(o),
            this.otherMotors = r(1),
            this.otherMotors.connect(this.sceneGate),
            this.buses.interface.connect(o),
            this.buses.race.connect(o),
            o.connect(h).connect(this.master).connect(this.background).connect(l).connect(i)
        }
        get state() {
            return this.stateName
        }
        get room() {
            return this.reverb?.room ?? "dry"
        }
        get mutesInBackground() {
            return this.muteInBackground
        }
        setFaders(e) {
            for (let i of (this.masterGain = r(e.master),
            this.muteInBackground = e.muteInBackground,
            t.BUS_IDS))
                this.faders[i] = r(e.categories[i]);
            let i = this.context.currentTime;
            this.master.gain.setTargetAtTime(this.masterGain / a(), i, .025),
            this.applyBuses(.025),
            this.applyBackground()
        }
        setVisible(e) {
            this.visible = e,
            this.applyBackground()
        }
        setSceneGain(e) {
            this.sceneGate.gain.setTargetAtTime(Math.max(0, e), this.context.currentTime, .06)
        }
        setState(e) {
            if (e === this.stateName)
                return;
            this.stateName = e;
            let i = t.MIX_STATES[e]
              , s = (0,
            t.timeConstant)(i.fade);
            this.applyBuses(s),
            this.stateFilter.frequency.setTargetAtTime(i.worldLowpassHz, this.context.currentTime, s)
        }
        duck(e, i=0) {
            let s = this.context.currentTime + Math.max(0, i)
              , a = (0,
            t.planDuck)(e, s, this.duckState);
            this.duckState = {
                depth: a.depth,
                until: a.until
            };
            let r = this.duckGain.gain;
            r.cancelScheduledValues(s),
            r.setTargetAtTime(a.depth, s, a.attackTau),
            r.setTargetAtTime(1, a.releaseAt, a.releaseTau)
        }
        setRoom(e) {
            if (e === this.room)
                return;
            this.removeReverb();
            let s = i.ROOMS[e];
            if (!s)
                return;
            let a = this.impulses.get(e);
            if (!a) {
                let t = (0,
                i.roomImpulse)(s, this.context.sampleRate);
                a = this.context.createBuffer(t.length, t[0].length, this.context.sampleRate),
                t.forEach( (e, t) => a.getChannelData(t).set(e)),
                this.impulses.set(e, a)
            }
            let r = this.context.createConvolver();
            r.normalize = !1,
            r.buffer = a,
            r.connect(this.sceneGate);
            let n = new Map;
            for (let e of t.BUS_IDS) {
                let t = s.sends[e] ?? 0;
                if (t <= 0)
                    continue;
                let i = this.context.createGain();
                i.gain.value = t,
                this.buses[e].connect(i).connect(r),
                n.set(e, i)
            }
            let o = n.get("motors");
            o && this.otherMotors.connect(o),
            this.reverb = {
                room: e,
                convolver: r,
                sends: n
            }
        }
        removeReverb() {
            let e = this.reverb;
            if (e) {
                for (let[t,i] of (this.reverb = null,
                e.sends))
                    this.buses[t].disconnect(i),
                    "motors" === t && this.otherMotors.disconnect(i),
                    i.disconnect();
                e.convolver.disconnect()
            }
        }
        applyBuses(e) {
            let i = this.context.currentTime
              , s = t.MIX_STATES[this.stateName];
            for (let a of t.BUS_IDS)
                this.buses[a].gain.setTargetAtTime((0,
                t.busTarget)(this.faders[a], s, a), i, e);
            this.otherMotors.gain.setTargetAtTime((0,
            t.busTarget)(this.faders.motors, s, "motors"), i, e)
        }
        applyBackground() {
            let e = !this.visible && this.muteInBackground;
            this.background.gain.setTargetAtTime(+!e, this.context.currentTime, .025)
        }
    }
    ])
}
, 254126, e => {
    "use strict";
    var t = e.i(189004);
    function i(e) {
        return "object" == typeof e && null !== e && "lane" in e
    }
    e.s(["OneShotVoice", 0, class {
        sound;
        priority;
        context;
        onFinished;
        loop;
        nodes;
        sources;
        pending;
        finished;
        output;
        endListeners;
        constructor(e, t, i, s) {
            this.sound = e,
            this.priority = t,
            this.context = i,
            this.onFinished = s,
            this.loop = !1,
            this.nodes = [],
            this.sources = [],
            this.pending = 0,
            this.finished = !1,
            this.output = null,
            this.endListeners = []
        }
        get nodeCount() {
            return this.nodes.length
        }
        get ended() {
            return this.finished
        }
        whenEnded(e) {
            this.finished ? e() : this.endListeners.push(e)
        }
        build(e, s, a, r, n) {
            let {context: o} = s
              , h = e => (this.nodes.push(e),
            e)
              , l = o.currentTime + Math.max(0, a.delay ?? 0)
              , c = Math.max(.01, (0,
            t.resolveValue)(e.timeRate, r, 1))
              , u = (e, i=0) => (0,
            t.resolveValue)(e, r, i)
              , p = (e, t=0) => u(e, t) / c
              , d = e => a.lanes?.[e]
              , f = Math.max(.001, r.duration ?? 0)
              , m = h(o.createGain());
            m.gain.value = Math.max(0, (a.level ?? 1) * u(e.level, 1) * n.level);
            let g = Number.isFinite(a.pan) ? Math.max(-1, Math.min(1, a.pan)) : 0;
            if ("interface" === e.bus && 0 !== g) {
                let t = h(o.createStereoPanner());
                t.pan.value = g,
                m.connect(t).connect(s.busInput(e.bus))
            } else
                m.connect(s.busInput(e.bus));
            this.output = m;
            let v = null;
            e.distance && a.at && ((v = h(o.createPanner())).panningModel = "HRTF",
            v.refDistance = e.distance.ref,
            v.rolloffFactor = e.distance.rolloff ?? 1,
            e.distance.max && (v.maxDistance = e.distance.max),
            v.positionX.value = a.at.x,
            v.positionY.value = a.at.y,
            v.positionZ.value = a.at.z,
            v.connect(m));
            let y = e => e.bus ? s.busInput(e.bus) : e.direct || !v ? m : v
              , b = (e, t) => {
                if (!e)
                    return null;
                let i = h(o.createBiquadFilter());
                i.type = e.type;
                let s = u(e.frequency, 1e3);
                return i.frequency.setValueAtTime(s, t),
                void 0 !== e.q && (i.Q.value = u(e.q, 1)),
                e.sweep && i.frequency.exponentialRampToValueAtTime(Math.max(1, u(e.sweep.to, s)), t + p(e.sweep.time)),
                i
            }
              , w = (e, t) => {
                let s = h(o.createGain());
                if (i(e)) {
                    let i = d(e.lane);
                    return i ? (s.gain.setValueCurveAtTime(i, t, f),
                    s) : null
                }
                return s.gain.setValueAtTime(e.from ?? 1e-4, t),
                s.gain.linearRampToValueAtTime(Math.max(0, u(e.peak)), t + u(e.attack)),
                s.gain.exponentialRampToValueAtTime(1e-4, t + p(e.decay)),
                s
            }
            ;
            for (let[t,a] of e.layers.entries()) {
                let e;
                if (!function(e, t) {
                    if (!e)
                        return !0;
                    for (let[i,[s,a]] of Object.entries(e)) {
                        let e = t[i] ?? 0;
                        if (!(e >= s && e < a))
                            return !1
                    }
                    return !0
                }(a.when, r))
                    continue;
                let c = l + u(a.at);
                if ("sample" === a.kind) {
                    let e = n.layerTakes?.[t] ?? n.take
                      , i = s.buffer(a.takes[e % a.takes.length]);
                    if (!i)
                        continue;
                    let r = h(o.createBufferSource());
                    r.buffer = i,
                    r.playbackRate.value = u(a.rate, 1) * (!1 === a.pitched ? 1 : n.pitch);
                    let l = h(o.createGain());
                    if (l.gain.value = u(a.gain, 1),
                    a.envelope) {
                        let e = u(a.gain, 1) * Math.max(0, u(a.envelope.peak));
                        l.gain.setValueAtTime(a.envelope.from ?? 1e-4, c),
                        l.gain.linearRampToValueAtTime(e, c + u(a.envelope.attack)),
                        l.gain.exponentialRampToValueAtTime(1e-4, c + p(a.envelope.decay))
                    }
                    let d = b(a.filter, c);
                    (d ? r.connect(d).connect(l) : r.connect(l)).connect(y(a)),
                    r.start(c, Math.max(0, u(a.offset))),
                    void 0 !== a.length && r.stop(c + p(a.length)),
                    this.track(r);
                    continue
                }
                let m = w(a.envelope, c);
                if (!m)
                    continue;
                let g = c + p(a.length);
                if ("tone" === a.kind) {
                    let t = h(o.createOscillator());
                    if (t.type = a.wave,
                    a.detune && (t.detune.value = a.detune),
                    i(a.frequency)) {
                        let e = d(a.frequency.lane);
                        if (!e)
                            continue;
                        t.frequency.setValueCurveAtTime(e, c, f)
                    } else {
                        let e = !1 === a.pitched ? 1 : n.pitch
                          , i = u(a.frequency, 440) * e;
                        if (t.frequency.setValueAtTime(i, c),
                        a.glide) {
                            let e = void 0 !== a.glide.to ? u(a.glide.to, i) : i * u(a.glide.ratio, 1);
                            t.frequency.exponentialRampToValueAtTime(Math.max(1, e), c + p(a.glide.time))
                        }
                    }
                    e = t
                } else {
                    let t = h(o.createBufferSource());
                    t.buffer = s.noise(a.color),
                    e = t
                }
                let v = b(a.filter, c);
                (v ? e.connect(v).connect(m) : e.connect(m)).connect(y(a)),
                "noise" === a.kind && a.randomOffset ? e.start(c, s.random() * a.randomOffset) : e.start(c),
                e.stop(g),
                this.track(e)
            }
            return this.sources.length > 0
        }
        stop(e=.005, t=.03) {
            if (this.finished || !this.output)
                return;
            let i = this.context.currentTime;
            for (let s of (this.output.gain.cancelScheduledValues(i),
            this.output.gain.setTargetAtTime(0, i, e),
            this.sources))
                try {
                    s.stop(i + t)
                } catch {}
        }
        discard() {
            for (let e of this.nodes)
                e.disconnect();
            this.finished = !0
        }
        track(e) {
            this.sources.push(e),
            this.pending++,
            e.onended = () => {
                if (!(--this.pending > 0) && !this.finished) {
                    for (let e of (this.finished = !0,
                    this.nodes))
                        e.disconnect();
                    for (let e of (this.onFinished(this),
                    this.endListeners.splice(0)))
                        e()
                }
            }
        }
    }
    ])
}
, 573558, 417806, e => {
    "use strict";
    var t = e.i(11871)
      , i = e.i(635525)
      , s = e.i(189004)
      , a = e.i(931245);
    let r = {
        freestyle: {
            shares: {
                points: [[.055, .095], [.1, .133], [.2, .267], [.3, .394], [.4, .512], [.5, .62], [.6, .718], [.7, .805], [.8, .881], [.9, .946], [1, .991]]
            },
            hover: .252,
            lag: .031,
            accel: [5e-4, 5e-4, .00253],
            rate: [-47e-5, .0015, .0106]
        },
        whoop: {
            shares: {
                points: [[.055, .152], [.1, .153], [.2, .281], [.3, .412], [.4, .532], [.5, .639], [.6, .734], [.7, .818], [.8, .889], [.9, .95], [1, .975]]
            },
            hover: .393,
            lag: .025,
            accel: [63e-5, 73e-5, .00324],
            rate: [-67e-5, .0033, .00576]
        },
        cinewhoop: {
            shares: {
                points: [[.055, .123], [.1, .124], [.2, .224], [.3, .336], [.4, .445], [.5, .551], [.6, .652], [.7, .748], [.8, .838], [.9, .922], [1, .988]]
            },
            hover: .398,
            lag: .027,
            accel: [86e-5, 9e-4, .0039],
            rate: [0, -.00327, .0213]
        },
        "long-range": {
            shares: {
                points: [[.055, .16], [.1, .162], [.2, .302], [.3, .443], [.4, .572], [.5, .685], [.6, .78], [.7, .858], [.8, .919], [.9, .966], [1, .993]]
            },
            hover: .352,
            lag: .063,
            accel: [6e-4, 93e-5, .00796],
            rate: [-.00333, .00863, .0135]
        },
        racer: {
            shares: {
                points: [[.055, .102], [.1, .142], [.2, .284], [.3, .417], [.4, .538], [.5, .648], [.6, .744], [.7, .826], [.8, .896], [.9, .953], [1, .984]]
            },
            hover: .211,
            lag: .031,
            accel: [4e-4, 39e-5, .00159],
            rate: [-34e-5, 99e-5, .00743]
        }
    };
    function n(e, t, i, s) {
        let a = -e[0]
          , r = -e[1]
          , n = -e[2]
          , o = e[3]
          , h = o * t[0] + a * t[3] + r * t[2] - n * t[1]
          , l = o * t[1] - a * t[2] + r * t[3] + n * t[0]
          , c = o * t[2] + a * t[1] - r * t[0] + n * t[3]
          , u = o * t[3] - a * t[0] - r * t[1] - n * t[2];
        u < 0 && (h = -h,
        l = -l,
        c = -c,
        u = -u);
        let p = Math.sqrt(h * h + l * l + c * c)
          , d = i > 0 ? (p > 1e-9 ? 2 * Math.atan2(p, u) / p : 2) / i : 0;
        return s.roll = -c * d,
        s.pitch = h * d,
        s.yaw = -l * d,
        s
    }
    let o = [0, 0, 0, 0]
      , h = {
        roll: 0,
        pitch: 0,
        yaw: 0
    }
      , l = {
        roll: 0,
        pitch: 0,
        yaw: 0
    }
      , c = {
        roll: 0,
        pitch: 0,
        yaw: 0
    }
      , u = {
        roll: 0,
        pitch: 0,
        yaw: 0
    }
      , p = [0, 0, 0, 0]
      , d = [0, 0, 0, 0];
    function f(e, t) {
        return !!e && !!t && e.run === t.run && t.t > e.t && t.t - e.t <= 1e3
    }
    function m(e, i, a, p) {
        let d = e[i]
          , m = e[i - 1]
          , g = e[i + 1]
          , v = f(m, d)
          , y = f(d, g);
        v && n(m.q, d.q, (d.t - m.t) / 1e3, h),
        y && n(d.q, g.q, (g.t - d.t) / 1e3, l);
        let b = v ? h : l
          , w = y ? l : h;
        if (c.roll = (b.roll + w.roll) / 2,
        c.pitch = (b.pitch + w.pitch) / 2,
        c.yaw = (b.yaw + w.yaw) / 2,
        v || y || (c.roll = c.pitch = c.yaw = 0),
        v && y) {
            let e = (g.t - m.t) / 2e3;
            u.roll = (l.roll - h.roll) / e,
            u.pitch = (l.pitch - h.pitch) / e,
            u.yaw = (l.yaw - h.yaw) / e
        } else
            u.roll = u.pitch = u.yaw = 0;
        let x = d.throttle ?? r[a].hover;
        return function(e, i, a, n, h=[0, 0, 0, 0], l=r[e]) {
            let {motorIdle: c, motorOutputLimit: u} = t.DRONE_PROFILES[e].flight.tune
              , p = Math.max(1e-6, u - c)
              , d = e => Number.isFinite(e) ? e : 0
              , f = l.accel[0] * d(n.roll) + l.rate[0] * d(a.roll)
              , m = l.accel[1] * d(n.pitch) + l.rate[1] * d(a.pitch)
              , g = l.accel[2] * d(n.yaw) + l.rate[2] * d(a.yaw);
            o[0] = -f + m - g,
            o[1] = f + m + g,
            o[2] = -f - m + g,
            o[3] = f - m - g;
            let v = Math.max(o[0], o[1], o[2], o[3])
              , y = Math.min(o[0], o[1], o[2], o[3])
              , b = v - y;
            if (b > 1) {
                for (let e = 0; e < 4; e++)
                    o[e] /= b;
                v /= b,
                y /= b
            }
            let w = Math.max(0, Math.min(1, (d(i) - c) / p));
            w < -y && (w = -y),
            w > 1 - v && (w = 1 - v);
            for (let e = 0; e < 4; e++)
                h[e] = (0,
                s.evaluateCurve)(l.shares, c + p * Math.max(0, Math.min(1, w + o[e])));
            return h
        }(a, x, c, u, p)
    }
    function g(e, t, i, s) {
        s[0] = s[1] = s[2] = s[3] = 0;
        let a = t - 1e3 * r[i].lag;
        if (!e.length || !(a >= e[0].t))
            return !1;
        let n = e.length - 1;
        for (; n > 0 && e[n].t > a; )
            n--;
        let o = e[n]
          , h = e[n + 1];
        if (!1 === o.armed)
            return !1;
        if (m(e, n, i, p),
        !f(o, h) || !1 === h.armed) {
            for (let e = 0; e < 4; e++)
                s[e] = p[e];
            return !0
        }
        m(e, n + 1, i, d);
        let l = Math.min(1, Math.max(0, (a - o.t) / (h.t - o.t)));
        for (let e = 0; e < 4; e++)
            s[e] = p[e] + (d[e] - p[e]) * l;
        return !0
    }
    function v(e, t, i) {
        if (i.x = i.y = i.z = 0,
        !e.length || !(t >= e[0].t))
            return;
        let s = e.length - 1;
        for (; s > 0 && e[s].t > t; )
            s--;
        let a = e[s]
          , r = e[s + 1]
          , n = a.v;
        if (!n)
            return;
        let o = f(a, r) && r.v ? r.v : n
          , h = o === n ? 0 : Math.min(1, Math.max(0, (t - a.t) / (r.t - a.t)));
        i.x = n[0] + (o[0] - n[0]) * h,
        i.y = n[1] + (o[1] - n[1]) * h,
        i.z = n[2] + (o[2] - n[2]) * h
    }
    e.s(["REMOTE_MOTOR_FITS", 0, r, "sampleRemoteMotors", 0, g, "sampleRemoteVelocity", 0, v], 417806);
    var y = e.i(377336)
      , b = e.i(383839)
      , w = e.i(562706);
    let x = {
        pilot: {
            level: 1,
            importance: 1
        },
        race: {
            level: .5,
            importance: .8
        },
        ambient: {
            level: .25,
            importance: .4
        }
    }
      , M = y.LOOPS["drone.other"]
      , k = {
        cap: M.voices.max,
        lookahead: 1,
        hold: 1.5,
        minHold: .75,
        range: 90,
        fade: .15,
        every: 2
    }
      , T = a.MOTOR_CURVES.body.range[1]
      , R = M.distance;
    function S(e, t) {
        let[i,s,a,r] = e;
        return t.x = 2 * (i * s - r * a),
        t.y = 1 - 2 * (i * i + a * a),
        t.z = 2 * (s * a + r * i),
        t
    }
    function A(e, t) {
        return {
            id: e,
            kind: t,
            craft: "freestyle",
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            velocity: {
                x: 0,
                y: 0,
                z: 0
            },
            up: {
                x: 0,
                y: 1,
                z: 0
            },
            motors: [0, 0, 0, 0],
            armed: !1,
            presence: 0,
            pitch: 1
        }
    }
    let F = new Map;
    e.s(["OTHER_KINDS", 0, x, "OTHER_VOICES", 0, k, "OtherPilotsAudio", 0, class {
        host;
        playing;
        fading;
        ranked;
        ages;
        output;
        random;
        heard;
        frame;
        enabled;
        kinds;
        constructor(e, t={}) {
            this.host = e,
            this.playing = new Map,
            this.fading = [],
            this.ranked = [],
            this.ages = new Map,
            this.output = null,
            this.random = (0,
            b.seededRandom)(46),
            this.heard = 0,
            this.frame = 0,
            this.enabled = t.enabled ?? !0,
            this.kinds = {
                ...x,
                ...t.kinds
            }
        }
        get voices() {
            return [...this.playing.entries()].map( ([e,t]) => ({
                id: e,
                kind: t.kind,
                craft: t.craft,
                priority: t.priority
            })).sort( (e, t) => t.priority - e.priority)
        }
        get candidates() {
            return this.heard
        }
        get nodeCount() {
            let e = +!!this.output;
            for (let t of this.playing.values())
                e += t.voice.nodeCount;
            for (let t of this.fading)
                e += t.voice.nodeCount;
            return e
        }
        update(e, i, r=!0) {
            let n = this.host.context.currentTime;
            this.releaseFaded(n);
            let o = this.ranked;
            if (o.length = 0,
            this.ages.clear(),
            r && this.enabled)
                for (let r of e) {
                    let e = this.playing.get(r.id)
                      , h = function(e, i, r=x) {
                        var n, o, h, l, c;
                        let u, p, d, f, m, g, v, y, b, R, S = r[e.kind], A = function(e, i, r) {
                            if (!r)
                                return 0;
                            let n = (i[0] + i[1] + i[2] + i[3]) / 4;
                            return n > 0 ? t.DRONE_PROFILES[e].sound.gain * (0,
                            s.evaluateCurve)(a.MOTOR_CURVES.body, Math.min(1, n)) / T : 0
                        }(e.craft, e.motors, e.armed), F = Math.max(0, Math.min(1, Number.isFinite(e.presence) ? e.presence : 0));
                        if (!(A > 0) || !(F > 0))
                            return 0;
                        let O = (n = e.position,
                        o = e.velocity,
                        h = i.position,
                        l = i.velocity,
                        c = k.lookahead,
                        u = n.x - h.x,
                        p = n.y - h.y,
                        d = n.z - h.z,
                        f = o.x - l.x,
                        m = o.y - l.y,
                        v = f * f + m * m + (g = o.z - l.z) * g,
                        y = -(u * f + p * m + d * g),
                        Number.isFinite(R = Math.hypot(u + f * (b = v > 1e-9 && y > 0 ? Math.min(c, y / v) : 0), p + m * b, d + g * b)) ? R : 1 / 0);
                        if (!(O <= k.range))
                            return 0;
                        let _ = (0,
                        w.distanceAudibility)(O, M.distance.ref, M.distance.rolloff);
                        return M.voices.importance * S.importance * S.level * F * A * _
                    }(r, i, this.kinds) * (e ? k.hold : 1);
                    h > 0 && (o.push({
                        id: r.id,
                        priority: h,
                        drone: r
                    }),
                    e && this.ages.set(r.id, n - e.since))
                }
            this.heard = o.length,
            this.frame++;
            let h = function(e, t, i=k.cap, s=k.minHold) {
                let a = new Set
                  , r = e.filter(e => e.priority > 0).sort( (e, t) => t.priority - e.priority);
                for (let e of r) {
                    if (a.size >= i)
                        break;
                    let r = t.get(e.id);
                    void 0 !== r && r < s && a.add(e.id)
                }
                for (let e of r) {
                    if (a.size >= i)
                        break;
                    a.add(e.id)
                }
                return a
            }(o, this.ages);
            for (let[e,t] of this.playing)
                h.has(e) || this.cull(e, t, n);
            for (let e of o)
                h.has(e.id) && this.drive(e.drone, e.priority, i, n)
        }
        drive(e, t, i, s) {
            let r = this.playing.get(e.id)
              , n = !1;
            if (r && r.craft !== e.craft && (this.cull(e.id, r, s),
            r = void 0),
            !r) {
                let i = new w.LoopSlot("drone.other",this.host.voices,M.voices.max);
                if (i.priority = t,
                !i.allowed())
                    return void i.release();
                let a = this.host.createMotorVoice(e.craft, M.bus, e.position, {
                    output: this.group(),
                    distance: R,
                    random: this.random
                });
                a.setLevel(0),
                r = {
                    voice: a,
                    slot: i,
                    craft: e.craft,
                    since: s,
                    kind: e.kind,
                    priority: t,
                    turn: this.quietestTurn()
                },
                this.playing.set(e.id, r),
                n = !0
            }
            if (r.priority = t,
            r.kind = e.kind,
            r.slot.priority = t,
            !r.slot.allowed())
                return void this.cull(e.id, r, s);
            if (!n && this.frame % k.every !== r.turn)
                return;
            let {position: o, velocity: h} = e
              , l = o.x - i.position.x
              , c = o.y - i.position.y
              , u = o.z - i.position.z
              , p = Math.hypot(l, c, u)
              , d = 0;
            p > .15 && (d = ((h.x - i.velocity.x) * l + (h.y - i.velocity.y) * c + (h.z - i.velocity.z) * u) / p);
            let f = Number.isFinite(e.pitch) && e.pitch > 0 ? e.pitch : 1
              , m = r.voice;
            m.place(o),
            m.setAbsorption((0,
            a.distanceLowpassHz)(p)),
            m.setPerspective(p, 0),
            m.update({
                motors: e.motors,
                armed: e.armed,
                doppler: (0,
                a.dopplerFactor)(d) * f,
                inflow: h.x * e.up.x + h.y * e.up.y + h.z * e.up.z
            }),
            m.setLevel(M.level * this.kinds[e.kind].level * Math.max(0, Math.min(1, e.presence)))
        }
        quietestTurn() {
            let e = Array(k.every).fill(0);
            for (let t of this.playing.values())
                e[t.turn]++;
            return e.indexOf(Math.min(...e))
        }
        group() {
            return this.output || (this.output = this.host.context.createGain(),
            this.output.connect(this.host.otherMotorsInput())),
            this.output
        }
        cull(e, t, i) {
            t.voice.setLevel(0),
            this.fading.push({
                voice: t.voice,
                until: i + k.fade
            }),
            t.slot.release(),
            this.playing.delete(e)
        }
        releaseFaded(e, t=!1) {
            for (let i = this.fading.length - 1; i >= 0; i--)
                (t || !(e < this.fading[i].until)) && (this.fading[i].voice.release(),
                this.fading.splice(i, 1))
        }
        dispose() {
            for (let[e,t] of this.playing)
                t.voice.release(),
                t.slot.release(),
                this.playing.delete(e);
            this.releaseFaded(0, !0),
            this.output?.disconnect(),
            this.output = null
        }
    }
    , "bodyUp", 0, S, "ghostSound", 0, function(e, t) {
        let i = F.get(e);
        return i || F.set(e, i = A(e, t)),
        i.kind = t,
        i
    }
    , "ghostSounds", 0, F, "lobbyDrones", 0, function(e, t, s, a) {
        if (!e?.peers.length)
            return s;
        for (let r of e.peers) {
            let n = (0,
            i.shownPilot)(e, r, t);
            if (!n)
                continue;
            let {time: o, pose: h} = n
              , l = r.frames[0]
              , c = l ? (0,
            i.presenceAlpha)(r, t) * (0,
            i.smoothFade)(o - l.t, 0, 700) : 0;
            if (!(c > 0))
                continue;
            let u = a.get(r.id);
            u || a.set(r.id, u = A(r.id, "pilot")),
            u.craft = h.droneId ?? "freestyle",
            u.position.x = h.p[0],
            u.position.y = h.p[1],
            u.position.z = h.p[2],
            S(h.q, u.up),
            v(r.frames, o, u.velocity),
            u.armed = g(r.frames, o, u.craft, u.motors),
            u.presence = c,
            u.pitch = 1,
            s.push(u)
        }
        if (a.size > 2 * e.peers.length)
            for (let t of a.keys())
                e.peers.some(e => e.id === t) || a.delete(t);
        return s
    }
    ], 573558)
}
, 393038, e => {
    "use strict";
    var t = e.i(998494)
      , i = e.i(383839);
    let s = {
        gridworks: "yard",
        [t.LESSON_MAP_ID]: "dry",
        "drift-park": "harbor",
        [t.DRIFT_PARK_MAP_ID]: "harbor",
        "whoop-world": "mall",
        [t.WHOOP_WORLD_MAP_ID]: "mall"
    };
    e.s(["ROOMS", 0, {
        dry: null,
        yard: {
            decay: .55,
            predelay: .012,
            damping: [6e3, 2200],
            sends: {
                motors: .04,
                world: .08
            }
        },
        harbor: {
            decay: .95,
            predelay: .035,
            damping: [5e3, 1400],
            sends: {
                motors: .05,
                world: .11
            }
        },
        mall: {
            decay: 1.6,
            predelay: .02,
            damping: [6500, 1600],
            sends: {
                motors: .18,
                wind: .05,
                world: .3
            }
        }
    }, "roomForMap", 0, function(e) {
        return e && s[e] || "dry"
    }
    , "roomImpulse", 0, function(e, t) {
        let s = Math.max(1, Math.round((e.predelay + e.decay) * t))
          , a = Math.round(e.predelay * t);
        return [0, 1].map(r => {
            let n = (0,
            i.seededRandom)(24301 + 7919 * r)
              , o = new Float32Array(s)
              , h = 0
              , l = 0;
            for (let i = a; i < s; i++) {
                let s = (i - a) / t / e.decay
                  , r = 1 - Math.exp(-2 * Math.PI * (e.damping[0] * Math.pow(e.damping[1] / e.damping[0], Math.min(1, s))) / t);
                h += (2 * n() - 1 - h) * r;
                let c = h * Math.exp(-6.907755 * s);
                o[i] = c,
                l += c * c
            }
            let c = l > 0 ? 1 / Math.sqrt(l) : 0;
            for (let e = a; e < s; e++)
                o[e] *= c;
            return o
        }
        )
    }
    ])
}
, 719057, 302633, e => {
    "use strict";
    var t = e.i(189004)
      , i = e.i(377336);
    let s = i.LOOPS["impact.scrape"];
    function a(e) {
        let i = Number.isFinite(e) ? Math.max(0, e) : 0;
        return (0,
        t.evaluateCurve)(s.curves.gain, i)
    }
    e.s(["ScrapeVoice", 0, class {
        context;
        nodes;
        source;
        output;
        panner;
        constructor(e, t, i, a, r) {
            this.context = e,
            this.nodes = [];
            const n = e => (this.nodes.push(e),
            e);
            this.source = n(e.createBufferSource()),
            this.source.buffer = i,
            this.source.loop = !0;
            const o = n(e.createBiquadFilter());
            o.type = "lowpass",
            o.frequency.value = 1600,
            this.output = n(e.createGain()),
            this.output.gain.value = 0,
            this.panner = n(e.createPanner()),
            this.panner.panningModel = "HRTF",
            this.panner.refDistance = s.distance.ref,
            this.panner.maxDistance = s.distance.max,
            this.panner.positionX.value = a.x,
            this.panner.positionY.value = a.y,
            this.panner.positionZ.value = a.z,
            this.source.connect(o).connect(this.output).connect(this.panner).connect(t),
            this.source.start(e.currentTime, r() * i.duration)
        }
        get nodeCount() {
            return this.nodes.length
        }
        set(e, i) {
            let r = this.context.currentTime
              , n = Number.isFinite(e) ? Math.max(0, e) : 0;
            this.output.gain.setTargetAtTime(a(n) * (s.level ?? 1), r, .04),
            this.source.playbackRate.setTargetAtTime((0,
            t.evaluateCurve)(s.curves.rate, n), r, .08),
            this.panner.positionX.setTargetAtTime(i.x, r, .04),
            this.panner.positionY.setTargetAtTime(i.y, r, .04),
            this.panner.positionZ.setTargetAtTime(i.z, r, .04)
        }
        release() {
            let e = this.context.currentTime;
            this.output.gain.cancelScheduledValues(e),
            this.output.gain.setTargetAtTime(0, e, .01),
            this.source.onended = () => {
                for (let e of this.nodes)
                    e.disconnect()
            }
            ,
            this.source.stop(e + .06)
        }
    }
    , "scrapeGain", 0, a], 719057);
    var r = e.i(931245);
    let n = r.HARMONIC_GAINS.length
      , o = [.4, -.4, .22, -.22]
      , h = i.LOOPS["drone.rotors"]
      , l = i.LOOPS["drone.wind"];
    function c(e, t, i, s) {
        e.setTargetAtTime(t, s, i)
    }
    function u(e) {
        return e < 80 ? 80 : e > 18e3 ? 18e3 : e
    }
    e.s(["MAX_FREQ", 0, 18e3, "MOTOR_COUNT", 0, 4, "RELEASE_AFTER", 0, .5, "RotorVoice", 0, class {
        context;
        nodes;
        sources;
        motors;
        panner;
        absorb;
        constructor(e, t, i, s, a) {
            this.context = e,
            this.nodes = [],
            this.sources = [],
            this.motors = [];
            const r = e => (this.nodes.push(e),
            e);
            this.absorb = r(e.createBiquadFilter()),
            this.absorb.type = "lowpass",
            this.absorb.frequency.value = a,
            this.absorb.Q.value = .5;
            const l = h.distance;
            this.panner = r(e.createPanner()),
            this.panner.panningModel = "equalpower",
            this.panner.distanceModel = "inverse",
            this.panner.refDistance = l.ref,
            this.panner.maxDistance = l.max,
            this.panner.rolloffFactor = l.rolloff,
            this.panner.coneInnerAngle = 360,
            this.panner.coneOuterAngle = 0,
            this.panner.coneOuterGain = 0,
            this.placeNow(s),
            this.panner.connect(this.absorb).connect(t);
            const c = r(e.createBufferSource());
            c.buffer = i,
            c.loop = !0,
            this.sources.push(c);
            for (let t = 0; t < 4; t++) {
                const i = r(e.createStereoPanner());
                i.pan.value = o[t],
                i.connect(this.panner);
                const s = []
                  , a = [];
                for (let t = 0; t < n; t++) {
                    const n = r(e.createOscillator());
                    n.type = "sine",
                    n.frequency.value = 80 * (t + 1);
                    const o = r(e.createGain());
                    o.gain.value = 0,
                    n.connect(o).connect(i),
                    s.push(n),
                    a.push(o),
                    this.sources.push(n)
                }
                const h = r(e.createOscillator());
                h.type = "sine",
                h.frequency.value = 80;
                const l = r(e.createGain());
                l.gain.value = 0,
                h.connect(l).connect(i),
                this.sources.push(h);
                const u = r(e.createBiquadFilter());
                u.type = "bandpass",
                u.frequency.value = 1200,
                u.Q.value = .75;
                const p = r(e.createGain());
                p.gain.value = 0,
                c.connect(u).connect(p).connect(i),
                this.motors.push({
                    harmonics: s,
                    harmonicGains: a,
                    whine: h,
                    whineGain: l,
                    broadbandFilter: u,
                    broadbandGain: p
                })
            }
            const u = e.currentTime;
            for (const e of this.sources)
                e.start(u)
        }
        get nodeCount() {
            return this.nodes.length
        }
        placeNow(e) {
            this.panner.positionX ? (this.panner.positionX.value = e.x,
            this.panner.positionY.value = e.y,
            this.panner.positionZ.value = e.z) : this.panner.setPosition(e.x, e.y, e.z)
        }
        place(e) {
            let t = this.context.currentTime;
            this.panner.positionX ? (c(this.panner.positionX, e.x, .035, t),
            c(this.panner.positionY, e.y, .035, t),
            c(this.panner.positionZ, e.z, .035, t)) : this.panner.setPosition(e.x, e.y, e.z)
        }
        setAbsorption(e) {
            c(this.absorb.frequency, e, .035, this.context.currentTime)
        }
        setMotor(e, t, i, s) {
            let a = this.context.currentTime
              , r = this.motors[e];
            for (let e = 0; e < n; e++)
                c(r.harmonics[e].frequency, u(t.bpf * (e + 1)), .035, a),
                c(r.harmonicGains[e].gain, t.bpf * (e + 1) < s ? t.tone * i.harmonics[e] : 0, .028, a);
            c(r.whine.frequency, u(t.whineHz * t.fm), .035, a),
            c(r.whineGain.gain, t.whineHz < s ? t.whine : 0, .028, a),
            c(r.broadbandFilter.frequency, u(Math.max(400, 2.4 * t.bpf)), .035, a),
            c(r.broadbandFilter.Q, i.ductQ, .035, a),
            c(r.broadbandGain.gain, t.rotor, .028, a)
        }
        release() {
            for (let e of this.sources)
                try {
                    e.stop()
                } catch {}
            for (let e of this.nodes)
                e.disconnect()
        }
    }
    , "WindVoice", 0, class {
        context;
        nodes;
        sources;
        filter;
        gain;
        layers;
        constructor(e, i, s, a, r) {
            this.context = e,
            this.nodes = [],
            this.sources = [],
            this.layers = [];
            const n = e => (this.nodes.push(e),
            e)
              , o = n(e.createBufferSource());
            o.buffer = s,
            o.loop = !0,
            this.sources.push(o);
            const h = n(e.createBiquadFilter());
            h.type = "highpass",
            h.frequency.value = 100,
            h.Q.value = .7,
            this.filter = n(e.createBiquadFilter()),
            this.filter.type = "bandpass",
            this.filter.frequency.value = (0,
            t.evaluateCurve)(l.curves.filter, r),
            this.filter.Q.value = .7,
            this.gain = n(e.createGain()),
            this.gain.gain.value = 0,
            o.connect(h).connect(this.filter).connect(this.gain).connect(i),
            a.forEach( (t, s) => {
                let a = 0 === s ? -1 : 1
                  , r = n(e.createBufferSource());
                for (let s of (r.buffer = t,
                r.loop = !0,
                this.sources.push(r),
                [!0, !1])) {
                    let t = n(e.createBiquadFilter());
                    t.type = "bandpass",
                    t.frequency.value = s ? 75 : 2200,
                    t.Q.value = .55;
                    let o = n(e.createGain());
                    o.gain.value = 0;
                    let h = n(e.createStereoPanner());
                    h.pan.value = .65 * a,
                    r.connect(t).connect(o).connect(h).connect(i),
                    this.layers.push({
                        filter: t,
                        gain: o,
                        pan: h
                    })
                }
            }
            );
            const c = e.currentTime;
            for (const e of this.sources)
                e.start(c)
        }
        get nodeCount() {
            return this.nodes.length
        }
        set(e, i, s) {
            let a = this.context.currentTime
              , r = .14 * Math.sin(2.1 * a) + .08 * Math.sin(5.7 * a);
            c(this.filter.frequency, (0,
            t.evaluateCurve)(l.curves.filter, e), .035, a),
            c(this.gain.gain, i * (1 + r), .09, a),
            this.layers.forEach( ({filter: t, gain: r, pan: n}, o) => {
                let h = o % 2 == 0
                  , l = 1 + .28 * Math.sin(3.7 * a + 2 * o) + .16 * Math.sin(11.3 * a + o);
                c(t.frequency, h ? 55 + 2 * e : 1400 + 65 * Math.min(e, 60), .12, a),
                c(r.gain, i * (h ? 1.7 : .75) * l, .04, a),
                c(n.pan, Math.max(-1, Math.min(1, (o < 2 ? -.65 : .65) + .2 * s)), .15, a)
            }
            )
        }
        release() {
            for (let e of this.sources)
                try {
                    e.stop()
                } catch {}
            for (let e of this.nodes)
                e.disconnect()
        }
    }
    , "clampFreq", 0, u, "motorTargets", 0, function(e, i, s, a, n, o, l, c) {
        let u = (0,
        r.motorToRpm)(e, i, s.maxRpm) * c
          , p = (0,
        r.isAudibleRpm)(u)
          , d = Math.max(0, Math.min(1, u / Math.max(1, s.maxRpm)));
        return {
            audible: p,
            bpf: (0,
            r.rpmToBpf)(u, a) * n * o,
            tone: p ? (0,
            t.evaluateCurve)(h.curves.tone, d) * l * s.gain : 0,
            rotor: p ? (0,
            t.evaluateCurve)(h.curves.broadband, d) * s.noise * s.gain : 0,
            whineHz: (0,
            r.rpmToWhineHz)(u, s.polePairs) * n,
            fm: o,
            whine: p ? (0,
            t.evaluateCurve)(h.curves.whine, d) * s.whine * s.gain : 0
        }
    }
    ], 302633)
}
, 377336, 562706, 879262, 859324, 488691, 189004, 931245, e => {
    "use strict";
    var t = e.i(475127);
    function i(e, t, s=1) {
        if (!Number.isFinite(e))
            return 0;
        let a = Math.max(t, e);
        return t / (t + s * (a - t))
    }
    e.s(["LoopSlot", 0, class {
        sound;
        manager;
        cap;
        loop;
        priority;
        constructor(e, t, i) {
            this.sound = e,
            this.manager = t,
            this.cap = i,
            this.loop = !0,
            this.priority = 0,
            t.register(this)
        }
        allowed() {
            return this.manager.allowed(this, this.cap)
        }
        stop() {}
        release() {
            this.manager.release(this)
        }
    }
    , "VOICE_LIMIT", 0, 48, "VoiceManager", 0, class {
        limit;
        voices;
        order;
        sequence;
        constructor(e=48) {
            this.limit = e,
            this.voices = new Set,
            this.order = new WeakMap,
            this.sequence = 0
        }
        get count() {
            return this.voices.size
        }
        countOf(e) {
            let t = 0;
            for (let i of this.voices)
                i.sound === e && t++;
            return t
        }
        admit(e, t) {
            if (t <= 0)
                return !1;
            if (this.countOf(e.sound) >= t) {
                let t = this.weakest(t => t.sound === e.sound && !t.loop);
                if (!t || t.priority > e.priority)
                    return !1;
                this.steal(t)
            }
            if (this.voices.size >= this.limit) {
                let t = this.weakest(e => !e.loop);
                if (!t || t.priority > e.priority)
                    return !1;
                this.steal(t)
            }
            return this.add(e),
            !0
        }
        register(e) {
            this.add(e)
        }
        release(e) {
            this.voices.delete(e)
        }
        allowed(e, t) {
            if (!this.voices.has(e))
                return !1;
            let i = 0
              , s = 0;
            for (let t of this.voices)
                t !== e && this.outranks(t, e) && (s++,
                t.sound === e.sound && i++);
            return i < t && s < this.limit
        }
        weakest(e) {
            let t = null;
            for (let i of this.voices)
                e(i) && (!t || i.priority < t.priority) && (t = i);
            return t
        }
        add(e) {
            this.voices.has(e) || this.order.set(e, this.sequence++),
            this.voices.add(e)
        }
        outranks(e, t) {
            return e.priority > t.priority || e.priority === t.priority && this.order.get(e) < this.order.get(t)
        }
        steal(e) {
            this.voices.delete(e),
            e.stop()
        }
    }
    , "distanceAudibility", 0, i], 562706);
    let s = e => Math.max(0, Math.min(1, e))
      , a = [{
        name: "raspy sport",
        redline: 8200,
        gear: 1.02,
        pitch: 1,
        exhaustHz: 6500,
        bodyMix: .22,
        intake: .18,
        tire: 1,
        driver: 1.71,
        cut: 17,
        gain: .92
    }, {
        name: "smooth sport",
        redline: 7600,
        gear: .91,
        pitch: 1.06,
        exhaustHz: 4800,
        bodyMix: .15,
        intake: .12,
        tire: 1.09,
        driver: 1.37,
        cut: 14,
        gain: .86
    }, {
        name: "deep exhaust",
        redline: 6900,
        gear: .83,
        pitch: .76,
        exhaustHz: 3600,
        bodyMix: .65,
        intake: .06,
        tire: .88,
        driver: 1.13,
        cut: 11,
        gain: 1
    }, {
        name: "high rev sport",
        redline: 9e3,
        gear: 1.12,
        pitch: 1.12,
        exhaustHz: 7200,
        bodyMix: .12,
        intake: .09,
        tire: 1.14,
        driver: 1.93,
        cut: 19,
        gain: .82
    }, {
        name: "turbo exhaust",
        redline: 8e3,
        gear: .97,
        pitch: .91,
        exhaustHz: 4300,
        bodyMix: .4,
        intake: .24,
        tire: .97,
        driver: 1.49,
        cut: 15,
        gain: .9
    }, {
        name: "rough exhaust",
        redline: 7300,
        gear: .88,
        pitch: .82,
        exhaustHz: 5300,
        bodyMix: .52,
        intake: .04,
        tire: .92,
        driver: 1.23,
        cut: 12,
        gain: .94
    }, {
        name: "flat six",
        redline: 8600,
        gear: 1.05,
        pitch: 1.18,
        exhaustHz: 6900,
        bodyMix: .18,
        intake: .14,
        tire: 1.05,
        driver: 1.61,
        cut: 18,
        gain: .84
    }, {
        name: "big block",
        redline: 6600,
        gear: .8,
        pitch: .7,
        exhaustHz: 3200,
        bodyMix: .7,
        intake: .1,
        tire: .9,
        driver: 1.07,
        cut: 10,
        gain: 1
    }];
    function r(e=0) {
        return a[(Math.trunc(e) % a.length + a.length) % a.length]
    }
    function n(e) {
        let t = s((e - 45) / 55);
        return 1 - t * t * (3 - 2 * t)
    }
    let o = {
        absorption: {
            points: [[0, 1e4], [45, 5e3], [100, 3100]],
            interpolate: "exponential"
        }
    };
    function h(e) {
        return Math.max(.001, e / 3)
    }
    e.s(["CAR_CURVES", 0, o, "CAR_LEVEL", 0, .8, "CAR_MAX_DISTANCE", 0, 100, "CAR_REF_DISTANCE", 0, 7, "CAR_ROLLOFF", 0, 1.15, "carDistanceGain", 0, function(e) {
        return n(e) * i(e, 7, 1.15)
    }
    , "carRangeGain", 0, n, "carSoundProfile", 0, r, "driftSound", 0, function(e, i, a, n=0) {
        let o = r(n)
          , h = s(Math.abs(e) / .65)
          , l = a * o.driver + 2.39 * n
          , c = .5 + .5 * t.sin(l)
          , u = c * c * c
          , p = .98 - u * u * .32
          , d = (2700 + 155 * Math.max(0, i) + h * (2400 + 1400 * p)) * o.gear
          , f = Math.min(o.redline, d)
          , m = s((f / o.redline - .955) / .025);
        return {
            rpm: f,
            load: h,
            limiter: m,
            tire: s(Math.abs(t.sin(e)) * Math.max(0, i) / 5.5),
            throttle: p
        }
    }
    ], 879262);
    let l = {
        depth: .6,
        attack: .02,
        hold: .22,
        release: .35
    }
      , c = {
        depth: .8,
        attack: .015,
        hold: .12,
        release: .25
    };
    function u(e, [t,i], [s,a]) {
        return {
            param: e,
            curve: {
                points: [[t, i], [s, a]]
            }
        }
    }
    e.s(["BUS_IDS", 0, ["motors", "wind", "world", "interface", "race"], "CUE_DUCK", 0, c, "MIX_STATES", 0, {
        flight: {
            levels: {
                motors: 1,
                wind: 1,
                world: 1,
                interface: 1,
                race: 1
            },
            worldLowpassHz: 2e4,
            fade: .25
        },
        menu: {
            levels: {
                motors: .4,
                wind: .4,
                world: .5,
                interface: 1,
                race: .7
            },
            worldLowpassHz: 900,
            fade: .3
        },
        cinematic: {
            levels: {
                motors: .8,
                wind: .75,
                world: 1,
                interface: .85,
                race: .6
            },
            worldLowpassHz: 2e4,
            fade: .2
        },
        results: {
            levels: {
                motors: .5,
                wind: .5,
                world: .6,
                interface: 1,
                race: 1
            },
            worldLowpassHz: 2500,
            fade: .4
        }
    }, "OPEN_LOWPASS_HZ", 0, 2e4, "REWARD_DUCK", 0, l, "WORLD_BUSES", 0, ["motors", "wind", "world"], "busTarget", 0, function(e, t, i) {
        return Math.max(0, e) * t.levels[i]
    }
    , "planDuck", 0, function(e, t, i) {
        let s = i && i.until > t ? i : null
          , a = Math.max(.5, Math.min(e.depth, s?.depth ?? 1))
          , r = Math.max(t + e.attack + e.hold, s?.until ?? 0);
        return {
            depth: a,
            until: r,
            attackTau: h(e.attack),
            releaseAt: r,
            releaseTau: h(e.release)
        }
    }
    , "timeConstant", 0, h], 859324);
    let p = e => 438.5 * Math.pow(2, e / 12)
      , d = p(17)
      , f = p(19)
      , m = p(21)
      , g = p(24)
      , v = p(26)
      , y = p(29)
      , b = p(33)
      , w = {
        interpolate: "floor",
        points: [1, 1.25, 1.75, 2.25, 2.75, 3.25, 3.75, 4.25, 4.75].map( (e, t) => [e, Math.pow(2, t / 12)])
    }
      , x = {
        interpolate: "ceil",
        points: [[1, Math.pow(2, 4 / 12)], [2, 1.189207115002721], [3, Math.pow(2, 2 / 12)], [4, Math.pow(2, 1 / 12)], [5, 1]]
    }
      , M = [d, f, m, g, v, y];
    function k(e) {
        return {
            interpolate: "floor",
            points: M.map( (t, i) => [i / (M.length - 1), e(t)])
        }
    }
    let T = k(e => e)
      , R = k(e => 2 * e / 2082)
      , S = {
        chimeHome: {
            take: "game.chimes",
            offset: 0,
            length: .9
        },
        chimeSparkle: {
            take: "game.chimes",
            offset: 2.16,
            length: .6
        },
        chimeLift: {
            take: "game.chimes",
            offset: 4.64,
            length: 1.6
        },
        beep: {
            take: "race.countdown",
            offset: 0,
            length: .5
        },
        whoosh: {
            take: "game.whoosh",
            offset: .04,
            length: .42
        }
    };
    function A(e, t, i={}) {
        let s = i.length ?? 2.5;
        return {
            kind: "sample",
            takes: [e],
            gain: t,
            envelope: {
                from: 0,
                attack: i.attack ?? .004,
                peak: 1,
                decay: i.decay ?? s
            },
            length: s,
            ...void 0 !== i.at && {
                at: i.at
            },
            ...void 0 !== i.offset && {
                offset: i.offset
            },
            ...void 0 !== i.rate && {
                rate: i.rate
            },
            ...i.filter && {
                filter: i.filter
            },
            ...i.bus && {
                bus: i.bus
            },
            ...void 0 !== i.pitched && {
                pitched: i.pitched
            }
        }
    }
    function F(e, t, i={}) {
        let {take: s, offset: a, length: r} = S[e];
        return A(s, t, {
            offset: a,
            length: r,
            ...i
        })
    }
    function O(e, t, i, s, a, r={}) {
        return {
            kind: "tone",
            wave: "sine",
            frequency: e,
            at: t,
            length: i + .01,
            envelope: {
                from: 0,
                attack: a,
                peak: s,
                decay: i
            },
            ...r
        }
    }
    function _(e, t, i, s=.18) {
        return O(t, e, s, i, .004, {
            glide: {
                to: 42,
                time: s
            },
            pitched: !1,
            direct: !0
        })
    }
    function E(e, t, i, s, a) {
        return {
            kind: "tone",
            wave: "sine",
            at: t,
            length: i + .01,
            frequency: {
                param: "multiplier",
                curve: w,
                scale: 440 * e * a
            },
            glide: {
                ratio: 1 / a,
                time: .035
            },
            envelope: {
                from: 0,
                attack: .006,
                peak: s,
                decay: i
            }
        }
    }
    function q(e, t, i) {
        return {
            kind: "tone",
            wave: "triangle",
            at: e,
            length: .095,
            frequency: t,
            glide: {
                to: 80,
                time: .08
            },
            envelope: {
                from: 0,
                attack: .004,
                peak: i,
                decay: .085
            },
            pitched: !1
        }
    }
    function N(e, t, i, s=0) {
        return A("game.hit", t, {
            at: s,
            rate: {
                param: "multiplier",
                curve: w,
                scale: e
            },
            length: i + .02,
            decay: i,
            pitched: !1
        })
    }
    let G = {
        max: 6,
        importance: 1
    }
      , L = {
        max: 3,
        importance: 1
    }
      , I = {
        pitch: [.99, 1.01],
        level: [.92, 1]
    };
    function D(e=1) {
        return [F("whoosh", .8 * e, {
            rate: u("progress", [0, .94], [1, 1.14]),
            length: .36,
            decay: .36
        }), O({
            param: "progress",
            curve: T
        }, .012, .32, .11 * e, .004, {
            pitched: !1
        }), O({
            param: "progress",
            curve: T,
            scale: 2
        }, .012, .16, .025 * e, .004, {
            pitched: !1
        }), A("game.hit", .3 * e, {
            at: .012,
            rate: {
                param: "progress",
                curve: R
            },
            length: .2,
            decay: .18,
            pitched: !1
        })]
    }
    function C(e) {
        return {
            bus: "world",
            distance: {
                ref: 3
            },
            voices: {
                max: 6,
                importance: .7
            },
            layers: [{
                kind: "tone",
                wave: "triangle",
                frequency: 140,
                glide: {
                    to: 48,
                    time: .22
                },
                envelope: {
                    attack: .004,
                    peak: .55,
                    decay: .26
                },
                length: .28
            }, {
                kind: "noise",
                color: "pink",
                randomOffset: .8,
                filter: {
                    type: "highpass",
                    frequency: 900
                },
                envelope: {
                    attack: .002,
                    peak: .7,
                    decay: .09
                },
                length: .1
            }, ...e ? [A("game.hit", .3, {
                bus: "interface",
                rate: y / 2082,
                length: .5,
                decay: .48,
                pitched: !1
            }), F("chimeSparkle", .18, {
                bus: "interface",
                length: .45,
                at: .02
            })] : [A("game.hit", .16, {
                bus: "interface",
                rate: d / 2082,
                length: .24,
                decay: .22,
                pitched: !1
            })]]
        }
    }
    let P = {
        "ui.hover": {
            bus: "interface",
            voices: {
                max: 2,
                importance: .3
            },
            variation: I,
            cooldown: {
                group: "ui.hover",
                seconds: .05
            },
            layers: [A("ui.hover", .18, {
                length: .055
            })]
        },
        "ui.click": {
            bus: "interface",
            voices: G,
            variation: I,
            layers: [{
                kind: "sample",
                takes: ["ui.click"],
                gain: .36
            }]
        },
        "ui.confirm": {
            bus: "interface",
            voices: G,
            variation: I,
            layers: [{
                kind: "sample",
                takes: ["ui.confirm"],
                gain: .38,
                pitched: !1
            }]
        },
        "ui.back": {
            bus: "interface",
            voices: G,
            variation: I,
            layers: [A("ui.toggle", .4, {
                rate: d / 1406,
                length: .12
            }), A("ui.toggle", .3, {
                at: .055,
                rate: p(12) / 1406,
                length: .13
            })]
        },
        "ui.error": {
            bus: "interface",
            voices: {
                max: 2,
                importance: 1
            },
            cooldown: {
                group: "ui.error",
                seconds: .25
            },
            layers: [A("ui.switch", .6, {
                rate: .7,
                length: .24,
                filter: {
                    type: "lowpass",
                    frequency: 2500
                }
            }), O(p(-12), 0, .08, .16, .004, {
                wave: "triangle",
                filter: {
                    type: "lowpass",
                    frequency: 1200
                }
            }), O(p(-13), .09, .11, .16, .004, {
                wave: "triangle",
                filter: {
                    type: "lowpass",
                    frequency: 1200
                }
            })]
        },
        "combo.skill": {
            bus: "interface",
            voices: G,
            layers: [E(1, 0, .075, .036, .99), q(0, 240, .017), N(.75, .8, .12), F("whoosh", .6, {
                rate: 1.3,
                length: .24
            })]
        },
        "combo.sustain": {
            bus: "interface",
            voices: G,
            layers: [E(1, 0, .075, .018, .99), A("ui.tick", .45, {
                rate: {
                    param: "multiplier",
                    curve: w
                },
                length: .04
            })]
        },
        "combo.level": {
            bus: "interface",
            voices: G,
            duck: c,
            level: u("multiplier", [1, .7805337553123837], [5, 1.0071403294353338]),
            layers: [E(1, 0, .14, .058, .92), E(1.25, .075, .14, .058, .92), E(1.5, .15, .14, .058, .92), q(0, 240, .025), N(.75, .45, .18), A("game.riser", u("multiplier", [1, .3], [5, .5]), {
                offset: u("multiplier", [1, 2], [5, 5.6]),
                length: .26,
                decay: .26,
                attack: .01
            })]
        },
        "combo.tier": {
            bus: "interface",
            voices: G,
            duck: l,
            level: u("multiplier", [2, 1.1330328706147506], [5, 1.4477642235632922]),
            layers: [E(1, 0, .18, .058, .92), E(1.25, .06, .18, .058, .92), E(1.5, .12, .22, .058, .92), F("whoosh", .5, {
                length: .3
            }), N(.75, .85, .6), A("game.riser", .75, {
                offset: u("multiplier", [2, 3.6], [5, 5.6]),
                length: .5,
                decay: .5,
                attack: .01
            }), F("chimeHome", u("multiplier", [2, .55], [5, .85]), {
                at: .12,
                pitched: !1
            }), F("chimeSparkle", u("multiplier", [2, .35], [5, .65]), {
                at: .22,
                pitched: !1
            }), _(.12, 110, .16), A("game.chimes", {
                param: "multiplier",
                curve: {
                    interpolate: "floor",
                    points: [[1, 0], [5, .9]]
                }
            }, {
                at: .34,
                offset: S.chimeLift.offset,
                length: S.chimeLift.length,
                pitched: !1
            })]
        },
        "combo.finish": {
            bus: "interface",
            voices: G,
            duck: l,
            level: u("multiplier", [1, 1.0071403294353338], [5, 1.2589254117941673]),
            layers: [E(1.5, 0, .19, .058, .99), E(1.25, .09, .19, .058, .99), E(1, .18, .19, .058, .99), q(.18, 180, .025), F("whoosh", .45, {
                length: .3
            }), A("game.hit", .7, {
                at: .18,
                rate: y / 2082,
                length: .62,
                decay: .6,
                pitched: !1
            }), F("chimeHome", u("multiplier", [1, .6], [5, 1]), {
                at: .18,
                pitched: !1
            })]
        },
        "combo.break": {
            bus: "interface",
            voices: {
                max: 1,
                importance: 1
            },
            layers: [O(p(12), .06, .42, .09, .01, {
                glide: {
                    to: p(-7),
                    time: .4
                },
                pitched: !1,
                filter: {
                    type: "lowpass",
                    frequency: 1400
                }
            }), O(p(9), .06, .42, .06, .01, {
                glide: {
                    to: p(-10),
                    time: .4
                },
                pitched: !1,
                filter: {
                    type: "lowpass",
                    frequency: 1400
                }
            }), A("game.riser", .55, {
                at: .06,
                offset: 2.4,
                rate: .55,
                length: .44,
                decay: .44,
                attack: .02,
                pitched: !1,
                filter: {
                    type: "lowpass",
                    frequency: 1800,
                    sweep: {
                        to: 220,
                        time: .4
                    }
                }
            })]
        },
        "xp.stamp": {
            bus: "interface",
            voices: G,
            layers: [O(140, 0, .16, .13, .008, {
                glide: {
                    to: 45,
                    time: .16
                }
            }), A("game.hit", .6, {
                rate: d / 2082,
                length: .2,
                decay: .18,
                pitched: !1
            })]
        },
        "xp.fill": {
            bus: "interface",
            voices: G,
            layers: [O(330, 0, .85, .02, .008, {
                glide: {
                    to: 880,
                    time: .85
                }
            }), A("game.riser", .3, {
                offset: 2.6,
                length: .85,
                attack: .6,
                decay: .85
            })]
        },
        "xp.land": {
            bus: "interface",
            voices: G,
            layers: [O(660, 0, .16, .06, .008), A("ui.toggle", .4, {
                rate: g / 1406,
                length: .12
            }), F("chimeHome", .6, {
                length: .5,
                pitched: !1
            })]
        },
        "xp.tick": {
            bus: "interface",
            voices: G,
            layers: [O(740, 0, .07, .03, .008), A("ui.tick", .5, {
                rate: 1.1,
                length: .04
            })]
        },
        "xp.levelup": {
            bus: "interface",
            voices: G,
            duck: l,
            level: 1.2589254117941673,
            layers: [...[p(5), p(9), p(12), p(17)].map( (e, t) => O(e, .055 * t, .3, .1, .008, {
                pitched: !1
            })), F("whoosh", .45, {
                length: .3
            }), A("game.hit", .75, {
                at: .165,
                rate: y / 2082,
                length: .9,
                decay: .88,
                pitched: !1
            }), F("chimeHome", .85, {
                at: .165,
                pitched: !1
            }), F("chimeSparkle", .65, {
                at: .28,
                pitched: !1
            }), _(.165, 110, .18)]
        },
        "xp.unlock": {
            bus: "interface",
            voices: G,
            duck: l,
            level: 1.2589254117941673,
            layers: [...[p(5), p(9), p(12), p(17), p(21)].map( (e, t) => O(e, .085 * t, .45, .1, .008, {
                pitched: !1
            })), A("game.riser", .45, {
                offset: 4.6,
                length: .34,
                attack: .3,
                decay: .34
            }), A("game.hit", .75, {
                at: .34,
                rate: y / 2082,
                length: 1.1,
                decay: 1.08,
                pitched: !1
            }), F("chimeHome", .8, {
                at: .34,
                pitched: !1
            }), F("chimeLift", .85, {
                at: .62,
                pitched: !1
            }), _(.34, 110, .18)]
        },
        "time.slow": {
            bus: "interface",
            voices: {
                max: 1,
                importance: 1
            },
            layers: [A("game.riser", .7, {
                offset: 4.2,
                rate: .5,
                length: .9,
                attack: .02,
                decay: .9,
                pitched: !1,
                filter: {
                    type: "lowpass",
                    frequency: 3200,
                    sweep: {
                        to: 280,
                        time: .8
                    }
                }
            }), F("whoosh", .55, {
                rate: .55,
                length: .42
            }), O(220, 0, .6, .12, .01, {
                glide: {
                    to: 55,
                    time: .6
                },
                pitched: !1
            })]
        },
        "time.resume": {
            bus: "interface",
            voices: {
                max: 1,
                importance: 1
            },
            requires: "duration",
            layers: [{
                kind: "sample",
                takes: ["fx.time-resume"],
                gain: .55,
                at: u("duration", [1.645, 0], [101.645, 100]),
                offset: u("duration", [0, 1.645], [1.645, 0])
            }, F("whoosh", .22, {
                at: u("duration", [.06, 0], [100.06, 100]),
                rate: 1.2,
                length: .3
            })]
        },
        "race.ready": {
            bus: "race",
            voices: {
                max: 1,
                importance: 1
            },
            cooldown: {
                group: "race.ready",
                seconds: .8
            },
            layers: [A("race.start", .42, {
                length: .24,
                decay: .24,
                pitched: !1
            })]
        },
        "race.count": {
            bus: "race",
            voices: L,
            level: 1.4125375446227544,
            layers: [A("race.start", .42, {
                length: .24,
                decay: .24,
                pitched: !1
            })]
        },
        "race.go": {
            bus: "race",
            voices: L,
            duck: c,
            level: 1.4125375446227544,
            layers: [A("race.start", .42, {
                rate: 1.5,
                length: .48,
                decay: .48,
                pitched: !1
            }), A("game.hit", .6, {
                rate: y / 2082,
                length: .48,
                decay: .46,
                pitched: !1
            }), F("whoosh", .7), _(0, 120, .16)]
        },
        "race.gate": {
            bus: "race",
            voices: L,
            duck: c,
            level: 1.4125375446227544,
            defaults: {
                progress: 0
            },
            layers: D(1.8)
        },
        "race.lastgate": {
            bus: "race",
            voices: L,
            duck: c,
            level: 1.4125375446227544,
            defaults: {
                progress: 1
            },
            layers: [...D(1.8), A("game.riser", .4, {
                offset: 5.2,
                length: 1.1,
                attack: .85,
                decay: 1.1
            })]
        },
        "race.finish": {
            bus: "race",
            voices: L,
            duck: l,
            level: 1.4125375446227544,
            layers: [F("whoosh", .9), A("game.hit", 1, {
                rate: y / 2082,
                length: 1.25,
                decay: 1.2,
                pitched: !1
            }), F("chimeHome", 1, {
                pitched: !1
            }), F("chimeSparkle", .7, {
                at: .1,
                pitched: !1
            }), _(0, 110, .25, .3), A("race.cheer", .7, {
                at: .04,
                length: 2.9,
                attack: .15,
                decay: 2.9
            })]
        },
        "race.record": {
            bus: "race",
            voices: L,
            duck: l,
            level: 1.4125375446227544,
            layers: [...[d, m, g, y].map( (e, t) => O(e, .07 * t, .4, .12, .006, {
                pitched: !1
            })), A("game.hit", .8, {
                at: .21,
                rate: b / 2082,
                length: .9,
                decay: .88,
                pitched: !1
            }), F("chimeLift", 1.2, {
                at: .21,
                pitched: !1
            }), A("race.cheer", .6, {
                at: .2,
                offset: .6,
                length: 2.2,
                attack: .3,
                decay: 2.2
            })]
        },
        "race.tick": {
            bus: "race",
            voices: L,
            defaults: {
                secondsLeft: 5
            },
            layers: [F("beep", .6, {
                rate: {
                    param: "secondsLeft",
                    curve: x,
                    scale: p(0) / 420
                },
                length: .14,
                pitched: !1
            }), A("ui.tick", .3, {
                length: .04
            }), O({
                param: "secondsLeft",
                curve: x,
                scale: p(0)
            }, 0, .12, .04, .004, {
                pitched: !1
            })]
        },
        "race.leave": {
            bus: "race",
            voices: L,
            layers: [...[587.33, 392, 261.63].map( (e, t) => O(e, .07 * t, .22, .1, .006, {
                wave: "triangle",
                glide: {
                    ratio: .7,
                    time: .22
                }
            })), F("beep", .4, {
                rate: p(-3) / 420,
                length: .3,
                pitched: !1,
                filter: {
                    type: "lowpass",
                    frequency: 1500
                }
            }), F("whoosh", .35, {
                rate: .6,
                length: .4,
                filter: {
                    type: "lowpass",
                    frequency: 1800
                }
            })]
        },
        "lesson.objective": {
            bus: "race",
            voices: L,
            duck: c,
            level: 1.4125375446227544,
            defaults: {
                progress: 0
            },
            layers: D(1.8)
        },
        "lesson.complete": {
            bus: "race",
            voices: L,
            duck: l,
            level: 1.4125375446227544,
            layers: [F("whoosh", .75), A("game.hit", .9, {
                rate: y / 2082,
                length: 1.1,
                decay: 1.05,
                pitched: !1
            }), F("chimeHome", .9, {
                pitched: !1
            }), F("chimeSparkle", .65, {
                at: .1,
                pitched: !1
            }), _(0, 110, .2, .25)]
        },
        "laser.shot": {
            bus: "world",
            distance: {
                ref: 4
            },
            variation: {
                pitch: [.965, 1.035]
            },
            voices: {
                max: 4,
                importance: .7
            },
            layers: [A("game.shot", .8, {
                length: .28,
                decay: .28,
                filter: {
                    type: "highpass",
                    frequency: 250
                }
            })]
        },
        "laser.fire": {
            bus: "interface",
            level: 4.216965034285822,
            variation: {
                pitch: [.965, 1.035]
            },
            voices: {
                max: 3,
                importance: .9
            },
            layers: [{
                kind: "sample",
                takes: ["game.shot"],
                gain: .1
            }]
        },
        "combat.zap": {
            bus: "interface",
            distance: {
                ref: 1.5,
                rolloff: 0
            },
            voices: {
                max: 2,
                importance: 1
            },
            variation: {
                pitch: [.97, 1.03]
            },
            defaults: {
                weight: .35
            },
            level: u("weight", [.35, 2.6], [1, 3.4]),
            layers: [A("game.shield", .22, {
                length: u("weight", [.35, .28], [1, .65]),
                decay: u("weight", [.35, .28], [1, .65])
            })]
        },
        "combat.hit": {
            bus: "interface",
            level: 9.440608762859233,
            voices: {
                max: 3,
                importance: .8
            },
            variation: {
                pitch: [.98, 1.02]
            },
            layers: [{
                kind: "sample",
                takes: ["game.hitmarker"],
                gain: .11
            }]
        },
        "combat.ko": {
            bus: "interface",
            level: 8.413951416451951,
            voices: {
                max: 2,
                importance: 1
            },
            duck: c,
            layers: [{
                kind: "sample",
                takes: ["game.puff"],
                gain: .12
            }, _(0, 130, .04, .12), F("chimeSparkle", .09, {
                at: .12,
                length: .45,
                pitched: !1
            })]
        },
        "combat.predict": {
            bus: "interface",
            voices: {
                max: 3,
                importance: .5
            },
            layers: [A("game.hitmarker", 1.5, {
                length: .055,
                decay: .055,
                filter: {
                    type: "highpass",
                    frequency: 1e3
                }
            })]
        },
        "dummy.hit": C(!1),
        "dummy.headshot": C(!0),
        "dummy.return": {
            bus: "world",
            distance: {
                ref: 4
            },
            voices: {
                max: 4,
                importance: .4
            },
            layers: [{
                kind: "tone",
                wave: "sine",
                frequency: 520,
                glide: {
                    to: 1040,
                    time: .28
                },
                envelope: {
                    attack: .05,
                    peak: .06,
                    decay: .34
                },
                length: .35
            }, A("game.riser", .22, {
                offset: 5.6,
                length: .42,
                attack: .18,
                decay: .42
            })]
        }
    };
    e.s(["GAME_SOUNDS", 0, P, "ZAP_DISTANCE", 0, 1.5], 488691);
    var z = e.i(252497)
      , B = e.i(12746);
    function H(e, t) {
        if ("power" in e) {
            let[i,s] = e.domain
              , a = s - i
              , r = Number.isFinite(t) && 0 !== a ? Math.max(0, Math.min(1, (t - i) / a)) : 0;
            return e.range[0] + (e.range[1] - e.range[0]) * Math.pow(r, e.power)
        }
        let {points: i} = e;
        if (!i.length)
            return 0;
        let s = i[0]
          , a = i[i.length - 1];
        if (!Number.isFinite(t))
            return s[1];
        let r = e.interpolate ?? "linear";
        if ("floor" === r) {
            let e = s[1];
            for (let[s,a] of i)
                s <= t && (e = a);
            return e
        }
        if ("ceil" === r) {
            for (let[e,s] of i)
                if (t <= e)
                    return s;
            return a[1]
        }
        if (t <= s[0])
            return s[1];
        if (t >= a[0])
            return a[1];
        for (let e = 1; e < i.length; e++) {
            let[s,a] = i[e];
            if (t > s)
                continue;
            let[n,o] = i[e - 1]
              , h = s === n ? 1 : (t - n) / (s - n);
            return "exponential" === r ? o * Math.pow(a / o, h) : o + (a - o) * h
        }
        return a[1]
    }
    e.s(["evaluateCurve", 0, H, "resolveValue", 0, function(e, t, i=0) {
        if (void 0 === e)
            return i;
        if ("number" == typeof e)
            return e;
        let s = t[e.param] ?? 0
          , a = (e.curve ? H(e.curve, s) : s) * (e.scale ?? 1);
        return Number.isFinite(a) ? a : i
    }
    ], 189004);
    let V = {
        tone: {
            power: 1.35,
            domain: [0, 1],
            range: [0, .22]
        },
        broadband: {
            power: 1.6,
            domain: [0, 1],
            range: [0, .1]
        },
        whine: {
            power: 1,
            domain: [0, 1],
            range: [0, .035]
        },
        absorption: {
            points: [[.4, 14e3], [40, 1800]],
            interpolate: "exponential"
        }
    }
      , U = {
        gain: {
            power: 2,
            domain: [0, 28],
            range: [0, .1]
        },
        filter: {
            points: [[0, 280], [28, 1e3]]
        }
    }
      , X = {
        body: {
            power: 1.1,
            domain: [0, 1],
            range: [0, 1.6]
        },
        tone: {
            power: 1.35,
            domain: [0, 1],
            range: [0, .097]
        },
        whine: {
            power: 1,
            domain: [0, 1],
            range: [0, .041]
        },
        noise: {
            power: 1.6,
            domain: [0, 1],
            range: [0, .097]
        },
        rip: {
            power: 1.2,
            domain: [0, 1],
            range: [0, 1.1]
        },
        onboard: {
            points: [[.3, 1], [1.2, 0]]
        }
    };
    function Q(e, t, i, s, a) {
        return t + (e - t) * Math.exp(-i / (t > e ? s : a))
    }
    function W(e, [t,i], [s,a]) {
        return {
            param: e,
            curve: {
                points: [[t, i], [s, a]]
            }
        }
    }
    function Y(e, t) {
        return {
            param: "strength",
            curve: {
                power: 1.5,
                domain: [.1, 1],
                range: [e, t]
            }
        }
    }
    e.s(["CRAFT_MOTORS", 0, {
        freestyle: {
            body: [{
                region: "m2.low",
                at: .25
            }, {
                region: "m2.mid",
                at: .5
            }, {
                region: "m2.high",
                at: .85
            }],
            ripPitch: 1,
            levels: {
                body: 1,
                rip: 1,
                tone: 1,
                whine: 1,
                noise: 1
            },
            frameHz: 210
        },
        racer: {
            body: [{
                region: "m2.low",
                at: .22,
                pitch: 1.04
            }, {
                region: "m2.mid",
                at: .42,
                pitch: 1.04
            }, {
                region: "m2.high",
                at: .7,
                pitch: 1.04
            }],
            ripPitch: 1.04,
            levels: {
                body: 1,
                rip: 1.15,
                tone: 1,
                whine: 1.2,
                noise: 1
            },
            frameHz: 240
        },
        "long-range": {
            body: [{
                region: "m2.low",
                at: .35,
                pitch: .9
            }, {
                region: "m2.mid",
                at: .6,
                pitch: .9
            }, {
                region: "m2.high",
                at: .95,
                pitch: .9
            }],
            ripPitch: .9,
            levels: {
                body: .96,
                rip: .78,
                tone: 1.22,
                whine: .61,
                noise: .87
            },
            frameHz: 160
        },
        whoop: {
            body: [{
                region: "w2",
                at: 0,
                pitch: .82
            }],
            ripPitch: .82,
            levels: {
                body: 1.07,
                rip: .36,
                tone: .83,
                whine: 1.9,
                noise: .95
            },
            frameHz: 420
        },
        cinewhoop: {
            body: [{
                region: "w2",
                at: .3,
                pitch: .85
            }, {
                region: "m2.high",
                at: .8,
                pitch: .62
            }],
            ripPitch: .7,
            levels: {
                body: 1.26,
                rip: .76,
                tone: 1.13,
                whine: 1.5,
                noise: 1.9
            },
            frameHz: 300
        }
    }, "DISTANCE_ROLLOFF", 0, 1, "HARMONIC_GAINS", 0, [1, .45, .22, .1], "IDLE_LOAD", 0, {
        share: 0,
        spool: 0,
        punch: 0,
        brake: 0,
        rip: 0,
        wash: 0
    }, "MAX_DISTANCE", 0, 80, "MOTOR_CURVES", 0, X, "MOTOR_DETUNE", 0, [1, 1.008, .993, 1.013], "MOTOR_REGIONS", 0, {
        "m2.low": {
            buffer: "drone.fpv-race-pass",
            start: 1.7,
            end: 2.6,
            hz: 185.5,
            ref: "shaft",
            gain: 1.06
        },
        "m2.mid": {
            buffer: "drone.fpv-race-pass",
            start: .3,
            end: 1.6,
            hz: 203,
            ref: "shaft",
            gain: .81
        },
        "m2.high": {
            buffer: "drone.fpv-race-pass",
            start: 5.97,
            end: 6.5,
            hz: 246,
            ref: "shaft",
            gain: .91
        },
        w2: {
            buffer: "drone.mini-quad-loop",
            start: 0,
            end: 2.97,
            hz: 960,
            ref: "bpf",
            gain: .88
        },
        "f2.rip": {
            buffer: "drone.fly-by",
            start: .95,
            end: 1.85,
            hz: 648,
            ref: "bpf",
            gain: .5
        }
    }, "REF_DISTANCE", 0, .4, "ROTOR_CURVES", 0, V, "WIND_CURVES", 0, U, "bodyWeights", 0, function(e, t, i=[]) {
        if (i.length = e.length,
        i.fill(0),
        !e.length)
            return i;
        let s = Number.isFinite(t) ? t : 0;
        if (s <= e[0].at)
            return i[0] = 1,
            i;
        let a = e.length - 1;
        if (s >= e[a].at)
            return i[a] = 1,
            i;
        let r = 0;
        for (; s > e[r + 1].at; )
            r++;
        let n = (s - e[r].at) / Math.max(1e-6, e[r + 1].at - e[r].at);
        return i[r] = Math.cos(n * Math.PI / 2),
        i[r + 1] = Math.sin(n * Math.PI / 2),
        i
    }
    , "distanceLowpassHz", 0, function(e) {
        return H(V.absorption, e)
    }
    , "dopplerFactor", 0, function(e) {
        return 343 / (343 + (0,
        B.clamp)(e, -80, 80))
    }
    , "inducedSpeed", 0, function(e, t) {
        return Math.sqrt(9.81 * Math.max(0, e) / 4 / (2.45 * Math.max(1e-6, Math.PI * t * t)))
    }
    , "isAudibleRpm", 0, function(e) {
        return e >= 200
    }
    , "motorToRpm", 0, function(e, t, i=28e3) {
        return t && Number.isFinite(e) ? (0,
        B.clamp01)(e) * i : 0
    }
    , "nextMotorLoad", 0, function(e, t, i) {
        var s, a, r, n;
        let o, h;
        if (!(i > 0))
            return e;
        let l = (0,
        B.clamp01)(Number.isFinite(t.share) ? t.share : 0)
          , c = Math.min(i, .1)
          , u = Q(e.spool, (l - e.share) / c, c, .04, .04)
          , p = (0,
        B.clamp01)(Number.isFinite(t.thrust) ? t.thrust : 0);
        return {
            share: l,
            spool: u,
            punch: Q(e.punch, (0,
            B.clamp01)(u / 3), c, .02, .25),
            brake: Q(e.brake, (0,
            B.clamp01)(-u / 3), c, .02, .3),
            rip: Q(e.rip, p * (s = t.inflow,
            a = t.shaftHz,
            o = Math.max(1, t.pitch * a),
            (0,
            B.clamp01)(1 - Math.max(0, Number.isFinite(s) ? s : 0) / o)), c, .03, .15),
            wash: Q(e.wash, (r = t.inflow,
            n = t.induced,
            h = Math.max(0, -(Number.isFinite(r) ? r : 0)) / Math.max(.5, n),
            (0,
            B.clamp01)(h / .6) * (0,
            B.clamp01)((3 - h) / 1.5) * (0,
            B.clamp01)(p / .15)), c, .04, .35)
        }
    }
    , "onboardAmount", 0, function(e) {
        return H(X.onboard, e)
    }
    , "regionRate", 0, function(e, t, i, s=1) {
        let a = "shaft" === e.ref ? t : t * i;
        return (0,
        B.clamp)(a * s / e.hz, .25, 3)
    }
    , "rpmToBpf", 0, function(e, t=z.PROP_BLADE_COUNT) {
        return Math.max(0, t) * Math.max(0, e) / 60
    }
    , "rpmToWhineHz", 0, function(e, t=7) {
        return Math.max(0, e) / 60 * t
    }
    , "windGain", 0, function(e) {
        return H(U.gain, e)
    }
    ], 931245);
    let Z = e => ({
        strength: [e, 1 / 0]
    })
      , j = {
        "impact.hit": {
            bus: "world",
            distance: {
                ref: 2,
                max: 80
            },
            requires: "strength",
            defaults: {
                strike: 0
            },
            level: W("strength", [.5, 2.6], [1, 6.24]),
            cooldown: {
                group: "impact",
                seconds: .085
            },
            variation: {
                pitch: [.94, 1.06],
                level: [.88, 1]
            },
            voices: {
                max: 4,
                importance: .12820512820512822
            },
            layers: [{
                kind: "sample",
                takes: ["impact.grass-1", "impact.grass-2"],
                gain: Y(.08, 1),
                filter: {
                    type: "lowpass",
                    frequency: 6e3
                }
            }, {
                kind: "sample",
                takes: ["impact.plastic-1", "impact.plastic-2", "impact.plastic-3", "impact.plastic-4"],
                gain: Y(.04, .3),
                filter: {
                    type: "lowpass",
                    frequency: 2500
                }
            }, {
                kind: "sample",
                takes: ["impact.frame-crack"],
                when: Z(.75),
                gain: W("strength", [.75, .1575], [1, .45])
            }, {
                kind: "sample",
                takes: ["impact.frame-crack"],
                when: {
                    strike: [.5, 1 / 0],
                    strength: [.12, .6]
                },
                rate: 1.35,
                gain: W("strength", [.12, .1], [.6, .3]),
                filter: {
                    type: "highpass",
                    frequency: 1600
                }
            }, {
                kind: "tone",
                wave: "sine",
                when: Z(.35),
                pitched: !1,
                frequency: 110,
                glide: {
                    to: 42,
                    time: .16
                },
                envelope: {
                    attack: .003,
                    peak: W("strength", [.35, 0], [1, .5]),
                    decay: .18
                },
                length: .2
            }]
        },
        ...P,
        "menu.touchdown": {
            bus: "interface",
            voices: {
                max: 2,
                importance: 1
            },
            layers: [{
                kind: "tone",
                wave: "sine",
                frequency: 135,
                glide: {
                    to: 48,
                    time: .085
                },
                envelope: {
                    from: 0,
                    attack: .003,
                    peak: .13,
                    decay: .105
                },
                length: .11
            }]
        }
    }
      , K = {
        max: 1,
        importance: 2
    }
      , $ = {
        "drone.motor": {
            bus: "motors",
            distance: {
                ref: .4,
                max: 80,
                rolloff: 1
            },
            voices: {
                max: 1,
                importance: 4
            },
            curves: X,
            buffers: {
                m2: "drone.fpv-race-pass",
                w2: "drone.mini-quad-loop",
                f2: "drone.fly-by"
            }
        },
        "drone.rotors": {
            bus: "motors",
            distance: {
                ref: .4,
                max: 80,
                rolloff: 1
            },
            voices: {
                max: 1,
                importance: 4
            },
            curves: V
        },
        "drone.wind": {
            bus: "wind",
            voices: {
                max: 1,
                importance: 4
            },
            curves: U
        },
        "drone.other": {
            bus: "motors",
            distance: {
                ref: 2.5,
                max: 80,
                rolloff: 1
            },
            voices: {
                max: 4,
                importance: 1
            },
            level: .56,
            curves: X
        },
        car: {
            bus: "world",
            distance: {
                ref: 7,
                rolloff: 1.15,
                max: 100
            },
            voices: {
                max: 8,
                importance: .6
            },
            level: .8,
            curves: o,
            buffers: {
                mid: "car.exhaust-mid",
                high: "car.exhaust-high",
                body: "car.exhaust-body",
                tire: "car.tire-skid"
            }
        },
        coaster: {
            bus: "world",
            distance: {
                ref: 6,
                rolloff: 1.2,
                max: 75
            },
            voices: {
                max: 4,
                importance: .5
            }
        },
        "impact.scrape": {
            bus: "world",
            distance: {
                ref: 2,
                max: 60
            },
            voices: {
                max: 1,
                importance: .9
            },
            buffers: {
                slide: "impact.scrape"
            },
            level: .33,
            curves: {
                gain: {
                    power: .7,
                    domain: [.5, 9],
                    range: [0, 1]
                },
                rate: {
                    points: [[0, .6], [10, 1.04]]
                }
            }
        },
        "ambience.open": {
            bus: "world",
            voices: K,
            buffers: {
                bed: "ambience.airfield"
            },
            level: .24
        },
        "ambience.court": {
            bus: "world",
            voices: K,
            buffers: {
                bed: "ambience.airfield"
            },
            level: .17
        },
        "ambience.park": {
            bus: "world",
            voices: K,
            buffers: {
                bed: "ambience.park"
            },
            level: .26
        },
        "ambience.mall": {
            bus: "world",
            voices: K,
            buffers: {
                bed: "ambience.mall"
            },
            level: .29
        }
    };
    e.s(["LOOPS", 0, $, "SOUNDS", 0, j], 377336)
}
, 383839, e => {
    "use strict";
    function t(e, t) {
        return e ? e[0] + (e[1] - e[0]) * t() : 1
    }
    function i(e, t, i) {
        if (e <= 1)
            return 0;
        if (t < 0 || t >= e)
            return Math.min(e - 1, Math.floor(i() * e));
        let s = Math.min(e - 2, Math.floor(i() * (e - 1)));
        return s >= t ? s + 1 : s
    }
    e.s(["Variator", 0, class {
        random;
        last;
        constructor(e=Math.random) {
            this.random = e,
            this.last = new Map
        }
        next(e, s, a) {
            let r = i(s, this.last.get(e) ?? -1, this.random);
            return this.last.set(e, r),
            {
                take: r,
                pitch: t(a?.pitch, this.random),
                level: t(a?.level, this.random)
            }
        }
        pick(e, t) {
            let s = i(t, this.last.get(e) ?? -1, this.random);
            return this.last.set(e, s),
            s
        }
        roll() {
            return this.random()
        }
    }
    , "seededRandom", 0, function(e) {
        let t = e >>> 0;
        return () => {
            let e = t = t + 0x6d2b79f5 >>> 0;
            return e = Math.imul(e ^ e >>> 15, 1 | e),
            (((e ^= e + Math.imul(e ^ e >>> 7, 61 | e)) ^ e >>> 14) >>> 0) / 0x100000000
        }
    }
    ])
}
, 252497, e => {
    "use strict";
    e.i(247167),
    e.s(["ARM_LENGTH", 0, .11, "CRASH_FORCE_THRESHOLD", 0, 220, "CRASH_FORCE_THRESHOLD_BOTTOM", 0, 800, "CRASH_UNDERSIDE_ALIGN", 0, .5, "DRONE_HALF_EXTENTS", 0, [.12, .035, .12], "FPV_CAMERA_GUARD_RADIUS", 0, .085, "FPV_CAMERA_MOUNT_OFFSET", 0, [0, .055, -.035], "FPV_PROP_LAYER", 0, 2, "GRAVITY", 0, 9.81, "GROUND_OCCLUDER_LAYER", 0, 9, "GROUND_REST_ANGVEL", 0, 2, "GROUND_REST_DWELL_S", 0, .12, "GROUND_REST_SPEED", 0, 1.2, "GROUND_SUPPORT_UP_DOT", 0, .5, "GROUND_TIP_TORQUE", 0, .55, "GROUND_TURTLE_DOT", 0, -.7, "GROUND_UPRIGHT_DOT", 0, .7, "PROP_BLADE_COUNT", 0, 3, "PROP_SPIN_SIGNS", 0, [-1, 1, 1, -1], "STATIC_SHADOW_LAYER", 0, 10])
}
, 234979, 315213, e => {
    "use strict";
    var t = e.i(475127);
    e.s(["DRIFT_AXLE_Z", 0, 1.43, "DRIFT_COUNTERSTEER_GAIN", 0, .95, "DRIFT_WHEEL_RADIUS", 0, .34, "DRIFT_WHEEL_WIDTH", 0, .28, "DRIFT_WHEEL_X", 0, 1.01, "createDriftPose", 0, () => ({
        x: 0,
        z: 0,
        yaw: 0,
        slip: 0
    }), "driftLocalToWorld", 0, function(e, i, s, a) {
        let r = t.cos(e.yaw)
          , n = t.sin(e.yaw);
        return a.x = e.x + r * i + n * s,
        a.z = e.z - n * i + r * s,
        a
    }
    ], 315213);
    let i = {
        mass: 1300,
        sprungMass: 1180,
        yawInertia: 2e3,
        rollInertia: 420,
        pitchInertia: 1650,
        cgHeight: .46,
        cgForward: .05,
        halfWheelbase: 1.43,
        halfTrack: 1.01,
        wheelRadius: .34,
        wheelInertia: 1.1,
        front: {
            grip: 1,
            peakSlip: .11,
            shape: 1.45,
            loadSensitivity: .08,
            nominalLoad: 3200
        },
        rear: {
            grip: .85,
            peakSlip: .12,
            shape: 1.5,
            loadSensitivity: .08,
            nominalLoad: 3200
        },
        springs: {
            front: 18e3,
            rear: 16500
        },
        dampers: {
            front: 2700,
            rear: 2500
        },
        antiRoll: {
            front: 3e3,
            rear: 1e3
        },
        torqueCurve: [[800, 260], [2e3, 380], [3e3, 450], [4e3, 510], [5e3, 530], [6e3, 520], [7e3, 480], [7600, 440], [8e3, 0]],
        idleRpm: 900,
        limiterRpm: 7600,
        engineInertia: .2,
        engineFriction: [15, .0045],
        gears: [3.32, 2.2, 1.6, 1.25, 1, .82],
        finalDrive: 3.9,
        shiftTime: .12,
        clutch: {
            torque: 800,
            ramp: .15
        },
        brakeTorque: {
            front: 1600,
            rear: 900,
            handbrake: 1500
        },
        steerLock: 50 * Math.PI / 180,
        steerRate: 4,
        drag: .45,
        rolling: .012
    }
      , s = () => ({
        spin: 0,
        angle: 0,
        slipRatio: 0,
        slipAngle: 0,
        load: 0,
        forceX: 0,
        forceY: 0
    })
      , a = 2 * Math.PI
      , r = 60 / a
      , n = e => e > Math.PI ? e - a : e <= -Math.PI ? e + a : e
      , o = (e, t, i) => e < t ? t : e > i ? i : e
      , h = e => {
        let i = Math.PI / (2 * e);
        return t.sin(i) / t.cos(i)
    }
    ;
    function l(e, t) {
        let i = e.torqueCurve;
        if (t <= i[0][0])
            return i[0][1];
        for (let e = 1; e < i.length; e++) {
            if (t > i[e][0])
                continue;
            let[s,a] = i[e - 1]
              , [r,n] = i[e];
            return a + (n - a) * (t - s) / (r - s)
        }
        return 0
    }
    class c {
        spec;
        telemetry = {
            x: 0,
            y: 0,
            z: 0,
            yaw: 0,
            roll: 0,
            pitch: 0,
            slip: 0,
            speed: 0,
            heading: 0,
            yawRate: 0,
            steer: 0,
            wheels: [s(), s(), s(), s()],
            rpm: 0,
            gear: 1,
            engaged: !0,
            throttle: 0,
            brake: 0,
            handbrake: 0,
            accelForward: 0,
            accelLeft: 0
        };
        x = 0;
        z = 0;
        yaw = 0;
        vx = 0;
        vz = 0;
        yawRate = 0;
        steer = 0;
        spinFL = 0;
        spinFR = 0;
        spinRear = 0;
        engineSpin = 0;
        gear = 2;
        shifting = 0;
        engaged = 1;
        clutchTime = 0;
        heave = 0;
        heaveRate = 0;
        roll = 0;
        rollRate = 0;
        pitch = 0;
        pitchRate = 0;
        angleFL = 0;
        angleFR = 0;
        angleRear = 0;
        throttle = 0;
        brake = 0;
        handbrake = 0;
        clutch = 0;
        frontB;
        rearB;
        wheelX;
        wheelY;
        staticLoad;
        tyre = [0, 1, 2, 3].map( () => ({
            x: 0,
            y: 0,
            dxdk: 0
        }));
        loads = new Float64Array(4);
        long = new Float64Array(4);
        lat = new Float64Array(4);
        kappa = new Float64Array(4);
        tanAlpha = new Float64Array(4);
        fx = new Float64Array(4);
        fy = new Float64Array(4);
        accel = {
            forward: 0,
            left: 0
        };
        constructor(e=i) {
            this.spec = e,
            this.frontB = h(e.front.shape),
            this.rearB = h(e.rear.shape);
            const t = e.halfWheelbase - e.cgForward
              , s = e.halfWheelbase + e.cgForward
              , a = e.halfTrack;
            this.wheelX = [t, t, -s, -s],
            this.wheelY = [a, -a, a, -a];
            const r = t + s
              , n = 9.81 * e.mass * s / r / 2
              , o = 9.81 * e.mass * t / r / 2;
            this.staticLoad = [n, n, o, o],
            this.refresh()
        }
        place(e, i, s, a, h=2) {
            let l = this.spec
              , c = t.sin(s)
              , u = t.cos(s);
            this.x = e + c * l.cgForward,
            this.z = i + u * l.cgForward,
            this.yaw = n(s),
            this.vx = c * a,
            this.vz = u * a,
            this.yawRate = 0,
            this.steer = 0,
            this.spinFL = this.spinFR = this.spinRear = a / l.wheelRadius,
            this.gear = o(Math.round(h), 1, l.gears.length),
            this.engineSpin = Math.max(l.idleRpm / r, this.spinRear * this.ratio()),
            this.shifting = 0,
            this.engaged = 1,
            this.clutchTime = 0,
            this.heave = this.heaveRate = this.roll = this.rollRate = this.pitch = this.pitchRate = 0,
            this.angleFL = this.angleFR = this.angleRear = 0,
            this.throttle = this.brake = this.handbrake = this.clutch = 0,
            this.refresh()
        }
        placeSliding(e, i, s, a, n, h, l, c=2) {
            let u = this.spec;
            this.place(e, i, s + a, n, c),
            this.vx = t.sin(s) * n,
            this.vz = t.cos(s) * n,
            this.yawRate = h;
            let p = n * t.cos(a)
              , d = -n * t.sin(a)
              , f = u.halfWheelbase - u.cgForward
              , m = d + h * f;
            this.steer = o(t.atan2(m, p), -u.steerLock, u.steerLock),
            this.spinFL = this.spinFR = (p * t.cos(this.steer) + m * t.sin(this.steer)) / u.wheelRadius,
            this.spinRear = (1 + l) * p / u.wheelRadius,
            this.engineSpin = Math.max(u.idleRpm / r, this.spinRear * this.ratio());
            let g = n * h
              , v = g * t.sin(a)
              , y = g * t.cos(a)
              , {springs: b, antiRoll: w, sprungMass: x, cgHeight: M, halfTrack: k} = u
              , T = u.halfWheelbase + u.cgForward
              , R = 2 * k * k * (b.front + b.rear + 2 * (w.front + w.rear))
              , S = 2 * (b.front + b.rear)
              , A = 2 * (b.front * f - b.rear * T)
              , F = 2 * (b.front * f * f + b.rear * T * T) - A * A / S;
            this.roll = x * y * M / R,
            this.pitch = x * v * M / F,
            this.heave = -this.pitch * A / S,
            this.refresh()
        }
        ratio() {
            return this.spec.gears[this.gear - 1] * this.spec.finalDrive
        }
        step(e) {
            let t = this.spec
              , i = .0020833333333333333;
            this.throttle = o(e.throttle, 0, 1),
            this.brake = o(e.brake, 0, 1),
            this.handbrake = o(e.handbrake, 0, 1),
            this.clutch = o(e.clutch, 0, 1);
            let s = o(Math.round(e.gear), 1, t.gears.length);
            s !== this.gear && (this.gear = s,
            this.shifting = t.shiftTime);
            let a = o(e.steer, -t.steerLock, t.steerLock);
            for (let e = 0; e < 2; e++)
                this.substep(i, a);
            this.refresh()
        }
        substep(e, i) {
            var s;
            let a, h, c = this.spec, d = c.wheelRadius, f = c.steerRate * e;
            this.steer += o(i - this.steer, -f, f),
            this.shifting > 0 && (this.shifting = Math.max(0, this.shifting - e));
            let m = this.ratio()
              , g = 2 * c.wheelInertia
              , v = c.engineInertia * m * m
              , y = this.clutch < .5 && this.shifting <= 0;
            (!y || this.spinRear * m * r < c.idleRpm) && (this.engaged = 0),
            (!y || this.engaged) && (this.clutchTime = 0);
            let b = (g * this.spinRear + c.engineInertia * m * this.engineSpin) / (g + v)
              , w = this.engineSpin - this.spinRear * m
              , x = y && !this.engaged && b * m * r >= c.idleRpm;
            x && (this.clutchTime += e);
            let M = x ? c.clutch.torque * Math.min(1, this.clutchTime / c.clutch.ramp) : 0
              , k = w > 0 ? M : w < 0 ? -M : 0;
            this.forces();
            let {long: T} = this
              , R = this.brake * c.brakeTorque.front
              , S = this.brake * c.brakeTorque.rear + this.handbrake * c.brakeTorque.handbrake
              , A = e => this.tyre[e].dxdk * d / Math.max(Math.abs(T[e]), 1)
              , F = this.spinFL
              , O = this.spinFR
              , _ = this.spinRear;
            this.spinFL = p(F, -d * this.fx[0], 0, R, c.wheelInertia, d * A(0), e),
            this.spinFR = p(O, -d * this.fx[1], 0, R, c.wheelInertia, d * A(1), e);
            let E = this.engineSpin * r
              , q = (s = this.throttle,
            a = l(c, E),
            h = E >= c.limiterRpm ? 0 : s,
            h * a - (1 - h) * (c.engineFriction[0] + c.engineFriction[1] * E) + (E < c.idleRpm ? (c.idleRpm - E) * .5 : 0))
              , N = m * (this.engaged ? q : k);
            if (this.spinRear = p(_, -d * (this.fx[2] + this.fx[3]), N, 2 * S, g + (this.engaged ? v : 0), d * (A(2) + A(3)), e),
            this.engaged)
                this.engineSpin = this.spinRear * m;
            else if (this.engineSpin = Math.max(0, this.engineSpin + e * (q - k) / c.engineInertia),
            x && w * (this.engineSpin - this.spinRear * m) <= 0) {
                let e = (g * this.spinRear + c.engineInertia * m * this.engineSpin) / (g + v);
                this.spinRear = e,
                this.engineSpin = e * m,
                this.engaged = 1,
                this.clutchTime = 0
            }
            this.fx[0] += A(0) * (this.spinFL - F),
            this.fx[1] += A(1) * (this.spinFR - O),
            this.fx[2] += A(2) * (this.spinRear - _),
            this.fx[3] += A(3) * (this.spinRear - _);
            let G = t.sin(this.yaw)
              , L = t.cos(this.yaw)
              , I = t.sin(this.steer)
              , D = t.cos(this.steer)
              , C = 0
              , P = 0
              , z = 0;
            for (let e = 0; e < 4; e++) {
                let t = e < 2
                  , i = t ? this.fx[e] * D - this.fy[e] * I : this.fx[e]
                  , s = t ? this.fx[e] * I + this.fy[e] * D : this.fy[e];
                C += i,
                P += s,
                z += this.wheelX[e] * s - this.wheelY[e] * i
            }
            let B = t.hypot(this.vx, this.vz)
              , H = c.drag * B * B + (B > .1 ? c.rolling * c.mass * 9.81 : 0)
              , V = G * C + L * P
              , U = L * C - G * P;
            B > 1e-6 && (V -= H * this.vx / B,
            U -= H * this.vz / B),
            this.accel.forward = (G * V + L * U) / c.mass,
            this.accel.left = (L * V - G * U) / c.mass,
            this.vx += e * V / c.mass,
            this.vz += e * U / c.mass,
            this.yawRate += e * z / c.yawInertia,
            this.x += e * this.vx,
            this.z += e * this.vz,
            this.yaw = n(this.yaw + e * this.yawRate);
            let X = 0
              , Q = c.sprungMass * this.accel.left * c.cgHeight
              , W = c.sprungMass * this.accel.forward * c.cgHeight;
            for (let e = 0; e < 4; e++) {
                let t = this.suspension(e);
                X += t,
                Q += this.wheelY[e] * t,
                W += this.wheelX[e] * t
            }
            this.heaveRate += e * X / c.sprungMass,
            this.rollRate += e * Q / c.rollInertia,
            this.pitchRate += e * W / c.pitchInertia,
            this.heave += e * this.heaveRate,
            this.roll += e * this.rollRate,
            this.pitch += e * this.pitchRate,
            this.angleFL = u(this.angleFL + e * this.spinFL),
            this.angleFR = u(this.angleFR + e * this.spinFR),
            this.angleRear = u(this.angleRear + e * this.spinRear)
        }
        suspension(e) {
            let t = this.spec
              , i = e < 2
              , s = e => this.heave + this.wheelY[e] * this.roll + this.wheelX[e] * this.pitch
              , a = this.heaveRate + this.wheelY[e] * this.rollRate + this.wheelX[e] * this.pitchRate
              , r = 1 ^ e
              , n = (i ? t.antiRoll.front : t.antiRoll.rear) * (s(e) - s(r));
            return -(i ? t.springs.front : t.springs.rear) * s(e) - (i ? t.dampers.front : t.dampers.rear) * a - n
        }
        forces() {
            let e = this.spec
              , i = e.wheelRadius
              , s = t.sin(this.yaw)
              , a = t.cos(this.yaw)
              , r = s * this.vx + a * this.vz
              , n = a * this.vx - s * this.vz
              , o = t.sin(this.steer)
              , h = t.cos(this.steer)
              , l = [this.spinFL, this.spinFR, this.spinRear, this.spinRear];
            for (let s = 0; s < 4; s++) {
                this.loads[s] = Math.max(0, this.staticLoad[s] + this.suspension(s));
                let a = r - this.yawRate * this.wheelY[s]
                  , c = n + this.yawRate * this.wheelX[s]
                  , u = s < 2
                  , p = u ? a * h + c * o : a
                  , d = u ? -a * o + c * h : c
                  , f = Math.max(Math.abs(p), 1);
                this.long[s] = p,
                this.lat[s] = d,
                this.kappa[s] = (l[s] * i - p) / f,
                this.tanAlpha[s] = d / f;
                let m = function(e, i, s, a, r, n) {
                    if (s <= 0)
                        return n.x = 0,
                        n.y = 0,
                        n.dxdk = 0,
                        n;
                    let o = e.grip * (1 - e.loadSensitivity * (s / e.nominalLoad - 1))
                      , h = a / e.peakSlip
                      , l = r / e.peakSlip
                      , c = t.hypot(h, l)
                      , u = e.shape
                      , p = o * s;
                    if (c < 1e-9)
                        return n.x = 0,
                        n.y = 0,
                        n.dxdk = p * u * i / e.peakSlip,
                        n;
                    let d = u * t.atan(i * c)
                      , f = t.sin(d)
                      , m = t.cos(d) * u * i / (1 + i * i * c * c)
                      , g = p * f / c;
                    return n.x = g * h,
                    n.y = -g * l,
                    n.dxdk = Math.max(0, p * (m * h * h / (c * c) + f * l * l / (c * c * c))) / e.peakSlip,
                    n
                }(u ? e.front : e.rear, u ? this.frontB : this.rearB, this.loads[s], this.kappa[s], this.tanAlpha[s], this.tyre[s]);
                this.fx[s] = m.x,
                this.fy[s] = m.y
            }
        }
        refresh() {
            let e = this.spec
              , i = this.telemetry;
            this.forces();
            let s = t.sin(this.yaw)
              , a = t.cos(this.yaw);
            i.x = this.x - s * e.cgForward,
            i.z = this.z - a * e.cgForward,
            i.y = this.heave,
            i.yaw = this.yaw,
            i.roll = this.roll,
            i.pitch = this.pitch,
            i.speed = t.hypot(this.vx, this.vz),
            i.heading = i.speed > 1e-6 ? t.atan2(this.vx, this.vz) : this.yaw,
            i.slip = i.speed > 1e-6 ? n(this.yaw - i.heading) : 0,
            i.yawRate = this.yawRate,
            i.steer = this.steer;
            let o = [this.spinFL, this.spinFR, this.spinRear, this.spinRear]
              , h = [this.angleFL, this.angleFR, this.angleRear, this.angleRear]
              , l = 0
              , c = 0
              , u = t.sin(this.steer)
              , p = t.cos(this.steer);
            for (let e = 0; e < 4; e++) {
                let s = i.wheels[e];
                s.spin = o[e],
                s.angle = h[e],
                s.slipRatio = this.kappa[e],
                s.slipAngle = t.atan(this.tanAlpha[e]),
                s.load = this.loads[e],
                s.forceX = this.fx[e],
                s.forceY = this.fy[e],
                l += e < 2 ? this.fx[e] * p - this.fy[e] * u : this.fx[e],
                c += e < 2 ? this.fx[e] * u + this.fy[e] * p : this.fy[e]
            }
            i.rpm = this.engineSpin * r,
            i.gear = this.gear,
            i.engaged = 1 === this.engaged,
            i.throttle = this.throttle,
            i.brake = this.brake,
            i.handbrake = this.handbrake;
            let d = i.speed > .1 ? (e.drag * i.speed * i.speed + e.rolling * e.mass * 9.81) / i.speed : 0;
            i.accelForward = (l - d * (s * this.vx + a * this.vz)) / e.mass,
            i.accelLeft = (c - d * (a * this.vx - s * this.vz)) / e.mass
        }
        save(e=new Float64Array(27), t=0) {
            let i = [this.x, this.z, this.yaw, this.vx, this.vz, this.yawRate, this.steer, this.spinFL, this.spinFR, this.spinRear, this.engineSpin, this.gear, this.shifting, this.engaged, this.heave, this.heaveRate, this.roll, this.rollRate, this.pitch, this.pitchRate, this.angleFL, this.angleFR, this.angleRear, this.throttle, this.brake, this.handbrake, this.clutchTime];
            for (let s = 0; s < i.length; s++)
                e[t + s] = i[s];
            return e
        }
        load(e, t=0) {
            let i = t;
            this.x = e[i++],
            this.z = e[i++],
            this.yaw = e[i++],
            this.vx = e[i++],
            this.vz = e[i++],
            this.yawRate = e[i++],
            this.steer = e[i++],
            this.spinFL = e[i++],
            this.spinFR = e[i++],
            this.spinRear = e[i++],
            this.engineSpin = e[i++],
            this.gear = e[i++],
            this.shifting = e[i++],
            this.engaged = e[i++],
            this.heave = e[i++],
            this.heaveRate = e[i++],
            this.roll = e[i++],
            this.rollRate = e[i++],
            this.pitch = e[i++],
            this.pitchRate = e[i++],
            this.angleFL = e[i++],
            this.angleFR = e[i++],
            this.angleRear = e[i++],
            this.throttle = e[i++],
            this.brake = e[i++],
            this.handbrake = e[i++],
            this.clutchTime = e[i++],
            this.refresh()
        }
    }
    let u = e => e >= a ? e - a : e < 0 ? e + a : e;
    function p(e, t, i, s, a, r, n) {
        let o = a + n * r
          , h = e + n * (t + i) / o
          , l = n * s / o;
        return Math.abs(h) <= l ? 0 : h - (h > 0 ? l : -l)
    }
    e.s(["DRIFT_CAR_SPEC", 0, i, "DRIFT_CAR_STATE_LENGTH", 0, 27, "DRIFT_PHYSICS_RATE", 0, 240, "DRIFT_PHYSICS_STEP", 0, .004166666666666667, "DriftCarPhysics", 0, c, "createDriftCarControls", 0, () => ({
        steer: 0,
        throttle: 0,
        brake: 0,
        handbrake: 0,
        clutch: 0,
        gear: 2
    }), "fullThrottleTorque", 0, l], 234979)
}
, 635525, 247800, 945999, e => {
    "use strict";
    var t = e.i(60650);
    let i = 4 * e.i(940072).FLIGHT_TIMESTEP;
    function s(e, t) {
        return Math.round(32767 * Math.max(t ? -1 : 0, Math.min(1, Number.isFinite(e) ? e : 0))) + 0
    }
    function a(e) {
        return e / 32767
    }
    function r() {
        return {
            throttle: 0,
            roll: 0,
            pitch: 0,
            yaw: 0,
            buttons: 0
        }
    }
    e.s(["BUTTON_ARM", 0, 1, "BUTTON_INTERACT", 0, 2, "INPUT_AHEAD", 0, 120, "STEPS_PER_TICK", 0, 4, "TICK_RATE", 0, 60, "TICK_SECONDS", 0, i, "copyInput", 0, function(e, t) {
        return t.throttle = e.throttle,
        t.roll = e.roll,
        t.pitch = e.pitch,
        t.yaw = e.yaw,
        t.buttons = e.buttons,
        t
    }
    , "idleInput", 0, r, "quantizeInput", 0, function(e, t=r()) {
        return t.throttle = a(s(e.throttle, !1)),
        t.roll = a(s(e.roll, !0)),
        t.pitch = a(s(e.pitch, !0)),
        t.yaw = a(s(e.yaw, !0)),
        t.buttons = !!e.armRequested | 2 * !!e.interact,
        t
    }
    , "stickToWire", 0, s, "tickControl", 0, function(e, t) {
        return t.throttle = e.throttle,
        t.roll = e.roll,
        t.pitch = e.pitch,
        t.yaw = e.yaw,
        t.armRequested = (1 & e.buttons) != 0,
        t.interact = (2 & e.buttons) != 0,
        t
    }
    ], 247800);
    function n(e, t) {
        return t >= 0 ? e : e - Math.floor(t)
    }
    function o(e, t, i) {
        let s = Math.max(0, Math.min(1, (e - t) / (i - t)));
        return s * s * (3 - 2 * s)
    }
    function h(e, i, s) {
        if (!e.length || i < e[0].t)
            return !1;
        let a = e.length - 1;
        for (; a > 0 && e[a].t > i; )
            a--;
        let r = e[a]
          , n = e[a + 1] ?? r
          , o = r.run !== n.run || n.t - r.t > 1e3
          , h = n.t === r.t || o ? 0 : Math.min(1, (i - r.t) / (n.t - r.t));
        s.t = i,
        s.run = r.run,
        s.life = r.life,
        s.droneId = r.droneId ?? "freestyle",
        s.droneSkin = r.droneSkin ?? t.STAND_IN_SKIN,
        s.palette = r.palette;
        for (let e = 0; e < 3; e++)
            s.p[e] = r.p[e] + (n.p[e] - r.p[e]) * h;
        if (n === r && r.v && i > r.t) {
            let e = Math.min(i - r.t, 100) / 1e3;
            for (let t = 0; t < 3; t++)
                s.p[t] += r.v[t] * e
        }
        let l = r.q[0] * n.q[0] + r.q[1] * n.q[1] + r.q[2] * n.q[2] + r.q[3] * n.q[3]
          , c = 0;
        for (let e = 0; e < 4; e++)
            s.q[e] = r.q[e] * (1 - h) + n.q[e] * h * (l < 0 ? -1 : 1),
            c += s.q[e] ** 2;
        c = Math.sqrt(c) || 1;
        for (let e = 0; e < 4; e++)
            s.q[e] /= c;
        return !0
    }
    function l() {
        return {
            t: 0,
            p: [0, 0, 0],
            q: [0, 0, 0, 1],
            run: 0
        }
    }
    function c(e, t) {
        return e.clock ? e.clock.time(t) : e.serverTime + t - e.localTime - 100
    }
    function u(e, t, i) {
        let s, a, r, n, o = t.shown;
        if (o?.at === i)
            return o.pose.t === o.time ? o : null;
        let u = (s = c(e, i),
        a = t.clock ? t.clock.time(i, s, t.frames) : s,
        (r = t.drawn ??= {
            at: 0,
            time: 0,
            shared: 0
        }).at = i,
        r.time = a,
        r.shared = s,
        n = a,
        e.ahead ? n + e.ahead(i, t.drawn.shared) : n)
          , m = t.frames
          , M = o ?? {
            at: i,
            time: u,
            pose: l(),
            newest: NaN,
            run: -1,
            aim: u,
            pace: 1,
            slip: [0],
            slipRate: [0],
            offset: [0, 0, 0],
            drift: [0, 0, 0],
            turn: [0, 0, 0],
            spin: [0, 0, 0]
        };
        t.shown = M;
        let k = Math.max(0, i - M.at)
          , T = M.time;
        M.at = i;
        let R = M.pose;
        if (!e.ahead)
            return (M.time = u,
            h(m, u, R)) ? M : (R.t = NaN,
            null);
        let {slip: S, slipRate: A, offset: F, drift: O, turn: _, spin: E} = M
          , q = M.run < 0 || !(k < 1500);
        if (q)
            S[0] = A[0] = 0;
        else if (k > 0) {
            let e = (u - M.aim) / k;
            g(S, A, k / 1e3),
            S[0] += (M.pace - e) * k,
            A[0] += (M.pace - e) * 1e3,
            M.pace = e,
            u + S[0] < T && (S[0] = T - u,
            A[0] = -(1e3 * e))
        }
        M.aim = u;
        let N = u + S[0];
        if (!v(m, m.length, N, R))
            return R.t = NaN,
            null;
        let G = m[m.length - 1].t;
        if (q || R.run !== M.run) {
            for (let e of [S, A, F, O, _, E])
                e.fill(0);
            if (N !== u && !v(m, m.length, N = u, R))
                return R.t = NaN,
                null
        } else if (g(F, O, k / 1e3),
        g(_, E, k / 1e3),
        G !== M.newest) {
            let e = m.length;
            for (; e && !(m[e - 1].t <= M.newest); )
                e--;
            if (e && v(m, e, N, p) && p.run === R.run) {
                var L, I;
                let e, t, i;
                for (let e = 0; e < 3; e++)
                    F[e] += p.p[e] - R.p[e];
                y(x(_, f), p.q, f),
                L = y(f, b(R.q, d), f),
                I = _,
                e = L[3] < 0 ? -1 : 1,
                i = (t = Math.hypot(L[0], L[1], L[2])) > 1e-12 ? 2 * e * Math.atan2(t, e * L[3]) / t : 2 * e,
                I[0] = L[0] * i,
                I[1] = L[1] * i,
                I[2] = L[2] * i
            }
            Math.hypot(F[0], F[1], F[2]) > 20 && (F.fill(0),
            O.fill(0))
        }
        M.time = N,
        M.newest = G,
        M.run = R.run;
        for (let e = 0; e < 3; e++)
            R.p[e] += F[e];
        return y(x(_, f), R.q, R.q),
        w(R.q),
        M
    }
    e.s(["COMBAT_CAP", 0, 60, "MAX_SHOT_VIEWS", 0, 4, "STEPS_PER_MS", 0, .24, "estimatedReady", 0, n, "playbackOf", 0, e => 4 * e.tick - e.play, "shift", 0, function(e, t, i) {
        let s = e.lag - e.authenticated
          , a = 4 * t - e.playback + s
          , r = Math.min(a, 60);
        return {
            delay: a,
            compensated: r,
            excess: a - r,
            shift: r - (t - i) * 4 + e.authenticated
        }
    }
    ], 945999);
    let p = l()
      , d = [0, 0, 0, 1]
      , f = [0, 0, 0, 1]
      , m = [0, 0, 0, 1];
    function g(e, t, i) {
        let s = Math.exp(-40 * i);
        for (let a = 0; a < e.length; a++) {
            let r = e[a]
              , n = t[a]
              , o = n + 40 * r;
            e[a] = (r + o * i) * s,
            t[a] = (n - 40 * o * i) * s
        }
        .001 > Math.hypot(...e) && .01 > Math.hypot(...t) && (e.fill(0),
        t.fill(0))
    }
    function v(e, t, i, s) {
        if (t <= 0 || i < e[0].t)
            return !1;
        let a = e[t - 1];
        if (i <= a.t) {
            h(e, i, s);
            let a = t - 1;
            for (; a > 0 && e[a].t > i; )
                a--;
            let r = e[a]
              , n = e[a + 1];
            if (a + 1 < t && r.v && n.v && r.run === n.run && n.t > r.t && n.t - r.t <= 1e3) {
                let e = (i - r.t) / (n.t - r.t)
                  , t = (n.t - r.t) / 1e3
                  , a = e * e
                  , o = a * e
                  , h = 2 * o - 3 * a + 1
                  , l = o - 2 * a + e
                  , c = 3 * a - 2 * o
                  , u = o - a;
                for (let e = 0; e < 3; e++)
                    s.p[e] = h * r.p[e] + l * t * r.v[e] + c * n.p[e] + u * t * n.v[e]
            }
            return !0
        }
        h(e, a.t, s),
        s.t = i;
        let r = (i - a.t) / 1e3
          , n = Math.min(r, .15)
          , o = null;
        for (let i = t - 2; i >= 0 && a.t - e[i].t <= 250 && e[i].run === a.run; i--)
            if (a.t - e[i].t >= 25) {
                o = e[i];
                break
            }
        let l = o ? (a.t - o.t) / 1e3 : 0;
        if (a.v) {
            let e = 0
              , t = 0
              , i = 0;
            if (o?.v) {
                e = (a.v[0] - o.v[0]) / l;
                let s = Math.min(1, 200 / (Math.hypot(e, t = (a.v[1] - o.v[1]) / l, i = (a.v[2] - o.v[2]) / l) || 1));
                e *= s,
                t *= s,
                i *= s
            }
            let h = n * (r - n / 2);
            s.p[0] = a.p[0] + a.v[0] * r + e * h,
            s.p[1] = a.p[1] + a.v[1] * r + t * h,
            s.p[2] = a.p[2] + a.v[2] * r + i * h
        }
        if (o) {
            if (y(a.q, b(o.q, d), m),
            m[3] < 0)
                for (let e = 0; e < 4; e++)
                    m[e] = -m[e];
            let e = Math.hypot(m[0], m[1], m[2]);
            if (e > 1e-9) {
                let t = Math.min(2 * Math.atan2(e, m[3]), 40 * l) * n / l
                  , i = Math.sin(t / 2) / e;
                m[0] *= i,
                m[1] *= i,
                m[2] *= i,
                m[3] = Math.cos(t / 2),
                y(m, a.q, s.q),
                w(s.q)
            }
        }
        return !0
    }
    function y(e, t, i) {
        let[s,a,r,n] = e
          , [o,h,l,c] = t;
        return i[0] = n * o + s * c + a * l - r * h,
        i[1] = n * h - s * l + a * c + r * o,
        i[2] = n * l + s * h - a * o + r * c,
        i[3] = n * c - s * o - a * h - r * l,
        i
    }
    function b(e, t) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t[3] = e[3],
        t
    }
    function w(e) {
        let t = Math.hypot(e[0], e[1], e[2], e[3]) || 1;
        for (let i = 0; i < 4; i++)
            e[i] /= t
    }
    function x(e, t) {
        let i = Math.hypot(e[0], e[1], e[2])
          , s = i > 1e-12 ? Math.sin(i / 2) / i : .5;
        return t[0] = e[0] * s,
        t[1] = e[1] * s,
        t[2] = e[2] * s,
        t[3] = Math.cos(i / 2),
        t
    }
    let M = e => Math.round(.24 * e);
    class k {
        counts = {
            freezes: 0,
            jumps: 0,
            backwards: 0
        };
        last = new WeakMap;
        drawn(e, t, i) {
            let s = this.last.get(e)
              , [a,r,n] = i.p;
            if (!s)
                return void this.last.set(e, {
                    time: t,
                    run: i.run,
                    p: [a, r, n],
                    held: !1
                });
            s.run === i.run && (t < s.time && this.counts.backwards++,
            Math.hypot(a - s.p[0], r - s.p[1], n - s.p[2]) > 1 && this.counts.jumps++);
            let o = t === s.time && (e.clock?.lag ?? 0) > 0;
            o && !s.held && this.counts.freezes++,
            s.time = t,
            s.run = i.run,
            s.p[0] = a,
            s.p[1] = r,
            s.p[2] = n,
            s.held = o
        }
        take() {
            let e = this.counts;
            return this.counts = {
                freezes: 0,
                jumps: 0,
                backwards: 0
            },
            e
        }
    }
    e.s(["ADMIN_RED", 0, "#ff435b", "FADE_MS", 0, 700, "GOLD", 0, "#ffc857", "MAX_INTERPOLATION_GAP_MS", 0, 1e3, "MAX_PEERS", 0, 31, "PLAYBACK_DELAY_MS", 0, 100, "PeerClock", 0, class {
        lag = 0;
        drawn = -1 / 0;
        lastNow = -1 / 0;
        time(e, t, i) {
            if (!(e > this.lastNow))
                return this.drawn;
            let s = e - this.lastNow;
            this.lastNow = e;
            let a = i.at(-1);
            if (!a)
                return this.drawn;
            let r = a.t + (this.lag > 0 ? 0 : 100)
              , n = Math.min(t - this.lag, r);
            if (!Number.isFinite(this.drawn) || s > 1500)
                this.drawn = Math.max(this.drawn, n);
            else {
                let e = n - this.drawn
                  , i = Math.max(0, Math.min(2, 1 + e / 100));
                this.drawn = Math.max(this.drawn, Math.min(this.drawn + i * s, e > 0 ? n : Math.min(t, r)))
            }
            for (let e = i.length - 1; e > 0 && i[e].t > this.drawn; e--)
                i[e - 1].t <= this.drawn && i[e].t - i[e - 1].t > 1e3 && (this.drawn = i[e].t);
            return this.drawn
        }
    }
    , "PeerLooks", 0, k, "PlaybackClock", 0, class {
        samples = [];
        offset = 0;
        target = 0;
        started = !1;
        lastNow = -1 / 0;
        drawn = -1 / 0;
        delay = 100;
        observe(e, t) {
            let i = this.samples.at(-1);
            for (i && (t - i.at > 1500 || e < i.server) && (this.samples.length = 0),
            this.samples.push({
                offset: e - t,
                at: t,
                server: e
            }); this.samples.length > 2 && t - this.samples[0].at > 2e3; )
                this.samples.shift();
            let s = -1 / 0;
            for (let e of this.samples)
                s = Math.max(s, e.offset);
            let a = this.samples.map(e => s - e.offset).sort( (e, t) => e - t)
              , r = a[Math.floor((a.length - 1) * .9)]
              , n = [];
            for (let e = 1; e < this.samples.length; e++)
                n.push(this.samples[e].server - this.samples[e - 1].server);
            n.sort( (e, t) => e - t);
            let o = n.length ? n[n.length >> 1] : 50;
            this.delay = Math.min(220, Math.max(100, o + r + 15)),
            this.target = s - this.delay,
            this.started && 1 !== this.samples.length || (this.offset = this.started ? Math.max(this.offset, this.target) : this.target,
            this.started = !0)
        }
        time(e) {
            if (!this.started)
                return -1 / 0;
            if (e > this.lastNow) {
                let t = (Number.isFinite(this.lastNow) ? e - this.lastNow : 0) * .05;
                this.offset += Math.max(-t, Math.min(t, this.target - this.offset)),
                this.lastNow = e
            }
            return this.drawn = Math.max(this.drawn, e + this.offset),
            this.drawn
        }
    }
    , "STALE_MS", 0, 3e3, "ShownLead", 0, class {
        value = 0;
        at = NaN;
        ease(e, t) {
            if (t - this.at <= 1500) {
                if (t > this.at) {
                    let i = (t - this.at) * .25;
                    this.value += Math.max(-i, Math.min(i, e - this.value)),
                    this.at = t
                }
            } else
                this.value = e,
                this.at = t;
            return this.value
        }
    }
    , "boxLead", 0, function(e, t, i) {
        return Math.max(0, 4 * n(e / 4, t) - 60 - .24 * i) / .24
    }
    , "boxPose", 0, function(e, t, i) {
        if (!e.length || t < e[0].t)
            return -1;
        let s = e[e.length - 1];
        if (t <= s.t)
            return h(e, t, i),
            0;
        h(e, s.t, i);
        let a = t - s.t;
        if (i.t = t,
        s.v)
            for (let e = 0; e < 3; e++)
                i.p[e] = s.p[e] + s.v[e] * a / 1e3;
        return a
    }
    , "displayPose", 0, function(e, t, i) {
        let s = e.shown;
        if (!s || s.run < 0 || s.pose.t !== s.time)
            return !1;
        let a = Math.max(0, t - s.aim) / 1e3
          , r = Math.exp(-40 * a)
          , n = (e, t) => (e + (t + 40 * e) * a) * r;
        if (!v(e.frames, e.frames.length, t + n(s.slip[0], s.slipRate[0]), i))
            return !1;
        for (let e = 0; e < 3; e++)
            i.p[e] += n(s.offset[e], s.drift[e]);
        return !0
    }
    , "distanceAlpha", 0, function(e, t) {
        let[i,s] = "body" === t ? [180, 300] : [240, 400];
        return o(e, .6, 2) * (1 - o(e, i, s))
    }
    , "drawPilot", 0, u, "emptyPose", 0, l, "multiplayerMounted", 0, function(e) {
        return !e.hasLesson && !e.activeTimeAttackId && !e.editing && ["flying", "paused", "droneWheel"].includes(e.phase)
    }
    , "playbackTime", 0, c, "presenceAlpha", 0, function(e, t) {
        let i = e.leavingAt ?? e.receivedAt + 3e3;
        return o(t - e.joinedAt, 0, 700) * (1 - o(t - i, 0, 700))
    }
    , "samplePose", 0, h, "shotSight", 0, function(e, t, i, s) {
        let a = -1 / 0
          , r = 0;
        for (let t of e.peers)
            t.drawn && t.drawn.at > a && (a = t.drawn.at,
            r = t.drawn.shared);
        if (Number.isFinite(a) || (r = c(e, s)),
        void 0 === e.snap || !Number.isFinite(r))
            return null;
        let n = M(r)
          , o = [];
        for (let t of e.peers) {
            let s = t.drawn;
            if (!s || s.at !== a || void 0 === t.seat || null !== t.leavingAt || t.shownIn !== e.snap || !i(t.seat) || !Number.isFinite(s.time))
                continue;
            let r = function(e, t) {
                for (let i = e.length - 1; i >= 0; i--)
                    if (e[i].t <= t)
                        return e[i].run;
                return null
            }(t.frames, s.time);
            null !== r && o.push({
                seat: t.seat,
                segment: r,
                lag: Math.max(0, n - M(s.time))
            })
        }
        return o.sort( (e, t) => e.seat - t.seat),
        {
            tick: t,
            snap: e.snap,
            play: 4 * t - n,
            views: o.slice(0, 4)
        }
    }
    , "shownPilot", 0, function(e, t, i) {
        let s = t.shown;
        return s && i - s.at < 100 ? s.pose.t === s.time ? s : null : u(e, t, i)
    }
    , "smoothFade", 0, o, "stepsToMs", 0, e => e / .24], 635525)
}
]);
