# otaviozordan.github.io

Portfólio pessoal de Otávio Zordan Alves: https://otaviozordan.github.io/

## Como atualizar

O site é um currículo digital. Todo o conteúdo fica em **[dados.js](dados.js)**, escrito em português; as traduções (EN, FR, IT) ficam em **[idiomas.js](idiomas.js)**.

1. Abra `dados.js` (pode ser pelo próprio GitHub, no ícone de lápis).
2. Para adicionar um item, copie um bloco `{ ... }` parecido, cole acima dele (mais recente primeiro) e troque os textos. Os blocos são separados por vírgula.
3. (Opcional) Em `idiomas.js`, em `textos`, copie o texto em português **exatamente igual** e adicione `{ en: "...", fr: "...", it: "..." }`. Sem tradução, o texto aparece em português; meses das datas são traduzidos sozinhos.
4. Salve e faça commit. O GitHub Pages publica em 1 a 2 minutos.

| Quero… | Onde em `dados.js` |
| --- | --- |
| Trocar WhatsApp, LinkedIn, e-mail… | `contatos` |
| Novo estágio/emprego | `profissional` |
| Nova atividade acadêmica | `academico` → bloco `UNIFEI` ou `ETE FMC` → `itens` |
| Nova formação (ex.: mestrado) | `formacao` (e um novo bloco em `academico`) |
| Nova publicação | `publicacoes` (ordenadas por ano; `tipo` vira a etiqueta) |
| Mostrar/ocultar projeto | `projetos` → `destaque: true/false` |
| Prêmio, curso, competência | `premios`, `certificacoes` (recolhidas), `competencias` |
| Resumo, foto, fatos rápidos | `perfil` |

- `**texto**` fica em **negrito**.
- O botão "Salvar em PDF" gera a versão para impressão do próprio site.
- Link direto em outro idioma: `https://otaviozordan.github.io/?lang=en` (ou `fr`, `it`).

Para ver localmente, basta abrir `index.html` no navegador.

## Estrutura

- `index.html`: esqueleto da página e desenho do foguete
- `dados.js`: **conteúdo**
- `idiomas.js`: traduções e textos fixos
- `assets/estilo.css`: visual (cores em variáveis no topo) e versão de impressão
- `assets/app.js`: monta a página e simula o escoamento potencial (aerofólio de Joukowski com condição de Kutta) no banner
