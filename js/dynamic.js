/* Page Handling and Dynamic Sizing */



//Variables to track the progress of the study
let pages;
let currentPage = 0;



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
  console.log(currentPage);
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


 