import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    this.emit(Beat.events.READY);
    setInterval(() => {
      console.log("bit");
    }, 600);
  }
}
