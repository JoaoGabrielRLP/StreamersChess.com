# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Streamers de Xadrez

  Aplicacao React + TypeScript que lista streamers de xadrez usando a API publica do Chess.com.

  ## Desenvolvimento

  Execute os comandos a partir da pasta `ListaStreamersXadrez`:

  ```bash
  npm install
  npm run dev
  ```

  ## Validacao

  ```bash
  npm run lint
  npm run build
  ```

  ## GitHub Pages

  O deploy e realizado automaticamente pelo workflow `.github/workflows/deploy-pages.yml` a cada push na branch `main`.

  No repositorio `JoaoGabrielRLP/StreamersChess.com`, ative `Settings > Pages > Build and deployment > Source: GitHub Actions`.

  Depois da execucao bem-sucedida do workflow, a aplicacao fica disponivel em:

  `https://joaogabrielrlp.github.io/StreamersChess.com/`
      },
