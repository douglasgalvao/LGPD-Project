function iniciaQuiz1(){
    document.getElementById("quizUM").innerHTML += `
        <label class="col-12" for="a1">
        <input type="radio" value="" id="a1"></label>
        <label class="col-12" for="a2"><input type="radio" value="" id="a2">    </label>
        <label class="col-12" for="a3"><input type="radio" value="" id="a3">    </label>
        <label class="col-12" for="a4"><input type="radio" value="" id="a4">    </label>
        <button class="btn btn-primary" style="float:right;margin-right: 20px;margin-bottom: 30px;">Proximo</button>`;
    document.getElementById("quizDOIS").innerHTML += `
    <label class="col-12" style="float: left;"for="quizDois">
    <input type="radio" value="" id="a1"></label>
    <label class="col-12" for="quizDois"><input type="radio" value="asdfasdf" id="a2"></label>
    <label class="col-12" for="quizDois"><input type="radio" value="" id="a3">  </label>
    <label class="col-12" for="quizDois"><input type="radio" value="" id="a4">  </label>
    <button class="btn btn-primary" style="float:right;margin-right: 20px;margin-bottom: 30px;">Proximo</button>`
}


if(window.location.href == "http://127.0.0.1:5500/quizzes.html#" || window.location.href == "http://127.0.0.1:5500/quizzes.html"){
    iniciaQuiz1();        
}
