
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
const participantButton = document.querySelector('#submit-demographics');
const goldsmithsButton = document.querySelector('#submit-goldsmiths');
const vueButton = document.querySelector('#next-button-vue');
const vueSubmitButton = document.querySelector('#submit-vue');


// generate some unique participant id for each dataset.. 
const participantId = Math.floor(Math.random()*10000);


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

})


//data submission function, vue pages 


vueSubmitButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  console.log(participantId);
})


// vueButton.addEventListener( 'click', (evt) => {
//   evt.preventDefault();

//   console.log(participantId);

//   // db.collection('StudyData').add({
//   //   id: participantId
//   // })

// })


// var nextButtonVue = document.getElementById('next-button-vue');

// nextButtonVue.addEventListener('click', (evt) => {
//     console.log(participantId);
// })



// vueButton.addEventListener('click', (evt) => {
//   evt.preventDefault();

//   console.log(x, y);

//   db.collection('StudyData').add({
//     id: participantId

//   })

// })




/* 
to dos 
- convert nationality, formative into dropdown list, checkbox.. 
- submit in one reference rather than individually, but allow data save if end value not clicked? 
- submit data from dropdown list.. 
*/