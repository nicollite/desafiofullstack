# Desafio para a vaga de Desenvolvedor Fullstack

Se você recebeu esse link, provavelmente você se candidatou para a vaga de Fullstack do time de produto da mobLee. Então, primeiramente, parabéns por ter sido selecionado =)

O objetivo desse desafio é identificar a qualidade do código, entender um pouco da sua lógica de programação e capturar a forma com a qual você organiza essas ideias.

Abaixo seguem todas as instruções para você conseguir executar o desafio.

## Começando

Este repositório foi desenvolvido em plataforma linux, os comandos aqui apresentados serão em sua maioria comandos bash shell.

Primeiro de tudo clone o projeto para o local de desenvolvimento:

```sh
git clone https://github.com/nicollite/desafiofullstack.git
cd desafiofullstack/
```

Você precisará das seguintes dependencias:

- [Node >=10.x.x](https://github.com/creationix/nvm)
- [NPM](https://docs.npmjs.com/)

Outras dependeincias opcionais usadas são:

- [PM2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)

Então instale as dependencias (node_modules) ou rode o script de instalação install.sh (é necessario que tenha o bash installado para rodar esse comando):

```sh
cd frontend && npm install && cd ../backend && npm install
# or
bash scripts/install.sh
```

Caso queira instalar as dependencias opcionais rode o script de instalação opcional:

```sh
bash scripts/install-optional.sh
```

Para servir o frontend e backend juntos rode o seguinte comando ou rode o script de inicialização:

```sh
npx pm2 start ecosystem.config.js
# or
bash scripts/start.sh
```

Ao inicializar a aplicação uma pasta `logs` será criada na root do projeto, ali você poderá ver os logs do frontend e backend.
O projeto então será servido em:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000/graphql](http://localhost:5000/graphql)

Para parar de servir o frontend e backend rode o seguinte comando ou rode o script de parada:

```sh
npx pm2 delete all
# or
bash scripts/stop.sh
```

Caso algo de errado aconteça você pode reiniciar os processos que servem o frontend e backend pelo seguinte comando ou script:

```sh
npx pm2 restart all
# or
bash scripts/restart.sh
```

Pode ver também o status do frontend e backend pelo comando ou script:

```sh
npm pm2 status
# or
bash scripts/status.sh
```

### Scripts

Como pode ver os comandos acima utilizam a pasta `scripts` que contem uma série de arquivos .sh que são rodados em bash para automatizar algumas das tarefas de desenvolvimento.

## Frontend

Ao servir o frontend se deparará com uma interface semelhante a essa:
![Frontend](https://lh6.googleusercontent.com/5NYmGcJ3xGDnSFKlIBU0aQeD9gWbR6GWc_o8aUtV3mUM3owQcgk1XEk_JDaYcb3dfvz2kvCqp5LErYNPD3cA=w795-h657-rw)

Ao clicar no botão buscar uma requisição graphql será feita ao backend com os valores colocados nos inputs da tela, esses servirão como filtro para buscar questões no StackOverflow pela api do StackExchange.

Toda consulta retornará com a tag `javascript` como pedido pelos requisitos.

## Backend

O backend é servido pela URL http://localhost:5000/graphql que é onde a API graphql está rodando. Caso o backend rode em mode de desenvolvimento (que é o padrão) você também pode acessar a URL emnsionada para ver a interface da ferramenta GraphiQL tool.

A ferramenta GraphiQL tool pode ser usada para testar requisições GraphiQL para o backend, um exemplo de requisição que pode ser é:

```graphql
query Questions($tags: String!, $score: String, $sort: String, $limit: String) {
  questions(tags: $tags, score: $score, sort: $sort, limit: $limit) {
    tags
    owner {
      reputation
      user_id
      user_type
      profile_image
      display_name
      link
    }
    is_answered
    view_count
    answer_count
    score
    last_activity_date
    creation_date
    question_id
    content_license
    link
    title
  }
}
```

Veja que essa requisição a variavel $tags é requerida então você pode usar o json abaixo dentro de query variables:

```json
{
  "tags": "Javascript"
}
```

### Como entregar este desafio

1. Faça um fork deste repositório no Github (ou qualquer outro gerenciador git da sua preferência).
2. Edite esse README e mantenha ele atualizado com as informações necessárias para compreender/executar seu projeto e qualquer outra informação relevante para que tenhamos a melhor compreensão possível do seu desafio
3. Ao final do desafio, responda o e-mail que você recebeu enviando o link do seu repositório.

Obs.: Não fazer um Pull Request para este projeto!

### Com o que devo me preocupar quando for entregar os desafios?

- Descreva como utilizar e executar a sua solução;
- Procure deixar seu código bem organizado;
- Faça commits curtos e com descrição clara do que cada commit faz;
- Descreva qualquer outra coisa que acha importante sabermos :)
- Não se limite aos requisitos destes desafios. Sinta-se em casa em adicionar mais detalhes a solução.

Você deve fazer o desafio em Javascript, que é a principal linguagem que estamos trabalhando atualmente, mas se você realmente domina outra linguagem e acredita que seu código ficará melhor utilizando-a, sinta-se à vontade. Se você utilizar os frameworks React ou Vue já sai na frente.

## Desafio 1 - API Graphql

**Objetivo:** criar uma API GraphQL que funcione como uma interface intermediária para a [API de question do StackOverflow](https://api.stackexchange.com/docs/questions).

### Descrição

Essa chamada de API precisa receber como input 4 parâmetros:

- O parâmetro 'score' deve filtrar o resultado mostrando apenas as questões com valor maior que o definido por parâmetro.
- O parâmetro 'sort' define a propriedade utilizada para ordenar os resultados.
- O parâmetro 'limit' define o número de resultados.
- O parâmetro 'tag' define a tag que você quer buscar

Apenas o parâmetro 'tag' precisa ser obrigatório. Para os outros parâmetros, defina um valor default.

## Desafio 2 - Front-end

**Objetivo:** Implementar [esta interface](https://drive.google.com/file/d/1TeyJx9meFHKFH33VeqzfNeXcA0V_gsIu/view) e conectar ela ao back-end criado no Desafio 1.

### Descrição

Ao clicar em buscar, você deve consultar a API GraphQL que você implementou e mostrar os resultados abaixo, na mesma página, sem recarregá-la. Sua busca deve sempre trazer resultados para a tag 'Javascript'.

Você pode mostrar os resultados da forma que achar melhor. Capricho na interface e bons feedbacks para o usuário contam pontos para sua avaliação.

---

Se tiver dúvidas, não hesite em perguntar!

Aqui vão alguns links úteis:
https://api.stackexchange.com/docs/questions
http://graphql.org/learn/
https://www.apollographql.com/
