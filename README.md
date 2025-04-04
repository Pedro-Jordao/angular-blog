# MUGIWARANDO BLOG

Projeto desenvolvido como parte do bootcamp **Decola Tech Avanade 2025**, com o objetivo de praticar conceitos fundamentais do Angular 14, incluindo:

- Componentização
- Data Binding
- Diretivas
- Módulos
- Navegação com rotas
- Organização de projeto em pastas

## Estrutura de Diretórios

src/ └── app/ ├── components/ │ ├── big-card/ # Componente principal de destaque │ ├── small-card/ # Componente reutilizável de cards menores │ ├── menu-bar/ # Componente da barra de menu com ícones sociais │ └── menu-title/ # Componente de título da seção ├── data/ │ └── dataFake.ts # Fonte de dados simulada ├── pages/ │ ├── home/ # Página principal com destaque e cards │ └── content/ # Página de conteúdo dinâmico com base no ID da rota ├── app.component.* # Componente raiz ├── app-routing.module.ts # Configuração de rotas └── app.module.ts # Módulo principal da aplicação

markdown
Copiar
Editar

## Tecnologias utilizadas

- [Angular CLI 14.1.2](https://angular.io/)
- Node.js (recomendado: v16 LTS)
- TypeScript
- HTML + CSS (sem Bootstrap)

## Execução

```bash
npm install
ng serve
Acesse no navegador: http://localhost:4200

Aprendizados
Durante o desenvolvimento, foram abordados os seguintes tópicos:

Criação e uso de componentes reutilizáveis (big-card, small-card)

Passagem de propriedades via @Input

Uso de routerLink para navegação com parâmetros

Simulação de dados com arquivo TypeScript (dataFake.ts)

Responsividade com CSS

Estilização utilizando referências visuais do Dribbble e ferramenta de cores Just Color Picker
