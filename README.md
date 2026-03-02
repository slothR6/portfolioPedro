# Premium Portfolio - Next.js

Portfólio premium, moderno e minimalista com estética Awwwards style, dark theme por padrão e acentos em gradiente electric blue + purple.

## Requisitos

- Node.js 20+
- npm 10+

## Comandos

```bash
npm install
npm run dev
npm run build
npm run start
```

## Configuração de contato

Edite `lib/utils/constants.ts` para configurar:

- `WHATSAPP_NUMBER` no formato internacional
- `LINKEDIN_URL` com o seu perfil

## Como adicionar novos projetos

Abra `lib/data/projects.ts` e inclua um novo item no array `projects` seguindo o tipo `Project`:

- `slug`
- `title`
- `description`
- `techStack`
- `liveUrl`
- `githubUrl`

A seção de projetos e o modal atualizam automaticamente.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Acesse a Vercel e clique em **Add New Project**.
3. Selecione o repositório e confirme.
4. Use as configurações padrão detectadas pela Vercel.
5. Clique em **Deploy**.

Sem configuração extra.

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Zod
