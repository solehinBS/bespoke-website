/* ============================================================
   SETTINGS — edit these two things before going live
   ============================================================ */
// WhatsApp number in international format, digits only (e.g. "60123456789").
var WHATSAPP_NUMBER = "60102107256";

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
