// ============================================================
//  CONTENUTI DEL SITO — modifica qui testi, link e immagini.
//  Le immagini stanno in /immagini-web (copie leggere di /immagini): elencale con img("nome-file.jpg", ...)
//  nell'ordine in cui devono comparire. I file .mp4 diventano video.
// ============================================================

// Percorsi dei file nella cartella /immagini-web
const img = (...files) => files.map(f => "immagini-web/" + encodeURI(f));

// <img> oppure <video> (per .mp4) a seconda del file
const media = (src, attrs = "") => /\.mp4$/i.test(src)
  ? `<video src="${src}" autoplay muted loop playsinline ${attrs}></video>`
  : `<img src="${src}" alt="" ${attrs}>`;

const SITE = {
  name: "Sofia d’Ettorre",
  email: "sofiadettorre@gmail.com",
  hero: "Sofia d’Ettorre\nDesigner della comunicazione che esplora il punto d’incontro tra comunicazione visiva e tecnologie emergenti.",
};

const PROJECTS = [
  {
    slug: "revera",
    title: "Revera",
    tags: "Brand Identity · Communication Design",
    year: "2024",
    info: "Revera è un concept di servizio funebre sostenibile che ripensa il rapporto tra lutto e natura. Attraverso un'urna biodegradabile che permette di far crescere un albero dalle ceneri, il progetto trasforma la sepoltura tradizionale in una Foresta dei Ricordi: uno spazio vivo e condiviso in cui custodire la memoria dei propri cari. Un'applicazione dedicata consente alle famiglie di seguire la crescita e prendersi cura del proprio albero nel tempo, trasformando il ricordo in un gesto concreto di cura verso le persone e l'ambiente.",
    credits: { Ambito: "Brand Identity · Communication Design", Attività: "Strategia di brand, posizionamento, identità visiva e progettazione dell'ecosistema di comunicazione." },
    images: img("revera-01.mp4", "revera-02.jpg", "revera-03.jpg", "revera-04.jpg", "revera-05.jpg", "revera-06.jpg", "revera-07.png", "revera-08.jpg", "revera-09.jpg", "revera-10.jpg", "revera-11.jpg"),
  },
  {
    slug: "agosto-moglie-mia-non-ti-conosco",
    title: "Agosto, moglie mia non ti conosco",
    tags: "Editorial Design · Visual Storytelling · Photography",
    year: "2025",
    info: "Progettazione editoriale di un libro visivo ispirato all'omonimo romanzo di Achille Campanile. Il progetto rielabora il testo originale in forma di sceneggiatura, sviluppando un sistema narrativo che intreccia contenuti editoriali e sequenze fotografiche. Attraverso il dialogo tra parola e immagine, la pubblicazione supera i confini tradizionali del libro per trasformare la lettura in un'esperienza immersiva, valorizzando la dimensione teatrale e performativa del racconto.",
    credits: { Ambito: "Editorial Design · Visual Storytelling · Photography", Attività: "Progettazione editoriale, adattamento narrativo, impaginazione e ricerca visiva." },
    images: img("agosto-01.jpg", "agosto-02.jpg", "agosto-03.jpg", "agosto-04.jpg", "agosto-05.jpg", "agosto-06.jpg", "agosto-07.jpg", "agosto-08.jpg", "agosto-09.jpg"),
  },
  {
    slug: "clarify",
    title: "Clarify",
    tags: "UX/UI Design · AI Agent · Inclusive Design",
    year: "2026",
    info: "Clarify è un assistente basato sull'intelligenza artificiale, progettato per supportare le persone autistiche nella comunicazione e nelle interazioni sul luogo di lavoro. In contesti professionali caratterizzati da messaggi ambigui, convenzioni sociali implicite e aspettative non esplicitate, il progetto esplora come l'AI possa contribuire a rendere le informazioni più accessibili e comprensibili. Attraverso strumenti per interpretare comunicazioni, decodificare situazioni sociali, formulare risposte e chiarire le aspettative lavorative, Clarify mira a promuovere autonomia, sicurezza e inclusione, adattando l'esperienza digitale a differenti modalità di elaborazione delle informazioni.",
    credits: { Ambito: "UX/UI Design · AI Agent · Inclusive Design", Attività: "Ricerca, progettazione UX/UI e sviluppo del concept di assistente AI.", Corso: "Advanced Studies on Emerging Design Frontiers" },
    images: img("clarify-01.jpg", "clarify-02.jpg", "clarify-03.jpg", "clarify-04.jpg", "clarify-05.jpg", "clarify-06.jpg", "clarify-7.jpg", "clarify-08.jpg", "clarify-09.jpg", "clarify-10.jpg", "clarify-11.jpg", "clarify-12.jpg", "clarify-13.jpg"),
  },
  {
    slug: "glitch-of-us",
    title: "Glitch of Us",
    tags: "Exhibition Design · Brand Identity",
    year: "2025",
    info: "Quando l'immagine si rompe, emerge il supporto che la rende possibile. Glitch of Us esplora il rapporto tra errore tecnologico e imperfezione umana, mettendo in discussione la ricerca di perfezione che caratterizza l'immaginario digitale contemporaneo. Attraverso un percorso espositivo immersivo, il glitch diventa uno strumento per svelare ciò che normalmente rimane nascosto: la materialità del mezzo, la vulnerabilità dell'individuo e le contraddizioni della cultura visiva online. L'errore si trasforma così da anomalia tecnica in occasione di riflessione sull'autenticità, sull'identità e sul nostro rapporto con la tecnologia.",
    credits: { Ambito: "Exhibition Design · Brand Identity", Attività: "Concept espositivo, progettazione dell'esperienza e identità visiva." },
    images: img("glitch of us-01.jpg", "glitch of us-02.jpg", "glitch of us-03.jpg", "glitch of us-04.jpg", "glitch of us-05.jpg", "glitch of us-06.jpg", "glitch of us-07.jpg", "glitch of us-08.jpg", "glitch of us-09.jpg", "glitch of us-10.jpg", "glitch of us-11.jpg", "glitch of us-12.jpg", "glitch of us-13.jpg", "glitch of us-14.jpg"),
  },
  {
    slug: "dexa",
    title: "DEXA",
    tags: "Speculative Design · Generative AI",
    year: "2026",
    info: "E se il fumo di sigaretta potesse diventare una risorsa per purificare l'aria? DEXA immagina un dispositivo capace di trasformare il fumo in uno strumento per la depurazione dell'ambiente, costruendo uno scenario futuro che mette in discussione le nostre concezioni di inquinamento, tecnologia e sostenibilità. Attraverso il design speculativo, il progetto non intende proporre una soluzione tecnologica immediatamente realizzabile, ma utilizzare un'ipotesi provocatoria per stimolare una riflessione critica sulle conseguenze sociali, ambientali e culturali dell'innovazione.",
    credits: { Ambito: "Speculative Design · Generative AI", Attività: "Sviluppo dello scenario speculativo ed esplorazione visiva attraverso l'intelligenza artificiale generativa.", Corso: "Design Futures and Speculation" },
    images: img("dexa 1.jpg", "dexa 2.jpg", "dexa 3.jpg", "dexa 4.jpg", "dexa 5.jpg", "dexa 6.jpg", "dexa 7.jpg", "dexa 8.jpg", "dexa 9.jpg"),
  },
  {
    slug: "ancient-sentinels",
    title: "Ancient Sentinels",
    tags: "Generative AI · Character Design · 3D Rendering · Storytelling",
    year: "2026",
    info: "Ancient Sentinels esplora il potenziale dell'intelligenza artificiale nella valorizzazione e comunicazione del patrimonio culturale attraverso la creazione di personaggi originali e un video animato. Il progetto combina character design, visual storytelling e sperimentazione tecnologica per costruire un linguaggio visivo capace di avvicinare il pubblico al patrimonio culturale. Particolare attenzione è dedicata al processo di generazione delle immagini: attraverso il confronto tra i risultati ottenuti prima e dopo l'ottimizzazione del workflow, vengono analizzati il ruolo dei dati di progetto e del prompt design nella qualità e nella coerenza degli output.",
    credits: { Ambito: "Generative AI · Character Design · 3D Rendering · Storytelling", Attività: "Ideazione di IP character, generazione di immagini, rendering 3D e realizzazione di un video animato.", Corso: "Cultural Heritage and Digital Innovation" },
    images: img("ancient sentinels 1.jpg", "ancient sentinels 2.jpg", "ancient sentinels 3.jpg", "ancient sentinels 4.jpg", "ancient sentinels 5.jpg", "ancient sentinels 6.jpg", "ancient sentinels 7.jpg", "ancient sentinels 8.jpg", "ancient sentinels 9.jpg", "ancient sentinels 10.jpg"),
  },
];

// Immagini che compaiono seguendo il cursore in homepage
const HOME_TRAIL = img("cursore 1.png", "cursore 2.png", "cursore 3.png", "cursore 4.png", "cursore 5.png", "cursore 6.png", "cursore 7.png");

// Nav condivisa da tutte le pagine
function renderNav(current) {
  const cur = (k) => (k === current ? ' aria-current="page"' : "");
  document.body.insertAdjacentHTML("afterbegin", `
    <nav class="nav caps">
      <div>
        <a href="index.html"${cur("home")}>${SITE.name}</a>
      </div>
      <div><a href="works.html"${cur("works")}>Lavori</a></div>
      <div class="spacer"></div>
      <div><a href="about.html"${cur("about")}>About</a></div>
    </nav>`);
}
