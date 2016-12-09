// index.js: the client-side javascript for our ui

window.addEventListener("DOMContentLoaded", function(event) {
  // delegate an event listener to the focus mode button to toggle visibility
  // of the left and bottom panels
  var fmb = document.getElementById("focusModeButton");
  var lc = document.getElementById("leftContainer");
  var bc = document.getElementById("bottomContainer");
  fmb.addEventListener("click", function(e) {
    if (lc.style.visibility === "visible") {
      // fmb goes off -> on: put border around fmb and hide left and bottom
      // panels
      lc.style.visibility = "hidden";
      bc.style.visibility = "hidden";
      fmb.style.border = "3% solid #efefef";
    } else {
      // fmb goes on -> off: remove border around fmb and show left and bottom
      // panels
      lc.style.visibility = "visible";
      bc.style.visibility = "visible";
      fmb.style.border = "none";
    }
  }
  
  // delegate an event listener to the night mode button to toggle the
  // body's background color for day / night
  var b = document.body;
  var nmb = document.getElementById("nightModeButton");
  nmb.addEventListener("click", function(e) {
    if (b.style.backgroundColor === "#efefef") {
      b.style.backgroundColor = "#000000";
      nmb.style.border = "3% solid #efefef";
    } else {
      b.style.backgroundColor = "#efefef";
      nmb.style.border = "none";
    }
  }
    
  // add hover styling to make interface feel more interactive
  
  
  // TEMP: my turqoise color is: CadetBlue #5f9ea0
