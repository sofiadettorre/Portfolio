// ============================================================
//  CONTENUTI DEL SITO — modifica qui testi, link e immagini.
//  Le immagini stanno in /immagini-web: elencale con img("nome-file.jpg", ...)
//  nell'ordine in cui devono comparire. I file .mp4 diventano video.
//
//  SEGNAPOSTO: tutto ciò che è scritto tra [parentesi quadre] o marcato
//  con PH(...) è un testo provvisorio da sostituire.
// ============================================================

// Percorsi dei file nella cartella /immagini-web
const img = (...files) => files.map(f => "immagini-web/" + encodeURI(f));

// Segna un testo come segnaposto (compare grigio e tratteggiato nel sito)
const PH = (text) => `<span class="ph" title="Segnaposto da completare">${text}</span>`;

// <img> oppure <video> (per .mp4) a seconda del file
const media = (src, attrs = "") => /\.mp4$/i.test(src)
  ? `<video src="${src}" autoplay muted loop playsinline ${attrs}></video>`
  : `<img src="${src}" alt="" ${attrs}>`;

const SITE = {
  name: "Sofia d’Ettorre",
  status: "Milano, Italia",
  email: "sofiadettorre@gmail.com",
  linkedin: { label: "Sofia d’Ettorre", url: "#" },          // SEGNAPOSTO: inserisci l'URL del profilo LinkedIn
  cv: { label: "[CV in arrivo]", url: "#" },                   // SEGNAPOSTO: carica il CV (es. cv.pdf) e metti qui il percorso
  bio: [
    "Designer della comunicazione attualmente a Milano, interessata a esplorare come il design possa dare forma alle idee e trasformarle in esperienze visive significative. Il mio approccio combina <strong>ricerca e sperimentazione</strong>, con una particolare attenzione alla narrazione visiva e alle possibilità offerte dalle nuove tecnologie.",
    "Mi piace muovermi tra discipline diverse, affrontando ogni progetto come un’opportunità per imparare, mettere in discussione prospettive consolidate e trovare nuovi modi di comunicare.",
  ],
  work: [
    { role: "Politecnico di Milano, Assistente alla didattica", year: "2026–2027" },
    { role: "International School Europe, Coding Teacher", year: "2025–2026" },
  ],
  education: [
    { role: "Politecnico di Milano, Laurea Magistrale", year: "2025–oggi" },
    { role: "Hunan University (Cina), Exchange Semester", year: "2025–2026" },
    { role: "Politecnico di Milano, Laurea Triennale", year: "2022–2025" },
  ],
  skills: ["Visual Communication", "Brand Identity & Strategy", "Editorial Design & Typography", "UX/UI Design", "Art Direction & Visual Storytelling", "Exhibition Design", "Generative AI & Speculative Design", "Photography"],
  languages: ["Italiano — madrelingua", "Inglese — C1", "Spagnolo — B2"],
};

