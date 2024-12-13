//Global Variables
let player;
let projectile;
let projectile2;
let floor;
let flipped;
let bg;
let inBossRoom = false;
let sound1;
let sound2;
let beginningMusic;
let gameStarted = false;
let startButton;
let rbDelay = 60; // Delay of 60 frames (about 1 second)
let rbDelayTimer = 0; // Timer to track when the projectile was last fired
let Inroom1 = false;
let Inroom2 = false;
let Inroom3 = false;

//music
function preload() {
  // Preload the music file
  sound1 = loadSound("Witch hunt.wav");
  sound2 = loadSound("VictoryFanfare.wav");
  backgroundImg = loadImage("background-tower.png");
  bar = loadImage("bar.png");
  bridgetop = loadImage("topfull.png");
  bridgeLeft = loadImage("top2.png");
  bridgeRight = loadImage("top1.png");
  archleft = loadImage("arch2.png");
  archright = loadImage ("arch1.png");
  archfull = loadImage("archfull.png");
  stone1 = loadImage("stone1.png");
  stone2 = loadImage("stone2.png");
  stone3 = loadImage("stone3.png");
  stone4 = loadImage("stone4.png");
  door = loadImage("door.png");
  doorfloor = loadImage("doorfloor.png")
  ladder = loadImage("ladder.png");
}

function setup() {
  bgt = loadImage('background-tower.png');
  let canvas = createCanvas (400, 900); // Adjusted canvas size to 400x900
  canvas.parent('#portrait');
  world.gravity.y = 10;
  projectiles = new Group();
  projectiles.d = 10;
  projectiles.collider = "none";
  projectile2 = new Group();
  projectile2.d = 10;
  projectile2.collider = "none";
  bgs = loadImage('startscreen.png');
  beginningMusic = loadSound('Reduce_WitchJourney.wav', musicLoaded);

  // Start Button
  startButton = new PixelArtButton(width / 2 - 50, height / 2 + 150, 100, 40, "START");
}

