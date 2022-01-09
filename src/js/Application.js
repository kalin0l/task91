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
    this.emit(Application.events.READY);
    this._beat = Beat.events.BIT;
    this._create();
  }
  _create(){
    const lyrics = ["Ah","ha","ha","ha","stayin' alive","stayin' alive"];
    let count = 0;
    for(count;count < lyrics.length - 1;count++){
      const message = document.createElement("div");
       message.classList.add("message");
       message.innerText = lyrics[count];
       document.querySelector(".main").appendChild(message);
     }
  }
}
