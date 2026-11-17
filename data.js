// ============================================================
//  CONTENUTI DEL SITO — modifica qui testi, link e immagini.
//
//  Ogni testo ha due versioni: T("italiano", "english").
//  Le immagini stanno in /immagini-web: elencale con img("nome-file.jpg", ...)
//  nell'ordine in cui devono comparire. I file .mp4 diventano video.
//
//  SEGNAPOSTO: tutto ciò che è marcato con PH(...) è un testo provvisorio
//  da sostituire (nel sito compare grigio e tratteggiato).
// ============================================================

// Testo bilingue
const T = (it, en) => ({ it, en });

// Percorsi dei file nella cartella /immagini-web
const img = (...files) => files.map(f => "immagini-web/" + encodeURI(f));

// Segna un testo come segnaposto
const PH = (text) => `<span class="ph">${text}</span>`;

// <img> oppure <video> (per .mp4) a seconda del file
const media = (src, attrs = "") => /\.mp4$/i.test(src)
  ? `<video src="${src}" autoplay muted loop playsinline ${attrs}></video>`
  : `<img src="${src}" alt="" ${attrs}>`;

// La tua foto: mettila nella cartella "immagini-web" con questo nome
const PHOTO = "immagini-web/foto-sofia.jpg";

const SITE = {
  name: "Sofia d’Ettorre",
  status: T("Italia", "Italy"),
  email: "sofiadettorre@gmail.com",
  linkedin: { label: "Sofia d’Ettorre", url: "https://www.linkedin.com/in/sofia-d%E2%80%99ettorre-a621b72b3/" },
  hero: {
    greet: T("Ciao :)", "Hi :)"),
    text: T(
      "Sono Communication Designer e mi occupo di Editoria, Brand Identity e UX/UI Design mantenendo un approccio orientato alla sostenibilità.",
      "I’m a Communication Designer working across Editorial, Brand Identity and UX/UI Design, always with a sustainability-driven approach."
    ),
    cta: T("Buona esplorazione! ★", "Enjoy exploring! ★"),
  },
  bio: T(
    [
      "Designer della comunicazione attualmente a Milano, interessata a esplorare come il design possa dare forma alle idee e trasformarle in esperienze visive significative. Il mio approccio combina <strong>ricerca e sperimentazione</strong>, con una particolare attenzione alla narrazione visiva e alle possibilità offerte dalle nuove tecnologie.",
      "Mi piace muovermi tra discipline diverse, affrontando ogni progetto come un’opportunità per trovare nuovi modi per comunicare.",
    ],
    [
      "Communication designer currently based in Milan, interested in exploring how design can give shape to ideas and turn them into meaningful visual experiences. My approach combines <strong>research and experimentation</strong>, with a particular focus on visual storytelling and the possibilities offered by new technologies.",
      "I enjoy moving between different disciplines, approaching every project as an opportunity to find new ways to communicate.",
    ]
  ),
  work: [
    { role: T("Politecnico di Milano, Assistente alla didattica", "Politecnico di Milano, Teaching Assistant"), year: "2026–2027" },
    { role: T("International School Europe, Coding Teacher", "International School Europe, Coding Teacher"), year: "2025–2026" },
  ],
  education: [
    { role: T("Politecnico di Milano, Laurea Magistrale", "Politecnico di Milano, Master’s Degree"), year: T("2025–oggi", "2025–present") },
    { role: T("Hunan University (Cina), Exchange Semester", "Hunan University (China), Exchange Semester"), year: "2025–2026" },
    { role: T("Politecnico di Milano, Laurea Triennale", "Politecnico di Milano, Bachelor’s Degree"), year: "2022–2025" },
  ],
  skills: ["Visual Communication", "Brand Identity & Strategy", "Editorial Design & Typography", "UX/UI Design", "Art Direction & Visual Storytelling", "Exhibition Design", "Generative AI & Speculative Design", "Photography"],
  languages: T(
    ["Italiano — madrelingua", "Inglese — C1"],
    ["Italian — native", "English — C1"]
  ),
};

