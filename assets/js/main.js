/* 4Me Lanka Tours — front-end interactions (no backend) */
/* Set to false once all AI hero images are in place, to hide the "Copy prompt" buttons */
var SHOW_AI_PROMPTS = false;

(function(){
  if(SHOW_AI_PROMPTS) document.documentElement.classList.add('show-prompts');
  var WA = '94712857705';
  var EMAIL = 'mailto@4melankatours.com';

  /* Image fallbacks are handled by the small inline script in each page <head>. */

  /* Header shadow + back to top */
  var header = document.querySelector('.header');
  var toTop = document.querySelector('.to-top');
  var prog = document.querySelector('.read-progress');
  function onScroll(){
    var y = window.scrollY;
    if(header) header.classList.toggle('scrolled', y > 20);
    if(toTop) toTop.classList.toggle('show', y > 700);
    if(prog){
      var h = document.documentElement.scrollHeight - innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if(toTop) toTop.addEventListener('click', function(){ scrollTo({top:0, behavior:'smooth'}); });

  /* Mobile drawer */
  var drawer = document.querySelector('.drawer');
  document.querySelectorAll('[data-open-drawer]').forEach(function(b){
    b.addEventListener('click', function(){ drawer.classList.add('open'); document.body.style.overflow='hidden'; });
  });
  if(drawer){
    drawer.addEventListener('click', function(e){
      if(e.target === drawer || e.target.closest('.drawer-close') || e.target.closest('nav a')){
        drawer.classList.remove('open'); document.body.style.overflow='';
      }
    });
  }

  /* Reveal on scroll */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(ents){
    ents.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {rootMargin:'0px 0px -8% 0px'}) : null;
  document.querySelectorAll('.reveal').forEach(function(el){ io ? io.observe(el) : el.classList.add('in'); });

  /* Count-up stats */
  var cio = 'IntersectionObserver' in window ? new IntersectionObserver(function(ents){
    ents.forEach(function(en){
      if(!en.isIntersecting) return;
      var el = en.target, end = +el.dataset.count, t0 = performance.now(), dur = 1600;
      (function tick(t){
        var p = Math.min(1, (t - t0) / dur); p = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * p) + (el.dataset.suffix || '');
        if(p < 1) requestAnimationFrame(tick);
      })(t0);
      cio.unobserve(el);
    });
  }, {threshold:.4}) : null;
  document.querySelectorAll('[data-count]').forEach(function(el){ cio ? cio.observe(el) : (el.textContent = el.dataset.count); });

  /* Horizontal rails */
  document.querySelectorAll('[data-rail]').forEach(function(wrap){
    var rail = wrap.querySelector('.dest-rail');
    wrap.querySelectorAll('[data-dir]').forEach(function(b){
      b.addEventListener('click', function(){ rail.scrollBy({left: +b.dataset.dir * rail.clientWidth * .8, behavior:'smooth'}); });
    });
  });

  /* Filter chips */
  document.querySelectorAll('[data-filter-group]').forEach(function(group){
    var target = document.querySelector(group.dataset.filterGroup);
    group.addEventListener('click', function(e){
      var c = e.target.closest('.chip'); if(!c) return;
      group.querySelectorAll('.chip').forEach(function(x){ x.classList.toggle('on', x === c); });
      var f = c.dataset.f;
      target.querySelectorAll('[data-cat]').forEach(function(card){
        card.style.display = (f === 'all' || card.dataset.cat.split(' ').indexOf(f) > -1) ? '' : 'none';
      });
    });
  });

  /* Read-more clamps */
  document.querySelectorAll('.more-btn').forEach(function(b){
    b.addEventListener('click', function(){
      var p = b.previousElementSibling; p.classList.toggle('open');
      b.textContent = p.classList.contains('open') ? 'Show less' : 'Read more';
    });
  });

  /* Lightbox */
  var lb = document.querySelector('.lightbox');
  if(lb){
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('.lb-cap'), set = [], idx = 0;
    function show(i){ idx = (i + set.length) % set.length; var b = set[idx]; lbImg.src = b.dataset.full || b.querySelector('img').src; lbImg.alt = b.dataset.cap || ''; lbCap.textContent = (b.dataset.cap ? b.dataset.cap + ' — ' : '') + (idx + 1) + ' / ' + set.length; }
    document.addEventListener('click', function(e){
      var b = e.target.closest('[data-lb]'); if(!b) return;
      e.preventDefault();
      set = Array.prototype.slice.call(document.querySelectorAll('[data-lb="' + b.dataset.lb + '"]'));
      show(set.indexOf(b)); lb.classList.add('open'); document.body.style.overflow = 'hidden';
    });
    function close(){ lb.classList.remove('open'); document.body.style.overflow = ''; }
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.querySelector('.lb-prev').addEventListener('click', function(){ show(idx - 1); });
    lb.querySelector('.lb-next').addEventListener('click', function(){ show(idx + 1); });
    lb.addEventListener('click', function(e){ if(e.target === lb) close(); });
    addEventListener('keydown', function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key === 'Escape') close(); if(e.key === 'ArrowLeft') show(idx - 1); if(e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* YouTube facades (load the player only on click) */
  document.querySelectorAll('.yt[data-id]').forEach(function(b){
    b.addEventListener('click', function(){
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.id + '?autoplay=1&rel=0';
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'; f.allowFullscreen = true;
      f.title = b.getAttribute('aria-label') || 'Video';
      b.innerHTML = ''; b.appendChild(f);
    }, {once:true});
  });

  /* Tabs */
  document.querySelectorAll('[data-tabs]').forEach(function(t){
    var btns = t.querySelectorAll('button');
    btns.forEach(function(b){
      b.addEventListener('click', function(){
        btns.forEach(function(x){ x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); });
        document.querySelectorAll(t.dataset.tabs).forEach(function(p){ p.classList.toggle('on', p.id === b.dataset.tab); });
      });
    });
    if(location.hash){ var m = t.querySelector('[data-tab="' + location.hash.slice(1) + '"]'); if(m) m.click(); }
    window.addEventListener('hashchange', function(){
      if(location.hash){ var m = t.querySelector('[data-tab="' + location.hash.slice(1) + '"]'); if(m) m.click(); }
    });
  });

  /* Steppers */
  document.querySelectorAll('.stepper').forEach(function(s){
    var inp = s.querySelector('input');
    s.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){ var v = (+inp.value || 0) + (+b.dataset.d); inp.value = Math.max(+inp.min || 0, v); });
    });
  });

  /* Build a message from any form and open WhatsApp or e-mail */
  function collect(form){
    var lines = [], seen = {};
    form.querySelectorAll('[name]').forEach(function(el){
      var n = el.name; if(seen[n] && el.type !== 'checkbox') return;
      var label = el.dataset.label || n;
      if(el.type === 'radio'){ if(el.checked){ lines.push(label + ': ' + el.value); seen[n] = 1; } return; }
      if(el.type === 'checkbox'){
        if(seen[n]) return; seen[n] = 1;
        var vals = Array.prototype.map.call(form.querySelectorAll('[name="' + n + '"]:checked'), function(c){ return c.value; });
        if(vals.length) lines.push(label + ': ' + vals.join(', ')); return;
      }
      seen[n] = 1;
      if(el.value && el.value.trim()) lines.push(label + ': ' + el.value.trim());
    });
    return lines;
  }
  function send(form, via){
    var title = form.dataset.title || 'Tour enquiry';
    var page = form.dataset.context ? '\n(' + form.dataset.context + ')' : '';
    var body = 'Ayubowan 4Me Lanka Tours! 👋\n' + title + page + '\n\n' + collect(form).join('\n');
    if(via === 'mail') location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(body);
    else window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(body), '_blank', 'noopener');
  }
  document.querySelectorAll('form[data-send]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!form.reportValidity()) return;
      send(form, e.submitter && e.submitter.dataset.via);
    });
  });

  /* Multi-step trip planner */
  document.querySelectorAll('.planner').forEach(function(pl){
    var form = pl.querySelector('form'), panels = pl.querySelectorAll('.pl-panel'), dots = pl.querySelectorAll('.pl-steps li');
    var bar = pl.querySelector('.pl-progress span'), sum = pl.querySelector('.summary'), cur = 0;
    function go(i){
      if(i > cur){
        var req = panels[cur].querySelectorAll('[required]');
        for(var k = 0; k < req.length; k++){ if(!req[k].reportValidity()) return; }
      }
      cur = Math.max(0, Math.min(panels.length - 1, i));
      panels.forEach(function(p, j){ p.classList.toggle('on', j === cur); });
      dots.forEach(function(d, j){ d.classList.toggle('on', j === cur); d.classList.toggle('done', j < cur); });
      bar.style.width = ((cur + 1) / panels.length * 100) + '%';
      if(sum && cur === panels.length - 1) sum.textContent = collect(form).join('\n') || 'Your selections will appear here.';
    }
    pl.querySelectorAll('[data-next]').forEach(function(b){ b.addEventListener('click', function(){ go(cur + 1); }); });
    pl.querySelectorAll('[data-prev]').forEach(function(b){ b.addEventListener('click', function(){ go(cur - 1); }); });
    /* pre-fill from hero search bar via query string */
    var q = new URLSearchParams(location.search);
    q.forEach(function(v, k){
      var el = form.querySelector('[name="' + k + '"][value="' + v + '"]') || form.querySelector('[name="' + k + '"]');
      if(!el) return; if(el.type === 'radio' || el.type === 'checkbox') el.checked = true; else el.value = v;
    });
    go(0);
  });

  /* Hero planner bar -> jump to planner with values */
  var pb = document.querySelector('.planner-bar');
  if(pb){
    pb.addEventListener('submit', function(e){
      e.preventDefault();
      var pl = document.querySelector('#plan form');
      if(pl){
        new FormData(pb).forEach(function(v, k){
          var el = pl.querySelector('[name="' + k + '"][value="' + v + '"]') || pl.querySelector('[name="' + k + '"]');
          if(!el || !v) return; if(el.type === 'radio' || el.type === 'checkbox') el.checked = true; else el.value = v;
        });
        document.querySelector('#plan').scrollIntoView({behavior:'smooth'});
      }
    });
  }

  /* Copy AI image prompts */
  var toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast);
  function say(msg){ toast.innerHTML = msg; toast.classList.add('on'); clearTimeout(say.t); say.t = setTimeout(function(){ toast.classList.remove('on'); }, 4200); }
  function copy(text, done){
    if(navigator.clipboard && window.isSecureContext){ navigator.clipboard.writeText(text).then(done, function(){ fallbackCopy(text); done(); }); }
    else { fallbackCopy(text); done(); }
  }
  function fallbackCopy(text){ var t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try{ document.execCommand('copy'); }catch(e){} t.remove(); }
  document.addEventListener('click', function(e){
    var b = e.target.closest('.prompt-btn, .prompt-copy'); if(!b) return;
    e.preventDefault();
    copy(b.dataset.prompt, function(){ say('<b>Prompt copied!</b> Paste it into Gemini, then save the image as<br><code>' + b.dataset.file + '</code>'); });
  });
  var all = document.getElementById('copy-all');
  if(all) all.addEventListener('click', function(){
    var txt = Array.prototype.map.call(document.querySelectorAll('.pr-row'), function(r){
      var c = r.querySelector('.prompt-copy'); return r.querySelector('h3').textContent + '\nSave as: ' + c.dataset.file + '\n' + c.dataset.prompt;
    }).join('\n\n');
    copy(txt, function(){ say('<b>All prompts copied</b> to your clipboard.'); });
  });

  /* Home hero slideshow */
  document.querySelectorAll('[data-hero-slider]').forEach(function(h){
    var slides = h.querySelectorAll('.slide'), tabs = h.querySelectorAll('[data-go]'), tag = h.querySelector('[data-slide-tag]');
    var pb = h.querySelector('[data-slide-prompt]'), cur = 0, timer, DUR = 6500;
    function go(i){
      cur = (i + slides.length) % slides.length;
      slides.forEach(function(s, j){ s.classList.toggle('on', j === cur); if(j === cur && s.loading === 'lazy') s.loading = 'eager'; });
      tabs.forEach(function(t, j){ t.classList.toggle('on', j === cur); t.setAttribute('aria-selected', j === cur); });
      var s = slides[cur];
      if(tag){ tag.parentNode.classList.remove('swap'); void tag.offsetWidth; tag.textContent = s.dataset.tag; tag.parentNode.classList.add('swap'); }
      if(pb){ pb.dataset.prompt = s.dataset.prompt; pb.dataset.file = s.dataset.file; pb.querySelector('[data-slide-no]').textContent = cur + 1; pb.querySelector('[data-slide-file]').textContent = 'save as ' + s.dataset.file; }
      h.style.setProperty('--dur', DUR + 'ms');
      clearTimeout(timer); timer = setTimeout(function(){ go(cur + 1); }, DUR);
    }
    tabs.forEach(function(t){ t.addEventListener('click', function(){ go(+t.dataset.go); }); });
    slides.forEach(function(s, j){ if(j > 0) s.loading = 'eager'; });
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches) go(0);
  });

  /* Pinned horizontal scroll for tour posters */
  document.querySelectorAll('[data-hscroll]').forEach(function(sec){
    var sticky = sec.querySelector('.hs-sticky'), track = sec.querySelector('.hs-track'), bar = sec.querySelector('.hs-prog span'), dist = 0;
    var native = function(){ return innerWidth < 760 || matchMedia('(prefers-reduced-motion: reduce)').matches; };
    function size(){
      if(native()){ sec.classList.add('native'); sec.style.height = ''; track.style.transform = ''; return; }
      sec.classList.remove('native');
      dist = Math.max(0, track.scrollWidth - innerWidth);
      sec.style.height = (sticky.offsetHeight + dist * 0.7) + 'px';
      move();
    }
    function move(){
      if(sec.classList.contains('native')) return;
      var top = sec.getBoundingClientRect().top;
      var p = dist ? Math.min(1, Math.max(0, -top / (dist * 0.7))) : 0;
      track.style.transform = 'translate3d(' + (-p * dist) + 'px,0,0)';
      if(bar) bar.style.width = (p * 100) + '%';
    }
    if(!native()){
      track.querySelectorAll('img').forEach(function(i){ i.loading = 'eager'; i.addEventListener('load', size); });
    }
    addEventListener('scroll', move, {passive:true});
    addEventListener('resize', size);
    addEventListener('load', size);
    size();
  });

  /* Current year */
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

  /* =========================================================
     Smart Topbar & Header Fly-Away on Scroll
     ========================================================= */
  var lastScrollY = window.scrollY || 0;
  var scrollDeltaThreshold = 8;
  var isNavHidden = false;

  function onNavScroll() {
    var curY = window.scrollY || 0;
    var diff = curY - lastScrollY;

    // Do not hide if drawer or currency calculator is open
    if (document.querySelector('.drawer.open') || document.querySelector('.cur-modal.open')) {
      lastScrollY = curY;
      return;
    }

    if (curY <= 20) {
      if (isNavHidden) {
        document.body.classList.remove('nav-hidden');
        isNavHidden = false;
      }
    } else if (diff > scrollDeltaThreshold && curY > 80) {
      // Scrolling DOWN -> fly away
      if (!isNavHidden) {
        document.body.classList.add('nav-hidden');
        isNavHidden = true;
      }
    } else if (diff < -scrollDeltaThreshold) {
      // Scrolling UP -> appear again
      if (isNavHidden) {
        document.body.classList.remove('nav-hidden');
        isNavHidden = false;
      }
    }
    lastScrollY = curY;
  }
  addEventListener('scroll', onNavScroll, { passive: true });

  /* =========================================================
     CTA WhatsApp Button & Anchor Link to Round Tour Form
     ========================================================= */
  function updateNavCTA() {
    // Convert call text into single WhatsApp button across all pages
    document.querySelectorAll('.nav-cta .call').forEach(function(callEl){
      var waBtn = document.createElement('a');
      waBtn.className = 'btn sm wa';
      waBtn.href = 'https://wa.me/' + WA;
      waBtn.target = '_blank';
      waBtn.rel = 'noopener';
      waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
      waBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6 6 0 0 0 1.3 3.2 13.8 13.8 0 0 0 5.3 4.7c.7.3 1.3.5 1.8.6a4.3 4.3 0 0 0 2-.1 3.2 3.2 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.9L0 24l6.3-1.6a11.8 11.8 0 0 0 5.7 1.4 11.8 11.8 0 0 0 8.4-20.2z"/></svg> WhatsApp';
      callEl.parentNode.replaceChild(waBtn, callEl);
    });

    // Ensure Plan my trip buttons link to round tour form anchor on contact page
    document.querySelectorAll('.nav-cta a, .mbar a.go-plan').forEach(function(a){
      var href = a.getAttribute('href') || '';
      if (href.indexOf('contact-us') > -1 && a.textContent.indexOf('Plan my trip') > -1) {
        if (!href.includes('#tour')) {
          a.setAttribute('href', href.replace(/(contact-us(?:\/index\.html)?)(?:#.*)?$/, '$1#tour'));
        }
      }
    });
  }

  /* =========================================================
     Translator & Currency Converter System
     ========================================================= */
  var LANGUAGES = [
    { code: 'en', label: 'ENG English' },
    { code: 'ar', label: 'ARA العربية' },
    { code: 'zh-CN', label: 'ZHO 中文' },
    { code: 'cs', label: 'CES Čeština' },
    { code: 'da', label: 'DAN Dansk' },
    { code: 'nl', label: 'NLD Nederlands' },
    { code: 'fr', label: 'FRA Français' },
    { code: 'de', label: 'DEU Deutsch' },
    { code: 'iw', label: 'HEB עברית' },
    { code: 'hi', label: 'HIN हिन्दी' },
    { code: 'it', label: 'ITA Italiano' },
    { code: 'ja', label: 'JPN 日本語' },
    { code: 'pl', label: 'POL Polski' },
    { code: 'pt', label: 'POR Português' },
    { code: 'ro', label: 'RON Română' },
    { code: 'ru', label: 'RUS Русский' },
    { code: 'es', label: 'SPA Español' },
    { code: 'sv', label: 'SWE Svenska' },
    { code: 'si', label: 'SIN සිංහල' }
  ];

  var CURRENCIES = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs.' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'AED' }
  ];

  var DEFAULT_RATES = {
    USD: 1,
    LKR: 305,
    INR: 86.8,
    EUR: 0.92,
    AUD: 1.55,
    GBP: 0.79,
    JPY: 154,
    CNY: 7.25,
    AED: 3.67
  };

  var RATES = Object.assign({}, DEFAULT_RATES);

  // Load cached live rates or fetch updated rates
  try {
    var cached = JSON.parse(localStorage.getItem('4mlt_rates_cache') || 'null');
    if (cached && cached.rates && (Date.now() - cached.timestamp < 12 * 3600 * 1000)) {
      CURRENCIES.forEach(function(c){ if(cached.rates[c.code]) RATES[c.code] = cached.rates[c.code]; });
    } else {
      fetch('https://open.er-api.com/v6/latest/USD')
        .then(function(r){ return r.json(); })
        .then(function(d){
          if(d && d.rates){
            CURRENCIES.forEach(function(c){ if(d.rates[c.code]) RATES[c.code] = d.rates[c.code]; });
            localStorage.setItem('4mlt_rates_cache', JSON.stringify({ rates: d.rates, timestamp: Date.now() }));
            applyCurrency(getActiveCurrency());
          }
        }).catch(function(){ /* fallback baseline rates */ });
    }
  } catch(e){}

  function getActiveLanguage() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/);
    var cookieLang = m ? m[1] : null;
    return localStorage.getItem('4mlt_lang') || cookieLang || 'en';
  }

  function getActiveCurrency() {
    return localStorage.getItem('4mlt_currency') || 'USD';
  }

  /* Build options HTML */
  function buildLangOptions(active) {
    return LANGUAGES.map(function(l){
      return '<option value="' + l.code + '"' + (l.code === active ? ' selected' : '') + '>' + l.label + '</option>';
    }).join('');
  }

  function buildCurOptions(active) {
    return CURRENCIES.map(function(c){
      return '<option value="' + c.code + '"' + (c.code === active ? ' selected' : '') + '>' + c.code + ' (' + c.symbol + ')' + '</option>';
    }).join('');
  }

  /* Inject Topbar Tools if not present */
  function injectTopbarTools() {
    var tbRight = document.querySelector('.tb-right');
    if (!tbRight) return;
    if (tbRight.querySelector('.tb-tools')) return;

    var activeLang = getActiveLanguage();
    var activeCur = getActiveCurrency();

    var wrap = document.createElement('div');
    wrap.className = 'tb-tools';
    wrap.innerHTML = 
      '<div class="tb-tool-item tb-lang" title="Select Language">' +
        '<svg class="tb-tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
        '<select id="site-lang-select" class="tb-select" aria-label="Select Language">' +
          buildLangOptions(activeLang) +
        '</select>' +
      '</div>' +
      '<div class="tb-tool-item tb-currency" title="Select Currency">' +
        '<svg class="tb-tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 6v2m0 8v2"/></svg>' +
        '<select id="site-currency-select" class="tb-select" aria-label="Select Currency">' +
          buildCurOptions(activeCur) +
        '</select>' +
        '<button type="button" class="tb-calc-btn" id="open-calc-btn" aria-label="Open Currency Converter Calculator" title="Quick Currency Converter">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>' +
        '</button>' +
      '</div>';
    tbRight.appendChild(wrap);
  }

  /* Inject Mobile Drawer Tools */
  function injectDrawerTools() {
    var drawerNav = document.querySelector('.drawer-panel nav');
    if (!drawerNav || document.querySelector('.drawer-tools')) return;

    var activeLang = getActiveLanguage();
    var activeCur = getActiveCurrency();

    var div = document.createElement('div');
    div.className = 'drawer-tools';
    div.innerHTML =
      '<div class="drawer-tools-title"><svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Language &amp; Currency</div>' +
      '<div class="drawer-tools-row">' +
        '<div class="drawer-tool-box"><label for="drawer-lang-select">Language</label><div class="tb-tool-item"><select id="drawer-lang-select" class="tb-select">' + buildLangOptions(activeLang) + '</select></div></div>' +
        '<div class="drawer-tool-box"><label for="drawer-currency-select">Currency</label><div class="tb-tool-item"><select id="drawer-currency-select" class="tb-select">' + buildCurOptions(activeCur) + '</select></div></div>' +
      '</div>' +
      '<button type="button" class="drawer-calc-trigger" id="drawer-open-calc-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg> Quick Currency Calculator</button>';
    drawerNav.appendChild(div);
  }

  /* Inject Currency Calculator Modal */
  function injectCalculatorModal() {
    if (document.getElementById('cur-modal')) return;
    var modal = document.createElement('div');
    modal.className = 'cur-modal';
    modal.id = 'cur-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="cur-modal-backdrop" id="cur-modal-backdrop"></div>' +
      '<div class="cur-modal-card" role="dialog" aria-modal="true" aria-labelledby="cur-modal-title">' +
        '<div class="cur-modal-head">' +
          '<div class="cur-modal-title" id="cur-modal-title">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 6v2m0 8v2"/></svg>' +
            '<span>Currency Converter</span>' +
          '</div>' +
          '<button type="button" class="cur-modal-close" id="close-calc-btn" aria-label="Close calculator">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="cur-modal-body">' +
          '<div class="cur-input-group">' +
            '<label for="cur-calc-amount">Amount</label>' +
            '<div class="cur-input-wrap">' +
              '<input type="number" id="cur-calc-amount" value="100" min="0" step="any" placeholder="Enter amount">' +
              '<select id="cur-calc-from">' + buildCurOptions('USD') + '</select>' +
            '</div>' +
          '</div>' +
          '<div class="cur-results-title">Converted Values · Click to select</div>' +
          '<div class="cur-results-grid" id="cur-results-grid"></div>' +
          '<div class="cur-modal-foot">' +
            '<small id="cur-rate-note">Live indicative exchange rates · Base: USD</small>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
  }

  /* Scan & wrap dollar amounts */
  function preparePrices() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          var p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          var tag = p.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'select' || tag === 'option' || tag === 'textarea' || tag === 'input') {
            return NodeFilter.FILTER_REJECT;
          }
          if (p.closest('.cur-modal') || p.closest('.tb-tools') || p.closest('.drawer-tools')) {
            return NodeFilter.FILTER_REJECT;
          }
          if (/\$\s*\d+/.test(node.nodeValue)) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      },
      false
    );

    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach(function(node) {
      var val = node.nodeValue;
      var regex = /\$\s*([0-9]{1,3}(?:,[0-9]{3})*|[0-9]+)/g;
      if (!regex.test(val)) return;

      var fragment = document.createDocumentFragment();
      var lastIdx = 0;
      regex.lastIndex = 0;
      var match;

      while ((match = regex.exec(val)) !== null) {
        if (match.index > lastIdx) {
          fragment.appendChild(document.createTextNode(val.slice(lastIdx, match.index)));
        }
        var rawNum = parseFloat(match[1].replace(/,/g, ''));
        var span = document.createElement('span');
        span.className = 'site-price';
        span.dataset.usd = rawNum;
        span.dataset.orig = match[0];
        span.textContent = match[0];
        fragment.appendChild(span);
        lastIdx = regex.lastIndex;
      }
      if (lastIdx < val.length) {
        fragment.appendChild(document.createTextNode(val.slice(lastIdx)));
      }
      if (node.parentNode) {
        node.parentNode.replaceChild(fragment, node);
      }
    });
  }

  /* Format value with currency symbol and NO decimals (rounded to closer 1) */
  function formatPriceWithSymbol(curCode, val) {
    curCode = (curCode || 'USD').toUpperCase().trim();
    var rounded = Math.round(Number(val) || 0);
    var formattedNum = rounded.toLocaleString('en-US');

    switch (curCode) {
      case 'USD':
        return '$' + formattedNum;
      case 'EUR':
        return '€' + formattedNum;
      case 'GBP':
        return '£' + formattedNum;
      case 'INR':
        return '₹' + formattedNum;
      case 'JPY':
      case 'CNY':
        return '¥' + formattedNum;
      case 'AUD':
        return 'A$' + formattedNum;
      case 'LKR':
        return 'Rs. ' + formattedNum;
      case 'AED':
        return 'AED ' + formattedNum;
      default:
        var c = CURRENCIES.find(function(item){ return item.code === curCode; });
        var sym = (c && c.symbol) ? c.symbol : curCode;
        return (sym.length === 1 ? sym : (sym + ' ')) + formattedNum;
    }
  }

  /* Apply currency conversion to prices */
  function applyCurrency(curCode) {
    curCode = (curCode || 'USD').toUpperCase().trim();
    localStorage.setItem('4mlt_currency', curCode);

    document.querySelectorAll('#site-currency-select, #drawer-currency-select').forEach(function(sel){
      sel.value = curCode;
    });

    var rate = RATES[curCode] || 1;

    document.querySelectorAll('.site-price').forEach(function(el){
      var usd = parseFloat(el.dataset.usd);
      if (isNaN(usd)) return;

      var conv = (curCode === 'USD') ? usd : (usd * rate);
      el.textContent = formatPriceWithSymbol(curCode, conv);
    });

    updateCalculator();
  }

  /* Currency Calculator update */
  function updateCalculator() {
    var amtInput = document.getElementById('cur-calc-amount');
    var fromSel = document.getElementById('cur-calc-from');
    var grid = document.getElementById('cur-results-grid');
    if (!amtInput || !fromSel || !grid) return;

    var amt = parseFloat(amtInput.value) || 0;
    var fromCur = (fromSel.value || 'USD').toUpperCase().trim();
    var activeCur = getActiveCurrency();

    // Convert from source currency to USD first
    var fromRate = RATES[fromCur] || 1;
    var usdVal = fromRate > 0 ? (amt / fromRate) : 0;

    grid.innerHTML = CURRENCIES.map(function(c){
      var targetRate = RATES[c.code] || 1;
      var converted = usdVal * targetRate;
      var formatted = formatPriceWithSymbol(c.code, converted);

      var isCurrent = (c.code === activeCur);
      return '<div class="cur-res-item' + (isCurrent ? ' active' : '') + '" data-cur="' + c.code + '">' +
        '<div class="cur-res-code"><span>' + c.code + '</span><small>' + c.symbol + '</small></div>' +
        '<div class="cur-res-name">' + c.name + '</div>' +
        '<div class="cur-res-val">' + formatted + '</div>' +
      '</div>';
    }).join('');

    grid.querySelectorAll('.cur-res-item').forEach(function(item){
      item.addEventListener('click', function(){
        var code = item.dataset.cur;
        applyCurrency(code);
        closeCalculator();
      });
    });
  }

  function openCalculator() {
    var modal = document.getElementById('cur-modal');
    if (!modal) return;
    var fromSel = document.getElementById('cur-calc-from');
    if (fromSel) fromSel.value = getActiveCurrency();
    updateCalculator();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCalculator() {
    var modal = document.getElementById('cur-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* Google Translate Integration */
  function initGoogleTranslate() {
    if (!document.getElementById('google_translate_element')) {
      var gt = document.createElement('div');
      gt.id = 'google_translate_element';
      gt.style.display = 'none';
      document.body.appendChild(gt);
    }

    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,zh-CN,cs,da,nl,en,fr,de,iw,hi,it,ja,pl,pt,ro,ru,es,sv,si',
        autoDisplay: false
      }, 'google_translate_element');

      var savedLang = getActiveLanguage();
      if (savedLang && savedLang !== 'en') {
        setTimeout(function(){ applyLanguage(savedLang, true); }, 300);
      }
    };

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.head.appendChild(s);
    }
  }

  function applyLanguage(langCode, isInit) {
    localStorage.setItem('4mlt_lang', langCode);

    document.querySelectorAll('#site-lang-select, #drawer-lang-select').forEach(function(sel){
      sel.value = langCode;
    });

    var host = location.hostname.replace(/^www\./, '');

    if (langCode === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      if (host && host !== 'localhost') {
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + host + ';';
      }
      document.cookie = 'googtrans=/en/en; path=/;';
      var combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = 'en';
        combo.dispatchEvent(new Event('change'));
      } else if (!isInit && (document.documentElement.classList.contains('translated-ltr') || document.documentElement.classList.contains('translated-rtl'))) {
        location.reload();
      }
      return;
    }

    document.cookie = 'googtrans=/en/' + langCode + '; path=/;';
    if (host && host !== 'localhost' && !host.includes(':')) {
      document.cookie = 'googtrans=/en/' + langCode + '; path=/; domain=.' + host + ';';
    }

    var teCombo = document.querySelector('.goog-te-combo');
    if (teCombo) {
      teCombo.value = langCode;
      teCombo.dispatchEvent(new Event('change'));
    } else {
      var tries = 0;
      var timer = setInterval(function(){
        tries++;
        var c = document.querySelector('.goog-te-combo');
        if (c) {
          clearInterval(timer);
          c.value = langCode;
          c.dispatchEvent(new Event('change'));
        }
        if (tries > 25) clearInterval(timer);
      }, 300);
    }
  }

  /* Wire event listeners */
  function initTools() {
    updateNavCTA();
    injectTopbarTools();
    injectDrawerTools();
    injectCalculatorModal();
    preparePrices();

    var savedCur = getActiveCurrency();
    applyCurrency(savedCur);

    // Language & Currency change handlers
    document.addEventListener('change', function(e){
      if (e.target && (e.target.id === 'site-lang-select' || e.target.id === 'drawer-lang-select')) {
        applyLanguage(e.target.value);
      }
      if (e.target && (e.target.id === 'site-currency-select' || e.target.id === 'drawer-currency-select')) {
        applyCurrency(e.target.value);
      }
      if (e.target && e.target.id === 'cur-calc-from') {
        updateCalculator();
      }
    });

    document.addEventListener('input', function(e){
      if (e.target && e.target.id === 'cur-calc-amount') {
        updateCalculator();
      }
    });

    document.addEventListener('click', function(e){
      if (e.target.closest('#open-calc-btn') || e.target.closest('#drawer-open-calc-btn')) {
        openCalculator();
      }
      if (e.target.closest('#close-calc-btn') || e.target.closest('#cur-modal-backdrop')) {
        closeCalculator();
      }
    });

    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeCalculator();
    });

    initGoogleTranslate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTools);
  } else {
    initTools();
  }
})();

