function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
      monsterImage: './monster.png',
        playerImage: './player.png',
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUsescpecialAttack() {
      return this.currentRound % 2 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Monster lost
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.updateImages('attack');
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
      this.updateImages('attack', true);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "special-attack", attackValue);
      this.updateImages('attack');
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", hea);
      this.updateImages('heal');
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    updateImages(action, monsterTurn = false) {
        if (action === 'attack') {
            this.playerImage = monsterTurn ? 'images/player_react.png' : 'images/player_attack.png';
            this.monsterImage = monsterTurn ? 'images/monster_attack.png' : 'images/monster_react.png';
        } else if (action === 'heal') {
            this.playerImage = 'images/player_heal.png';
        }
        this.checkHealth();
    },
    checkHealth() {
        if (this.monsterHealth <= 0) {
            this.monsterImage = 'images/monster_dead.png';
            this.winner = 'player';
        }
        if (this.playerHealth <= 0) {
            this.playerImage = 'images/player_dead.png';
            this.winner = 'monster';
        }
        if (this.monsterHealth <= 0 && this.playerHealth <= 0) {
            this.winner = 'draw';
        }
    },
  },
});

app.mount("#game");
