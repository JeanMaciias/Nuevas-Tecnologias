function agregarNota() {
    const input = document.getElementById("notaInput");
    const lista = document.getElementById("listaNotas");
    const texto = input.value.trim();
  
    if (texto !== "") {
      const li = document.createElement("li");
      li.textContent = texto;
  
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.className = "eliminar";
      botonEliminar.onclick = function () {
        lista.removeChild(li);
      };
  
      li.appendChild(botonEliminar);
      lista.appendChild(li);
      input.value = "";
    }
  }
  