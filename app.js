class ship {
    constructor(firepower, hull, accuracy, checkWin){
        this.firepower = firepower,
        this.hull = hull,
        this.accuracy = accuracy
        this.checkWin = checkWin
    }
 }

 class alienShip {
    constructor(firepower, hull, accuracy){
        this.firepower = firepower
        this.hull = hull
        this.accuracy = accuracy
    }
}






 

const ussShip = new ship(5, 20, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)


const alienShip1 = new alienShip(this.firepower = Math.floor(Math.random() * 3) + 2, this.hull = Math.floor(Math.random() * 4) + 3, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
const alienShip2 = new alienShip(this.firepower = Math.floor(Math.random() * 3) + 2, this.hull = Math.floor(Math.random() * 4) + 3, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
const alienShip3 = new alienShip(this.firepower = Math.floor(Math.random() * 3) + 2, this.hull = Math.floor(Math.random() * 4) + 3, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
const alienShip4 = new alienShip(this.firepower = Math.floor(Math.random() * 3) + 2, this.hull = Math.floor(Math.random() * 4) + 3, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
const alienShip5 = new alienShip(this.firepower = Math.floor(Math.random() * 3) + 2, this.hull = Math.floor(Math.random() * 4) + 3, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
const alienShip6 = new alienShip(this.firepower = Math.floor(Math.random() * 3) + 2, this.hull = Math.floor(Math.random() * 4) + 3, this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)

const checkWin = new ship('')


let alienArmy = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]

console.log(alienArmy);



// function losser (){
//     if (hull <= checkWin){
//        alert('kabool-ey');
//     }
// }

class game  {
    constructor(checkWin){
        this.checkWin = checkWin
    }
    }
    const checkWinner = new game(0)





const ussHealth = document.querySelector('#ussHull');
const ussRetreat = document.querySelector('.retreat')
const ussAttack = document.querySelector('.attack')

const ship1Health = document.querySelector('.ship1Hull')
const ship2Health = document.querySelector('.ship2Hull')
const ship3Health = document.querySelector('.ship3Hull')
const ship4Health = document.querySelector('.ship4Hull')
const ship5Health = document.querySelector('.ship5Hull')
const ship6Health = document.querySelector('.ship6Hull')



ussAttack.addEventListener('click', (evt) =>{
    ussShip.firepower -= alienShip1.hull
    ship1Health.innerHTML =`${ussShip.firepower}`
    alienShip1.firepower -= ussShip.hull
    ussHealth.innerHTML =`${alienShip1.firepower}`
    // if(alienShip1.hull < 0){
    //    alienShip1.ship1Health.innerHTML.Remove()
    //    } else {
    //     return false;
    //    }
})


ussAttack.addEventListener('click', (evt) =>{
    ussShip.firepower -= alienShip2.hull
    ship2Health.innerHTML =`${ussShip.firepower}`
    alienShip2.firepower -= ussShip.hull
    ussHealth.innerHTML =`${alienShip2.firepower}`

})

ussAttack.addEventListener('click', (evt) =>{
    ussShip.firepower -= alienShip3.hull
    ship3Health.innerHTML =`${ussShip.firepower}`
    alienShip3.firepower -= ussShip.hull
    ussHealth.innerHTML =`${alienShip3.firepower}`

})

ussAttack.addEventListener('click', (evt) =>{
    ussShip.firepower -= alienShip4.hull
    ship4Health.innerHTML =`${ussShip.firepower}`
    alienShip4.firepower -= ussShip.hull
    ussHealth.innerHTML =`${alienShip4.firepower}`


})

ussAttack.addEventListener('click', (evt) =>{
    ussShip.firepower -= alienShip5.hull
    ship5Health.innerHTML =`${ussShip.firepower}`
    alienShip5.firepower -= ussShip.hull
    ussHealth.innerHTML =`${alienShip5.firepower}`

})

ussAttack.addEventListener('click', (evt) =>{
    ussShip.firepower -= alienShip6.hull
    ship6Health.innerHTML =`${ussShip.firepower}`
    alienShip6.firepower -= ussShip.hull
    ussHealth.innerHTML =`${alienShip6.firepower}`


})


// need help with looping through the array and splicing 
ussAttack.addEventListener('click', (evt) => {
    for(let i = 0; i < alienArmy.length; i++){
        if(alienArmy[i].hull == 0) {
            alienArmy.remove()
        }
    }
    })

    ussRetreat.addEventListener('click', (evt) => {
        location.reload() 
        alert('YOU RETREATED 😔 ☄️   👽🛸')
       })



// <-----------------alien--attack------------------------->

// ussAttack.addEventListener('click', (evt) =>{
//     alienShip1.firepower -= ussShip.hull
//     ussHealth.innerHTML =`${alienShip1.firepower}`

// })

// ussAttack.addEventListener('click', (evt) =>{
//     alienShip2.firepower -= ussShip.hull
//     ussHealth.innerHTML =`${alienShip2.firepower}`

// })

// ussAttack.addEventListener('click', (evt) =>{
//     alienShip3.firepower -= ussShip.hull
//     ussHealth.innerHTML =`${alienShip3.firepower}`

// })

// ussAttack.addEventListener('click', (evt) =>{
//     alienShip4.firepower -= ussShip.hull
//     ussHealth.innerHTML =`${alienShip4.firepower}`

// })

// ussAttack.addEventListener('click', (evt) =>{
//     alienShip5.firepower -= ussShip.hull
//     ussHealth.innerHTML =`${alienShip5.firepower}`

// })

// ussAttack.addEventListener('click', (evt) =>{
//     alienShip6.firepower -= ussShip.hull
//     ussHealth.innerHTML =`${alienShip6.firepower}`

// })






