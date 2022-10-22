Webcam.set({
    width:400,
    height:360,
    image_format:`png`,
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(`#camera`);
function take_snapshot(){
    Webcam.snap(function(data_url){
        //webcam.snap is a predefined function of webcam.js used to take images from a webcam
        //data_uri that can be used to show preview of the image which generates after taking a snapshot.
        document.getElementById("result").innerHTML=`<img id="captured_image" src="`+data_url+`">`;
        // pass data_uri. So that this image gets updated with the selfie taken and gets displayed.

    });
// ml5.js version,is used to get number in console screen without any error which means we are ready to use ml5.js library
}
console.log("ml5 version :",ml5.version);
// ml5.js which is used to work with machine learning
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zblxU9CTc/model.json',modelLoaded);
//- imageClassifier is a predefined function of ml5.js that is used to trigger the ml5.js image classification function.
function modelLoaded(){
    console.log("model loaded");
    //model which we created in the teachable machine. 
    //JavaScript Object Notation is an open standard file format that is used to hold data in an object format.
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
}