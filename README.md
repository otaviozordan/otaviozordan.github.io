# otaviozordan.github.io

Portfólio pessoal de Otávio Zordan Alves: https://otaviozordan.github.io/

## Como atualizar

Todo o conteúdo fica em **[dados.js](dados.js)**. Na maioria das vezes não é preciso mexer em outro arquivo.

1. Abra `dados.js` (pode ser pelo próprio GitHub, no ícone de lápis).
2. Para adicionar um item, copie um bloco `{ ... }` parecido, cole logo abaixo e troque os textos. Os blocos são separados por vírgula.
3. Salve e faça commit. O GitHub Pages publica em 1 a 2 minutos.

| Quero… | Onde em `dados.js` |
| --- | --- |
| Adicionar uma publicação (congresso, periódico, capítulo…) | `publicacoes` (ordenadas por ano sozinhas; `tipo` vira a etiqueta) |
| Adicionar um projeto ao portfólio | `projetos` (os filtros saem de `categorias` e `origem`) |
| Novo cargo/atividade na UNIFEI ou na ETE | `academico` → aba `unifei` ou `ete` → `itens` |
| Novo estágio/emprego | `profissional` |
| Grupo ou laboratório (logo + link) | `grupos` (logo em `assets/`) |
| Cargos na equipe de foguetes | `foguete.cargos` |
| Prêmio, certificação, competência | `premios`, `certificacoes`, `competencias` |
| Texto do topo, foto, "Sobre", números | `perfil` |

- `**texto**` fica em **negrito**.
- Os contadores de publicações e prêmios são automáticos.
- Para pôr uma foto num projeto, salve a imagem em `assets/` e use `imagem: "assets/minha-foto.jpg"`.
- Ícones prontos para projetos: `formacao`, `sysid`, `foguete`, `cubesat`, `radar`, `chip`, `aerofolio`, `altimetro`, `ar`, `rs485`, `farol`, `python`.

Para ver localmente, basta abrir `index.html` no navegador.

## Estrutura

- `index.html`: esqueleto da página e o desenho do foguete
- `dados.js`: **conteúdo**
- `assets/estilo.css`: visual
- `assets/app.js`: monta a página a partir dos dados e simula o escoamento potencial (aerofólio de Joukowski com condição de Kutta) no topo
