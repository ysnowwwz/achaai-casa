<p align="center"><img src="assets/marca/logo.svg" alt="AchaAI Casa" width="420"></p>

# AchaAI Casa

Site irmão do [AchaAI](https://github.com/ysnowwwz/achaaiprecos), agora para **itens de casa**:
eletrodomésticos e eletroportáteis, móveis, cama, mesa e banho, e decoração.

> **Preços de demonstração · projeto de estudo.** Os produtos são reais, mas preços,
> fretes, prazos e montagens são inventados. Nenhuma loja foi consultada, e o AchaAI Casa
> não tem ligação com as lojas ou marcas citadas. Os botões só abrem a busca do produto
> no site da loja, sem link de afiliado.

Compara 18 produtos em 12 lojas (Amazon, Casas Bahia, Magalu, Shopee, Mercado Livre,
Americanas, MadeiraMadeira, Mobly, Leroy Merlin, Camicado, AliExpress e Shein) e ordena
pelo **preço final na sua porta**: produto + frete + montagem + imposto + ICMS.

## O que tem de diferente do AchaAI

- **Montagem na conta.** Móvel que a loja cobra para montar soma a montagem. Dá para trocar
  para "eu monto" e a corrida refaz.
- **Prazo de entrega.** "Preciso receber em até 7, 15 ou 30 dias": as lojas que chegam
  depois ficam apagadas no fim da corrida e saem do pódio.
- **Frete pesado.** Cada produto mostra medidas, peso e número de caixas. O caso do sofá:
  o mais barato da vitrine (R$ 1.099) chega por R$ 1.868 e cai para o último lugar.
- **Cômodos** na entrada (cozinha, sala e quarto, cama mesa e banho, decoração).
- Visual próprio: linho e carvalho no claro, nogueira no escuro, pódio de madeira.

Continua com o raio-X do preço, a corrida, o pódio 3D, a linha do tempo com
preço-alvo, alertas e a comparação arrastando um produto sobre o outro.

## Arquivos

- `casa.html` — o site
- `config.js` — nome, dólar, regras de imposto, prazos e montagem padrão
- `nucleo.js` — a conta do preço final (com montagem e prazo), selos, alertas, busca
- `dados/ofertas-exemplo.js` — produtos e preços de demonstração, no formato do AchaAI
- `assets/recortes/` — fotos sem fundo (créditos em `CREDITOS.md`)
- `ferramentas/montar-site.mjs` — gera a pasta `docs/` se um dia for para o GitHub Pages

Para ver no PC: dois cliques no `index.html`.
