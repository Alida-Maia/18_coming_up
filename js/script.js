/* ============================================
   mica mea listă de dorințe — app logic
   ============================================ */

const ICONS = {
  gift: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>`,
  heartSm: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>`,
  heartOutline: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  arrowRightSm: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  userRound: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  userRoundSm: `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  imagePlus: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>`,
  camera: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>`,
  bookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>`,
};

/* ---------- shared "chapter" cards shown inside every wishlist ---------- */

const BOOKS_CARD = {
    key: "books",
    wide: true,
    clickable: true,
    chapter: "books",
    image: "assets/books-chapter.jpeg",
    category: "o lume cu totul nouă",
    title: "Cărți",
    description:
        "Povești în care mă pot pierde, cu o pătură aproape și liniștea pe care tu ai făcut mereu loc să o găsesc.",
};

const LIP_CARD = {
    key: "Lip_stick",
    wide: true,
    clickable: false,
    chapter: "Lip_stick",
    image: "assets/Lip_stick.jpg",
    category: "Elegant și dulce",
    title: "Clinique black honey lipstick",
    description:
        "Nuanța perfectă pentru toamnă și iarnă — exact culoarea care-mi lipsește din trusa de machiaj.",
};

const NALA_CARD = {
    key: "NALA",
    wide: true,
    clickable: false,
    chapter: "NALA",
    image: "assets/nala.jpg",
    category: "Cafinated and me time",
    title: "Set cadou NALA",
    description:
        "Un moment de răsfăț acasă, cu miros de cafea  exact ritualul de self care pe care mi-l doresc de ziua mea.",
};

const NALA2_CARD = {
    key: "NALA2",
    wide: true,
    clickable: false,
    chapter: "NALA2",
    image: "assets/nala2.jpg",
    category: "Cafinated and me time",
    title: "Set cadou NALA",
    description:
        "Un moment de răsfăț acasă, cu miros de cafea  exact ritualul de self care pe care mi-l doresc de ziua mea.",
};

const NALA3_CARD = {
    key: "NALA3",
    wide: true,
    clickable: false,
    chapter: "NALA3",
    image: "assets/nala3.jpg",
    category: "Cafinated and me time",
    title: "Set cadou NALA",
    description:
        "Un moment de răsfăț acasă, cu miros de cafea  exact ritualul de self care pe care mi-l doresc de ziua mea.",
};

const JOSEON_CARD = {
    key: "JOSEON",
    wide: true,
    clickable: false,
    chapter: "JOSEON",
    image: "assets/joseon.jpg",
    category: "Glass skin",
    title: "Set îngrijire Beauty of Joseon",
    description:
        "Rutina coreeană despre care tot citesc — vreau să continui cu masca de față orez , cleanser ulei SPF50",
};

const CLOTHES_CARD = {
    key: "clothes",
    wide: true,
    clickable: true,
    chapter: "clothes",
    image: "assets/clothes-chapter.jpeg",
    category: "puțină magie în garderobă",
    title: "Haine",
    description:
        "Piese pe care le-am salvat și le-am combinat în minte — pentru că împlinirea vârstei de optsprezece ani merită câteva capitole noi și în garderobă.",
};

/* ---------- chapter detail-page data ---------- */

