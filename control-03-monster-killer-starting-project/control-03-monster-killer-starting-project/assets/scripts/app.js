let chosenMaxLife = 100; // initial health
const playerAttackValue = 5; // player power
const monsterAttackValue = 5; // monster power
const strongAttackValue = 14; // strong player value;
const healValue = 8; // Healing power of player
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife); // Setting the maximum health of monster and player

function wonOrLost(){
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You Won!');
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You Loose');
    }else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("It's a Draw.");
    }
}

function monsterAttack(monsterAttac){
    const playerDamage = dealPlayerDamage(monsterAttac);
    currentPlayerHealth -= playerDamage;
}

function playerattack(playerAttack){
    const monsterDamage = dealMonsterDamage(playerAttack);
    currentMonsterHealth -= monsterDamage;
    monsterAttack(monsterAttackValue);
    wonOrLost();
}

function attackHandler(){
    playerattack(playerAttackValue);
}

function strongAttackHandler(){
    playerattack(strongAttackValue);
}

function healPlayerHandler(){
    let hValue;
    if(currentPlayerHealth >= chosenMaxLife - healValue){
        alert("You can't heal now.");
        hValue = chosenMaxLife - currentPlayerHealth;
    }else{
        hValue = healValue;
    }
    increasePlayerHealth(hValue);
    currentPlayerHealth += hValue;
    monsterAttack(monsterAttackValue);
    wonOrLost();
}

// Event Handeling
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);