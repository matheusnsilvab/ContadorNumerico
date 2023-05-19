const value = document.querySelector("#numero");

function aumentar() {
   value.innerHTML = `${parseInt(value.innerHTML) + 1}`;
}

function diminuir() {
   value.innerHTML = `${parseInt(value.innerHTML) - 1}`;
}