
//  Firebase configuration -- hide api keys ? 
var firebaseConfig = {
  apiKey: "AIzaSyBF9mqWu9BHIvCI4iN_1SQxMXauNXIt21A",
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
const participantButton = document.querySelector('#submit-demographics');
const goldsmithsButton = document.querySelector('#submit-goldsmiths');
// const vueNextButton = document.querySelector('#next-button-vue');


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

  db.collection('StudyData').add({
     id: participantId,
     employment: selectedEmployment, 
     age: selectedAge,
     gender: givenGender, 
     nationality: givenNationality, 
     formative: givenFormative
  })
}); 



//data submission function - goldsmiths msi page.. 
goldsmithsButton.addEventListener('click', (evt) => {
  evt.preventDefault();


  var selectedEvents;
  document.getElementsByName("events").forEach(function (elm) {
    if (elm.checked) {
      selectedEvents = elm.value;
    }
  });

  var selectedListening; 
  document.getElementsByName("listening").forEach(function (elm) {
    if (elm.checked) {
      selectedListening = elm.value;
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

  db.collection('StudyData').add({
    id: participantId,
    events: selectedEvents, 
    listening: selectedListening, 
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

//   var x = (event.clientX-rect.left)/320;
//   var y = 1 - ((event.clientY-rect.top)/320);

//   var audio = document.getElementById('audio');
//   var audioFile = audio.src;

//   // console.log(x, y);

//   db.collection('StudyData').add({
//     id: participantId, 
//     xPos: x,
//     yPos: y, 
//     audio: audioFile
//   })

// });





