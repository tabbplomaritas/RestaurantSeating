"use strict";

$(document).ready(() => {

class ResTracker {
  constructor(reservations){
    this.reservations = [
      new NewRes("Tabbatha", "5555555555", 2, 1)
    ]
  }
}

class NewRes {
  constructor(name, phone, partySize, bookedTable)
  {
    this.name = name;
    this.phone = phone
    this.partySize = partySize;
    this.bookedTable = bookedTable;
  }
}

const myResTracker = new ResTracker();
console.log(myResTracker);


let tableNumber;
function showForm(event) {
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
  let info ={
      name: $("#resName").val(),
      phone: $("#resPhone").val(),
      partySize: $("#resPartySize").val(),
      bookedTable: tableNumber
  }

  const addRes = new NewRes
  (info.name, info.phone, info.partySize, info.tableNumber);

  myResTracker.reservations.push(addRes);
  console.log(`***${myResTracker.reservations[0]}`)



  $(`#${tableNumber}`).addClass("reserved").removeClass("available");
  
  console.log(`
  Your new reservation details are:
      name: ${info.name},
      phone: ${info.phone},
      partySize: ${info.partySize},
      bookedTable: ${tableNumber}
  `);

  hideForm();

  //reset input values
  // $("#resName").val() = "";
  // $("#resPhone").val() = "";
  // $("#resPartySize").val() = "";
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
  












