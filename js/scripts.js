// Business logic
function Contact(place, country, season, landmarks, notes){
  this.placeName = place;
  this.countryName = country;
  this.seasonName = season;
  this.landmarksName = landmarks;
  this.note = notes;
}

Contact.prototype.fullName = function(){
  return this.placeName + ", "  + this.countryName;
}

// UI logic
$(document).ready(function(){
  $("#new-place").submit(function(event){
    event.preventDefault();

    var inputtedPlaceName = $("#new-place-name").val();
    var inputtedCountry = $("#new-country").val();
    var inputtedSeason = $("#new-season").val();
    var inputtedLandMark = $("#new-landmarks").val();
    var inputtedNotes = $("#new-notes").val();

    var newContact = new Contact(inputtedPlaceName, inputtedCountry, inputtedSeason, inputtedLandMark, inputtedNotes);

    $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.placeName);
      $(".place").text(newContact.placeName);
      $(".country").text(newContact.countryName);
      $(".season").text(newContact.seasonName);
      $(".landmark").text(newContact.landmarksName);
      $(".notes").text(newContact.note);
    });

    $("#new-place-name").val("");
    $("#new-country").val("");
    $("#new-season").val("");
    $("#new-landmarks").val("");
    $("#new-notes").val("");
  });
});
