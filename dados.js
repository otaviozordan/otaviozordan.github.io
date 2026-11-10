/* =====================================================================
   DADOS DO SITE — edite só este arquivo para atualizar o portfólio.
   ---------------------------------------------------------------------
   • Texto entre **asteriscos duplos** vira negrito.
   • Para adicionar algo, copie um bloco { ... } parecido, cole ao lado
     e troque o conteúdo. Não esqueça a vírgula entre os blocos.
   • Trajetória: itens em ordem cronológica (mais antigo primeiro).
   • Contadores de publicações e prêmios são automáticos.
   ===================================================================== */

window.DADOS = {

  /* ------------------------------ PERFIL ------------------------------ */
  perfil: {
    nome: "Otávio Zordan Alves",
    titulo: "Engenharia Mecânica Aeronáutica · GNC · Sistemas Embarcados",
    foto: "assets/otavio.jpg",
    chamada: "Engenharia na fronteira entre **dinâmica de voo**, **controle** e **hardware**: do modelo matemático ao firmware que voa.",
    resumo: "Formação em Engenharia Mecânica Aeronáutica pela **UNIFEI** e técnico em Telecomunicações pela **ETE FMC**. Pesquisa em dinâmica e controle de drones, GNC de foguetes, microeletrônica e engenharia de sistemas.",
    ficha: [
      { rotulo: "Base",   valor: "Itajubá · MG" },
      { rotulo: "Curso",  valor: "Eng. Aeronáutica" },
      { rotulo: "Grupos", valor: "GEMEC · LSA · PET" },
      { rotulo: "Equipe", valor: "Beyond Aerospace" }
    ],
    // Fatos rápidos logo abaixo do topo. auto: "publicacoes" | "premios"
    fatos: [
      { rotulo: "Formação",       valor: "Eng. Mecânica Aeronáutica", sub: "UNIFEI · Itajubá" },
      { rotulo: "Técnico",        valor: "Telecomunicações",          sub: "ETE FMC · melhor desempenho 2024" },
      { rotulo: "Pesquisa",       auto: "publicacoes", sufixo: " publicações", sub: "Dinâmica e controle de VANTs" },
      { rotulo: "Reconhecimento", auto: "premios",     sufixo: " prêmios",     sub: "OBSAT · PROJETE · Inovação" }
    ]
  },

  /* ---------------------------- TRAJETÓRIA ----------------------------
     Cada fase tem duas trilhas: academico e profissional.
     premio: (opcional) aparece com estrela.                              */
  trajetoria: [
    {
      fase: "01",
      instituicao: "ETE FMC",
      nomeCompleto: "Escola Técnica de Eletrônica Francisco Moreira da Costa",
      curso: "Técnico em Telecomunicações",
      periodo: "2021 — 2024",
      local: "Santa Rita do Sapucaí · MG",
      site: "https://www.etefmc.com.br/",
      resumo: "A primeira escola técnica de eletrônica da América Latina, no Vale da Eletrônica. Base em eletrônica analógica e digital, sistemas digitais, redes e telecomunicações, com projetos premiados desde o primeiro ano.",
      destaques: ["Melhor Desempenho Acadêmico 2024", "Campeão regional OBSAT", "~1.300 horas-aula"],
      academico: [
        { quando: "2021", titulo: "Ajuste Dinâmico de Faróis Automotivos", local: "PROJETE 2021",
          texto: "Líder da equipe e programador de um sistema embarcado que corrige automaticamente o facho dos faróis.",
          premio: "Campeão Automação · Prêmio Municipal de Inovação" },
        { quando: "mar — dez 2022", titulo: "Monitor de Laboratório", local: "ETE FMC",
          texto: "Aulas de apoio em Algoritmos, Sistemas Digitais, Eletrônica Analógica e Eletricidade." },
        { quando: "2022 — 2023", titulo: "ARduck — realidade aumentada para eletrônica", local: "PROJETE",
          texto: "Ecossistema de ensino com realidade aumentada, laboratório conectado, app e painel web. Embarcados, backend e DevOps.",
          premio: "Campeão Utilidade e Melhor apresentação em inglês (2022) · Melhor projeto de Telecom (2023)" },
        { quando: "2023", titulo: "SolarEyes — CubeSat estratosférico", local: "Olimpíada Brasileira de Satélites (OBSAT-MCTI)",
          texto: "Integração de OBC, EPS e telecom de uma sonda com carga útil de radiação gama, validada em voo de balão estratosférico.",
          premio: "Campeão regional OBSAT 2023" },
        { quando: "2024", titulo: "Prêmio de Melhor Desempenho Acadêmico", local: "Turma de 2024",
          texto: "Maior honraria da escola, concedida a um único formando entre todos os cursos técnicos.",
          premio: "Melhor formando da turma" }
      ],
      profissional: [
        { quando: "dez 2021 — jan 2022", titulo: "Estagiário · Desenvolvimento de Software", local: "ChamaInbox Brasil",
          texto: "Backend de APIs e serviços em Python e Flask, com integração a bancos de dados." },
        { quando: "jan — fev 2023", titulo: "Estagiário · Desenvolvimento", local: "CEDEN ETE FMC",
          texto: "Sistema completo de monitoramento e controle industrial via RS-485 (firmware, driver e app desktop), adotado no curso de Automação da ETE FMC." },
        { quando: "jan — mar 2024", titulo: "Estagiário · Desenvolvimento de Soluções", local: "ChamaInbox Brasil · Remoto",
          texto: "Backend em Python: APIs, otimização de desempenho e integração com bancos de dados." }
      ]
    },
    {
      fase: "02",
      instituicao: "UNIFEI",
      nomeCompleto: "Universidade Federal de Itajubá",
      curso: "Engenharia Mecânica Aeronáutica",
      periodo: "Ingresso em 2024",
      local: "Itajubá · MG",
      site: "https://unifei.edu.br/",
      resumo: "Dinâmica de voo, controle e sistemas embarcados aplicados a drones, foguetes e hardware digital, com pesquisa no PET, GEMEC e LSA e artigos no COBEM e no CONEM.",
      destaques: ["GEMEC · LSA · PET", "Beyond Aerospace", "CI Expert", "COBEM 2025 · CONEM 2026"],
      academico: [
        { quando: "mar — dez 2024", titulo: "Membro de P&D · Beyond Aerospace Department", local: "Equipe de foguetemodelismo",
          texto: "Divisão de pesquisa e desenvolvimento da equipe de foguetes da universidade." },
        { quando: "jan — dez 2025", titulo: "Líder de Telecomunicações · Beyond Aerospace", local: "Equipe de foguetemodelismo",
          texto: "Liderou telemetria e radiocomunicação: RF, integração de SDR, enlace com a estação de solo e dados de bordo em tempo real." },
        { quando: "jun 2025", titulo: "Pesquisador de Graduação · PET Engenharia Mecânica", local: "PET Mecânica UNIFEI",
          texto: "Controle de formação de nanodrones com controle robusto e identificação de quadrirrotores com redes neurais; artigos no COBEM 2025 e CONEM 2026." },
        { quando: "out — dez 2025", titulo: "Instrutor de Curso de Extensão", local: "PET Mecânica UNIFEI",
          texto: "Curso de 16 h de Python para engenharia (NumPy, Pandas, SciPy, SymPy) com mais de 35 alunos." },
        { quando: "jan — out 2026", titulo: "Subsistema de GNC · Beyond Aerospace", local: "Equipe de foguetemodelismo",
          texto: "Fusão de sensores, estimação de estados, determinação de atitude e controle em tempo real com RTOS." },
        { quando: "mar 2026 — mar 2027", titulo: "Residente de Pesquisa · CI Expert", local: "Microeletrônica · MCTI · Softex · UNIFEI",
          texto: "Síntese RTL e descrição de hardware; trilha de RTL Design de um processador multiciclo. Certificado em Síntese RTL (Purple Certification)." },
        { quando: "out 2026", titulo: "Pesquisador de Graduação · GEMEC", local: "Grupo de Estudos em Mecânica Experimental e Computacional",
          texto: "Pesquisa em dinâmica de voo e controle de veículos aéreos não tripulados." }
      ],
      profissional: [
        { quando: "jan 2026", titulo: "Estagiário · Engenharia de Sistemas", local: "Modirum | Gespi",
          texto: "Cadernos de teste e protocolos de ensaio para um projeto estratégico; estudos de certificação MIL-STD-810, MIL-STD-901, RS101 e DO-254; ferramenta em Python para inteligência de mercado em defesa." }
      ],
      foguete: true   // mostra o bloco do foguete nesta fase
    }
  ],

  /* ----------------------------- FOGUETE ------------------------------ */
  foguete: {
    equipe: "Beyond Aerospace Department",
    texto: "Na equipe de foguetemodelismo da UNIFEI, passei por P&D, liderei o subsistema de **Telecomunicações** e trabalhei no subsistema de **Navegação, Guiamento e Controle**.",
    cargos: [
      { ano: "2024", cargo: "Membro de P&D" },
      { ano: "2025", cargo: "Líder de Telecomunicações" },
      { ano: "2026", cargo: "Subsistema de GNC" }
    ],
    url: ""   // site/Instagram da equipe (opcional)
  },

  /* --------------------- GRUPOS E LABORATÓRIOS ------------------------ */
  grupos: [
    { sigla: "GEMEC", nome: "Grupo de Estudos em Mecânica Experimental e Computacional",
      descricao: "Mecânica estrutural, vibrações, otimização, IA aplicada e leis de controle para aeronaves.",
      logo: "assets/gemec.png", url: "https://gemec.unifei.edu.br/membro/otavio-zordan-alves/", site: "https://gemec.unifei.edu.br/" },
    { sigla: "LSA", nome: "Laboratório de Sistemas Aeronáuticos",
      descricao: "Dinâmica de voo, controle não linear e tolerância a falhas de veículos aéreos não tripulados.",
      logo: "assets/lsa.png", url: "https://lsa.unifei.edu.br/", site: "https://lsa.unifei.edu.br/" }
  ],

  /* --------------------------- PUBLICAÇÕES ----------------------------
     tipo: "Congresso", "Periódico", "Capítulo", "Resumo", "Pôster"...    */
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
  perfisAcademicos: [
    { rotulo: "Currículo Lattes", url: "http://lattes.cnpq.br/9155564516628230" },
    { rotulo: "ResearchGate",     url: "https://www.researchgate.net/profile/Otavio-Alves-4" },
    { rotulo: "Perfil GEMEC",     url: "https://gemec.unifei.edu.br/membro/otavio-zordan-alves/" },
    { rotulo: "LSA",              url: "https://lsa.unifei.edu.br/" }
  ],

  /* ----------------------------- PROJETOS -----------------------------
     destaque: true aparece no site (recomendado: até 6).
     icone: formacao, sysid, foguete, cubesat, radar, chip, aerofolio,
            altimetro, ar, rs485, farol, python                           */
  projetos: [
    { destaque: true, titulo: "Controle de formação de nanodrones", org: "PET · GEMEC · LSA", ano: "2025–26", icone: "formacao",
      descricao: "Enxame de nanodrones com controladores robustos, rastreamento de trajetória e filtragem de Kalman.",
      links: [{ rotulo: "Artigo CONEM 2026", url: "https://doi.org/10.26678/abcm.conem2026.con26-0895" }] },
    { destaque: true, titulo: "Identificação de quadrirrotores com redes neurais", org: "PET · GEMEC", ano: "2025", icone: "sysid",
      descricao: "Caracterização da dinâmica de voo por redes neurais, unindo modelagem, simulação e dados de voo.",
      links: [{ rotulo: "Artigo COBEM 2025", url: "https://doi.org/10.26678/abcm.cobem2025.cob2025-1161" }] },
    { destaque: true, titulo: "SolarEyes — CubeSat estratosférico", org: "OBSAT-MCTI · ETE FMC", ano: "2023", icone: "cubesat",
      descricao: "Carga útil de radiação gama com fotodiodos PIN de baixo custo, validada em voo de balão estratosférico.",
      links: [] },
    { destaque: true, titulo: "Processador multiciclo — CI Expert", org: "Residência em Microeletrônica", ano: "2026", icone: "chip",
      descricao: "Processador parametrizado de 3 estágios, do RTL ao sign-off; trilha de RTL Design em Verilog.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/ci-expert" }] },
    { destaque: true, titulo: "Interceptação de enxames", org: "Estudo · Python", ano: "2026", icone: "radar",
      descricao: "Simulador de alocação de interceptadores contra enxames evasivos sob radar: 29 métodos e 60 cenários com terreno real.",
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/estudo-interceptador" }] },
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

  premios: [
    { titulo: "Melhor Desempenho Acadêmico — Turma 2024", org: "ETE FMC", ano: "2024" },
    { titulo: "Campeão Regional — OBSAT-MCTI", org: "Sonda CubeSat SolarEyes", ano: "2023" },
    { titulo: "Melhor projeto de Telecomunicações", org: "PROJETE 2023 · ARduck", ano: "2023" },
    { titulo: "Campeão categoria Utilidade", org: "PROJETE 2022 · ARduck", ano: "2022" },
    { titulo: "Melhor apresentação em inglês", org: "PROJETE 2022 · ARduck", ano: "2022" },
    { titulo: "Participação destacada Custom Brasil", org: "PROJETE 2022", ano: "2022" },
    { titulo: "Reconhecimento empreendedor CP2", org: "PROJETE 2022", ano: "2022" },
    { titulo: "Prêmio Municipal de Inovação", org: "Santa Rita do Sapucaí", ano: "2021" },
    { titulo: "Campeão categoria Automação", org: "PROJETE 2021", ano: "2021" }
  ],

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
  ],

  /* ----------------------------- CONTATO ------------------------------ */
  contato: {
    chamada: "Pesquisa, colaborações e projetos em dinâmica de voo, GNC, sistemas embarcados e engenharia aeroespacial.",
    links: [
      { rotulo: "E-mail",   texto: "otaviozordan@gmail.com",  url: "mailto:otaviozordan@gmail.com" },
      { rotulo: "LinkedIn", texto: "in/otavio-zordan",        url: "https://www.linkedin.com/in/otavio-zordan" },
      { rotulo: "GitHub",   texto: "github.com/otaviozordan", url: "https://github.com/otaviozordan" },
      { rotulo: "Lattes",   texto: "9155564516628230",        url: "http://lattes.cnpq.br/9155564516628230" }
    ]
  }
};