// Etichette fisse dell'interfaccia
const UI = {
  bio: T("Bio", "Bio"),
  work: T("Esperienze", "Experience"),
  education: T("Formazione", "Education"),
  info: T("Info", "Info"),
  skills: T("Competenze", "Skills"),
  languages: T("Lingue", "Languages"),
  overview: T("Panoramica", "Overview"),
  contributions: T("Il mio ruolo & contributi", "My role & contributions"),
  year: T("Anno", "Year"),
  field: T("Ambito", "Field"),
  course: T("Corso", "Course"),
  prev: T("← Prec.", "← Prev"),
  next: T("Succ. →", "Next →"),
  prevAria: T("Progetto precedente", "Previous project"),
  nextAria: T("Progetto successivo", "Next project"),
  close: T("Chiudi progetto", "Close project"),
  top: T("Torna su ↑", "Back to top ↑"),
  projects: T("Progetti selezionati", "Selected work"),
  langSwitch: T("Lingua del sito", "Site language"),
  description: T(
    "Portfolio di Sofia d’Ettorre, Communication Designer: editoria, brand identity e UX/UI design con un approccio orientato alla sostenibilità.",
    "Portfolio of Sofia d’Ettorre, Communication Designer: editorial, brand identity and UX/UI design with a sustainability-driven approach."
  ),
};

