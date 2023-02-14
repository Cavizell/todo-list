let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa() {
  // pegar valor digitado no input

  let valorInput = input.value;

  // senao for vazio nem null nem underfined

  if (valorInput !== null && valorInput !== "" && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

    // adiciona novo item no main
    main.innerHTML += novoItem;

    // zerar os campos
    input.value = "";
    input.focus();
  }
}

// removendo tarefa de acordo com o ID que eu passei para deletar
function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}

// codigo vai ficar prestando atenção e realizar função
input.addEventListener("keyup", function (event) {
  // se teclou enter que é igual 13
  if (event.keyCode === 13) {
    event.preventDefault();
    // previne qualquer apertão indevido de enter
    btnAdd.click();
  }
});
