/* =====================================================================
   DADOS DO CURRÍCULO — edite só este arquivo para atualizar o site.
   ---------------------------------------------------------------------
   • Escreva em português. Traduções (EN/FR/IT) ficam em idiomas.js;
     texto sem tradução aparece em português.
   • Texto entre **asteriscos duplos** vira negrito.
   • Para adicionar algo, copie um bloco { ... } parecido, cole acima
     (listas: mais recente primeiro) e troque o conteúdo.
   ===================================================================== */

window.DADOS = {

  /* ------------------------------ PERFIL ------------------------------ */
  perfil: {
    nome: "Otávio Zordan Alves",
    titulo: "Engenharia Mecânica Aeronáutica · GNC · Sistemas Embarcados",
    foto: "assets/otavio.jpg",
    local: "Itajubá · MG · Brasil",
    ficha: [
      { rotulo: "Graduação",  valor: "Eng. Mecânica Aeronáutica · UNIFEI" },
      { rotulo: "Técnico",    valor: "Telecomunicações · ETE FMC" },
      { rotulo: "Residência", valor: "Microeletrônica · CI Expert" }
    ],
    chamada: "Modelo, controlo e programo coisas que voam: de **nanodrones** a **foguetes**, passando pelo **hardware** que comanda cada um.",
    resumo: "Comecei pela eletrônica. Fiz o técnico em Telecomunicações na ETE FMC, em Santa Rita do Sapucaí, onde recebi o prêmio de melhor desempenho acadêmico da turma de 2024 e integrei a eletrônica de um CubeSat que voou num balão estratosférico. Na UNIFEI, em Engenharia Mecânica Aeronáutica, levei essa base para a dinâmica de voo e o controle: identifiquei a dinâmica de quadrirrotores com redes neurais, trabalhei no controle de formação de nanodrones, cuidei da telemetria e do GNC de um foguete universitário e projetei em RTL parte de um processador.",
    // auto: "publicacoes" conta sozinho
    fatos: [
      { rotulo: "Formação",       valor: "Eng. Mecânica Aeronáutica", sub: "UNIFEI · Itajubá" },
      { rotulo: "Técnico",        valor: "Telecomunicações",          sub: "ETE FMC · melhor desempenho 2024" },
      { rotulo: "Pesquisa",       auto: "publicacoes", sufixo: " publicações", sub: "COBEM 2025 · CONEM 2026" }
    ]
  },

  /* ----------------------------- CONTATOS -----------------------------
     icone: whatsapp | linkedin | email | github | lattes | researchgate
     Sem "texto", o botão mostra só o ícone.                              */
  contatos: [
    { icone: "whatsapp",     rotulo: "WhatsApp",     url: "https://wa.me/5535988000636" },
    { icone: "linkedin",     rotulo: "LinkedIn",     url: "https://www.linkedin.com/in/otavio-zordan" },
    { icone: "github",       rotulo: "GitHub",       url: "https://github.com/otaviozordan" },
    { icone: "lattes",       rotulo: "Lattes",       url: "http://lattes.cnpq.br/9155564516628230" },
    { icone: "researchgate", rotulo: "ResearchGate", url: "https://www.researchgate.net/profile/Otavio-Alves-4" },
    // "texto" faz o botão aparecer por extenso
    { icone: "email",        rotulo: "E-mail",       url: "mailto:otavio.zordan@outlook.com", texto: "otavio.zordan@outlook.com" }
  ],

  /* ----------------------------- FORMAÇÃO ----------------------------- */
  formacao: [
    { instituicao: "UNIFEI", nomeCompleto: "Universidade Federal de Itajubá", logo: "assets/logos/unifei.png",
      foto: "assets/fotos/unifei.jpg", fotoCredito: "@clebergoncalvesjr · gemec.unifei.edu.br",
      curso: "Engenharia Mecânica Aeronáutica", periodo: "Ingresso em 2024", local: "Itajubá · MG", site: "https://unifei.edu.br/",
      texto: "Dinâmica de voo, controle e sistemas embarcados aplicados a drones, foguetes e hardware digital, com pesquisa no PET, GEMEC e LSA e artigos no COBEM e no CONEM.",
      destaques: ["GEMEC · LSA · PET", "Beyond Aerospace", "CI Expert", "COBEM 2025 · CONEM 2026"] },
    { instituicao: "ETE FMC", nomeCompleto: "Escola Técnica de Eletrônica Francisco Moreira da Costa", logo: "assets/logos/ete.png",
      foto: "assets/fotos/ete.jpg", fotoCredito: "etefmc.com.br",
      curso: "Técnico em Telecomunicações", periodo: "2021 — 2024", local: "Santa Rita do Sapucaí · MG", site: "https://www.etefmc.com.br/",
      texto: "A primeira escola técnica de eletrônica da América Latina, no Vale da Eletrônica. Base em eletrônica analógica e digital, sistemas digitais, redes e telecomunicações, com projetos premiados desde o primeiro ano.",
      destaques: ["Melhor Desempenho Acadêmico 2024", "Campeão regional OBSAT", "~1.300 horas-aula"] }
  ],

  /* ---------------------- EXPERIÊNCIA PROFISSIONAL -------------------- */
  profissional: [
    { quando: "jan 2026", logo: "assets/logos/modirum.png", titulo: "Estagiário · Engenharia de Sistemas", local: "Modirum | Gespi",
      texto: "Cadernos de teste e protocolos de ensaio para um projeto estratégico; estudos de certificação MIL-STD-810, MIL-STD-901, RS101 e DO-254; ferramenta em Python para inteligência de mercado em defesa." },
    { quando: "jan — mar 2024", logo: "assets/logos/chamainbox.png", titulo: "Estagiário · Desenvolvimento de Soluções", local: "ChamaInbox Brasil · Remoto",
      texto: "Backend em Python: APIs, otimização de desempenho e integração com bancos de dados." },
    { quando: "jan — fev 2023", logo: "assets/logos/ceden.png", titulo: "Estagiário · Desenvolvimento", local: "CEDEN ETE FMC",
      texto: "Sistema completo de monitoramento e controle industrial via RS-485 (firmware, driver e app desktop), adotado no curso de Automação da ETE FMC." },
    { quando: "dez 2021 — jan 2022", logo: "assets/logos/chamainbox.png", titulo: "Estagiário · Desenvolvimento de Software", local: "ChamaInbox Brasil",
      texto: "Backend de APIs e serviços em Python e Flask, com integração a bancos de dados." }
  ],

  /* ----------------------- TRAJETÓRIA ACADÊMICA -----------------------
     Um bloco por instituição. foguete: true mostra o desenho do foguete. */
  academico: [
    { instituicao: "UNIFEI", foguete: true, itens: [
      { quando: "out 2026", logo: "assets/logos/gemec.png", titulo: "Pesquisador de Graduação · GEMEC", local: "Grupo de Estudos em Mecânica Experimental e Computacional",
        texto: "Pesquisa em dinâmica de voo e controle de veículos aéreos não tripulados." },
      { quando: "mar 2026 — mar 2027", logo: "assets/logos/ciexpert.png", titulo: "Residente de Pesquisa · CI Expert", local: "Microeletrônica · MCTI · Softex · UNIFEI",
        texto: "Síntese RTL e descrição de hardware; trilha de RTL Design de um processador multiciclo. Certificado em Síntese RTL (Purple Certification)." },
      { quando: "jan — out 2026", logo: "assets/logos/beyond.png", titulo: "Subsistema de GNC · Beyond Aerospace", local: "Equipe de foguetemodelismo",
        texto: "Fusão de sensores, estimação de estados, determinação de atitude e controle em tempo real com RTOS." },
      { quando: "out — dez 2025", logo: "assets/logos/pet.png", titulo: "Instrutor de Curso de Extensão", local: "PET Mecânica UNIFEI",
        texto: "Curso de 16 h de Python para engenharia (NumPy, Pandas, SciPy, SymPy) com mais de 35 alunos." },
      { quando: "jun 2025", logo: "assets/logos/pet.png", titulo: "Pesquisador de Graduação · PET Engenharia Mecânica", local: "PET Mecânica UNIFEI",
        texto: "Controle de formação de nanodrones com controle robusto e identificação de quadrirrotores com redes neurais; artigos no COBEM 2025 e CONEM 2026." },
      { quando: "jan — dez 2025", logo: "assets/logos/beyond.png", titulo: "Líder de Telecomunicações · Beyond Aerospace", local: "Equipe de foguetemodelismo",
        texto: "Liderou telemetria e radiocomunicação: RF, integração de SDR, enlace com a estação de solo e dados de bordo em tempo real." },
      { quando: "mar — dez 2024", logo: "assets/logos/beyond.png", titulo: "Membro de P&D · Beyond Aerospace", local: "Equipe de foguetemodelismo",
        texto: "Divisão de pesquisa e desenvolvimento da equipe de foguetes da universidade." }
    ] },
    { instituicao: "ETE FMC", itens: [
      { quando: "2024", logo: "assets/logos/ete.png", titulo: "Prêmio de Melhor Desempenho Acadêmico", local: "Turma de 2024",
        texto: "Maior honraria da escola, concedida a um único formando entre todos os cursos técnicos.", premio: "Melhor formando da turma" },
      { quando: "2023", logo: "assets/logos/obsat.png", titulo: "SolarEyes — CubeSat estratosférico", local: "Olimpíada Brasileira de Satélites (OBSAT-MCTI)",
        texto: "Integração de OBC, EPS e telecom de uma sonda com carga útil de radiação gama, validada em voo de balão estratosférico.", premio: "Campeão regional OBSAT 2023" },
      { quando: "mar — dez 2022", logo: "assets/logos/ete.png", titulo: "Monitor de Laboratório", local: "ETE FMC",
        texto: "Aulas de apoio em Algoritmos, Sistemas Digitais, Eletrônica Analógica e Eletricidade." }
    ] }
  ],

  /* ----------------------------- FOGUETE ------------------------------ */
  foguete: {
    equipe: "Beyond Aerospace",
    texto: "Na equipe de foguetemodelismo da UNIFEI, passei por P&D, liderei o subsistema de **Telecomunicações** e trabalhei no subsistema de **Navegação, Guiamento e Controle**.",
    cargos: [
      { ano: "2024", cargo: "Membro de P&D" },
      { ano: "2025", cargo: "Líder de Telecomunicações" },
      { ano: "2026", cargo: "Subsistema de GNC" }
    ]
  },

  /* --------------------- GRUPOS E LABORATÓRIOS ------------------------ */
  grupos: [
    { sigla: "GEMEC", nome: "Grupo de Estudos em Mecânica Experimental e Computacional",
      descricao: "Mecânica estrutural, vibrações, otimização, IA aplicada e leis de controle para aeronaves.",
      logo: "assets/logos/gemec.png", url: "https://gemec.unifei.edu.br/membro/otavio-zordan-alves/", site: "https://gemec.unifei.edu.br/" },
    { sigla: "LSA", nome: "Laboratório de Sistemas Aeronáuticos",
      descricao: "Dinâmica de voo, controle não linear e tolerância a falhas de veículos aéreos não tripulados.",
      logo: "assets/logos/lsa.png", url: "https://lsa.unifei.edu.br/", site: "https://lsa.unifei.edu.br/" }
  ],

  /* --------------------------- PUBLICAÇÕES ----------------------------
     tipo: "Congresso", "Periódico", "Capítulo"...                        */
  publicacoes: [
    { ano: 2026, tipo: "Congresso", titulo: "Formation Control of Nanodrones Using Robust Controller",
      autores: "**O. Zordan Alves**, J. I. Urzúa Ciolina, A. Ramos, O. A. Olanrewaju, Y. Diaz",
      evento: "XIII Congresso Nacional de Engenharia Mecânica (CONEM 2026)", sigla: "CONEM 2026", editora: "ABCM",
      nota: "Apresentado pelo autor", doi: "10.26678/abcm.conem2026.con26-0895" },
    { ano: 2025, tipo: "Congresso", titulo: "Quadrotor Dynamics Identification Using Neural Networks",
      autores: "**O. Zordan Alves**, G. de Paula Pinheiro, Y. Diaz",
      evento: "28th International Congress of Mechanical Engineering (COBEM 2025)", sigla: "COBEM 2025", editora: "ABCM",
      nota: "Apresentado pelo autor", doi: "10.26678/abcm.cobem2025.cob2025-1161" }
  ],

  /* ----------------------------- PROJETOS -----------------------------
     destaque: true aparece no site.
     icone: formacao, sysid, foguete, cubesat, radar, chip, aerofolio,
            altimetro, ar, rs485, farol, python                           */
  projetos: [
    { destaque: true, titulo: "Controle de formação de nanodrones", org: "PET · GEMEC · LSA", ano: "2025–26", icone: "formacao",
      descricao: "Enxame de nanodrones com controladores robustos, rastreamento de trajetória e filtragem de Kalman.",
      links: [{ rotulo: "Artigo CONEM 2026", url: "https://doi.org/10.26678/abcm.conem2026.con26-0895" }] },
    { destaque: true, titulo: "Identificação de quadrirrotores com redes neurais", org: "PET · GEMEC", ano: "2025", icone: "sysid",
      descricao: "Caracterização da dinâmica de voo por redes neurais, unindo modelagem, simulação e dados de voo.",
      links: [{ rotulo: "Artigo COBEM 2025", url: "https://doi.org/10.26678/abcm.cobem2025.cob2025-1161" }] },
    { destaque: true, titulo: "Processador multiciclo — CI Expert", org: "Residência em Microeletrônica", ano: "2026", icone: "chip",
      descricao: "Processador parametrizado de 3 estágios, do RTL ao sign-off; trilha de RTL Design em Verilog.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/ci-expert" }] },
    { destaque: true, titulo: "Interceptação de enxames", org: "Estudo · Python", ano: "2026", icone: "radar",
      descricao: "Simulador de alocação de interceptadores contra enxames evasivos sob radar: 29 métodos e 60 cenários com terreno real.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/estudo-interceptador" }] },
    { destaque: true, titulo: "SolarEyes — CubeSat estratosférico", org: "OBSAT-MCTI · ETE FMC", ano: "2023", icone: "cubesat",
      descricao: "Carga útil de radiação gama com fotodiodos PIN de baixo custo, validada em voo de balão estratosférico.",
      links: [] },
    { destaque: true, titulo: "NACA Airfoil Plotter", org: "CS50 · Harvard", ano: "2024", icone: "aerofolio",
      descricao: "Aplicação web que gera aerofólios NACA de 4 dígitos com distribuição de pressão e polares.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/NACA-Airfoil-Plotter" }] },

    // fora do site (mude destaque para true para exibir)
    { destaque: false, titulo: "Altímetro", org: "Software livre · GPL-3.0", ano: "2026", icone: "altimetro",
      descricao: "Métricas de grupos de pesquisa a partir do Currículo Lattes.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/altimetro-lattes" }] },
    { destaque: false, titulo: "Duck Protocol — RS-485", org: "CEDEN ETE FMC", ano: "2023", icone: "rs485",
      descricao: "Protocolo serial didático, firmware, driver e dashboard para redes industriais.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/Duck-Protocol" }] }
  ],

  /* -------------------------- COMPETÊNCIAS ---------------------------- */
  competencias: [
    { grupo: "Voo & Controle", itens: ["Dinâmica de voo", "Projeto de controle", "Controle robusto", "Filtro de Kalman", "System ID"] },
    { grupo: "Programação",    itens: ["Python", "C / C++", "MATLAB / Simulink", "Verilog · VHDL", "Git"] },
    { grupo: "Hardware",       itens: ["Sistemas embarcados", "FPGA & RTL", "Eletrônica analógica/digital", "PCI (Eagle)", "RF · SDR"] },
    { grupo: "Engenharia",     itens: ["Engenharia de sistemas", "Elementos finitos", "SolidWorks", "DO-254 · MIL-STD", "RTOS"] }
  ],
  idiomas: "Português nativo · Inglês B1 · Francês B1",

  // Aparece recolhido em "Cursos e certificações"
  certificacoes: [
    { titulo: "Kalman Filter Boot Camp (and State Estimation)", org: "University of Colorado Boulder", ano: "2026" },
    { titulo: "Síntese RTL", org: "Purple Certification Brazil", ano: "2026" },
    { titulo: "Introduction to FPGA Design for Embedded Systems", org: "University of Colorado Boulder", ano: "2025" },
    { titulo: "Systems Engineering", org: "MathWorks", ano: "2025" },
    { titulo: "Introdução à Geopolítica Aeroespacial", org: "Agência Espacial Brasileira", ano: "2025" },
    { titulo: "Flight Mechanics: From Theory to Certification", org: "Udemy · FAA Part 25", ano: "2025" },
    { titulo: "Controle Usando Resposta em Frequência", org: "ITA", ano: "2025" },
    { titulo: "Flight Mechanics: Propulsive Balance and Energy", org: "ISAE-SUPAERO", ano: "2025" },
    { titulo: "Introdução ao Controle de Sistemas", org: "ITA", ano: "2024" },
    { titulo: "CS50 Introduction to Computer Science", org: "Harvard University", ano: "2024" }
  ]
};
