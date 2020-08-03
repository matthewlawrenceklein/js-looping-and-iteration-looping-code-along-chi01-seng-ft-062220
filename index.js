// Code your solutions in this file

function writeCards(array, event) {

    let cards = []
    for (let i = 0; i < array.length; i++){
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(num){
    let countdown = num
    while (countdown >= 0) {
        console.log(countdown)
        countdown-=1
    }
}

