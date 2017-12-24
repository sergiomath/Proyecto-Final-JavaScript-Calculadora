var numero1=0;
var numero2=0;      // variables Globales
var operacion="";
var calcular;
var contadorDeIguales=0;
for (var i = 0; i <document.getElementsByClassName("tecla").length; i++) {
  document.getElementsByClassName("tecla")[i].onmousedown=down_en_tecla;
  document.getElementsByClassName("tecla")[i].onmouseup=up_en_tecla;
} // a todas las clase tecla se les da el valor onclick
function down_en_tecla() {
  this.style.padding='0.5%'; //disminuye el tamaño de la tecla
  if (this.id=="on") {  //reinicia los valores
    numero1=0;
    numero2=0;
    operacion="";
    contadorDeIguales=0;
  }
  else if (this.id=="mas" || this.id=="por"|| this.id=="dividido" || this.id=="menos" || this.id=="igual"){
          if (contadorDeIguales>=1 && this.id=="igual") {
                if (operacion=="mas") {
                  calcular=calculadora(numero1,numero2);
                  calcular.sumar();
                }
                else if (operacion=="dividido") {
                  calcular=calculadora(numero1,numero2);
                  calcular.dividir();
                }
                else if (operacion=="por") {
                  calcular=calculadora(numero1,numero2);
                  calcular.multiplicar();
                }
                else if (operacion=="menos") {
                  calcular=calculadora(numero1,numero2);
                  calcular.restar();
                }
              if (this.id=="igual") {
                    document.getElementById("display").innerHTML=String(calcular.resultado()).substring(0,8);
                    numero1=calcular.resultado();
                  }
              else {
                operacion=this.id;
                numero1=calcular.resultado();
              }
          }
          else if (numero1==0) {// verificación del primer valor
            numero1=parseFloat(document.getElementById("display").innerHTML);
            operacion=this.id;
            calcular=0;
            contadorDeIguales=0;
          }
          else {
            if (contadorDeIguales==0) { //ocurre si solo se presiona el primer igual
                numero2=parseFloat(document.getElementById("display").innerHTML);
                if (operacion=="mas") {
                  calcular=calculadora(numero1,numero2);
                  calcular.sumar();
                }
                else if (operacion=="dividido") {
                  calcular=calculadora(numero1,numero2);
                  calcular.dividir();
                }
                else if (operacion=="por") {
                  calcular=calculadora(numero1,numero2);
                  calcular.multiplicar();
                }
                else if (operacion=="menos") {
                  calcular=calculadora(numero1,numero2);
                  calcular.restar();
                }
              if (this.id=="igual") {
                    document.getElementById("display").innerHTML=String(calcular.resultado()).substring(0,8);
                    numero1=0;
                    contadorDeIguales+=1;
                  }
              else {
                operacion=this.id;
                numero1=calcular.resultado();
            }
          }
    }


  }
  mostrarEnPantalla(this.id);

}
function up_en_tecla(){
  this.style.padding='0%';
}
function mostrarEnPantalla(elemento) {
  if (elemento=="on") {//reiniciat al presionar on
    document.getElementById('display').innerHTML="0";
  }
  else {
    if (document.getElementById('display').innerHTML.length<=8) {//menos de 8 digitos

            if(document.getElementById('display').innerHTML=="0" && elemento=="0"){
              //si se queire agregar otro cero no se podrá
            }
            else {
              if( parseInt(elemento) >=0  || elemento=="punto"){ // numeros

                    if (document.getElementById('display').innerHTML=="0" && elemento!=".") {

                          document.getElementById('display').innerHTML=elemento;
                    }
                    else {
                      if(elemento=="punto"){ //Verificación de los puntos
                            elemento=".";
                            if (document.getElementById('display').innerHTML.indexOf(".")==-1) {
                                    document.getElementById('display').innerHTML+=elemento;
                            }

                      }
                      else {
                          document.getElementById('display').innerHTML+=elemento; //anexando valores
                      }

                    }
              }
              else if (elemento=="sign") {  //colocando signo
                if (document.getElementById('display').innerHTML.indexOf("-")==-1) {
                  document.getElementById('display').innerHTML="-"+document.getElementById('display').innerHTML;
                }
                else {// usando el método para que no se repita el signo menos
                  document.getElementById('display').innerHTML=document.getElementById('display').innerHTML.substring(1,document.getElementById('display').innerHTML.length);
                }
              }
              else { //cuando se intrduce cualquier valor distinto a un numero punto o signo
                if (elemento=="igual") {

                }
                else {
                  document.getElementById('display').innerHTML=" ";
                }
              }
            }
    }
  }

} //función que muestra en pantalla
var calculadora=(function(num1,num2){
  var resultado=0;
  function actualizarResultado(nuevoResultado){
    resultado=nuevoResultado;
  }
  return{
    sumar:function () {
      var resultado=num1+num2;
      actualizarResultado(resultado);
    },
    restar:function () {
      var resultado=num1-num2;
      actualizarResultado(resultado);
    },
    multiplicar:function () {
      var resultado=num1*num2;
      actualizarResultado(resultado);
    },
    dividir:function () {
      var resultado=num1/num2;
      actualizarResultado(resultado);
    },
    resultado:function () {
      return resultado;
    }
  }
})  //funciones de la calculadora función modular de calculadora
