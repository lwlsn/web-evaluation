// On submit button click, hide the button and add points to the database.. 

function thirdDeleteAfterClick( ) {
		var submitButton = document.getElementById("submit-vue");
    var nextButton = document.getElementById("next-button-vue");
    


		submitButton.style.visibility = "hidden";
    nextButton.style.visibility = "visible";
    
    const vueNextButton = document.querySelector('#next-button-vue');
    const db = firebase.firestore();



    vueNextButton.addEventListener('click', (evt) => {
      evt.preventDefault();

    const canvas = document.querySelector('canvas');
    const rect = canvas.getBoundingClientRect();

    var x = (evt.clientX-rect.left)/320;
    var y = 1 - ((evt.clientY-rect.top)/320);
  
    console.log(x, y);

    var audio = document.getElementById('audio');
    var audioFile = audio.src;
  
    //   db.collection('TestData').add({
    //     id: participantId,
    //     xPos: x,
    //     yPos: y, 
    //     audio: audioFile
    //   });
    });
}






  /* Vue Interactive text  */



//Update button on click..
var count = 0;

//messages to be changed on updating click.. 


var paragraph1 = [
"Please test the audio below and adjust to a comfortable level.",
"Once it is at a comfortable level, DO NOT ADJUST throughout the test.", 
"", 
""]

var paragraph2 = [
  "This page is designed to familiarise with the interface. The horizontal axis represents changes in POSITIVITY, whilst the vertical axis represents changes in ENERGY",
  "Please now take a minute and click your mouse once at various points on the grid.", 
  "The word that appears gives an indication of the desired mood for that level of positivity and energy."
]

var paragraph3 = [
"Test 1/27", 
"Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once.",
"When you are happy with the rating, please press submit to record your rating."
]

var paragraph4 = [
  "Test 2/27", 
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once.",
  "When you are happy with the rating, please press submit to record your rating."
]

var paragraph5 = [
  "Test 3/27", 
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once.",
  "When you are happy with the rating, please press submit to record your rating."
]

var paragraph6 = [
  "Test 4/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once.",
  "When you are happy with the rating, please press submit to record your rating."
]

var paragraph7 = [
  "Test 5/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once.",
  "When you are happy with the rating, please press submit to record your rating."
]

