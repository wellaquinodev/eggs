function calcular() {
  let valorOvos = document.querySelector('#valorOvos').value
  let quantOvos = 30;
  let mostrar = document.querySelector("#mostrar")
  let mostrar1 = document.querySelector("#mostrar1")
  let mostrar2 = document.querySelector("#mostrar2")
  let quantValor = valorOvos / 30
  
  mostrar.innerHTML = `<strong>1 Ovo:</strong> R$ ${quantValor.toFixed(2) * 1}.<br>
  <strong>2 Ovos:</strong> R$ ${quantValor.toFixed(2) * 2}.<br>
  <strong>3 Ovos:</strong> R$ ${quantValor.toFixed(2) * 3}.<br>
  <strong>4 Ovos:</strong> R$ ${quantValor.toFixed(2) * 4}.<br>
  <strong>5 Ovos:</strong> R$ ${quantValor.toFixed(2) * 5}.<br>
  <strong>6 Ovos:</strong> R$ ${quantValor.toFixed(2) * 6}.<br>
  <strong>7 Ovos:</strong> R$ ${quantValor.toFixed(2) * 7}.<br>
  <strong>8 Ovos:</strong> R$ ${quantValor.toFixed(2) * 8}.<br>
  <strong>9 Ovos:</strong> R$ ${quantValor.toFixed(2) * 9}.<br>
  <strong>10 Ovos:</strong> R$ ${quantValor.toFixed(2) * 10}.<br>`
  mostrar1.innerHTML = `<strong>11 Ovos:</strong> R$ ${quantValor.toFixed(2) * 11}.<br>
  <strong>12 Ovos:</strong> R$ ${quantValor.toFixed(2) * 12}.<br>
  <strong>13 Ovos:</strong> R$ ${quantValor.toFixed(2) * 13}.<br>
  <strong>14 Ovos:</strong> R$ ${quantValor.toFixed(2) * 14}.<br>
  <strong>15 Ovos:</strong> R$ ${quantValor.toFixed(2) * 15}.<br>
  <strong>16 Ovos:</strong> R$ ${quantValor.toFixed(2) * 16}.<br>
  <strong>17 Ovos:</strong> R$ ${quantValor.toFixed(2) * 17}.<br>
  <strong>18 Ovos:</strong> R$ ${quantValor.toFixed(2) * 18}.<br>
  <strong>19 Ovos:</strong> R$ ${quantValor.toFixed(2) * 19}.<br>
  <strong>20 Ovos:</strong> R$ ${quantValor.toFixed(2) * 20}.<br>`
  mostrar2.innerHTML = `<strong>21 Ovos:</strong> R$ ${quantValor.toFixed(2) * 21}.<br>
  <strong>22 Ovos:</strong> R$ ${quantValor.toFixed(2) * 22}.<br>
  <strong>23 Ovos:</strong> R$ ${quantValor.toFixed(2) * 23}.<br>
  <strong>24 Ovos:</strong> R$ ${quantValor.toFixed(2) * 24}.<br>
  <strong>25 Ovos:</strong> R$ ${quantValor.toFixed(2) * 25}.<br>
  <strong>26 Ovos:</strong> R$ ${quantValor.toFixed(2) * 26}.<br>
  <strong>27 Ovos:</strong> R$ ${quantValor.toFixed(2) * 27}.<br>
  <strong>28 Ovos:</strong> R$ ${quantValor.toFixed(2) * 28}.<br>
  <strong>29 Ovos:</strong> R$ ${quantValor.toFixed(2) * 29}.<br>
  <strong>30 Ovos:</strong> R$ ${quantValor.toFixed(2) * 30}.<br>`
}
