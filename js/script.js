function calcular(event){
  event.preventDefault();

  let alcoolInput = document.getElementById("alcool").value;
  let gasolinaInput = document.getElementById("gasolina").value;
  let contentResultado = document.getElementById("content-resultado");
  let textResultado = document.getElementById("texto-resultado");
  let alcoolResultado = document.getElementById("alcool-resultado");
  let gasolinaResulatdo = document.getElementById("gasolina-resultado");

  /* Calculo: álcool/gasolina 
      E se o resultado for menor que 0.7 compensa usar álcool*/ 
  let calculo=(alcoolInput/gasolinaInput);

  if(calculo<0.7){
    //Aqui compensa usar álcool
    textResultado.innerHTML = "Compensa usar Álcool";
  }else{
    //Compensa usar gasolina
    textResultado.innerHTML = "Compenda usar Gasolina";
  }

  gasolinaResulatdo.innerHTML = "Gasolina R$ "+ gasolinaInput;
  alcoolResultado.innerHTML= "Álcool R$ "+ alcoolInput;

  contentResultado.classList.remove("hide")

}