function draw() {
  if (Inroom1 == true){background(backgroundImg);//health bar code
 noStroke();
  fill(200, 0, 0);
  rect(5, 25, player.hp, 25);
  fill(0);
  text(player.hp, 40, 27, 100, 25);
  textAlign(LEFT);
  textSize(12);

 if (kb.pressing('left')) {
    player.image = 'basicspritebeard1.png';
    player.vel.x = -3;
   flipped=false;
    
  }
  else if (kb.pressing('right')) {
    player.vel.x = 3;
    player.image = 'basicspritebeard2.png';
    flipped= true;
  }
  else player.vel.x = 0;


if (player.vel.y === 0) {
if (kb.presses('up')) {
    player.vel.y = 30;}
}
if (player.overlapping(ladder)){
world.gravity.y = 0.5;
}  
else if (player.overlapping(ladder2)){
world.gravity.y = 3;
}
else {
world.gravity.y = 10;
}

        
//enemy middle movement
 if (enemy3.x >= 95) {
        enemy3.image = "goblinR.png"; 
        enemy3.vel.x = -1.15; // move left
         }
 if (enemy3.x <= 10) {
        enemy3.image = "goblinL.png";
        enemy3.vel.x = 1.15; // move right
        }
//enemy bottom movement
  if (enemy4.x >= 380) {
        enemy4.image = "goblinR.png"; 
        enemy4.vel.x = -1.2; // move left
        }
 if (enemy4.x <= 306) {
        enemy4.image = "goblinL.png";
        enemy4.vel.x = 1.2; // move right
        }
  
   //damage
  if (player.overlaps(enemy3)) player.hp -= 20;
  if (player.overlaps(enemy4)) player.hp -= 20;
  
  //enemy gets dmged
  if (projectiles.overlaps(enemy3)){
  enemy3.hp -= 1;
  enemy3.image = 'redgoblin.png' 
}
  if (projectiles.overlaps(enemy4)){
  enemy4.hp -= 1;
  enemy4.image = 'redgoblin.png' 
}
                         
  //enemy gone
  if (enemy3.hp <= 0) enemy3.remove();
  if (enemy4.hp <= 0) enemy4.remove();
  //player reset
  if (player.hp == 0 || player.x > width || player.x < 0 || player.y > 900) {
    player.x = 50;
    player.y = 740;
    player.vel.x = 0;
    player.vel.y = 0;
    player.hp = 100;
    enemy3.hp = 3;
    enemy4.hp = 3;
  }
  
   

  
if (player.overlap(door1)) {
    // Remove walls
  wall.remove();

  // Remove floor stairs
  floorstair2.remove();
  floorstair3.remove();

  // Remove small floors
  floor2bL1.remove();
  floor2bL3.remove();  // There are two floor2bL1 objects, so removing both
  
  // Remove bottom floor and platforms
  floormb.remove();
  floorBL2.remove();
  floormb2.remove();
  
  floorostl.remove();

  // Remove ladders
  ladder2.remove();
  ladder.remove();

  
  door1.remove();
  floordoor1.remove();

  // Remove decorative bridges
  floorBB2.remove();
  floorBB3.remove();
  floorBB4.remove();
  floorBB5.remove();

  // Remove starter platforms
  floorBottom.remove();
  floorBottom2.remove();
  enemy3.remove();
  enemy4.remove();
  player.remove();
  border1.remove();
    clear();
    room2();}}
  
  if(Inroom2 == true){
  clear();
  background(bgt); 
  noStroke();
  fill(200, 0, 0);
  rect(5, 25, player.hp, 25);
  fill(0);
  text(player.hp, 40, 27, 100, 25);
  textAlign(LEFT);
  textSize(12);

 if (kb.pressing('left')) {
    player.image = 'basicspritebeard1.png';
    player.vel.x = -3;
   flipped=false;
    
  }
  else if (kb.pressing('right')) {
    player.vel.x = 3;
    player.image = 'basicspritebeard2.png';
    flipped= true;
  }
  else player.vel.x = 0;
    
if (player.vel.y ===0) {
if (kb.presses('up')) {
    player.vel.y = 30;}
}
else if (player.overlapping(ladder3)){
world.gravity.y = 3;
}
else {
world.gravity.y = 10;
}
  

  
   //damage
  if (player.overlaps(enemy)) player.hp -= 20;
  if (player.overlaps(enemy2)) player.hp -= 20;
  
  

  //player reset
  if (player.hp == 0 || player.x > width || player.x < 0 || player.y > 900) {
    player.x = 50;
    player.y = 800;
    player.vel.x = 0;
    player.vel.y = 0;
    player.hp = 100;
    enemy.hp = 3;
    enemy2.hp = 3;}
  
   

  
if (player.overlap(door)) {
    floor1.remove();
    floor2.remove();
    floor3.remove();
    floor3b.remove();
    floor4.remove();
    floor4b.remove();
    floordoor.remove();
    floorBL.remove();
    floorBB.remove();
    floortop.remove();
    ladder3.remove();
    door.remove();
    player.remove();
    border1.remove();
    enemy.remove();
    enemy2.remove();
    clear();
    
    room3();
  }

//enemy Top movement
  if (enemy.x >= 215) {
        enemy.image = "goblinR.png"; 
        enemy.vel.x = -2.5; // move left
        }
 if (enemy.x < 20) {
        enemy.image = "goblinL.png";
        enemy.vel.x = 2.5; // move right
        }
//enemy Bottom movement
  if (enemy2.x >= 395) {
        enemy2.image = "goblinR.png"; 
        enemy2.vel.x = -2.5; // move left
        }
 if (enemy2.x < 285) {
        enemy2.image = "goblinL.png";
        enemy2.vel.x = 2.5; // move right
        }

//enemy gone
  if (enemy.hp <= 0) enemy.remove();
  if (enemy2.hp <= 0) enemy2.remove();

  //enemy gets dmged
  if (projectiles.overlaps(enemy)){
  enemy.hp -= 1;
  enemy.image = 'redgoblin.png' 
}
  if (projectiles.overlaps(enemy2)){
  enemy2.hp -= 1;
  enemy2.image = 'redgoblin.png'
}
  
                      
                     }
  
  if (Inroom3 == true){background(backgroundImg);//health bar code
  noStroke();
  fill(200, 0, 0);
  rect(5, 25, player.hp, 25);
  fill(0);
  text(player.hp, 40, 27, 100, 25);
  textAlign(LEFT);
  textSize(12);

 if (kb.pressing('left')) {
    player.image = 'basicspritebeard1.png';
    player.vel.x = -3;
   flipped=false;
    
  }
  else if (kb.pressing('right')) {
    player.vel.x = 3;
    player.image = 'basicspritebeard2.png';
    flipped= true;
  }
  else player.vel.x = 0;


if (player.vel.y ===0) {
if (kb.presses('up')) {
    player.vel.y = 30;}
}
  
//enemy top movement
 if (enemy5.x >= 270) {
        enemy5.image = "goblinR.png"; 
        enemy5.vel.x = -0.8; // move left
         }
 if (enemy5.x <= 170) {
        enemy5.image = "goblinL.png";
        enemy5.vel.x = 0.8; // move right
        }
//enemy middle movement
 if (enemy3.x >= 90) {
        enemy3.image = "goblinR.png"; 
        enemy3.vel.x = -1.15; // move left
         }
 if (enemy3.x <= 30) {
        enemy3.image = "goblinL.png";
        enemy3.vel.x = 1.15; // move right
        }
//enemy bottom movement
  if (enemy4.x >= 400) {
        enemy4.image = "goblinR.png"; 
        enemy4.vel.x = -1.2; // move left
        }
 if (enemy4.x <= 306) {
        enemy4.image = "goblinL.png";
        enemy4.vel.x = 1.2; // move right
        }
  
   //damage
  if (player.overlaps(enemy3)) player.hp -= 20;
  if (player.overlaps(enemy4)) player.hp -= 20;
  if (player.overlaps(enemy5)) player.hp -= 20;
  
  //enemy gets dmged
  if (projectiles.overlaps(enemy3)){
  enemy3.hp -= 1;
  enemy3.image = 'redgoblin.png' 
}
  if (projectiles.overlaps(enemy4)){
  enemy4.hp -= 1;
  enemy4.image = 'redgoblin.png' 
}
  if (projectiles.overlaps(enemy5)){
  enemy5.hp -= 1;
  enemy5.image = 'redgoblin.png' 
}
                         
  //enemy gone
  if (enemy3.hp <= 0) enemy3.remove();
  if (enemy4.hp <= 0) enemy4.remove();
  if (enemy5.hp <= 0) enemy5.remove();
  //player reset
  if (player.hp == 0 || player.x > width || player.x < 0 || player.y > 900) {
    player.x = 50;
    player.y = 800;
    player.vel.x = 0;
    player.vel.y = 0;
    player.hp = 100;
    enemy3.hp = 3;
    enemy4.hp = 3;
    enemy5.hp = 3;}
  
   

  
if (player.overlap(door2)) {
    clear();
    wall.remove();
    door2.remove();
    floorBottom.remove();
    floorstairfin.remove();
    floorstair2.remove();
    floorstair4.remove();
    floor1R.remove();
    floor2L.remove();
    floor2bL1.remove();
    floor2bL2.remove();
    floor2cL.remove();
    floorbr.remove();
    floormb.remove();
    floordoor2.remove();
    floorstair3.remove();
    floorBB2.remove();
    floorBB3.remove();
    floorBL2.remove();
    player.remove();
    border1.remove();
    enemy3.remove();
    enemy4.remove();
    enemy5.remove();
    clear();
  
    bossroom4();
  }}
  
  if(inBossRoom == true){background(bgt);

  // Reset the player 
  if (player.hp <= 0 || player.x > width || player.x < 0) {
    player.x = 70;
    player.y = 300;
    player.vel.x = 0;
    player.vel.y = 0;
    player.hp = 100;
    boss.hp = 80;
  }
  
  // Health bar code
  fill(200, 0, 0);
  rect(5, 25, player.hp, 25);
  fill(0);
  text(player.hp, 40, 27, 100, 25);
  textAlign(LEFT);
  textSize(12);
  //boss health bar
  if (inBossRoom) {
    fill(200, 0, 0);
    rect(335, 25, boss.hp, 25);
    fill(0);
    text(boss.hp, 360, 27, 100, 25);
    textSize(12);
  }


  // Damage
  if (player.overlaps(boss)) {
    player.hp -= 25;
  }

  // Boss movement based on life
  if (boss.hp > 0) {
    moveInSquarePattern();
  }

  // Boss projectile damage
  if (player.overlaps(projectile2)) {
    player.hp -= 5;
  }

  // End the game if boss is defeated
  if (boss.hp <= 0) {
    endgame();
  }

  // Remove boss if it's defeated
  if (boss.hp <= 0) boss.remove();

  // Boss gets damaged
  if (projectiles.overlaps(boss)) {
    boss.hp -= 3; //normal: 3 testing purposes: 80
  }

  // Player movement
  if (kb.pressing('left')) {
    player.image = 'basicspritebeard1.png';
    player.vel.x = -3;
    flipped = false;
  } else if (kb.pressing('right')) {
    player.vel.x = 3;
    player.image = 'basicspritebeard2.png';
    flipped = true;
  } else {
    player.vel.x = 0;
  }

  if (player.vel.y ===0) {
if (kb.presses('up')) {
    player.vel.y = 30;}
}        
                            }
   
  if (!gameStarted) {background(bgs);
    fill(255, sin(frameCount * 0.1) * 100 + 200);

    startButton.display();
  }

}

