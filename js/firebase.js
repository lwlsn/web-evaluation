/* Sending data from the web interface to the firebase database */


//  Firebase configuration -- hide api keys ? 
var firebaseConfig = {
  apiKey: "",
  authDomain: "listening-study-1.firebaseapp.com",
  databaseURL: "https://listening-study-1.firebaseio.com",
  projectId: "listening-study-1",
  storageBucket: "listening-study-1.appspot.com",
  messagingSenderId: "63211670094",
  appId: "1:63211670094:web:6ceab0989825d28b89d11f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


//get references from document to send to database from demographics page
const emailButton = document.querySelector('#email-submit-button');
const participantButton = document.querySelector('#submit-demographics');
const goldsmithsButton = document.querySelector('#submit-goldsmiths');
// const vueSubmitButton = document.querySelector('#submit-vue');
const vueNextButton = document.querySelector('#next-button-vue');



// generate some unique participant id for each dataset.. 
var participantId = Math.floor(Math.random()*10000);


//data submission function- demographics page.. 
participantButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  var selectedEmployment;
  document.getElementsByName("employment").forEach(function (elm) {
    if (elm.checked) {
      selectedEmployment = elm.value;
      // console.log(elm.value);
    }
  })

  var selectedAge; 
  document.getElementsByName("age").forEach(function(elm) {
    if (elm.checked) {
      selectedAge = elm.value; 
      // console.log(selectedAge);
    }
  } )

  var givenGender = document.getElementById("gender-data").value;
  var givenNationality = document.getElementById("nationality-data").value;
  var givenFormative = document.getElementById('formative-data').value;
  var givenGenres = document.getElementById('genres').value;

  db.collection('ParticipantData').add({
     id: participantId,
     employment: selectedEmployment, 
     age: selectedAge,
     gender: givenGender, 
     nationality: givenNationality, 
     formative: givenFormative, 
     genres: givenGenres
  })
}); 


//data submission to firebase of email address.
emailButton.addEventListener('click', (evt)=> {
  evt.preventDefault();

  var emailText; 
  emailText = document.getElementById('email-text-input').value;
  
  db.collection('EmailData').add({
    id: participantId,
    email: emailText
  })

  emailText.value = "";

})


//data submission function - goldsmiths msi page.. 
goldsmithsButton.addEventListener('click', (evt) => {
  evt.preventDefault();


  var selectedInstruments; 
  document.getElementsByName("instruments").forEach(function (elm) {
    if (elm.checked) {
      selectedInstruments = elm.value;
    }
  });

  var selectedListening; 
  document.getElementsByName("listening").forEach(function (elm) {
    if (elm.checked) {
      selectedListening = elm.value;
    }
  });

  var selectedNewMusic;
  document.getElementsByName("newmusic").forEach(function (elm) {
    if (elm.checked) {
      selectedNewMusic = elm.value;
    }
  });


  var selectedTune;
  document.getElementsByName("tune").forEach(function (elm) {
    if (elm.checked) {
      selectedTune = elm.value;
    }
  });



  var selectedBeats;
  document.getElementsByName("tune").forEach(function (elm) {
    if (elm.checked) {
      selectedBeats = elm.value;
    }
  });


  var selectedMusicianship; 
  document.getElementsByName("musician").forEach( function(elm) {
    if (elm.checked) {
      selectedMusicianship = elm.value;
    }
  });


  var selectedEmotions1; 
  document.getElementsByName("emotions1").forEach( function (elm) {
    if (elm.checked) {
      selectedEmotions1 = elm.value;
    }
  });

  var selectedEmotions2; 
  document.getElementsByName("emotions2").forEach( function (elm) {
    if (elm.checked) {
      selectedEmotions2 = elm.value;
    }
  });

  var selectedEmotions3; 
  document.getElementsByName("emotions3").forEach( function (elm) {
    if (elm.checked) {
      selectedEmotions3 = elm.value;
    }
  });


  db.collection('ParticipantData').add({
    id: participantId,
    instruments: selectedInstruments, 
    listening: selectedListening, 
    newMusic: selectedNewMusic,
    tune: selectedTune, 
    beats: selectedBeats,
    musicianship: selectedMusicianship, 
    emotions1: selectedEmotions1,
    emotions2: selectedEmotions2, 
    emotions3: selectedEmotions3

  })

});






// vueNextButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   // console.log(participantId);

//   const rect = canvas.getBoundingClientRect();

//   var x = (evt.clientX-rect.left)/320;
//   var y = 1 - ((evt.clientY-rect.top)/320);

//   var audio = document.getElementById('audio');
//   var audioFile = audio.src;

//   console.log(x, y);

//   db.collection('StudyData').add({
//     id: participantId, 
//     xPos: x,
//     yPos: y, 
//     audio: audioFile
//   })

// });