const PROJECTS = [
  {
    slug: "revera",
    title: "Revera",
    chip: "Brand Identity",
    oneliner: "Un concept di servizio funebre sostenibile: un’urna biodegradabile che fa crescere un albero nella Foresta dei Ricordi.",
    tags: ["Brand Identity", "Communication Design"],
    year: "2024",
    role: PH("[Ruolo da completare]"),
    info: "Revera è un concept di servizio funebre sostenibile che ripensa il rapporto tra lutto e natura. Attraverso un'urna biodegradabile che permette di far crescere un albero dalle ceneri, il progetto trasforma la sepoltura tradizionale in una Foresta dei Ricordi: uno spazio vivo e condiviso in cui custodire la memoria dei propri cari. Un'applicazione dedicata consente alle famiglie di seguire la crescita e prendersi cura del proprio albero nel tempo, trasformando il ricordo in un gesto concreto di cura verso le persone e l'ambiente.",
    contributions: ["Strategia di brand e posizionamento", "Identità visiva", "Progettazione dell'ecosistema di comunicazione"],
    images: img("revera-01.mp4", "revera-02.jpg", "revera-03.jpg", "revera-04.jpg", "revera-05.jpg", "revera-06.jpg", "revera-07.png", "revera-08.jpg", "revera-09.jpg", "revera-10.jpg", "revera-11.jpg"),
    frame: "4 / 5",
  },
  {
    slug: "glitch-of-us",
    title: "Glitch of Us",
    chip: "Exhibition",
    oneliner: "Un percorso espositivo immersivo che usa il glitch per riflettere su errore tecnologico e imperfezione umana.",
    tags: ["Exhibition Design", "Brand Identity"],
    year: "2025",
    role: PH("[Ruolo da completare]"),
    info: "Quando l'immagine si rompe, emerge il supporto che la rende possibile. Glitch of Us esplora il rapporto tra errore tecnologico e imperfezione umana, mettendo in discussione la ricerca di perfezione che caratterizza l'immaginario digitale contemporaneo. Attraverso un percorso espositivo immersivo, il glitch diventa uno strumento per svelare ciò che normalmente rimane nascosto: la materialità del mezzo, la vulnerabilità dell'individuo e le contraddizioni della cultura visiva online. L'errore si trasforma così da anomalia tecnica in occasione di riflessione sull'autenticità, sull'identità e sul nostro rapporto con la tecnologia.",
    contributions: ["Concept espositivo", "Progettazione dell'esperienza", "Identità visiva"],
    images: img("glitch of us-01.jpg", "glitch of us-02.jpg", "glitch of us-03.jpg", "glitch of us-04.jpg", "glitch of us-05.jpg", "glitch of us-06.jpg", "glitch of us-07.jpg", "glitch of us-08.jpg", "glitch of us-09.jpg", "glitch of us-10.jpg", "glitch of us-11.jpg", "glitch of us-12.jpg", "glitch of us-13.jpg", "glitch of us-14.jpg"),
    frame: "16 / 10",
  },
  {
    slug: "clarify",
    title: "Clarify",
    chip: "UX/UI",
    oneliner: "Un assistente AI che supporta le persone autistiche nella comunicazione e nelle interazioni sul luogo di lavoro.",
    tags: ["UX/UI Design", "AI Agent", "Inclusive Design"],
    year: "2026",
    role: PH("[Ruolo da completare]"),
    course: "Advanced Studies on Emerging Design Frontiers",
    info: "Clarify è un assistente basato sull'intelligenza artificiale, progettato per supportare le persone autistiche nella comunicazione e nelle interazioni sul luogo di lavoro. In contesti professionali caratterizzati da messaggi ambigui, convenzioni sociali implicite e aspettative non esplicitate, il progetto esplora come l'AI possa contribuire a rendere le informazioni più accessibili e comprensibili. Attraverso strumenti per interpretare comunicazioni, decodificare situazioni sociali, formulare risposte e chiarire le aspettative lavorative, Clarify mira a promuovere autonomia, sicurezza e inclusione, adattando l'esperienza digitale a differenti modalità di elaborazione delle informazioni.",
    contributions: ["Ricerca", "Progettazione UX/UI", "Sviluppo del concept di assistente AI"],
    images: img("clarify-01.jpg", "clarify-02.jpg", "clarify-03.jpg", "clarify-04.jpg", "clarify-05.jpg", "clarify-06.jpg", "clarify-7.jpg", "clarify-08.jpg", "clarify-09.jpg", "clarify-10.jpg", "clarify-11.jpg", "clarify-12.jpg", "clarify-13.jpg"),
    frame: "16 / 10",
  },
  {
    slug: "agosto-moglie-mia-non-ti-conosco",
    title: "Agosto, moglie mia non ti conosco",
    chip: "Editorial",
    oneliner: "Un libro visivo ispirato al romanzo di Achille Campanile, tra sceneggiatura, impaginazione e sequenze fotografiche.",
    tags: ["Editorial Design", "Visual Storytelling", "Photography"],
    year: "2025",
    role: PH("[Ruolo da completare]"),
    course: "Progetto finale, Laurea Triennale",
    info: "Progettazione editoriale di un libro visivo ispirato all'omonimo romanzo di Achille Campanile. Il progetto rielabora il testo originale in forma di sceneggiatura, sviluppando un sistema narrativo che intreccia contenuti editoriali e sequenze fotografiche. Attraverso il dialogo tra parola e immagine, la pubblicazione supera i confini tradizionali del libro per trasformare la lettura in un'esperienza immersiva, valorizzando la dimensione teatrale e performativa del racconto.",
    contributions: ["Progettazione editoriale", "Adattamento narrativo", "Impaginazione", "Ricerca visiva"],
    images: img("agosto-01.jpg", "agosto-02.jpg", "agosto-03.jpg", "agosto-04.jpg", "agosto-05.jpg", "agosto-06.jpg", "agosto-07.jpg", "agosto-08.jpg", "agosto-09.jpg"),
    frame: "3 / 2",
  },
  {
    slug: "dexa",
    title: "DEXA",
    chip: "Speculative",
    oneliner: "E se il fumo di sigaretta potesse purificare l’aria? Uno scenario speculativo su inquinamento e innovazione.",
    tags: ["Speculative Design", "Generative AI"],
    year: "2026",
    role: PH("[Ruolo da completare]"),
    course: "Design Futures and Speculation",
    info: "E se il fumo di sigaretta potesse diventare una risorsa per purificare l'aria? DEXA immagina un dispositivo capace di trasformare il fumo in uno strumento per la depurazione dell'ambiente, costruendo uno scenario futuro che mette in discussione le nostre concezioni di inquinamento, tecnologia e sostenibilità. Attraverso il design speculativo, il progetto non intende proporre una soluzione tecnologica immediatamente realizzabile, ma utilizzare un'ipotesi provocatoria per stimolare una riflessione critica sulle conseguenze sociali, ambientali e culturali dell'innovazione.",
    contributions: ["Sviluppo dello scenario speculativo", "Esplorazione visiva con l'intelligenza artificiale generativa"],
    images: img("dexa 1.jpg", "dexa 2.jpg", "dexa 3.jpg", "dexa 4.jpg", "dexa 5.jpg", "dexa 6.jpg", "dexa 7.jpg", "dexa 8.jpg", "dexa 9.jpg"),
    frame: "1 / 1.1",
  },
  {
    slug: "ancient-sentinels",
    title: "Ancient Sentinels",
    chip: "Generative AI",
    oneliner: "Personaggi originali e un video animato generati con l’AI per raccontare il patrimonio culturale.",
    tags: ["Generative AI", "Character Design", "3D Rendering", "Storytelling"],
    year: "2026",
    role: PH("[Ruolo da completare]"),
    course: "Cultural Heritage and Digital Innovation",
    info: "Ancient Sentinels esplora il potenziale dell'intelligenza artificiale nella valorizzazione e comunicazione del patrimonio culturale attraverso la creazione di personaggi originali e un video animato. Il progetto combina character design, visual storytelling e sperimentazione tecnologica per costruire un linguaggio visivo capace di avvicinare il pubblico al patrimonio culturale. Particolare attenzione è dedicata al processo di generazione delle immagini: attraverso il confronto tra i risultati ottenuti prima e dopo l'ottimizzazione del workflow, vengono analizzati il ruolo dei dati di progetto e del prompt design nella qualità e nella coerenza degli output.",
    contributions: ["Ideazione di IP character", "Generazione di immagini", "Rendering 3D", "Realizzazione di un video animato"],
    images: img("ancient sentinels 1.jpg", "ancient sentinels 2.jpg", "ancient sentinels 3.jpg", "ancient sentinels 4.jpg", "ancient sentinels 5.jpg", "ancient sentinels 6.jpg", "ancient sentinels 7.jpg", "ancient sentinels 8.jpg", "ancient sentinels 9.jpg", "ancient sentinels 10.jpg"),
    frame: "5 / 4",
  },
];

// Piccole immagini decorative sparse nella pagina
const DECOR = img("cursore 1.png", "cursore 2.png", "cursore 3.png", "cursore 4.png", "cursore 5.png", "cursore 6.png", "cursore 7.png");
