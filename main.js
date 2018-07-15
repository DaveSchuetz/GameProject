// setting the towers and disk vars

const tower1 = document.querySelector('#first')
const tower2 = document.querySelector('#second')
const tower3 = document.querySelector('#third')
const diskSelector = 4

//Creating using DOM elements
for (i = 1; i <= diskSelector; i++){
    let diskDiv = document.createElement('div')
    diskDiv.id = 'disk' + i
    diskDiv.className = 'disk'
    tower1.appendChild(diskDiv)
}

//Showing minimum moves on board
let minMoves = 2 ** diskSelector - 1
document.getElementById('minimum').textContent = minMoves
// move counter
let counter = 0



//Click event to show highlighted item
let active = false

let actions = function(){
    //Stop console message from appearing with empty towers
    if (active === false && this.childElementCount === 0){
        return
    }else if (active === this.lastChild){
        this.lastChild.style.borderWidth = '1px'
        active = false
    }else if (active === false){
        this.lastChild.style.borderWidth = '10px'
        active = this.lastChild
    }else if (active.offsetWidth < this.lastChild.offsetWidth || this.childElementCount === 0){
        active.style.borderWidth = '1px'
        this.appendChild(active)
        counter =counter + 1
        document.getElementById('counter').textContent = counter
        winner()
        active = false
    }else{
        active.style.borderWidth = '1px'
        active = false}
}
//The listeners are on the parents
tower1.addEventListener('click', actions)
tower2.addEventListener('click', actions)
tower3.addEventListener('click', actions)
//winner alert
function winner() {if (tower3.childElementCount === diskSelector){
    alert(`Congratulations!!! You completed the tower in ${counter} number of moves`)
    tower3.removeEventListener('click', actions)
}}
//reset the game
let rstBtn = document.querySelector('.reset')
rstBtn.addEventListener('click', () =>{
    location.reload()
})

