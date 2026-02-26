"use strict";

const character = {
    name: "Snortlecat",
    class: "evil fluffball",
    level: 6,
    health: 100,
    image: "snortlecat.png",

    attacked() {
        if (this.health <= 0) {
            return;
        }
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name}`)
            disableButtons(true);
        }
        renderCharacter();
    },

    levelUp() {
        if (this.health <= 0) {
            return;
        }
        this.level += 1;
        renderCharacter();
    }
};

const elName = document.querySelector("#characterName");
const elClass = document.querySelector("#characterClass");
const elLevel = document.querySelector("#characterLevel");
const elHealth = document.querySelector("#characterHealth");
const elImage = document.querySelector("#characterImage");
const elStatus = document.querySelector("#statusMessage");

const attackBtn = document.querySelector("#attackBtn");
const levelUpBtn = document.querySelector("#levelUpBtn");

function renderCharacter() {
    elName.textContent = character.name;
    elClass.textContent = character.class;
    elLevel.textContent = character.level;
    elHealth.textContent = character.health;
    elImage.src = character.image;
}

function disableButtons(disabled) {
    attackBtn.disabled = disabled;
    levelUpBtn.disabled = disabled;
}

attackBtn.addEventListener("click", () => character.attacked());
levelUpBtn.addEventListener("click", () => character.levelUp());

renderCharacter();
disableButtons(false);