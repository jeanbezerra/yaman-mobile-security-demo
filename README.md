# Yaman Mobile Security Demo

Este projeto é um aplicativo demonstrativo desenvolvido em Ionic com Angular, com foco em segurança de aplicações móveis. Ele simula práticas e técnicas comumente utilizadas na proteção de código-fonte e comunicação de apps híbridos.

---

## Stack Tecnológica

- **Framework**: [Ionic](https://ionicframework.com/) 7
- **Frontend**: Angular 16
- **Runtime Nativo**: Capacitor 5 (preparado, ainda não ativado)
- **Linguagem**: TypeScript
- **Gerenciador de pacotes**: npm
- **Build target**: WebView (`www/`) e posteriormente plataformas Android/iOS via Capacitor

---

## Estrutura do Projeto

```
src/
├── app/ # Componentes, páginas e módulos principais
├── assets/ # Imagens, ícones e recursos estáticos
├── environments/ # Configurações por ambiente
├── theme/ # Estilização SCSS global
├── main.ts # Entry point da aplicação
└── polyfills.ts # Compatibilidade com browsers antigos

www/ # Output final do build (distribuição web/nativo)
capacitor.config.ts # Configuração do Capacitor (webDir = www)
```

---

## Configuração de Ofuscação

Para proteger o código JavaScript/TypeScript do app final, foi configurado o `javascript-obfuscator` como etapa pós-build:

### Dependência instalada

```bash
npm install --save-dev javascript-obfuscator
```

### Script configurado no package.json

```json
"scripts": {
  "build": "ng build --configuration production",
  "postbuild": "javascript-obfuscator ./www --output ./www --compact true --self-defending true --control-flow-flattening true --dead-code-injection true --disable-console-output true --string-array true --string-array-encoding base64"
}
```
### Como executar
```bash
npm run build
```
### Isso irá:

Gerar o build de produção no diretório www/

Aplicar a ofuscação automaticamente nos arquivos gerados (main.js, runtime.js, etc.)

### Como validar
- Após o build, inspecione os arquivos em www/ e verifique:
- Nomes de variáveis e funções ofuscados
- Uso de strings criptografadas
- Código compactado e ilegível
- Remoção de console.log e similares
