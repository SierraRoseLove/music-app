song = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
    LeftWristX = results[0].pose.LeftWrist.x;
    LeftWristY = results[0].pose.LeftWrist.y;
    console.log("leftWristX = " + LeftWristX +" leftWristY + "+ LeftWristY);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play()
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        LeftWristX = results[0].pose.LeftWrist.x;
        LeftWristY = results[0].pose.LeftWrist.y;
        console.log("leftWristX = " + LeftWristX +" leftWristY + "+ LeftWristY);

        RightWristX = results[0].pose.RightWrist.x;
        RightWristY = results[0].pose.RightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY + "+ RightWristY);
    }   
}