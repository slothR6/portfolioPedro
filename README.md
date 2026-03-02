
## Requisitos

- Node.js 20+
- npm 10+

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


## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Zod
