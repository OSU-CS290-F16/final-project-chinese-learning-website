// index.js: the client-side javascript for our ui

window.addEventListener("DOMContentLoaded", function(e) {
  var b = document.body;
  var nmb = document.getElementById("nightModeButton");
  var hb = document.getElementById("heroBox");
  nmb.addEventListener("click", function(e) {
    if (b.style.backgroundColor === "#efefef") {
      b.style.backgroundColor = "#555555";
      hb.style.backgroundColor = "#cccccc";
    } else {
      b.style.backgroundColor = "#efefef";
      hb.style.backgroundColor = "#ffffff";
    }
  });
});


/*
window.addEventListener("DOMContentLoaded", function(event) {
  var b = document.body;
  var fmb = document.getElementById("focusModeButton");
  var nmb = document.getElementById("nightModeButton");
  var tc = document.getElementById("topContainer");
  var lc = document.getElementById("leftContainer");
  var cc = document.getElementById("centerContainer");
  var bc = document.getElementById("bottomContainer");
  var s1b = document.getElementById("set1Button");
  var s2b = document.getElementById("set2Button");
  var s3b = document.getElementById("set3Button");
  var bb = document.getElementById("backButton");
  var fb = document.getElementById("forwardButton");

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
  // active hover color is turqoise: CadetBlue #5f9ea0

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
      } else {
        // case 1.2: night mode was inactive, focus mode was active
        nmb.style.border = "none";
      }
    } else {
      // case 2: night mode was active
      if (lc.style.visibility === "visible") {
        // case 2.1: night mode was active, focus mode was inactive
        nmb.style.border = "3% solid #000000";
      } else {
        // case 2.2: night mode was active, focus mode was active
        nmb.style.border = "3% solid #000000";
      }
    }
  });

  // character set 1 button (multiple possible previous states)
  s1b.addEventListener("mouseenter", function(e) {
    s1b.style.border = "3% solid #5f9ea0";
  });
  s1b.addEventListener("mouseleave", function(e) {
    if (s2b.style.border === "none" && s3b.style.border === "none") {
      // case 1: s1b was previously selected
      if (b.style.backgroundColor === "#000000") {
        // case 1.1: night mode is active
        s1b.style.border = "3% solid #000000";
      } else {
        // case 1.2: night mode is not active
        s1b.style.border = "3% solid #efefef";
      }
    } else {
      // case 2: s1b was not previously selected
      s1b.style.border = "none";
    }
  });

  // character set 2 button (multiple possible previous states)
  s2b.addEventListener("mouseenter", function(e) {
    s2b.style.border = "3% solid #5f9ea0";
  });
  s2b.addEventListener("mouseleave", function(e) {
    if (s1b.style.border === "none" && s3b.style.border === "none") {
      // case 1: s2b was previously selected
      if (b.style.backgroundColor === "#000000") {
        // case 1.1: night mode is active
        s2b.style.border = "3% solid #000000";
      } else {
        // case 1.2: night mode is not active
        s2b.style.border = "3% solid #efefef";
      }
    } else {
      // case 2: s2b was not previously selected
      s2b.style.border = "none";
    }
  });

  // character set 3 button (multiple possible previous states)
  s3b.addEventListener("mouseenter", function(e) {
    s3b.style.border = "3% solid #5f9ea0";
  });
  s3b.addEventListener("mouseleave", function(e) {
    if (s1b.style.border === "none" && s2b.style.border === "none") {
      // case 1: s3b was previously selected
      if (b.style.backgroundColor === "#000000") {
        // case 1.1: night mode is active
        s3b.style.border = "3% solid #000000";
      } else {
        // case 1.2: night mode is not active
        s3b.style.border = "3% solid #efefef";
      }
    } else {
      // case 2: s3b was not previously selected
      s3b.style.border = "none";
    }
  });

  // back button (one possible previous state)
  bb.addEventListener("mouseenter", function(e) {
    bb.style.border = "3% solid #5f9ea0";
  });
  bb.addEventListener("mouseleave", function(e) {
    bb.style.border = "none";
  });

  // forward button (one possible previous state)
  fb.addEventListener("mouseenter", function(e) {
    fb.style.border = "3% solid #5f9ea0";
  });
  fb.addEventListener("mouseleave", function(e) {
    fb.style.border = "none";
  });
  
});
*/


