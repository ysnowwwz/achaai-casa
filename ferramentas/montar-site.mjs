// Monta a pasta docs/ (para um GitHub Pages no futuro, só se ela aprovar).
// A página é escrita sem <!doctype>/<head> (o Artifact do Claude completa isso).
// Aqui ela ganha o documento completo.
// Rodar a partir da raiz do repo:  node ferramentas/montar-site.mjs
import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";

const DOCS = "docs";
await rm(DOCS, { recursive: true, force: true });
await mkdir(DOCS, { recursive: true });

const reset = `<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>`;
function documento(conteudo) {
  const c = conteudo.replace(/<meta name="viewport"[^>]*>\s*/g, "");
  return `<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="description" content="AchaAI Casa: compara itens de casa pelo preço final na sua porta, com frete, montagem e imposto. Projeto de estudo, preços de demonstração.">\n${reset}\n${c}\n</html>\n`;
}

await writeFile(`${DOCS}/index.html`, documento(await readFile("casa.html", "utf8")));
for (const f of ["config.js", "nucleo.js"]) await cp(f, `${DOCS}/${f}`);
await cp("dados", `${DOCS}/dados`, { recursive: true });
await cp("assets", `${DOCS}/assets`, { recursive: true });
await writeFile(`${DOCS}/.nojekyll`, "");
console.log("docs/ pronto");
