var game = new Phaser.Game(2000, 2000, Phaser.AUTO, '');
var currLevel = 0;

var mainState = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;

        this.walls = game.add.group();
        this.hazards = game.add.group();
        this.coins = game.add.group();

        this.cursor = game.input.keyboard.createCursorKeys();

        this.coinsCollected = 0;
        this.levels = [
            {
                numCoins: 1,
                startPosX: 100,
                startPosY: 1900,
                levelData: [
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x        c                             x',
                'x      xxxxx                           x',
                'x                                      x',
                'x                                      x',
                'xxxxxxhhhhhhhhhhhhhhhhhhhhhhhhhhhhhxxxxx',
                ]
            },

            {
                numCoins: 2,
                startPosX: 100,
                startPosY: 1900,
                levelData: [
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x        c         c                   x',
                'x      xxxxx   hhhxxxhhh               x',
                'x                                      x',
                'x                                      x',
                'xxxxxxhhhhhhhhhhhhhhhhhhhhhhhhhhhhhxxxxx',
                ]
            },

            {
                numCoins: 3,
                startPosX: 100,
                startPosY: 1900,
                levelData: [
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x        c                    c        x',
                'x      xxxxx    hh   hh     xxxxx      x',
                'x                                      x',
                'x                  c                   x',
                'xxxxxxhhhhhhhhhhhhxxxhhhxxxhhhhhhhhxxxxx',
                ]
            },

            {
                numCoins: 5,
                startPosX: 100,
                startPosY: 1900,
                levelData: [
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x  c                                c  x',
                'xxxxxhh                          hhxxxxx',
                'x                                      x',
                'x        c                    c        x',
                'x      xxxxx    hh   hh     xxxxx      x',
                'x                                      x',
                'x                  c                   x',
                'xxxxxxhhhhhhhhhhhhxxxhhhxxxhhhhhhhhxxxxx',
                ]
            },
            
            {
                numCoins: 6,
                startPosX: 1000,
                startPosY: 1900,
                levelData: [
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x                                      x',
                'x  c                                c  x',
                'xxxxxhh                          hhxxxxx',
                'x                                      x',
                'x        c                    c        x',
                'x      xxxxx    hh   hh     xxxxx      x',
                'x                                      x',
                'x  c                                c  x',
                'xxxxxxhhhhhhxxxhhhxxxhhhxxxhhhhhhhxxxxxx',
                ]
            }

        ];
    },

    preload: function () {
        this.load.image('wall', 'sprites/wall.png');
        this.load.image('coin', 'sprites/coin.png');
        this.load.image('hazard', 'sprites/hazard.png');
        this.load.image('player', 'sprites/player.png');
    },

    create: function () {
        var level = this.levels[currLevel].levelData;
        //y
        for (var i = 0; i < level.length; i++) {
            //x
            for (var j = 0; j < level[i].length; j++) {
                var x = j * 50;
                var y = i * 50;
                if (level[i][j] == 'x') {
                    var wall = game.add.sprite(x, y, 'wall');
                    wall.body.immovable = true;
                    this.walls.add(wall);
                } else if (level[i][j] == 'c') {
                    var coin = game.add.sprite(x, y, 'coin');
                    this.coins.add(coin);
                } else if (level[i][j] == 'h') {
                    var hazard = game.add.sprite(x, y, 'hazard');
                    this.hazards.add(hazard);
                }
            }
        }

        this.player = game.add.sprite(this.levels[currLevel].startPosX, this.levels[currLevel].startPosY, 'player');
        this.player.body.gravity.y = 600;
    },

    update: function () {
        //Collisions between objects    
        game.physics.arcade.collide(this.player, this.walls);
        game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
        game.physics.arcade.overlap(this.player, this.hazards, this.restart, null, this);

        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -200;
        } else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
        } else {
            this.player.body.velocity.x = 0;
        }

        if (this.cursor.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -500;
        }

        if (this.coinsCollected == this.levels[currLevel].numCoins) {
            this.coinsCollected = 0;
            currLevel++;
            this.cleanup();
            if (currLevel >= this.levels.length) {
                currLevel = 0;
            }
            game.state.start("mainState");
        }
    },

    cleanup: function () {
        this.player.destroy();
    },

    takeCoin: function (player, coin) {
        this.coinsCollected += 1;
        coin.destroy();
    },

    restart: function () {
        game.state.start("mainState");
    }
};

game.state.add("mainState", mainState);
game.state.start("mainState");