const PROJECTS = [
  {
    slug: "revera",
    title: "Revera",
    chip: "Brand Identity",
    oneliner: T(
      "Un concept di servizio funebre sostenibile: un’urna biodegradabile che fa crescere un albero nella Foresta dei Ricordi.",
      "A concept for a sustainable funeral service: a biodegradable urn that grows a tree in the Forest of Memories."
    ),
    tags: ["Brand Identity", "Communication Design"],
    year: "2024",
    info: T(
      "Revera è un concept di servizio funebre sostenibile che ripensa il rapporto tra lutto e natura. Attraverso un'urna biodegradabile che permette di far crescere un albero dalle ceneri, il progetto trasforma la sepoltura tradizionale in una Foresta dei Ricordi: uno spazio vivo e condiviso in cui custodire la memoria dei propri cari. Un'applicazione dedicata consente alle famiglie di seguire la crescita e prendersi cura del proprio albero nel tempo, trasformando il ricordo in un gesto concreto di cura verso le persone e l'ambiente.",
      "Revera is a concept for a sustainable funeral service that rethinks the relationship between grief and nature. Through a biodegradable urn that allows a tree to grow from the ashes, the project turns traditional burial into a Forest of Memories: a living, shared space in which to keep the memory of loved ones. A dedicated app lets families follow the growth of their tree and care for it over time, turning remembrance into a concrete act of care for people and the environment."
    ),
    contributions: T(
      ["Strategia di brand e posizionamento", "Identità visiva", "Progettazione dell'ecosistema di comunicazione"],
      ["Brand strategy and positioning", "Visual identity", "Design of the communication ecosystem"]
    ),
    images: img("revera-01.mp4", "revera-02.jpg", "revera-03.jpg", "revera-04.jpg", "revera-05.jpg", "revera-06.jpg", "revera-07.png", "revera-08.jpg", "revera-09.jpg", "revera-10.jpg", "revera-11.jpg"),
  },
  {
    slug: "glitch-of-us",
    title: "Glitch of Us",
    chip: "Exhibition",
    oneliner: T(
      "Un percorso espositivo immersivo che usa il glitch per riflettere su errore tecnologico e imperfezione umana.",
      "An immersive exhibition that uses the glitch to reflect on technological error and human imperfection."
    ),
    tags: ["Exhibition Design", "Brand Identity"],
    year: "2025",
    info: T(
      "Quando l'immagine si rompe, emerge il supporto che la rende possibile. Glitch of Us esplora il rapporto tra errore tecnologico e imperfezione umana, mettendo in discussione la ricerca di perfezione che caratterizza l'immaginario digitale contemporaneo. Attraverso un percorso espositivo immersivo, il glitch diventa uno strumento per svelare ciò che normalmente rimane nascosto: la materialità del mezzo, la vulnerabilità dell'individuo e le contraddizioni della cultura visiva online. L'errore si trasforma così da anomalia tecnica in occasione di riflessione sull'autenticità, sull'identità e sul nostro rapporto con la tecnologia.",
      "When the image breaks, the medium that makes it possible comes to the surface. Glitch of Us explores the relationship between technological error and human imperfection, questioning the pursuit of perfection that shapes today’s digital imagery. Through an immersive exhibition path, the glitch becomes a tool for revealing what usually stays hidden: the materiality of the medium, the vulnerability of the individual and the contradictions of online visual culture. Error thus turns from a technical anomaly into an opportunity to reflect on authenticity, identity and our relationship with technology."
    ),
    contributions: T(
      ["Concept espositivo", "Progettazione dell'esperienza", "Identità visiva"],
      ["Exhibition concept", "Experience design", "Visual identity"]
    ),
    images: img("glitch of us-01.jpg", "glitch of us-02.jpg", "glitch of us-03.jpg", "glitch of us-04.jpg", "glitch of us-05.jpg", "glitch of us-06.jpg", "glitch of us-07.jpg", "glitch of us-08.jpg", "glitch of us-09.jpg", "glitch of us-10.jpg", "glitch of us-11.jpg", "glitch of us-12.jpg", "glitch of us-13.jpg", "glitch of us-14.jpg"),
  },
  {
    slug: "clarify",
    title: "Clarify",
    chip: "UX/UI",
    oneliner: T(
      "Un assistente AI che supporta le persone autistiche nella comunicazione e nelle interazioni sul luogo di lavoro.",
      "An AI assistant that supports autistic people with communication and interactions in the workplace."
    ),
    tags: ["UX/UI Design", "AI Agent", "Inclusive Design"],
    year: "2026",
    course: "Advanced Studies on Emerging Design Frontiers",
    info: T(
      "Clarify è un assistente basato sull'intelligenza artificiale, progettato per supportare le persone autistiche nella comunicazione e nelle interazioni sul luogo di lavoro. In contesti professionali caratterizzati da messaggi ambigui, convenzioni sociali implicite e aspettative non esplicitate, il progetto esplora come l'AI possa contribuire a rendere le informazioni più accessibili e comprensibili. Attraverso strumenti per interpretare comunicazioni, decodificare situazioni sociali, formulare risposte e chiarire le aspettative lavorative, Clarify mira a promuovere autonomia, sicurezza e inclusione, adattando l'esperienza digitale a differenti modalità di elaborazione delle informazioni.",
      "Clarify is an AI-powered assistant designed to support autistic people with communication and interactions in the workplace. In professional settings shaped by ambiguous messages, implicit social conventions and unspoken expectations, the project explores how AI can help make information more accessible and easier to understand. Through tools for interpreting messages, decoding social situations, drafting replies and clarifying job expectations, Clarify aims to foster autonomy, confidence and inclusion, adapting the digital experience to different ways of processing information."
    ),
    contributions: T(
      ["Ricerca", "Progettazione UX/UI", "Sviluppo del concept di assistente AI"],
      ["Research", "UX/UI design", "AI assistant concept development"]
    ),
    images: img("clarify-01.jpg", "clarify-02.jpg", "clarify-03.jpg", "clarify-04.jpg", "clarify-05.jpg", "clarify-06.jpg", "clarify-7.jpg", "clarify-08.jpg", "clarify-09.jpg", "clarify-10.jpg", "clarify-11.jpg", "clarify-12.jpg", "clarify-13.jpg"),
  },
  {
    slug: "agosto-moglie-mia-non-ti-conosco",
    title: "Agosto, moglie mia non ti conosco",
    chip: "Editorial",
    oneliner: T(
      "Un libro visivo ispirato al romanzo di Achille Campanile, tra sceneggiatura, impaginazione e sequenze fotografiche.",
      "A visual book inspired by Achille Campanile’s novel, weaving together screenplay, layout and photographic sequences."
    ),
    tags: ["Editorial Design", "Visual Storytelling", "Photography"],
    year: "2025",
    course: T("Progetto finale, Laurea Triennale", "Final project, Bachelor’s Degree"),
    info: T(
      "Progettazione editoriale di un libro visivo ispirato all'omonimo romanzo di Achille Campanile. Il progetto rielabora il testo originale in forma di sceneggiatura, sviluppando un sistema narrativo che intreccia contenuti editoriali e sequenze fotografiche. Attraverso il dialogo tra parola e immagine, la pubblicazione supera i confini tradizionali del libro per trasformare la lettura in un'esperienza immersiva, valorizzando la dimensione teatrale e performativa del racconto.",
      "Editorial design of a visual book inspired by Achille Campanile’s novel of the same name. The project reworks the original text as a screenplay, developing a narrative system that interweaves editorial content and photographic sequences. Through the dialogue between word and image, the publication goes beyond the traditional limits of the book and turns reading into an immersive experience, bringing out the theatrical and performative side of the story."
    ),
    contributions: T(
      ["Progettazione editoriale", "Adattamento narrativo", "Impaginazione", "Ricerca visiva"],
      ["Editorial design", "Narrative adaptation", "Layout", "Visual research"]
    ),
    images: img("agosto-01.jpg", "agosto-02.jpg", "agosto-03.jpg", "agosto-04.jpg", "agosto-05.jpg", "agosto-06.jpg", "agosto-07.jpg", "agosto-08.jpg", "agosto-09.jpg"),
  },
  {
    slug: "dexa",
    title: "DEXA",
    chip: "Speculative",
    oneliner: T(
      "E se il fumo di sigaretta potesse purificare l’aria? Uno scenario speculativo su inquinamento e innovazione.",
      "What if cigarette smoke could purify the air? A speculative scenario on pollution and innovation."
    ),
    tags: ["Speculative Design", "Generative AI"],
    year: "2026",
    course: "Design Futures and Speculation",
    info: T(
      "E se il fumo di sigaretta potesse diventare una risorsa per purificare l'aria? DEXA immagina un dispositivo capace di trasformare il fumo in uno strumento per la depurazione dell'ambiente, costruendo uno scenario futuro che mette in discussione le nostre concezioni di inquinamento, tecnologia e sostenibilità. Attraverso il design speculativo, il progetto non intende proporre una soluzione tecnologica immediatamente realizzabile, ma utilizzare un'ipotesi provocatoria per stimolare una riflessione critica sulle conseguenze sociali, ambientali e culturali dell'innovazione.",
      "What if cigarette smoke could become a resource for purifying the air? DEXA imagines a device able to turn smoke into a tool for cleaning the environment, building a future scenario that challenges our ideas of pollution, technology and sustainability. Through speculative design, the project does not set out to offer an immediately feasible technological solution, but uses a provocative hypothesis to prompt critical reflection on the social, environmental and cultural consequences of innovation."
    ),
    contributions: T(
      ["Sviluppo dello scenario speculativo", "Esplorazione visiva con l'intelligenza artificiale generativa"],
      ["Development of the speculative scenario", "Visual exploration with generative AI"]
    ),
    images: img("dexa 1.jpg", "dexa 2.jpg", "dexa 3.jpg", "dexa 4.jpg", "dexa 5.jpg", "dexa 6.jpg", "dexa 7.jpg", "dexa 8.jpg", "dexa 9.jpg"),
  },
  {
    slug: "ancient-sentinels",
    title: "Ancient Sentinels",
    chip: "Generative AI",
    oneliner: T(
      "Personaggi originali e un video animato generati con l’AI per raccontare il patrimonio culturale.",
      "Original characters and an animated video generated with AI to tell the story of cultural heritage."
    ),
    tags: ["Generative AI", "Character Design", "3D Rendering", "Storytelling"],
    year: "2026",
    course: "Cultural Heritage and Digital Innovation",
    info: T(
      "Ancient Sentinels esplora il potenziale dell'intelligenza artificiale nella valorizzazione e comunicazione del patrimonio culturale attraverso la creazione di personaggi originali e un video animato. Il progetto combina character design, visual storytelling e sperimentazione tecnologica per costruire un linguaggio visivo capace di avvicinare il pubblico al patrimonio culturale. Particolare attenzione è dedicata al processo di generazione delle immagini: attraverso il confronto tra i risultati ottenuti prima e dopo l'ottimizzazione del workflow, vengono analizzati il ruolo dei dati di progetto e del prompt design nella qualità e nella coerenza degli output.",
      "Ancient Sentinels explores the potential of artificial intelligence in promoting and communicating cultural heritage through the creation of original characters and an animated video. The project combines character design, visual storytelling and technological experimentation to build a visual language that brings audiences closer to cultural heritage. Particular attention is paid to the image-generation process: by comparing the results obtained before and after optimising the workflow, the project analyses the role of project data and prompt design in the quality and consistency of the outputs."
    ),
    contributions: T(
      ["Ideazione di IP character", "Generazione di immagini", "Rendering 3D", "Realizzazione di un video animato"],
      ["IP character concept", "Image generation", "3D rendering", "Animated video production"]
    ),
    images: img("ancient sentinels 1.jpg", "ancient sentinels 2.jpg", "ancient sentinels 3.jpg", "ancient sentinels 4.jpg", "ancient sentinels 5.jpg", "ancient sentinels 6.jpg", "ancient sentinels 7.jpg", "ancient sentinels 8.jpg", "ancient sentinels 9.jpg", "ancient sentinels 10.jpg"),
  },
];

