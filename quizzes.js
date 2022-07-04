

var acertos = 0;

let quizSobreLgpd = [{
    "pergunta": "Dados sensíveis são :",
    "resposta": ["Dados pessoais", "Dados relacionados a empresa", "Todo tipo de dado que a pessoa pode ser discriminada", "Dado que identifica uma pessoa"]
}, {
    "pergunta": "O que significa ANPD :",
    "resposta": ["Órgão regulatório que fiscaliza a lgpd", "Empresa responsável pela lgpd", "Agência nota produtora demográfica", "nenhuma das alternativas acima"]
}, {
    "pergunta": "O que significa Dado pessoal :",
    "resposta": ["É a mesma coisa que dado sensível", "Dado capaz de identificar o titular de dados", "Não existe dado sensível", "nenhuma das alternativas acima"]
}, {
    "pergunta": "Uma pessoa denominada como Controlador dentro do contexto de LGPD é:",
    "resposta": ["Detentor dos direitos", "Manipulador de dados", "Não existe controlador", "nenhuma das alternativas acima"]
}]

let quizSobreCriptografia = [
    { "pergunta": "Qual o objetivo da criptografia?", "resposta": ["Codificar códigos", "Transmitir informações de forma restrita", "Acesso seguro", "Estabelecer chave entre dois usuários"] },
    { "pergunta": "A criptografia assimétrica, ela utiliza dois tipos de chaves a pública e a privada para ter acesso as informações. Dos exemplos abaixo qual deles ela é utilizada?", "resposta": ["Senhas", "Caixa Eletrônico", "Wifi", "Envio de mensagens governamentais"] },
    { "pergunta": "O que é o processo de criptografia quântica?", "resposta": ["Polarização dos fotóns", "Detectar posições para impedir passagem de bits", "Polarização dos elétrons", "Transformar fótons em bits"] },
    { "pergunta": "A criptografia quântica é relativamente nova em comparação as outras, desde o século XX até os dias atuais. Qual foi a distância máxima que foi possível transmitir informações através dela? ", "resposta": ["70Km", "160Km", "95km", "120km"] }
]

let quiz2resp1 = "Transmitir informações de forma restrita";
let quiz2resp2 = "Caixa Eletrônico";
let quiz2resp3 = "Transformar fótons em bits";
let quiz2resp4 = "Transmitir informações de forma restrita";

let quiz1resp1 = "Todo tipo de dado que a pessoa pode ser discriminada";
let quiz1resp2 = "Órgão regulatório que fiscaliza a lgpd";
let quiz1resp3 = "Dado capaz de identificar o titular de dados";
let quiz1resp4 = "Detentor dos direitos";


if (window.location.href == "https://lgpdpuc.github.io/quizzes.html#" || window.location.href == "https://lgpdpuc.github.io/quizzes.html") {
    iniciaQuiz1(3);
    iniciaQuiz2(3);
}


function returnRandom(n) {
    return Math.floor(Math.random() * n)
}

function iniciaQuiz1(n) {

    let perguntaNumber = returnRandom(n);
    // console.log(pergunta);
    document.getElementById("quizUM").innerHTML = `
        <p style="margin-top:20px;margin-bottom: 35px;">${quizSobreLgpd[perguntaNumber].pergunta}</p>
        <label class="col-12 chk" for="a1"><input type="checkbox" onclick="selectOnlyThis('a0')" value="${quizSobreLgpd[perguntaNumber].resposta[0]}" id="a0"> ${quizSobreLgpd[perguntaNumber].resposta[0]}</label>
        <label class="col-12 chk" for="a2"><input type="checkbox" onclick="selectOnlyThis('a1')" value="${quizSobreLgpd[perguntaNumber].resposta[1]}" id="a1"> ${quizSobreLgpd[perguntaNumber].resposta[1]}</label>
        <label class="col-12 chk" for="a3"><input type="checkbox" onclick="selectOnlyThis('a2')" value="${quizSobreLgpd[perguntaNumber].resposta[2]}" id="a2"> ${quizSobreLgpd[perguntaNumber].resposta[2]}</label>
        <label class="col-12 chk" for="a4"><input type="checkbox" onclick="selectOnlyThis('a3')" value="${quizSobreLgpd[perguntaNumber].resposta[3]}" id="a3"> ${quizSobreLgpd[perguntaNumber].resposta[3]}</label>
        <button class="btn btn-primary" onclick="validarRespostaQuiz1(${perguntaNumber})" style="float:right;margin-right: 20px;margin-bottom: 30px;">Proximo</button>`;
}

