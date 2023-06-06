import Swal from "sweetalert2";
import React from "react";
import Confetti from 'react-confetti'
import { useDispatch } from "react-redux";
import { isHurray } from "../../Redux/Action";

export const SwalInitial = ()=>{
    Swal.fire({
        title: "You Can't On The Breaker 	&#128542",
        // showConfirmButton: false,
        text: "One device is not working properly you have to first disconnect all the devices",
        buttons: true,
        confirmButtonColor: "#085CA8",
        confirmButtonText: "I Understand",
      });
     
}
export const SwalStarter = ()=>{
  Swal.fire({
      title: "User Task",
      // showConfirmButton: false,
      text: "Somewhere in the house a fuse has been switched off. Solve this problem as you have been taught.",
      buttons: true,
      confirmButtonColor: "#085CA8",
      confirmButtonText: "Okay",
    });
   
}



export const SwalHurray = (level, group)=>{
  
    Swal.fire({
        title: "Hurry!!  &#128525;",
        // text: `You've Completed level ${level} of Group ${group}.`,
        text: `You've Completed this level !`,

        confirmButtonColor: "#085CA8",
        
      }).then(function() {
       
    });
     
}


export const SwalBreakerOn = ()=>{  
    Swal.fire({  
        title: "Breaker is on &#128571",
        text: "Now connect all the devices one by one to check which device is defected",
        confirmButtonColor: "#085CA8",
      confirmButtonText: "I Understand",
      });
}


export const SwalDisconnected = ()=>{ 
    Swal.fire({
        confirmButtonColor: "#085CA8",
        confirmButtonText: "I Understand",
        title: "On the breaker!",
        text: "You have disconnected all devices of the group from the socket.",
   
      });
}


export const SwalBreakerOff = ()=>{
    Swal.fire({
        title: "Oops... Breaker is off &#128576;",
        text: "The device you have just plugged into a socket has a short circuit and that is not safe! First disconnect this device and then on the breaker again",
        confirmButtonColor: "#085CA8",
        confirmButtonText: "I Understand",
   
      });
}


