const werow1 = document.querySelector("#werow1");

werow1.addEventListener('click',(e)=>{
    let child = werow1.children
    for (let i=0;i<child.length;i++){
        child[i].classList.toggle('skills')
    }
});
const werow2 = document.querySelector("#werow2");

werow2.addEventListener('click',(e)=>{
    let child = werow2.children
    for (let i=0;i<child.length;i++){
        child[i].classList.toggle('skills')
    }
});
const werow3 = document.querySelector("#werow3");

werow3.addEventListener('click',(e)=>{
    let child = werow3.children
    for (let i=0;i<child.length;i++){
        child[i].classList.toggle('skills')
    }
});
