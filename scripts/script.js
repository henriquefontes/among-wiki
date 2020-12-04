function theSkeld(){
    document.getElementById("info").innerHTML = 'The Skeld é o primeiro mapa do jogo Among Us, situado em uma nave espacial. Este mapa foi o único incluido na versão de lançamento do jogo em 2018, com MIRA HQ e Polus sendo adicionados posteriormente. Este mapa foi usado muitas vezes devido ao design e as tarefas.';
    document.getElementById("map").src = '../img/the-skeld.png';
}

function miraHQ(){
    document.getElementById("info").innerHTML = 'O mapa é localizado em um arranha-céu conhecido como os Quartéis Generais MIRA (MIRA HQ). É uma torre gigante até as nuvens, com sensores de movimento em 3 corredores conhecidos como Corredores Sudeste, Sudoeste e Norte. Possui as mesmas tasks do The Skeld, porém tem as suas próprias.';
    document.getElementById("map").src = '../img/mira-hq.png';
}

function polus(){
    document.getElementById("info").innerHTML = 'É o maior mapa do jogo inteiro, permitindo que os jogadores possam explorar fora da base, circulando pelo planeta. O mapa conta com 15 quartos, sem contar as Camâras de Descontaminação. Existem 12 aberturas no chão, que permitem que o Impostor se movimente para outras salas rapidamente.';
    document.getElementById("map").src = '../img/polus.png';
}

let streched = document.querySelector("#streched");

function deleteMain(){
    streched.removeChild(div1);
}

let div1 = document.querySelector("#centralizeFull-locais");
let titulo = document.querySelector("h1");
let conteudo1 = document.createElement("p");
let conteudo2 = document.createElement("p");
let divCentralize = document.createElement("div");
let secao = document.createElement("section");
let artigo = document.createElement("article");
let imagem = document.createElement("img");
let voltar = document.querySelector("a");
let div = document.createElement("div");
div.id = "centralizeFullFunctions";
let img = document.createElement("img");
let divInfo = document.createElement("div");
let divP1 = document.createElement("div");
let divP2 = document.createElement("div");
let titulo1 = document.createElement("h1");
let titulo2 = document.createElement("h1");
let titulo3 = document.createElement("h1");
let paragrafo1 = document.createElement("p");
let paragrafo2 = document.createElement("p");
let paragrafo3 = document.createElement("p");

