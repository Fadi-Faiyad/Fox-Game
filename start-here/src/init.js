import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";
// are game well run on a timer, instead of useing setTimeOut well use a ver to const def are time at 3 sec
// TICK_RATE is capel bc it well foreve be defined in are code

function init() {
  console.log("starting game");
  initButtons(handleUserAction);
  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
      // the if is checks if its time to excute
    }

    requestAnimationFrame(nextAnimationFrame);
    // requestAnimationFrame is buit in request
    // it means that if the website is ideal(not doing anything) call nextAnimationFrame
  }
  nextAnimationFrame();
}

init();