var paragraph8 = [
  "Test 6/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph9 = [
  "Test 7/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph10 = [
  "Test 8/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph11 = [
  "Test 9/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph12 = [
  "Test 10/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph13 = [
  "Test 11/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph14 = [
  "Test 12/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph15 = [
  "Test 13/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph16 = [
  "Test 14/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph17 = [
  "Test 15/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph18 = [
  "Test 16/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph19 = [
  "Test 17/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph20 = [
  "Test 18/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph21 = [
  "Test 19/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph22 = [
  "Test 20/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph23 = [
  "Test 21/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph24 = [
  "Test 22/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph25 = [
  "Test 23/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph26 = [
  "Test 24/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var paragraph27 = [
  "Test 25/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph28 = [
  "Test 26/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]

var paragraph29 = [
  "Test 27/27",
  "Please listen to the audio clip below and then please rate your emotional response to the audio just listened to by placing the mouse on the 2-d grid and clicking once."
]


var endParagraph = [
"Thank you for your participation in this study.",
"Your results have been submitted, goodbye!",
" "]


var divColours = [
 "#bbbbbb", "#dddddd"
]

var app = new Vue ({
  el:'#app-1', 
  data: {
    message0: "Welcome to the test section. This section will explain what you need to do to complete the test.", 
    message1:  "First, please complete the audio check on the next page to test the output of your headphones and adjust to a comfortable level." ,
    message2: "Following this, please complete the first test to familiarise yourself with how to use the interface in response to the audio presented. Once this has been done, please complete the rest of the test in a quiet environment, free from distractions.",
    message3: "In this test, You will be asked to rate various audio clips based on two factors: how positive/negative and how high energy/low energy they are. Use the provided grid to do this. The test section will not include any word prompts.",
    percentage: 0,
    componentKey: 0
  }, 
  methods: {

    setNewValue: function() {

      //get the contents div
      var contents = document.getElementById('contents');
      //get the audio element 
      var audio = document.getElementById('audio');

      // window.location.reload(); 
      
      if (count == 0){

      this.message0 = paragraph1[0];
      this.message1 = paragraph1[1];
      this.message2 = paragraph1[2];
      this.message3 = paragraph1[3];
      this.percentage = 100*(1/29); 

      
      }
      if (count == 1) {
      
        contents.style.visibility = "visible";
        this.message0 = paragraph2[0];
        this.message1 = paragraph2[1];
        this.message2 = paragraph2[2];
        this.percentage = 100*(2/29);
      }
      if (count == 2) {
        shuffle(divColours);
        contents.style.backgroundColor = divColours[0] ;
        this.message0 = paragraph3[0];
        this.message1 = paragraph3[1];
        this.message2 = paragraph3[2];
        this.percentage = 100*(3/29);
      }
      if (count == 3) {
        contents.style.backgroundColor = divColours[1] ;
        this.message0 = paragraph4[0];
        this.message1 = paragraph4[1];
        this.percentage = 100*(4/29);
      }
      if (count == 4) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph5[0];
        this.message1 = paragraph5[1];
        this.percentage = 100*(5/29);
      }
      if (count == 5) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph6[0];
        this.message1 = paragraph6[1];
        this.percentage = 100*(6/29);
      }

      if (count == 6) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph7[0];
        this.message1 = paragraph7[1];
        this.percentage = 100*(7/29);
      }

      if (count == 7) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph8[0];
        this.message1 = paragraph8[1];
        this.percentage = 100*(8/29);
      }     
      
      if (count == 8) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph9[0];
        this.message1 = paragraph9[1];
        this.percentage = 100*(9/29);
      }

      if (count == 9) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph10[0];
        this.message1 = paragraph10[1];
        this.percentage = 100*(10/29);
      }

      if (count == 10) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph11[0];
        this.message1 = paragraph11[1];
        this.percentage = 100*(11/29);
      }

      if (count == 11) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph12[0];
        this.message1 = paragraph12[1];
        this.percentage = 100*(12/29);
      }

      if (count == 12) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph13[0];
        this.message1 = paragraph13[1];
        this.percentage = 100*(13/29);
      }

      if (count == 13) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph14[0];
        this.message1 = paragraph14[1];
        this.percentage = 100*(14/29);
      }

      if (count == 14) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph15[0];
        this.message1 = paragraph15[1];
        this.percentage = 100*(15/29);
      }


      if (count == 15) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph16[0];
        this.message1 = paragraph16[1];
        this.percentage = 100*(16/29);
      }

      if (count == 16) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph17[0];
        this.message1 = paragraph17[1];
        this.percentage = 100*(17/29);
      }

      if (count == 17) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph18[0];
        this.message1 = paragraph18[1];
        this.percentage = 100*(18/29);
      }

      if (count == 18) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph19[0];
        this.message1 = paragraph19[1];
        this.percentage = 100*(19/29);
      }

      if (count == 19) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph20[0];
        this.message1 = paragraph20[1];
        this.percentage = 100*(20/29);
      }

      if (count == 20) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph21[0];
        this.message1 = paragraph21[1];
        this.percentage = 100*(21/29);
      }

      if (count == 21) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph22[0];
        this.message1 = paragraph22[1];
        this.percentage = 100*(22/29);
      }


      if (count == 22) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph23[0];
        this.message1 = paragraph23[1];
        this.percentage = 100*(23/29);
      }

      if (count == 23) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph24[0];
        this.message1 = paragraph24[1];
        this.percentage = 100*(24/29);
      }

      if (count == 24) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph25[0];
        this.message1 = paragraph25[1];
        this.percentage = 100*(25/29);
      }

      if (count == 25) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph26[0];
        this.message1 = paragraph26[1];
        this.percentage = 100*(26/29);
      }

      if (count == 26) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph27[0];
        this.message1 = paragraph27[1];
        this.percentage = 100*(27/29);
      }     

      if (count == 27) {
        contents.style.backgroundColor = divColours[1];
        this.message0 = paragraph28[0];
        this.message1 = paragraph28[1];
        this.percentage = 100*(28/29);
      }

      if (count == 28) {
        contents.style.backgroundColor = divColours[0];
        this.message0 = paragraph29[0];
        this.message1 = paragraph29[1];
        this.percentage = 100*(29/29);
      }

      else if (count >= 28) {
        
        this.message0 = endParagraph[0];
        this.message1 = endParagraph[1];
        this.message2 = endParagraph[2];
        
        //hide miscellaneous stuff
        audio.style.visibility="hidden";
        var btnVue= $('#next-button-vue')
        btnVue.hide();
        contents.style.visibility = "hidden";
      }

      count += 1;

      // console.log(count);
    }, 

    forceRerender: function() {
      this.componentKey += 1;
    }
  }
}) 



