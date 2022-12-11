function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(190, 125);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 640, 540);
}

function take_snapshot() {
    save('party_filter.png');
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("mouth x = " + results[0].pose.mouth.x);
        console.log("mouth y = " + results[0].pose.mouth.y);
    }
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}