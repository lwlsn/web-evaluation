

//Update button on click..
var count = 0;

//messages to be changed on updating click.. 
var paragraph1 = [
"Please test the audio below",
"", 
"", 
""]

var paragraph2 = [
"In this test, You will be asked to rate various audio clips based on two factors: how positive/negative and how high energy/low energy they are.", 
"Please listen to the audio clip below. Then using the interface provided, please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."]


var paragraph3 = [
"Thank you for your participation in this study.",
"Your results have been submitted, goodbye!"]

var app = new Vue ({
  el:'#app-1', 
  data: {
    message0: "We would like to invite you to be part of this research about musical pattern and emotion. Participation in the study is optional. If you choose not to take part there won’t be any disadvantages for you and you will hear no more about it. Please read the following information carefully before you decide to take part; this will tell you why the research is being done and what you will be asked to do if you take part.", 
    message1: "This research will look at evaluating listeners’ perception of music: examining affective/emotional response to short musical phrases. Study participants will initially be asked a few demographic questions designed to assess musical background and engagement levels.   Participants will be presented with an interface/webpage to play short audio clips. The participants are asked to listen to all the clips presented for the duration of the listening test. This should be completed using good quality headphones and in a quiet space, free from interruption. ",
    message2: "After listening, participants are asked to give an evaluative rating of the perceived emotional content to the audio they have listened to. To do so, they will be asked to place a slider on a 2-dimensional grid and rate the piece they have listened to and rate them in terms of how  positive/negative they are and how high/low energy they are.   ",
    message3: "Please contact me by email if there is anything unclear or if you would like more information. "
  }, 
  methods: {
    setNewValue: function() {
      
      if (count == 0){

      this.message0 = paragraph1[0];
      this.message1 = paragraph1[1];
      this.message2 = paragraph1[2];
      this.message3 = paragraph1[3];
      }
      if (count == 1) {
        this.message0 = paragraph2[0];
        this.message1 = paragraph2[1]; 
      }
      else if (count >= 5) {
        this.message0 = paragraph3[0];
        this.message1 = paragraph3[1];
        var audio = document.getElementById('audio');
        audio.style.visibility="hidden";
        var btn = document.getElementById('next-button');
        btn.style.visibility="hidden";
      }

      count += 1;

      console.log(count);
    }
  }
})


//shuffle function to randomise playback order.. 

function shuffle(a) {
  var i,j,x;
  for (i=a.length-1; i >0; i --) {
    j = Math.floor(Math.random()*(i+1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  };
  return a;
}



//Change the audio file onclick.. 
var a=0;
// contents of audio buffer .. 
var audioFiles = ["assets/excite.wav", "assets/sad.wav", "assets/calm.wav", "assets/angry.wav"];

function updateAudio() {
  var audio= document.getElementById('audio');

  if (a == 0) {
    audio.src = "assets/sine.wav"; 
    audio.style.visibility = "visible";
    shuffle(audioFiles);
    a =1;
  } 
  else if (a == 1) {
    audio.src = audioFiles[0];
    a= 2;
  } else if (a == 2) {
    audio.src = audioFiles[1];
    a=3; 
  } 
   else if (a == 3) {
    audio.src = audioFiles[2];
    a=4; 
  } 
  else if (a == 4) {
    audio.src = audioFiles[3];

  }
  else if ( a >= 4) {
    audio.style.visibility = "hidden";
  }
  audio.load();

}


var b=0;

function toggleCanvas() {
    var btn = document.getElementById('next-button');
    var canvas = document.getElementById('canvas');
    // if (btn.value ==="hide") {
    //   btn.value = "show"
    //   canvas.style.visibility="hidden";
    // } else {
    //   btn.value = "hide";
    //   canvas.style.visibility = "visible";
    // }

    if (b >= 1 && b <= 4 ) {
      canvas.style.visibility="visible";
    }  else {
      canvas.style.visibility="hidden";
    }

    b+=1;

  }


function buttonPressed() {
  updateAudio();
  toggleCanvas();
}


// Show hide canvas ? << fix meee 
// var canvas = document.getElementById('canvas');

// function toggleCanvas() {
//   btn = document.getElementById('visibility-button');
//   if (btn.value == "hide") {
//     btn.value = "show";
//     document.getElementById('canvas').style.visibilty="hidden";
//   } else {
//     btn.value = "hide";
//     document.getElementById('canvas').style.visibilty="visible";
//   }

// }


