/* ============================================================
   SETTINGS — edit these two things before going live
   ============================================================ */
// WhatsApp number in international format, digits only (e.g. "60123456789").
var WHATSAPP_NUMBER = "60102107256";

// Email sign-in for the loan calculator's full schedule (Supabase project for the website).
// Paste the Project URL and the anon / publishable key from Supabase > Project Settings > API.
// While either is empty, the calculator stays fully open (no sign-in).
var SUPABASE_URL = "https://hwmbccnelkljrvaeajcx.supabase.co";
var SUPABASE_ANON_KEY = "sb_publishable_cPLjL811Xvp4AgBLFnsyVQ_fB32ggTH";
var SUPABASE_JS = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";

// Pre-filled WhatsApp messages for each button type.
var WA_MESSAGES = {
  en: {
    general: "Hi Bespoke Mortgage Advisory, I would like advice on home financing.",
    agent: "Hi Bespoke Mortgage Advisory, I am a property agent and would like to collaborate on my clients' home financing.",
    career: "Hi Bespoke Mortgage Advisory, I am interested in joining as a Mortgage Specialist."
  },
  ms: {
    general: "Hai Bespoke Mortgage Advisory, saya ingin mendapatkan nasihat tentang pembiayaan rumah.",
    agent: "Hai Bespoke Mortgage Advisory, saya ejen hartanah dan ingin bekerjasama untuk pembiayaan rumah pelanggan saya.",
    career: "Hai Bespoke Mortgage Advisory, saya berminat untuk menyertai sebagai Mortgage Specialist."
  }
};

/* ============================================================
   Bahasa Malaysia text (English lives in index.html)
   ============================================================ */
