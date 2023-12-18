/* Calculadora simples em JavaScript
   Autor: Abraão Alves 
   Data da criação 11/12/2023
   Descrição: Esse script implemta uma calculadora simples e movivel em JS*/


function addToDisplay(value) {
    document.calculadora.display.value += value; 
    /* "addToDisplay(value)" Adiciona o valor (número ou operador) ao visor da calculadora. 
    Esta função é chamada quando um botão numérico ou operador é pressionado.*/
}


function clearDisplay() {
    document.calculadora.display.value = "";
    /* clearDisplay(): Limpa o visor da calculadora. Essa função é chamada quando o botão "C" é pressionado. */
}

function calcular() {
    try {
        document.calculadora.display.value = eval(document.calculadora.display.value);
    } catch (error) {
        document.calculadora.display.value = "Erro";
    }
    /*calcular(): Avalia a expressão matemática presente no visor. 
    Se ocorrer um erro durante a avaliação, exibe "Erro" no visor. */
}

document.addEventListener('DOMContentLoaded', function() {
    var calculadora = document.getElementById('calculadora');
    /* var calculadora = document.getElementById('calculadora');: 
    Obtém a referência ao elemento da calculadora no DOM. */
    var draggie = new Draggabilly(calculadora);
    /* var draggie = new Draggabilly(calculadora);: Cria uma instância do objeto Draggabilly associado ao elemento da calculadora.
     O Draggabilly é uma biblioteca que permite tornar elementos DOM arrastáveis (móveis). */

    // Agora você não precisa mais dos eventos de arraste personalizados

    // Lembre-se de que a classe "centralizar" pode interferir na posição,
    // você pode ajustar o posicionamento conforme necessário
});



