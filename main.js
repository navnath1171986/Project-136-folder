noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
  
}

function setup() {
    video = createCapture(VIDEO);
    video.size(800, 500);

    canvas = createCanvas(550, 650);
    canvas.position(990,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#E8C277');
    fill('#BC00B0');
    stroke('#BC00B0');
    text('Aaryan', noseX, noseY); 
    textSize(difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}