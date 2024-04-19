class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.leftArm = this.add.sprite(this.bodyX-90,this.bodyY+60, "monsterParts", "arm_whiteE.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.bodyX+90,this.bodyY+60, "monsterParts", "arm_darkC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX-40,this.bodyY+120,"monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX+40,this.bodyY+130,"monsterParts", "leg_blueB.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX-50,this.bodyY-70, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.bodyX+50,this.bodyY-70, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.eye = this.add.sprite(this.bodyX,this.bodyY-20, "monsterParts", "eye_human.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX,this.bodyY+30, "monsterParts", "mouthB.png");
        my.sprite.mouthSmile.visible = false;
        my.sprite.mouthFangs = this.add.sprite(this.bodyX,this.bodyY+30, "monsterParts", "mouth_closed_fangs.png");

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        sKey.on('down', (key, event) => {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        });
    
        fKey.on('down', (key, event) => {
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthFangs.visible = true;
        });


    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x --;
            }
        } else if (this.dKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x ++;
            }
        }


    }

}