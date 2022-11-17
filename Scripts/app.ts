"use strict";

// *** Contact Page ***
// Get sendButton in the html, give the click function, and make it appear on the screen
var button = document.querySelector('#sendButton');
if (button)
{
    button.addEventListener('click', (e:Event) => showInformation());
}

// Define the variables the contact information
var fname: any= null;
var lname: any= null;
var contactNumber: any= null;
var email: any = null;
var message: any = null;

// Creat function(name is showInformation)..
function showInformation () {
    // show information on the console 
    console.log('Contact Us - Information');
    // if the value with id firstname is not null(not empthy),
    if (document.getElementById('firstName') !=null) 
    {   // Show the value entered in the firtname in the console window
        fname  = (<HTMLInputElement>document.getElementById('firstName')).value;
    }
     
    if (document.getElementById('lastName') !=null) 
    {
        lname  = (<HTMLInputElement>document.getElementById('lastName')).value;
        
    }

    if (document.getElementById('contactNumber') !=null) 
    {
        contactNumber  = (<HTMLInputElement>document.getElementById('contactNumber')).value;
    }

    if (document.getElementById('email') !=null) 
    {
        email  = (<HTMLInputElement>document.getElementById('email')).value;
    }

    if (document.getElementById('yourMessage') !=null) 
    {
        message  = (<HTMLInputElement>document.getElementById('yourMessage')).value;
    }
    // print the contact information on the console window
    console.log('First Name: ' + fname);
    console.log('Last Name: ' + lname);
    console.log('Phone Number: ' +contactNumber);
    console.log('email: ' +email);
    console.log('Message: ' +message);
    
}
