
//Variables to track the progress of the study
let pages;
let currentPage = 0;


 //  Firebase configuration -- hide api keys ? 
 var firebaseConfig = {
  apiKey: //how to hide this?,
  authDomain: "listening-study-1.firebaseapp.com",
  databaseURL: "https://listening-study-1.firebaseio.com",
  projectId: "listening-study-1",
  storageBucket: "listening-study-1.appspot.com",
  messagingSenderId: "63211670094",
  appId: "1:63211670094:web:6ceab0989825d28b89d11f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function setup() {
     //Get page information
     pages = document.getElementsByClassName("page");
     pages[0].style.display = "inline";
     sizeMain();
     Application.init();

}

function sizeMain(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    let mainDIVs = document.getElementsByClassName("main");
    let topBar = document.getElementById("topbar");

    for (let i = 0; i < mainDIVs.length; i++) {
      mainDIVs[i].style.height = height - 160 + "px";
    }

    //Resize the header
    let headerText = document.getElementById("headerText");
    let displayQMLogo = document.getElementById("QMLogo");
    let displayQMLogoSmall = document.getElementById("QMLogoSmall");

    if (width > 1300) {
      headerText.style.fontSize = 40 + "px";
      headerText.style.lineHeight = 80 + "px";
      headerText.style.maxWidth = 1200 + "px";
      displayQMLogo.style.display = "inline";
      displayQMLogoSmall.style.display = "none";
    }
    else if (width >= 800) {
      headerText.style.fontSize = 35 + "px";
      headerText.style.lineHeight = 40 + "px";
      headerText.style.maxWidth = 800 + "px";
      displayQMLogo.style.display = "inline";
      displayQMLogoSmall.style.display = "none";
    }
    else if (width >= 600) {
      headerText.style.fontSize = 30 + "px";
      headerText.style.lineHeight = 40 + "px";
      headerText.style.maxWidth = 600 + "px";
      displayQMLogo.style.display = "none";
      displayQMLogoSmall.style.display = "inline";
    }
    else {
      headerText.style.fontSize = Math.floor(40 * (800 / 1400.)) + "px";
      headerText.style.lineHeight = 40 + "px";
      displayQMLogo.style.display = "none";
      displayQMLogoSmall.style.display = "inline";
    }
}



//Check if all required elements are checked
function checkRequired(checksum) {
  let allElements = document.getElementsByClassName("main")[currentPage].querySelectorAll("input, select, textarea");   
  let counter = 0;
  for (let i = 0; i < allElements.length; i++) {
    let currentItem = allElements[i];
    if (currentItem.tagName == "TEXTAREA" || currentItem.tagName == "SELECT") {
      if (currentItem.value != 0) {
        counter++;
        console.log(currentItem.value);
      }
    }
    else if (currentItem.type = "radio") {
      if (currentItem.checked == true) {
        counter++;
      }
    }
  }
  let numberOfPages = document.getElementsByClassName("page").length;
  if (counter == checksum) {
    if (currentPage < numberOfPages - 2) {
      nextPage();
    }
    else {
      submit();
    }

  }
  else {
    document.getElementsByClassName("main")[currentPage].querySelectorAll("p.alert")[0].style.display = "block";
  }
}



//Go to the next page of the study
function nextPage() {
  currentPage += 1;
  for (let i = 0; i<pages.length; i++) {
    if(i == currentPage) {
      pages[i].style.display = "inline";
    }
    else {
      pages[i].style.display = "none"
    }
  }
}


function previousPage(){
  currentPage -= 1; 
  for (let i=0; i<pages.length; i++) {
    if (i == currentPage) {
      pages[i].style.display = "inline"; 
    } 
    else {
      pages[i].style.display = "none";
    }
  }
}


//Submit all survey forms at once
let messagesRef = firebase.database().ref('data');

function submit(){

    //Define length of data array, only ticked elements should count but ...elements.length gets the number of all elements
    let numberofelements = document.getElementById("survey").elements.length;
    let data = new Array (numberofelements + realtimeData.length);
    let j = 1; //Active Form Element Counter
    let n = 0; //Slider Counter

    if(videoID == 'fYInCkaOZO8') {
     data[0] = "Interactive"; } 
     else {
       data[0] = "Reactive"; 
     }


     for (let i = 0; i<numberofelements; i++) {

      let currentItem = document.getElementById("survey").elements.item(i);

      if (currentItem.tagName == "TEXTAREA" || currentItem.tagName == "SELECT") {

        if (!currentItem.value) {
          data[j] = "-";
        }
        else {
          data[j] = currentItem.value;
        }

        j++;
      }
      else if (currentItem.type == "range"){

        if (!sliderFlag[n]) {
          data[j] = "-";
        }
        else {
          data[j] = currentItem.value;
        }
        n++;
        j++;    
      }
      else if (currentItem.type == "radio") {
        let k = 0;
        let checkedFlag = false; 
        let nextItem = document.getElementById("survey").elements;

        while(currentItem.name == nextItem.item(i+k).name) {
          if(nextItem.item(i+k).checked == true) {
            data[j] = nextItem.item(i+k).value;
            j++;
            checkedFlag = true;
          }
          k++;
        }
            i = i + k - 1; //Skip all the other radio buttons that were already checked in the while loop above, 
                           //substract 1 because the for loop will add 1 again at the ende of the cycle
                           if(!checkedFlag) {
                            data[j] = "-";
                            j++;
                          }
                        }
                      }

    //Submit data to firebase
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
      a_Performance: data[0],
      b_Consent: data[1],
      c_Gender: data[2],
      d_Age: data[3],
      e_Occupation: data[4],
      f_Dance: data[5],
      g_Media: data[6],
      h_Enjoy: data[7],
      i_Focus: data[8],
      j_Connection: data[9],
      k_VisualSync: data[10],
      l_MusicSync: data[11],
      m_positveFeedback: data[12],
      n_negativeFeedback: data[13],
      o_generalComments: data[14],
      p_realtimeData: realtimeData

    });

    //Go to next page
    nextPage();

  }


//Custom select menu
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



//Function to check all items consented to.. 
console.log($("input[name='consent']"));

$("button[id='consentNavigation']").click(function() {
  var consentInput = $("input[name='consent']").val();
  console.log(consentInput.val());

  var isOkay = true;

  if (consentInput == false ){
    isOkay = false;
  }
  else 
    isOkay = true;

  if (isOkay == false) 
    $('#errorMessage').show();

  else
    $ ('#errorMessage').hide();

  return false;
}); 