/* eslint-disable no-unused-vars */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  addListener(name, cb) {
    if (this.events[name] === undefined) {
      this.events[name] = [cb];
    } else {
      this.events[name].push(cb);
    }
  }

  emit(event, ...args) {
    this.events[event].forEach((callback) => {
      callback(...args);
    });
  }
}
