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

Observações: O módulo http é muito baixo nível. Criando uma aplicação web usando os fragmentos tem muito tempo de consumo. Esta é uma das razões que entra o uso de frameworks. Alguns frameworks conhecidos:
* express (Fast, unopinionated, minimalist web framework for Node.js - http://expressjs.com/)
* hapi
* koa
* restify

Vamos usar o express:
Instalação do express:
```shell
$ npm install express --save
```