function catchId(get_id){
    let nome = get_id;
    if(nome === "Medbay"){
        deleteMain();
        img.src = "../img/Medbay-bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Características";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No The Skeld, o MedBay é uma sala de tamanho médio que contém uma ventilação, scanner e quatro leitos hospitalares. Abriga duas tarefas, e sua ventilação leva a Segurança e Elétrica.<br><br>No MIRA HQ, a MedBay é uma sala de tamanho médio que contém um scanner e sete camas de hospital futuristas. Abriga duas tarefas e um respiradouro que leva diretamente ao Vestiário e à Varanda.<br><br>No Polus, a MedBay é uma sala de tamanho médio que só é mencionada nas tarefas. Caso contrário, é abrangido pelo Laboratório. Ele contém um scanner e camas hospitalares. As camas parecem ter uma mesa ao lado delas. Ele também tem duas tarefas.";
        paragrafo2.innerHTML = "Impostores podem sabotar as portas da MedBay no The Skeld, fazendo com que fechem por 10 segundos, e isso pode ser útil para bloquear e impedir pessoas inocentes de realizar tarefas. O fechamento da porta também pode ajudar um Impostor a usar uma ventilação para matar alguém em Elétrica ou Segurança, escondendo seu crime.<br><br>No The Skeld, há uma ventilação no canto inferior esquerdo do MedBay que leva à Segurança e Elétrica. Seu uso mais comum é para viajar através de uma ventilação inserida em Elétrica, mas entrar na ventilação no MedBay pode ser útil";
        paragrafo3.innerHTML = "Enviar scan, Inspecionar amostra, Desviar energia";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Eletrica"){
        deleteMain();
        img.src = "../img/Eletrica_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Trivia";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No The Skeld, Elétrica é uma sala com fios no chão e outros aparelhos elétricos, como um distribuidor e um gerador. Há uma ventilação localizada sob o painel de download de dados, que é conectada aos da Segurança e da MedBay.<br><br>No Polus, Elétrica é uma sala conectada à Segurança e O2, possuindo uma área exposta que contém geradores elétricos. Uma ventilação está localizada no final do corredor, perto da porta de segurança e se conecta a uma ventilação fora da rede elétrica e O2.";
        paragrafo2.innerHTML = "No The Skeld, a parte elétrica é frequentemente considerada a sala mais perigosa do mapa, por vários motivos:<br><br>Abriga até quatro tarefas, agrupadas na parede superior, no final da sala. É possível receber todas as quatro tarefas.<br><br>No Skeld, o sistema elétrico tem uma ventilação conectada ao Segurança e ao MedBay no fundo da sala, perto dos painéis de tarefas.<br><br>No geral, os membros da tripulação são forçados a entrar na área elétrica para completar tarefas. Ao mesmo tempo, os Impostors têm muitas opções para capturar e matar alvos solitários dentro da sala, ou mesmo duos ou trios com derrubadas sincronizadas.";
        paragrafo3.innerHTML = "Calibrar o distribuidor, Desviar energia, Consertar a fiação, Baixar dados.";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Reator"){
        deleteMain();
        img.src = "../img/Reator_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Características";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No The Skeld, o Reator é uma sala localizada no corredor em frente à Segurança. Ele contém duas aberturas que se conectam a apenas um local, que são o motor superior e o motor inferior, o que estiver mais próximo da ventilação. Embora o reator brilhe normalmente em azul, ele começará a brilhar em vermelho se sabotado, com caminhos para os leitores de mão iluminando-se.<br><br>No MIRA HQ, o Reactor está conectado ao Laboratório, que contém um reator massivo com uma garra que emite um laser (que pode mudar de cor se o reator for sabotado), vários computadores e duas palmas das mãos que são usadas para reparar a sabotagem do reator, assim como no Skeld.";
        paragrafo2.innerHTML = "Impostores podem sabotar o reator, o que dá aos tripulantes de 30 a 45 segundos para resolver a sabotagem; 30 segundos no Skeld e 45 segundos no MIRA HQ. Para resolver, dois jogadores devem examinar suas mãos em estações diferentes simultaneamente. Se não for resolvido no tempo previsto, os Impostors irão vencer.<br><br>No The Skeld, há duas aberturas ao norte e ao sul. Essas aberturas levam ao motor superior e inferior, respectivamente.<br><br>No MIRA HQ, há uma ventilação no reator perto do primeiro estágio da tarefa de Desviar energia. A ventilação conduz diretamente ao Laboratório, Plataforma de Lançamento e Descontaminação.";
        paragrafo3.innerHTML = "Desbloqueie variedades,Iniciar o reator, desviar energia";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Cafeteria"){
        deleteMain();
        img.src = "../img/Cafeteria_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Características";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No The Skeld, a Cafeteria é o principal ponto de desova dos jogadores no início do jogo e após o Tempo de Discussão. É a maior sala com mesas circulares azuis e tem três portas: esquerda, que leva ao Motor Superior, passando MedBay; direito, o que leva a armas; e a parte inferior, que leva ao Armazenamento, passando Admin. Uma ventilação está localizado perto da porta direita e o botão de emergência está localizado na mesa do meio.<br><br>No MIRA HQ, a Cafeteria é o principal ponto de desova dos jogadores após o período de discussão, porém, não é onde os jogadores começam o jogo. Ele está localizado no corredor direito e é menor do que seu antecessor.";
        paragrafo2.innerHTML = "No The Skeld, há uma ventilação que leva ao Admin e um corredor entre Escudos e Navegação.<br><br>Se o jogador olhar atentamente, poderá ver uma fatia de pizza, um computador (usado para Personalizar no Freeplay), bandejas de refeição e outros objetos.";
        paragrafo3.innerHTML = "Enviar Dados, Esvaziar o Lixo, Consertar a fiação, Comprar bebida, Desviar energia.";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Comunicacoes"){
        deleteMain();
        img.src = "../img/comunicacoes_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Características";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "Comunicações no The Skeld é uma sala de tamanho médio no canto inferior direito, localizada entre o Armazenamento e os Escudos. Ele apresenta duas tarefas e o painel usado para consertar o Comms Sabotage.<br><br>Comunicações no MIRA HQ é uma sala de tamanho médio na parte inferior do mapa, acima do MedBay. Apenas uma tarefa está presente, aceitar o poder desviado.<br><br>Comunicações no Polus é uma sala de tamanho médio que não está diretamente conectada a nenhuma outra sala, mas está localizada acima de Armas. Ele contém duas tarefas, incluindo Reinicializar Wifi e Carregar Dados.";
        paragrafo2.innerHTML = "Doorlog é uma habilidade que rastreia quem passa sobre os sensores no Corredor, e é útil para capturar Impostors usando aberturas. Doorlog está localizado em Comunicações no MIRA HQ.<br><br>Impostores podem sabotar as comunicações, causando a Sabotagem de comunicações, que impede que os membros da tripulação vejam a lista de tarefas. Ele também desativa os quatro recursos de segurança: câmeras de segurança, painel do administrador, registro de portas e sinais vitais. Como acontece com a maioria das outras sabotagens, o Botão de Emergência não pode ser usado durante a Sabotagem de Comunicações.";
        paragrafo3.innerHTML = "Upload de dados, Desvio de energia, Reinicialização de wi-fi.";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Oxigenio"){
        deleteMain();
        img.src = "../img/O2_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Características";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No The Skeld, O2 é uma pequena sala em direção ao canto superior direito do mapa, abaixo de Armas. Possui três tarefas curtas e um teclado numérico para impedir uma sabotagem de O2. Parece que uma planta está dentro da caixa com o teclado numérico, possivelmente ajudando a produzir oxigênio para a nave. À direita da O2 está uma câmera de segurança, que também captura a entrada da Navegação.<br><br>No Polus, a O2 ocupa o espaço de três salas, duas médias e uma pequena. Ele está localizado acima da sala da caldeira.";
        paragrafo2.innerHTML = "No The Skeld, os impostores podem sabotar o O2, iniciando a sabotagem do esgotamento do oxigênio. Para resolver essa sabotagem, jogadores vivos devem inserir um código escrito em uma nota adesiva amarela no lado direito dos painéis numéricos em O2 e Admin em 30 segundos. Esta sabotagem também pode ocorrer no MIRA HQ.<br><br>Impostores, no Polus, podem sabotar as portas do O2, trancando jogadores ao vivo lá dentro. No entanto, jogadores ao vivo podem abrir portas conectando quatro botões desativados. Como em outros locais em Polus, essas portas não afetam os fantasmas.";
        paragrafo3.innerHTML = "Lixo vazio, Limpar filtro do 02, Desviar energia, Esvaziar lixo, Arrumar fiação, Enviar dados, Árvore de monitoramento, Recipientes de preenchimento";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Armazem"){
        deleteMain();
        img.src = "../img/armazem_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Características";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No mapa The Skeld, o Armazém possui grandes contêineres no meio da sala, que permitem apenas o movimento ao redor das paredes da sala.<br><br>Neste MIRA HQ, o Armazém está localizado próximo à Cafeteria. Dentro da sala há uma estante que contém materiais antigos, incluindo o regador, que é usado para regar as plantas.<br><br>No Polus, Armazém é uma sala pequena e totalmente isolada com apenas um galão de combustível e algumas caixas, junto com uma ventilação, que é conectado as ventilações do escritório e a próxima às Comunicações.";
        paragrafo2.innerHTML = "O (s) Impostor (es) podem fechar as portas de Armazém (usando o mesmo mapa que usam para Sabotar), prendendo as pessoas e impedindo-as de realizar tarefas. No The Skeld, os membros da tripulação devem esperar a porta abrir; no entanto, as pessoas podem abrir a porta ativando quatro botões desativados no mapa Polus.<br><br>No Polus, há uma ventilação no Armazém que leva ao Escritório e ao exterior das Comunicações.";
        paragrafo3.innerHTML = "Encher motores, Esvaziar o lixo, Esvaziar a rampa, Arrumar a fiação, Estações de água";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Armas"){
        deleteMain();
        let miniImg = document.createElement("img");
        img.src = "../img/armas_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        miniImg.src = "../img/armas.png"
        miniImg.style.width = "300px";
        miniImg.style.border = "2px solid white"
        miniImg.style.borderRadius = "5px";
        miniImg.style.marginTop = "20px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Imagem da sala";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "No The Skeld, Armas é uma sala de tamanho médio localizada à direita da Cafeteria e acima da O2. No meio da sala está uma cadeira em uma plataforma com uma tela holográfica, usada para Destruir Asteroides.<br><br>No Polus, Armas é uma sala de tamanho médio com duas tarefas: Destruir asteróides e baixar dados. A sala está dentro de uma cápsula, localizada na parte inferior da base do Polus, com uma entrada na parte superior. O painel de download de dados fica em uma pequena parede perpendicular à entrada do pod. Destruir Asteroides está no canto superior direito e é acessado por meio de um PC em uma mesa, que dispara um laser fora do pod, para o espaço sideral.";
        paragrafo3.innerHTML = "Destruir Asteroides, Enviar dados, Desviar Energia.";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(miniImg);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }else if(nome === "Navegacao"){
        deleteMain();
        img.src = "../img/navegacao_bar.png"
        img.style.width = "400px";
        img.style.marginTop = "15px";
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "20px";
        divP2.style.paddingLeft = "20px";
        divP1.style.paddingRight = "20px";
        divP2.style.paddingRight = "20px";
        divP1.style.paddingBottom = "10px";
        divP2.style.paddingBottom = "10px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Mapas";
        titulo2.innerHTML = "Trivia";
        titulo3.innerHTML = "Tasks";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "A Navegação é uma pequena sala localizada no lado direito do mapa, que serve como sala de controle do navio com vários equipamentos de navegação. Ele contém duas aberturas, com a superior indo para Armas e a inferior indo para Escudos. Ele tem cinco tarefas, quatro na área principal e uma tarefa Consertar a fiação no corredor à esquerda. É semelhante ao Reator, estando em pólos opostos do mapa com 2 aberturas que levam a outra sala.";
        paragrafo2.innerHTML = "Junto com a elétrica, este é um dos lugares mais perigosos do The Skeld, porque fica longe das áreas populares e tem duas aberturas convenientes.<br><br>As cadeiras perto da mesa são um ótimo lugar para os Impostores matarem e esconderem corpos, porque a cadeira os bloqueia. No entanto, isso se torna um tanto ineficaz, pois o botão Report acenderá sempre que um cadáver estiver por perto.";
        paragrafo3.innerHTML = "Curso de Carta, Estabilizar a direção, Carregar Dados, Consertar a fiação, Desviar energia";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/locais.html";
        document.querySelector("h1").innerHTML = "";
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
        streched.appendChild(div);
    }
}

