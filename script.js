let botao = document.querySelector("#botao");
botao.style.color="black";
let clicado=false;
botao.addEventListener("mouseover",e =>{
    if(clicado=false);
    botao.style.color="red";   
});

botao.addEventListener("mouseout",e =>{
    botao.style.color="black";   
});

botao.addEventListener("click",e =>{
    if(clicado=false);
    botao.style.color="black";
    botao.innerHTML="Seja muito bem vindo, vou lhe contar um pouco mais sobre mim.";
});


   