function iniciaQuiz2(n) {

    let perguntaNumber = returnRandom(n);
    // console.log(pergunta);
    document.getElementById("quizDOIS").innerHTML = `
        <p style="margin-top:20px;margin-bottom: 35px;">${quizSobreCriptografia[perguntaNumber].pergunta}</p>
        <label class="col-12 chk" for="b0"><input type="checkbox" onclick="selectOnlyThisB('b0')" value="${quizSobreCriptografia[perguntaNumber].resposta[0]}" id="b0"> ${quizSobreCriptografia[perguntaNumber].resposta[0]}</label>
        <label class="col-12 chk" for="b1"><input type="checkbox" onclick="selectOnlyThisB('b1')" value="${quizSobreCriptografia[perguntaNumber].resposta[1]}" id="b1"> ${quizSobreCriptografia[perguntaNumber].resposta[1]}</label>
        <label class="col-12 chk" for="b2"><input type="checkbox" onclick="selectOnlyThisB('b2')" value="${quizSobreCriptografia[perguntaNumber].resposta[2]}" id="b2"> ${quizSobreCriptografia[perguntaNumber].resposta[2]}</label>
        <label class="col-12 chk" for="b3"><input type="checkbox" onclick="selectOnlyThisB('b3')" value="${quizSobreCriptografia[perguntaNumber].resposta[3]}" id="b3"> ${quizSobreCriptografia[perguntaNumber].resposta[3]}</label>
        <button class="btn btn-primary" onclick="validarRespostaQuiz2(${perguntaNumber})" style="float:right;margin-right: 20px;margin-bottom: 30px;">Proximo</button>`;
}


function selectOnlyThis(id) {
    for (var i = 0; i < 4; i++) {
        document.getElementById("a" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThisB(id) {
    for (var i = 0; i < 4; i++) {
        document.getElementById("b" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function validarRespostaQuiz1(n) {

    for (var i = 0; i < 4; i++) {
        if (document.getElementById("a" + i).checked) {
            if (document.getElementById("a" + i).value == quiz1resp1 ||
                document.getElementById("a" + i).value == quiz1resp2 ||
                document.getElementById("a" + i).value == quiz1resp3 ||
                document.getElementById("a" + i).value == quiz1resp4) {
                acertos++;
            }
            quizSobreLgpd.splice(n, 1);
            console.log(quizSobreLgpd.length)
            if (quizSobreLgpd.length > 0) {
                iniciaQuiz1(returnRandom(quizSobreLgpd.length));
            } else {
                window.alert("Voce acertou " + acertos);
                window.location.href = "https://lgpdpuc.github.io/contato.html"
            }
        }
    }

}


function validarRespostaQuiz1(n) {

    for (var i = 0; i < 4; i++) {
        if (document.getElementById("a" + i).checked) {
            if (document.getElementById("a" + i).value == quiz1resp1 ||
                document.getElementById("a" + i).value == quiz1resp2 ||
                document.getElementById("a" + i).value == quiz1resp3 ||
                document.getElementById("a" + i).value == quiz1resp4) {
                acertos++;
            }
            quizSobreLgpd.splice(n, 1);
            console.log(quizSobreLgpd.length)
            if (quizSobreLgpd.length > 0) {
                iniciaQuiz1(returnRandom(quizSobreLgpd.length));
            } else {
                window.alert("Voce acertou " + acertos);
                window.location.href = "https://lgpdpuc.github.io/contato.html"
            }
        }
    }

}

function validarRespostaQuiz2(n) {

    for (var i = 0; i < 4; i++) {
        if (document.getElementById("b" + i).checked) {
            if (document.getElementById("b" + i).value == quiz2resp1 ||
                document.getElementById("b" + i).value == quiz2resp2 ||
                document.getElementById("b" + i).value == quiz2resp3 ||
                document.getElementById("b" + i).value == quiz2resp4) {
                acertos++;
            }
            quizSobreCriptografia.splice(n, 1);
            console.log(quizSobreCriptografia.length)
            if (quizSobreCriptografia.length > 0) {
                iniciaQuiz2(returnRandom(quizSobreCriptografia.length));
            } else {
                window.alert("Voce acertou " + acertos);
                window.location.href = "https://lgpdpuc.github.io/contato.html"
            }
        }
    }

}