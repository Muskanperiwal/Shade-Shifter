
// alert("This is not allowed");

// +++++++++++++++++++++++++++++++++++++++++++++++

// to create element and apply click event throuhgh javascript

const div1 = document.createElement('div1')
console.log(div1);
div1.id ='new_element'
const addText = document.createTextNode('Hiiii I am new element')
div1.appendChild(addText)
document.body.appendChild(div1)
document.querySelector('div1')
div1.style.backgroundColor = 'blanchedalmond'
div1.style.border = '2px solid black'
div1.style.width = '100px'
div1.style.height = '30px'
div1.style.borderRadius = '12px'
div1.style.textAlign = 'center'
div1.style.paddingTop ='3px'
div1.style.padding ='12px'
div1.style.cursor = 'pointer'
div1.style.borderRadius = '38px 0px'


const div2 = document.querySelectorAll('div1')
console.log(div2);
const body1 = document.querySelector('body')
div2.forEach((div2)=> {
    console.log(div2);
    div2.addEventListener('click', (e)=>{
        console.log(event);
        console.log(event.target);
        if(e.target.id ==='new_element'){
            body.style.backgroundColor ='blanchedalmond'
        }

    } )
})
//++++++++++++++++++++++++++++++++++++++++++++++++

const box= document.querySelectorAll('.box')
// console.log(box);
const body = document.querySelector("body")

box.forEach((box) => {
    console.log(box);
    box.addEventListener('click', (e)=> {
        // console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'plum'){
            body.style.backgroundColor = e.target.id ;
        }
    });
});