//starting screen and button
function startGame() {
  gameStarted = true; 
  beginningMusic.stop();
  if (!sound1.isPlaying()){
    sound1.loop();
    sound1.setVolume(1)}
  clear();
  room1();
  //room2();
  //room3(); //testing purposes
  //bossroom4(); //testing purposes
}

function endgame() {
  sound1.stop();
  
  // Play the victory sound if it's not already playing
  if (!sound2.isPlaying()) {
    sound2.play();
  }

  // Ensure sound2 loops only after it's finished playing the first time
  if (!sound2.isLooping()) {
    sound2.loop()
    sound2.setVolume(0.2); // Loop the victory sound
  }
  
  // Remove the player and boss sprites
  player.remove();
  boss.remove();
  
  // Remove individual floor and wall objects
  floor.remove(); 
  floorL.remove(); 
  floorR.remove(); 
  wall.remove();  
  border1.remove();
  border.remove();
  door.remove();
  
  // Remove all projectiles in both groups
  for (let proj of projectiles) {
    proj.remove();
  }
  for (let proj of projectile2) {
    proj.remove();
  }

  // Set the background to black
  background(0);

  // Set text color to white for visibility
  fill(255);

  // Set text size for the message
  textSize(52);

  // Center the text
  textAlign(CENTER, CENTER);
  stroke(255,0,0);
  strokeWeight(2);
  // Display the "You Win!" message
  text("You Win!", width / 2, height / 2);
  
  stroke(255);
  strokeWeight(3);
  fill(255, 0, 0);
  textSize(27);
  text("Play again? Y/N?", width / 2, 510);
  
  // Check if the key pressed is 'Y' to restart the game
  if (keyIsPressed) {
    if (key === 'y' || key === 'Y') {
      clear();
      sound2.stop();
      gameStarted = false;
      inBossRoom = false;
      Inroom3 = false;
      Inroom2 = false;
      Inroom1 = false;
      setup(); // Restart the game
    }
    else if (key === 'n' || key === 'N') {
      // End the game or do nothing
      noLoop(); // Stops the game loop
    }
  }
}

//start button
class PixelArtButton {
  constructor(x, y, w, h, label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.isHovered = false;
  }

  // Start Button
  checkClick() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.isHovered = true;
      if (mouseIsPressed) {
        startGame(); 
      }
    } else {
      this.isHovered = false;
    }
  }

  // Button Style
  display(){
    this.checkClick();

    if (this.isHovered) {
      fill(255, 0, 0); 
    } else {
      fill(200, 0, 0); 
    }
    
    stroke(0);
    strokeWeight(6); 
    rect(this.x, this.y, this.w, this.h, 8); 
    noStroke();
    
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.label, this.x + this.w / 2, this.y + this.h / 2);
  }
}

