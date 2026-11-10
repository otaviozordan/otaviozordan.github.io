# otaviozordan.github.io

Portfólio pessoal de Otávio Zordan Alves: https://otaviozordan.github.io/

## Como atualizar

Todo o conteúdo fica em **[dados.js](dados.js)**. Na maioria das vezes não é preciso mexer em outro arquivo.

1. Abra `dados.js` (pode ser pelo próprio GitHub, no ícone de lápis).
2. Para adicionar um item, copie um bloco `{ ... }` parecido, cole logo abaixo e troque os textos. Os blocos são separados por vírgula.
3. Salve e faça commit. O GitHub Pages publica em 1 a 2 minutos.

| Quero… | Onde em `dados.js` |
| --- | --- |
| Novo cargo/atividade acadêmica | `trajetoria` → fase (ETE FMC ou UNIFEI) → `academico` |
| Novo estágio/emprego | `trajetoria` → fase → `profissional` |
| Nova fase (ex.: mestrado) | copie uma fase inteira em `trajetoria` |
| Adicionar uma publicação | `publicacoes` (ordenadas por ano; `tipo` vira a etiqueta) |
| Mostrar/ocultar um projeto | `projetos` → `destaque: true/false` |
| Grupo ou laboratório (logo + link) | `grupos` (logo em `assets/`) |
| Cargos na equipe de foguetes | `foguete.cargos` |
| Prêmio, curso, competência | `premios`, `certificacoes` (aparecem recolhidas), `competencias` |
| Texto do topo, foto, fatos rápidos | `perfil` |

- `**texto**` fica em **negrito**.
- Os contadores de publicações e prêmios são automáticos.
- Para pôr uma foto num projeto, salve a imagem em `assets/` e use `imagem: "assets/minha-foto.jpg"`.
- Ícones prontos para projetos: `formacao`, `sysid`, `foguete`, `cubesat`, `radar`, `chip`, `aerofolio`, `altimetro`, `ar`, `rs485`, `farol`, `python`.

Para ver localmente, basta abrir `index.html` no navegador.

## Identidade visual

Há 4 temas (`cockpit`, `prancheta`, `relatorio`, `estratosfera`), trocados pelo seletor na base da página ou por `?tema=nome` na URL. Para fixar um: mude `data-tema` no `<html>` do `index.html` e apague a linha `<div class="temas" ...>`.

## Estrutura

- `index.html`: esqueleto da página e o desenho do foguete
- `dados.js`: **conteúdo**
- `assets/estilo.css`: visual
- `assets/app.js`: monta a página a partir dos dados e simula o escoamento potencial (aerofólio de Joukowski com condição de Kutta) no topo
