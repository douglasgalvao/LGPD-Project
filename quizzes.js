

var acertos = 0;

let quizSobreLgpd = [{
    "pergunta":"A lgpd é uma lei criada com o intuito de defender",
    "resposta": ["empresas","titular ded dados da pessoa natural","titular de dados da pessoa jurídica","nenhuma das alternativas acima"]
},{
    "pergunta":"Dados sensíveis são :",
    "resposta":["Dados pessoais","Dados relacionados a empresa","Todo tipo de dado que a pessoa pode ser discriminada","Dado que identifica uma pessoa"]
},{
    "pergunta":"O que significa ANPD :",
    "resposta": ["Órgão regulatório que fiscaliza a lgpd","Empresa responsável pela lgpd","Agência nota produtora demográfica", "nenhuma das alternativas acima"]
},{
    "pergunta":"O que significa Dado pessoal :",
    "resposta":["É a mesma coisa que dado sensível","Dado capaz de identificar o titular de dados","Não existe dado sensível","nenhuma das alternativas acima"]
},{
    "pergunta":"Uma pessoa denominada como Controlador dentro do contexto de LGPD é:",
    "resposta":["Detentor dos direitos","Manipulador de dados","Não existe controlador", "nenhuma das alternativas acima"]
}]

let quiz1resp1="titular ded dados da pessoa natural";
let quiz1resp2="Todo tipo de dado que a pessoa pode ser discriminada";
let quiz1resp3="Órgão regulatório que fiscaliza a lgpd";
let quiz1resp4="Dado capaz de identificar o titular de dados";
let quiz1resp5="Detentor dos direitos";


if(window.location.href == "http://127.0.0.1:5500/quizzes.html#" || window.location.href == "http://127.0.0.1:5500/quizzes.html"){   
    iniciaQuiz1();        
}

if(document.getElementsByClassName("chk").checked){
    selectOnlyThis()
}

function returnRandom(n){
    return Math.floor(Math.random() * n)
}

function iniciaQuiz1(){

    let perguntaNumber = returnRandom(5);
    // console.log(pergunta);
    document.getElementById("quizUM").innerHTML += `
        <p style="margin-top:20px;margin-bottom: 35px;">${quizSobreLgpd[perguntaNumber].pergunta}</p>
        <label class="col-12 chk" for="a1"><input type="checkbox" onchecked="selectOnlyThis("a1")" value="${quizSobreLgpd[perguntaNumber].resposta[0]}" id="a1"> ${quizSobreLgpd[perguntaNumber].resposta[0]}</label>
        <label class="col-12 chk" for="a2"><input type="checkbox" onchange="selectOnlyThis("a2")" value="${quizSobreLgpd[perguntaNumber].resposta[1]}" id="a2"> ${quizSobreLgpd[perguntaNumber].resposta[1]}</label>
        <label class="col-12 chk" for="a3"><input type="checkbox" onchange="selectOnlyThis("a3")" value="${quizSobreLgpd[perguntaNumber].resposta[2]}" id="a3"> ${quizSobreLgpd[perguntaNumber].resposta[2]}</label>
        <label class="col-12 chk" for="a4"><input type="checkbox" onchange="selectOnlyThis("a4")" value="${quizSobreLgpd[perguntaNumber].resposta[3]}" id="a4"> ${quizSobreLgpd[perguntaNumber].resposta[3]}</label>
        <button class="btn btn-primary" onclick="validaQuiz(${perguntaNumber})" style="float:right;margin-right: 20px;margin-bottom: 30px;">Proximo</button>`;
}

function validaQuiz(n){
   
}

function selectOnlyThis(id) {
    for (var i = 1;i <= 3; i++)
    {
        document.getElementById("a"+i).checked = false;
    }
    document.getElementById(id).checked = true;
}