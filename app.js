// Hi Cristian! This is a quick example of what you would need to draw an object to the canvas as well as make it move.

// Here I have it set so the object automatically moves a certain amount of pixels every second, however, in your game,
// you'd want it set up so that, when you either click or use the arrow keys (I suggest the arrow keys to avoid a lot of headache)
// the player object moves the same number of pixels as is the width / height of your tile.
// So if your tile is 32x32, your player image will move 32 pixels in the chosen direction.

// Canvas variable and context
const CANVAS = document.querySelector('#canvas');
const CTX = CANVAS.getContext('2d');

// Our example Circle Object not using classes
let circle = {
  radius: 40,
  color: 'coral',
  x: 10,
  y: CANVAS.height / 2,

  // I add a draw function within the object for code clarity.
  draw: function () {
    CTX.beginPath();
    CTX.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    CTX.fillStyle = this.color;
    CTX.fill();
    CTX.stroke();
  },

  // Same for the update function. Remember, seperation of interests.
  update: function (speed) {
    // All this is doing is adding SPEED (essentially any given number of pixels) to the circle's X coordinate, thus making it move.
    this.x += speed;
  },
};

// Our main canvas drawing function. If we want a square in the future, this is where we can call it. It's all for code clarity as our project scales.
const draw = () => {
  // Calling our circle's draw function
  circle.draw();
};

// Our main canvas updating function
const update = () => {
  // Calling our circle's update function and setting a speed of 2. higher number will make circle move faster
  circle.update(2);
};

// Our "Game Loop". You will need this for your game.
const loop = () => {
  CTX.clearRect(0, 0, CANVAS.height, CANVAS.width); // Very important. Comment out this line to see what happens. The placement above everything else is also important

  update();
  draw();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);
};

window.requestAnimationFrame(loop);
// End of game loop.
