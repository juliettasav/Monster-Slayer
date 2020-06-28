new Vue({
    el: '#app',
    data: {
        button: '',
        userHealth: 100,
        monsterHealth: 100,
        newGameState: false,
        firstActState: false,
        buttonPressed: '',
        uronData: [],
        someoneWin: false,
    },
    computed: {

        checkTheWinner: function() {
            if (this.userHealth <= 0 || this.monsterHealth <= 0) {
                this.someoneWin = true;
            }
        },
        printTheWinner: function() {
            
            if (this.userHealth <= 0) {
                return 'MONSTER WINS';
            } else {
                return 'PLAYER WINS';
            }
            
        },
    },
    methods: {
        newGame: function() {
            this.newGameState = !this.newGameState;
        },
        firctActChange: function(e) {
            if(e.target.tagName == 'BUTTON') {
                this.firstActState = true;
            }
        },
        action: function(e) {
  
            monsterAttack = Math.round(Math.random() * (15 - 5) + 5);

            if (e == 'attack') {
                userAttack = Math.round(Math.random() * (15 - 5) + 5);
            } else if (e == 'heal') {
                userAttack = 0;
            }
            else {
                userAttack = Math.round(Math.random() * (20 - 10) + 10); 
            }

            let newUron;
            this.userHealth -= monsterAttack;


            if (e == 'attack' || e == 'special attack') {

                this.monsterHealth -= userAttack;

                newUron = {
                    player: 'PLAYER HITS MONSTER FOR ' + userAttack,
                    monster: 'MONSTER HITS PLAYER FOR ' + monsterAttack,
                }

            } else {

                this.userHealth += 10;

                newUron = {
                    player: 'PLAYER HEAL HIMSELF +10',
                    monster: 'MONSTER HITS PLAYER FOR ' + monsterAttack,
                }

            }
            
            this.uronData.unshift(newUron);

        },

        giveUp: function() {
            this.userHealth = 0;
            let giveUp = {
                monster: 'MONSTER WINS',
            }

            this.uronData.unshift(giveUp);

        },
        startNewGame: function() {
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.someoneWin = false;
            this.uronData = [];
            this.newGameState = false;
            this.firstActState = false;
        }

    }

})