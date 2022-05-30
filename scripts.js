**let clientesExample = {
    "clientes": [{
        "nome": "Matheus",
        "email": "araujoCabulozo@gmail.com",
        "senha": "19920184Mat",
        "login": "mateusFernandes",
        "cidade": "completar",
        "data_Nascimento": "11/06/1996",
        "id": 1
    }, {
        "nome": "Daniela",
        "email": "daniMacabra@hotmail.com",
        "senha": "s2DaniLinda",
        "login": "DaniMocinha",
        "cidade": "Contagem",
        "data_Nascimento": "29/02/2002",
        "id": 2
    }, {
        "nome": "DgCabulozo",
        "email": "douglas-mad@live.com",
        "senha": "99303451",
        "login": "dgzadaSprayFinin",
        "cidade": "Sabará",
        "data_Nascimento": "15/02/1995",
        "id": 3
    }, {
        "nome": "Anna",
        "email": "ferreiraTenebrosa@hotmail.com",
        "senha": "99751564",
        "login": "AnnaMaluca",
        "cidade": "Contagem",
        "data_Nascimento": "02/01/1990",
        "id": 4
    }, {
        "nome": "Lucas",
        "email": "andradeGomes.@gmail.com",
        "senha": "123456789",
        "login": "LucasLoko",
        "cidade": "Belo-Horizonte",
        "data_Nascimento": "03/03/2000",
        "id": 5
    }]
}
let leisExample = {
    "lei": [{
        "lei": "<><><><>< TESTE",
        "codigoLei": "DA VINCI",
        "date_created": "11/06/1996",
        "id": 420
    }]
}


let countClientes = 0,
    countLeis = 0,
    countClientesExample = 0,
    countLeisExample = 0;

let clientesReais = {
    "cliente": []
}
let clienteLogged = {
    "nome": ""
}
let leisReais = {
    "lei": []
}

updateClientesReais();

if (localStorage.getItem("nome") && localStorage.getItem("nome").length > 0) {
    updateLoggedIn();
} else {
    updateLoggedOut();
}



function criaUsuario() {
    let nome = document.getElementById("nomeInput").value,
        email = document.getElementById('emailInput').value,
        senha = document.getElementById('senhaInput').value,
        cidade = document.getElementById('cidadeInput').value,
        login = document.getElementById('loginInput').value,
        dataNascimento = document.getElementById('dataDeNascimentoInput').value;


    if (clientesReais.cliente.length && clientesReais.cliente.find(e => e.login == login || e.email == email)) {
        document.getElementById('fraseErroCadastro').textContent = "Não foi possivel realizar o cadastro, email ou login existente!";
        document.getElementById('fraseErroCadastro').style = "color:white; text-align:center;margin-top:20px";
        setTimeout(() => {
            document.getElementById('fraseErroCadastro').textContent = "";
            document.getElementById("nomeInputErr").textContent = "";
            document.getElementById("emailInputErr").textContent = "";
            document.getElementById("senhaInputErr").textContent = "";
            document.getElementById("cidadeInputErr").textContent = "";
            document.getElementById("loginInputErr").textContent = "";
            document.getElementById("dataInputErr").textContent = "";
            nome = document.getElementById("nomeInput").value = "";
            email = document.getElementById('emailInput').value = "";
            senha = document.getElementById('senhaInput').value = "";
            cidade = document.getElementById('cidadeInput').value = "";
            login = document.getElementById('loginInput').value = "";
            dataNascimento = document.getElementById('dataDeNascimentoInput').value = "";
        }, 1000);
    } else {

        if (nome == "" || email == "" || senha == "" || cidade == "" || login == "" || dataNascimento == "") {
            if (nome == "") {
                document.getElementById("nomeInputErr").textContent = "É nescessario o preenchimento do campo Nome";
                document.getElementById("nomeInputErr").style = "color:red"
            } else {
                document.getElementById("nomeInputErr").textContent = "";
            }
            if (email == "") {
                document.getElementById("emailInputErr").textContent = "É nescessario o preenchimento do campo Email";
                document.getElementById("emailInputErr").style = "color:red"
            } else {
                document.getElementById("emailInputErr").textContent = "";
            }
            if (senha == "") {
                document.getElementById("senhaInputErr").textContent = "É nescessario o preenchimento do campo Senha";
                document.getElementById("senhaInputErr").style = "color:red"
            } else {
                document.getElementById("senhaInputErr").textContent = "";
            }
            if (cidade == "") {
                document.getElementById("cidadeInputErr").textContent = "É nescessario o preenchimento do campo Cidade";
                document.getElementById("cidadeInputErr").style = "color:red"
            } else {
                document.getElementById("cidadeInputErr").textContent = "";
            }
            if (login == "") {
                document.getElementById("loginInputErr").textContent = "É nescessario o preenchimento do campo Login";
                document.getElementById("loginInputErr").style = "color:red"
            } else {
                document.getElementById("loginInputErr").textContent = "";
            }
            return;
        } else {
            setTimeout(() => {
                localStorage.setItem("clienteReal :" + clientesReais.cliente.length, JSON.stringify({
                    "nome": nome,
                    "email": email,
                    "senha": senha,
                    "login": login,
                    "cidade": cidade,
                    "data_Nascimento": dataNascimento,
                    "id": clientesReais.cliente.length
                }));
                document.getElementById("nomeInput").value = "";
                document.getElementById('emailInput').value = "";
                document.getElementById('senhaInput').value = "";
                document.getElementById('cidadeInput').value = "";
                document.getElementById('loginInput').value = "";
                document.getElementById('dataDeNascimentoInput').value = "";
                setTimeout(() => {
                    alert("Usuário cadastrado em nosso site!");
                    window.location.href = "https://LGPDpuc.github.io/login.html"
                }, 1200);
                updateClientesReais();
            }, 200);
        }


    }
}

