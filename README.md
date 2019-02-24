## Este repositório é para propósitos de estudos em nodejs

### O que é nodejs
Nodejs é um framework opensource, é um ambiente cross-platform runtime para desenvolvimento server-side e aplicações de rede, escrito em javascript e compilado em tempo de execução. O nodejs é um runtime que usa o mesmo engine javascript V8 encontrado no browser google chrome.

A maior vantagem em se usar nodejs é de permitir que os desenvolvedores possam usar javascript tanto no frontend quanto no backend.

#### Instalação do nodejs
A última versão do nodejs pode ser encontrada [aqui](https://nodejs.org/en/download/). Em contrapartida, você pode instalar mais versões de node usando o pacote nvm:

Instalação do nvm [aqui](https://github.com/creationix/nvm)

Instalação da versão 8.4 do nodejs usando nvm:
```shell
$ nvm install 8.4
```
Verificando a versão instalada:
```shell
$ node --version
```
Para usar uma versão específica do nodejs que já esteja instalada:
```shell
$ nvm use 10
```
Todas essas versões seguem um release que indicam as versões estáveis (LTS), parecido com o Ubuntu, sendo 4, 6, 8, e as impares são versões experimentais.

#### Criando um hello world em node.js usando o console e criando um arquivo index.js:
Console:

```shell
    $ node
    > console.log('Hello from Node.js')
```

Arquivo:

```shell
    $ vim index.js
    console.log('Hello from Node.js')
```
Para executar o arquivo, use:
```shell
$ node index.js
```

### Modularização da aplicação node.js
Cada projeto node.js inicia criando um arquivo chamado package.json, que é uma representação JSON da aplicação e suas dependências, contendo informações como nome da aplicação, autor e todas as dependências necessárias para rodar a aplicação.

É possível gerar o package.json de forma interativa usando o **npm init**. Serão feitas algumas perguntas que servirão para montar o package.json. No meu caso o package.json ficou da seguinte forma:

```
{
  "name": "nodehero",
  "version": "1.0.0",
  "description": "estudos de nodejs",
  "main": "index.js",
  "scripts": {
    "test": "npm test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vnessaethi/nodehero.git"
  },
  "author": "Vanessa Santos Fernandes",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vnessaethi/nodehero/issues"
  },
  "homepage": "https://github.com/vnessaethi/nodehero#readme"
}
```
É uma boa prática adicionar um start script no package.json. O campo script no package.json, nos permite usar o npm com a comando que colocarmos, por exemplo:

```
 "scripts": {
    "test": "npm test",
    "start": "node index.js"
  }
```

Nos campos test e start acima, podemos rodar o seguinte comando para executar os testes e execução do programa:
```shell
$ npm test
$ npm start
```


#### Referências:
* https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/
* https://learn.freecodecamp.org/