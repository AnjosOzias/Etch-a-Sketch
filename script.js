const container = document.getElementById("container");
const btn = document.querySelector(".btn");

btn.addEventListener("click",(evt)=>{
    const colunas = Number(prompt("Digite um número"));
    
    if(colunas > 100){
        alert("Digite um número até cem");
        return;
    }
    if(isNaN(colunas)){
        alert("digite um número válido");
        return;
    }
    if(!colunas){
        alert("UNDEFINED: Digite um número até cem");
        return;
    }

    total = colunas*colunas;

  container.replaceChildren(); 


for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.setAttribute("class","item");
  //div.className = "item";
  //div.textContent = i + 1;
    div.style.flex = `1 0 calc(100% / ${colunas} - 3px)`;
    container.appendChild(div);
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    let op = 0;

    div.addEventListener("mouseover",(evt)=>{
    console.log(evt)

    op += 10;
    if (op > 100) op = 100;
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${op}%)`
    console.log(op)

})
}
})