var MS = {
  "nav.services": "Perkhidmatan",
  "nav.process": "Cara ia berfungsi",
  "nav.agents": "Untuk Ejen Hartanah",
  "nav.careers": "Kerjaya",
  "nav.faq": "Soalan Lazim",
  "cta.talk": "Hubungi penasihat",
  "cta.whatsapp": "WhatsApp penasihat",
  "cta.agent": "Saya ejen hartanah",

  "ch.title": "Bagaimana kami boleh bantu anda hari ini?",
  "ch1.t": "Saya membeli atau membiaya semula",
  "ch1.d": "Nasihat untuk pembeli dan pemilik hartanah",
  "ch2.t": "Saya ejen hartanah",
  "ch2.d": "Biar kami uruskan pembiayaan pembeli anda",
  "ch3.t": "Saya ingin menyertai pasukan",
  "ch3.d": "Jadi seorang Mortgage Specialist",

  "nav.calc": "Kalkulator Pinjaman",
  "calc.eyebrow": "Kalkulator pinjaman",
  "calc.title": "Anggarkan ansuran bulanan anda",
  "calc.amount": "Jumlah pinjaman",
  "calc.rate": "Kadar faedah",
  "calc.peryear": "% setahun",
  "calc.term": "Tempoh pinjaman",
  "calc.years": "tahun",
  "calc.months": "bulan",
  "calc.extra": "Bayaran tambahan sebulan",
  "calc.optional": "(pilihan)",
  "calc.error": "Sila semak angka: kadar faedah sehingga 30% dan tempoh pinjaman sehingga 50 tahun.",
  "calc.reset": "Set semula",
  "calc.monthly": "Ansuran bulanan",
  "calc.withextra": "Dengan bayaran tambahan:",
  "calc.total": "Jumlah bayaran",
  "calc.interest": "Jumlah faedah",
  "calc.annual": "Bayaran tahunan",
  "calc.constant": "Pemalar gadai janji",
  "calc.payoff": "Selesai dalam",
  "calc.saved": "Penjimatan faedah",
  "calc.discuss": "Bincang dengan penasihat",
  "calc.print": "Cetak / Simpan PDF",
  "calc.schedule": "Jadual pelunasan",
  "calc.monthlyview": "Bulanan",
  "calc.yearlyview": "Tahunan",
  "calc.no": "No",
  "calc.payment": "Bayaran",
  "calc.th.interest": "Faedah",
  "calc.principal": "Prinsipal",
  "calc.balance": "Baki",
  "calc.note": "Kalkulator ini memberi anggaran sahaja, berdasarkan kadar tetap sepanjang tempoh. Ansuran sebenar bergantung pada pakej bank, perubahan kadar dan caj. Hubungi kami untuk angka berdasarkan keadaan anda.",

  "gate.title": "Lihat jadual penuh",
  "gate.lead": "Masukkan e-mel anda untuk membuka jadual pelunasan penuh, Cetak / Simpan PDF dan susulan penasihat. Kali pertama? Kami akan e-melkan kod sekali guna. Sudah berdaftar? Ia terus dibuka.",
  "gate.send": "Teruskan",
  "gate.sent": "Selamat datang! Untuk mengesahkan e-mel anda, kami telah menghantar kod ke",
  "gate.verify": "Sahkan",
  "gate.change": "Guna e-mel lain",
  "gate.legal": "Dengan meneruskan, anda bersetuju bahawa Bespoke Mortgage Advisory boleh menyimpan e-mel anda dan menghubungi anda tentang pembiayaan rumah. Kami tidak berkongsinya dengan pihak lain.",
  "gate.signedin": "Log masuk sebagai",
  "gate.signout": "Log keluar",

  "cta.calc": "Kira ansuran saya",
  "ch4.t": "Anggar ansuran saya",
  "ch4.d": "Kalkulator pinjaman percuma dengan jadual penuh",
  "ag.share": "Kongsi kalkulator dengan pembeli",
  "ag.sharenote": "Hantar kalkulator pinjaman percuma kami kepada pembeli anda. Mereka terus nampak ansuran bulanan, dan kami uruskan susulan pembiayaan.",

  "hero.eyebrow": "Khidmat nasihat pembiayaan rumah · Malaysia",
  "hero.title": "Bank yang tepat.<br>Pinjaman yang tepat.<br><span class=\"gold\">Sesuai untuk anda.</span>",
  "hero.lead": "Kami membantu pembeli dan pemilik hartanah di Malaysia memilih pembiayaan rumah yang tepat. Kami membandingkan pakej daripada pelbagai bank, menerangkan terma dalam bahasa yang mudah, dan membimbing anda dari permohonan hingga kelulusan, supaya anda meminjam dengan yakin.",
  "hero.note": "Kami memberi nasihat. Kami bukan bank dan tidak menyediakan pembiayaan.",

  "card.title": "Perbandingan pembiayaan anda",
  "card.sample": "Ilustrasi",
  "card.pkg": "Pakej",
  "card.best": "Paling sesuai",
  "card.l1": "Kadar &amp; ansuran bulanan",
  "card.l2": "Tempoh kunci &amp; fleksibiliti",
  "card.l3": "Kesesuaian dengan profil anda",

  "p1.t": "Dibandingkan merentas bank",
  "p1.d": "Anda melihat perbezaan pakej secara bersebelahan, bukan tawaran satu bank sahaja.",
  "p2.t": "Diterangkan dengan bahasa mudah",
  "p2.d": "Kadar, tempoh kunci, caj dan terma halus dijelaskan sebelum anda menandatangani.",
  "p3.t": "Dibimbing hingga kelulusan",
  "p3.d": "Seorang penasihat bersama anda dari dokumen pertama hingga surat tawaran.",

  "svc.eyebrow": "Apa yang kami lakukan",
  "svc.title": "Nasihat yang disesuaikan dengan keadaan anda",
  "svc1.t": "Membeli rumah",
  "svc1.d": "Rumah pertama atau seterusnya, siap dibina atau dalam pembinaan. Kami padankan pembelian anda dengan pembiayaan yang sesuai dengan pendapatan dan perancangan anda.",
  "svc2.t": "Pembiayaan semula",
  "svc2.d": "Semak pinjaman sedia ada dan lihat sama ada berpindah ke pakej atau bank lain berbaloi untuk anda, dengan kos dinyatakan secara jujur.",
  "svc3.t": "Penilaian kelayakan",
  "svc3.d": "Ketahui kedudukan anda sebelum membuat komitmen. Kami menilai pendapatan, komitmen dan profil kredit anda seperti cara bank menilainya.",
  "svc4.t": "Bimbingan permohonan",
  "svc4.d": "Kami bantu anda menyediakan dokumen, menghantar permohonan dengan betul, dan membuat susulan dengan bank sehingga anda mendapat jawapan.",

  "proc.eyebrow": "Cara ia berfungsi",
  "proc.title": "Empat langkah, seorang penasihat",
  "st1.t": "Berbincang dengan kami",
  "st1.d": "Ceritakan tentang hartanah, pendapatan dan perkara yang penting bagi anda.",
  "st2.t": "Kami menilai",
  "st2.d": "Kami menyemak kelayakan anda dan mengenal pasti perkara yang perlu dibaiki sebelum memohon.",
  "st3.t": "Kami membandingkan",
  "st3.d": "Anda menerima perbandingan jelas pakej bank yang sesuai, bersama cadangan kami.",
  "st4.t": "Kami bimbing hingga kelulusan",
  "st4.d": "Kami menyokong permohonan anda dan memaklumkan perkembangan sehingga bank membuat keputusan.",

  "ag.eyebrow": "Untuk ejen &amp; perunding hartanah",
  "ag.title": "Anda tutup jualan. Kami uruskan pembiayaan pembeli anda.",
  "ag.lead": "Jadikan kami rakan pembiayaan anda. Kami menguruskan perjalanan pinjaman pembeli rumah anda dari semakan kelayakan hingga kelulusan, dan sentiasa memaklumkan anda, supaya anda boleh fokus pada penyenaraian anda.",
  "ag.cta": "Bekerjasama dengan kami",
  "ag1.t": "Pembeli dinilai lebih awal",
  "ag1.d": "Kami menyemak kelayakan pelanggan anda dari awal, supaya kurang urus niaga yang gagal di peringkat pinjaman.",
  "ag2.t": "Satu pusat perhubungan",
  "ag2.d": "Rujuk pelanggan anda sekali sahaja. Kami berurusan dengan bank dan dokumen.",
  "ag3.t": "Kemas kini status untuk anda",
  "ag3.d": "Anda tahu kedudukan setiap kes tanpa perlu bertanya ke sana sini.",
  "ag4.t": "Pelanggan anda dilayan sewajarnya",
  "ag4.d": "Nasihat yang jelas dan profesional, yang turut menjaga nama baik anda.",

  "cr.eyebrow": "Kerjaya",
  "cr.title": "Sertai kami sebagai Mortgage Specialist",
  "cr.lead": "Kami mencari individu yang gemar membantu orang lain membuat salah satu keputusan kewangan terbesar dalam hidup mereka. Jika anda amanah, mesra dengan orang ramai dan selesa dengan angka, kami ingin mendengar daripada anda.",
  "cr.b1": "Menasihati pembeli dan pemilik hartanah tentang pilihan pembiayaan mereka",
  "cr.b2": "Bekerjasama dengan ejen hartanah dan bank bagi setiap kes",
  "cr.b3": "Pengalaman perbankan, hartanah atau jualan dialu-alukan, tetapi tidak diwajibkan",
  "cr.box.t": "Berminat?",
  "cr.box.d": "Hantar pengenalan ringkas melalui WhatsApp dan kami akan menghubungi anda.",
  "cr.cta": "Mohon sebagai Mortgage Specialist",

  "faq.eyebrow": "Soalan",
  "faq.title": "Perkara yang perlu diketahui",
  "q1.q": "Adakah anda bank atau pemberi pinjaman?",
  "q1.a": "Tidak. Bespoke Mortgage Advisory ialah perkhidmatan nasihat. Kami tidak menyediakan pembiayaan. Pinjaman ditawarkan dan diluluskan oleh bank yang anda pilih.",
  "q2.q": "Siapa yang anda bantu?",
  "q2.a": "Pembeli dan pemilik hartanah di Malaysia, sama ada anda membeli rumah pertama, menaik taraf, atau menyemak pinjaman sedia ada.",
  "q3.q": "Bolehkah anda menjamin pinjaman saya diluluskan?",
  "q3.a": "Tiada sesiapa yang boleh menjaminnya secara jujur. Kelulusan ialah keputusan bank. Apa yang kami lakukan ialah menilai kedudukan anda dengan teliti terlebih dahulu dan membantu anda menghantar permohonan yang lengkap.",
  "q4.q": "Saya ejen hartanah. Bagaimana cara merujuk pelanggan?",
  "q4.a": "Hubungi kami melalui WhatsApp menggunakan butang \"Bekerjasama dengan kami\". Kami akan terangkan cara kami bekerjasama dan teruskan dari situ.",

  "ct.title": "Mari cari yang paling sesuai untuk anda",
  "ct.lead": "Ceritakan sedikit tentang perancangan anda dan penasihat kami akan membalas melalui WhatsApp.",
  "ct.office": "Pejabat",
  "ct.email": "E-mel",
  "ct.agent": "Pertanyaan ejen hartanah",
  "ct.career": "Permohonan Mortgage Specialist",

  "ft.tag": "Bank yang tepat. Pinjaman yang tepat. Sesuai untuk anda.",
  "ft.legal": "Bespoke Mortgage Advisory ialah perkhidmatan BESPOKE SYNERGY (M) SDN. BHD. 202501059610 (1661016-D). Kami ialah perkhidmatan nasihat, bukan bank atau pemberi pinjaman. Semua pembiayaan tertakluk kepada kelulusan, terma dan syarat bank yang berkenaan."
};

