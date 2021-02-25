// 'use strict';

// const e = require("express");

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  console.log("Page ready");
  initCamera();
  initMap();
  initGestures();
  initRSVPForm();
}

// init jQuery gestures
function initGestures() {
  $(function () {
    $(".judge-img").bind("taphold", tapholdHandler);

    function tapholdHandler(event) {
      var targetIDPrefix = event.target.id;
      console.log("got prefix: " + targetIDPrefix);
      $("#" + targetIDPrefix + "-bio").show();
    }
  });
}

// init RSVP form submit listener
function initRSVPForm() {
  $("#rsvpForm").submit(function (e) {
    e.preventDefault();
    console.log("submitting form...");
    var rsvpEmail = $("#rsvpEmail").val();
    $.post("addRSVP", { rsvpEmail: rsvpEmail }, postCallback);
  });

  function postCallback(res) {
    alert("RSVP form successfully submitted!");
    $("#rsvpEmail").val("");
  }
}