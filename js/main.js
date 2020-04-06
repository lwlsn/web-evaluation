

//Update button on click..
var count = 0;

//messages to be changed on updating click.. 


var paragraph1 = [
"Please test the audio below",
"", 
"", 
""]

var paragraph2 = [
"Test 1/4", 
"Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph3 = [
  "Test 2/4", 
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph4 = [
  "Test 3/4", 
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph5 = [
  "Test 4/4",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var endParagraph = [
"Thank you for your participation in this study.",
"Your results have been submitted, goodbye!"]

var app = new Vue ({
  el:'#app-1', 
  data: {
    message0: " Welcome to the test section.  The next section will explain what you need to do to complete the test.", 
    message1:  "First, please complete the audio check on the next page to test the output of your headphones and adjust to a comfortable level." ,
    message2: " Following this, please complete the first test to familiarise yourself with how to use the interface in response to the audio presented. Once this has been done, please complete the rest of the test in a quiet environment, free from distractions.",
    message3: " In this test, You will be asked to rate various audio clips based on two factors: how positive/negative and how high energy/low energy they are."
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
      if (count == 2) {
        this.message0 = paragraph3[0];
        this.message1 = paragraph3[1];
      }
      if (count == 3) {
        this.message0 = paragraph4[0];
        this.message1 = paragraph4[1];
      }
      if (count == 4) {
        this.message0 = paragraph5[0];
        this.message1 = paragraph5[1];
      }
      else if (count >= 5) {
        this.message0 = endParagraph[0];
        this.message1 = endParagraph[1];
        var audio = document.getElementById('audio');
        audio.style.visibility="hidden";
        var btnVue= $('#next-button-vue')
        btnVue.hide();
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
var audio = document.getElementById('audio');
audio.src = "assets/sine.wav";
audio.style.visibility = "visible";
// contents of audio buffer .. 
var audioFiles = ["assets/excite.wav", "assets/sad.wav", "assets/calm.wav", "assets/angry.wav"];
function updateAudio() {
  // var audio= document.getElementById('audio');
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


    if (b >= 2 && b <=5) {
    document.getElementById('page-ref').innerHTML = (b-1) + "/4"; 
    }

  }


function buttonPressed() {
  updateAudio();
  toggleCanvas();
  Application.resetMarker();
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


