"use strict";

{

class ResTracker {
  constructor(reservations){
    this.reservations = [
      new NewRes("Tabbatha", "5555555555", 2, "2"),
      new NewRes("Lindsey", "22222222222", 5, "1")
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
//create instance of resTracker
const myResTracker = new ResTracker();
console.log(myResTracker);



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
  let info ={
      name: $("#resName").val(),
      phone: $("#resPhone").val(),
      partySize: $("#resPartySize").val(),
      bookedTable: tableNumber
  }

  const addRes = new NewRes
  (info.name, info.phone, info.partySize, info.tableNumber);

  myResTracker.reservations.push(addRes);
  console.log(`***${myResTracker.reservations}`)



  $(`#${tableNumber}`).addClass("reserved").removeClass("available");
  
  console.log(`
  Your new reservation details are:
      name: ${info.name},
      phone: ${info.phone},
      partySize: ${info.partySize},
      bookedTable: ${tableNumber}
  `);

  hideForm();
  resetFormValues();

}

function resetFormValues(){
  $("input[type=text], textarea").val("");
}

//this function isn't needed for projeect, but I'd like to come back to it if I have time
// function showConfirmation(newReservation){
//   $("#confirm").css("display", "flex");
//   $("#confirmNum").text(`${tableNumber}`);
//   $("#confirmName").text(`Name: ${newReservation.name}`);
// }



$(".reserved").on("mouseover", function(){
 //set the id of the clicked element to a variable
  let clickedItem = this.id;

  //check taht number against all the booked tables in our reservatiosn array
  for(let i = 0; i < myResTracker.reservations.length; i++){
    if(myResTracker.reservations[i].bookedTable == `${clickedItem}`){
     //when we find a match, grab the popup <p> inside the clicked item, set it to a variable, fade it in, and populate it with the data from the found reservation object
      let popUpDiv = ($(this).find('.popUp'));
      popUpDiv.slideDown(500);

      console.log("this is working.");//test to see if the mouseover is working at all on the .reserved circles(it's not)

      popUpDiv.html(`
      <p>Name: ${myResTracker.reservations[i].name}</p>
      <p>Phone: ${myResTracker.reservations[i].phone}</p>
      <p>Party Size: ${myResTracker.reservations[i].partySize}</p>
      <p>Table Booked: ${myResTracker.reservations[i].bookedTable}</p>
      `);
      }
  }
})

  $(".reserved").on("mouseout", function(){
    let popUpDiv = ($(this).find('.popUp'));
    popUpDiv.slideUp(500);

  });


  
$(".available").click(showForm);
$("#closeFormButton").click(hideForm);
$("#saveButton").click(saveForm);  
$("#confirmCloseButton").click(function(){
  $("#confirm").fadeOut(1000);
});


    
    




}
  












