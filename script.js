"use strict";

$(document).ready(() => {

let tableNumber;

const reservations = [];

function showForm() {
  $("#resForm").fadeIn(500)
  .css("display", "flex")
  tableNumber = this.id;
  $("#tableNum").text(tableNumber);
  console.log(`Table number to be reserved is ${tableNumber}`);
  
};

function hideForm() {
  $("#resForm").fadeOut(500)
  // .css("display", "none")
}


function saveForm(){


  let newReservation = {
    name : $("#resName").val(),
    phone: $("#resPhone").val(),
    partySize: $("#resPartySize").val()
  }

  reservations.push(newReservation); //this isn't working yet

  $(`#${tableNumber}`).toggleClass("reserved");

  // console.log(`${tableNumber}`);
  // console.log(`You're booking table number ${tableNumber}`);
  // hideForm();
  console.log(`
  Your new reservation details are:
  Name: ${newReservation.name}
  Phone: ${newReservation.phone}
  Party size: ${newReservation.partySize}
  `);
  
  hideForm();
  showConfirmation();
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
  












