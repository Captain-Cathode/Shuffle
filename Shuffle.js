// Helper functions

// Generate a random integer to swap two indices.
function randInt(range) {
    return Math.floor(Math.random()* range);
}

// Define cards as integers ranging from 1-52 and store in array
function generateDeck(size) {
    let deck = [];
    for(let i = size; i> 0; i -= 1) {
        deck.push(i);
    }
    return deck
}

// Required functionality

// Shuffles the deck. 
function shuffle(deck) {
    if(deck === undefined) {
        return undefined;
    }
    // j is a random integer such that i=<j<deck.length
    for(let i = 0; i < deck.length-1 ; i += 1) {
        let j = randInt(deck.length - i) + i;
        let currentCard = deck[i];
        deck[i] = deck[j];
        deck[j] = currentCard;
    }
}
// Pops one card off the top of the deck. Returns the value of the card if there are any cards
// left on the deck, 0 otherwise.
function dealOneCard(deck) {
        return deck.pop();
}

// Print function
/*
function printShuffle() {
    deck = generateDeck(52)
    console.log("Original Deck\n",deck, '\n')
    shuffle(deck)
    console.log("Shuffled Deck\n",deck, '\n')
    let x = dealOneCard(deck)
    console.log("Full Deck Deal")
    while(x != undefined) {
        console.log(x)
        x = dealOneCard(deck)
    }
}

printShuffle()
*/