/* Audio Element handling .. */


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



// Random variable to control which test is given to the user .. 
var x = Math.floor((Math.random() * 2));
console.log ("x: " +  x);

//Change the audio file onclick.. 
var a=0;
var audio = document.getElementById('audio');
audio.src = "assets/sine.wav";
audio.style.visibility = "visible";


// contents of audio buffer, dependent on the outcome of the 

if (x == 0) {

var audioFiles = 
  [
    "assets/rhythms/LV_LA/LV_LA_1.wav", "assets/rhythms/LV_LA/LV_LA_2.wav", "assets/rhythms/LV_LA/LV_LA_3.wav",
    "assets/rhythms/MV_LA/MV_LA_1.wav", "assets/rhythms/MV_LA/MV_LA_2.wav", "assets/rhythms/MV_LA/MV_LA_3.wav",
    "assets/rhythms/HV_LA/HV_LA_1.wav", "assets/rhythms/HV_LA/HV_LA_2.wav", "assets/rhythms/HV_LA/HV_LA_3.wav",
    "assets/rhythms/LV_MA/LV_MA_1.wav", "assets/rhythms/LV_MA/LV_MA_2.wav", "assets/rhythms/LV_MA/LV_MA_3.wav",
    "assets/rhythms/MV_MA/MV_MA_1.wav", "assets/rhythms/MV_MA/MV_MA_2.wav", "assets/rhythms/MV_MA/MV_MA_3.wav",
    "assets/rhythms/HV_MA/HV_MA_1.wav", "assets/rhythms/HV_MA/HV_MA_2.wav", "assets/rhythms/HV_MA/HV_MA_3.wav",
    "assets/rhythms/LV_HA/LV_HA_1.wav", "assets/rhythms/LV_HA/LV_HA_2.wav", "assets/rhythms/LV_HA/LV_HA_3.wav",
    "assets/rhythms/MV_HA/MV_HA_1.wav", "assets/rhythms/MV_HA/MV_HA_2.wav", "assets/rhythms/MV_HA/MV_HA_3.wav",
    "assets/rhythms/HV_HA/HV_HA_1.wav", "assets/rhythms/HV_HA/HV_HA_2.wav", "assets/rhythms/HV_HA/HV_HA_3.wav"
  ];

}

else if (x >= 1) {

  var audioFiles = 
  [
    "assets/melodies/LV_LA/LV_LA_1.wav", "assets/melodies/LV_LA/LV_LA_2.wav", "assets/melodies/LV_LA/LV_LA_3.wav",
    "assets/melodies/MV_LA/MV_LA_1.wav", "assets/melodies/MV_LA/MV_LA_2.wav", "assets/melodies/MV_LA/MV_LA_3.wav",
    "assets/melodies/HV_LA/HV_LA_1.wav", "assets/melodies/HV_LA/HV_LA_2.wav", "assets/melodies/HV_LA/HV_LA_3.wav",
    "assets/melodies/LV_MA/LV_MA_1.wav", "assets/melodies/LV_MA/LV_MA_2.wav", "assets/melodies/LV_MA/LV_MA_3.wav",
    "assets/melodies/MV_MA/MV_MA_1.wav", "assets/melodies/MV_MA/MV_MA_2.wav", "assets/melodies/MV_MA/MV_MA_3.wav",
    "assets/melodies/HV_MA/HV_MA_1.wav", "assets/melodies/HV_MA/HV_MA_2.wav", "assets/melodies/HV_MA/HV_MA_3.wav",
    "assets/melodies/LV_HA/LV_HA_1.wav", "assets/melodies/LV_HA/LV_HA_2.wav", "assets/melodies/LV_HA/LV_HA_3.wav",
    "assets/melodies/MV_HA/MV_HA_1.wav", "assets/melodies/MV_HA/MV_HA_2.wav", "assets/melodies/MV_HA/MV_HA_3.wav",
    "assets/melodies/HV_HA/HV_HA_1.wav", "assets/melodies/HV_HA/HV_HA_2.wav", "assets/melodies/HV_HA/HV_HA_3.wav"
  ];

}



