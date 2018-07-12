// setting the towers and disk vars
const towers = document.querySelectorAll('.tower')
const diskSelector = 3
const diskOrder = []
for (i = 1; i <= diskSelector; i++){
    let diskDiv = document.createElement('div')
    diskDiv.id = 'disk' + i
    diskDiv.className = 'disk'
    towers[0].appendChild(diskDiv)
    diskOrder.push(diskDiv.id)
}
const disks = document.querySelectorAll('.disk')
let gameTower = [ [], [], [] ]

for (i=0;i<disks.length;i++){
    gameTower[0].push(disks[i])
}
let lastTower1 = gameTower[0][gameTower[0].length - 1]
let lastTower2 = gameTower[1][gameTower[1].length - 1]
let lastTower3 = gameTower[2][gameTower[2].length - 1]

//Showing minimum moves on board
let minMoves = document.getElementById('minimum')
minMoves = 2 ** disks.length - 1
document.getElementById('minimum').textContent = minMoves

//Click event to show highlighted item
let active = false
lastTower1.addEventListener('click',() => {
    if (lastTower1.style.borderWidth != '10px'){
        lastTower1.style.borderWidth = '10px'
        active = lastTower1
    }else{
        lastTower1.style.borderWidth = '1px'
        active = false
    }
})

// lastTower2.addEventListener('click',() => {
//     if (lastTower2.style.borderWidth != '10px'){
//         lastTower2.style.borderWidth = '10px'
//         active = true
//     }else{
//         lastTower2.style.borderWidth = '1px'
//         active = false
//     }
// })

// lastTower1.addEventListener('click',() => {
//     if (lastTower3.style.borderWidth != '10px'){
//         lastTower3.style.borderWidth = '10px'
//         active = true
//     }else{
//         lastTower3.style.borderWidth = '1px'
//         active = false
//     }
// })

// moving to new tower
towers[1].addEventListener('click', () => {
    if (active != false){
        gameTower[1].push(active)
        active.style.borderWidth = '1px'
        gameTower[0].pop()

    }
    active = false
})
