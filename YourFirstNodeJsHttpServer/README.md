### Construindo meu primeiro node http server

#### Módulo http para nodejs server
[httpserver](httpserver.js)
Basicamente para instanciar um módulo http, exemplo:
```shell
const http = require('http')
```

- Exemplificando:   
  - requestHandler: Essa função será chamada toda a vez que a página for carregada. Duas mensagens de logs irão aparecer no output da linha de comando, que o / e /favicon.ico.
  - if (err): manipulação de erro. Nesse caso se a porta já estiver em uso por qualquer razão, ou o servidor não pode iniciar, será informado.

Observações: O módulo http é muito baixo nível. Criando uma aplicação web usando os fragmentos tem muito tempo de consumo. Esta é uma das razões que entra o uso de frameworks. Alguns frameworks web conhecidos:
* express (Fast, unopinionated, minimalist web framework for Node.js - http://expressjs.com/)
* hapi (https://hapijs.com/)
* koa (https://koajs.com/)
* restify (http://restify.com/)

Vamos usar o express, mais informações [aqui](https://expressjs.com/pt-br/):
Instalação do express:
```shell
$ npm install express --save
```

Exemplo abaixo de como criar uma aplicação similar ao http criado anteriormente:
```shell
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log('server is listening on ${port}')
})

```
A grande diferença entre usar http e um framework web, é que o express te fornece um router, e posso obter uma rota através de app.get, app.post, app.put, etc, eles serão traduzidos para o verbo http correspondente. Um dos conceitos mais poderosos que o express implementa é um pattern de middleware para requisições http.

Exemplo de uso de middleware: ![express middleware](expressmiddleware.js)
Exemplificando cada item do código:
- app.use: É forma de como podemos definir um middleware, toma uma função com 3 parametros, respectivamente falando, request, response e next (callback). Usando o next, ele pula para o próximo middleware ou route handler.