function roles(catch_id){
    role = catch_id;
    if(role === "Crewmate"){
        let img = document.createElement("img");
        img.src = "../img/Crewmate_bar.png"
        img.style.width = "400px";
        let div = document.querySelector("#centralizeFullFunctions");
        let divInfo = document.createElement("div");
        let divP1 = document.createElement("div");
        let divP2 = document.createElement("div");
        let titulo1 = document.createElement("h1");
        let titulo2 = document.createElement("h1");
        let titulo3 = document.createElement("h1");
        let paragrafo1 = document.createElement("p");
        let paragrafo2 = document.createElement("p");
        let paragrafo3 = document.createElement("p");
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "15px";
        divP2.style.paddingLeft = "15px";
        divP1.style.paddingRight = "15px";
        divP2.style.paddingRight = "15px";
        divP1.style.paddingBottom = "5px";
        divP2.style.paddingBottom = "5px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Objetivos";
        titulo2.innerHTML = "Habilidades";
        titulo3.innerHTML = "Morte";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "O objetivo principal de um Tripulante(Crewmate) é completar todas as tarefas sem ser morto pelo (s) Impostor (es), com o objetivo secundário de encontrar o Impostor e ejetá-lo da nave. Os membros da tripulação que foram mortos por um Impostor ou ejetados se tornam Fantasmas.";
        paragrafo2.innerHTML = "Um Tripulante pode usar a habilidade de reportar para reportar um cadáver e trazer toda a Tripulação e todos os Impostores para uma Reunião de Emergência para discutir quem pode ser o Impostor. Os impostores também têm essa habilidade. O botão de relatório aparece acima do botão de uso.<br><br>Um Tripulante pode usar a função use para uma variedade de interações. O mais comum é para ativar e completar tarefas. Os membros da tripulação também podem usar este botão para convocar uma reunião de emergência manualmente (se o host permitir e nenhuma sabotagem crítica estiver ativa), verificar câmeras de segurança, verificar portas ou para visualizar o mapa administrativo. Impostores também têm esse botão, mas não podem concluir tarefas com ele. Este botão está no canto inferior direito da tela.";
        paragrafo3.innerHTML = "Quando O Impostor mata um membro da tripulação, seu corpo cai no chão, completamente quebrado ao meio com um osso para fora, e um fantasma aparecerá do corpo. Nesse estado, um Tripulante pode se mover livremente pelas paredes, sem ter que cruzar um corredor inteiro para chegar ao destino, e ainda pode fazer tarefas para ajudar a tripulação a vencer. No entanto, as únicas desvantagens são que suas mensagens nos bate-papos não aparecem para os sobreviventes restantes, eles não podem iniciar uma reunião de emergência ou resolver sabotagens. Fantasmas também não são visíveis para jogadores que ainda estão vivos.";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/funcoes.html";
        div.innerHTML = "";
        document.querySelector("h1").innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
    }else{
        let img = document.createElement("img");
        img.src = "../img/Impostor_bar.png"
        img.style.width = "400px";
        let div = document.querySelector("#centralizeFullFunctions");
        let divInfo = document.createElement("div");
        let divP1 = document.createElement("div");
        let divP2 = document.createElement("div");
        let titulo1 = document.createElement("h1");
        let titulo2 = document.createElement("h1");
        let titulo3 = document.createElement("h1");
        let paragrafo1 = document.createElement("p");
        let paragrafo2 = document.createElement("p");
        let paragrafo3 = document.createElement("p");
        divInfo.style.display = "flex";
        divInfo.style.flexDirection = "row";
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.justifyContent = "space-around";
        divP1.style.width = "50%";
        divP2.style.width = "50%";
        divP1.style.paddingLeft = "15px";
        divP2.style.paddingLeft = "15px";
        divP1.style.paddingRight = "15px";
        divP2.style.paddingRight = "15px";
        divP1.style.paddingBottom = "5px";
        divP2.style.paddingBottom = "5px";
        divP1.style.wordBreak = "break-word";
        divP2.style.wordBreak = "break-word";
        titulo1.innerHTML = "Objetivos";
        titulo2.innerHTML = "Habilidades";
        titulo3.innerHTML = "Outras Habilidades";
        titulo1.style.fontSize = "17px";
        titulo1.style.borderBottom = "2px solid white"
        titulo1.style.borderRadius = "5px";
        titulo2.style.fontSize = "17px";
        titulo2.style.borderBottom = "2px solid white"
        titulo2.style.borderRadius = "5px";
        titulo3.style.fontSize = "17px";
        titulo3.style.borderBottom = "2px solid white"
        titulo3.style.borderRadius = "5px";
        paragrafo1.innerHTML = "O objetivo principal do Impostor é matar Tripulantes suficientes para ter uma quantidade igual de Impostors e Crewmates antes que todas as tarefas sejam concluídas e ter sua verdadeira identidade permanecendo oculta.";
        paragrafo2.innerHTML = "Um Impostor pode matar um Tripulante. Matar um Tripulante deixa um corpo morto no local em que foram mortos, e os Tripulantes se transformam em um fantasma. As mortes têm um cooldown de 10-60 segundos e uma distância de morte de Curto, Normal ou Longo, que depende das opções de jogo.<br><br>Um Impostor pode Sabotar, o que cria um problema temporário que os Crewmates devem esperar, ignorar ou consertar. Impostores podem consertar sua Sabotagem, o que pode ajudá-los a evitar suspeitas. Impostores que são fantasmas também podem sabotar. Nos mapas Skeld e Polus, os Impostors podem fechar portas para impedir o movimento do jogador ou esconder a atividade suspeita. Um fantasma não pode consertar uma sabotagem";
        paragrafo3.innerHTML = "O Impostor pode se esconder em ventilações também chamadas de vent. As ventilações permitem que o Impostor se esconda ou se mova rapidamente pelo mapa. Quando perto o suficiente de uma ventilação, o botão de Sabotagem será substituído pelo botão de 'ventar'. No entanto, se esconder em uma ventilação interrompe o tempo de espera de kill e sabotagem até que o Impostor saia dela. O painel do administrador ainda pode detectar Impostores escondidos nas aberturas de uma sala.";
        paragrafo1.style.fontSize = "13px";
        paragrafo2.style.fontSize = "13px";
        paragrafo3.style.fontSize = "13px";
        divP1.appendChild(titulo1);
        divP2.appendChild(titulo2);
        divP1.appendChild(paragrafo1);
        divP2.appendChild(paragrafo2);
        divP1.appendChild(titulo3);
        divP1.appendChild(paragrafo3);
        divInfo.appendChild(divP1);
        divInfo.appendChild(divP2);
        voltar.href = "../pages/funcoes.html";
        div.innerHTML = "";
        document.querySelector("h1").innerHTML = "";
        div.appendChild(img);
        div.appendChild(divInfo);
    }
}