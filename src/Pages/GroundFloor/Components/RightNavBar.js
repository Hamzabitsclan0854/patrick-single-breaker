import React from "react";
import Meter from "../images/Meter.png";
import meterGroup from "../images/meterGroup.png";
import breakerOffIMG from "../images/breakerOffIMG.png";
import breakerOnIMG from "../images/breakerOnIMG.png";
import beep from "../SoundEffects/beep.mp3";
import hurray from "../SoundEffects/hurray.wav";
import { useEffect } from "react";
import "./RightNavBar.css";
import useSound from "use-sound";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import ResultModel from "../../Components/ResultModel";
import Avator from "../../Components/Avator";
import { useDispatch, useSelector } from "react-redux";
import {
  isHurray,
  kitchenBreaker,
  resultGroundFloor,
} from "../../../Redux/Action";
import { useState } from "react";
import FrontScreenModel from "../../Components/FrontScreenModel";
import AtticModel from "../../../PopUpModels/AtticModel";
import FirstFloorModel from "../../../PopUpModels/FirstFloorModel";
import GroundFloorModel from "../../../PopUpModels/GroundFloorModel";
import { Link } from "react-router-dom";
import {
  SwalHurray,
  SwalBreakerOn,
  SwalInitial,
} from "../../Components/SwalModules";

