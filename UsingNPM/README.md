## Usando o npm
NPM é um gerenciador de pacotes usado por aplicações node.js, muitos módulos é possível encontrar através do npm. Há duas formas de interação, via website https://npmjs.com ou via cli. O NPM é empacotado junto com o node.js, não sendo necessário instalá-lo.

#### Adicionando dependências
Uma vez que tenhamos o package.json, podemos adicionar depedências a aplicação, exemplo:
```shell
$ npm install lodash --save
```
Com o comando acima estamos:
* Baixando o lodash na pasta node_modules que é a pasta onde ficam todas as dependências externas que serão colocadas ao projeto;
* lodash é adicionado como uma nova propriedade de dependência dentro do package.json. Exemplo:
```
  "dependencies": {
    "lodash": "^4.17.11"
  }
```
* lodash: Lodash é uma biblioteca JavaScript que fornece funções de utilidade para tarefas comuns de programação usando o paradigma de programação funcional.

Observações: Dado um número de versão MAJOR.MINOR.PATCH, incremente a versão MAJOR quando fizer alterações de API incompatíveis, versão MINOR quando adicionar funcionalidade de uma maneira compatível com versões anteriores e versão PATCH ao fazer correções de bugs compatíveis com versões anteriores. Para mais informações: http://semver.org/.

Agora que o lodash está instalado, não precisamos especificar o path, apenas o nome do módulo, no require fica apenas dessa forma:
```
// index.js
const _ = require('lodash')

_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 }
``` 

#### Adicionando depedências de desenvolvimento
Quando você está construindo aplicativos da Web, pode ser necessário minimizar seus arquivos JavaScript, concatenar arquivos CSS e assim por diante. Os módulos que serão executados somente serão executados durante a construção dos ativos, portanto, o aplicativo em execução não precisa deles.

```
$ npm install mocha --save-dev
```
Após instalar com a opção --save-dev, será criada uma nova propriedade no package.json chamada devDependencies com esse módulo:
```
  "devDependencies": {
    "mocha": "^6.0.2"
  }
```

#### NPM scripts
Define em seu package.json como a aplicação é rodada e testada, permitind   o criar atalhos de comandos usando npm. Exemplo:
```
  "scripts": {
    "test": "npm test"
  }
```

#### Pacotes privados com escopo de nomenclatura:
Originalmente, o NPM tinha um namespace compartilhado global para nomes de módulos - com mais de 475.000 módulos no registro, a maioria dos nomes simples já foi feita. Além disso, o namespace global contém apenas módulos públicos.

O NPM resolveu esse problema com a introdução de pacotes com escopo definido. Os pacotes com escopo têm o seguinte padrão de nomenclatura:

```
@myorg/mypackage
```

```shell
$ npm install @myorg/mypackage --save
```
Package.json:
```
"dependencies": {
  "@myorg/mypackage": "^1.0.0"
}
```

chamada do módulo usando require:
```
require('@myorg/mypackage')
```