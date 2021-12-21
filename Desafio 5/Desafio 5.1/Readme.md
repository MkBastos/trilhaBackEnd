<h1>📝 Desafio 5.1 </h1>
<h2> • SPA Angular </h2>
<p>A) Um SPA é um aplicativo que funciona dentro de um navegador e nao requer o recarregamento ou redirecionanemto para outras paginas.<br>
Já o MPA é o padrão mais antigo que requer que o conteudo seja recarregado ou redirecionado para outra pagina durante a sua navegação.</p>
<p>B) Nos anos 1990 até os anos 2000 as empresas não sabiam muito bem como utilizar as pagina e colocar seus produtos, então nessas epocas os sites de muitas empresas serviam apenas como um grande mostruario do produtos, ou apenas informações genericas sobre a empresa e nada mais.</p>

<p>C) <strong>Web 1.0</strong> são os sites estaticos "sem vida".<br>
<strong>WEB 2.0</strong> se refere a um conjunto de tecnicas de design e execução das paginas.<br>
Já na <strong>WEB 3.0</strong> contamos com maior interetividade dos usuários e além, com a possibilidade de personalizar o conteudo com as preferencias de cada usuário. </p>
<p>D):<br>
1• Angular é um framework para construção de interface que usa Typescript.<br>
2• O angular cria uma interface SPA onde conforme a nevegação ele só altera qual elemento é exibido sem a necessidade de recarregar ou trocar de pagina.<br>
3• As direcitas, modulos e componentes. <br>
4• O Angular CLI é a interface de linha de comando com ela é possivel, criar seu projeto, novos elementos ou importar templates.<br>
5• É o arquivo de configuração do projeto.<br>
6• <strong>Router:</strong> responsavel pela navegação sem a necessidade de recarregar. <br>
<strong>HTTP:</strong>para comunicação do front-end com o back-end.<br>
<strong>FORMS:</strong> permite criar formularios e permite fazer a sincronização com o modelo da aplicação.<br>
<strong>ANIMATION:</strong> um componente para a inclusão de animações.

7• O package.json contém informações sobre o seu aplicativo, ele conterá as informações sobre os pacotes npm instalados no seu projeto.<br>
8• O environment é o arquivo de configurações do ambiente de desenvolvimento e la é possivel incluir variaveis de ambimente.<br></p>
<p>E):<br>
1• Interpolação de texto é a capacidade do HTML interpretar string como variavel e ler o seu valor ao inves do texto puro.<br>
</p>
2• uma vantagem é alterar de forma dinamita os dados de uma pagina sem a necessidade de ficar alterando no codigo toda vez que o valor ou mensagem for alterada.<br><p>
<p>F):<br>
1• Property Binding:
é uma ligação entre o arquivo HTML e o arquivo TS, podemos utilizar os colchetes [ ] desta forma o template vai receber o valor da proriedade diretamente, sem a necessidade de utilziar interpolação.<br>
2• Funciona como one way data binding ele vai em uma direção apenas, do codigo para o HTML.<br>
3• Com property binding voce pode controle o valor de um elemento como "verdadeiro" ou "falso" o que não é possivel com interpolação <br>
4• Event Binding enviamos valores vindo do HTML, como um click do mouse por exemplo, usando as parenteses ex: (input), (click)...<br>
5• Sempre que voce ver um documento entre paranteses isso representa um evento, por exemplo o (click) que no JS será Onclick, capturando esse clica do mouse para chamar alguma função ou método.<br>
6• Two way data bindind é representado pelo [(ngModel)] ele atualiza os dados nas duas direções, do componente para o template e do template para o componente.<br>
7• Por exemplo é para atualizar os dados no componente ao mesmo tempo que é alterado no template, por exemplo objeto usando um input para atualizar um objeto.</p>
<p>G):<br>
1 As são classes que adicionam comportamentos aos elementos.<br> 
2• Em angular podem ser de elemento, alterando o comportamento ou aparencia de um elemento, ou podem ser estrutural que altera o alyout adicionado ou removendo elementos da DOM.<br>
3• <strong>NGIF</strong>: é uma diretiva que adiciona um elemento, geralmente usada para incluir ou excluir um elemento da interface do usuário de acordo com uma condição, funciona como o IF usando em outras linguagens.<br>
<strong>NGFOR</strong>: que permite iterar uma lista usando o loop For.<br>
<strong>NGSWITCH:</strong> Assim como no JS essa diretiva exibe um elemento entre vbarios dentro do case, por exemplo uma navegação entre menus para exibir apenas o que esta ativo.<BR>
<strong>NGCLASS</strong>: é usado para alterar entre classes, caso um icone ou botão precise alterar sua aparencia com o NGClass voce pode declarar todas as classes das quais esse elemento vai usar.<br>
<strong>NGSTYLE:</strong> É usada para definir o comportamento e estilização do elementos (cores, font-size, etc...).<br>
<strong>NGMODULE:</strong> Cria uma instância FormControl a partir de um modelo de domínio e a vincula a um elemento de controle de formulário.
<p>
H):<br>
1• No template Driven é um formulario criado e configurado em HTML, as validações são feitas no HTML, é possivel criar um FormGroup do HTML, e os valores sção submetidos com o ngSubmit.<br>
No data driven o formulario é criado e configurado no componente, e as validações são feiras no proprio componente, no HTML é feito uma referencia, também usa o FormGroup criado no componente e como o formulario ja era no componente não precisa do NG subimit.<br>
2• O formulario reativo é muito mais flexivel, são criados no componente, tendo um html mais limpo e mais facil de dar manutenção, usando os observables para atualizar quando houver alterações.<br>
3• FormsModule, ReactiveFormsModule e DAtaFormModule.<br>
4• AbstractControl, FormControl, FormGroup, FormArray e FormBuilder.<br>
5• Registre o "ReactiveFormsModule" na sua aplicação ele declara as diretivas que o formulario reativo vai precisar usar, gere um FormControl e salve no componente e registre o FormControl no template. <br>
6• Nos formularios reativos cada elemento está diretamente vinculado ao modelo de formulário , as atualizações da visualização para o modelo e do modelo para a visualização são síncronas e não dependem de como a pagina é renderizada.<br>
7• O usuário digita um valor no elemento de entrada,O elemento de entrada do formulário emite um evento de "input" com o valor mais recente, o acessor de controle de valores imediatamente retransmite o novo valor para o FormControl e o FormControl emite o novo valor atraves dos observables. <br>
8• A validação serve para impedir que o formulario seja enviado com dados incorretos, inexistentes ou em branco, é possivel adicionar a tag required e estilizar com CSS para destacar campos que são obrigatorios e usar outros controles como, ngdirty para validar se o campo foi alterado e com bases nesses controles é possivel desabilitar o botão de submit para que ele só fique disponivel quando todos os campos estiverem preenchidos corretamente.<br>
</p>







