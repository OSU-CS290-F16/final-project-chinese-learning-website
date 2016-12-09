// index.js: the client-side javascript for our ui

window.addEventListener("DOMContentLoaded", function(event) {
  var b = document.body;
  var fmb = document.getElementById("focusModeButton");
  var nmb = document.getElementById("nightModeButton");
  var tc = document.getElementById("topContainer");
  var lc = document.getElementById("leftContainer");
  var cc = document.getElementById("centerContainer");
  var bc = document.getElementById("bottomContainer");

  // delegate an event listener to the focus mode button to toggle visibility
  // of the left and bottom panels
  fmb.addEventListener("click", function(e) {
    if (lc.style.visibility === "visible") {
      // fmb goes off -> on: put border around fmb and hide left and bottom
      // panels
      lc.style.visibility = "hidden";
      bc.style.visibility = "hidden";
      // choose fmb active border color based on whether night mode is active
      if (nmb.style.border === "3% solid #000000") {
        fmb.style.border = "3% solid #000000";
      } else {
        fmb.style.border = "3% solid #efefef";
      }
    } else {
      // fmb goes on -> off: remove border around fmb and show left and bottom
      // panels
      lc.style.visibility = "visible";
      bc.style.visibility = "visible";
      fmb.style.border = "none";
    }
  });
  
  // delegate an event listener to the night mode button to toggle the
  // body's background color for day / night, and the background color of each
  // of the panels to a darker gray
  nmb.addEventListener("click", function(e) {
    if (b.style.backgroundColor === "#efefef") {
      b.style.backgroundColor = "#000000";
      tc.style.backgroundColor = "#cccccc";
      lc.style.backgroundColor = "#cccccc";
      cc.style.backgroundColor = "#cccccc";
      bc.style.backgroundColor = "#cccccc";
      nmb.style.border = "3% solid #000000";
      // also update border color of focus mode button if it is active
      if (fmb.style.border === "3% solid #efefef") {
        fmb.style.border = "3% solid #000000";
      }
    } else {
      b.style.backgroundColor = "#efefef";
      tc.style.backgroundColor = "#ffffff";
      lc.style.backgroundColor = "#ffffff";
      cc.style.backgroundColor = "#ffffff";
      bc.style.backgroundColor = "#ffffff";
      nmb.style.border = "none";
      // also update border color of focus mode button if it is active
      if (fmb.style.border === "3% solid #000000") {
        fmb.style.border = "3% solid #efefef";
      }
    }
  });

  // add hover styling to make interface feel more interactive

  // focus mode button (multiple possible previous states)
  fmb.addEventListener("mouseenter", function(e) {
    fmb.style.border = "3% solid #5f9ea0";
  });
  fmb.addEventListener("mouseleave", function(e) {
    if (lc.style.visibility === "visible") {
      // case 1: focus mode was inactive
      if (tc.style.backgroundColor === "#ffffff") {
        // case 1.1: focus mode was inactive, night mode was inactive
        fmb.style.border = "none";
      } else {
        // case 1.2: focus mode was inactive, night mode was active
        fmb.style.border = "none";
      }
    } else {
      // case 2: focus mode was active
      if (tc.style.backgroundColor === "#ffffff") {
        // case 2.1: focus mode was active, night mode was inactive
        fmb.style.border = "3% solid #efefef";
      } else {
        // case 2.2: focus mode was active, night mode was active
        fmb.style.border = "3% solid #000000";
      }
    }
  });

  // night mode button (multiple possible previous states)
  nmb.addEventListener("mouseenter", function(e) {
    nmb.style.border = "3% solid #5f9ea0";
  });
  nmb.addEventListener("mouseleave", function(e) {
    if (tc.style.backgroundColor === "#ffffff") {
      // case 1: night mode was inactive
      if (lc.style.visibility === "visible") {
        // case 1.1: night mode was inactive, focus mode was inactive
        nmb.style.border = "none";
      }
      // case 1.2: night mode was inactive, focus mode was active
    } else {
      // case 2: night mode was active
      // case 2.1: night mode was active, focus mode was inactive
      // case 2.2: night mode was active, focus mode was active
    }


  // character set 1 button (multiple possible previous states)
  var s1b = document.getElementById("set1Button");


  // character set 2 button (multiple possible previous states)
  var s2b = document.getElementById("set2Button");


  // character set 3 button (multiple possible previous states)
  var s3b = document.getElementById("set3Button");


  // back button (one possible previous state)
  var bb = document.getElementById("backButton");


  // forward button (one possible previous state)
  var fb = document.getElementById("forwardButton");
  
});





  // TEMP: my turqoise color is: CadetBlue #5f9ea0



























