const CHAPTERS = {
  books: {
    titleHtml: "Book <br><em>Wishlist</em>",
    introTemplate:
      "Aceasta este partea liniștită și minunată a listei: poveștile pe care le poartă în inimă și cele pe care abia așteaptă să le înceapă.",
    note:
      "Cărțile sunt felul meu de a face loc unei lumi noi în fiecare zi. Mulțumesc că îmi oferi un loc nou în care să mă plimb.",
    gridClass: "books-grid",
    items: [
      {
        key: "her-soul",
        image: "assets/books-chapter.jpeg",
        alt: "Her Soul for Revenge",
        title: "Her Soul for Revenge",
        meta: "Harley Laroux",
        note: "Povestea aceea intensă despre care voi vorbi mult timp după ultima pagină.",
      },
      {
        key: "soul-witch",
        image: "assets/soul-of-a-witch.jpeg",
        alt: "Soul of a Witch",
        title: "Soul of a Witch",
        meta: "Harley Laroux",
        note: "Pentru puțină magie, puțin haos și o după-amiază în care să mă pierd cu drag.",
      },
      {
        key: "rebel-blue",
        image: "assets/rebel-blue-ranch.jpeg",
        alt: "Rebel Blue Ranch series",
        title: "Rebel Blue Ranch series",
        meta: "Lyla Sage",
        note: "O evadare caldă, într-o lume de la fermă — mi-ar plăcea să am toată seria.",
      },
      {
        key: "kingsmaker-2",
        image: "assets/kingmakers-2.jpeg",
        alt: "The Kingsmaker series · cartea 2",
        title: "The Kingsmaker series · cartea 2",
        meta: "Sophie Lark",
        note: "Cartea a doua, pentru că începutul poveștii nu poate rămâne singur.",
      },
      {
        key: "kingsmaker-3",
        image: "assets/kingmakers-3.jpeg",
        alt: "The Kingsmaker series · cartea 3",
        title: "The Kingsmaker series · cartea 3",
        meta: "Sophie Lark",
        note: "Următoarea ușă din povestea în care sunt deja complet prinsă.",
      },
      {
        key: "kingsmaker-4",
        image: "assets/kingmakers-4.jpeg",
        alt: "The Kingsmaker series · cartea 4",
        title: "The Kingsmaker series · cartea 4",
        meta: "Sophie Lark",
        note: "Finalul care își așteaptă cu răbdare locul pe raftul meu.",
      },
    ],
  },
  clothes: {
    titleHtml: "Piesele<br><em>la care visează.</em>",
    introTemplate:
      "Acestea sunt piesele pe care și le imaginează în ținute. Puțină bucurie în garderobă pentru fata care pășește atât de frumos spre 18 ani.",
    note:
      "Hainele nu sunt doar haine — sunt mici invitații să mă simt încrezătoare, confortabilă și complet eu.",
    gridClass: "clothes-grid",
            items: [
            {
                key: "trench",
                image: "assets/clothes-chapter.jpeg",
                alt: "Geacă trenci guler pâlnie",
                title: "Geacă trenci guler pâlnie",
                meta: "Bershka · cod 2105/741/800  Marime: XXS",
                note: "O geacă pe care o voi purta ani întregi — exact cea pe care mi-o imaginez în zilele reci.",
            },
            {
                key: "jeans",
                image: "assets/bershka-jeans.jpeg",
                alt: "Blugi evazați cu talie joasă și broderie",
                title: "Blugi evazați cu talie joasă și broderie",
                meta: "Bershka · cod 1042/335/433   Marime: 36",
                note: "Perechea perfectă pentru ținute care merită propriul lor moment de personaj principal.",
            },
            {
                key: "fluffy-jacket",
                image: "assets/fluffy-jacket.jpeg",
                alt: "Geacă blăniță care nu năpârlește",
                title: "Geacă blăniță care nu năpârlește",
                meta: "alb murdar",
                note: "Moale, călduroasă și exact geaca la care vreau să apelez toată iarna.",
            },
            {
                key: "cardigan-albastru",
                image: "assets/cardigan_albastru.jpg",
                alt: "Set de 2 piese cu cardigan și top albastru",
                title: "Set de 2 piese cu cardigan și top albastru",
                meta: "H&M · cod 1350492001  Marime: XS",
                note: "",
            },
            {
                key: "cardigan-gri-deschis",
                image: "assets/cardigan_gri_deschis.jpg",
                alt: "Set de 2 piese cu cardigan și top gri deschis",
                title: "Set de 2 piese cu cardigan și top gri deschis",
                meta: "H&M · cod 1350492001  Marime: XS",
                note: "",
            },
            {
                key: "bluza_neagra",
                image: "assets/bluza_neagra.jpg",
                alt: "Bluză tricotată reiat cu borduri de dantelă",
                title: "Bluză tricotată reiat cu borduri de dantelă",
                meta: "H&M · cod 1367088001  Marime: XS",
                note: "",
            },
        ],
    },
};

/* ---------- per-person wishlist data ---------- */

