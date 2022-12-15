/*
========================================== 
    Assignment Name: 9.2 - Card Game
    Author: Caitlynne Johnson
    Date: 12/15/2022
    Description: Script for Card Game
==========================================
*/



// Card class
class Card {
    constructor(face, suit) {
      (this.face = face);
      this.suit = suit;
    } 
}

// Dealer class
class Dealer {
    constructor() {
        getDeckOfCards();
    }
}

// Assign variables & arrays
var CARD_COUNT = 52;
var cards = [];
var faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

// Function getDeckOfCards
function getDeckOfCards() {
    for (let count = 0; count < this.CARD_COUNT; count++) {
        this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]); // Code provided by Prof Krasso
    }
}

// Function shuffle that iterates 52 times using a random card generator for the card variable
function shuffle() {
    for (let firstCard = 0; firstCard < this.CARD_COUNT; firstCard++) {
        let tempCard = this.cards[firstCard];
        let secondCard = Math.floor(Math.random() * this.CARD_COUNT); // Code provided by Prof Krasso
        this.cards[firstCard] = this.cards[secondCard];
        this.cards[secondCard] = tempCard;
    }
}

// Function that creates the template literal for each card using parameters: card, suitIcon, faceColor, and suitColor
function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    return `
    <div class="card player-card">
        <div class="card-title" style="text-align:left;font-size:20px;padding-left:10px;color:${faceColor}">
        ${card.face}
            <div class="card-content" style="font-size:28px;padding-bottom:25px;">
                <span class="${suitIcon}" style="color:${suitColor}">
                </span>
            </div>
        </div>
    </div>`;
} 

// Register onclick event
document.getElementById("btnDealCards").onclick = function() {
    
    // Create new dealer object
    let dealer = new Dealer();

    // Shuffle function for dealer object
    shuffle(dealer);
    let cardOutputWithIcon = "";
    
    // For...of loop used with switch case to assign the icons to cards
    for(card of cards) {
        switch(card.suit) {
            case "Hearts":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-heart", "red", "red");
                break;
            case "Diamonds":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-diamond", "red", "red");
                break;
            case "Clubs":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-club", "black", "black");
                break;
            case "Spades":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-spade", "black", "black");
                break;
            default:
                console.log("Default");
        }
    }

    // Bind cards to HTML
    document.getElementById("player-card-container").innerHTML = cardOutputWithIcon;

};