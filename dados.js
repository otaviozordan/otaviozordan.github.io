/* =====================================================================
   DADOS DO SITE — edite só este arquivo para atualizar o portfólio.
   ---------------------------------------------------------------------
   • Texto entre **asteriscos duplos** vira negrito.
   • Para adicionar algo, copie um bloco { ... } parecido, cole logo
     abaixo e troque o conteúdo. Não esqueça a vírgula entre os blocos.
   • Listas mais recentes primeiro (o site não reordena, exceto as
     publicações, que são ordenadas por ano automaticamente).
   • Números de "Publicações" e "Prêmios" são contados automaticamente.
   ===================================================================== */

window.DADOS = {

  /* ------------------------------ PERFIL ------------------------------ */
  perfil: {
    nome: "Otávio Zordan Alves",
    titulo: "Engenharia Mecânica Aeronáutica · GNC · Sistemas Embarcados",
    status: "Em voo · UNIFEI · 6º período",
    foto: "assets/otavio.jpg",
    chamada: "Trabalho na fronteira entre **dinâmica de voo**, **controle** e **hardware**: identifico e controlo drones com redes neurais e controle robusto, projeto o GNC de foguetes e desço até o RTL para fazer o silício. Do modelo matemático ao firmware que voa.",
    ficha: [
      { rotulo: "Base",   valor: "Itajubá · MG" },
      { rotulo: "Curso",  valor: "Eng. Aeronáutica" },
      { rotulo: "Grupos", valor: "GEMEC · LSA · PET" },
      { rotulo: "Equipe", valor: "Beyond · GNC" }
    ],
    sobre: [
      "Sou graduando em **Engenharia Mecânica Aeronáutica na Universidade Federal de Itajubá (UNIFEI)** e técnico em Telecomunicações pela **ETE FMC**, a primeira escola técnica de eletrônica da América Latina, onde recebi o **Prêmio de Melhor Desempenho Acadêmico** da turma de 2024.",
      "Pesquiso dinâmica e controle de veículos aéreos não tripulados no **PET Engenharia Mecânica**, no **GEMEC** e no **LSA**. Na equipe de foguetemodelismo **Beyond Rocket Design** sou responsável pelo subsistema de Navegação, Guiamento e Controle.",
      "Fui selecionado como **Residente de Pesquisa em Graduação no CI Expert** (MCTI · Softex · UNIFEI), em microeletrônica, e atuei em engenharia de sistemas de um projeto de defesa para a **Marinha do Brasil**."
    ],
    interesses: [
      "Dinâmica de voo, modelagem e simulação",
      "Controle robusto, clássico e de formação",
      "Estimação de estados e filtragem de Kalman",
      "Identificação de sistemas com redes neurais",
      "GNC de foguetes e determinação de atitude",
      "Software embarcado, FPGA e RTL",
      "Engenharia de sistemas e certificação (DO-254, MIL-STD)"
    ],
    // auto: "publicacoes" ou "premios" conta sozinho; senão use valor
    numeros: [
      { valor: 8.4, casas: 1, rotulo: "Média ponderada /10" },
      { auto: "publicacoes", rotulo: "Publicações" },
      { auto: "premios", rotulo: "Prêmios e distinções" },
      { valor: 35, sufixo: "+", rotulo: "Alunos instruídos" }
    ]
  },

  /* --------------------- GRUPOS E LABORATÓRIOS ------------------------ */
  grupos: [
    {
      sigla: "GEMEC",
      nome: "Grupo de Estudos em Mecânica Experimental e Computacional",
      descricao: "Mecânica estrutural, vibrações, otimização, IA aplicada e leis de controle para aeronaves.",
      logo: "assets/gemec.png",
      url: "https://gemec.unifei.edu.br/membro/otavio-zordan-alves/",
      site: "https://gemec.unifei.edu.br/"
    },
    {
      sigla: "LSA",
      nome: "Laboratório de Sistemas Aeronáuticos",
      descricao: "Dinâmica de voo, controle não linear e tolerância a falhas de veículos aéreos não tripulados.",
      logo: "assets/lsa.png",
      url: "https://lsa.unifei.edu.br/",
      site: "https://lsa.unifei.edu.br/"
    }
  ],

  /* --------------------------- PUBLICAÇÕES ----------------------------
     tipo: "Congresso", "Periódico", "Capítulo", "Resumo", "Pôster"...    */
  publicacoes: [
    {
      ano: 2026,
      tipo: "Congresso",
      titulo: "Formation Control of Nanodrones Using Robust Controller",
      autores: "**O. Zordan Alves**, J. I. Urzúa Ciolina, A. Ramos, O. A. Olanrewaju, Y. Diaz",
      evento: "XIII Congresso Nacional de Engenharia Mecânica (CONEM 2026)",
      sigla: "CONEM 2026",
      editora: "ABCM",
      nota: "Apresentado pelo autor",
      doi: "10.26678/abcm.conem2026.con26-0895"
    },
    {
      ano: 2025,
      tipo: "Congresso",
      titulo: "Quadrotor Dynamics Identification Using Neural Networks",
      autores: "**O. Zordan Alves**, G. de Paula Pinheiro, Y. Diaz",
      evento: "28th International Congress of Mechanical Engineering (COBEM 2025)",
      sigla: "COBEM 2025",
      editora: "ABCM",
      nota: "Apresentado pelo autor",
      doi: "10.26678/abcm.cobem2025.cob2025-1161"
    }
  ],
  perfisAcademicos: [
    { rotulo: "Currículo Lattes", url: "http://lattes.cnpq.br/9155564516628230" },
    { rotulo: "ResearchGate",     url: "https://www.researchgate.net/profile/Otavio-Alves-4" },
    { rotulo: "Perfil GEMEC",     url: "https://gemec.unifei.edu.br/membro/otavio-zordan-alves/" },
    { rotulo: "LSA",              url: "https://lsa.unifei.edu.br/" }
  ],

  /* ----------------------- CARREIRA ACADÊMICA ------------------------- */
  academico: [
    {
      id: "unifei",
      aba: "UNIFEI",
      instituicao: "Universidade Federal de Itajubá",
      curso: "Bacharelado em Engenharia Mecânica Aeronáutica",
      periodo: "2024 — 2028 (previsto)",
      site: "https://unifei.edu.br/",
      destaques: ["Média ponderada 8,4/10", "48 disciplinas · sem reprovações", "6º período"],
      itens: [
        { quando: "mar 2026 — mar 2027", titulo: "Residente de Pesquisa em Graduação · CI Expert", local: "Residência em Microeletrônica · MCTI · Softex · UNIFEI",
          pontos: ["Síntese RTL e linguagens de descrição de hardware; trilha de RTL Design do processador multiciclo.", "Certificado na trilha de Síntese RTL da Purple Certification Brazil."] },
        { quando: "2026 — hoje", titulo: "Responsável pelo GNC · Beyond Rocket Design", local: "Equipe de foguetemodelismo",
          pontos: ["Navegação, guiamento e controle: fusão de sensores, estimação de estados, determinação de atitude e projeto de controle."] },
        { quando: "jun 2025 — hoje", titulo: "Pesquisador Discente · PET Engenharia Mecânica", local: "PET Mecânica · GEMEC · LSA",
          pontos: ["Controle de formação de nanodrones com controle robusto (CONEM 2026).", "Identificação da dinâmica de quadrirrotores com redes neurais (COBEM 2025).", "Posicionamento e rastreamento de trajetória com controle clássico e filtragem de Kalman."] },
        { quando: "out — dez 2025", titulo: "Instrutor de Curso de Extensão", local: "PET Engenharia Mecânica",
          pontos: ["Curso de 16 h de Python para engenharia (NumPy, Pandas, SciPy, SymPy), com mais de 35 alunos."] },
        { quando: "2025", titulo: "Diretor de Telecomunicações · Beyond Rocket Design", local: "Equipe de foguetemodelismo",
          pontos: ["Liderou telemetria e radiocomunicação: enlace com a estação de solo e transmissão de dados de bordo."] },
        { quando: "2024", titulo: "Membro de P&D · Beyond Rocket Design", local: "Equipe de foguetemodelismo",
          pontos: ["Divisão de pesquisa e desenvolvimento da equipe."] }
      ]
    },
    {
      id: "ete",
      aba: "ETE FMC",
      instituicao: "Escola Técnica de Eletrônica Francisco Moreira da Costa",
      curso: "Técnico em Telecomunicações",
      periodo: "2021 — 2024",
      site: "https://www.etefmc.com.br/",
      destaques: ["Melhor Desempenho Acadêmico 2024", "~1.300 horas-aula", "Santa Rita do Sapucaí"],
      itens: [
        { quando: "2024", titulo: "Prêmio de Melhor Desempenho Acadêmico", local: "Turma de 2024",
          pontos: ["Maior honraria da escola, concedida a um único formando entre todos os cursos técnicos."] },
        { quando: "2023", titulo: "SolarEyes — CubeSat estratosférico", local: "Olimpíada Brasileira de Satélites (OBSAT-MCTI)",
          pontos: ["Integração de OBC, EPS e telecomunicações; carga útil de radiação gama com fotodiodos PIN.", "Campeão regional da OBSAT 2023."] },
        { quando: "2022 — 2023", titulo: "ARduck — Realidade aumentada para eletrônica", local: "PROJETE",
          pontos: ["Embarcados, backend, integrações e DevOps (Flask e Docker).", "Campeão Utilidade e Melhor apresentação em inglês (2022); melhor projeto de Telecom (2023)."] },
        { quando: "mar — dez 2022", titulo: "Monitor de Laboratório", local: "ETE FMC",
          pontos: ["Aulas de apoio em Algoritmos, Sistemas Digitais, Eletrônica Analógica e Eletricidade."] },
        { quando: "2021", titulo: "Ajuste Dinâmico de Faróis Automotivos", local: "PROJETE 2021",
          pontos: ["Líder da equipe e programador; campeão em Automação e Prêmio Municipal de Inovação."] },
        { quando: "2021 — 2023", titulo: "Cursos de curta duração · Inatel", local: "Instituto Nacional de Telecomunicações",
          pontos: ["Pequenos satélites, redes ópticas, IoT, Python e IA, VoIP, SDH, Flutter, Eagle e PCI, SolidWorks, CTF Telecom Challenge."] }
      ]
    }
  ],

  /* ---------------------- CARREIRA PROFISSIONAL ----------------------- */
  profissional: [
    { quando: "jan 2026", titulo: "Estagiário · Engenharia de Sistemas", local: "Modirum | Gespi · Santa Rita do Sapucaí",
      pontos: ["Projeto estratégico de defesa para a Marinha do Brasil, em produto eletrônico embarcado com requisitos de qualificação militar.",
               "Cadernos de teste e protocolos de ensaio para verificação.",
               "Estudos de certificação: MIL-STD-810, MIL-STD-901, RS101 e DO-254.",
               "Ferramenta em Python com interface gráfica para inteligência de mercado sobre aquisições de Forças Armadas."] },
    { quando: "jan — mar 2024", titulo: "Estagiário · Desenvolvimento de Soluções", local: "ChamaInbox Brasil · Remoto",
      pontos: ["Backend em Python: endpoints, otimização de desempenho e integração com bancos de dados."] },
    { quando: "jan — fev 2023", titulo: "Estagiário · Desenvolvimento", local: "CEDEN ETE FMC · Centro de Desenvolvimento e Negócios",
      pontos: ["Sistema completo de monitoramento e controle de equipamentos industriais via RS-485: firmware, driver e aplicação desktop.",
               "Adotado no curso de Controle e Automação Industrial da ETE FMC."] },
    { quando: "dez 2021 — jan 2022", titulo: "Estagiário · Desenvolvimento de Software", local: "ChamaInbox Brasil · Santa Rita do Sapucaí",
      pontos: ["APIs e serviços em Python com integração a bancos de dados."] }
  ],

  /* ----------------------------- FOGUETES ----------------------------- */
  foguete: {
    equipe: "Beyond Rocket Design",
    texto: "Na equipe de foguetemodelismo da UNIFEI, passei por P&D e pela diretoria de Telecomunicações até assumir o subsistema de **Navegação, Guiamento e Controle**: fusão de sensores, estimação de estados, determinação de atitude e projeto de controle.",
    cargos: [
      { ano: "2026 —", cargo: "Responsável pelo GNC" },
      { ano: "2025",   cargo: "Diretor de Telecomunicações" },
      { ano: "2024",   cargo: "Membro de P&D" }
    ],
    url: ""   // coloque aqui o site/Instagram da equipe, se quiser
  },

  /* ----------------------------- PROJETOS -----------------------------
     icone: formacao, sysid, foguete, cubesat, radar, chip, aerofolio,
            altimetro, ar, rs485, farol, python  (ou deixe vazio)
     imagem: caminho de uma foto (opcional, substitui o ícone)
     origem: "UNIFEI", "ETE FMC", "Profissional" ou "Pessoal"          */
  projetos: [
    { titulo: "Controle de formação de nanodrones", org: "PET Mecânica · GEMEC · LSA", ano: "2025–26", origem: "UNIFEI", icone: "formacao",
      categorias: ["Voo & Controle"],
      descricao: "Controle de formação de enxame de nanodrones com controladores robustos, além de posicionamento e rastreamento de trajetória com controle clássico e filtragem de Kalman.",
      tags: ["Controle robusto", "Kalman", "MATLAB/Simulink"],
      links: [{ rotulo: "Artigo CONEM 2026", url: "https://doi.org/10.26678/abcm.conem2026.con26-0895" }] },

    { titulo: "Identificação da dinâmica de quadrirrotores", org: "PET Mecânica · GEMEC", ano: "2025", origem: "UNIFEI", icone: "sysid",
      categorias: ["Voo & Controle"],
      descricao: "Caracterização da dinâmica de voo de um quadrirrotor por redes neurais, unindo modelagem matemática, simulação e análise de dados de voo.",
      tags: ["System ID", "Redes neurais", "Python"],
      links: [{ rotulo: "Artigo COBEM 2025", url: "https://doi.org/10.26678/abcm.cobem2025.cob2025-1161" }] },

    { titulo: "GNC de foguete — Beyond Rocket Design", org: "Foguetemodelismo · UNIFEI", ano: "2024–hoje", origem: "UNIFEI", icone: "foguete",
      categorias: ["Voo & Controle", "Espaço"],
      descricao: "Navegação, guiamento e controle: fusão de sensores, estimação de estados e determinação de atitude. Antes, telemetria e enlace com a estação de solo.",
      tags: ["Sensor fusion", "Atitude", "Telemetria", "RF"], links: [] },

    { titulo: "Interceptação de enxames", org: "Estudo · Python", ano: "2026", origem: "Pessoal", icone: "radar",
      categorias: ["Voo & Controle", "Software"],
      descricao: "Simulador para alocação de interceptadores contra enxames de aeronaves evasivas sob informação de radar: 29 métodos, 60 cenários com terreno real (Copernicus GLO-30) e geração automática das tabelas do artigo.",
      tags: ["Simulação", "Otimização", "Defesa"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/estudo-interceptador" }] },

    { titulo: "Processador multiciclo — CI Expert", org: "Residência em Microeletrônica", ano: "2026", origem: "UNIFEI", icone: "chip",
      categorias: ["Hardware"],
      descricao: "Processador multiciclo parametrizado de 3 estágios, do RTL ao sign-off. Responsável pela trilha de RTL Design em Verilog.",
      tags: ["Verilog", "RTL", "Síntese", "FPGA"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/ci-expert" }] },

    { titulo: "SolarEyes — CubeSat estratosférico", org: "OBSAT-MCTI", ano: "2023", origem: "ETE FMC", icone: "cubesat",
      categorias: ["Espaço", "Hardware"],
      descricao: "Sonda CubeSat com carga útil que detecta radiação gama com fotodiodos PIN de baixo custo. Integração de OBC, EPS e telecom; validada em voo de balão estratosférico, elevando o TRL do sensor.",
      premio: "Campeão regional — Olimpíada Brasileira de Satélites 2023",
      tags: ["OBC", "EPS", "Telecom", "Payload"], links: [] },

    { titulo: "NACA Airfoil Plotter", org: "CS50 · Harvard · Flask", ano: "2024", origem: "Pessoal", icone: "aerofolio",
      categorias: ["Software"],
      descricao: "Aplicação web que gera aerofólios NACA de 4 dígitos com superfícies, linha média, espessura, distribuição de pressão e polares de sustentação e arrasto.",
      tags: ["Aerodinâmica", "Flask", "Matplotlib"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/NACA-Airfoil-Plotter" }, { rotulo: "Vídeo", url: "https://youtu.be/ZzYQg_iRxVs" }] },

    { titulo: "Altímetro", org: "Software livre · GPL-3.0", ano: "2026", origem: "Pessoal", icone: "altimetro",
      categorias: ["Software"],
      descricao: "Ferramenta multiplataforma que levanta métricas de grupos de pesquisa a partir do Currículo Lattes para relatórios, editais e avaliações CAPES.",
      tags: ["Python", "Dados", "Desktop"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/altimetro-lattes" }] },

    { titulo: "Ferramenta de inteligência de mercado em defesa", org: "Modirum | Gespi", ano: "2026", origem: "Profissional", icone: "radar",
      categorias: ["Software"],
      descricao: "Aplicação em Python com interface gráfica para mineração e análise de dados abertos sobre aquisições internacionais de Forças Armadas.",
      tags: ["Python", "GUI", "Dados"], links: [] },

    { titulo: "ARduck — Realidade aumentada para eletrônica", org: "PROJETE", ano: "2022–23", origem: "ETE FMC", icone: "ar",
      categorias: ["Hardware", "Software"],
      descricao: "Ecossistema de ensino com realidade aumentada, instrumentação de laboratório conectada, app móvel e painel web para professores, com microsserviços próprios.",
      premio: "Campeão Utilidade e Melhor apresentação em inglês (2022) · Melhor projeto de Telecom (2023)",
      tags: ["Flask", "Docker", "IoT", "AR"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/ARduck" }] },

    { titulo: "Duck Protocol — rede industrial RS-485", org: "CEDEN ETE FMC", ano: "2023", origem: "Profissional", icone: "rs485",
      categorias: ["Hardware", "Software"],
      descricao: "Protocolo serial didático, firmware, driver e dashboard desktop para monitorar e controlar equipamentos industriais. Adotado no curso de Automação da ETE FMC.",
      tags: ["Firmware", "RS-485", "C#", "Python"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/Duck-Protocol" }] },

    { titulo: "Ajuste dinâmico de faróis automotivos", org: "PROJETE 2021", ano: "2021", origem: "ETE FMC", icone: "farol",
      categorias: ["Hardware"],
      descricao: "Sistema embarcado que corrige automaticamente o facho dos faróis do veículo. Líder da equipe e programador do firmware.",
      premio: "Campeão Automação · Prêmio Municipal de Inovação",
      tags: ["C++", "Embarcados", "Sensores"],
      links: [{ rotulo: "GitHub", url: "https://github.com/otaviozordan/ProjETE-2021-1106" }] },

    { titulo: "Curso de Python para engenharia", org: "Extensão · PET Mecânica", ano: "2025", origem: "UNIFEI", icone: "python",
      categorias: ["Software"],
      descricao: "Curso de 16 horas criado e ministrado para alunos de Engenharia Aeronáutica e Mecânica: NumPy, Pandas, SciPy e SymPy aplicados a simulação e análise de dados.",
      tags: ["Ensino", "SciPy", "SymPy"], links: [] }
  ],

  /* -------------------------- COMPETÊNCIAS ---------------------------- */
  competencias: [
    { grupo: "Voo & Controle", itens: ["Dinâmica de voo", "Projeto de controle", "Controle robusto", "Filtro de Kalman", "System ID"] },
    { grupo: "Programação",    itens: ["Python", "C / C++", "MATLAB / Simulink", "Verilog · VHDL", "Git"] },
    { grupo: "Hardware",       itens: ["Sistemas embarcados", "FPGA & RTL", "Eletrônica analógica/digital", "PCI (Eagle)", "Telecom & RF"] },
    { grupo: "Engenharia",     itens: ["Engenharia de sistemas", "Elementos finitos", "SolidWorks", "DO-254 · MIL-STD", "Backend & DevOps"] }
  ],
  idiomas: "Português nativo · Inglês B1 · Francês B1",

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

  premios: [
    { titulo: "Melhor Desempenho Acadêmico — Turma 2024", org: "ETE FMC · maior honraria da escola", ano: "2024" },
    { titulo: "Campeão Regional — OBSAT-MCTI", org: "Sonda CubeSat SolarEyes", ano: "2023" },
    { titulo: "Melhor projeto de Telecomunicações", org: "PROJETE 2023 · ARduck", ano: "2023" },
    { titulo: "Campeão categoria Utilidade", org: "PROJETE 2022 · ARduck", ano: "2022" },
    { titulo: "Melhor apresentação em inglês", org: "PROJETE 2022 · ARduck", ano: "2022" },
    { titulo: "Participação destacada Custom Brasil", org: "PROJETE 2022", ano: "2022" },
    { titulo: "Reconhecimento empreendedor CP2", org: "PROJETE 2022", ano: "2022" },
    { titulo: "Prêmio Municipal de Inovação", org: "Prefeitura de Santa Rita do Sapucaí", ano: "2021" },
    { titulo: "Campeão categoria Automação", org: "PROJETE 2021 · Faróis dinâmicos", ano: "2021" }
  ],

  /* ----------------------------- CONTATO ------------------------------ */
  contato: {
    chamada: "Aberto a estágios, pesquisa e projetos em dinâmica de voo, GNC, sistemas embarcados e engenharia aeroespacial.",
    links: [
      { rotulo: "E-mail",   texto: "otaviozordan@gmail.com",   url: "mailto:otaviozordan@gmail.com" },
      { rotulo: "LinkedIn", texto: "in/otavio-zordan",         url: "https://www.linkedin.com/in/otavio-zordan" },
      { rotulo: "GitHub",   texto: "github.com/otaviozordan",  url: "https://github.com/otaviozordan" },
      { rotulo: "Lattes",   texto: "9155564516628230",         url: "http://lattes.cnpq.br/9155564516628230" }
    ]
  }
};
