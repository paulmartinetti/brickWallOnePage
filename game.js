var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1200,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        init:init,
        create: create,
        update: update
    },
    title: 'brickWallOnePage',
    pixelArt: false,
    backgroundColor: '555555'
};

var container;

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
    this.load.spritesheet('lw', 'assets/lw.png', {
        frameWidth: 75,
        frameHeight: 50,
        startFrame: 0,
        endFrame: 2,
        margin: 1,
        spacing: 1,
    });
    this.load.spritesheet('rw', 'assets/rw.png', {
        frameWidth: 75,
        frameHeight: 50,
        startFrame: 0,
        endFrame: 2,
        margin: 1,
        spacing: 1,
    });
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

    /* var image1 = this.add.image(0, -30, 'mushroom');
    var image2 = this.add.image(-40, 30, 'mushroom');
    var image3 = this.add.image(40, 30, 'mushroom');

    container = this.add.container(400, 200, [ image1, image2, image3 ]);

    //  A Container has a default size of 0x0, so we need to give it a size before enabling a physics
    //  body or it'll be given the default body size of 64x64.
    container.setSize(128, 64);

    this.physics.world.enable(container);

    container.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true); */
    // build car
    let carA = [];
    // depth 1
    let flw = this.add.sprite(-150, -100, 'lw').setOrigin(0, 0);
    let frw = this.add.sprite(75, -100, 'rw').setOrigin(0, 0);
    let blw = this.add.sprite(-150, 50, 'lw').setOrigin(0, 0);
    let brw = this.add.sprite(75, 50, 'rw').setOrigin(0, 0);
    // --> animate wheels
    carA.push(flw, frw, blw, brw);

    // set up car parts in 5x6 grid
    let step = 50;
    for (let i = 0; i < this.carDA.length; i++) {

        for (let j = 0; j < this.carDA[i].length; j++) {
            let t = this.carDA[i][j];
            let part = this.add.sprite(((j * step) - 125), ((i * step) - 150), t).setOrigin(0, 0).setInteractive().setDepth(5);
            // --> add collision listener
            carA.push(part);
        }

    }


    let cockpit = this.add.sprite(-75, -50, 'cockpit').setOrigin(0, 0);
    let head = this.add.sprite(0, 50, 'head');
    // --> add head animation
    carA.push(cockpit, head);

    // assemble car
    this.car = this.add.container(350, 350, carA);
    this.physics.world.enable(this.car);
    this.car.setSize(250,300);
    console.log(this.car.body);

    this.car.body.setBounce(1, 1).setCollideWorldBounds(true);

    //this.car.body.setDamping(true);
    this.car.body.setDrag(0.99);
    //this.car.body.setMaxVelocity(200);

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (this.cursors.up.isDown){
        this.physics.velocityFromRotation(this.car.rotation, 60, this.car.body.acceleration);
         //this.v--;
        //this.car.body.setVelocity(0,this.v);
        
     } else{
         //
     }
     // turning
     if (this.cursors.left.isDown)
     {
         this.car.body.setAngularVelocity(-60);
     }
     else if (this.cursors.right.isDown)
     {
         this.car.body.setAngularVelocity(60);
     }
     else
     {
         this.car.body.setAngularDrag(60);
     }
 
}