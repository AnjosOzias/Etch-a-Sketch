const container = document.getElementById("container");

const total = 256;   
const colunas = 16;

for (let i = 0; i < total; i++) {
  const div = document.createElement("div");
  div.className = "item";
  //div.textContent = i + 1;

  // Calcula largura proporcional às colunas
  div.style.flex = `0 0 calc(100% / ${colunas} - 5px)`;

  container.appendChild(div);
}