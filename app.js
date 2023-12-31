const container = document.querySelector(".container")
const sizeEl = document.querySelector(".size")
let size = sizeEl.value;
const  color = document.querySelector(".color")
const reset = document.querySelector(".btn")

let draw = false

function populate(size){
    container.style.setProperty("--size",size)
    for(let i=0;i<size*size;i++){
        const div = document.createElement('div')
        div.classList.add("pixel")

        div.addEventListener("mouseover",function(){
            if(!draw) return
            div.style.backgroundColor = color.value
        })
        div.addEventListener("mousedown",function(){
            div.style.backgroundColor = color.value
        })

        container.appendChild(div)
    }

}

window.addEventListener("mousedown",function(){
    draw = true
})
window.addEventListener("mouseup",function(){
    draw = false
})
reset.addEventListener("click",function(){
    container.innerHTML = '';
    populate(size)
})

sizeEl.addEventListener("change",function(){
    size = sizeEl.value
    reset()
})
populate(size)