//Projectile Code
let projectileFired = { RB: false, LT: false, RT: false, LB: false };
let rbReadyToFire = false;  // New flag to control when the RB projectile can fire

function bossprojectileLT() {
  let projectile3 = new projectile2.Sprite();
  projectile3.image = 'blastpsritegreenLD.png';
  projectile3.x = boss.x;
  projectile3.y = boss.y;
  projectile3.vel.x = -2;
  projectile3.vel.y = 2;
}

function bossprojectileRT() {
  let projectile4 = new projectile2.Sprite();
  projectile4.image = 'blastpsritegreenRD.png';
  projectile4.x = boss.x;
  projectile4.y = boss.y;
  projectile4.vel.x = 2;
  projectile4.vel.y = 2;
}

function bossprojectileLB() {
  let projectile5 = new projectile2.Sprite();
  projectile5.image = 'blastpsritegreenL.png';
  projectile5.x = boss.x;
  projectile5.y = boss.y;
  projectile5.vel.x = 4;
  projectile5.vel.y = 0;
}

function bossprojectileRB() {
  let projectile6 = new projectile2.Sprite();
  projectile6.image = 'blastpsritegreen.png';
  projectile6.x = boss.x;
  projectile6.y = boss.y;
  projectile6.vel.x = -4;
  projectile6.vel.y = 0;
}

function resetProjectileFlags() {
  projectileFired.RB = false;
  projectileFired.LT = false;
  projectileFired.RT = false;
  projectileFired.LB = false;
  rbReadyToFire = false;  // Reset the RB firing readiness for the next cycle
}

function moveInSquarePattern() {
  if (!gameStarted) {
    return; // Don't execute any of the projectile logic if the game hasn't started
  }

  // Check if the boss is near (360, 350) and needs to move to (360, 60)
  if (dist(boss.position.x, boss.position.y, 360, 350) < 5) {  
    if (frameCount - rbDelayTimer > rbDelay && !projectileFired.RB) { // Delay condition based on frameCount
      bossprojectileRB();  // Fire the projectile only once when ready
      projectileFired.RB = true;  // Set the flag to true
      rbDelayTimer = frameCount;  // Reset the timer
    }
    boss.image = "evilWR.png";
    boss.velocity.x = 0;
    boss.velocity.y = -3;  // Move up to (360, 60)
  }

  // Check if the boss is near (360, 60) and needs to move to (50, 60)
  if (dist(boss.position.x, boss.position.y, 360, 60) < 5) {
    if (!projectileFired.LT) {
      bossprojectileLT();  // Fire the projectile only once
      projectileFired.LT = true;  // Set the flag to true
    }
    boss.image = "evilWR.png";
    boss.velocity.x = -3;  // Move left to (50, 60)
    boss.velocity.y = 0;
  }

  // Check if the boss is near (50, 60) and needs to move to (50, 350)
  if (dist(boss.position.x, boss.position.y, 50, 60) < 5) {
    if (!projectileFired.RT) {
      bossprojectileRT();  // Fire the projectile only once
      projectileFired.RT = true;  // Set the flag to true
    }
    boss.image = "evilWL.png";
    boss.velocity.x = 0;
    boss.velocity.y = 3;   // Move down to (50, 350)
  }

  // Check if the boss is near (50, 350) and needs to move to (360, 350)
  if (dist(boss.position.x, boss.position.y, 50, 350) < 5) {
    if (!projectileFired.LB) {
      bossprojectileLB();  // Fire the projectile only once
      projectileFired.LB = true;  // Set the flag to true
    }
    boss.image = "evilWL.png";
    boss.velocity.x = 3;   // Move right to (360, 350)
    boss.velocity.y = 0;
  }

  // Reset the flags when the boss returns to the starting position (360, 350)
  if (dist(boss.position.x, boss.position.y, 360, 350) < 5) {
    resetProjectileFlags();
    rbReadyToFire = true;  // Allow the right-bottom projectile to fire after completing the loop
  }
}

//wizard firing Projectile
function keyPressed() {
  if (kb.pressing("space")) {
    let projectile = new projectiles.Sprite();
    projectile.image = 'blastpsrite.png';
    if (flipped) {
      projectile.image = 'blastpsrite2.png';
    }
    projectile.x = player.x;
    projectile.y = player.y;

    let direction = createVector(mouse.x - player.x);
    if (flipped) {
      projectile.vel.x = 5;
    } else {
      projectile.vel.x = -5;
    }
  }
}