// ------------------------------------------------------------
//  Illustrazioni pixel della hero: "#" = pixel pieno, "." = vuoto.
//  Puoi ridisegnarle modificando le righe.
// ------------------------------------------------------------
const PIXEL_ART = {
  flower: [
    "..............#..............",
    "............##.##............",
    "...........#.....#...........",
    "..........#.......#..........",
    ".........#.........#.........",
    ".........#.........#.........",
    "........#...........#........",
    "......####.........####......",
    "....##....#.......#....##....",
    "...#.......#.....#.......#...",
    "...#.......#.....#.......#...",
    "..#........#.....#........#..",
    ".#..........#...#..........#.",
    "#...........#...#...........#",
    "#............#.#............#",
    "#...........#...#...........#",
    "#..........###.###..........#",
    ".#........##.###.##........#.",
    "..#......#.#..#..#.#......#..",
    "...#.....#..#####..#.....#...",
    "....##..#....###....#..##....",
    ".....###...#######...###.....",
    "....#.......#####.......#....",
    "...#........#...#........#...",
    "....#......#.....#......#....",
    "....#.....#.......#.....#....",
    ".....#...#.........#...#.....",
    "......###...........###......",
  ],
  sparkle: [
    "......#......",
    ".....#.#.....",
    "....#...#....",
    "....#...#....",
    "..###...###..",
    ".#...#.#...#.",
    "#.....#.....#",
    ".#...#.#...#.",
    "..###...###..",
    "....#...#....",
    "....#...#....",
    ".....#.#.....",
    "......#......",
  ],
  sprig: [
    ".##..##......",
    "###.####.....",
    "###..###.....",
    "...##.#....#.",
    ".#.##......##",
    "###..###...##",
    "####.###.#.#.",
    ".##..##...#..",
    "..........#..",
    "..........#..",
    ".......###.#.",
    "......###..#.",
    "...........#.",
    "............#",
  ],
  apple: [
    "..######....#.......",
    "...######..#........",
    "......###.#.........",
    ".........#..........",
    ".........##.........",
    "...#####..#.#####...",
    "..#.....####.....#..",
    ".#.#####....#####.#.",
    "#.#.....####.....#.#",
    "#.#..............#.#",
    "#.#..............#.#",
    "#.#..............#.#",
    "#.#.....#..#.....#.#",
    "#.#.....#..#.....#.#",
    "#.#.....#..#.....#.#",
    "#.#..............#.#",
    ".#.#............#.#.",
    ".#.#............#.#.",
    "..#.#..........#.#..",
    "..#.#..........#.#..",
    "...#.####..####.#...",
    "...#.....##.....#...",
    "....############....",
  ],
};