(function () {
  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (n) {
    var k = n.getAttribute("data-i18n");
    if (!(k in EN)) EN[k] = n.innerHTML;
  });

  var lang = "en";
  try { lang = localStorage.getItem("bma-lang") || "en"; } catch (e) {}

  function setWaLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      if (!WHATSAPP_NUMBER) return; // falls back to #contact until a number is set
      var msg = WA_MESSAGES[lang][a.getAttribute("data-wa")] || WA_MESSAGES[lang].general;
      a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  function apply(l) {
    lang = l === "ms" ? "ms" : "en";
    var dict = lang === "ms" ? MS : EN;
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      n.innerHTML = dict[k] != null ? dict[k] : EN[k];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    setWaLinks();
    try { localStorage.setItem("bma-lang", lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("bma:lang", { detail: lang }));
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  apply(lang);
})();

/* ============================================================
   Loan calculator + amortisation schedule
   ============================================================ */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var form = $("calcForm");
  if (!form) return;
  var FIELDS = ["cAmount", "cRate", "cYears", "cMonths", "cExtra"];
  var view = "month";
  var last = null;
  var locked = false;
  var PREVIEW_ROWS = 5;

  function lang() { return document.documentElement.lang === "ms" ? "ms" : "en"; }
  function num(v) { var n = parseFloat(String(v).replace(/[^0-9.]/g, "")); return isFinite(n) ? n : 0; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function fmt(x) { return x.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function fmtAmount(input) {
    var raw = input.value.replace(/[^0-9.]/g, "");
    if (!raw) { input.value = ""; return; }
    var parts = raw.split(".");
    var whole = parts[0].replace(/^0+(?=\d)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    input.value = parts.length > 1 ? whole + "." + parts.slice(1).join("").slice(0, 2) : whole;
  }

  // Monthly instalment is rounded to the sen; each row's interest is rounded,
  // and the last instalment absorbs the rounding so the balance ends at zero.
  function schedule(P, ratePct, n, extra) {
    var r = ratePct / 1200;
    var pmt = r2(r === 0 ? P / n : P * r / (1 - Math.pow(1 + r, -n)));
    var b = P, rows = [], ti = 0, tp = 0;
    for (var i = 1; i <= n && b > 0.004; i++) {
      var interest = r2(b * r);
      var pay = pmt + extra;
      var prin = r2(pay - interest);
      if (prin >= b || i === n) { prin = b; pay = r2(prin + interest); }
      b = r2(b - prin);
      ti += interest; tp += pay;
      rows.push([i, pay, interest, prin, b]);
    }
    return { pmt: pmt, rows: rows, interest: r2(ti), total: r2(tp) };
  }

  function duration(m) {
    var y = Math.floor(m / 12), mo = m % 12, ms = lang() === "ms";
    var out = [];
    if (y) out.push(y + (ms ? " tahun" : (y === 1 ? " year" : " years")));
    if (mo) out.push(mo + (ms ? " bulan" : (mo === 1 ? " month" : " months")));
    return out.join(" ");
  }

  function calc() {
    var P = num($("cAmount").value), rate = num($("cRate").value);
    var n = Math.round(num($("cYears").value) * 12 + num($("cMonths").value));
    var extra = num($("cExtra").value);
    // Out-of-range figures get a message; empty or unfinished fields just show "–".
    var outOfRange = rate > 30 || n > 600;
    var complete = P > 0 && $("cRate").value.trim() !== "" && n > 0;
    $("calcError").hidden = !outOfRange;
    if (outOfRange || !complete) { last = null; render(); return; }
    var base = schedule(P, rate, n, 0);
    var res = extra > 0 ? schedule(P, rate, n, extra) : base;
    last = { P: P, rate: rate, n: n, extra: extra, base: base, res: res };
    render();
  }

  function setText(id, t) { $(id).textContent = t; }

  function render() {
    if (!last) {
      ["rMonthly", "rTotal", "rInterest", "rAnnual", "rConstant"].forEach(function (id) { setText(id, "–"); });
      $("rExtraNote").hidden = $("rSavingRow").hidden = $("rSavedRow").hidden = true;
      $("amortBody").innerHTML = "";
      return;
    }
    var L = last, monthlyPay = L.base.pmt + L.extra;
    setText("rMonthly", fmt(L.base.pmt));
    setText("rTotal", fmt(L.res.total));
    setText("rInterest", fmt(L.res.interest));
    setText("rAnnual", fmt(r2(monthlyPay * 12)));
    setText("rConstant", (monthlyPay * 12 / L.P * 100).toFixed(2));
    var hasExtra = L.extra > 0;
    $("rExtraNote").hidden = $("rSavingRow").hidden = $("rSavedRow").hidden = !hasExtra;
    if (hasExtra) {
      setText("rMonthlyExtra", fmt(r2(monthlyPay)));
      setText("rPayoff", duration(L.res.rows.length));
      setText("rSaved", fmt(r2(L.base.interest - L.res.interest)));
    }
    renderTable();
    updateWa();
  }

  function renderTable() {
    var rows = last ? last.res.rows : [], html = [];
    var ms = lang() === "ms";
    if (locked) rows = rows.slice(0, view === "year" ? PREVIEW_ROWS * 12 : PREVIEW_ROWS);
    $("thNo").textContent = view === "year" ? (ms ? "Tahun" : "Year") : "No";
    if (view === "month") {
      rows.forEach(function (r) {
        html.push("<tr><td>" + r[0] + "</td><td>" + fmt(r[1]) + "</td><td>" + fmt(r[2]) + "</td><td>" + fmt(r[3]) + "</td><td>" + fmt(r[4]) + "</td></tr>");
      });
    } else {
      for (var i = 0; i < rows.length; i += 12) {
        var chunk = rows.slice(i, i + 12), pay = 0, intr = 0, prin = 0;
        chunk.forEach(function (r) { pay += r[1]; intr += r[2]; prin += r[3]; });
        html.push("<tr><td>" + (i / 12 + 1) + "</td><td>" + fmt(r2(pay)) + "</td><td>" + fmt(r2(intr)) + "</td><td>" + fmt(r2(prin)) + "</td><td>" + fmt(chunk[chunk.length - 1][4]) + "</td></tr>");
      }
    }
    $("amortBody").innerHTML = html.join("");
  }

  function updateWa() {
    var a = $("calcWa");
    if (locked) { a.href = "#gate"; a.removeAttribute("target"); return; }
    if (!last || typeof WHATSAPP_NUMBER === "undefined" || !WHATSAPP_NUMBER) return;
    var L = last, ms = lang() === "ms";
    var term = duration(L.n);
    var msg = ms
      ? "Hai Bespoke Mortgage Advisory, saya telah guna kalkulator pinjaman anda: pinjaman RM" + fmt(L.P) + ", kadar " + L.rate + "% untuk " + term + ", ansuran bulanan RM" + fmt(L.base.pmt) + ". Saya ingin mendapatkan nasihat."
      : "Hi Bespoke Mortgage Advisory, I used your loan calculator: loan RM" + fmt(L.P) + " at " + L.rate + "% for " + term + ", monthly instalment RM" + fmt(L.base.pmt) + ". I would like some advice.";
    a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
    a.target = "_blank"; a.rel = "noopener";
  }

  form.addEventListener("input", function (e) {
    if (e.target.id === "cAmount" || e.target.id === "cExtra") fmtAmount(e.target);
    calc();
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); calc(); });
  $("calcReset").addEventListener("click", function () {
    FIELDS.forEach(function (id) { $(id).value = ""; });
    calc();
    $("cAmount").focus();
  });
  document.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      view = b.getAttribute("data-view");
      document.querySelectorAll(".seg button").forEach(function (x) { x.classList.toggle("is-active", x === b); });
      renderTable();
      $("amortScroll").scrollTop = 0;
    });
  });
  function toGate(e) {
    if (!locked) return false;
    if (e) e.preventDefault();
    var g = $("gate");
    g.scrollIntoView({ behavior: "smooth", block: "center" });
    var input = $("gateCodeForm").hidden ? $("gateEmail") : $("gateCode");
    setTimeout(function () { input.focus({ preventScroll: true }); }, 400);
    return true;
  }
  $("calcWa").addEventListener("click", toGate);
  $("calcPrint").addEventListener("click", function (e) {
    if (toGate(e)) return;
    document.documentElement.classList.add("print-calc");
    window.print();
  });
  window.addEventListener("afterprint", function () { document.documentElement.classList.remove("print-calc"); });
  document.addEventListener("bma:lang", function () { if (last) render(); else renderTable(); });

  // Called by the email sign-in below.
  window.bmaSetLocked = function (v) {
    locked = !!v;
    document.querySelector(".amort").classList.toggle("is-locked", locked);
    $("gate").hidden = !locked;
    renderTable();
    updateWa();
  };

  calc();
})();

