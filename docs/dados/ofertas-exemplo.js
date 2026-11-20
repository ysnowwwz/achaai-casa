// =============================================================
// DADOS DE DEMONSTRAÇÃO (produtos reais, preços inventados)
// =============================================================
// Os produtos existem de verdade; PREÇOS, FRETES, PRAZOS e MONTAGENS
// são de demonstração. Mesmo formato das ofertas do AchaAI, com um
// campo a mais para casa:
//   produtoId, loja, preco (vitrine, em reais), frete, prazoDias,
//   internacional (paga imposto de importação), remessaConforme,
//   montagem (R$ cobrado à parte; 0 = grátis; ausente = não precisa),
//   atualizadoEm
// Produto tem também: comodo, medidas (L × P × A), pesoKg, volumes,
// precisaMontar e escala (tamanho relativo na tela de entrada).
// Recortes: assets/recortes/<id>.webp (créditos em CREDITOS.md)

window.DADOS = (function () {
  const lojas = [
    { id: "amazon",         nome: "Amazon",         sigla: "AMZ", busca: "https://www.amazon.com.br/s?k={q}" },
    { id: "casasbahia",     nome: "Casas Bahia",    sigla: "CSB", busca: "https://www.casasbahia.com.br/{q}/b" },
    { id: "magalu",         nome: "Magalu",         sigla: "MGL", busca: "https://www.magazineluiza.com.br/busca/{q}/" },
    { id: "shopee",         nome: "Shopee",         sigla: "SHP", busca: "https://shopee.com.br/search?keyword={q}" },
    { id: "mercadolivre",   nome: "Mercado Livre",  sigla: "MLV", busca: "https://lista.mercadolivre.com.br/{q}" },
    { id: "americanas",     nome: "Americanas",     sigla: "AMR", busca: "https://www.americanas.com.br/busca/{q}" },
    { id: "madeiramadeira", nome: "MadeiraMadeira", sigla: "MDM", busca: "https://www.madeiramadeira.com.br/busca?q={q}" },
    { id: "mobly",          nome: "Mobly",          sigla: "MBL", busca: "https://www.mobly.com.br/catalogsearch/result?q={q}" },
    { id: "leroymerlin",    nome: "Leroy Merlin",   sigla: "LRM", busca: "https://www.leroymerlin.com.br/search?term={q}" },
    { id: "camicado",       nome: "Camicado",       sigla: "CMC", busca: "https://www.camicado.com.br/busca?q={q}" },
    { id: "aliexpress",     nome: "AliExpress",     sigla: "ALI", busca: "https://pt.aliexpress.com/w/wholesale-{q}.html" },
    { id: "shein",          nome: "Shein",          sigla: "SHN", busca: "https://br.shein.com/pdsearch/{q}/" }
  ];

  const credito = (autor, licenca) => ({ autor, licenca, fonte: "Wikimedia Commons" });
  const C = "Cozinha", S = "Sala e quarto", B = "Cama, mesa e banho", DEC = "Decoração";

  // cor = tom principal do produto (brilho atrás da foto).
  // perfilHistorico só existe na demonstração (como inventar o gráfico).
  const produtos = [
    // ---------- cozinha ----------
    { id: "airfryer", nome: "Airfryer clássica 2,2 L", marca: "Philips Walita", categoria: "Eletroportáteis", comodo: C, cor: "#c9c3dc", termoBusca: "airfryer philips walita", apelidos: ["fritadeira sem oleo", "air fryer"], specs: ["Fritura sem óleo", "Timer de 30 min", "1.425 W"], medidas: "29 × 38 × 30 cm", pesoKg: 7, volumes: 1, precisaMontar: false, escala: .8, credito: credito("Maurina Rara", "CC BY 2.0"), perfilHistorico: "alta" },
    { id: "batedeira", nome: "Batedeira Artisan 4,8 L", marca: "KitchenAid", categoria: "Eletroportáteis", comodo: C, cor: "#b65a64", termoBusca: "batedeira kitchenaid artisan", apelidos: ["planetaria"], specs: ["Tigela inox 4,8 L", "10 velocidades", "3 batedores"], medidas: "24 × 37 × 36 cm", pesoKg: 11, volumes: 1, precisaMontar: false, escala: .9, credito: credito("BenFrantzDale", "CC BY-SA 2.0"), perfilHistorico: "baixa" },
    { id: "cafeteira", nome: "Cafeteira Drop", marca: "Nescafé Dolce Gusto", categoria: "Eletroportáteis", comodo: C, cor: "#d0605a", termoBusca: "dolce gusto drop", apelidos: ["cafe", "capsula"], specs: ["Cápsulas", "Painel de toque", "15 bar"], medidas: "18 × 32 × 30 cm", pesoKg: 3.5, volumes: 1, precisaMontar: false, escala: .75, credito: credito("Raquelrodriguez84", "CC BY-SA 4.0"), perfilHistorico: "normal" },
    { id: "liquidificador", nome: "Liquidificador Clássico", marca: "Oster", categoria: "Eletroportáteis", comodo: C, cor: "#c8ccd2", termoBusca: "liquidificador oster classico", apelidos: ["vitamina"], specs: ["Copo de vidro 1,25 L", "Base cromada", "2 velocidades"], medidas: "18 × 18 × 35 cm", pesoKg: 4.2, volumes: 1, precisaMontar: false, escala: .8, credito: credito("Jean L.", "CC BY 2.0"), perfilHistorico: "normal" },
    { id: "microondas", nome: "Micro-ondas 21 L branco", marca: "Panasonic", categoria: "Eletrodomésticos", comodo: C, cor: "#dcdad5", termoBusca: "micro-ondas panasonic 21 litros", apelidos: ["microondas"], specs: ["21 litros", "Menu com receitas", "Trava para crianças"], medidas: "46 × 34 × 27 cm", pesoKg: 11, volumes: 1, precisaMontar: false, escala: 1, credito: credito("librarianidol", "CC BY 2.0"), perfilHistorico: "baixa" },

    // ---------- sala e quarto ----------
    { id: "sofa", nome: "Sofá 2 lugares com capa removível", marca: "", categoria: "Móveis", comodo: S, cor: "#e2584a", termoBusca: "sofa 2 lugares capa removivel", apelidos: ["sofa", "estofado"], specs: ["Capa lavável", "Pés de metal", "Espuma D28"], medidas: "180 × 88 × 66 cm", pesoKg: 32, volumes: 2, precisaMontar: true, destaque: true, escala: 1.35, credito: credito("MasterMarte", "CC BY-SA 3.0"), perfilHistorico: "normal" },
    { id: "poltrona", nome: "Poltrona de madeira curvada com puff", marca: "", categoria: "Móveis", comodo: S, cor: "#b9925f", termoBusca: "poltrona madeira curvada com puff", apelidos: ["poltrona de leitura"], specs: ["Estrutura de bétula", "Almofada removível", "Puff incluso"], medidas: "68 × 82 × 100 cm", pesoKg: 18, volumes: 2, precisaMontar: true, escala: 1.1, credito: credito("Mike Peel", "CC BY-SA 4.0"), perfilHistorico: "alta" },
    { id: "cadeira", nome: "Cadeira Eames com braço", marca: "", categoria: "Móveis", comodo: S, cor: "#df6a4a", termoBusca: "cadeira eames com braco", apelidos: ["cadeira de escritorio"], specs: ["Assento de polipropileno", "Base giratória", "Até 120 kg"], medidas: "63 × 60 × 80 cm", pesoKg: 6, volumes: 1, precisaMontar: true, escala: .95, credito: credito("Rama", "CC BY-SA 2.0 FR"), perfilHistorico: "baixa" },
    { id: "estante", nome: "Estante de livros 80 × 106 cm", marca: "", categoria: "Móveis", comodo: S, cor: "#d4b58a", termoBusca: "estante para livros 80 cm", apelidos: ["prateleira", "livros"], specs: ["3 prateleiras", "MDP com lâmina", "Fixação na parede"], medidas: "80 × 28 × 106 cm", pesoKg: 21, volumes: 1, precisaMontar: true, escala: 1.1, credito: credito("Magnus Bäck", "Domínio público"), perfilHistorico: "normal" },
    { id: "cabeceira", nome: "Mesa de cabeceira de madeira", marca: "", categoria: "Móveis", comodo: S, cor: "#a8754b", termoBusca: "mesa de cabeceira madeira", apelidos: ["criado mudo", "criado-mudo"], specs: ["Madeira maciça", "1 porta e 1 prateleira", "Pés altos"], medidas: "45 × 38 × 66 cm", pesoKg: 12, volumes: 1, precisaMontar: true, escala: .85, credito: credito("Andrewa", "CC BY-SA 3.0"), perfilHistorico: "baixa" },
    { id: "robo", nome: "Robô aspirador Roomba série 700", marca: "iRobot", categoria: "Eletrodomésticos", comodo: S, cor: "#9aa0a8", termoBusca: "robo aspirador roomba", apelidos: ["aspirador"], specs: ["Volta sozinho para a base", "Escovas para pelos", "Até 60 min"], medidas: "34 × 34 × 9 cm", pesoKg: 3.8, volumes: 1, precisaMontar: false, escala: .85, credito: credito("CEphoto, Uwe Aranas", "CC BY-SA 4.0"), perfilHistorico: "alta" },
    { id: "ventilador", nome: "Ventilador de mesa 30 cm", marca: "", categoria: "Eletroportáteis", comodo: S, cor: "#cfd6dc", termoBusca: "ventilador de mesa 30 cm", apelidos: ["ventilador"], specs: ["3 velocidades", "Oscilante", "40 W"], medidas: "34 × 24 × 48 cm", pesoKg: 2.4, volumes: 1, precisaMontar: false, escala: .85, credito: credito("Gunnar Creutz", "CC BY-SA 4.0"), perfilHistorico: "normal" },

    // ---------- cama, mesa e banho ----------
    { id: "toalhas", nome: "Jogo de toalhas de banho 5 peças", marca: "", categoria: "Banho", comodo: B, cor: "#e3a0b8", termoBusca: "jogo de toalhas 5 pecas", apelidos: ["toalha", "banho"], specs: ["100% algodão", "500 g/m²", "Cores sortidas"], medidas: "70 × 140 cm cada", pesoKg: 2.6, volumes: 1, precisaMontar: false, escala: .85, credito: credito("Mattes", "Domínio público"), perfilHistorico: "baixa" },
    { id: "jogo-cama", nome: "Jogo de cama casal 4 peças", marca: "", categoria: "Cama", comodo: B, cor: "#d4566e", termoBusca: "jogo de cama casal 4 pecas", apelidos: ["lencol", "fronha", "edredom"], specs: ["Percal 200 fios", "Lençol com elástico", "2 fronhas"], medidas: "cama 138 × 188 cm", pesoKg: 1.4, volumes: 1, precisaMontar: false, escala: 1.05, credito: credito("Mattes", "CC BY-SA 3.0"), perfilHistorico: "normal" },

    // ---------- decoração ----------
    { id: "luminaria", nome: "Luminária de mesa articulada", marca: "", categoria: "Iluminação", comodo: DEC, cor: "#8b8f96", termoBusca: "luminaria de mesa articulada", apelidos: ["abajur", "lampada"], specs: ["Haste flexível", "Soquete E27", "Base pesada"], medidas: "15 × 30 × 40 cm", pesoKg: 1.1, volumes: 1, precisaMontar: false, escala: .75, credito: credito("AirbusA330772673", "CC BY-SA 4.0"), perfilHistorico: "normal" },
    { id: "coluna", nome: "Luminária de chão com leitura", marca: "", categoria: "Iluminação", comodo: DEC, cor: "#d7d9dc", termoBusca: "luminaria de chao coluna com leitura", apelidos: ["luminaria de piso", "coluna"], specs: ["2 focos", "Altura 176 cm", "Haste de leitura flexível"], medidas: "25 × 25 × 176 cm", pesoKg: 3.2, volumes: 1, precisaMontar: true, escala: 1.3, credito: credito("FASTILY", "CC BY-SA 4.0"), perfilHistorico: "alta" },
    { id: "tapete", nome: "Tapete estampado 1,40 × 2,00 m", marca: "", categoria: "Tapetes", comodo: DEC, cor: "#b8574a", termoBusca: "tapete estampado 140x200", apelidos: ["passadeira", "carpete"], specs: ["Estampa geométrica", "Base antiderrapante", "Pelo baixo"], medidas: "140 × 200 cm", pesoKg: 5.5, volumes: 1, precisaMontar: false, escala: .9, credito: credito("tecelão desconhecido, foto de leiloeiro", "Domínio público"), perfilHistorico: "baixa" },
    { id: "vaso", nome: "Vaso de cerâmica esmaltada", marca: "", categoria: "Vasos", comodo: DEC, cor: "#c49a3c", termoBusca: "vaso ceramica esmaltada", apelidos: ["vasinho", "planta"], specs: ["Feito à mão", "Esmalte brilhante", "22 cm de altura"], medidas: "24 × 24 × 22 cm", pesoKg: 1.8, volumes: 1, precisaMontar: false, escala: .65, credito: credito("AIDEPCUL", "CC BY 4.0"), perfilHistorico: "normal" }
  ];
  const raiz = window.RAIZ || "";
  produtos.forEach(p => {
    p.recorte = raiz + "assets/recortes/" + p.id + ".webp";
    p.foto = p.recorte;
    p.creditoRecorte = p.credito;
  });

  const hoje = "2026-11-19";
  // o(produto, loja, preço, frete, prazo, internacional, remessaConforme, montagem)
  const o = (produtoId, loja, preco, frete, prazoDias, internacional, remessaConforme, montagem) =>
    ({ produtoId, loja, preco, frete, prazoDias, internacional, remessaConforme, montagem, atualizadoEm: hoje });
  const N = false, I = true; // nacional / importado

  const ofertas = [
    // cozinha
    o("airfryer", "amazon", 499, 0, 2, N, N), o("airfryer", "magalu", 479, 0, 4, N, N),
    o("airfryer", "casasbahia", 469, 19.9, 5, N, N), o("airfryer", "mercadolivre", 489, 0, 3, N, N),
    o("airfryer", "americanas", 519, 0, 6, N, N), o("airfryer", "shopee", 429, 34.9, 8, N, N),
    o("airfryer", "aliexpress", 289, 0, 22, I, I),

    o("batedeira", "amazon", 3499, 0, 2, N, N), o("batedeira", "magalu", 3399, 0, 4, N, N),
    o("batedeira", "casasbahia", 3449, 0, 5, N, N), o("batedeira", "mercadolivre", 3299, 49.9, 4, N, N),
    o("batedeira", "americanas", 3599, 0, 7, N, N), o("batedeira", "camicado", 3549, 0, 6, N, N),
    o("batedeira", "aliexpress", 2290, 189, 28, I, I),

    o("cafeteira", "amazon", 599, 0, 2, N, N), o("cafeteira", "magalu", 579, 0, 4, N, N),
    o("cafeteira", "casasbahia", 589, 14.9, 5, N, N), o("cafeteira", "mercadolivre", 569, 0, 3, N, N),
    o("cafeteira", "americanas", 629, 0, 6, N, N), o("cafeteira", "shopee", 519, 29.9, 8, N, N),

    o("liquidificador", "amazon", 319, 0, 2, N, N), o("liquidificador", "magalu", 299, 19.9, 4, N, N),
    o("liquidificador", "casasbahia", 309, 0, 5, N, N), o("liquidificador", "mercadolivre", 289, 24.9, 3, N, N),
    o("liquidificador", "americanas", 329, 0, 6, N, N), o("liquidificador", "shopee", 259, 39.9, 9, N, N),

    o("microondas", "amazon", 699, 0, 3, N, N), o("microondas", "magalu", 649, 39.9, 5, N, N),
    o("microondas", "casasbahia", 659, 0, 6, N, N), o("microondas", "mercadolivre", 629, 59.9, 4, N, N),
    o("microondas", "americanas", 719, 0, 7, N, N), o("microondas", "leroymerlin", 689, 29.9, 6, N, N),
    o("microondas", "shopee", 589, 89.9, 10, N, N),

    // sala e quarto
    o("sofa", "amazon", 1549, 0, 10, N, N, 199), o("sofa", "magalu", 1499, 89, 15, N, N, 160),
    o("sofa", "casasbahia", 1449, 149, 18, N, N, 190), o("sofa", "mercadolivre", 1249, 389, 25, N, N, 180),
    o("sofa", "madeiramadeira", 1399, 129, 22, N, N, 150), o("sofa", "mobly", 1459, 0, 28, N, N, 0),
    o("sofa", "shopee", 1099, 589, 35, N, N, 180),

    o("poltrona", "amazon", 1099, 0, 9, N, N, 120), o("poltrona", "magalu", 1049, 79, 14, N, N, 110),
    o("poltrona", "madeiramadeira", 989, 99, 20, N, N, 90), o("poltrona", "mobly", 1149, 0, 24, N, N, 0),
    o("poltrona", "mercadolivre", 929, 189, 18, N, N, 110), o("poltrona", "aliexpress", 599, 349, 40, I, I),

    o("cadeira", "amazon", 349, 0, 4, N, N, 0), o("cadeira", "magalu", 329, 29.9, 6, N, N, 0),
    o("cadeira", "madeiramadeira", 299, 49.9, 12, N, N, 0), o("cadeira", "mobly", 319, 0, 15, N, N, 0),
    o("cadeira", "mercadolivre", 279, 59.9, 7, N, N, 0), o("cadeira", "shopee", 239, 79.9, 11, N, N, 0),
    o("cadeira", "aliexpress", 169, 159, 30, I, I, 0),

    o("estante", "amazon", 449, 0, 6, N, N, 120), o("estante", "magalu", 419, 49.9, 9, N, N, 110),
    o("estante", "casasbahia", 399, 69.9, 12, N, N, 130), o("estante", "madeiramadeira", 379, 59.9, 16, N, N, 99),
    o("estante", "mobly", 429, 0, 20, N, N, 0), o("estante", "leroymerlin", 389, 79.9, 8, N, N, 120),
    o("estante", "shopee", 319, 149, 21, N, N, 110),

    o("cabeceira", "amazon", 389, 0, 7, N, N, 70), o("cabeceira", "magalu", 359, 39.9, 10, N, N, 70),
    o("cabeceira", "madeiramadeira", 329, 49.9, 18, N, N, 60), o("cabeceira", "mobly", 369, 0, 22, N, N, 0),
    o("cabeceira", "mercadolivre", 299, 79.9, 12, N, N, 70), o("cabeceira", "shopee", 279, 99, 19, N, N, 70),

    o("robo", "amazon", 2199, 0, 2, N, N), o("robo", "magalu", 2099, 0, 4, N, N),
    o("robo", "casasbahia", 2149, 0, 5, N, N), o("robo", "mercadolivre", 1999, 0, 3, N, N),
    o("robo", "americanas", 2249, 0, 7, N, N), o("robo", "aliexpress", 1290, 0, 24, I, I),

    o("ventilador", "amazon", 159, 0, 2, N, N), o("ventilador", "magalu", 149, 19.9, 4, N, N),
    o("ventilador", "casasbahia", 139, 24.9, 5, N, N), o("ventilador", "americanas", 169, 0, 6, N, N),
    o("ventilador", "leroymerlin", 145, 19.9, 5, N, N), o("ventilador", "shopee", 119, 29.9, 7, N, N),
    o("ventilador", "aliexpress", 79, 49, 20, I, I),

    // cama, mesa e banho
    o("toalhas", "amazon", 199, 0, 3, N, N), o("toalhas", "magalu", 189, 14.9, 5, N, N),
    o("toalhas", "camicado", 229, 0, 6, N, N), o("toalhas", "americanas", 209, 0, 6, N, N),
    o("toalhas", "shopee", 149, 19.9, 8, N, N), o("toalhas", "shein", 129, 0, 14, I, I),
    o("toalhas", "aliexpress", 119, 29, 21, I, I),

    o("jogo-cama", "amazon", 239, 0, 3, N, N), o("jogo-cama", "magalu", 219, 14.9, 5, N, N),
    o("jogo-cama", "camicado", 259, 0, 6, N, N), o("jogo-cama", "casasbahia", 229, 0, 6, N, N),
    o("jogo-cama", "shopee", 179, 19.9, 9, N, N), o("jogo-cama", "shein", 149, 0, 13, I, I),
    o("jogo-cama", "aliexpress", 139, 25, 22, I, I),

    // decoração
    o("luminaria", "amazon", 119, 0, 2, N, N), o("luminaria", "magalu", 109, 14.9, 5, N, N),
    o("luminaria", "leroymerlin", 99, 19.9, 6, N, N), o("luminaria", "camicado", 139, 0, 6, N, N),
    o("luminaria", "shopee", 79, 14.9, 8, N, N), o("luminaria", "shein", 69, 0, 12, I, I),
    o("luminaria", "aliexpress", 59, 12, 19, I, I),

    o("coluna", "amazon", 279, 0, 4, N, N), o("coluna", "magalu", 259, 39.9, 7, N, N),
    o("coluna", "leroymerlin", 239, 49.9, 8, N, N), o("coluna", "madeiramadeira", 229, 59.9, 15, N, N),
    o("coluna", "mobly", 269, 0, 18, N, N), o("coluna", "shopee", 189, 69.9, 10, N, N),
    o("coluna", "aliexpress", 129, 89, 27, I, I),

    o("tapete", "amazon", 459, 0, 5, N, N), o("tapete", "magalu", 429, 39.9, 7, N, N),
    o("tapete", "camicado", 499, 0, 7, N, N), o("tapete", "madeiramadeira", 389, 49.9, 14, N, N),
    o("tapete", "mobly", 419, 0, 16, N, N), o("tapete", "leroymerlin", 399, 39.9, 8, N, N),
    o("tapete", "shein", 279, 0, 15, I, I),

    o("vaso", "amazon", 129, 0, 3, N, N), o("vaso", "camicado", 149, 0, 6, N, N),
    o("vaso", "magalu", 119, 19.9, 6, N, N), o("vaso", "leroymerlin", 109, 24.9, 7, N, N),
    o("vaso", "shopee", 89, 22.9, 9, N, N), o("vaso", "shein", 69, 0, 12, I, I),
    o("vaso", "aliexpress", 49, 19, 23, I, I)
  ];

  // ---------- Histórico inventado (26 semanas por loja) ----------
  function semente(texto) {
    let h = 2166136261;
    for (const c of texto) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function aleatorio(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const faixas = { baixa: [1.06, 1.24], alta: [0.84, 0.97], normal: [0.93, 1.08] };
  function historico(oferta, perfil) {
    const rnd = aleatorio(semente(oferta.produtoId + oferta.loja));
    const [min, max] = faixas[perfil] || faixas.normal;
    const pontos = [];
    const fim = new Date(hoje + "T12:00:00");
    let nivel = min + (max - min) * rnd();
    for (let i = 25; i >= 0; i--) {
      const d = new Date(fim); d.setDate(d.getDate() - i * 7);
      let preco;
      if (i === 0) preco = oferta.preco;
      else {
        nivel += (rnd() - 0.5) * 0.06;
        nivel = Math.min(max, Math.max(min, nivel));
        preco = oferta.preco * nivel;
        if (rnd() < 0.08) preco *= 0.9; // promoção relâmpago
        if (perfil === "baixa") preco = Math.max(preco, oferta.preco * 1.01);
      }
      pontos.push({ data: d.toISOString().slice(0, 10), preco: Math.round(preco * 100) / 100 });
    }
    return pontos;
  }
  ofertas.forEach(of => {
    const p = produtos.find(x => x.id === of.produtoId);
    of.historico = historico(of, p.perfilHistorico);
  });

  return { lojas, produtos, ofertas, atualizadoEm: hoje, demonstracao: true };
})();