const PEOPLE = {
    mom: {
        id: "mom",
        displayName: "Mama",
        kicker: "PENTRU CEA CARE ȘTIE MEREU",
        titleHtml: "Wishlist<br><em>pentru Mama.</em>",
        intro:
            "Ai ajuns în locul meu mic de dorințe. Mulțumesc că faci fiecare an să se simtă ca acasă.",
        cards: [
            {
                key: "kobo",
                featured: true,
                image: "assets/kobo-ereader.jpeg",
                category: "pentru dimineți liniștite",
                title: "E-reader Kobo",
                description:
                    "Pentru fiecare călătorie cu trenul, colț însorit și seară cu „încă un singur capitol”. O inimă curioasă este un lucru frumos.",
            },
            {
                key: "ipad-case",
                image: "assets/ipad-case.jpeg",
                category: "neagră sau roz deschis",
                title: "Husă iPad cu tastatură",
                description:
                    "Un companion frumos pentru toate notițele și planurile mele — un mic ajutor ca drumul spre maturitate să se simtă al meu.",
            },
            {
                key: "alfaparf",
                image: "assets/alfaparf-set.jpeg",
                category: "keratină · ulei · protecție termică",
                title: "Set Alfaparf pentru păr și îngrijire",
                description:
                    "Un ritual de îngrijire cu keratină, ulei și spray protector de căldură. Pentru zile cu păr moale și un reminder să am grijă de mine.",
            },
            BOOKS_CARD,
            CLOTHES_CARD,
            LIP_CARD,
            NALA_CARD,
            JOSEON_CARD,
        ],
    },
    dad: {
        id: "dad",
        displayName: "Tata",
        kicker: "PENTRU CEL CARE MĂ ȚINE ÎN SIGURANȚĂ",
        titleHtml: "Wishlist<br><em>pentru Tata.</em>",
        intro:
            "Ai fost mereu locul meu sigur. Mulțumesc că ai fost lângă mine la fiecare pas și că mă ajuți să cresc cu încredere.",
        cards: [
            {
                key: "manta-ray",
                featured: true,
                image: "assets/manta-ray-charm.jpeg",
                category: "un mic prieten din ocean",
                title: "Charm Pandora cu manta albastră",
                description:
                    "Un mic reminder albastru să port cu mine frumusețe și puțină magie — exact așa cum m-ai încurajat mereu.",
            },
            {
                key: "gym",
                image: "assets/gym-membership.jpeg",
                category: "pentru a mă simți bine",
                title: "Abonament la sală",
                description:
                    "Cadoul care transformă „ar trebui să merg” într-o rutină de care chiar să mă bucur. Mulțumesc că mă încurajezi în fiecare versiune a mea.",
            },
            BOOKS_CARD,
            CLOTHES_CARD,
            
            NALA3_CARD,

        ],
    },
    soulmate: {
        id: "soulmate",
        displayName: "Soulmate",
        kicker: "PENTRU OMUL CARE MĂ VEDE",
        titleHtml: "Wishlist<br><em>pentru Soulmate.</em>",
        intro:
            "Tu ai primit acces la camera secretă. Aici sunt lucrurile care m-ar face să zâmbesc și să mă gândesc imediat la tine.",
        cards: [
            {
                key: "stitch",
                featured: true,
                image: "assets/stitch-charm.jpeg",
                category: "o mică parte din noi",
                title: "Charm Pandora Stitch cu trandafir",
                description:
                    "Un Stitch dulce cu un trandafir — jucăuș, sentimental și imposibil să nu zâmbești când îl vezi. O amintire mică pentru o iubire atât de mare.",
            },
            {
                key: "jellycat",
                image: "assets/jellycat-bunny.jpeg",
                category: "moale, amuzant, perfect",
                title: "Iepuraș Jellycat cu tort de ziua mea",
                description:
                    "Un iepuraș cu tort pe care să-l păstrez pentru totdeauna, pentru că cele mai frumoase amintiri sunt puțin caraghioase — exact ca momentele noastre preferate.",
            },
            BOOKS_CARD,
            CLOTHES_CARD,

        ],
    },
    friend: {
        id: "friend",
        displayName: "Friend",
        kicker: "PENTRU CINEVA CARE CONTEAZĂ",
        titleHtml: "Wishlist<br><em>pentru Friend.</em>",
        intro:
            "Nu am pus lucruri la întâmplare. Am pus mici idei care mi-ar face ziua mai luminoasă și timp petrecut frumos împreună.",
        friendLayout: true,
        cards: [
            {
                key: "outing",
                featured: true,
                wide: true,
                image: "assets/coffee-outing.jpeg",
                category: "cadoul unei zile împreună",
                title: "O ieșire la cafea",
                description:
                    "Alege un loc, fă-l puțin special și dă-mi o amintire pe care să o pot retrăi mereu. Să cresc e mai frumos cu tine alături.",
            },
            {
                key: "hibiscus",
                wide: true,
                image: "assets/hibiscus-charm.jpeg",
                category: "o floare pentru totdeauna",
                title: "Charm Pandora talisman cu hibiscus",
                description:
                    "O floare delicată de purtat atunci când vreau să am cu mine un mic reminder al prieteniei noastre și al bucuriei pe care o aduci în viața mea.",
            },
           
            NALA2_CARD,

        ],
    },
};