function room1(){
  Inroom1 = true;
  
  // Left wall
  wall = new Sprite();
  wall.y = 900;
  wall.x = 0;
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  // Right wall
  wall = new Sprite();
  wall.y = 900;
  wall.x = 400;  // Adjusted to fit within the new canvas width
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  //left upperbottom
  floorstair2 = new Sprite();
  floorstair2.y = 380;
  floorstair2.x = 70;
  floorstair2.w = 89;
  floorstair2.h = 28;
  floorstair2.image = 'stone1.5.png';
  floorstair2.collider = 'static';
  //floorstair2.debug = true;
  floorstair2.image.scale = 0.7;
  
  //right top
  floorstair3 = new Sprite();
  floorstair3.y = 294;
  floorstair3.x = 324;
  floorstair3.w = 89;
  floorstair3.h = 28;
  floorstair3.image = 'stone1.5.png';
  floorstair3.collider = 'static';
  //floorstair3.debug = true;
  floorstair3.image.scale = 0.7;
  
  //small upper middle
  floor2bL1 = new Sprite();
  floor2bL1.y = 310;
  floor2bL1.x = 200;
  floor2bL1.w = 29;
  floor2bL1.h = 20;
  floor2bL1.image = 'stone3.5.png';
  floor2bL1.collider = 'static';
  //floor2bL1.debug = true;
  floor2bL1.image.scale = 0.7;
  
  //small lower middle
  floor2bL3 = new Sprite();
  floor2bL3.y = 710;
  floor2bL3.x = 245;
  floor2bL3.w = 29;
  floor2bL3.h = 20;
  floor2bL3.image = 'stone3.5.png';
  floor2bL3.collider = 'static';
  //floor2bL3.debug = true;
  floor2bL3.image.scale = 0.7;
  
  //2ndary bottom middle
  floormb = new Sprite();
  floormb.y = 655;
  floormb.x = 135;
  floormb.w = 89;
  floormb.h = 28;
  floormb.image = 'stone1.5.png';
  floormb.collider = 'static';
  //floormb.debug = true;
  floormb.image.scale = 0.7;
  
  //long in wall floor
  floorBL2 = new Sprite();
  floorBL2.y = 495;
  floorBL2.x = 20;
  floorBL2.w = 170;
  floorBL2.h = 32;
  floorBL2.image = 'top2.1.png';
  floorBL2.collider = 'static';
  //floorBL2.debug = true;
  floorBL2.image.scale = 0.7;
  
  //middle right
  floormb2 = new Sprite();
  floormb2.y = 430;
  floormb2.x = 345;
  floormb2.w = 89;
  floormb2.h = 28;
  floormb2.image = 'stone1.5.png';
  floormb2.collider = 'static';
  //floormb2.debug = true;
  floormb2.image.scale = 0.7;
  
  //decorative bridge 5
  floorBB5 = new Sprite();
  floorBB5.y = 484;
  floorBB5.x = 355;
  floorBB5.w = 0;
  floorBB5.h = 0;
  floorBB5.image = 'arch1.2.png';
  floorBB5.image.scale = 0.7
  floorBB5.collider = 'static';
  //floorBB5.debug = true;
  
  //other side of the ladder
  floorostl = new Sprite();
  floorostl.y = 495;
  floorostl.x = 185;
  floorostl.w = 44.5;
  floorostl.h = 28;
  floorostl.image = "stone1.3.png";
  floorostl.collider = 'static';
  //floorostl.debug = true;
  floorostl.image.scale = 0.7;
  floorostl.image.offset.x = -28;
  
  //ladder
  ladder2 = new Sprite();
  ladder2.y = 535;
  ladder2.x= 120;
  ladder2.image = "ladder-1.png";
  ladder2.h = 130;
  ladder2.w = 40;
  ladder2.collider="static";
  //ladder2.debug = true;
  ladder2.image.scale = 0.8;
  
  //ladder
  ladder = new Sprite();
  ladder.y = 207;
  ladder.x= 330;
  ladder.image = "ladder-1.png";
  ladder.h = 130;
  ladder.w = 40;
  ladder.collider="static";
  //ladder.debug = true;
  ladder.image.scale = 0.8;
  
  //goblin middle
  enemy3 = new Sprite();
  enemy3.image = 'goblinR.png'
  enemy3.image.offset.y = 3;
  enemy3.image = 'goblinL.png';
  //enemy3.debug = true;
  enemy3.y = 333;
  enemy3.x = 10;
  enemy3.width = 42;
  enemy3.height = 59;
  enemy3.image.offset.y = 3;
  enemy3.collider = 'kinematic';
  enemy3.hp = 3;
  
  //goblin bottom
  enemy4 = new Sprite();
  enemy4.image = 'goblinR.png'
  enemy4.image.offset.y = 3;
  enemy4.image = 'goblinL.png';
  //enemy4.debug = true;
  enemy4.x = 306; 
  enemy4.y = 384;
  enemy4.width = 42;
  enemy4.height = 59;
  enemy4.image.offset.y = 3;
  enemy4.collider = 'kinematic';
  enemy4.hp = 3;
  
  //level 1 door
  door1 = new Sprite();
  door1.y = 110;
  door1.x = 200;
  door1.image = 'door1.png';
  door1.w = 56;
  door1.h = 52;
  door1.collider = "kinematic";
  //door1.debug = true;
  door1.image.scale = 0.7;
  
  //floor for da door
  floordoor1 = new Sprite();
  floordoor1.y = 150;
  floordoor1.x = 200;
  floordoor1.w = 103;
  floordoor1.h = 22;
  floordoor1.image = 'doorfloor1.png';
  floordoor1.collider = 'static';
  floordoor1.image.scale = 0.7;
  //floordoor1.debug = true;
  
   //decorative bridge 1
  floorBB2 = new Sprite();
  floorBB2.y = 882;
  floorBB2.x = 42;
  floorBB2.w = 0;
  floorBB2.h = 0;
  floorBB2.image = archleft;
  floorBB2.collider = 'static';
  //floorBB2.debug = true;
  
  //decorative bridge 3
  floorBB4 = new Sprite();
  floorBB4.y = 552;
  floorBB4.x = 20;
  floorBB4.w = 0;
  floorBB4.h = 0;
  floorBB4.image = 'arch2.1.png';
  floorBB4.collider = 'static';
  //floorBB4.debug = true;
  floorBB4.image.scale = 0.7;
  
  //starter platform
  floorBottom = new Sprite();
  floorBottom.y = 797;
  floorBottom.x = 20;
  floorBottom.w = 432;
  floorBottom.h = 70;
  floorBottom.image = bridgetop;
  floorBottom.collider = 'static';
  //floorBottom.debug = true;
  
  floorBottom2 = new Sprite();
  floorBottom2.y = 800;
  floorBottom2.x = 200;
  floorBottom2.w = 432;
  floorBottom2.h = 70;
  floorBottom2.image = bridgetop;
  floorBottom2.collider = 'static';
  //floorBottom.debug = true;
  
  //decorative bridge 2
  floorBB3 = new Sprite();
  floorBB3.y = 890;
  floorBB3.x = 340;
  floorBB3.w = 0;
  floorBB3.h = 0;
  floorBB3.image = archright;
  floorBB3.collider = 'static';
  //floorBB3.debug = true;

//player
 // Player setup
  player = new Sprite();
  player.width = 33;
  player.height = 90;
  player.x = 50;
  player.y = 740;
  player.image = loadImage("basicspritebeard1.png");
  player.rotationLock = true;
  player.collider = "dynamic";
  player.hp = 100;
  //player.debug = true;
  
  //border hp wizard
  border1 = new Sprite();
  border1.x = 59;
  border1.y = 37.5;
  border1.width = 25;
  border1.height = 10;
  border1.image = "borderhp1.png";
  border1.collider = "none";}

