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
    
    this._beat = new Beat();
    this._create();
    const lyrics = ["ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    this._beat.addListener(Beat.events.BIT, () => {
      if(count > lyrics.length - 1){
        count = 0;
      }
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[count];
      
      document.querySelector(".main").appendChild(message);
      count++
    })

    this.emit(Application.events.READY);
  }
  _create() {
    
  }
}