/* ============================================================
   Email sign-in for the full amortisation schedule
   (Supabase email code: same step for new and returning visitors)
   ============================================================ */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  if (!$("gate") || !window.bmaSetLocked) return;

  // Not set up yet: keep the calculator fully open.
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) { window.bmaSetLocked(false); return; }

  var MSG = {
    en: {
      email: "Please enter a valid email address.",
      shortcode: "Please enter the code from the email.",
      badcode: "That code is wrong or has expired. Check the email, or use a different email to get a new code.",
      rate: "Too many attempts. Please wait a minute and try again.",
      generic: "Something went wrong. Please try again."
    },
    ms: {
      email: "Sila masukkan alamat e-mel yang sah.",
      shortcode: "Sila masukkan kod daripada e-mel.",
      badcode: "Kod itu salah atau telah tamat tempoh. Semak e-mel anda, atau guna e-mel lain untuk mendapatkan kod baharu.",
      rate: "Terlalu banyak cubaan. Sila tunggu seminit dan cuba lagi.",
      generic: "Ada masalah. Sila cuba lagi."
    }
  };

  var STORE_KEY = "bma-calc-email";
  var client = null, email = "", msgKey = "";
  function remembered() { try { return localStorage.getItem(STORE_KEY) || ""; } catch (e) { return ""; } }
  function remember(v) { try { if (v) localStorage.setItem(STORE_KEY, v); else localStorage.removeItem(STORE_KEY); } catch (e) {} }

  // Signed in before on this device: open straight away, no network needed.
  if (remembered()) {
    $("gateUserEmail").textContent = remembered();
    $("gateUser").hidden = false;
    window.bmaSetLocked(false);
  } else {
    window.bmaSetLocked(true);
  }

  function lang() { return document.documentElement.lang === "ms" ? "ms" : "en"; }
  function msg(key) { msgKey = key || ""; $("gateMsg").textContent = msgKey ? MSG[lang()][msgKey] : ""; }
  function busy(btn, on) { btn.disabled = on; btn.classList.toggle("is-busy", on); }
  function errKey(err) {
    var st = err && err.status, m = String(err && err.message || "").toLowerCase();
    if (st === 429 || m.indexOf("rate") >= 0 || m.indexOf("security purposes") >= 0) return "rate";
    if (m.indexOf("expired") >= 0 || m.indexOf("invalid") >= 0 || m.indexOf("token") >= 0 || m.indexOf("otp") >= 0) return "badcode";
    return "generic";
  }

  // Supabase unreachable (paused, outage, blocked network): status 0 / missing or a 5xx.
  function serviceDown(status) { return !status || status >= 500; }
  // Never trap visitors behind a broken sign-in: open the table without remembering anything,
  // so the next visit tries the normal sign-in again.
  function openAnyway() { msg(""); $("gateUser").hidden = true; window.bmaSetLocked(false); }

  function stepEmail() {
    $("gateEmailForm").hidden = false; $("gateCodeForm").hidden = true;
    $("gateCode").value = ""; msg("");
  }
  function stepCode() {
    $("gateSentTo").textContent = email;
    $("gateEmailForm").hidden = true; $("gateCodeForm").hidden = false;
    msg(""); $("gateCode").focus();
  }
  function signedIn(addr) {
    remember(addr);
    $("gateUserEmail").textContent = addr;
    $("gateUser").hidden = false;
    window.bmaSetLocked(false);
  }
  function signedOut() {
    remember("");
    $("gateUser").hidden = true;
    window.bmaSetLocked(true);
    stepEmail();
  }

  $("gateEmailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!client) return;
    email = $("gateEmail").value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg("email"); return; }
    busy($("gateSend"), true); msg("");
    // Registered (verified before)? Open straight away. Otherwise email a one-time code.
    client.rpc("calc_returning_signin", { p_email: email }).then(function (r) {
      if (!r.error && r.data === true) { busy($("gateSend"), false); signedIn(email); return; }
      if (r.error && serviceDown(r.status)) { busy($("gateSend"), false); openAnyway(); return; }
      client.auth.signInWithOtp({ email: email, options: { shouldCreateUser: true } }).then(function (r2) {
        busy($("gateSend"), false);
        if (r2.error && serviceDown(r2.error.status)) { openAnyway(); return; }
        if (r2.error) msg(errKey(r2.error)); else stepCode();
      });
    });
  });

  $("gateCodeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!client) return;
    var code = $("gateCode").value.replace(/\D/g, "");
    if (code.length < 6) { msg("shortcode"); return; }
    busy($("gateVerify"), true); msg("");
    client.auth.verifyOtp({ email: email, token: code, type: "email" }).then(function (r) {
      busy($("gateVerify"), false);
      if (r.error) { msg(errKey(r.error)); return; }
      signedIn(email);
    });
  });

  $("gateBack").addEventListener("click", function () { stepEmail(); $("gateEmail").focus(); });
  $("gateSignOut").addEventListener("click", function () {
    if (client) client.auth.signOut().then(signedOut); else signedOut();
  });
  document.addEventListener("bma:lang", function () { msg(msgKey); });

  function init() {
    if (!window.supabase || !window.supabase.createClient) { window.bmaSetLocked(false); return; }
    // The browser keeps no Supabase login; "signed in" is the remembered email on this device.
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    });
  }

  // Load the Supabase library only when sign-in is set up.
  // If it cannot load (blocked network), leave the calculator open rather than trap visitors.
  var tag = document.createElement("script");
  tag.src = SUPABASE_JS;
  tag.onload = init;
  tag.onerror = function () { window.bmaSetLocked(false); };
  document.head.appendChild(tag);
})();

/* ============================================================
   "Share calculator with buyers" (property agents)
   Phones: the phone's share sheet. Computers: WhatsApp with the message ready.
   ============================================================ */
(function () {
  var btn = document.getElementById("shareCalc");
  if (!btn) return;
  var URL_ = "https://www.bespokemortgageadvisory.my/#calculator";
  var TEXT = {
    en: "Check your monthly home loan instalment with Bespoke Mortgage Advisory's free loan calculator:",
    ms: "Semak ansuran bulanan pinjaman rumah anda dengan kalkulator pinjaman percuma Bespoke Mortgage Advisory:"
  };
  function text() { return TEXT[document.documentElement.lang === "ms" ? "ms" : "en"]; }
  function waHref() { return "https://wa.me/?text=" + encodeURIComponent(text() + " " + URL_); }
  function sync() { btn.href = waHref(); btn.target = "_blank"; btn.rel = "noopener"; }
  sync();
  document.addEventListener("bma:lang", sync);
  btn.addEventListener("click", function (e) {
    var touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (touch && navigator.share) {
      e.preventDefault();
      navigator.share({ title: "Bespoke Mortgage Advisory", text: text(), url: URL_ }).catch(function () {});
    }
  });
})();