// Fiori pixel in fondo alla pagina
PIXEL_ART.footer = [
  "............#.....................................................................................................................................#.............",
  "...........###...........................................######.................................######...........................................###............",
  "...........####........................................####....##.............................##....####........................................####............",
  "..........#####.......................................#....#.....#...........................##....#....#.......................................#####...........",
  "..........#####.....................................##......#.....#.........................##....#......##.....................................#####...........",
  "..........######...................................####....###...###.......................####..###....####...................................######...........",
  "....##....######...#####..........................##..#...#####.#####.....................#####.#####...#..##..........................#####...######....##.....",
  "....####..######.########............#...........##...#...#####.#####.....................#####.#####...#...##...........#............########.######..####.....",
  ".....####.##############..............#..........#...###..#####.#####.....................#####.#####..###...#..........#..............##############.####......",
  ".......##.#####.########..............##........#...#####.#####.#.#.#.....................#####.#####.#####...#........##..............########.#####.##........",
  "...#.##.##.############...............##........#...#####.#.#.#.................................#.#.#.#####...#........##...............############.##.##.#....",
  "..#####..##.##.########................##......#....#####.............................................#####....#......##................########.##.##..#####...",
  ".#####.##......########................##......#...##.#.#.............................................#.#.##...#......##................########......##.#####..",
  ".#####.#######.########................###....#..##.........................................................##..#....###................########.#######.#####..",
  ".######.#######.#######................###....#.#..#.......................................................#..#.#....###................#######.#######.######..",
  "#######..######.#####.#................###....##....#..........................#..........................#....##....###................#.#####.######..#######.",
  "#####....######......#####............####...#.....###........................###........................###.....#...####............#####......######....#####.",
  "#######.#######.####..#####...........#####..#....#####.......................###.......................#####....#..#####...........#####..####.#######.#######.",
  ".######.#######.#####..#####..........#####..#....#####.....................#..#..#.....................#####....#..#####..........#####..#####.#######.######..",
  ".#####.#######.#######...###..........#####..#....#####....................###...###....................#####....#..#####..........###...#######.#######.#####..",
  ".#####.##......#######....##..........#####.##...##.#.##...................###...###...................##.#.##...##.#####..........##....#######......##.#####..",
  "..#####..##.##.########....##.........#####.#..##...........................#..#..#...........................##..#.#####.........##....########.##.##..#####...",
  "...#.##.##.###.########....##..........####.#.#..#............................###............................#..#.#.####..........##....########.###.##.##.#....",
  ".......###.####.#######....###.........####.##....#...........................###...........................#....##.####.........###....#######.####.###........",
  ".....####.#####.#######....###.........####.#....###...........................#...........................###....#.####.........###....#######.#####.####......",
  ".....####.######.#######....##.........####.#...#####.....................................................######..#.####.........##....#######.######.####......",
  ".....#....######...#####....##..........###.#...#####.....................................................######..#.###..........##....#####...######....#......",
  "..........######............##..........#####...#####.....................................................######..#####..........##............######...........",
  "..........######............##...........####...#####.....................................................######..####...........##............######...........",
  "...........####.............###..........####..##.#.##...................................................########.####..........###.............####............",
  "...........####..............##...........###.....................................................................###...........##..............####............",
  "............##...............##...........###.....................................................................###...........##...............##.............",
  ".............#...............##...........###.....................................................................###...........##...............#..............",
  ".............................##............##.....................................................................##............##..............................",
  ".............................##............##.....................................................................##............##..............................",
];
