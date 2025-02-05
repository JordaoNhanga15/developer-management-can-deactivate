# Angular Developer Form with canDeactivate Guard

## Funcionalidades

- **Formulário de Desenvolvedores:** Um formulário para adicionar novos desenvolvedores, com validações para garantir que todos os campos obrigatórios sejam preenchidos corretamente.
- **Guarda canDeactivate:** Utilização do guard `canDeactivate` para proteger a navegação quando o formulário contém alterações não salvas, evitando a perda de dados acidental.
- **Diálogo de Confirmação com PrimeNG:** Integração do PrimeNG para exibir um diálogo de confirmação estilizado, solicitando ao usuário a confirmação antes de navegar para longe do formulário com alterações não salvas.
- **Lista de Desenvolvedores:** Exibição de uma lista de desenvolvedores com detalhes como nome, especialidade, status, tecnologias e projetos participantes.

## Objetivo

O objetivo deste projeto é demonstrar como implementar um guard `canDeactivate` em um aplicativo Angular para proteger a navegação quando há alterações não salvas em um formulário. Além disso, o projeto mostra como estilizar o diálogo de confirmação usando PrimeNG para proporcionar uma melhor experiência de usuário.

## Pré-requisitos

Para executar este projeto, você precisará ter o **Node.js** e o **Angular CLI** instalados em sua máquina.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/JordaoNhanga15/developer-management-can-deactivate
   cd developer-management-can-deactivate
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Instale PrimeNG e PrimeIcons:**

   ```bash
   npm install primeng primeicons
   ```

4. **Adicione os estilos do PrimeNG e PrimeIcons no arquivo `angular.json`:**

   ```json
   "styles": [
     "node_modules/primeng/resources/themes/saga-blue/theme.css",
     "node_modules/primeng/resources/primeng.min.css",
     "node_modules/primeicons/primeicons.css",
     "src/styles.css"
   ]
   ```

## Uso

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

2. **Abra o navegador e acesse:**

   [http://localhost:4200](http://localhost:4200)

## Contribuição

Se desejar contribuir com este projeto, sinta-se à vontade para abrir um Pull Request ou issue.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