function room2(){
  Inroom1 = false
  Inroom2 = true;
  clear();
  
  // Left wall
  wall = new Sprite();
  wall.y = 900;
  wall.x = 0;
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  // Right wall
  wall = new Sprite();
  wall.y = 900;
  wall.x = 400;  // Adjusted to fit within the new canvas width
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  ladder3 = new Sprite();
  ladder3.y = 255;
  ladder3.x= 187;
  ladder3.image = "ladder.png";
  ladder3.h = 174;
  ladder3.w = 60;
  ladder3.collider="static";
  //ladder.debug = true;
  
  door = new Sprite();
  door.y = 125;
  door.x = 50;
  door.image = 'door.png';
  door.w = 86;
  door.h = 83;
  door.collider = "kinematic";
  //door.debug = true;

  floortop = new Sprite();
  floortop.y = 900;
  floortop.x = 20;
  floortop.w = 432;
  floortop.h = 70;
  floortop.image = bridgetop;
  floortop.collider = 'static';
  //floortop.debug = true;

floor4b = new Sprite();
  floor4b.y = 365;
  floor4b.x = 250;
  floor4b.w = 111;
  floor4b.h = 45;
  floor4b.image = stone4;
  floor4b.collider = 'static';
  //floor4b.debug = true;

floor4 = new Sprite();
  floor4.y = 800;
  floor4.x = 170;
  floor4.w = 111;
  floor4.h = 45;
  floor4.image = stone4;
  floor4.collider = 'static';
  //floor4.debug = true;

  floor3 = new Sprite();
  floor3.y = 575;
  floor3.x = 280;
  floor3.w = 35;
  floor3.h = 20;
  floor3.image = stone3;
  floor3.collider = 'static';
  //floor3.debug = true;

 floor3b = new Sprite();
  floor3b.y = 635;
  floor3b.x = 365;
  floor3b.w = 39;
  floor3b.h = 30;
  floor3b.image = stone3;
  floor3b.collider = 'static';
  //floor3b.debug = true;

  floor2 = new Sprite();
  floor2.y = 420;
  floor2.x = 80;
  floor2.w = 57;
  floor2.h = 39;
  floor2.image = stone2;
  floor2.collider = 'static';
  //floor2.debug = true;

  floor1 = new Sprite();
  floor1.y = 740;
  floor1.x = 335;
  floor1.w = 129;
  floor1.h = 48;
  floor1.image = stone1;
  floor1.collider = 'static';
  //floor1.debug = true;
  
  floordoor = new Sprite();
  floordoor.y = 188;
  floordoor.x = 80;
  floordoor.w = 162;
  floordoor.h = 42;
  floordoor.image = doorfloor;
  floordoor.collider = 'static';
  //floordoor.debug = true;
  
  floorBL = new Sprite();
  floorBL.y = 525;
  floorBL.x = 120;
  floorBL.w = 240;
  floorBL.h = 42;
  floorBL.image = bridgeLeft;
  floorBL.collider = 'static';
  //floorBL.debug = true;

  floorBB = new Sprite();
  floorBB.y = 607;
  floorBB.x = 120;
  floorBB.w = 0;
  floorBB.h = 0;
  floorBB.image = archleft;
  floorBB.collider = 'static';
  //floorBB.debug = true;
  
  //goblin
  enemy = new Sprite();
  enemy.image = 'goblinR.png'
  enemy.image.offset.y = 3;
  enemy.image = 'goblinL.png';
  //enemy.debug = true;
  enemy.x = 5; //280 //122
  enemy.y = 475;
  enemy.width = 42;
  enemy.height = 59;
  enemy.image.offset.y = 3;
  enemy.collider = 'kinematic';
  enemy.hp = 3;
  
  //goblin
  enemy2 = new Sprite();
  enemy2.image = 'goblinR.png'
  enemy2.image.offset.y = 3;
  enemy2.image = 'goblinL.png';
  //enemy2.debug = true;
  enemy2.x = 400; //280 //122
  enemy2.y = 690;
  enemy2.width = 42;
  enemy2.height = 59;
  enemy2.image.offset.y = 3;
  enemy2.collider = 'kinematic';
  enemy2.hp = 3;
  

//player
 // Player setup
  player = new Sprite();
  player.width = 40;
  player.height = 90;
  player.x = 50;
  player.y = 800;
  player.image = loadImage("basicspritebeard1.png");
  player.rotationLock = true;
  player.collider = "dynamic";
  player.hp = 100;
  
  //border hp wizard
  border1 = new Sprite();
  border1.x = 59;
  border1.y = 37.5;
  border1.width = 25;
  border1.height = 10;
  border1.image = "borderhp1.png";
  border1.collider = "none";}

