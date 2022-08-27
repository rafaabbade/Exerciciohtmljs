//const form = document.getElementById("form-comparador");

//form.addEventListener("submit",function(e){
    //e.preventDefault();
    function comparaNumero() {
    let numeroA = document.getElementById("numero-a").value;
    let numeroB = document.getElementById("numero-b").value;

    if (numeroA > numeroB){
        //document.querySelector(".mensagem-sucesso").style.display ="block";
        //document.querySelector(".error-message").style.display ="none";
        alert("O número A é maior do que o número B.")
    }
    else {
        //document.querySelector(".mensagem-sucesso").style.display ="none";
        //document.querySelector(".error-message").style.display ="block";
        alert("O número A precisa ser maior do que o número B.")
    }
}
//)
