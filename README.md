# DM Digital — site institucional

Stack: React + Vite + Tailwind CSS v4.

## Rodar localmente (PowerShell)

```powershell
npm install
npm run dev
```

## Build de produção

```powershell
npm run build
```

O resultado fica em `dist/`. Para deploy no Render (mesmo fluxo que você já usa nos outros projetos):

```powershell
npm run build
git add -f dist/
git commit -m "build: gera dist para deploy"
git push
```

## Antes de publicar — trocar placeholders

- `index.html` → `GTM-XXXXXXX` (Google Tag Manager) e `SEU_PIXEL_ID` (Meta Pixel)
- `src/data/content.js` → `WHATSAPP_NUMBER` (formato 55DDDNUMERO, sem espaços/símbolos)
- `src/components/ContactCTA.jsx` → ligar o `onSubmit` a um endpoint real (Supabase, e-mail, etc.) no lugar do placeholder marcado com `TODO`
- Trocar e-mail e telefone genéricos ("contato@dmdigital.com.br", "(00) 00000-0000") pelos reais nos componentes `ContactCTA.jsx` e `Footer.jsx`
- Trocar os links vazios (`href="#"`) do Instagram/Facebook/LinkedIn no `Footer.jsx`
- Gerar e adicionar `/public/og-image.jpg` (1200x630) para o preview de compartilhamento
- Ajustar `favicon.svg` em `/public` para a marca DM Digital

## Estrutura

```
src/
  components/   → cada seção do site é um componente
  data/         → content.js centraliza todos os textos (fácil editar sem mexer em JSX)
  index.css     → tokens de marca (cores, fontes) no bloco @theme
```

## Paleta de marca

| Token      | Hex       |
|------------|-----------|
| espresso   | #3D2408   |
| bronze     | #96692B   |
| cream      | #F4EDE3   |