function room3(){
  Inroom3 = true;
  Inroom2 = false;
  // Left wall
  wall = new Sprite();
  wall.y = 900;
  wall.x = 0;
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  // Right wall
  wall = new Sprite();
  wall.y = 900;
  wall.x = 400;  // Adjusted to fit within the new canvas width
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  //level 3 door
  door2 = new Sprite();
  door2.y = 125;
  door2.x = 320;
  door2.image = 'door.png';
  door2.w = 86;
  door2.h = 83;
  door2.collider = "kinematic";
  //door2.debug = true;
  
  //starter platform
  floorBottom = new Sprite();
  floorBottom.y = 900;
  floorBottom.x = 20;
  floorBottom.w = 432;
  floorBottom.h = 70;
  floorBottom.image = bridgetop;
  floorBottom.collider = 'static';
  //floorBottom.debug = true;

floorstairfin = new Sprite();
  floorstairfin.y = 230;
  floorstairfin.x = 270;
  floorstairfin.w = 111;
  floorstairfin.h = 45;
  floorstairfin.image = stone4;
  floorstairfin.collider = 'static';
  //floorstairfin.debug = true;

  floorstair2 = new Sprite();
  floorstair2.y = 263;
  floorstair2.x = 230;
  floorstair2.w = 111;
  floorstair2.h = 45;
  floorstair2.image = stone4;
  floorstair2.collider = 'static';
  //floorstair2.debug = true;
  
  floorstair4 = new Sprite();
  floorstair4.y = 263;
  floorstair4.x = 330;
  floorstair4.w = 111;
  floorstair4.h = 45;
  floorstair4.image = stone4;
  floorstair4.collider = 'static';
  //floorstair4.debug = true;
  
  //bottom middle small floor
  floor1R = new Sprite();
  floor1R.y = 640;
  floor1R.x = 200;
  floor1R.w = 39;
  floor1R.h = 30;
  floor1R.image = stone3;
  floor1R.collider = 'static';
  //floor1R.debug = true;
  
  //left above halfway 2nd
  floor2L = new Sprite();
  floor2L.y = 388;
  floor2L.x = 80;
  floor2L.w = 57;
  floor2L.h = 39;
  floor2L.image = stone2;
  floor2L.collider = 'static';
  //floor2L.debug = true;
  
  //left above halfway 1st
  floor2bL1 = new Sprite();
  floor2bL1.y = 388;
  floor2bL1.x = 30;
  floor2bL1.w = 57;
  floor2bL1.h = 39;
  floor2bL1.image = stone2;
  floor2bL1.collider = 'static';
  //floor2bL1.debug = true;
  
  //left above halfway 4th
  floor2bL2 = new Sprite();
  floor2bL2.y = 350;
  floor2bL2.x = 30;
  floor2bL2.w = 57;
  floor2bL2.h = 39;
  floor2bL2.image = stone2;
  floor2bL2.collider = 'static';
  //floor2bL4.debug = true;
  
  //left above halfway 3rd
  floor2cL = new Sprite();
  floor2cL.y = 407;
  floor2cL.x = 110;
  floor2cL.w = 57;
  floor2cL.h = 35;
  floor2cL.image = stone2;
  floor2cL.collider = 'static';
  //floor2cL.debug = true;
  
  //bottom right
  floorbr = new Sprite();
  floorbr.y = 755;
  floorbr.x = 365;
  floorbr.w = 129;
  floorbr.h = 48;
  floorbr.image = stone1;
  floorbr.collider = 'static';
  //floorbr.debug = true;
  
  //bottom middle
  floormb = new Sprite();
  floormb.y = 845;
  floormb.x = 170;
  floormb.w = 129;
  floormb.h = 48;
  floormb.image = stone1;
  floormb.collider = 'static';
  //floormb.debug = true;
  
  //floor for da door
  floordoor2 = new Sprite();
  floordoor2.y = 188;
  floordoor2.x = 320;
  floordoor2.w = 162;
  floordoor2.h = 42;
  floordoor2.image = doorfloor;
  floordoor2.collider = 'static';
  //floordoor2.debug = true;
  
  //long middle floor
  floorBL2 = new Sprite();
  floorBL2.y = 535;
  floorBL2.x = 50;
  floorBL2.w = 240;
  floorBL2.h = 42;
  floorBL2.image = bridgeLeft;
  floorBL2.collider = 'static';
  //floorBL2.debug = true;
  
  floorstair3 = new Sprite();
  floorstair3.y = 489;
  floorstair3.x = 303;
  floorstair3.w = 111;
  floorstair3.h = 45;
  floorstair3.image = stone4;
  floorstair3.collider = 'static';
  //floorstair3.debug = true;
  
  //decorative bridge 1
  floorBB2 = new Sprite();
  floorBB2.y = 617;
  floorBB2.x = 63;
  floorBB2.w = 1;
  floorBB2.h = 1;
  floorBB2.image = archleft;
  floorBB2.collider = 'static';
  //floorBB2.debug = true;
  
  //decorative bridge 2
  floorBB3 = new Sprite();
  floorBB3.y = 260;
  floorBB3.x = 320;
  floorBB3.w = 1;
  floorBB3.h = 1;
  floorBB3.image = archright;
  floorBB3.collider = 'static';
  //floorBB3.debug = true;
  
  //goblin middle
  enemy3 = new Sprite();
  enemy3.image = 'goblinR.png'
  enemy3.image.offset.y = 3;
  enemy3.image = 'goblinL.png';
  //enemy3.debug = true;
  enemy3.y = 339;
  enemy3.x = 30;
  enemy3.width = 42;
  enemy3.height = 59;
  enemy3.image.offset.y = 3;
  enemy3.collider = 'kinematic';
  enemy3.hp = 3;
  
  //goblin bottom
  enemy4 = new Sprite();
  enemy4.image = 'goblinR.png'
  enemy4.image.offset.y = 3;
  enemy4.image = 'goblinL.png';
  //enemy4.debug = true;
  enemy4.x = 306; //280 //122
  enemy4.y = 702;
  enemy4.width = 42;
  enemy4.height = 59;
  enemy4.image.offset.y = 3;
  enemy4.collider = 'kinematic';
  enemy4.hp = 3;
  
  //goblin top
  enemy5 = new Sprite();
  enemy5.image = 'goblinR.png'
  enemy5.image.offset.y = 3;
  enemy5.image = 'goblinL.png';
  //enemy5.debug = true;
  enemy5.y = 212;
  enemy5.x = 170;
  enemy5.width = 42;
  enemy5.height = 59;
  enemy5.image.offset.y = 3;
  enemy5.collider = 'kinematic';
  enemy5.hp = 3;
  

//player
 // Player setup
  player = new Sprite();
  player.width = 33;
  player.height = 90;
  player.x = 50;
  player.y = 800;
  player.image = loadImage("basicspritebeard1.png");
  player.rotationLock = true;
  player.collider = "dynamic";
  player.hp = 100;
  
  //border hp wizard
  border1 = new Sprite();
  border1.x = 59;
  border1.y = 37.5;
  border1.width = 25;
  border1.height = 10;
  border1.image = "borderhp1.png";
  border1.collider = "none";}

