



const cursorBall = document.querySelector('.cursor-ball');
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;
const delay = 0.1;

document.addEventListener('mousemove', function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});



function animate() {
  ballX += (mouseX - ballX) * delay;
  ballY += (mouseY - ballY) * delay;

  cursorBall.style.left = `${ballX}px`;
  cursorBall.style.top = `${ballY}px`;

  requestAnimationFrame(animate);
}
animate();




const videoBoxes = document.querySelectorAll('.boxes');
const videos = document.querySelectorAll('.video-s3');

// Loop through each video box and attach event listeners
videoBoxes.forEach((videoBox, index) => {
  const video = videos[index]; // Get the corresponding video
  
  // Play video on hover
  videoBox.addEventListener('mouseenter', function() {
    video.play();
    video.muted = true; // Muted to avoid autoplay issues
    video.loop = true;  // Loop to play continuously
    console.log('start');
  });

  // Pause video when hover ends
  videoBox.addEventListener('mouseleave', function() {
    video.pause();
  });
});