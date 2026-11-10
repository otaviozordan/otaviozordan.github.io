/* =====================================================================
   TRADUÇÕES — inglês (en), francês (fr) e italiano (it).
   ---------------------------------------------------------------------
   O conteúdo é escrito em português em dados.js. Aqui, cada texto em
   português (copiado EXATAMENTE igual) recebe sua tradução:

     "Texto em português": { en: "...", fr: "...", it: "..." },

   • Se um texto não estiver aqui, ele aparece em português.
   • Meses em datas ("mar — dez 2022") são traduzidos automaticamente.
   • Nomes próprios (UNIFEI, GEMEC, títulos de artigos...) não precisam.
   ===================================================================== */

window.IDIOMAS = {

  /* --------------------- textos fixos da página --------------------- */
  ui: {
    pt: {
      _titulo: "Otávio Zordan · Currículo", cv: "Currículo digital", fale: "Fale comigo", imprimir: "Salvar em PDF", foto: "Foto", n_pesquisa: "Pesquisa", n_profissional: "Experiência", n_academico: "Acadêmico", gnc_cap: "Simulação em tempo real: guiamento pela linha de visada com compensação da gravidade e controle de atitude em cascata por vetoração de empuxo (gimbal ±8°), sob rajadas de vento.", gnc_alvo: "ALVO", gnc_ok: "ALVO ATINGIDO", gnc_los: "linha de visada",
      resumo: "Resumo", formacao: "Formação", profissional: "Experiência profissional", academico: "Trajetória acadêmica",
      pesquisa: "Pesquisa e publicações", projetos: "Projetos", premios: "Prêmios", competencias: "Competências",
      idiomas: "Idiomas", cursos: "Cursos e certificações", mais_github: "Mais projetos no GitHub ↗", site: "site",
      foguetemodelismo: "Foguetemodelismo", publicacao: "Publicação", link: "Link",
      rk_l: "COMPRIMENTO · L", rk_coifa: "Coifa", rk_rec: "Recuperação", rk_baia: "Baia GNC", rk_margem: "margem estática", rk_empenas: "Empenas"
    },
    en: {
      _titulo: "Otávio Zordan · Résumé", cv: "Digital résumé", fale: "Get in touch", imprimir: "Save as PDF", foto: "Photo", n_pesquisa: "Research", n_profissional: "Experience", n_academico: "Academic", gnc_cap: "Real-time simulation: line-of-sight guidance with gravity compensation and cascaded attitude control by thrust vectoring (±8° gimbal), under wind gusts.", gnc_alvo: "TARGET", gnc_ok: "TARGET HIT", gnc_los: "line of sight",
      resumo: "Summary", formacao: "Education", profissional: "Professional experience", academico: "Academic background",
      pesquisa: "Research and publications", projetos: "Projects", premios: "Awards", competencias: "Skills",
      idiomas: "Languages", cursos: "Courses and certifications", mais_github: "More projects on GitHub ↗", site: "website",
      foguetemodelismo: "Rocketry", publicacao: "Publication", link: "Link",
      rk_l: "LENGTH · L", rk_coifa: "Nose cone", rk_rec: "Recovery", rk_baia: "GNC bay", rk_margem: "static margin", rk_empenas: "Fins"
    },
    fr: {
      _titulo: "Otávio Zordan · CV", cv: "CV numérique", fale: "Me contacter", imprimir: "Enregistrer en PDF", foto: "Photo", n_pesquisa: "Recherche", n_profissional: "Expérience", n_academico: "Académique", gnc_cap: "Simulation en temps réel : guidage sur la ligne de visée avec compensation de la gravité et contrôle d'attitude en cascade par poussée vectorielle (cardan ±8°), sous rafales de vent.", gnc_alvo: "CIBLE", gnc_ok: "CIBLE ATTEINTE", gnc_los: "ligne de visée",
      resumo: "Profil", formacao: "Formation", profissional: "Expérience professionnelle", academico: "Parcours académique",
      pesquisa: "Recherche et publications", projetos: "Projets", premios: "Prix", competencias: "Compétences",
      idiomas: "Langues", cursos: "Cours et certifications", mais_github: "Plus de projets sur GitHub ↗", site: "site",
      foguetemodelismo: "Fuséologie", publicacao: "Publication", link: "Lien",
      rk_l: "LONGUEUR · L", rk_coifa: "Coiffe", rk_rec: "Récupération", rk_baia: "Baie GNC", rk_margem: "marge statique", rk_empenas: "Ailerons"
    },
    it: {
      _titulo: "Otávio Zordan · Curriculum", cv: "Curriculum digitale", fale: "Contattami", imprimir: "Salva in PDF", foto: "Foto", n_pesquisa: "Ricerca", n_profissional: "Esperienza", n_academico: "Accademico", gnc_cap: "Simulazione in tempo reale: guida sulla linea di vista con compensazione della gravità e controllo d'assetto in cascata tramite spinta vettoriale (gimbal ±8°), con raffiche di vento.", gnc_alvo: "BERSAGLIO", gnc_ok: "BERSAGLIO COLPITO", gnc_los: "linea di vista",
      resumo: "Profilo", formacao: "Formazione", profissional: "Esperienza professionale", academico: "Percorso accademico",
      pesquisa: "Ricerca e pubblicazioni", projetos: "Progetti", premios: "Premi", competencias: "Competenze",
      idiomas: "Lingue", cursos: "Corsi e certificazioni", mais_github: "Altri progetti su GitHub ↗", site: "sito",
      foguetemodelismo: "Razzomodellismo", publicacao: "Pubblicazione", link: "Link",
      rk_l: "LUNGHEZZA · L", rk_coifa: "Ogiva", rk_rec: "Recupero", rk_baia: "Vano GNC", rk_margem: "margine statico", rk_empenas: "Alette"
    }
  },

  /* ----------------------- meses (datas automáticas) ---------------- */
  meses: {
    en: { jan: "Jan", fev: "Feb", mar: "Mar", abr: "Apr", mai: "May", jun: "Jun", jul: "Jul", ago: "Aug", set: "Sep", out: "Oct", nov: "Nov", dez: "Dec" },
    fr: { jan: "janv.", fev: "févr.", mar: "mars", abr: "avr.", mai: "mai", jun: "juin", jul: "juil.", ago: "août", set: "sept.", out: "oct.", nov: "nov.", dez: "déc." },
    it: { jan: "gen", fev: "feb", mar: "mar", abr: "apr", mai: "mag", jun: "giu", jul: "lug", ago: "ago", set: "set", out: "ott", nov: "nov", dez: "dic" }
  },

  /* ------------------------ conteúdo (dados.js) --------------------- */
  textos: {
    // PERFIL
    "Engenharia Mecânica Aeronáutica · GNC · Sistemas Embarcados": { en: "Aeronautical Mechanical Engineering · GNC · Embedded Systems", fr: "Génie mécanique aéronautique · GNC · Systèmes embarqués", it: "Ingegneria Meccanica Aeronautica · GNC · Sistemi Embedded" },
    "Engenharia na fronteira entre **dinâmica de voo**, **controle** e **hardware**: do modelo matemático ao firmware que voa.": {
      en: "Engineering at the frontier of **flight dynamics**, **control** and **hardware**: from the mathematical model to the firmware that flies.",
      fr: "L'ingénierie à la frontière entre **dynamique du vol**, **contrôle** et **hardware** : du modèle mathématique au firmware qui vole.",
      it: "Ingegneria al confine tra **dinamica del volo**, **controllo** e **hardware**: dal modello matematico al firmware che vola." },
    "Comecei pela eletrônica. Fiz o técnico em Telecomunicações na ETE FMC, em Santa Rita do Sapucaí, onde recebi o prêmio de melhor desempenho acadêmico da turma de 2024 e integrei a eletrônica de um CubeSat que voou num balão estratosférico. Na UNIFEI, em Engenharia Mecânica Aeronáutica, levei essa base para a dinâmica de voo e o controle: identifiquei a dinâmica de quadrirrotores com redes neurais, trabalhei no controle de formação de nanodrones, cuidei da telemetria e do GNC de um foguete universitário e projetei em RTL parte de um processador.": {
      en: "I started in electronics. I trained as a telecommunications technician at ETE FMC, in Santa Rita do Sapucaí, where I received the best academic performance award of the class of 2024 and integrated the electronics of a CubeSat that flew on a stratospheric balloon. At UNIFEI, in Aeronautical Mechanical Engineering, I took that background into flight dynamics and control: I identified quadrotor dynamics with neural networks, worked on formation control of nanodrones, handled telemetry and GNC for a university rocket, and designed part of a processor in RTL.",
      fr: "J'ai commencé par l'électronique. J'ai suivi la formation de technicien en télécommunications à l'ETE FMC, à Santa Rita do Sapucaí, où j'ai reçu le prix de la meilleure performance académique de la promotion 2024 et intégré l'électronique d'un CubeSat qui a volé sous un ballon stratosphérique. À l'UNIFEI, en génie mécanique aéronautique, j'ai mis cette base au service de la dynamique du vol et du contrôle : identification de quadrirotors par réseaux de neurones, contrôle de formation de nanodrones, télémesure et GNC d'une fusée universitaire, et conception RTL d'une partie d'un processeur.",
      it: "Ho cominciato dall'elettronica. Ho studiato come tecnico in telecomunicazioni all'ETE FMC, a Santa Rita do Sapucaí, dove ho ricevuto il premio per il miglior rendimento accademico della classe 2024 e ho integrato l'elettronica di un CubeSat che ha volato su un pallone stratosferico. All'UNIFEI, in Ingegneria Meccanica Aeronautica, ho portato questa base nella dinamica del volo e nel controllo: ho identificato la dinamica di quadricotteri con reti neurali, lavorato al controllo di formazione di nanodroni, curato telemetria e GNC di un razzo universitario e progettato in RTL parte di un processore." },
    "Itajubá · MG · Brasil": { en: "Itajubá · MG · Brazil", fr: "Itajubá · MG · Brésil", it: "Itajubá · MG · Brasile" },
    "Curso": { en: "Program", fr: "Cursus", it: "Corso" },
    "Graduação": { en: "Degree", fr: "Diplôme d'ingénieur", it: "Laurea" },
    "Residência": { en: "Residency", fr: "Résidence", it: "Residenza" },
    "Eng. Mecânica Aeronáutica · UNIFEI": { en: "Aeronautical Mech. Eng. · UNIFEI", fr: "Génie méc. aéronautique · UNIFEI", it: "Ing. Meccanica Aeronautica · UNIFEI" },
    "Telecomunicações · ETE FMC": { en: "Telecommunications · ETE FMC", fr: "Télécommunications · ETE FMC", it: "Telecomunicazioni · ETE FMC" },
    "Microeletrônica · CI Expert": { en: "Microelectronics · CI Expert", fr: "Microélectronique · CI Expert", it: "Microelettronica · CI Expert" },
    "GNC · Telecomunicações": { en: "GNC · Telecommunications", fr: "GNC · Télécommunications", it: "GNC · Telecomunicazioni" },
    "Grupos": { en: "Groups", fr: "Groupes", it: "Gruppi" },
    "Equipe": { en: "Team", fr: "Équipe", it: "Squadra" },
    "Eng. Aeronáutica": { en: "Aeronautical Eng.", fr: "Génie aéronautique", it: "Ing. Aeronautica" },
    "Formação": { en: "Education", fr: "Formation", it: "Formazione" },
    "Eng. Mecânica Aeronáutica": { en: "Aeronautical Mech. Eng.", fr: "Génie méc. aéronautique", it: "Ing. Meccanica Aeronautica" },
    "Técnico": { en: "Technician", fr: "Technicien", it: "Tecnico" },
    "Telecomunicações": { en: "Telecommunications", fr: "Télécommunications", it: "Telecomunicazioni" },
    "ETE FMC · melhor desempenho 2024": { en: "ETE FMC · top graduate 2024", fr: "ETE FMC · major de promotion 2024", it: "ETE FMC · miglior diplomato 2024" },
    "Pesquisa": { en: "Research", fr: "Recherche", it: "Ricerca" },
    " publicações": { en: " publications", fr: " publications", it: " pubblicazioni" },
    "Dinâmica e controle de VANTs": { en: "UAV dynamics and control", fr: "Dynamique et contrôle de drones", it: "Dinamica e controllo di UAV" },
    "Reconhecimento": { en: "Recognition", fr: "Distinctions", it: "Riconoscimenti" },
    " prêmios": { en: " awards", fr: " prix", it: " premi" },
    "OBSAT · PROJETE · Inovação": { en: "OBSAT · PROJETE · Innovation", fr: "OBSAT · PROJETE · Innovation", it: "OBSAT · PROJETE · Innovazione" },

    // TRAJETÓRIA — ETE FMC
    "Técnico em Telecomunicações": { en: "Telecommunications Technician", fr: "Technicien en télécommunications", it: "Tecnico in Telecomunicazioni" },
    "A primeira escola técnica de eletrônica da América Latina, no Vale da Eletrônica. Base em eletrônica analógica e digital, sistemas digitais, redes e telecomunicações, com projetos premiados desde o primeiro ano.": {
      en: "The first electronics technical school in Latin America, in Brazil's Electronics Valley. Foundations in analog and digital electronics, digital systems, networks and telecommunications, with award-winning projects from the first year.",
      fr: "La première école technique d'électronique d'Amérique latine, dans la Vallée de l'électronique au Brésil. Bases en électronique analogique et numérique, systèmes numériques, réseaux et télécommunications, avec des projets primés dès la première année.",
      it: "La prima scuola tecnica di elettronica dell'America Latina, nella Valle dell'Elettronica in Brasile. Basi di elettronica analogica e digitale, sistemi digitali, reti e telecomunicazioni, con progetti premiati fin dal primo anno." },
    "Melhor Desempenho Acadêmico 2024": { en: "Best Academic Performance 2024", fr: "Meilleure performance académique 2024", it: "Miglior rendimento accademico 2024" },
    "Campeão regional OBSAT": { en: "OBSAT regional champion", fr: "Champion régional OBSAT", it: "Campione regionale OBSAT" },
    "~1.300 horas-aula": { en: "~1,300 class hours", fr: "~1 300 heures de cours", it: "~1.300 ore di lezione" },
    "Ajuste Dinâmico de Faróis Automotivos": { en: "Dynamic Automotive Headlight Leveling", fr: "Réglage dynamique des phares automobiles", it: "Regolazione dinamica dei fari automobilistici" },
    "Líder da equipe e programador de um sistema embarcado que corrige automaticamente o facho dos faróis.": {
      en: "Team leader and programmer of an embedded system that automatically corrects the headlight beam.",
      fr: "Chef d'équipe et programmeur d'un système embarqué qui corrige automatiquement le faisceau des phares.",
      it: "Capo squadra e programmatore di un sistema embedded che corregge automaticamente il fascio dei fari." },
    "Campeão Automação · Prêmio Municipal de Inovação": { en: "Automation category winner · Municipal Innovation Award", fr: "Lauréat catégorie Automatisation · Prix municipal de l'innovation", it: "Vincitore categoria Automazione · Premio comunale per l'innovazione" },
    "Monitor de Laboratório": { en: "Laboratory Teaching Assistant", fr: "Moniteur de laboratoire", it: "Tutor di laboratorio" },
    "Aulas de apoio em Algoritmos, Sistemas Digitais, Eletrônica Analógica e Eletricidade.": {
      en: "Support classes in Algorithms, Digital Systems, Analog Electronics and Electricity.",
      fr: "Cours de soutien en algorithmique, systèmes numériques, électronique analogique et électricité.",
      it: "Lezioni di supporto in Algoritmi, Sistemi Digitali, Elettronica Analogica ed Elettricità." },
    "ARduck — realidade aumentada para eletrônica": { en: "ARduck — augmented reality for electronics", fr: "ARduck — réalité augmentée pour l'électronique", it: "ARduck — realtà aumentata per l'elettronica" },
    "Ecossistema de ensino com realidade aumentada, laboratório conectado, app e painel web. Embarcados, backend e DevOps.": {
      en: "Teaching ecosystem with augmented reality, connected lab, app and web dashboard. Embedded, backend and DevOps.",
      fr: "Écosystème pédagogique avec réalité augmentée, laboratoire connecté, application et tableau de bord web. Embarqué, backend et DevOps.",
      it: "Ecosistema didattico con realtà aumentata, laboratorio connesso, app e pannello web. Embedded, backend e DevOps." },
    "Campeão Utilidade e Melhor apresentação em inglês (2022) · Melhor projeto de Telecom (2023)": {
      en: "Utility category winner and Best presentation in English (2022) · Best Telecom project (2023)",
      fr: "Lauréat catégorie Utilité et Meilleure présentation en anglais (2022) · Meilleur projet Télécom (2023)",
      it: "Vincitore categoria Utilità e Miglior presentazione in inglese (2022) · Miglior progetto Telecom (2023)" },
    "SolarEyes — CubeSat estratosférico": { en: "SolarEyes — stratospheric CubeSat", fr: "SolarEyes — CubeSat stratosphérique", it: "SolarEyes — CubeSat stratosferico" },
    "Olimpíada Brasileira de Satélites (OBSAT-MCTI)": { en: "Brazilian Satellite Olympiad (OBSAT-MCTI)", fr: "Olympiade brésilienne des satellites (OBSAT-MCTI)", it: "Olimpiade Brasiliana dei Satelliti (OBSAT-MCTI)" },
    "Integração de OBC, EPS e telecom de uma sonda com carga útil de radiação gama, validada em voo de balão estratosférico.": {
      en: "Integration of the OBC, EPS and telecom of a probe with a gamma-radiation payload, validated on a stratospheric balloon flight.",
      fr: "Intégration de l'OBC, de l'EPS et des télécoms d'une sonde à charge utile de rayonnement gamma, validée lors d'un vol en ballon stratosphérique.",
      it: "Integrazione di OBC, EPS e telecomunicazioni di una sonda con payload per radiazione gamma, validata in un volo su pallone stratosferico." },
    "Campeão regional OBSAT 2023": { en: "OBSAT 2023 regional champion", fr: "Champion régional OBSAT 2023", it: "Campione regionale OBSAT 2023" },
    "Prêmio de Melhor Desempenho Acadêmico": { en: "Best Academic Performance Award", fr: "Prix de la meilleure performance académique", it: "Premio per il miglior rendimento accademico" },
    "Turma de 2024": { en: "Class of 2024", fr: "Promotion 2024", it: "Classe 2024" },
    "Maior honraria da escola, concedida a um único formando entre todos os cursos técnicos.": {
      en: "The school's highest honor, awarded to a single graduate across all technical programs.",
      fr: "La plus haute distinction de l'école, décernée à un seul diplômé parmi toutes les filières techniques.",
      it: "La massima onorificenza della scuola, conferita a un solo diplomato tra tutti i corsi tecnici." },
    "Melhor formando da turma": { en: "Top graduate of the class", fr: "Major de promotion", it: "Miglior diplomato della classe" },
    "Estagiário · Desenvolvimento de Software": { en: "Intern · Software Development", fr: "Stagiaire · Développement logiciel", it: "Tirocinante · Sviluppo software" },
    "Backend de APIs e serviços em Python e Flask, com integração a bancos de dados.": {
      en: "Backend APIs and services in Python and Flask, integrated with databases.",
      fr: "Backend d'API et de services en Python et Flask, intégrés aux bases de données.",
      it: "Backend di API e servizi in Python e Flask, integrati con database." },
    "Estagiário · Desenvolvimento": { en: "Intern · Development", fr: "Stagiaire · Développement", it: "Tirocinante · Sviluppo" },
    "Sistema completo de monitoramento e controle industrial via RS-485 (firmware, driver e app desktop), adotado no curso de Automação da ETE FMC.": {
      en: "Complete RS-485 industrial monitoring and control system (firmware, driver and desktop app), adopted in ETE FMC's Automation program.",
      fr: "Système complet de supervision et de contrôle industriel via RS-485 (firmware, driver et application de bureau), adopté dans la filière Automatisme de l'ETE FMC.",
      it: "Sistema completo di monitoraggio e controllo industriale via RS-485 (firmware, driver e app desktop), adottato nel corso di Automazione dell'ETE FMC." },
    "Estagiário · Desenvolvimento de Soluções": { en: "Intern · Solutions Development", fr: "Stagiaire · Développement de solutions", it: "Tirocinante · Sviluppo di soluzioni" },
    "ChamaInbox Brasil · Remoto": { en: "ChamaInbox Brasil · Remote", fr: "ChamaInbox Brasil · À distance", it: "ChamaInbox Brasil · Da remoto" },
    "Backend em Python: APIs, otimização de desempenho e integração com bancos de dados.": {
      en: "Python backend: APIs, performance optimization and database integration.",
      fr: "Backend en Python : API, optimisation des performances et intégration aux bases de données.",
      it: "Backend in Python: API, ottimizzazione delle prestazioni e integrazione con database." },

    // TRAJETÓRIA — UNIFEI
    "Universidade Federal de Itajubá": { en: "Federal University of Itajubá", fr: "Université fédérale d'Itajubá", it: "Università Federale di Itajubá" },
    "Engenharia Mecânica Aeronáutica": { en: "Aeronautical Mechanical Engineering", fr: "Génie mécanique aéronautique", it: "Ingegneria Meccanica Aeronautica" },
    "Ingresso em 2024": { en: "Enrolled in 2024", fr: "Entrée en 2024", it: "Immatricolazione nel 2024" },
    "Dinâmica de voo, controle e sistemas embarcados aplicados a drones, foguetes e hardware digital, com pesquisa no PET, GEMEC e LSA e artigos no COBEM e no CONEM.": {
      en: "Flight dynamics, control and embedded systems applied to drones, rockets and digital hardware, with research at PET, GEMEC and LSA and papers at COBEM and CONEM.",
      fr: "Dynamique du vol, contrôle et systèmes embarqués appliqués aux drones, aux fusées et au matériel numérique, avec de la recherche au PET, au GEMEC et au LSA et des articles au COBEM et au CONEM.",
      it: "Dinamica del volo, controllo e sistemi embedded applicati a droni, razzi e hardware digitale, con ricerca presso PET, GEMEC e LSA e articoli al COBEM e al CONEM." },
    "Membro de P&D · Beyond Aerospace": { en: "R&D Member · Beyond Aerospace", fr: "Membre R&D · Beyond Aerospace", it: "Membro R&S · Beyond Aerospace" },
    "Equipe de foguetemodelismo": { en: "Rocketry team", fr: "Équipe de fuséologie", it: "Squadra di razzomodellismo" },
    "Divisão de pesquisa e desenvolvimento da equipe de foguetes da universidade.": {
      en: "Research and development division of the university rocket team.",
      fr: "Division recherche et développement de l'équipe de fusées de l'université.",
      it: "Divisione ricerca e sviluppo della squadra di razzi dell'università." },
    "Líder de Telecomunicações · Beyond Aerospace": { en: "Telecommunications Lead · Beyond Aerospace", fr: "Responsable Télécommunications · Beyond Aerospace", it: "Responsabile Telecomunicazioni · Beyond Aerospace" },
    "Liderou telemetria e radiocomunicação: RF, integração de SDR, enlace com a estação de solo e dados de bordo em tempo real.": {
      en: "Led telemetry and radio communications: RF, SDR integration, ground-station link and real-time onboard data.",
      fr: "A dirigé la télémesure et les radiocommunications : RF, intégration SDR, liaison avec la station sol et données de bord en temps réel.",
      it: "Ha guidato telemetria e radiocomunicazioni: RF, integrazione SDR, collegamento con la stazione di terra e dati di bordo in tempo reale." },
    "Pesquisador de Graduação · PET Engenharia Mecânica": { en: "Undergraduate Researcher · PET Mechanical Engineering", fr: "Chercheur de premier cycle · PET Génie mécanique", it: "Ricercatore universitario · PET Ingegneria Meccanica" },
    "Controle de formação de nanodrones com controle robusto e identificação de quadrirrotores com redes neurais; artigos no COBEM 2025 e CONEM 2026.": {
      en: "Nanodrone formation control with robust control and quadrotor identification with neural networks; papers at COBEM 2025 and CONEM 2026.",
      fr: "Contrôle de formation de nanodrones par commande robuste et identification de quadrirotors par réseaux de neurones ; articles au COBEM 2025 et au CONEM 2026.",
      it: "Controllo di formazione di nanodroni con controllo robusto e identificazione di quadricotteri con reti neurali; articoli al COBEM 2025 e al CONEM 2026." },
    "Instrutor de Curso de Extensão": { en: "Extension Course Instructor", fr: "Formateur · cours d'extension universitaire", it: "Docente di corso di formazione" },
    "Curso de 16 h de Python para engenharia (NumPy, Pandas, SciPy, SymPy) com mais de 35 alunos.": {
      en: "16-hour Python for engineering course (NumPy, Pandas, SciPy, SymPy) with over 35 students.",
      fr: "Cours de 16 h de Python pour l'ingénierie (NumPy, Pandas, SciPy, SymPy) avec plus de 35 étudiants.",
      it: "Corso di 16 ore di Python per l'ingegneria (NumPy, Pandas, SciPy, SymPy) con oltre 35 studenti." },
    "Subsistema de GNC · Beyond Aerospace": { en: "GNC Subsystem · Beyond Aerospace", fr: "Sous-système GNC · Beyond Aerospace", it: "Sottosistema GNC · Beyond Aerospace" },
    "Fusão de sensores, estimação de estados, determinação de atitude e controle em tempo real com RTOS.": {
      en: "Sensor fusion, state estimation, attitude determination and real-time control with RTOS.",
      fr: "Fusion de capteurs, estimation d'état, détermination d'attitude et contrôle en temps réel sous RTOS.",
      it: "Fusione di sensori, stima dello stato, determinazione d'assetto e controllo in tempo reale con RTOS." },
    "Residente de Pesquisa · CI Expert": { en: "Research Resident · CI Expert", fr: "Résident de recherche · CI Expert", it: "Ricercatore residente · CI Expert" },
    "Microeletrônica · MCTI · Softex · UNIFEI": { en: "Microelectronics · MCTI · Softex · UNIFEI", fr: "Microélectronique · MCTI · Softex · UNIFEI", it: "Microelettronica · MCTI · Softex · UNIFEI" },
    "Síntese RTL e descrição de hardware; trilha de RTL Design de um processador multiciclo. Certificado em Síntese RTL (Purple Certification).": {
      en: "RTL synthesis and hardware description; RTL Design track of a multicycle processor. Certified in RTL Synthesis (Purple Certification).",
      fr: "Synthèse RTL et description matérielle ; volet RTL Design d'un processeur multicycle. Certifié en synthèse RTL (Purple Certification).",
      it: "Sintesi RTL e descrizione hardware; percorso RTL Design di un processore multiciclo. Certificato in Sintesi RTL (Purple Certification)." },
    "Pesquisador de Graduação · GEMEC": { en: "Undergraduate Researcher · GEMEC", fr: "Chercheur de premier cycle · GEMEC", it: "Ricercatore universitario · GEMEC" },
    "Pesquisa em dinâmica de voo e controle de veículos aéreos não tripulados.": {
      en: "Research in flight dynamics and control of unmanned aerial vehicles.",
      fr: "Recherche en dynamique du vol et contrôle de véhicules aériens sans pilote.",
      it: "Ricerca in dinamica del volo e controllo di veicoli aerei senza pilota." },
    "Estagiário · Engenharia de Sistemas": { en: "Intern · Systems Engineering", fr: "Stagiaire · Ingénierie des systèmes", it: "Tirocinante · Ingegneria dei sistemi" },
    "Cadernos de teste e protocolos de ensaio para um projeto estratégico; estudos de certificação MIL-STD-810, MIL-STD-901, RS101 e DO-254; ferramenta em Python para inteligência de mercado em defesa.": {
      en: "Test notebooks and test protocols for a strategic project; certification studies for MIL-STD-810, MIL-STD-901, RS101 and DO-254; Python tool for defense market intelligence.",
      fr: "Cahiers de tests et protocoles d'essai pour un projet stratégique ; études de certification MIL-STD-810, MIL-STD-901, RS101 et DO-254 ; outil Python de veille du marché de la défense.",
      it: "Quaderni di test e protocolli di prova per un progetto strategico; studi di certificazione MIL-STD-810, MIL-STD-901, RS101 e DO-254; strumento Python di market intelligence per la difesa." },

    // FOGUETE
    "Na equipe de foguetemodelismo da UNIFEI, passei por P&D, liderei o subsistema de **Telecomunicações** e trabalhei no subsistema de **Navegação, Guiamento e Controle**.": {
      en: "In UNIFEI's rocketry team, I went through R&D, led the **Telecommunications** subsystem and worked on the **Guidance, Navigation and Control** subsystem.",
      fr: "Au sein de l'équipe de fuséologie de l'UNIFEI, je suis passé par la R&D, j'ai dirigé le sous-système **Télécommunications** et travaillé sur le sous-système **Guidage, Navigation et Contrôle**.",
      it: "Nella squadra di razzomodellismo dell'UNIFEI sono passato per la R&S, ho guidato il sottosistema **Telecomunicazioni** e ho lavorato al sottosistema **Guida, Navigazione e Controllo**." },
    "Membro de P&D": { en: "R&D Member", fr: "Membre R&D", it: "Membro R&S" },
    "Líder de Telecomunicações": { en: "Telecommunications Lead", fr: "Responsable Télécommunications", it: "Responsabile Telecomunicazioni" },
    "Subsistema de GNC": { en: "GNC Subsystem", fr: "Sous-système GNC", it: "Sottosistema GNC" },

    // GRUPOS
    "Mecânica estrutural, vibrações, otimização, IA aplicada e leis de controle para aeronaves.": {
      en: "Structural mechanics, vibrations, optimization, applied AI and aircraft control laws.",
      fr: "Mécanique des structures, vibrations, optimisation, IA appliquée et lois de commande pour aéronefs.",
      it: "Meccanica strutturale, vibrazioni, ottimizzazione, IA applicata e leggi di controllo per velivoli." },
    "Dinâmica de voo, controle não linear e tolerância a falhas de veículos aéreos não tripulados.": {
      en: "Flight dynamics, nonlinear control and fault tolerance of unmanned aerial vehicles.",
      fr: "Dynamique du vol, commande non linéaire et tolérance aux pannes des véhicules aériens sans pilote.",
      it: "Dinamica del volo, controllo non lineare e tolleranza ai guasti dei veicoli aerei senza pilota." },

    // PUBLICAÇÕES
    "Congresso": { en: "Conference", fr: "Conférence", it: "Congresso" },
    "Periódico": { en: "Journal", fr: "Revue", it: "Rivista" },
    "Capítulo": { en: "Book chapter", fr: "Chapitre", it: "Capitolo" },
    "Apresentado pelo autor": { en: "Presented by the author", fr: "Présenté par l'auteur", it: "Presentato dall'autore" },
    "Currículo Lattes": { en: "Lattes CV", fr: "CV Lattes", it: "CV Lattes" },
    "Perfil GEMEC": { en: "GEMEC profile", fr: "Profil GEMEC", it: "Profilo GEMEC" },

    // PROJETOS
    "Controle de formação de nanodrones": { en: "Nanodrone formation control", fr: "Contrôle de formation de nanodrones", it: "Controllo di formazione di nanodroni" },
    "Enxame de nanodrones com controladores robustos, rastreamento de trajetória e filtragem de Kalman.": {
      en: "Nanodrone swarm with robust controllers, trajectory tracking and Kalman filtering.",
      fr: "Essaim de nanodrones avec contrôleurs robustes, suivi de trajectoire et filtrage de Kalman.",
      it: "Sciame di nanodroni con controllori robusti, inseguimento di traiettoria e filtraggio di Kalman." },
    "Artigo CONEM 2026": { en: "CONEM 2026 paper", fr: "Article CONEM 2026", it: "Articolo CONEM 2026" },
    "Artigo COBEM 2025": { en: "COBEM 2025 paper", fr: "Article COBEM 2025", it: "Articolo COBEM 2025" },
    "Identificação de quadrirrotores com redes neurais": { en: "Quadrotor identification with neural networks", fr: "Identification de quadrirotors par réseaux de neurones", it: "Identificazione di quadricotteri con reti neurali" },
    "Caracterização da dinâmica de voo por redes neurais, unindo modelagem, simulação e dados de voo.": {
      en: "Flight dynamics characterization with neural networks, combining modeling, simulation and flight data.",
      fr: "Caractérisation de la dynamique du vol par réseaux de neurones, alliant modélisation, simulation et données de vol.",
      it: "Caratterizzazione della dinamica del volo con reti neurali, unendo modellazione, simulazione e dati di volo." },
    "Carga útil de radiação gama com fotodiodos PIN de baixo custo, validada em voo de balão estratosférico.": {
      en: "Gamma-radiation payload with low-cost PIN photodiodes, validated on a stratospheric balloon flight.",
      fr: "Charge utile de rayonnement gamma avec photodiodes PIN à bas coût, validée lors d'un vol en ballon stratosphérique.",
      it: "Payload per radiazione gamma con fotodiodi PIN a basso costo, validato in un volo su pallone stratosferico." },
    "Processador multiciclo — CI Expert": { en: "Multicycle processor — CI Expert", fr: "Processeur multicycle — CI Expert", it: "Processore multiciclo — CI Expert" },
    "Residência em Microeletrônica": { en: "Microelectronics Residency", fr: "Résidence en microélectronique", it: "Residenza in Microelettronica" },
    "Processador parametrizado de 3 estágios, do RTL ao sign-off; trilha de RTL Design em Verilog.": {
      en: "Parameterized 3-stage processor, from RTL to sign-off; RTL Design track in Verilog.",
      fr: "Processeur paramétrable à 3 étages, du RTL au sign-off ; volet RTL Design en Verilog.",
      it: "Processore parametrizzato a 3 stadi, dall'RTL al sign-off; percorso RTL Design in Verilog." },
    "Interceptação de enxames": { en: "Swarm interception", fr: "Interception d'essaims", it: "Intercettazione di sciami" },
    "Estudo · Python": { en: "Study · Python", fr: "Étude · Python", it: "Studio · Python" },
    "Simulador de alocação de interceptadores contra enxames evasivos sob radar: 29 métodos e 60 cenários com terreno real.": {
      en: "Interceptor allocation simulator against evasive swarms under radar: 29 methods and 60 scenarios with real terrain.",
      fr: "Simulateur d'allocation d'intercepteurs contre des essaims évasifs sous radar : 29 méthodes et 60 scénarios sur terrain réel.",
      it: "Simulatore di allocazione di intercettori contro sciami evasivi sotto radar: 29 metodi e 60 scenari con terreno reale." },
    "Aplicação web que gera aerofólios NACA de 4 dígitos com distribuição de pressão e polares.": {
      en: "Web app that generates 4-digit NACA airfoils with pressure distribution and polars.",
      fr: "Application web qui génère des profils NACA à 4 chiffres avec distribution de pression et polaires.",
      it: "Applicazione web che genera profili alari NACA a 4 cifre con distribuzione di pressione e polari." },

    // COMPETÊNCIAS
    "Voo & Controle": { en: "Flight & Control", fr: "Vol & Contrôle", it: "Volo & Controllo" },
    "Programação": { en: "Programming", fr: "Programmation", it: "Programmazione" },
    "Engenharia": { en: "Engineering", fr: "Ingénierie", it: "Ingegneria" },
    "Dinâmica de voo": { en: "Flight dynamics", fr: "Dynamique du vol", it: "Dinamica del volo" },
    "Projeto de controle": { en: "Control design", fr: "Conception de commande", it: "Progettazione del controllo" },
    "Controle robusto": { en: "Robust control", fr: "Commande robuste", it: "Controllo robusto" },
    "Filtro de Kalman": { en: "Kalman filter", fr: "Filtre de Kalman", it: "Filtro di Kalman" },
    "Sistemas embarcados": { en: "Embedded systems", fr: "Systèmes embarqués", it: "Sistemi embedded" },
    "Eletrônica analógica/digital": { en: "Analog/digital electronics", fr: "Électronique analogique/numérique", it: "Elettronica analogica/digitale" },
    "PCI (Eagle)": { en: "PCB design (Eagle)", fr: "Circuits imprimés (Eagle)", it: "PCB (Eagle)" },
    "Engenharia de sistemas": { en: "Systems engineering", fr: "Ingénierie des systèmes", it: "Ingegneria dei sistemi" },
    "Elementos finitos": { en: "Finite elements", fr: "Éléments finis", it: "Elementi finiti" },
    "Português nativo · Inglês B1 · Francês B1": { en: "Portuguese (native) · English B1 · French B1", fr: "Portugais (langue maternelle) · Anglais B1 · Français B1", it: "Portoghese (madrelingua) · Inglese B1 · Francese B1" },

    // PRÊMIOS
    "Melhor Desempenho Acadêmico — Turma 2024": { en: "Best Academic Performance — Class of 2024", fr: "Meilleure performance académique — Promotion 2024", it: "Miglior rendimento accademico — Classe 2024" },
    "Campeão Regional — OBSAT-MCTI": { en: "Regional Champion — OBSAT-MCTI", fr: "Champion régional — OBSAT-MCTI", it: "Campione regionale — OBSAT-MCTI" },
    "Sonda CubeSat SolarEyes": { en: "SolarEyes CubeSat probe", fr: "Sonde CubeSat SolarEyes", it: "Sonda CubeSat SolarEyes" },
    "Melhor projeto de Telecomunicações": { en: "Best Telecommunications project", fr: "Meilleur projet de télécommunications", it: "Miglior progetto di Telecomunicazioni" },
    "Campeão categoria Utilidade": { en: "Utility category winner", fr: "Lauréat catégorie Utilité", it: "Vincitore categoria Utilità" },
    "Melhor apresentação em inglês": { en: "Best presentation in English", fr: "Meilleure présentation en anglais", it: "Miglior presentazione in inglese" },
    "Participação destacada Custom Brasil": { en: "Outstanding participation — Custom Brasil", fr: "Participation remarquée — Custom Brasil", it: "Partecipazione di rilievo — Custom Brasil" },
    "Reconhecimento empreendedor CP2": { en: "CP2 entrepreneurship recognition", fr: "Distinction entrepreneuriale CP2", it: "Riconoscimento imprenditoriale CP2" },
    "Prêmio Municipal de Inovação": { en: "Municipal Innovation Award", fr: "Prix municipal de l'innovation", it: "Premio comunale per l'innovazione" },
    "Campeão categoria Automação": { en: "Automation category winner", fr: "Lauréat catégorie Automatisation", it: "Vincitore categoria Automazione" },

    // CERTIFICAÇÕES
    "Síntese RTL": { en: "RTL Synthesis", fr: "Synthèse RTL", it: "Sintesi RTL" },
    "Introdução à Geopolítica Aeroespacial": { en: "Introduction to Aerospace Geopolitics", fr: "Introduction à la géopolitique aérospatiale", it: "Introduzione alla geopolitica aerospaziale" },
    "Agência Espacial Brasileira": { en: "Brazilian Space Agency", fr: "Agence spatiale brésilienne", it: "Agenzia Spaziale Brasiliana" },
    "Controle Usando Resposta em Frequência": { en: "Control Using Frequency Response", fr: "Commande par réponse fréquentielle", it: "Controllo mediante risposta in frequenza" },
    "Introdução ao Controle de Sistemas": { en: "Introduction to Control Systems", fr: "Introduction à la commande des systèmes", it: "Introduzione al controllo dei sistemi" },

    // CONTATO
    "Pesquisa, colaborações e projetos em dinâmica de voo, GNC, sistemas embarcados e engenharia aeroespacial.": {
      en: "Research, collaborations and projects in flight dynamics, GNC, embedded systems and aerospace engineering.",
      fr: "Recherche, collaborations et projets en dynamique du vol, GNC, systèmes embarqués et ingénierie aérospatiale.",
      it: "Ricerca, collaborazioni e progetti in dinamica del volo, GNC, sistemi embedded e ingegneria aerospaziale." }
  }
};
