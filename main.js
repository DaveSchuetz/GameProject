// setting the towers and disk vars
const tower1 = document.querySelector('#first')
const tower2 = document.querySelector('#second')
const tower3 = document.querySelector('#third')
const diskSelector = 3
const diskOrder = []
let gameTower = [ [], [], [] ]
//Creating using DOM elements
for (i = 1; i <= diskSelector; i++){
    let diskDiv = document.createElement('div')
    diskDiv.id = 'disk' + i
    diskDiv.className = 'disk'
    tower1.appendChild(diskDiv)
    diskOrder.push(diskDiv.id)
}

//Showing minimum moves on board
let minMoves = 2 ** diskOrder.length - 1
document.getElementById('minimum').textContent = minMoves
// move counter
let counter = 0



//Click event to show highlighted item
let active = false
tower1.addEventListener('click', () => {
    if (active === tower1.lastChild){
        tower1.lastChild.style.borderWidth = '1px'
        active = false
    }else if (active === false){
        tower1.lastChild.style.borderWidth = '10px'
        active = tower1.lastChild
    }else if (active.offsetWidth < tower1.lastChild.offsetWidth || tower1.childElementCount === 0){
        active.style.borderWidth = '1px'
        tower1.appendChild(active)
        counter =counter + 1
        document.getElementById('counter').textContent = counter
        active = false
    }else{
        active.style.borderWidth = '1px'
        active = false}
})
tower2.addEventListener('click', () => {
    if (active === tower2.lastChild){
        tower2.lastChild.style.borderWidth = '1px'
        active = false
    }else if (active === false){
        tower2.lastChild.style.borderWidth = '10px'
        active = tower2.lastChild
    }else if (active.offsetWidth < tower2.lastChild.offsetWidth || tower2.childElementCount === 0){
        active.style.borderWidth = '1px'
        tower2.appendChild(active)
        counter =counter + 1
        document.getElementById('counter').textContent = counter
        active = false
    }else{
        active.style.borderWidth = '1px'
        active = false}
})
tower3.addEventListener('click', () => {
    if (active === tower3.lastChild){
        tower3.lastChild.style.borderWidth = '1px'
        active = false
    }else if (active === false){
        tower3.lastChild.style.borderWidth = '10px'
        active = tower3.lastChild
    }else if (active.offsetWidth < tower3.lastChild.offsetWidth || tower3.childElementCount === 0){
        active.style.borderWidth = '1px'
        tower3.appendChild(active)
        counter =counter + 1
        document.getElementById('counter').textContent = counter
        active = false
        winner()
    }else{
        active.style.borderWidth = '1px'
        active = false}
})
function winner() {if (tower3.childElementCount === 3){
    alert(`Congratulations!!! You completed the tower in ${counter} number of moves`)
}}

let rstBtn = document.querySelector('.reset')
rstBtn.addEventListener('click', () =>{
    location.reload()
})