const CHOICES = [
    { id: "mom", icon: "heartOutline", name: "Mom", caption: "cea care mă face să mă simt acasă" },
    { id: "dad", icon: "user", name: "Dad", caption: "locul meu sigur, mereu" },
    { id: "soulmate", icon: "heartOutline", name: "Soulmate", caption: "omul meu preferat, mereu" },
    { id: "friend", icon: "users", name: "Friends", caption: "cea care face totul mai luminos" },
];

const root = document.getElementById("root");
let uploadedPhoto = null;

function portraitMarkup(sizeIcon) {
  return uploadedPhoto
    ? `<span class="portrait" role="img" aria-label="Un portret ilustrat"><img src="${uploadedPhoto}" alt=""></span>`
    : `<span class="portrait portrait-fallback" role="img" aria-label="Un portret ilustrat"><span class="icon">${sizeIcon}</span></span>`;
}

/* ---------------- landing ---------------- */

function renderLanding() {
  const choiceButtons = CHOICES.map(
    (c) => `
    <button type="button" class="choice-button" data-go="${c.id}">
      <span class="choice-leading">
        <span class="choice-icon icon">${ICONS[c.icon]}</span>
        <span>
          <span class="choice-name">${c.name}</span>
          <span class="choice-caption">${c.caption}</span>
        </span>
      </span>
      <span class="icon choice-arrow">${ICONS.arrowRight}</span>
    </button>`
  ).join("");

  root.innerHTML = `
    <main class="page-shell">
      <header class="topbar">
        <div class="brand-lockup">
          <span class="brand-mark icon">${ICONS.gift}</span>
          <span>
            <span class="brand-name">mica mea listă de dorințe</span>
            <span class="brand-note">ediția de 18 ani</span>
          </span>
        </div>
        <span class="header-stamp"><span class="icon">${ICONS.sparkles}</span> făcută cu iubire</span>
      </header>

      <section class="question-layout">
        <div class="intro-copy">
          <h1 class="hero-title">Cine ești<br><em>pentru mine?</em></h1>
          <p class="intro-body">Am împlinit 18 ani, iar acest moment îl simt cu tot sufletul. Înainte de dorințe și cadouri, vreau să-ți mulțumesc că faci parte din povestea mea.</p>
       
        </div>

        <div class="question-card">
          <div class="card-kicker">o întrebare foarte importantă</div>
          <h2 class="question-card-title"><br><em>Who are you for me?</em></h2>
          <div class="choice-list">${choiceButtons}</div>
        </div>
      </section>

      <p class="tiny-footer">O amintire pentru <span>18 ani</span> · mulțumesc că faci viața atât de frumoasă</p>
    </main>
  `;

  root.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => {
      uploadedPhoto = null;
      renderReveal(btn.getAttribute("data-go"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* ---------------- reveal (wishlist) ---------------- */

function cardMarkup(card) {
  const classes = ["gift-card"];
  if (card.featured) classes.push("featured");
  if (card.wide) classes.push("wide");
  if (card.clickable) classes.push("clickable");

  const overlay = card.clickable
    ? `<span class="gift-image-overlay">${ICONS.bookOpen} deschide capitolul ${ICONS.arrowRightSm}</span>`
    : "";

  const expandHint = card.clickable
    ? `<span class="expand-hint">întoarce pagina ${ICONS.arrowRightSm}</span>`
    : "";

  const chapterAttr = card.chapter ? ` data-chapter="${card.chapter}"` : "";

  return `
    <button type="button" class="${classes.join(" ")}" aria-label="${card.title}"${chapterAttr}>
      <span class="gift-image-wrap">
        <img class="gift-image" alt="" src="${card.image}">
        ${overlay}
      </span>
      <span class="gift-card-copy">
        <span class="gift-card-category">${card.category}</span>
        <span class="gift-card-title">${card.title}</span>
        <span class="gift-card-description">${card.description}</span>
        ${expandHint}
      </span>
    </button>`;
}

function renderReveal(personId) {
  const person = PEOPLE[personId];
  const count = person.cards.length;
  const cardsHtml = person.cards.map(cardMarkup).join("");
  const gridClass = person.friendLayout ? "wishlist-grid friend-grid" : "wishlist-grid";

  root.innerHTML = `
    <main class="page-shell reveal-page">
      <header class="reveal-topbar">
        <button type="button" class="back-button" data-back>${ICONS.arrowLeft} alege pe altcineva</button>
      </header>

      <section class="reveal-hero">
       
        <div>
          <div class="reveal-kicker">${person.kicker}</div>
          <h1 class="reveal-title">${person.titleHtml}</h1>
          <p class="reveal-intro">${person.intro}</p>
        </div>
      </section>
      <section>
        <div class="wishlist-heading">
          <div>
            <h2>Câteva idei de pus pe listă</h2>
          </div>
          <p>${count} idei alese cu grijă · fără presiune, doar iubire</p>
        </div>
        <div class="${gridClass}">${cardsHtml}</div>
      </section>

      <footer class="reveal-footer">
        <span>Nu este despre lucruri — este despre bucuria de a fi ținută minte.</span>
        <strong>mulțumesc că mă iubești ${ICONS.heart}</strong>
      </footer>
    </main>
  `;

  root.querySelector("[data-back]").addEventListener("click", () => {
    renderLanding();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  root.querySelectorAll("[data-chapter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderChapter(personId, btn.getAttribute("data-chapter"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  wireUpload(() => renderReveal(personId));
}

/* ---------------- chapter detail page ---------------- */

function detailCardMarkup(item, index) {
  const num = String(index + 1).padStart(2, "0");
  return `
    <article class="detail-card" style="animation-delay: ${index * 70}ms;">
      <div class="detail-image-wrap">
        <img alt="${item.alt}" class="detail-image" src="${item.image}">
      </div>
      <div class="detail-copy">
        <span class="detail-number">${num}</span>
        <h2>${item.title}</h2>
        <p class="detail-meta">${item.meta}</p>
        <p class="detail-note">${item.note}</p>
      </div>
    </article>`;
}

function renderChapter(personId, chapterType) {
  const person = PEOPLE[personId];
  const chapter = CHAPTERS[chapterType];
  const intro = chapter.introTemplate.replace("{name}", person.displayName);
  const itemsHtml = chapter.items.map(detailCardMarkup).join("");

  root.innerHTML = `
    <main class="page-shell detail-page">
      <header class="reveal-topbar">
        <button type="button" class="back-button" data-back>${ICONS.arrowLeft} înapoi la lista pentru ${person.displayName}</button>
        <button type="button" class="action-button" data-reset>alege pe altcineva</button>
      </header>

      <section class="detail-hero">
        <div>
          <h1 class="detail-title">${chapter.titleHtml}</h1>
          <p class="detail-intro">${intro}</p>
        </div>
      </section>

      <div class="chapter-note">
        <span class="icon">${ICONS.sparkles}</span>
        <span><strong>Un mesaj de la sărbătorită</strong> ${chapter.note}</span>
      </div>

      <section class="detail-grid ${chapter.gridClass}" aria-label="Detalii">${itemsHtml}</section>

      <footer class="reveal-footer">
        <span>Mulțumesc că sărbătorești acest capitol nou alături de mine.</span>
        <strong>cu multă iubire ${ICONS.heart}</strong>
      </footer>
    </main>
  `;

  root.querySelector("[data-back]").addEventListener("click", () => {
    renderReveal(personId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  root.querySelector("[data-reset]").addEventListener("click", () => {
    uploadedPhoto = null;
    renderLanding();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------- shared: photo upload wiring ---------------- */

function wireUpload(rerender) {
  const uploadBtn = root.querySelector("[data-upload]");
  const photoInput = root.querySelector("#photo-input");
  if (!uploadBtn || !photoInput) return;
  uploadBtn.addEventListener("click", () => photoInput.click());
  photoInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      uploadedPhoto = reader.result;
      rerender();
    };
    reader.readAsDataURL(file);
  });
}

renderLanding();
