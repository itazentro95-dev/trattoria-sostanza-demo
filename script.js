/* Trattoria Sostanza: i18n + depth engine
   Italian is the default render (HTML). Dictionaries swap textContent
   via data-i18n keys; parity is verified programmatically. */
(function () {
  "use strict";

  var I18N = {
    it: {
      metaTitle: "Trattoria Sostanza: Firenze, dal 1869",
      skip: "Vai alla carta",
      topAddr: "Via del Porcellana 25/R · Firenze",
      topHours: "Lun-Ven 12:30-14:00, 19:30-21:45",
      wordmarkSub: "Firenze · dal 1869",
      navSig: "I firmati", navMenu: "La carta", navRoom: "La sala", navBook: "Prenotare", navVisit: "Visita",
      heroHand: "la carta di oggi, scritta a mano",
      heroTitle: "Il pollo al burro, come nel 1869.",
      heroSub: "A due passi da Santa Maria Novella, una trattoria che non è mai cambiata: tavoli di marmo da condividere, il menu scritto a mano ogni giorno e il petto di pollo al burro che ha fatto la sua leggenda.",
      heroCtaCall: "Prenota per telefono", heroCtaMenu: "Vedi la carta",
      heroRating: "4,5 su Google · oltre 1.100 recensioni",
      cartaHead: "Oggi in carta",
      miniDish1: "Petto di pollo al burro", miniDish2: "Tortino di carciofi", miniDish3: "Bistecca alla fiorentina",
      cartaHand: "e il resto, a penna, in sala",
      heroCaption: "Petto di pollo al burro, nel rame", heroCaptionHand: "il piatto della casa",
      stampText: "dal 1869",
      trustRating: "su Google", trustReviewsN: "Oltre 1.100", trustReviews: "recensioni Google",
      trustSinceN: "Dal 1869", trustSince: "nella stessa via", trustPhoneN: "Solo telefono", trustPhone: "per prenotare", sigTitle: "Tre piatti, una firma.",
      sigIntro: "Il menu cambia ogni giorno, scritto a mano. Ma la casa è famosa soprattutto per tre piatti: quelli che i fiorentini ordinano da generazioni.",
      sig1Hand: "il leggendario", sig1Name: "Petto di pollo al burro",
      sig1Text: "Prima sulla brace, poi infarinato, passato nell'uovo e finito in una padella di rame colma di burro fuso. In tavola arriva ancora sfrigolante, nel suo burro brunito.",
      sig2Hand: "di stagione", sig2Name: "Tortino di carciofi",
      sig2Text: "Carciofi e uova in un tortino dorato, quasi una frittata: il secondo piatto simbolo della casa. C'è solo quando i carciofi sono di stagione.",
      sig3Hand: "alla brace", sig3Name: "Bistecca alla fiorentina",
      sig3Text: "Grande e al sangue, come vuole la tradizione fiorentina, cotta sulla brace e salata al momento. Da condividere, come i tavoli.", menuTitle: "Scritta a mano, ogni giorno.",
      menuIntro: "La carta cambia con il mercato e con la stagione: questa è la spina dorsale, i piatti che tornano da sempre. I prezzi sono sulla carta del giorno, in sala.",
      groupStart: "Per cominciare",
      d1Name: "Finocchiona e salumi toscani", d1Text: "Il salame al finocchietto e i salumi, per aprire come si deve.",
      d2Name: "Fagioli all'olio", d2Text: "Fagioli cotti piano, con olio buono: la Toscana più semplice.",
      d3Name: "Tortino di carciofi", d3Text: "Carciofi e uova, dorato in forno. Solo di stagione.",
      groupFirst: "I primi",
      d4Name: "Tortellini in brodo", d4Text: "Nel brodo ricco della gallina bollita: una delle ultime cucine a farlo ancora così.",
      d5Name: "Penne al ragù", d5Text: "Al sugo di carne, intenso e casalingo.",
      groupSecond: "I secondi",
      d6Name: "Petto di pollo al burro", d6Text: "Il piatto simbolo: brace, poi burro fuso nel rame. Sfrigolante.",
      d7Name: "Bistecca alla fiorentina", d7Text: "Grande, alla brace, al sangue.",
      d8Name: "Gallina bollita", d8Text: "La gallina del brodo, bollita come una volta.",
      d9Name: "Trippa", d9Text: "Per chi cerca la Firenze più vera.",
      groupSweet: "Per finire",
      d10Name: "Torta di meringa e fragole", d10Text: "Meringa leggera e fragole: il finale che tutti ricordano.",
      menuHand: "il menu del giorno è scritto a mano, in sala", panTitle: "Finito nel burro, sulla brace.",
      panText: "Il petto di pollo passa prima sulla brace. Poi viene infarinato, passato nell'uovo e finito in una piccola padella di rame colma di burro fuso, ancora sulla brace. In tavola arriva così: sfrigolante, nel suo burro brunito, da raccogliere con il pane.", roomTitle: "Piastrelle bianche, tavoli di marmo.",
      roomText1: "Pareti di piastrelle bianche coperte di vecchie fotografie, tavoli di marmo da condividere con chi capita accanto, sedie di legno tutte diverse.",
      roomText2: "La sala è piccola e quasi nulla è cambiato dal 1869. È questo, da sempre, il lusso di Sostanza: non dover cambiare.",
      roomCaption: "la sala, com'è sempre stata", galTitle: "I piatti, da vicino.", galHand: "scorri le stampe",
      g1Cap: "Pollo al burro, nel rame", g2Cap: "Tortino di carciofi", g3Cap: "Bistecca alla fiorentina",
      g4Cap: "Tortellini in brodo", g5Cap: "La sala", g6Cap: "Meringa e fragole", bookTitle: "Si prenota solo per telefono.",
      bookIntro: "Come nel 1869: niente app, niente moduli. Una telefonata, e il tavolo è vostro.",
      step1Title: "Telefonate", step1Text: "Le prenotazioni si prendono solo al telefono. La trattoria non ha un indirizzo email: se ne trovate uno a suo nome, non è della casa.",
      step2Title: "Con anticipo", step2Text: "La sala è piccola e si riempie in fretta: meglio chiamare con qualche giorno di anticipo, specie in alta stagione.",
      step3Title: "Due turni la sera", step3Text: "Il servizio serale si svolge in due turni, come da tradizione: l'orario esatto si concorda al telefono.",
      bookCta: "Chiama ora:", bookHand: "risponde la casa, non un centralino", visitTitle: "A due passi da Santa Maria Novella.",
      visitAddrTitle: "Dove", visitAddr: "Trattoria Sostanza<br>Via del Porcellana 25/R<br>50123 Firenze",
      visitDirections: "Indicazioni stradali",
      visitHoursTitle: "Orari", hoursWeek: "Lunedì-Venerdì", hoursSat: "Sabato", hoursSun: "Domenica",
      hoursClosed1: "Chiuso", hoursClosed2: "Chiuso",
      hoursNote: "Orari secondo il profilo Google della trattoria: per sicurezza, confermate al telefono.",
      visitCallTitle: "Telefono", visitCallText: "Per prenotare e per ogni informazione: è l'unico canale della casa.",
      footerLine: "Via del Porcellana 25/R, 50123 Firenze, 055 212691",
      footerNote: "Pagina dimostrativa non ufficiale, realizzata come concept. Le fotografie sono immagini d'atmosfera generate. Fatti, piatti e orari dalle schede pubbliche della trattoria (novembre 2026).",
      mbCall: "Chiama", mbMenu: "La carta", mbDir: "Indicazioni"
    },
    en: {
      metaTitle: "Trattoria Sostanza: Florence, since 1869",
      skip: "Skip to the menu",
      topAddr: "Via del Porcellana 25/R · Florence",
      topHours: "Mon-Fri 12:30-14:00, 19:30-21:45",
      wordmarkSub: "Florence · since 1869",
      navSig: "Signature dishes", navMenu: "The menu", navRoom: "The room", navBook: "Booking", navVisit: "Visit",
      heroHand: "today's menu, written by hand",
      heroTitle: "Butter chicken, just as in 1869.",
      heroSub: "A few steps from Santa Maria Novella, a trattoria that has never changed: marble tables shared with whoever sits beside you, a menu handwritten every day, and the butter chicken that made its legend.",
      heroCtaCall: "Book by phone", heroCtaMenu: "See the menu",
      heroRating: "4.5 on Google · over 1,100 reviews",
      cartaHead: "On today's menu",
      miniDish1: "Chicken breast in butter", miniDish2: "Artichoke tortino", miniDish3: "Florentine steak",
      cartaHand: "and the rest, in pen, in the room",
      heroCaption: "Chicken breast in butter, in the copper pan", heroCaptionHand: "the house dish",
      stampText: "since 1869",
      trustRating: "on Google", trustReviewsN: "Over 1,100", trustReviews: "Google reviews",
      trustSinceN: "Since 1869", trustSince: "in the same street", trustPhoneN: "Phone only", trustPhone: "to book", sigTitle: "Three dishes, one signature.",
      sigIntro: "The menu changes every day, written by hand. But the house is famous above all for three dishes, the ones Florentines have ordered for generations.",
      sig1Hand: "the legendary one", sig1Name: "Chicken breast in butter",
      sig1Text: "First over the coals, then floured, dipped in egg and finished in a copper pan full of melted butter. It arrives at the table still sizzling, in its browned butter.",
      sig2Hand: "in season", sig2Name: "Artichoke tortino",
      sig2Text: "Artichokes and eggs in a golden tortino, almost a frittata: the house's second signature. There only when artichokes are in season.",
      sig3Hand: "over the coals", sig3Name: "Florentine steak",
      sig3Text: "Large and rare, as Florentine tradition demands, cooked over the coals and salted at the moment. Made for sharing, like the tables.", menuTitle: "Handwritten, every day.",
      menuIntro: "The menu changes with the market and the season: this is the backbone, the dishes that have always come back. Prices are on the day's menu, in the room.",
      groupStart: "To start",
      d1Name: "Finocchiona and Tuscan salumi", d1Text: "The fennel salami and cured meats, to open the meal properly.",
      d2Name: "Beans in olive oil", d2Text: "Beans cooked slowly, with good oil: the simplest Tuscany.",
      d3Name: "Artichoke tortino", d3Text: "Artichokes and eggs, golden from the oven. In season only.",
      groupFirst: "First courses",
      d4Name: "Tortellini in broth", d4Text: "In the rich broth of the boiled hen: one of the last kitchens still doing it this way.",
      d5Name: "Penne al ragù", d5Text: "With a meat sauce, deep and homely.",
      groupSecond: "Main courses",
      d6Name: "Chicken breast in butter", d6Text: "The signature: coals first, then melted butter in the copper pan. Sizzling.",
      d7Name: "Florentine steak", d7Text: "Large, over the coals, rare.",
      d8Name: "Boiled hen", d8Text: "The hen from the broth, boiled the old way.",
      d9Name: "Tripe", d9Text: "For those looking for the truest Florence.",
      groupSweet: "To finish",
      d10Name: "Meringue and strawberry cake", d10Text: "Light meringue and strawberries: the ending everyone remembers.",
      menuHand: "the day's menu is handwritten, in the room", panTitle: "Finished in butter, over the coals.",
      panText: "The chicken breast goes over the coals first. Then it is floured, dipped in egg and finished in a small copper pan full of melted butter, still over the embers. It arrives at the table like this: sizzling, in its browned butter, ready to be mopped up with bread.", roomTitle: "White tiles, marble tables.",
      roomText1: "Walls of white tiles covered with old photographs, marble tables to share with whoever sits beside you, wooden chairs all different.",
      roomText2: "The room is small and almost nothing has changed since 1869. That has always been Sostanza's luxury: never needing to change.",
      roomCaption: "the room, as it has always been", galTitle: "The dishes, up close.", galHand: "swipe through the prints",
      g1Cap: "Butter chicken, in the copper pan", g2Cap: "Artichoke tortino", g3Cap: "Florentine steak",
      g4Cap: "Tortellini in broth", g5Cap: "The room", g6Cap: "Meringue and strawberries", bookTitle: "Bookings are by phone only.",
      bookIntro: "Just as in 1869: no apps, no forms. One phone call, and the table is yours.",
      step1Title: "Call", step1Text: "Reservations are taken by phone only. The trattoria has no email address: if you find one in its name, it is not the house's.",
      step2Title: "Ahead of time", step2Text: "The room is small and fills quickly: best to call a few days ahead, especially in high season.",
      step3Title: "Two evening sittings", step3Text: "Dinner is served in two sittings, as tradition has it: the exact time is agreed on the phone.",
      bookCta: "Call now:", bookHand: "the house answers, not a call centre", visitTitle: "A few steps from Santa Maria Novella.",
      visitAddrTitle: "Where", visitAddr: "Trattoria Sostanza<br>Via del Porcellana 25/R<br>50123 Florence",
      visitDirections: "Get directions",
      visitHoursTitle: "Hours", hoursWeek: "Monday-Friday", hoursSat: "Saturday", hoursSun: "Sunday",
      hoursClosed1: "Closed", hoursClosed2: "Closed",
      hoursNote: "Hours as listed on the trattoria's Google profile: to be safe, confirm by phone.",
      visitCallTitle: "Phone", visitCallText: "For bookings and any information: it is the house's only channel.",
      footerLine: "Via del Porcellana 25/R, 50123 Florence, 055 212691",
      footerNote: "Unofficial concept demo page. Photographs are generated atmosphere images. Facts, dishes and hours from the trattoria's public listings (November 2026).",
      mbCall: "Call", mbMenu: "Menu", mbDir: "Directions"
    }
  };

  var STORE_KEY = "sostanza-lang";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.title = dict.metaTitle;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) nodes[i].innerHTML = dict[key];
    }
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("is-active", active);
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
  if (saved && saved !== "it" && I18N[saved]) applyLang(saved);

  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }

  /* ---------- reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- depth engine (skipped under reduced motion) ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  var stage = document.getElementById("heroStage");
  var heroCard = document.getElementById("heroCard");
  var heroImg = document.getElementById("heroImg");
  var panImg = document.getElementById("panImg");
  var track = document.getElementById("galleryTrack");
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  var layers = [];
  if (stage) {
    stage.querySelectorAll("[data-depth]").forEach(function (el) {
      layers.push({ el: el, depth: parseFloat(el.getAttribute("data-depth")) || 0, x: 0, y: 0 });
    });
  }

  var targetPX = 0, targetPY = 0, curPX = 0, curPY = 0;
  if (finePointer && stage) {
    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      targetPX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      targetPY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });
    stage.addEventListener("pointerleave", function () { targetPX = 0; targetPY = 0; });
  }

  var gCards = track ? Array.prototype.slice.call(track.querySelectorAll(".g-card")) : [];
  function galleryCurve() {
    if (!track) return;
    var tr = track.getBoundingClientRect();
    var centre = tr.left + tr.width / 2;
    gCards.forEach(function (card) {
      var r = card.getBoundingClientRect();
      var d = (r.left + r.width / 2 - centre) / tr.width; /* -0.5 .. 0.5 */
      var rot = Math.max(-11, Math.min(11, d * -22));
      card.style.transform = "rotateY(" + rot.toFixed(2) + "deg)";
    });
  }
  if (track) track.addEventListener("scroll", function () {
    window.requestAnimationFrame(galleryCurve);
  }, { passive: true });

  var ticking = false;
  function frame() {
    curPX += (targetPX - curPX) * 0.06;
    curPY += (targetPY - curPY) * 0.06;
    var vh = window.innerHeight;

    layers.forEach(function (L) {
      var r = L.el.getBoundingClientRect();
      var prog = (r.top + r.height / 2 - vh / 2) / vh; /* -0.5..0.5 in view */
      var sy = Math.max(-46, Math.min(46, prog * -56 * L.depth * 4));
      var px = curPX * L.depth * 90;
      var py = curPY * L.depth * 60;
      var base = L.el.classList.contains("sheet-back") ? "rotate(2.5deg)" :
                 L.el.classList.contains("sheet-carta") ? "rotate(-3deg)" :
                 L.el.classList.contains("stamp") ? "rotate(-10deg)" :
                 L.el.classList.contains("hero-photo-card") ? "rotate(1.6deg)" : "";
      var tilt = "";
      if (L.el.classList.contains("hero-photo-card") && finePointer) {
        tilt = " rotateY(" + (curPX * 4).toFixed(2) + "deg) rotateX(" + (curPY * -4).toFixed(2) + "deg)";
      }
      L.el.style.transform = base + " translate3d(" + px.toFixed(1) + "px," + (sy + py).toFixed(1) + "px,0)" + tilt;
    });

    if (heroImg) {
      var hr = heroImg.getBoundingClientRect();
      var hp = Math.max(-1, Math.min(1, (hr.top + hr.height / 2 - vh / 2) / (vh / 2)));
      heroImg.style.transform = "scale(1.14) translateY(" + (hp * -12).toFixed(1) + "px)";
    }
    if (panImg) {
      var pr = panImg.getBoundingClientRect();
      var pp = Math.max(-1, Math.min(1, (pr.top + pr.height / 2 - vh / 2) / (vh / 2)));
      panImg.style.transform = "scale(1.14) translateY(" + (pp * -18).toFixed(1) + "px)";
    }
    ticking = false;
  }
  function requestFrame() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
  }
  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("resize", function () { requestFrame(); galleryCurve(); }, { passive: true });
  if (finePointer && stage) stage.addEventListener("pointermove", requestFrame);
  requestFrame();
  galleryCurve();
})();
