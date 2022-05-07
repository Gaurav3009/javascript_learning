const enteredVal = prompt('Enter the maximum Life', '100');
let chosenMaxLife = parseInt(enteredVal); // initial health
const playerAttackValue = 5; // player power
const monsterAttackValue = 7; // monster power
const strongAttackValue = 14; // strong player value;
const healValue = 8; // Healing power of player
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; // Bonus Life 
let batteleLog = [];
const LOG_EVERNT_PLAYER_ATTACK = 'PLAYER ATTACK';
const LOG_EVERNT_PLAYER_STRONG_ATTACK = 'PLAYER STRONG ATTACK';
const LOG_EVERNT_MONSTER_ATTACK = 'MONSTER ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER HEAL';
const LOG_EVENT_GAME_OVER = 'GAME OVER';


adjustHealthBars(chosenMaxLife); // Setting the maximum health of monster and player

function writeToLog(event, value, monsterHealth, playerHealth){
    let logEntry;
    logEntry = {
        event : event,
        value : value,
        finalMonsterHealth : monsterHealth,
        finalPlayerHealth : playerHealth
    };
    batteleLog.push(logEntry);
}

function displyBattleLog(){
    console.log(batteleLog);
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function wonOrLost(event){
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = 60;
        setPlayerHealth(currentPlayerHealth);
        alert('Bonus Life updated');
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You Won!');
        writeToLog(
            event,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
        displyBattleLog();
        reset();
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You Loose');
        writeToLog(
            event,
            'PLAYER LOOSE',
            currentMonsterHealth,
            currentPlayerHealth
        );
        displyBattleLog();
        reset();
    }else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("It's a Draw.");
        writeToLog(
            event,
            'DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        );
        displyBattleLog();
        reset();
    }
    writeToLog(
        event,
        '..',
        currentMonsterHealth,
        currentPlayerHealth
    );
}

function monsterAttack(monsterAttac){
    const playerDamage = dealPlayerDamage(monsterAttac);
    currentPlayerHealth -= playerDamage;
}

function playerattack(playerAttack, event){
    const monsterDamage = dealMonsterDamage(playerAttack);
    currentMonsterHealth -= monsterDamage;
    monsterAttack(monsterAttackValue);
    wonOrLost(event);
} 

function attackHandler(){
    playerattack(playerAttackValue, 'PLAYER ATTCAK');
}

function strongAttackHandler(){
    playerattack(strongAttackValue, 'PLAYER STRONG ATTACK');
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
    wonOrLost('PLAYER HEAL');
}

// Event Handeling
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);