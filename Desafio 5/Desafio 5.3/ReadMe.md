<h1> Desafio 5.3</h1>
<h2>Item 1: <strong>Services</strong></h2>
<p>
A):<br>
1• Os services tem como objetivo executar funções que a aplicação precise e comunicação com o Backend, assim o componente é responsavel por exibir as informações. <br>
2• Angular separa os components com a intenção de focar na experiencia do usuário e a parte logica fica com o service. <br>
3• Os services são disponibilizados atraves da injeção de dependencia, para definir uma classe como serviço no Angular se usa @Injectable.<br>
4• Um service pode ser responsavel por buscar dados do servidor, validar a entrada do usuário ou registra-las no console. <br>
5• Sim, o serviço precisa ser registrado em pelo menos um provider, por padrão o Angular CLI registra em root, mas voce pode declarar em modulos especificos. <br>
6• Sim, no Angular vai ter apenas uma instância da classe para toda a aplicação não importando onde ela é decalrada.<br>
7• (vide Imagem 1) <br>
</p>
<p>
B):<br>
1• Dependencias são serviços ou objetos que uma classe precisa para uma função, a injeção de dependencia é um padrão no qual uma classe solicita uma dependendia de fontes externas em vez de cria-las.<br>
2• Falso, é possivel passar pelo construtor objetos de outro component.<br>
3• Verdadeiro, o injetor primeiro verifica se já criou uma instância dessa dependência.<br>
<p>
C):<br>
1•  é um protocolo de comunicação do front-end com o back-end para enviar ou receber dados ou acessos.<br>
2• <b>P2P:</b><br>
Ou peer-to-peer, por exemplo o torrent que é necessário fazer o download de varios lugares dieferentes.<br>
No P2P ele não centraliza o trabalho no servidor, cada cliente também é servidor e vice-versa.<br>
<b>FTP:</b><br>
Serve para armazenamento de arquivos que podem ser acessados via internet.<br>
<b>POP, IMAP e SMTP:</b><br>
São protocolos usado no gerenciamento de contas de e-mail.<br>
<b>SSH:</b><br>
Ele permite a conexão criptografada entre um dispositivo remoto e um servidor e a execução de comandos nesse servidor, tal como se o usuário estivesse presencialmente manipulando a máquina.<br>

3• Download, upload de dados e acesso a serviços de back-end.
</ul>
  <br>
4• É perciso importar o HttpClientModule no AppModule, então injetar o HttpClient como uma dependencia no contrutor do serviço que vai utiliza-lo<br>
5• Sim, no caso do HttpInterceptor também pode transformar o fluxo de eventos de resposta, aplicando operadores RxJS. <br>  
<br>
6• <b> Metódos:</b>
<p>
request( ):<br>
Constroi um observable para uma solicitação HTTP generica quedispara a solicitação pela corrente de interceptores registrados e no servidor.<br>
</p>
<p>
delete( ):<br>
Envia uma solicitação de deletar para o servidor.
</p>
<p>
get( ):<br>
Acessa o dados solicitado no servidor e guarda/exibe.
</p>
<p>
head( ):<br>
Retorna meta informações sobre o recurso sem retornar o recurso em sí.
</p>
<p>
jsonp( ):<br>
Faz com que a solicitação JSONP seja despachada por um pipeline do interceptor, tratando a API do terminal como um arquivo JS e "engana" o navegador, contornando as limitações de certas APIs que não oferecem suporte ao protocolo CORS.<br>A solicitação JSONP só podem ser usadas com solicitações GET.
</p>
<p>
option( ):<br>
Esse metódo permite o cliente determinar o metodo HTTP suportado e outras recursos, sem implicar em uma ação de recurso. 
</p>
<p>
patch( ):<br>
permite apenas substituições completas de um documento.
</p>
<p>
post( ):<br>
Envia dados ao servidor.<br>
A diferença entre PUT e POST é que PUT é idempotente: chamá-lo uma vez ou várias vezes sucessivamente tem o mesmo efeito, onde sucessivos POST idênticos podem ter efeitos adicionais, assim como passando uma ordem várias vezes.
</p>
<p>
put( ):<br>
O metódo put subistitui um recurso existente com um novo conjunto de valores.
</p>
7• Verdadeiro, é possivel tipar a resposta mas isso não garante que o servidor responda com um objeto tipado, é de responsabilidade do servidor garantir que o tipo espeficicado pela API seja retornado.<br>
8• Sucesso, Movido permanentemente, Não encontrado e Erro interno. <br>
</ul>
9• As respostas das requisições podem ser:
<ul>
    <li><i>Respostas informativas</i></li>
    100 continue: Essa resposta provisória indica que tudo ocrreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se ja concluiu o que foi solicitado.
    <li><i>Respostas de sucesso</i></li>
    GET, HEAD, PUT ou POST, TRACE.
    <li><i>Redirecionamento</i></li>
    300 Multipla escolha choice, a requisição tem mais de uma resposta possivel.
    <li><i>Resposta de erro do Cliente</i></li>
    404 Not found, o servidor não pode encontrar o recurso solicitado.
