/* ==========================================================================
   app.js — content.js এর লেখা দিয়ে পেজ সাজানোর কোড। এখানে হাত দেওয়ার দরকার নেই।
   ========================================================================== */
(function () {
  "use strict";
  var S = window.SITE;
  var page = document.body.getAttribute("data-page");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var lightNav = page === "research";

  /* ---------- picture with graceful fallback ---------- */
  function pic(src, alt, label, idx, ratio) {
    var h = 165 + ((idx || 0) * 23) % 70;
    var ph = '<div class="ph" style="--h:' + h + (ratio ? ";--r:" + ratio : "") + '"><span><b>＋</b>' + esc(label || "Add photo") + '</span></div>';
    if (!src) return ph;
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" data-ph="' + esc(ph) + '">';
  }
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG" && t.getAttribute("data-ph")) {
      var d = document.createElement("div");
      d.innerHTML = t.getAttribute("data-ph");
      t.replaceWith(d.firstChild);
    }
  }, true);

  function link(href, text, cls) {
    return href ? '<a class="' + (cls || "") + '" href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(text) + "</a>" : "";
  }
  function social() {
    var L = S.links;
    return link(L.scholar, "Google Scholar ↗") + link(L.researchgate, "ResearchGate ↗") + link(L.orcid, "ORCID ↗") +
      link(L.linkedin, "LinkedIn ↗") + link(L.instagram, "Instagram ↗") + link(L.facebook, "Facebook ↗") + link(L.github, "GitHub ↗");
  }
  function boldMe(authors) {
    return esc(authors).replace(/Hosen, M\. B\./g, "<b>Hosen, M. B.</b>");
  }

  /* ---------- nav + footer ---------- */
  function nav() {
    var items = [["index.html", "Home", "home"], ["research.html", "Research", "research"], ["photography.html", "Photography", "photography"], ["#contact", "Contact", ""]];
    var html = '<nav class="nav ' + (lightNav ? "light" : "") + '" id="nav"><div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="Home"><span class="mono">' + esc(S.monogram) + "</span><span>" + esc(S.name) + "</span></a>" +
      '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<div class="links" id="links">' + items.map(function (i) {
        var href = i[0] === "#contact" ? (page === "home" ? "#contact" : "index.html#contact") : i[0];
        return '<a href="' + href + '" class="' + (i[2] === page ? "on" : "") + '">' + i[1] + "</a>";
      }).join("") + "</div></div></nav>";
    document.body.insertAdjacentHTML("afterbegin", '<div class="progress" id="progress"></div>' + html);
    var n = $("#nav"), b = $("#burger"), l = $("#links");
    function onScroll() {
      n.classList.toggle("solid", window.scrollY > 40);
      var h = document.documentElement.scrollHeight - innerHeight;
      $("#progress").style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    }
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    b.addEventListener("click", function () {
      var o = l.classList.toggle("open"); b.setAttribute("aria-expanded", o);
    });
    $$("a", l).forEach(function (a) { a.addEventListener("click", function () { l.classList.remove("open"); }); });
  }

  function contact() {
    var cv = S.cv ? '<a class="btn amber" href="' + esc(S.cv) + '" target="_blank" rel="noopener">Download CV <span class="arrow">→</span></a>' : "";
    return '<footer class="contact" id="contact"><canvas data-flow="255,255,255"></canvas><div class="wrap">' +
      '<span class="eyebrow" style="color:var(--aqua)">Contact</span>' +
      '<h2 class="rv">Let\'s <em>talk</em>.</h2>' +
      '<p class="l rv">Research collaboration, a PhD opportunity, GIS or hydrology work, or a photograph you\'d like to know more about. My inbox is open.</p>' +
      '<a class="mail rv" href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>" +
      '<div class="social rv">' + cv + social() + "</div>" +
      '<div class="foot"><span>© ' + new Date().getFullYear() + " " + esc(S.name) + " · " + esc(S.location) + "</span><span>All photographs and maps are my own.</span></div>" +
      "</div></footer>";
  }

  /* ---------- sections ---------- */
  function homeHero() {
    var H = S.hero;
    var cv = S.cv ? '<a class="btn ghost" href="' + esc(S.cv) + '" target="_blank" rel="noopener">Download CV</a>' : "";
    return '<header class="hero"><canvas data-flow="94,214,200"></canvas><div class="wrap">' +
      '<div><span class="kicker rv">' + esc(H.kicker) + "</span>" +
      '<h1 class="rv" style="--d:.1s"><span class="md">Md.</span>' + esc(S.firstName) + " <em>" + esc(S.lastName) + "</em></h1>" +
      '<p class="tagline rv" style="--d:.2s">' + esc(H.headline) + "</p>" +
      '<p class="lead rv" style="--d:.3s">' + esc(H.sub) + "</p>" +
      '<div class="chips rv" style="--d:.4s">' + H.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>" +
      '<div class="ctas rv" style="--d:.5s"><a class="btn amber" href="research.html">See my research <span class="arrow">→</span></a>' +
      '<a class="btn ghost" href="photography.html">View photography</a>' + cv + "</div></div>" +
      '<div class="portrait rv" style="--d:.3s"><div class="frame">' + pic(S.portrait, S.name + " portrait", "Your portrait\nphotos/portrait.jpg", 0, "4/5") + "</div>" +
      '<div class="badge b1">' + esc(S.portraitBadges[0] || "") + "<small>" + esc(S.location) + "</small></div>" +
      '<div class="badge b2">' + esc(S.portraitBadges[1] || "") + "</div></div>" +
      '</div><div class="scrollhint">Scroll<i></i></div></header>';
  }
  function marquee() {
    var t = S.marquee.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
    return '<div class="marquee" aria-hidden="true"><div>' + t + t + "</div></div>";
  }
  function stats() {
    return '<section class="sec" style="padding:90px 0 40px"><div class="wrap"><div class="stats">' + S.stats.map(function (s, i) {
      return '<div class="stat rv" style="--d:' + i * 0.1 + 's"><b data-n="' + s.n + '" data-d="' + (s.decimals || 0) + '">0</b><span>' + esc(s.label) + "</span></div>";
    }).join("") + "</div></div></section>";
  }
  function sides() {
    var a = S.sides.research, b = S.sides.photography;
    function card(href, tag, o, idx, lab) {
      return '<a class="side rv" href="' + href + '" style="--d:' + idx * 0.12 + 's"><div class="bg">' + pic(o.image, o.title, lab, idx + 2) + '</div><div class="in"><span class="tag">' + tag + "</span><h3>" + esc(o.title) + "</h3><p>" + esc(o.text) + '</p><span class="go">Explore <span class="arrow">→</span></span></div></a>';
    }
    return '<section class="sec"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Two sides of what I do</span><h2 class="rv">One curiosity, <em>two ways</em> of looking.</h2></div></div><div class="sides">' +
      card("research.html", "The researcher", a, 0, "Your best map\nmaps/featured-map.jpg") + card("photography.html", "The photographer", b, 1, "Your best photo\nphotos/featured-photo.jpg") + "</div></div></section>";
  }
  function story() {
    var T = S.story;
    return '<section class="sec sand"><div class="wrap story"><div><span class="eyebrow">' + esc(T.kicker) + '</span><h2 class="rv">' + esc(T.headline) + "</h2>" +
      T.paragraphs.map(function (p, i) { return '<p class="rv" style="--d:' + i * 0.08 + 's">' + esc(p) + "</p>"; }).join("") +
      '</div><aside class="facts rv">' + T.facts.map(function (f) { return '<div class="fact"><span>' + esc(f[0]) + "</span><b>" + esc(f[1]) + "</b></div>"; }).join("") + "</aside></div></section>";
  }
  function journey() {
    return '<section class="sec dark"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Timeline</span><h2 class="rv">My journey <em>so far</em></h2></div></div><div class="timeline">' +
      S.journey.map(function (j) {
        return '<div class="tl rv ' + (j.now ? "now" : "") + '"><div class="yr">' + esc(j.year) + "</div><div><h3>" + esc(j.title) + "</h3><p>" + esc(j.text) + "</p></div></div>";
      }).join("") + "</div></div></section>";
  }
  function homePhotos() {
    var P = S.photography.photos.slice(0, 6);
    return '<section class="sec deep"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Behind the lens</span><h2 class="rv">A few frames from <em>the field</em></h2></div><a class="more" href="photography.html" style="color:#fff">Full gallery →</a></div>' +
      '<div class="masonry">' + P.map(function (p, i) { return shotHTML(p, i); }).join("") + "</div></div></section>";
  }
  function shotHTML(p, i) {
    return '<button class="shot rv" data-file="' + esc(p.file) + '" style="--d:' + (i % 3) * 0.08 + 's" aria-label="Open ' + esc(p.title) + '">' + pic(p.file, p.title, p.file.replace("photos/", "Add: "), i, p.r) +
      '<span class="cap"><b>' + esc(p.title) + "</b><span>" + esc(p.place) + "</span></span></button>";
  }

  /* research page */
  function researchHero() {
    return '<header class="rhero"><canvas data-flow="15,94,95"></canvas><div class="wrap"><span class="eyebrow">Research</span><h1 class="rv">Mapping <em>water, climate</em> and risk.</h1><p class="rv" style="--d:.15s">GIS, remote sensing, hydrological modelling and machine learning, applied to floods, groundwater, heat and land across Bangladesh.</p>' +
      '<div class="int rv" style="margin-top:34px;--d:.25s">' + S.interests.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div></div></header>";
  }
  function projects() {
    return '<section class="sec" style="padding-top:40px"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Selected work</span><h2 class="rv">Projects, from <em>maps</em> to models</h2></div></div><div class="grid3">' +
      S.projects.map(function (p, i) {
        return '<article class="card tilt rv" style="--d:' + (i % 3) * 0.1 + 's"><div class="pic"><span class="st ' + p.status + '">' + esc(p.statusLabel) + "</span>" + pic(p.map, p.title, p.map.replace("maps/", "Add map: "), i + 3) + '</div><div class="body"><h3>' + esc(p.title) + "</h3><p>" + esc(p.text) + '</p><div class="tags">' + p.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div></article>";
      }).join("") + "</div></div></section>";
  }
  function pubs() {
    var cnt = { all: S.publications.length, published: 0, review: 0, prep: 0 };
    S.publications.forEach(function (p) { cnt[p.status]++; });
    var tabs = [["all", "All"], ["published", "Published"], ["review", "Under review"], ["prep", "In preparation"]];
    return '<section class="sec sand" id="publications"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Publications</span><h2 class="rv">Peer-reviewed <em>articles</em></h2></div></div>' +
      '<div class="tabs" id="pubtabs">' + tabs.map(function (t, i) { return '<button class="tab ' + (i ? "" : "on") + '" data-f="' + t[0] + '">' + t[1] + "<em>" + cnt[t[0]] + "</em></button>"; }).join("") + "</div>" +
      '<div class="pubs" id="publist"></div></div></section>';
  }
  function renderPubs(f) {
    var list = S.publications.filter(function (p) { return f === "all" || p.status === f; });
    var label = { published: "Published", review: "Under review", prep: "In preparation" };
    $("#publist").innerHTML = list.map(function (p) {
      var jr = p.status === "published" && p.journal ? '<div class="jr">' + esc(p.journal) + "</div>" : "";
      var doi = p.doi ? '<a class="doi" href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">DOI ↗</a>' : "";
      var q = p.q ? '<span class="pill q">' + esc(p.q) + "</span>" : "";
      return '<article class="pub"><div class="y">' + esc(p.year || "—") + '</div><div><h4>' + esc(p.title) + '</h4><div class="au">' + boldMe(p.authors) + "</div>" + jr + '</div><div class="side-meta"><span class="pill ' + p.status + '">' + label[p.status] + "</span>" + q + doi + "</div></article>";
    }).join("");
  }
  function conferences() {
    var years = {};
    S.conferences.forEach(function (c) { (years[c.year] = years[c.year] || []).push(c); });
    var ys = Object.keys(years).sort(function (a, b) { return b - a; });
    return '<section class="sec dark"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Conferences</span><h2 class="rv">' + S.conferences.length + ' papers <em>presented</em> internationally</h2></div></div><div class="acc">' +
      ys.map(function (y, i) {
        return '<div class="acc-item ' + (i === 0 ? "open" : "") + '"><button class="acc-btn" aria-expanded="' + (i === 0) + '"><span>' + y + ' <small>' + years[y].length + ' papers</small></span><span class="plus">+</span></button><div class="acc-panel"><div><div class="inner">' +
          years[y].map(function (c) { return '<div class="conf"><div>' + (c.award ? '<span class="trophy">★ Presenting Paper Award</span>' : "") + esc(c.title) + "<small>" + esc(c.venue) + "</small></div></div>"; }).join("") + "</div></div></div></div>";
      }).join("") + "</div></div></section>";
  }
  function awards() {
    return '<section class="sec"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Recognition</span><h2 class="rv">Awards</h2></div></div><div class="awards">' +
      S.awards.map(function (a, i) { return '<div class="award rv" style="--d:' + i * 0.12 + 's"><small>' + esc(a.when) + "</small><h3>" + esc(a.title) + "</h3><p>" + esc(a.where) + "</p></div>"; }).join("") + "</div></div></section>";
  }
  function background() {
    return '<section class="sec sand"><div class="wrap cols2"><div><span class="eyebrow">Experience &amp; education</span>' +
      S.experience.map(function (e) { return '<div class="item rv"><small>' + esc(e.when) + "</small><h3>" + esc(e.title) + '</h3><div class="org">' + esc(e.org) + "</div><ul>" + e.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>"; }).join("") +
      S.education.map(function (e) { return '<div class="item rv"><small>' + esc(e.when) + "</small><h3>" + esc(e.title) + '</h3><div class="org">' + esc(e.org) + '</div><p class="note">' + esc(e.note) + "</p></div>"; }).join("") +
      '</div><div><span class="eyebrow">Technical skills</span>' +
      S.skills.map(function (g) { return '<div class="skillgroup rv"><h4>' + esc(g.group) + "</h4><div>" + g.items.map(function (i) { return "<span>" + esc(i) + "</span>"; }).join("") + "</div></div>"; }).join("") +
      '<span class="eyebrow" style="margin-top:34px">Training</span>' +
      S.training.map(function (t) { return '<div class="item rv" style="padding:14px 0 14px 22px"><small>' + esc(t.when) + '</small><h3 style="font-size:1.15rem">' + esc(t.title) + "</h3>" + (t.where ? '<div class="org">' + esc(t.where) + "</div>" : "") + "</div>"; }).join("") +
      "</div></div></section>";
  }
  function tool() {
    var T = S.tool;
    var l = T.link ? '<a class="btn amber" style="margin-top:26px" href="' + esc(T.link) + '" target="_blank" rel="noopener">View on GitHub <span class="arrow">→</span></a>' : "";
    return '<section class="sec deep"><div class="wrap tool"><div class="toolshot rv">' + pic(T.image, T.title, "Tool screenshot\n" + T.image, 5, "16/10") + '</div><div class="rv" style="--d:.15s"><span class="eyebrow">Tools · ' + esc(T.status) + "</span><h2>" + esc(T.title) + "</h2><p>" + esc(T.text) + "</p>" + l + "</div></div></section>";
  }

  /* photography page */
  function photoHero() {
    var P = S.photography;
    return '<header class="phero"><canvas data-flow="245,165,61"></canvas><div class="wrap" style="position:relative"><span class="kicker">' + esc(P.title) + '</span><h1 class="rv">' + esc(P.headline).replace(/(faces|fields)/g, "<em>$1</em>") + '</h1><p class="rv" style="--d:.15s">' + esc(P.intro) + '</p>' + (P.camera ? '<div class="cam">' + esc(P.camera) + "</div>" : "") + "</div></header>";
  }
  function gallery() {
    var P = S.photography;
    var f = ["All"].concat(P.albums);
    return '<section class="gal"><div class="wrap"><div class="filters" id="filters">' + f.map(function (a, i) { return '<button class="tab ' + (i ? "" : "on") + '" data-a="' + esc(a) + '">' + esc(a) + "</button>"; }).join("") + "</div>" +
      '<div class="masonry" id="masonry">' + P.photos.map(shotHTML).join("") + '</div><p class="empty" id="empty">No photos in this album yet.</p></div></section>';
  }
  function roles() {
    return '<section class="sec deep"><div class="wrap"><div class="sec-head"><div><span class="eyebrow" >Teaching &amp; community</span><h2 class="rv">Passing on <em>the way of seeing</em></h2></div></div><div class="roles">' +
      S.photography.roles.map(function (r, i) { return '<div class="role rv" style="--d:' + i * 0.1 + 's"><small>' + esc(r.years) + "</small><h3>" + esc(r.role) + "</h3><p>" + esc(r.org) + "</p></div>"; }).join("") + "</div></div></section>";
  }

  /* ---------- behaviours ---------- */
  function flowCanvas(cv) {
    var rgb = cv.getAttribute("data-flow"), ctx = cv.getContext("2d"), w, h, t = Math.random() * 10, mx = 0.7, my = 0.4, vis = true, tx = 0.7, ty = 0.4;
    function size() { var d = Math.min(devicePixelRatio || 1, 2); w = cv.clientWidth; h = cv.clientHeight; cv.width = w * d; cv.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0); }
    function draw() {
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      ctx.clearRect(0, 0, w, h);
      var n = 30;
      for (var i = 0; i < n; i++) {
        var y0 = h * (0.08 + 0.9 * i / (n - 1)); ctx.beginPath();
        for (var x = 0; x <= w + 12; x += 12) {
          var k = x / w, a = Math.sin(k * 5 + t * 0.7 + i * 0.32) * 16 + Math.sin(k * 12 - t * 1.05 + i * 0.2) * 6;
          var pull = Math.exp(-Math.pow((x - mx * w) / (w * 0.2), 2)) * (my * h - y0) * 0.12;
          var y = y0 + a * (0.5 + i / n) + pull;
          x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.strokeStyle = "rgba(" + rgb + "," + (0.05 + 0.2 * (i / n)) + ")"; ctx.lineWidth = 1.2; ctx.stroke();
      }
      t += 0.012;
      if (!reduce && vis) requestAnimationFrame(draw);
    }
    size(); addEventListener("resize", size);
    cv.parentElement.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height; });
    new IntersectionObserver(function (en) { var v = en[0].isIntersecting; if (v && !vis) { vis = true; draw(); } vis = v; }).observe(cv);
    draw();
  }
  function reveal() {
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".rv").forEach(function (el) { io.observe(el); });
    var co = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return; co.unobserve(e.target);
        var el = e.target, n = parseFloat(el.dataset.n), d = parseInt(el.dataset.d, 10), s = performance.now();
        (function f(now) { var p = Math.min((now - s) / 1400, 1), v = n * (1 - Math.pow(1 - p, 3)); el.textContent = d ? v.toFixed(d) : Math.round(v); if (p < 1 && !reduce) requestAnimationFrame(f); else el.textContent = d ? n.toFixed(d) : n; })(s);
      });
    }, { threshold: 0.5 });
    $$("[data-n]").forEach(function (el) { co.observe(el); });
  }
  function tilt() {
    if (reduce || matchMedia("(hover:none)").matches) return;
    $$(".tilt").forEach(function (c) {
      c.addEventListener("pointermove", function (e) { var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; c.style.transform = "perspective(900px) rotateX(" + (-y * 6) + "deg) rotateY(" + (x * 8) + "deg) translateY(-6px)"; c.style.transition = "transform .1s"; });
      c.addEventListener("pointerleave", function () { c.style.transform = ""; c.style.transition = "transform .5s"; });
    });
  }
  function lightbox(list) {
    document.body.insertAdjacentHTML("beforeend", '<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Photo viewer"><button class="x" aria-label="Close">✕</button><button class="pv" aria-label="Previous">←</button><figure id="lbfig"></figure><button class="nx" aria-label="Next">→</button></div>');
    var lb = $("#lb"), cur = 0, vis = [];
    function show(i) {
      cur = (i + vis.length) % vis.length; var p = vis[cur];
      $("#lbfig").innerHTML = pic(p.file, p.title, p.file.replace("photos/", "Add: "), cur, p.r) + "<figcaption><b>" + esc(p.title) + "</b><span>" + esc(p.place) + " · " + esc(p.album) + "</span></figcaption>";
    }
    function open(i) { vis = list(); show(i); lb.classList.add("on"); document.body.style.overflow = "hidden"; $(".x", lb).focus(); }
    function close() { lb.classList.remove("on"); document.body.style.overflow = ""; }
    document.addEventListener("click", function (e) {
      var b = e.target.closest(".shot"); if (!b) return;
      var all = list(); var idx = all.findIndex(function (p) { return p.file === b.getAttribute('data-file'); });
      open(Math.max(0, idx));
    });
    $(".x", lb).onclick = close; $(".pv", lb).onclick = function () { show(cur - 1); }; $(".nx", lb).onclick = function () { show(cur + 1); };
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    addEventListener("keydown", function (e) { if (!lb.classList.contains("on")) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
  }

  /* ---------- build ---------- */
  var main = $("#main"), out = "";
  if (page === "home") out = homeHero() + marquee() + stats() + sides() + story() + journey() + homePhotos();
  if (page === "research") out = researchHero() + projects() + pubs() + conferences() + awards() + background() + tool();
  if (page === "photography") out = photoHero() + gallery() + roles();
  main.innerHTML = out + contact();
  nav();

  if (page === "research") {
    renderPubs("all");
    $("#pubtabs").addEventListener("click", function (e) {
      var b = e.target.closest(".tab"); if (!b) return;
      $$("#pubtabs .tab").forEach(function (t) { t.classList.toggle("on", t === b); }); renderPubs(b.dataset.f);
    });
    $$(".acc-btn").forEach(function (b) { b.addEventListener("click", function () { var it = b.parentElement, o = it.classList.toggle("open"); b.setAttribute("aria-expanded", o); }); });
  }
  if (page === "photography") {
    var curAlbum = "All";
    $("#filters").addEventListener("click", function (e) {
      var b = e.target.closest(".tab"); if (!b) return; curAlbum = b.dataset.a;
      $$("#filters .tab").forEach(function (t) { t.classList.toggle("on", t === b); });
      var n = 0; $$("#masonry .shot").forEach(function (s, i) { var show = curAlbum === "All" || S.photography.photos[i].album === curAlbum; s.style.display = show ? "" : "none"; if (show) n++; });
      $("#empty").style.display = n ? "none" : "block";
    });
  }
  if (page === "photography" || page === "home") {
    lightbox(function () {
      var P = S.photography.photos;
      if (page === "home") return P.slice(0, 6);
      return P.filter(function (p) { return curAlbumSafe() === "All" || p.album === curAlbumSafe(); });
    });
  }
  function curAlbumSafe() { var on = $("#filters .tab.on"); return on ? on.dataset.a : "All"; }

  $$("canvas[data-flow]").forEach(flowCanvas);
  reveal(); tilt();
})();