// Final Room
function bossroom4() {
  Inroom3 = false;
  rbDelayTimer = frameCount;
  clear();
  //door decorative
   door = new Sprite();
  door.y = 356;
  door.x = 80;
  door.image = 'door.png';
  door.w = 86;
  door.h = 83;
  door.collider = "none";
  //door.debug = true;
  
  player = new Sprite();
  player.width = 40;
  player.height = 90;
  player.x = 50;
  player.y = 300;
  player.image = 'basicspritebeard1.png';
  player.rotationLock = true; // This keeps player upright and not tipping over
  player.hp = 100;
  
  // Right floor
  floorR = new Sprite();
  floorR.image = "stone4.5.png"
  floorR.y = 300;
  floorR.x = 310;  
  floorR.w = 39;
  floorR.height = 5;
  floorR.collider = 'static';
  floorR.image.scale = 0.35;
  floorR.image.offset.y = 10;
  
  // Left floor
  floorL = new Sprite();
  floorL.image = "stone4.5.png";
  floorL.y = 290;
  floorL.x = 50; 
  floorL.w = 40;
  floorL.height = 5;
  floorL.collider = 'static';
  
  // Left wall
  wall = new Sprite();
  wall.y = 0;
  wall.x = 0;
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  // Right wall
  wall = new Sprite();
  wall.y = 0;
  wall.x = 400;  // Adjusted to fit within the new canvas width
  wall.w = 3;
  wall.height = 900;
  wall.collider = 'static';
  wall.color = "grey";
  
  
  // Bottom floor
  floor = new Sprite();
  floor.image = "brickwallW.png";
  floor.y = 700;
  floor.x = 200;  // Adjusted for the new canvas width
  floor.w = 400;  // Adjusted for the new canvas width
  floor.height = 606;
  floor.collider = 'static';
  floor.image.offset.y = 47;
  floor.image.scale = 1;
  
  
  //border hp wizard
  border1 = new Sprite();
  border1.x = 59
  border1.y = 37.5
  border1.width = 25
  border1.height = 10
  border1.image = "borderhpW.png"
  border1.collider = "none"
  
  //border hp boss
  border = new Sprite();
  border.x = 362
  border.y = 37.5
  border.width = 25
  border.height = 10
  border.image = "borderhp2small.png"
  border.collider = "none"
  
  // Boss
  boss = new Sprite();
  boss.image = "evilWL.png";
  boss.x = 360;  // Corrected initial position of the boss (still on the 400x900 canvas)
  boss.y = 350;
  boss.width = 37;
  boss.height = 92;
  boss.collider = 'kinematic';
  boss.hp = 80;
  boss.lastMoveTime = 0; // Track time for move-based actions
  
   inBossRoom = true;
}

//musicpreload
function musicLoaded() {
  if (!beginningMusic.isPlaying()) { 
    beginningMusic.loop(); 
    beginningMusic.setVolume(0.2);  
  }
  
}