<li><i>Erro do Servidor</i></li>
502 Bad Gateway, esse erro significa que o servidor, ao trabalhar com um gateway a fim de obter uma resposta necessário para manupular a requisição, obteve uma resposta inválida.<br>
10• (vide imagem 1) <br>
11• Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP.<br>
12• Um Interceptor em Angular é um pattern simples que nos permite interceptar, tratar e gerenciar requisições http, antes mesmo delas serem enviadas ao servidor.<br>
13• Um bom exemplo disso, são os tokens de acesso, onde ao usuário logar no sistema, gera-se um token criptografado com informações relevantes sobre o acesso e esse token é inserido no Header de todas as requisições.<br>
</p>
<p>
D):<br>
1• RxJS é uma biblioteca para programação reativa.  <br>
2• Observables são encapsuladores de dados assim como Promises, mas os Observables emitem multiplis valores e Promises apenas um valor.<br>Promises tem execução (Eager) imadiata, e os Observable são sob demanda (lazy).<br>
Promises são compartilhadas (multicast), os observables não são compartilhado por padrão e pode ser alterado pelo operador share.<br>
Promises sempre são assincronas enquanto observables podem ser ou não.<br>
Promises não são canceláveis enquanto os observables podem.<br>
3• É baseado em fluxo de dados e na alteração desses dados, e por meio de observables ela olha por alterações nesses dados e avisa os subscribers. <br>
4• As coisas só ocorrem se um evento acontecer, como o clique de um botão no sistema, que pode gerar múltiplas chamadas de métodos e outros eventos.<br>
<br>
5• Fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente.
Ao inves de criar metodos para fazer a iteração voce delega essa função para o iterator. <br>
6• Programação funcional é o processo de construir software através de composição de funções puras, evitando compartilhamento de estados, dados mutáveis e efeitos colaterais.<br> 
Os pipelines de coleção sao um padrao de programação onde se organiza alguns calculos como uma sequencia de operações que se compoe tomando uma coleção como saida de operação e alimentando-a na proxima, as operações comuns são filtrar, mapear e reduzir.<br>
7• Os conceitos essenciais são:
<ul>
  <li><i>Observable:</i></li> Representa a ideia de uma coleção que pode invocar valores ou eventos futuros.
  <li><i>Observer:</i></li>
  É uma coleção de callbacks que sabe como escutar valores entregues por um Observable.
  <li><i>Subscription:</i></li>
  Representa a execução de um Observable, é muito util para cancelar a execução.
  <li><i>Operators:</i></li>
  São funções puras que possibilitam o estilo de programação funcional para lidar com coleções com operadores como, map, filter, concat, reduce, etc...
  <li><i>Subject:</i></li>
  É equivalente ao EventEmitter, e o unico canal de multicasting de um valor ou evento para multiplos Observers.
  <li><i>Schedulers:</i></li>
  São despachantes centralizados para controlar a simultaneidade, permitindo coordenar quando a computação acontece, por exemplo, setTimeout ou requestAnimationFrame.
  </ul>