function criaLei() {
    let lei, codigoLei, dataCriacao
    if (leisReais.lei.length && leisReais.lei.find(e => e.lei == lei || e.codigoLei == codigoLei)) {
        document.getElementById('fraseErroCadastro').textContent = "Não foi possivel realizar o cadastro, email ou login existente!";
    } else {
        localStorage.setItem("lei :" + countLeis, JSON.stringify({
            "lei": lei,
            "codigoLei": codigoLei,
            "date_created": dataCriacao,
            "id": countLeis++
        }));
        document.getElementById('loginInput').value = "";
        document.getElementById('dataDeNascimentoInput').value = "";
        setTimeout(() => {
            window.location.href = "https://LGPDpuc.github.io/html.html"
        }, 2000);
        updateLeisReais();
    }
}

function updateClientesReais() {

    clientesReais = {
        "cliente": []
    }
    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem("clienteReal :" + i)) {
            clientesReais.cliente.push(JSON.parse(localStorage.getItem("clienteReal :" + i)));
        }
    }
}

function updateLeisReais() {
    leisReais = {
        "lei": []
    }
    for (countLeis = 0; countLeis < localStorage.length; countLeis++) {
        if (localStorage.getItem("lei :" + countLeis)) {
            leisReais.lei.push(JSON.parse(localStorage.getItem("lei :" + countLeis)));
        }
    }
}

function authenticate() {

    let login = document.getElementById("staticEmail").value;
    let password = document.getElementById("inputPassword").value;
    let logged = false;
    updateClientesReais();
    console.log(clientesReais)
    if (clientesReais.cliente.length) {
        clientesReais.cliente.forEach(e => {
            if (e.login == login && e.senha == password || e.email == login && e.senha == password) {
                alert("Logged in! \n acesso liberado!");
                logged = true;
                localStorage.setItem("nome", e.nome);
                localStorage.setItem("id", e.id + "")
                window.location.href = "https://LGPDpuc.github.io/main.html";
                document.getElementById("nameLogged").textContent = localStorage.getItem("nome");
            }
        });
    }
    if (!logged) {
        document.getElementById("inputPasswordErr").textContent = "Usúario ou senha inválidos.";
        document.getElementById("inputPasswordErr").style = "color:red;padding-top:25px";
        setTimeout(() => {
            document.getElementById("inputPasswordErr").textContent = "";
            document.getElementById("inputPasswordErr").style = "color:none;padding-top:0px";
        }, 1500);
    }
    return logged;
}

function sendEmailRecuperarSenha() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "douglasgmachado98@gmail.com",
        Password: "110698Douglas",
        To: document.getElementById("staticEmail").value,
        From: "douglasgmachado98@gmail.com",
        Subject: "Recuperação de senha LGPD securitt",
        Body: "Well that was easy!!", // depois que resolver o envio de email eu trato o conteudo
    }).then(function () {
        alert("Email enviado com sucesso");
    });
}

