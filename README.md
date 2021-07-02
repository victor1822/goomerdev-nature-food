# GoomerDev Test
## _Nature Food_

Este código foi desenvolvido em julho de 2021 para seleção front end da Goomer 🚀

O projeto está no ar [aqui](https://goomerdev-nature-food.vercel.app/)

## Instalação e requisitos

Requer [Node.js](https://nodejs.org/) v12.18.3+ e [Yarn](https://classic.yarnpkg.com/en/docs/) v1.22.5+ para rodar.

Clone o repositório com o seguinte comando no seu diretório de preferencia com o seguinte comando: 

```sh
git clone https://github.com/victor1822/goomerdev-nature-food.git
```

Instale as dependências para iniciar o servidor e abrir o navegador em  [http://localhost:3000/](http://localhost:3000/).

```sh
cd dev-nature-food
yarn
yarn dev
```

para rodar os testes, basta rodar o seguinte comando:

````sh
yarn test
````

## Estrutura de pastas

Criei o projeto usando o [create-react-app](https://pt-br.reactjs.org/docs/create-a-new-react-app.html), que configura um setup básico. A partir dele, criei uma pasta src para guardar todos os arquivos do projeto. Alterei o arquivo App.js para exibir o componente de listagem de restaurantes ou o componente de listagem do menu do restaurante selecionado sob a condição de ter um restaurante selecionado ou não. Como eu percebi que era uma aplicação pequena, preferi não usar algo como um [react router dom](https://reactrouter.com/web/guides/quick-start) para gerenciar as rotas da página, por pensar no projeto como um componente apenas. Também não enxerguei a necessidade de usar o [redux](https://redux.js.org/) ou o useContext nativo do [react](https://pt-br.reactjs.org/docs/getting-started.html) para gerenciamento de estado global da aplicação porque eu preferi usar o mesmo state que estava gerenciando nativo do react desta tela para definir qual conteúdo seria exibido para guardar as informações do restaurante selecionado e passar ele para os componentes filhos através das props, o que se chama na comunidade de _prop drilling_. Daria para ter configurado o redux para gerenciar o estado do modal e dos conteúdos das divs filhas e gerenciar o estado de toda a aplicação com um único state da mesma forma, sem usar _prop drilling_, mas achei desnecessário pelo tamanho do projeto e aumentaria a árvore de dependencias pra algo muito pequeno. 

##### assets

A pasta assets, na raís do projeto guarda todos os arquivos de imagem utilizadas no projeto, como imagens padrão para imagens que não fossem carregadas pela API, ou assets de ícones disponibilizados pela goomer [aqui](https://xd.adobe.com/spec/f6e71782-ebba-4573-6f7a-005a1a6d391f-80d6/grid).

##### helpers

Como os arquivos javascript tem muito conteúdo por conta dos componentes, envolvendo states, useEffects, jsx, etc, para deixar o código mais limpo, quando eu precisava de funções muito longas, separava num arquivo na pasta helpers na raís do src do projeto, assim reduz a verbosidade do código e divide responsabilidade dos arquivos que retornava um componentes dos arquivos de funções (consegui fazer isso na maioria dos arquivos, só quando a função era muito pequena, que eu mantive no arquivo do componente mesmo, o que pode ser uma melhoria para ser acrescentada no código futuramente, aumentando os arquivos da pasta helpers, mas deixando o código dos componentes mais legível e limpo ainda).

##### hooks

Na pasta hooks eu centralizei todos os customHooks que eu criei para tratar a resposta da api de dois endpoints criados na aplicação. O useGetRestaurantMenu que retorna o menu do restaurante a partir do id do restaurante e o useGetRestaurants que é basicamente um endpoint que retorna uma lista de restaurantes. O arquivo index na pasta hooks utilizei para centralizar todos os hooks exportados das outras pastas para facilitar a importação nos arquivos javascript dos componentes, reduzindo a verbosidade dos imports (fiz a mesma coisa no arquivo index da pasta services).

##### services

Na pasta services criei a pasta restaurants para guardar todos os serviços de restaurantes. Os contratos dos endpoints da api estão disponíveis [aqui](https://github.com/goomerdev/job-dev-frontend-interview). Dentro dele, eu fiz os testes unitários dos serviços usando o [jest](https://jestjs.io/pt-BR/)

##### pages

Aqui estão todos os componentes da  aplicação, como não vi a necessidade de criar rotas, os componentes principais gerenciados pelo state local do arquivo app.js exibe um dos componentes: Se não tiver nenhum restaurante selecionado, retorna o componente localizado na pasta SearchRestaurantsDashboard, caso contrário, o componente da pasta SelectedRestaurantMenu. Em todo arquivo de componente tem a seguinte estrutura: Arquivo index.js para colocar todo o jsx do componente, uma pasta components, com algum compoente com uma tarefa específica para reduzir a verbosidade do código e separar responsabilidades dos componentes, como o MenuItem, que é exibir o conteúdo de um item do menu e SelectedRestaurantMenu que lista todo o menu de um restaurante selecionado, um arquivo styles.js para colocar o código de estilos, utilizando o [styled-components](https://styled-components.com/docs/basics) por ser uma biblioteca de estilização simples de usar e configurar e amplamente utilizada na comunidade para criação e estilização de componentes. Poderia ter usado css puro, algum pré-processador css como scss ou sass, mas além do styled componentes ter o scss em sua estrutura, nem precisa de alguma configuração extra, o que simplifica o trabalho do programador e eu consegui demonstrar minhas aptidões em css, scss e styled components de uma vez só.

Nos arquivos de componentes não fiz nenhum tipo de validação de dados com o [react hook form](https://react-hook-form.com/) ou [formik](https://formik.org/docs/overview) junto com o [yup](https://www.npmjs.com/package/yup) porque não havia nenhuma necessidade de tratar os dados dos campos de input de filtro das pesquisas, uma vez que não estava sendo feita nenhuma outra request a api para refazer a busca de menu ou do restaurante, como era algo local e simples, usei apenas states locais para registrar os dados dos inputs, sem fazer nenhum uso de validação de dados. Instalar essas libs acrescentaria mais coisa na arvore de dependências sem necessidade porque é um projeto pequeno e não imaginei em nenhuma tratativa de erro para busca de restaurantes e menus que precisasse ser levada em consideração. 
Uma funcionalidade que acharia interessante de ser acrescentada nos próximos testes é acrescentar queryParams aos serviços para que a listagem seja mais performática no front para pesquisas com muitos itens, e talvez paginação. É uma possível melhoria do teste.

## Dificuldades

Tempo tem sido uma questão complicada durante essa semana, então a documentação não ficou tão detalhada quanto eu gostaria. Também não tive muito tempo pra pensar em como fazer de uma forma mais performática e clean code das coisas, fui programando meio que nas carreiras e fiz o melhor que pude. Nas funções nativas de reduce e find do array do javascript tentei simplificar o máximo que eu conseguia os algoritmos de mostrar as promoções ativas na hora certa, para fazer os refreshs automaticos em tempo real dessas promoções eu usei o setTimout do javascript para fazer a verificação da promoção a cada minuto sem precisar recarregar os dados novamente da api ou recarregar o navegador, também não tive tempo para pensar se haveria uma outra solução melhor e mais rápida e documentar melhor a forma que eu implementei essas coisas, então acho que o meu desafio mesmo foi conseguir entregar tudo da melhor maneira, mas resolver o problema em si não foi tão complicado. Espero que vocês gostem :D 

## Detalhes importantes

Fiz uma tratativa para pesquisas que resultassem num array vazio, então na hora de testar meu código, deem uma olhada nos inputs preenchendo algum valor que não dê nenhum match nas pesquisas, fiz umas mensagens de erro até engraçadinhas, vale a pena conferir! haha XD

## Features


- Consulte a API disponibilizada para buscar as informações.
- Crie uma tela para exibir a lista de restaurantes:
    - O usuário deve ser capaz de buscar por estabelecimento.
    - Indique se cada um deles está aberto ou fechado sem ser necessário recarregar ou reabrir a página.
    - Para cada restaurante, deve ser exibido os horários de funcionamento, as promoções ativas no momento e o cardápio.
    - O restaurante deve atualizar o status de aberto/fechado, de acordo com o horário de funcionamento, sem ser necessário recarregar ou reabrir a página.
- Crie uma tela para exibir os produto do cardápio de cada um dos restaurantes:
    - O usuário deve ser capaz de buscar os produtos. 
    - Para os produtos com promoção ativa, deve ser exibido o valor original e o valor promocional.
    - As promoções ativas e o valor promocional devem ser atualizados na interface, de acordo com o horário, sem a necessidade de recarregar ou reabrir a página.