8• ajax, bindCallback, bindNodeCallback, defer, empty, from, fromEvent, fromEventPattern, generate, interval, of, range, throwError, timer, iif.<br>
9•  <ul>
    <li><i>ajax</i></li>
    Cria um Observable para uma requisição Ajax com um objeto de solicitação com url, cabeçalho, ou uma string para uma url.<br>
    (imagem 1)
    <li><i>.from</i></li>
    Ele recebe estrutura de dados e transforma em emissoes em Observable.<br>
    (imagem 2)
    <li><i>.fromEvent</i></li>
    transforma eventos em Observables.<br>
    (imagem 3)
    <li><i>.generate</i></li>
    Gera uma sequência de observável executando um loop orientado por estado que produz os elementos da sequência, usando o escalonador especificado para enviar mensagens do observador..<br>
    (imagem 4)
    <li><i>.of</i></li>
    Ele pode receber valores separados por virgula.<br>
    (imagem 5)
    <li><i>.interval</i></li>
    Emite valores em um intervalo definido.<br>
    (imagem 6)
    <li><i>.throwError</i></li>
    Cria um Observable que cria uma instancia de erro e envia para o consumidor.
    (imagem 7)
    <li><i>.timer</i></li>
    Cria um Observable que espera um periodo especifico ou data para emmitir o numero 0.
    (imagem 8)
  </ul>
10• combineLatest, concat, forkJoin, merge, partition, race, zip. <br>
11• <ul>
      <li><i>concat</i></li>
      Cria Observable que emite sequencialmente todos os valores do primeiro Observable fornecido e passa para o proximo.
      (imagem 1)
      <li><i></i>forkJoin</li>
      Aceita um Array de saidas de um Observable ou um objeto de dicionário e retorna um Observable que emite um array de valores na mesma ordem que o array passado.
      (imagem 2)
      <li><i>merge</i></li>
      Cria uma saida de Observable que emite simultaneamente todos os valores de cada entrada.
      (imagem 3)
    </ul>
12• buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, exhaust, exhaustMap, expand, groupBy, map, mapTo, mergeMap, mergeMapTo, mergeScan, pairwise, partition, pluck, scan, switchScan, switchMap, switchMapTo, window, windowCount, windowTime, WindowToogle, windowWhen.<br>
13• <ul>
      <li><i>concatMap</i></li>
      Projeta cada valor de origem para um Observable que é mesclado na saida, de maneira serializada, esperando que cada um seja concluido antes de mesclar o proximo.<br>
      (imagem 1)
      <li><i>map</i></li>
      Aplica uma determinada função de projeto a cada valor emitido pela fonte Observable e emite os valores resultantes como um Observable.<br>
      (imagem 2)
      <li><i>mapTo</i></li>
      Emite o valor constante fornecido na saida sempre que a fonte emite um valor.<br>
      (imagem 3)
      <li><i>mergeMap</i></li>
      Projeta cada valor de origem para um Observable que é mesclado na saida.<br>
      (imagem 4)
      <li><i>mergeMapTo</i></li>
      Porjeta cada valor de origem para o mesmo Observable, que é mesclado varias vezes na saida.<br>
      (imagem 5)
      <li><i>switchMap</i></li>
      Projeta cada valor de origem para um Observable que é mesclado na saida, emitindo valores apenas do Observable projetado mais recente.<br>
      (imagem 6)
      <li><i>switchMapTo</i></li>
      projeta cada valor de origem para o mesmo Observable, que é achatado varias vezes com switchMap na saida.
      (imagem 7)
    </ul>
</p>
