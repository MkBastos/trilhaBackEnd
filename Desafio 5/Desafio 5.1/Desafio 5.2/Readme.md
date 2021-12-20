<h1>📝 Desafio 5.2</h1>
<p>A)<br>
1• é a view, o que o usuário vai ver.<br>
2• Ele encapsula o template (código HTML), metadados, dados a serem mostrados na tela e é responsavel pelo comportamento da view.<br>
3• ng generate component "nome do component".<br>
4• Para manter o código mais limpo e de facil manutenção, evitando ctrl+c e crtl+v em diversas partes do código.<br>
5• é um seletor CSS que define como o componente é usado nesse modelo.<br>
6• templateUrl voce defini qual é o HTML que vai ser exibido e aponta onde esta esse arquivo, deve ser utilizada para pode alterar entre views.<br>
Com o template: voce digita no component o HTML que deseja que seja exibido, deve ser usado quanse se deseja algo fixo na pagina.<br>
7• styleUrls é usado para referenciar um arquivo css externo para ser aplicado no componente, usado para definir alterações onde ela for referenciada podendo ser aplicada a varios componentes.<br>
Style é usado para definir um estilo dentro do componente atual apenas.
</p>

<h2>Item 2: <strong>Rotas</strong></h2>
<p>
1• ng generate component "nomoDoProjeto" e em seguida ele pergunta se deseja adicionar as rotas.<br>
2• ng g m route --routing.<br>
3• O metodo navigate serve para se delcarar uma array de endereços para serem roteadas.<br>
4• Isactive rastreia se essa rota é a ativa no momento e permite a chamada de uma (ou mais) classe de CSS para quando essa rota estiver ativa.<br>
5• no arquivo app-routing.module.ts é onde se pode declarar todas as rotas dos components.<br>
6• o router-outlet mostra a rota que estiver definica como padrão nas suas rotas.<br>
7• vide imagem 1.<br>
8• vide imagem 2. <br>
9• lazy-load é o carregamente sob demanda, e uma forma de carregar o código somente do que é exibido ao inves de carregar todos os modulos ao entrar no site/aplicação.(imagem 3).<br>
10• Eager laod por padrão carrega todos modulos assim que a aplicação é iniciada, em uma aplicação complexa isso pode gerar lentidão, por padrão as NgModules são eager-load. (imagem 4).
</p>
<h2>Item 3: <strong>Pipes</strong></h2>
<p>
1• Eles servem como filtros, ele transforma uma valor para ser exibido em um template. <br>
2• CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, LowerCasePipe, UpperCasePipe.  <br>
3•Currency, transforma valor em moeda e acordo com a região escolhida.<br>
Date, formata a data conforme a preferêcia.<br>
Decimal, usado para formatar numero em casas decimais conforme escolhido.<br>
Percent, formata numero em formato de porcentagem.<br>
LowerCase, formata todo o texto em letras minusculas.<br>
Uppercase, formata todo o texto em letras maiusculas.<br>
4• Custom Pipes são pipes que podem ser criados e aplicar formataçoes personalizadas ao um dado, formatando ele de acordo com o que for definido neste pipe. <br></p>