const RightNavBar = (props) => {
  const { id } = useParams();

  console.log(id);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation().pathname;

  console.log(location);

  const [showAttic, setShowAttic] = useState(false);
  const [showFirstFloor, setshowFirstFloor] = useState(false);
  const [showGroundFloor, setshowGroundFloor] = useState(false);

  const [btnHover, setBtnHover] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [workAll, setWorkAll] = useState();

  useEffect(() => {});

  const rand =
    props.completeRnd ||
    props.rndKitchen ||
    props.rndGroupThree ||
    props.rndGroupFour ||
    props.rndGroupFive ||
    props.rndLaundary;

  // toilet section breaker .......................................................................................
  const [beepSound] = useSound(beep);
  const [hurraySound] = useSound(hurray);

  useEffect(() => {
    dispatch(isHurray(false));
  }, []);

  useEffect(() => {
    if (
      props.wholeCorruptDevice >= 1 &&
      props.wholeCorruptDevice <= 9 &&
      props.wholeCorruptDevice === rand
    ) {
      // 1
      props.setFirstGroupBreakerType("black");
      props.setIsFirstGroupBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 10 &&
      props.wholeCorruptDevice <= 15 &&
      props.wholeCorruptDevice === rand
    ) {
      // 2
      props.setKitchenBreakerType("black");
      props.setIsKitchenBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 16 &&
      props.wholeCorruptDevice <= 24 &&
      props.wholeCorruptDevice === rand
    ) {
      // 3
      props.setGroupThreeBreakerType("black");
      props.setIsGroupThreeBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 25 &&
      props.wholeCorruptDevice <= 34 &&
      props.wholeCorruptDevice === rand
    ) {
      // 4
      props.setGroupFourBreakerType("black");
      props.setIsGroupFourBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 35 &&
      props.wholeCorruptDevice <= 46 &&
      props.wholeCorruptDevice === rand
    ) {
      // 5
      props.setgroupFiveBreakerType("black");
      props.setIsGroupFiveBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 47 &&
      props.wholeCorruptDevice <= 49 &&
      props.wholeCorruptDevice === rand
    ) {
      // 6
      props.setLaundaryBreakerType("black");
      props.setIsLaundaryBreaker(false);
    }
  }, [props.wholeCorruptDevice]);

  // ***********************************
  // GROUP 1
  // ***********************************
  const firstGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setFirstGroupBreakerType("red");
      props.setIsFirstGroupBreaker(true);
    }, 3000);
  };

  const groupFirstBreakerHandlerOff = () => {
    // console.log("Hit first breaker handler");
    // console.log(rand);

    // const items = [
    //   props.toiletFan,
    //   props.toiletLight,
    //   props.hallLamp,
    //   props.hallLight01,
    //   props.hallLight02,
    //   props.livingRadio,
    //   props.livingLight01,
    //   props.livingAC,
    //   props.livingLight03,
    // ];

    // if (rand >= 1 && rand <= 9 && items[rand - 1] == "connected") {
    //   SwalInitial();
    //   console.log(rand + " inside the condition");
    //   return;
    // }
    if (
      location === "/ground-floor" ||
      location === "/ground-floor/toilet" ||
      location === "/ground-floor/living-room"
    ) {
      if (props.completeRnd >= 1 && props.completeRnd <= 9) {
        //for sending on next level code ................
        if (
          props.completeRnd === 1 &&
          props.toiletFan === "disconnect" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 2 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "disconnect" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 3 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "disconnect" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 4 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "disconnect" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 5 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "disconnect" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 6 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "disconnect" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 7 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "disconnect" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 8 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "disconnect" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 9 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "disconnect"
        ) {
          firstGroupPass();
        }

        if (props.completeCorruptDevice === props.completeRnd) {
          SwalInitial();
          props.setIsFirstGroupBreaker(false);
        } else {
          props.setFirstGroupBreakerType("red");
          props.setIsFirstGroupBreaker(true);
          // console.log("run red breaker")
          if (
            props.toiletFan === "disconnect" &&
            props.toiletLight === "disconnect" &&
            props.hallLamp === "disconnect" &&
            props.hallLight01 === "disconnect" &&
            props.hallLight02 === "disconnect" &&
            props.livingRadio === "disconnect" &&
            props.livingLight01 === "disconnect" &&
            props.livingAC === "disconnect" &&
            props.livingLight03 === "disconnect"
          ) {
            SwalBreakerOn();
          }

          //start my code for breaker pop up
          if (
            (props.completeRnd === 1 && props.toiletFan === "connected") ||
            (props.completeRnd === 2 && props.toiletLight == "connected") ||
            (props.completeRnd === 3 && props.hallLamp === "connected") ||
            (props.completeRnd === 4 && props.hallLight01 === "connected") ||
            (props.completeRnd === 5 && props.hallLight02 === "connected") ||
            (props.completeRnd === 6 && props.livingRadio === "connected") ||
            (props.completeRnd === 7 && props.livingLight01 === "connected") ||
            (props.completeRnd === 8 && props.livingAC === "connected") ||
            (props.completeRnd === 9 && props.livingLight03 === "connected")
          ) {
            props.setFirstGroupBreakerType("black");
            props.setIsFirstGroupBreaker(false);
            SwalInitial();
          }
          // end my code for breaker pop up
        }

        //start my code for breaker pop up
        if (
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          props.setFirstGroupBreakerType("black");
          props.setIsFirstGroupBreaker(false);
          SwalInitial();
        }
      } else {
        props.setFirstGroupBreakerType("red");
        props.setIsFirstGroupBreaker(true);
        // console.log("run")
      }
    } else {
      if (
        props.wholeCorruptDevice >= 1 &&
        props.wholeCorruptDevice <= 9 &&
        props.wholeCorruptDevice === rand
      ) {
        SwalInitial();
        console.log("hit not location-----------------------------");
      } else {
        props.setFirstGroupBreakerType("red");
        props.setIsFirstGroupBreaker(true);
        // firstGroupPass();
      }
    }
    // console.log("handle on")
  };

  const groupFirstBreakerHandlerOn = () => {
    props.setFirstGroupBreakerType("black");
    props.setIsFirstGroupBreaker(false);
    // console.log("handle off")
  };

  // ***********************************
  // GROUP 2
  // ***********************************
  // kitchen section Breaker...........................................................................................
  // const lastAssignmentPass = () => {
  //   props.setIsModalOpen(true);
  //   dispatch(resultGroundFloor(props.groundFloorTrial));
  //   setTimeout(() => {
  //     SwalHurray('four','two')
  //   }, 30);

  // };
  const lastAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setKitchenBreakerType("red");
      props.setIsKitchenBreaker(true);
    }, 3000);
  };

  // const kitchencolor = useSelector(
  //   (state) => state.BreakerReducer.kitchenBreakerColor
  // );

  // console.log(kitchencolor);

  const kitchenBreakerHandlerOff = () => {
    // dispatch(kitchenBreaker({ available: false, color: "black" }));

    // console.log("start----------")
    // console.log(props.rndKitchen)
    // console.log(props.kitchenCorruptDevice)
    // console.log(props.kitchenBreakerType)
    // console.log(props.isKitchenBreaker)
    // console.log("end-----------")
    if (location === "/ground-floor/kitchen") {
      if (props.rndKitchen >= 10 && props.rndKitchen <= 15) {
        // console.log("Second Breaker RightNav " + props.rndKitchen)
        if (
          props.rndKitchen === 10 &&
          props.kitchenMixture === "disconnect" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 11 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "disconnect" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 12 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "disconnect" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 13 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "disconnect" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 14 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "disconnect" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 15 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "disconnect"
        ) {
          lastAssignmentPass();
        }
        // console.log("kitchen CorruptDevice",props.kitchenCorruptDevice);
        if (props.kitchenCorruptDevice === props.rndKitchen) {
          SwalInitial();
          props.setIsKitchenBreaker(false);
        } else {
          props.setKitchenBreakerType("red");
          props.setIsKitchenBreaker(true);
          if (
            props.kitchenLight01 === "disconnect" &&
            props.kitchenLight02 === "disconnect" &&
            props.kitchenLight03 === "disconnect" &&
            props.kitchenMixture === "disconnect" &&
            props.kitchenOven === "disconnect" &&
            props.kitchenToster === "disconnect"
          ) {
            SwalBreakerOn();
          }

          //start my code for breaker pop up
          if (
            (props.rndKitchen === 10 && props.kitchenMixture === "connected") ||
            (props.rndKitchen === 11 && props.kitchenOven === "connected") ||
            (props.rndKitchen === 12 && props.kitchenLight01 === "connected") ||
            (props.rndKitchen === 13 && props.kitchenLight02 === "connected") ||
            (props.rndKitchen === 14 && props.kitchenLight03 === "connected") ||
            (props.rndKitchen === 15 && props.kitchenToster === "connected")
          ) {
            props.setKitchenBreakerType("black");
            props.setIsKitchenBreaker(false);
            SwalInitial();
          }
          // end my code for breaker pop up
        }
        //start my code for breaker pop up
        if (
          // props.livingRadio === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 == "connected" &&
          props.kitchenLight03 == "connected" &&
          props.kitchenMixture == "connected" &&
          props.kitchenOven == "connected" &&
          props.kitchenToster == "connected"
        ) {
          props.setKitchenBreakerType("black");
          props.setIsKitchenBreaker(false);
          SwalInitial();
        }
      } else {
        props.setKitchenBreakerType("red");
        props.setIsKitchenBreaker(true);
      }
    } else {
      if (
        props.wholeCorruptDevice >= 10 &&
        props.wholeCorruptDevice <= 15 &&
        props.wholeCorruptDevice === rand
      ) {
        SwalInitial();
      } else {
        props.setKitchenBreakerType("red");
        props.setIsKitchenBreaker(true);
      }
    }
  };

  const kitchenBreakerHandlerOn = () => {
    props.setKitchenBreakerType("black");
    props.setIsKitchenBreaker(false);
    // console.log("handle off breaker 2")
  };
  // ***********************************
  // GROUP 3
  // ***********************************
  const thirdGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setGroupThreeBreakerType("red");
      props.setIsGroupThreeBreaker(true);
    }, 3000);
  };
  const groupThreeBreakerHandlerOff = () => {
    if (
      location === "/first-floor/living-room01" ||
      location === "/first-floor/living-room02"
    ) {
      if (props.rndGroupThree >= 16 && props.rndGroupThree <= 24) {
        // console.log("Third Breaker RightNav " + props.rndGroupThree)
        if (
          props.rndGroupThree === 16 &&
          props.livingOneLignt01 === "disconnect" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 17 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "disconnect" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 18 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "disconnect" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 19 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "disconnect" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 20 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "disconnect" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 21 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "disconnect" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 22 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "disconnect" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 23 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "disconnect" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 24 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "disconnect"
        ) {
          thirdGroupPass();
        }

        if (props.groupThreeCorruptDevice === props.rndGroupThree) {
          SwalInitial();
          props.setIsGroupThreeBreaker(false);
        } else {
          props.setGroupThreeBreakerType("red");
          props.setIsGroupThreeBreaker(true);
          if (
            props.livingOneLignt01 === "disconnect" &&
            props.livingOneLignt02 === "disconnect" &&
            props.livingOneLignt03 === "disconnect" &&
            props.livingOneFan === "disconnect" &&
            props.livingOneTV === "disconnect" &&
            props.livingTwoLignt01 === "disconnect" &&
            props.livingTwoFan === "disconnect" &&
            props.livingTwoLignt02 === "disconnect" &&
            props.livingTwoSmallLamp === "disconnect"
          ) {
            SwalBreakerOn();
          }
          //start my code for breaker pop up
          if (
            (props.rndGroupThree === 16 &&
              props.livingOneLignt01 === "connected") ||
            (props.rndGroupThree === 17 &&
              props.livingOneLignt02 == "connected") ||
            (props.rndGroupThree === 18 &&
              props.livingOneLignt03 === "connected") ||
            (props.rndGroupThree === 19 && props.livingOneFan == "connected") ||
            (props.rndGroupThree === 20 && props.livingOneTV == "connected") ||
            (props.rndGroupThree === 21 &&
              props.livingTwoLignt01 == "connected") ||
            (props.rndGroupThree === 22 && props.livingTwoFan == "connected") ||
            (props.rndGroupThree === 23 &&
              props.livingTwoLignt02 == "connected") ||
            (props.rndGroupThree === 24 &&
              props.livingTwoSmallLamp == "connected")
          ) {
            props.setGroupThreeBreakerType("black");
            props.setIsGroupThreeBreaker(false);
            SwalInitial();
          }
          // end my code for breaker pop up
        }
        //start my code for breaker pop up
        if (
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 == "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan == "connected" &&
          props.livingOneTV == "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          props.setGroupThreeBreakerType("black");
          props.setIsLivingOneBreaker(false);
          SwalInitial();
        }
        // console.log("run third");
      } else {
        // console.log("run else third");
        props.setGroupThreeBreakerType("red");
        props.setIsGroupThreeBreaker(true);
      }
    } else {
      if (
        props.wholeCorruptDevice >= 16 &&
        props.wholeCorruptDevice <= 24 &&
        props.wholeCorruptDevice === rand
      ) {
        SwalInitial();
      } else {
        props.setGroupThreeBreakerType("red");
        props.setIsGroupThreeBreaker(true);
      }
    }
    //end my code for breaker pop up
  };

  const groupThreeBreakerHandlerOn = () => {
    props.setGroupThreeBreakerType("black");
    props.setIsGroupThreeBreaker(false);
  };

  // ***********************************
  // GROUP 4
  // ***********************************
  const forthGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setGroupFourBreakerType("red");
      props.setIsGroupFourBreaker(true);
    }, 3000);
  };
  const groupFourBreakerHandlerOff = () => {
    if (
      location === "/first-floor" ||
      location === "/first-floor/toilet" ||
      location === "/first-floor/bed-room"
    ) {
      if (props.rndGroupFour >= 25 && props.rndGroupFour <= 34) {
        if (
          props.rndGroupFour === 25 &&
          props.hallLedTv === "disconnect" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 26 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "disconnect" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 27 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "disconnect" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 28 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "disconnect" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 29 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "disconnect" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 30 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "disconnect" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 31 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "disconnect" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 32 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "disconnect" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 33 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "disconnect" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 34 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "disconnect"
        ) {
          forthGroupPass();
        }

        if (props.groupFourCorruptDevice === props.rndGroupFour) {
          SwalInitial();
          props.setIsGroupFourBreaker(false);
        } else {
          props.setGroupFourBreakerType("red");
          props.setIsGroupFourBreaker(true);
          if (
            props.hallLight01 === "disconnect" &&
            props.hallLight02 === "disconnect" &&
            props.hallLedTv === "disconnect" &&
            props.livingLight01 === "disconnect" &&
            props.livingLight02 === "disconnect" &&
            props.livingSilingFan === "disconnect" &&
            props.toiletLight === "disconnect" &&
            props.toiletLight02 === "disconnect" &&
            props.toiletFan === "disconnect" &&
            props.toiletLight03 === "disconnect"
          ) {
            SwalBreakerOn();
          }

          //start my code for breaker pop up
          if (
            (props.rndGroupFour === 25 && props.hallLedTv == "connected") ||
            (props.rndGroupFour === 26 && props.hallLight01 === "connected") ||
            (props.rndGroupFour === 27 && props.hallLight02 == "connected") ||
            (props.rndGroupFour === 28 && props.livingLight01 == "connected") ||
            (props.rndGroupFour === 29 && props.livingLight02 == "connected") ||
            (props.rndGroupFour === 30 &&
              props.livingSilingFan == "connected") ||
            (props.rndGroupFour === 31 && props.toiletLight == "connected") ||
            (props.rndGroupFour === 32 && props.toiletLight02 == "connected") ||
            (props.rndGroupFour === 33 && props.toiletFan == "connected") ||
            (props.rndGroupFour === 34 && props.toiletLight03 == "connected")
          ) {
            props.setGroupFourBreakerType("black");
            props.setIsGroupFourBreaker(false);
            SwalInitial();
          }
          // end my code for breaker pop up
        }

        //start my code for breaker pop up
        if (
          // props.livingRadio === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 == "connected" &&
          props.hallLedTv == "connected" &&
          props.livingLight01 == "connected" &&
          props.livingLight02 == "connected" &&
          props.livingSilingFan == "connected" &&
          props.toiletLight == "connected" &&
          props.toiletLight02 == "connected" &&
          props.toiletFan == "connected" &&
          props.toiletLight03 == "connected"
        ) {
          props.setGroupFourBreakerType("black");
          props.setIsGroupFourBreaker(false);
          SwalInitial();
        }
      } else {
        props.setGroupFourBreakerType("red");
        props.setIsGroupFourBreaker(true);
      }
    } else {
      if (
        props.wholeCorruptDevice >= 25 &&
        props.wholeCorruptDevice <= 34 &&
        props.wholeCorruptDevice === rand
      ) {
        SwalInitial();
      } else {
        props.setGroupFourBreakerType("red");
        props.setIsGroupFourBreaker(true);
      }
    }
  };
  const groupFourBreakerHandlerOn = () => {
    props.setGroupFourBreakerType("black");
    props.setIsGroupFourBreaker(false);
  };

  // ***********************************
  // GROUP 5
  // ***********************************
  const fifthGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setgroupFiveBreakerType("red");
      props.setIsGroupFiveBreaker(true);
    }, 3000);
  };

  const groupFifthBreakerHandlerOff = () => {
    if (
      location === "/attic" ||
      location === "/attic/guest-room" ||
      location === "/attic/study-room" ||
      location === "/attic/storage-room"
    ) {
      if (props.rndGroupFive >= 35 && props.rndGroupFive <= 46) {
        if (
          props.rndGroupFive === 35 &&
          props.hallLampFive === "disconnect" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 36 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "disconnect" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 37 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "disconnect" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 38 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "disconnect" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 39 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "disconnect" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 40 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "disconnect" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 41 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "disconnect" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 42 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "disconnect" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 43 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "disconnect" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 44 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "disconnect" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 45 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "disconnect" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 46 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "disconnect"
        ) {
          fifthGroupPass();
        }

        if (props.groupFiveCorruptDevice === props.rndGroupFive) {
          SwalInitial();
          props.setIsGroupFiveBreaker(false);
        } else {
          props.setgroupFiveBreakerType("red");
          props.setIsGroupFiveBreaker(true);
          if (
            props.hallLight01Five === "disconnect" &&
            props.hallLight02Five === "disconnect" &&
            props.hallLampFive === "disconnect" &&
            props.guestLamp === "disconnect" &&
            props.guestRadio === "disconnect" &&
            props.guestFan === "disconnect" &&
            props.guestLED === "disconnect" &&
            props.studyLamp === "disconnect" &&
            props.studyLamp02 === "disconnect" &&
            props.livingOneLignt01 === "disconnect" &&
            props.livingOneLignt03 === "disconnect" &&
            props.livingOneLignt02 === "disconnect"
          ) {
            SwalBreakerOn();
          }
          if (
            (props.rndGroupFive === 35 && props.hallLampFive === "connected") ||
            (props.rndGroupFive === 36 &&
              props.hallLight01Five === "connected") ||
            (props.rndGroupFive === 37 &&
              props.hallLight02Five === "connected") ||
            (props.rndGroupFive === 38 && props.guestLamp === "connected") ||
            (props.rndGroupFive === 39 && props.guestRadio === "connected") ||
            (props.rndGroupFive === 40 && props.guestFan === "connected") ||
            (props.rndGroupFive === 41 && props.guestLED === "connected") ||
            (props.rndGroupFive === 42 && props.studyLamp === "connected") ||
            (props.rndGroupFive === 43 && props.studyLamp02 === "connected") ||
            (props.rndGroupFive === 44 &&
              props.livingOneLignt01 === "connected") ||
            (props.rndGroupFive === 45 &&
              props.livingOneLignt02 === "connected") ||
            (props.rndGroupFive === 46 &&
              props.livingOneLignt03 === "connected")
          ) {
            SwalInitial();
            props.setgroupFiveBreakerType("black");
            props.setIsGroupFiveBreaker(false);
          }
        }
        //start my code for breaker pop up
        if (
          props.hallLight02Five === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLampFive === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          props.setgroupFiveBreakerType("black");
          props.setIsGroupFiveBreaker(false);
          SwalInitial();
        }
      } else {
        // console.log("run else fifth");
        props.setgroupFiveBreakerType("red");
        props.setIsGroupFiveBreaker(true);
      }
    } else {
      if (
        props.wholeCorruptDevice >= 35 &&
        props.wholeCorruptDevice <= 46 &&
        props.wholeCorruptDevice === rand
      ) {
        SwalInitial();
      } else {
        props.setgroupFiveBreakerType("red");
        props.setIsGroupFiveBreaker(true);
      }
    }
  };

  const groupFifthBreakerHandlerOn = () => {
    props.setgroupFiveBreakerType("black");
    props.setIsGroupFiveBreaker(false);
  };
  // ***********************************
  // GROUP 6
  // ***********************************
  const sixGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setLaundaryBreakerType("red");
      props.setIsLaundaryBreaker(true);
    }, 3000);
  };

  const laundaryBreakerHandlerOff = () => {
    if (location === "/attic/laundary") {
      if (props.rndLaundary >= 47 && props.rndLaundary <= 49) {
        if (
          props.rndLaundary === 47 &&
          props.laundaryWashing === "disconnect" &&
          props.laundaryLight01 === "connected" &&
          props.laundaryLight02 === "connected"
        ) {
          sixGroupPass();
        }
        if (
          props.rndLaundary === 48 &&
          props.laundaryWashing === "connected" &&
          props.laundaryLight01 === "disconnect" &&
          props.laundaryLight02 === "connected"
        ) {
          sixGroupPass();
        }
        if (
          props.rndLaundary === 49 &&
          props.laundaryWashing === "connected" &&
          props.laundaryLight01 === "connected" &&
          props.laundaryLight02 === "disconnect"
        ) {
          sixGroupPass();
        }

        if (props.laundaryCorruptDevice === props.rndLaundary) {
          SwalInitial();
          props.setIsLaundaryBreaker(false);
        } else {
          props.setLaundaryBreakerType("red");
          props.setIsLaundaryBreaker(true);
          if (
            props.laundaryLight01 === "disconnect" &&
            props.laundaryLight02 === "disconnect" &&
            props.laundaryWashing === "disconnect"
          ) {
            SwalBreakerOn();
          }
          //start my code for breaker pop up
          if (
            (props.rndLaundary === 47 &&
              props.laundaryWashing === "connected") ||
            (props.rndLaundary === 48 &&
              props.laundaryLight01 === "connected") ||
            (props.rndLaundary === 49 && props.laundaryLight02 === "connected")
          ) {
            props.setLaundaryBreakerType("black");
            props.setIsLaundaryBreaker(false);
            SwalInitial();
          }
          // end my code for breaker pop up
        }
        //start my code for breaker pop up
        if (
          props.laundaryLight01 === "connected" &&
          props.laundaryLight02 === "connected" &&
          props.LaundaryWashing == "connected"
        ) {
          props.setLaundaryBreakerType("black");
          props.setIsLaundaryBreaker(false);
          SwalInitial();
        }
      } else {
        // console.log("run else Six");
        props.setLaundaryBreakerType("red");
        props.setIsLaundaryBreaker(true);
      }
    } else {
      if (
        props.wholeCorruptDevice >= 47 &&
        props.wholeCorruptDevice <= 49 &&
        props.wholeCorruptDevice === rand
      ) {
        SwalInitial();
      } else {
        props.setLaundaryBreakerType("red");
        props.setIsLaundaryBreaker(true);
      }
    }
    //end my code for breaker pop up
  };

  const laundaryBreakerHandlerOn = () => {
    props.setLaundaryBreakerType("black");
    props.setIsLaundaryBreaker(false);
  };

  // console.log(props.kitchenBreakerType)

  // console.log(props.completeRnd,"-------------")
  //                       console.log(props.allCorruptDevice,"-------------wrong")

  // console.log(props.rndLaundary, "random laundary");
  // console.log(props.rndGroupFive, "random group five");
  // console.log(props.rndGroupFour, "random group four");
  // console.log(props.rndGroupThree, "random group three");
  // console.log(props.rndKitchen, "random group kitchen");
  // console.log(props.completeRnd, "random group first");
  // console.log(props.firstGroupBreakerType, "hello type");
  // console.log(props.completeCorruptDevice, "complete corrupt");
  return (
    <div>
      <div className=" text-center">
        <div style={{ display: "none" }}>
          <ResultModel
            isModalOpen={props.isModalOpen}
            setIsModalOpen={props.setIsModalOpen}
            trial={props.groundFloorTrial}
            setTrial={props.setGroundFloorTrial}
            floor={"groundFloor"}
          />
        </div>
        <div
          className="check-exercise-div"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/mask-group");
          }}
        >
          <Avator phase={"game"} />
        </div>

        <hr style={{ marginTop: "2%" }} />
        <div className="legend">
          {/* GROUP 1 */}
          <div className="text-start">
            <Link to="/ground-floor" className="set-link-color">
              Ground Floor
            </Link>
          </div>
          <div className="set-legend-text">
            <p>Group&nbsp;1:</p>
            <p className="grp-detail">Hall, Toilet, Living room</p>
          </div>
          {/* GROUP 2 */}
          <div className="set-legend-text">
            <p>Group&nbsp;2:</p>
            <p className="grp-detail">Kitchen</p>
          </div>
          {/* GROUP 3 */}
          <div className="text-start">
            <Link to="/first-floor" className="set-link-color">
              First Floor
            </Link>
          </div>
          <div className="set-legend-text">
            <p>Group&nbsp;3:</p>
            <p className="grp-detail">Bedroom 01, Bedroom 02</p>
          </div>
          {/* GROUP 4 */}
          <div className="set-legend-text">
            <p>Group&nbsp;4:</p>
            <p className="grp-detail">Hall, Toilet, Bedroom 03</p>
          </div>
          <div className="text-start">
            <Link to="/attic" className="set-link-color">
              Attic Floor
            </Link>
          </div>
          {/* GROUP 5 */}
          <div className="set-legend-text">
            <p>Group&nbsp;5:</p>
            <p className="grp-detail">
              hall, guest room, study room, storage room
            </p>
          </div>
          {/* GROUP 6 */}
          <div className="set-legend-text">
            <p>Group&nbsp;6:</p>
            <p className="grp-detail">laundry</p>
          </div>
          {/* END GROUP */}
        </div>
        <div className="set-main-flex-container" style={{ marginTop: "2rem" }}>
          <div
            className="meter-inner-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/meterGroup.png"
              })`,
            }}
          >
            <>
              {/* MAIN .................................................................. */}
              <div className="groupA">
                <div className="d-flex justify-content-center">
                  <>
                    {props.firstGroupBreakerType === "black" ? (
                      //  && props.completeRnd === props.allCorruptDevice
                      <button
                        className="group-btn position-Bath font-height-width btn-shadow"
                        onClick={groupFirstBreakerHandlerOff}
                      >
                        <img
                          src={breakerOffIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                    ) : (
                      <button
                        className="group-btn position-Bath font-height-width btn-shadow"
                        onClick={groupFirstBreakerHandlerOn}
                      >
                        <img src={breakerOnIMG} alt="" className="breakerImg" />
                      </button>
                    )}
                  </>
                  <>
                    {
                      // ((props.rndKitchen) >= 10 && (props.rndKitchen) <= 15) ? (
                      props.kitchenBreakerType === "black" ? (
                        // && props.rndKitchen === props.kitchenCorruptDevice
                        <button
                          className="group-btn position-living font-height-width btn-shadow"
                          onClick={kitchenBreakerHandlerOff}
                        >
                          <img
                            src={breakerOffIMG}
                            alt=""
                            className="breakerImg"
                          />
                        </button>
                      ) : (
                        <button
                          className="group-btn position-living font-height-width btn-shadow"
                          onClick={kitchenBreakerHandlerOn}
                        >
                          <img
                            src={breakerOnIMG}
                            alt=""
                            className="breakerImg"
                          />
                        </button>
                      )
                      // ) : (
                      //     <button
                      //       className="group-btn position-living font-height-width btn-shadow"
                      //       onClick={kitchenBreakerHandlerOff}
                      //     >
                      //       <img
                      //         src={breakerOffIMG}
                      //         alt=""
                      //         className="breakerImg"
                      //       />
                      //     </button>
                      // )
                    }
                  </>
                  <>
                    {props.groupThreeBreakerType === "black" ? (
                      // && props.rndGroupThree === props.groupThreeCorruptDevice
                      <button
                        className="group-btn position-living font-height-width btn-shadow"
                        onClick={groupThreeBreakerHandlerOff}
                      >
                        <img
                          src={breakerOffIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                    ) : (
                      <button
                        className="group-btn position-living font-height-width btn-shadow"
                        onClick={groupThreeBreakerHandlerOn}
                      >
                        <img src={breakerOnIMG} alt="" className="breakerImg" />
                      </button>
                    )}
                  </>
                </div>
              </div>

              {/* Groups row 2 .................................................................. */}
              <div className="groupB">
                <>
                  {props.groupFourBreakerType === "black" ? (
                    // && props.rndGroupFour === props.groupFourCorruptDevice
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={groupFourBreakerHandlerOff}
                    >
                      <img src={breakerOffIMG} alt="" className="breakerImg" />
                    </button>
                  ) : (
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={groupFourBreakerHandlerOn}
                    >
                      <img src={breakerOnIMG} alt="" className="breakerImg" />
                    </button>
                  )}
                </>
                <>
                  {props.groupFiveBreakerType === "black" ? (
                    //old was // but new is &&
                    // || props.rndGroupFive === props.groupFiveCorruptDevice
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={groupFifthBreakerHandlerOff}
                    >
                      <img src={breakerOffIMG} alt="" className="breakerImg" />
                    </button>
                  ) : (
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={groupFifthBreakerHandlerOn}
                    >
                      <img src={breakerOnIMG} alt="" className="breakerImg" />
                    </button>
                  )}
                </>
                <>
                  {props.laundaryBreakerType === "black" ? (
                    // || props.rndLaundary === props.laundaryCorruptDevice
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={laundaryBreakerHandlerOff}
                    >
                      <img src={breakerOffIMG} alt="" className="breakerImg" />
                    </button>
                  ) : (
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={laundaryBreakerHandlerOn}
                    >
                      <img src={breakerOnIMG} alt="" className="breakerImg" />
                    </button>
                  )}
                </>
                {/* {props.groupGroundFloor === "GroupTwo" && location.pathname ==="/ground-floor/kitchen" ? ( */}
                <>
                  {/* {props.breaker === "kitchen" ? ( */}
                  {/* <>
                        {props.kitchenBreakerType === "black" ||
                        props.rndKitchen === props.kitchenCorruptDevice ? (
                          <button
                            className="group-btn position-Kitchen font-height-width-groupB btn-shadow"
                            onClick={groupFifthBreakerHandlerOff}
                          >
                            <img
                              src={breakerOffIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        ) : (
                          <button
                            className="group-btn position-Kitchen font-height-width-groupB btn-shadow"
                            onClick={groupFifthBreakerHandlerOn}
                          >
                            <img
                              src={breakerOnIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        )}
                      </> */}
                  {/* ) : ( */}
                  {/* <button
                        className="group-btn position-Kitchen font-height-width-groupB "
                        disabled={location.pathname !=="/ground-floor/kitchen"}

                        onClick={() => {
                          props.setBreaker("kitchen");
                        }}
                      >
                        Kitchen
                      </button> */}
                  {/* )} */}
                </>
                {/*}) : (
                  <button
                    className="group-btn position-set2"
                    onClick={() => props.setGroupGroundFloor("GroupTwo")}
                  >
                    Group 2
                  </button>
                )} */}
              </div>
            </>
          </div>
          {/*// ) : (
        //   ""
        // )} */}
        </div>
        <h3 className="set-floor-title">Gound Floor</h3>
        <hr />
      </div>
      {/* to open attic model */}
      {showAttic && (
        <AtticModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}

      {/* to open first floor model  */}

      {showFirstFloor && (
        <FirstFloorModel
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* to open ground floor model  */}

      {/* {
        showGroundFloor && (
          <GroundFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}

      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "attic"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setShowAttic(true)
            navigate("/attic");
          }}
          onMouseEnter={() => setBtnHover("attic")}
          onMouseLeave={() => setBtnHover("")}
        >
          Attic
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "firstFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setshowFirstFloor(true)
            navigate("/first-floor");
          }}
          onMouseEnter={() => setBtnHover("firstFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          First Floor
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "groundFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          style={{ background: "white", color: "#b41c1c" }}
          onClick={() => {
            // setshowGroundFloor(true)

            navigate("/ground-floor");
            console.log("on ground floor");
          }}
          onMouseEnter={() => setBtnHover("groundFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          Ground Floor
        </button>
      </div>
    </div>
  );
};

export default RightNavBar;