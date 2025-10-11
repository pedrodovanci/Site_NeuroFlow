# Notas de Desenvolvimento

Este projeto é um aplicativo Next.js. Para executar localmente:

- Node.js 18+ instalado.
- No diretório do projeto, rode:

```
npm install
npm run dev
```

- Acesse `http://localhost:3000/` no navegador.

## Scripts úteis
- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build de produção.
- `npm start`: inicia o servidor em modo produção após o build.

## Estrutura principal
- `src/app/`: páginas e layout no App Router.
- `public/`: arquivos estáticos (imagens, fontes, ícones).
- `next.config.ts`: configurações do Next.js.

## Observações
- A pasta `.next/` é gerada automaticamente e ignorada no versionamento.
- Use variáveis de ambiente em `.env.local` quando necessário.