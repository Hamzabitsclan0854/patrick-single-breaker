import Swal from "sweetalert2";
import React from "react";
import Confetti from "react-confetti";
import { useSelector, useDispatch } from "react-redux";
import { isHurray } from "../../Redux/Action";
import { rootReducer } from "../../Redux/Reducers";

console.log(rootReducer);

export const SwalInitial = () => {
  Swal.fire({
    title: "You Can't On The Breaker 	&#128542",
    // showConfirmButton: false,
    text: "One device is not working properly you have to first disconnect all the devices",
    buttons: true,
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
  });
};
export const FinishSwal = () => {
  Swal.fire({
    title: "Do you want to proceed it?",
    // showConfirmButton: false,
    text: "One device is not working properly you have to first disconnect all the devices",
    buttons: true,
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
  });
};
export const SwalStarter = () => {
  Swal.fire({
    title: "User Task",
    // showConfirmButton: false,
    text: "Somewhere in the house a fuse has been switched off. Solve this problem as you have been taught.",
    buttons: true,
    confirmButtonColor: "#085CA8",
    confirmButtonText: "Okay",
  });
};

export const SwalHurray = (level, group) => {
  Swal.fire({
    title: "Hurry!!  &#128525;",
    // text: `You've Completed level ${level} of Group ${group}.`,
    text: `You've Completed this level !`,

    confirmButtonColor: "#085CA8",
  }).then(function () {});
};

export const SwalBreakerOn = () => {
  Swal.fire({
    title: "Breaker is on &#128571",
    text: "Now connect all the devices one by one to check which device is defected",
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
  });
};

export const SwalDisconnected = () => {
  Swal.fire({
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
    title: "Hook the breaker!",
    text: "You have disconnected all devices of the group from the socket.",
  });
};
export const SwalDisconnectedCorrupt = () => {
  Swal.fire({
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
    title: "On the breaker!",
    text: "You have disconnected all devices of the group from the socket.",
  });
};
export const SwalBreakerOff = (devices, redirect) => {
  Swal.fire({
    title: "Oops... Breaker is off &#128576;",
    // text: "The device you have just plugged into a socket has a short circuit and that is not safe! First disconnect this device and then on the breaker again",
    html: `The device you have just plugged into a socket has a short circuit and that is not safe! First disconnect this device and connect all remaining devices and then on the breaker again!<p style="border-bottom: 2px solid #000;display: inline-block;">Total number of disconnected devices <strong>${
      devices - 1
    }.</strong></p>`,
    denyButtonColor: "#7399b4",
    showDenyButton: true,
    denyButtonText: `Continue`,
    confirmButtonColor: "#085CA8",
    confirmButtonText: "Finish",
    // confirmButtonText: 'I understand',
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(redirect, 500);
    }
  });
};
