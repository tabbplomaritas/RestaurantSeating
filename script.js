"use strict";

$(document).ready(() => {


const reservations = [];

let tableNumber;
function showForm() {
  //if statement to check if the clicked table is available
 if($(this).hasClass("available")){
   //fade the form in and set to flex
  $("#resForm").fadeIn(500)
  .css("display", "flex")
  //set the table number
  tableNumber = this.id;
  //change the table number text on the pop up form
  $("#tableNum").text(tableNumber);
  //console.log for testing
  console.log(`Table number to be reserved is ${tableNumber}`);
 }
};

function hideForm() {
  $("#resForm").fadeOut(500)
}


function saveForm(){


let reservation = {
    name: $("#resName").val(),
    phone: $("#resPhone").val(),
    partySize: $("#resPartySize").val()
}

  // reservations.push(newReservation); //this isn't working yet

  $(`#${tableNumber}`).addClass("reserved").removeClass("available");
  
  console.log(`
  Your new reservation details are:
  Name: ${reservation.name}
  Phone: ${reservation.phone}
  Party size: ${reservation.partySize}
  `);

  hideForm();
  // showConfirmation(); this is not working yet
}

function showConfirmation(newReservation){
  $("#confirm").css("display", "flex")
  $("#confirmNum").text(`${tableNumber}`);
  $("#confirmName").text(`Name: ${newReservation.name}`);
}

$(".available").click(showForm);
$("#closeFormButton").click(hideForm);
$("#saveButton").click(saveForm);  
$("#confirmCloseButton").click(function(){
  $("#confirm").fadeOut(1000);
});


    
    




});
  