function updateAudio() {
  
  // console.log(a);
  if (a == 0) {
    shuffle(audioFiles);
    audio.style.visibility = "visible";
    audio.src = "assets/sine.wav"; 
    a =1;
  } 
  else if (a == 1) {
    audio.style.visibility = "hidden";
    a= 2;
  } 
  else if (a == 2) {
    audio.style.visibility = "visible";
    audio.src = audioFiles[0];
    a=3; 
  } 
  else if (a == 3) {
    audio.src = audioFiles[1];
    a=4; 
  } 
  else if (a == 4) {
    audio.src = audioFiles[2];
    a=5;
  }
  else if (a == 5) {
    audio.src = audioFiles[3];
    a=6;
  }
  else if (a == 6) {
    audio.src = audioFiles[4];
    a=7;
  }
  else if (a == 7) {
    audio.src = audioFiles[5];
    a=8;
  }

  else if (a == 8) {
    audio.src = audioFiles[6];
    a=9;
  }
  else if (a == 9) {
    audio.src = audioFiles[7];
    a=10;
  }

  else if (a == 10) {
    audio.src = audioFiles[8];
    a=11;
  }

  else if (a == 11) {
    audio.src = audioFiles[9];
    a=12;
  }

  else if (a == 12) {
    audio.src = audioFiles[10];
    a=13;
  }

  else if (a == 13) {
    audio.src = audioFiles[11];
    a=14;
  }

  else if (a == 14) {
    audio.src = audioFiles[12];
    a=15;
  }

  else if (a == 15) {
    audio.src = audioFiles[13];
    a=16;
  }

  else if (a == 16) {
    audio.src = audioFiles[14];
    a=17;
  }

  else if (a == 17) {
    audio.src = audioFiles[15];
    a=18;
  }

  else if (a == 18) {
    audio.src = audioFiles[16];
    a=19;
  }

  else if (a == 19) {
    audio.src = audioFiles[17];
    a=20;
  }

  else if (a == 20) {
    audio.src = audioFiles[18];
    a=21;
  }

  else if (a == 21) {
    audio.src = audioFiles[19];
    a=22;
  }

  else if (a == 22) {
    audio.src = audioFiles[20];
    a=23;
  }

  else if (a == 23) {
    audio.src = audioFiles[21];
    a=24;
  }

  else if (a == 24) {
    audio.src = audioFiles[22];
    a=25;
  }

  else if (a == 25) {
    audio.src = audioFiles[23];
    a=26;
  }

  else if (a == 26) {
    audio.src = audioFiles[24];
    a=27;
  }

  else if (a == 27) {
    audio.src = audioFiles[25];
    a=28;
  }

  else if (a == 28) {
    audio.src = audioFiles[26];
    a=29;
  }

  else if ( a >= 28) {
    audio.style.visibility = "hidden";
  }
  audio.load();

}



/* Canvas toggling on and off in vue and submission to database */

var b=0;

function toggleCanvas() {
    var submitBtn = document.getElementById('submit-vue');
    var canvas = document.getElementById('canvas');
    var label = document.getElementById('label');



    //  hide canvas when not on primer or test pages
    if (b >= 1 && b <= 28 ) {
      canvas.style.visibility="visible";
    }  else {
      canvas.style.visibility="hidden";
    }


    // only show label on primer pages
    if (b >= 2 && b <= 28) {
        label.style.visibility = "hidden";
    }

    // show page reference for each test page.
    if (b >= 2 && b <= 28) {
    document.getElementById('page-ref').innerHTML = (b-1) + "/4"; 
    }


    if (b >= 2 && b <= 28) {
      submitBtn.style.visibility = "visible";
    } else {
      submitBtn.style.visibility = "hidden";
    }

    b+=1;

  }


function buttonPressed() {
  updateAudio(); 
  toggleCanvas();
}



// email prize draw submission
function clearText() {
  // var emailtextval = document.getElementById('email-text-input'); 
  var submittextval = document.getElementById('submit-message');
  submittextval.style.visibility = "visible";
}

