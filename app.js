const btn = document.getElementById(`addToDo`);
const inputField = document.getElementById(`inputField`);
const toDoCont = document.getElementById(`to-do`);


// WHAT DOES THE BTN DO >>>>>

btn.addEventListener(`click`, ()=>{
    let paragraph = document.createElement(`p`);
    paragraph.style.marginTop = "3%";
    const thingsToDo = document.createTextNode(
        inputField.value
    );

    paragraph.appendChild(thingsToDo);
    toDoCont.appendChild(paragraph); 

    inputField.value=""
    
    // To Cross Stuff

    paragraph.addEventListener(`click`,function(){
        paragraph.style.textDecoration=`line-through`
    })

    // To Remove Stuff

    paragraph.addEventListener(`dblclick`,function(){
        toDoCont.removeChild(paragraph)
    })
})