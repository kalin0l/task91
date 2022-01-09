import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const lyrics = ["Ah","ha","ha","ha","stayin' alive","stayin' alive"];
    let count = 0;
    

    for(count;count < lyrics.length - 1;count++){
     const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[count];
      document.querySelector(".main").appendChild(message);
    }

    this.emit(Application.events.READY);
    this._beat = Beat.events.BIT;
  }
  _create(){
    
  }
}
