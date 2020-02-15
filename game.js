var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1200,
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        init: init,
        create: create,
        update: update
    },
    title: 'brickWallOnePage',
    pixelArt: false,
    backgroundColor: '555555'
};

// global vars
var car;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', 'assets/bg1200x1200.png');
    this.load.image('cockpit', 'assets/cockpit.png');
    this.load.image('head', 'assets/head.png');
    this.load.image('wall', 'assets/wall.png');

    // eight car pieces
    let carA = ['l', 'ff', 'lb', 'lf', 'r', 'rb', 'rf', 'bb'];
    for (let i = 0; i < carA.length; i++) {
        let t = carA[i];
        this.load.spritesheet(t, 'assets/' + t + '.png', {
            frameWidth: 50,
            frameHeight: 50,
            startFrame: 0,
            endFrame: 4,
            margin: 1,
            spacing: 1,
        });
    }


    // roues
    this.load.atlas('roues', 'assets/roues.png', 'assets/roues.json');

    // pigeon
    this.load.atlas('pigeon', 'assets/spritesheet.png', 'assets/sprites.json');
    /*this.load.spritesheet('rw', 'assets/rw.png', {
        frameWidth: 75,
        frameHeight: 50,
        startFrame: 0,
        endFrame: 2,
        margin: 1,
        spacing: 1,
    }); */
}

function init() {
    this.gameW = this.sys.game.config.width;
    this.gameH = this.sys.game.config.height;

    this.carDA = [['lf', 'ff', 'ff', 'ff', 'rf'],
    ['l', 'ff', 'ff', 'ff', 'r'],
    ['l', 'ff', 'ff', 'ff', 'r'],
    ['l', 'bb', 'bb', 'bb', 'r'],
    ['l', 'bb', 'bb', 'bb', 'r'],
    ['lb', 'bb', 'bb', 'bb', 'rb']];

    this.cursors;
}

function create() {
    /* this.anims.create({
        key: 'roues',
        frames: this.anims.generateFrameNames('roues',{
                prefix: 'roue_',
                end: 2,
                zeroPad: 1
            }),
        repeat: -1
    });
    this.lw = this.add.sprite(800,800,'roues'); */
    //this.lw.play('roues');


    console.log(this.anims.create({
        key: 'pigeon',
        frames: this.anims.generateFrameNames('pigeon',{
                prefix: 'body_',
                end: 15,
                zeroPad: 2
            }),
        repeat: -1
    }));
    this.lw = this.add.sprite(400,400,'pigeon');
    this.lw.play('pigeon');

    // build car
    /* let carA = [];
    // depth 1
    let flw = this.add.sprite(-150, -100, 'lw').setOrigin(0, 0);
    let frw = this.add.sprite(75, -100, 'rw').setOrigin(0, 0);
    let blw = this.add.sprite(-150, 50, 'lw').setOrigin(0, 0);
    let brw = this.add.sprite(75, 50, 'rw').setOrigin(0, 0);
    // --> animate wheels
    carA.push(flw, frw, blw, brw);

    // set up car parts in 5x6 grid measuring 250x300
    let step = 50;
    // for each row
    for (let i = 0; i < this.carDA.length; i++) {
        // get each column
        for (let j = 0; j < this.carDA[i].length; j++) {
            let t = this.carDA[i][j];
            // future container origin is center, so -125, -150 is top left
            let part = this.add.sprite(((j * step) - 125), ((i * step) - 150), t).setOrigin(0, 0).setInteractive().setDepth(5);
            // --> add collision listener
            carA.push(part);
        }

    }


    let cockpit = this.add.sprite(-75, -50, 'cockpit').setOrigin(0, 0);
    // center in center
    let head = this.add.sprite(0, 50, 'head');
    // --> add head animation
    carA.push(cockpit, head);
    // assemble car
    car = this.add.container(350, 350, carA);

    // physics - matter
    this.matter.world.setBounds(0, 0, 1200, 1200);
    let wall = this.matter.add.sprite(0, 1100, 'wall'); */

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (this.cursors.up.isDown) {

    } else {
        //
    }
    // turning
    if (this.cursors.left.isDown) {

    } else if (this.cursors.right.isDown) {

    } else {

    }
}