function updateLoggedIn() {
    if (window.location.href == "https://LGPDpuc.github.io/main.html") {
        document.getElementById("LoggedMain").textContent = localStorage.getItem("nome");
        document.getElementById("Notícias").textContent = "Notícias";
        document.getElementById("Vídeos").textContent = "Vídeos";
        document.getElementById("Quizzes").textContent = "Quizzes";
        document.getElementById("SAIR").hidden = false;
        document.getElementById("ButtonLogin").hidden = true;
        document.getElementById("ButtonCadastro").hidden = true;
        document.getElementById("buttonVoltarSaibaMais").hidden = true;
    } else if (window.location.href == "https://LGPDpuc.github.io/cadastro.html") {
        document.getElementById("nameLogged").textContent = localStorage.getItem("nome");
        document.getElementById("SAIR").textContent = "SAIR";
        document.getElementById("ButtonCadastro").hidden = true;
        document.getElementById("ButtonLogin").hidden = false;
    } else if (window.location.href == "https://LGPDpuc.github.io/login.html") {
        document.getElementById("nameLogged").textContent = localStorage.getItem("nome");
        document.getElementById("SAIR").textContent = "SAIR";
        document.getElementById("ButtonCadastro").hidden = false;
        document.getElementById("ButtonLogin").hidden = true;
    } else if (window.location.href == "https://LGPDpuc.github.io/noticias.html") {
        document.getElementById("nameLogged").textContent = localStorage.getItem("nome");
        document.getElementById("Notícias").textContent = "Notícias";
        document.getElementById("Vídeos").textContent = "Vídeos";
        document.getElementById("Quizzes").textContent = "Quizzes";
        document.getElementById("SAIR").hidden = false;
        document.getElementById("ButtonLogin").hidden = true;
        document.getElementById("ButtonCadastro").hidden = true;
    } else if (window.location.href == "https://LGPDpuc.github.io/videos.html") {
        document.getElementById("nameLogged").textContent = localStorage.getItem("nome");
        document.getElementById("Notícias").textContent = "Notícias";
        document.getElementById("Vídeos").textContent = "Vídeos";
        document.getElementById("Quizzes").textContent = "Quizzes";
        document.getElementById("SAIR").hidden = false;
        document.getElementById("ButtonLogin").hidden = true;
        document.getElementById("ButtonCadastro").hidden = true;

    }
}

function updateLoggedOut() {
    localStorage.setItem("nome", "");
    if (window.location.href == "https://LGPDpuc.github.io/main.html") {
        document.getElementById("buttonVoltarSaibaMais").hidden = true;
        document.getElementById("Menu").hidden = true;
        document.getElementById("LoggedMain").hidden = true;
        document.getElementById("Notícias").hidden = true;
        document.getElementById("Vídeos").hidden = true;
        document.getElementById("Quizzes").hidden = true;
        document.getElementById("Contato").hidden = true;
        document.getElementById("SAIR").hidden = true;
        setTimeout(() => {
            window.location.href = "https://LGPDpuc.github.io/login.html";
        }, 200);
    } else if (window.location.href == "https://LGPDpuc.github.io/noticias.html") {
        document.getElementById("Menu").hidden = true;
        document.getElementById("nameLogged").hidden = true;
        document.getElementById("Notícias").hidden = true;
        document.getElementById("Vídeos").hidden = true;
        document.getElementById("Quizzes").hidden = true;
        document.getElementById("Contato").hidden = true;
        document.getElementById("SAIR").hidden = true;
        setTimeout(() => {
            window.location.href = "https://LGPDpuc.github.io/login.html";
        }, 200);
    } else if (window.location.href == "https://LGPDpuc.github.io/videos.html") {
        document.getElementById("Menu").hidden = true;
        document.getElementById("LoggedMain").hidden = true;
        document.getElementById("Notícias").hidden = true;
        document.getElementById("Vídeos").hidden = true;
        document.getElementById("Quizzes").hidden = true;
        document.getElementById("Contato").hidden = true;
        document.getElementById("SAIR").hidden = true;
        setTimeout(() => {
            window.location.href = "https://LGPDpuc.github.io/login.html";
        }, 200);
    } else if (window.location.href == "https://LGPDpuc.github.io/cadastro.html") {
        document.getElementById("nameLogged").hidden = true;
        document.getElementById("SAIR").hidden = true;
    } else if (window.location.href == "https://LGPDpuc.github.io/login.html") {
        document.getElementById("nameLogged").hidden = true;
        document.getElementById("SAIR").hidden = true;
    }


}

function showSaibaMais() {
    document.getElementById("textQuemSomos").innerHTML = "Somos alunos do primeiro período de ciências da computação, na faculdade Puc Minas unidade coração eucarístico. Nos reunimos em um grupo de 6 pessoas e através do nosso trabalho interdisciplinar escolhemos o tema vazamento de dados, com o intuito de conscientizar sobre o vazamento de dados, além da importância de protegermos nossos dados."
    document.getElementById("textQuemSomos").innerHTML += "Para isso criamos um método educativo baseado em videoaulas , cursos e quizes abordando sobre temas como o que é LGPD , sobre controles técnicos para ter seus dados mais seguros. Todas essas funcionalidades, inclusas em um site o qual contém as funcionalidades de portal de noticias sobre o mundo da segurança e ranking de empresas que mais vazam dados."
    document.getElementById("buttonSaibaMais").hidden = true;
    document.getElementById("buttonVoltarSaibaMais").hidden = false;
}

function hiddenSaibaMais() {
    document.getElementById("textQuemSomos").innerHTML = "Somos alunos do primeiro período de ciências da computação, na faculdade Puc Minas unidade coração eucarístico. Nos reunimos em um grupo de 6 pessoas e através do nosso trabalho interdisciplinar escolhemos o tema vazamento de dados, com o intuito de conscientizar sobre o vazamento de dados, além da importância de protegermos nossos dados."
    document.getElementById("buttonSaibaMais").hidden = false;
    document.getElementById("buttonVoltarSaibaMais").hidden = true;
}