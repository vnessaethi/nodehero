### Entendendo programação assíncrona

#### Programação Síncrona x Assíncrona
Em poucas palavras, programação síncrona uma requisição é enviada, o processo remetente (main thread) fica bloqueada até que ocorra uma resposta, não sendo possível enviar novas requisições até que a atual seja finalizada. Então na comunicação síncrona, a primeira requisição a entrar, é a primeira a sair (FIFO).
Na programação assíncrona não existe sincronismo, uma dada requisição é enviada e só terá resposta quando estiver pronto, sem bloquear novas requisições, ou seja, executando diversas requisições em paralelo, evitando assim que a aplicação fique bloqueada.

No exemplo1.js, temos uma leitura de um arquivo de forma síncrona, ou seja, o programa ficará bloqueado até que a operação seja finalizada, não podendo fazer nenhuma outra operação enquanto o arquivo estiver sendo lido.

A programação assíncrona - como sabemos agora em JavaScript - só pode ser obtida com funções: elas podem ser passadas como qualquer outra variável para outras funções. Funções que podem assumir outras funções como argumentos são chamadas higher-order functions. Higher-order functions: [Higher Order Functions](https://blog.risingstack.com/functional-ui-and-components-as-higher-order-functions/)

Exemplo assíncrono:
```
    const numbers = [2,4,1,5,4]

    function isBiggerThanTwo (num) {
    return num > 2
    }

    console.log(numbers.filter(isBiggerThanTwo))
```
No exemplo acima, está sendo passado a função "isBiggerThanTwo" para a função de filtro, não sendo necessário retornar valores, mas coloquei um console.log para ver o resultado.

O exemplo abaixo mostra as chamadas de retorno de erros, em que os módulos principais o usam, assim como a maioria dos módulos encontrados no NPM. Será gerado o seguinte erro, pois não existe o arquivo file.md, existindo o arquivo, exibirá o seu conteúdo: 

```
    { Error: ENOENT: no such file or directory, open 'file.md' errno: -2, code: 'ENOENT', syscall: 'open', path: 'file.md' }
```

```
    const fs = require('fs')
    fs.readFile('file.md', 'utf-8', function (err, content) {
    if (err) {
        return console.log(err)
    }

    console.log(content)
    })
```
Algumas observações:

* tratamento de erros: em vez de um bloco try-catch você precisa verificar erros no retorno de chamada

* sem valor de retorno: as funções async não retornam valores, mas os valores serão passados para os retornos de chamada.

Exemplo:
```
    const fs = require('fs')

    console.log('start reading a file...')

    fs.readFile('file.md', 'utf-8', function (err, content) {
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }

    console.log(content)
    })

    console.log('end of the file')
```

Acima, é passado um callback (retorno de chamada) que nada mais é que uma função passada como argumento para outra função, e que é chamada na conclusão de uma determinada tarefa. Por exemplo, uma função para ler um arquivo pode começar a ler o arquivo e retornar o controle ao ambiente de execução imediatamente para que a próxima instrução possa ser executada. Quando a E/S do arquivo for concluída, ela chamará a função de retorno de chamada, ao passar a função de retorno de chamada, o conteúdo do arquivo como um parâmetro. Portanto, não há bloqueio ou espera por E/S de arquivo. Isso torna o Node.js altamente escalável, pois pode processar um grande número de solicitações sem esperar que qualquer função retorne resultados.

#### Event Loop
É responsável por agendar operações assíncronas. 

#### Programação orientada a eventos:

A programação orientada a eventos é um paradigma de programação em que o fluxo do programa é determinado por eventos como ações do usuário (cliques do mouse, pressionamentos de tecla), saídas do sensor ou mensagens de outros programas / threads. Na prática, isso significa que os aplicativos agem em eventos. Além disso, como já aprendemos no primeiro capítulo, o Node.js é single-threaded - do ponto de vista de um desenvolvedor. Isso significa que você não precisa lidar com threads e sincronizá-los, o Node.js abstrai essa complexidade.

#### Async Control Flow:
Exemplos para ajudar a organizar o código:

* Async.js:
Para evitar o chamado [Callback-Hell](http://callbackhell.com/), uma coisa que você pode fazer é começar a usar o async.js. O Async.js ajuda a estruturar seus aplicativos e facilita o fluxo de controle.

Exemplo:

```
    async.parallel(['file1', 'file2', 'file3'], fs.stat, function (err, results) {
        // results is now an array of stats for each file
    })
```

Promises:
O objeto Promise é usado para cálculos diferidos e assíncronos. Um Promise representa uma operação que ainda não foi concluída, mas é esperada no futuro.

Na prática, o exemplo anterior poderia ser reescrito da seguinte forma:
```
function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

Promise.all([
  stats('file1'),
  stats('file2'),
  stats('file3')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
```


Referencias: [Programação assíncrona](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)