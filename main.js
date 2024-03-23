let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
  poses = results;
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function draw() {

  background(220);

  if (poses.length > 0) {

    let leftWristX = poses[0].pose.keypoints[9].position.x;
    let rightWristX = poses[0].pose.keypoints[10].position.x;


    let difference = abs(leftWristX - rightWristX);

    let fontSize = map(difference, 0, width, 10, 60);
    textSize(fontSize);

    fill(255);


    text("Your Name", 10, height / 2);
  }
}

