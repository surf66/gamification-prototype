var canvas,
    context,
    x,
    y,
    pulseSize,
    radius,
    endPercent,
    curPerc,
    counterClockwise,
    circ,
    quart,
    radiusPulse,
    pulsePercent,
    color,
    stepAnimation;

function setupVars(elm, ending) {
  var lineWidth = 4;
  console.log(elm)
  canvas = elm;
  context = canvas.getContext('2d');
  x = canvas.width / 2;
  y = canvas.height / 2;
  pulseSize = 26;
  radius = (canvas.width - lineWidth) / 2;
  endPercent = ending;
  curPerc = 0;
  counterClockwise = false;
  circ = Math.PI * 2;
  quart = Math.PI / 2;
  radiusPulse = 0;
  pulsePercent = 50;
  color = 'rgb(12, 161, 235)';

  context.lineWidth = lineWidth;
  context.strokeStyle = color;
}

function animateLine(current) {
	//draw outer circle
	context.beginPath();
	context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
	context.lineCap = 'round';
	context.stroke();
}

function animatePulse(current) {
	var angle = 360 * (current - 0.25);
	var dx = x + (x-pulseSize) * Math.cos(angle * Math.PI / 180);
	var dy = y + (y-pulseSize) * Math.sin(angle * Math.PI / 180);

	//draw pulsing circle
	context.beginPath();
	context.arc(dx, dy, (pulseSize/100) * pulsePercent, -(quart), ((circ) * 100) - quart, false);
	context.lineCap = 'round';
	context.fillStyle = color.replace(')',',0.5)').replace('(','a(');
	context.fill();

	//draw end point circle
	context.beginPath();
	context.arc(dx, dy, 12, -(quart), ((circ) * 100) - quart, false);
	context.lineCap = 'round';
	context.fillStyle = '#fff';
	context.fill();

	//draw end point circle
	context.beginPath();
	context.arc(dx, dy, 5, -(quart), ((circ) * 100) - quart, false);
	context.lineCap = 'round';
	context.fillStyle = color;
	context.fill();
}

stepAnimation = (currPerc) => {
	context.clearRect(0, 0, canvas.width, canvas.height);
	if (curPerc < endPercent) {
		curPerc = curPerc + 0.9;
	}
	animateLine(currPerc);
	pulsePercent = pulsePercent+0.9;
	if (pulsePercent >= 100) {
		pulsePercent = 50;
	}
	// animatePulse(currPerc);
	if (currPerc >= 1) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		animateLine(currPerc);
		return;
	}
	requestAnimationFrame(function () {
		stepAnimation(curPerc / 100);
	});
}

export {
  stepAnimation,
  setupVars
};