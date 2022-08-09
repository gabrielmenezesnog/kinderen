export default class PreventDefault {
  constructor(navBar, events) {
    this.navBar = document.querySelectorAll(navBar);
    this.events = events;
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.preventDefaultAction = this.preventDefaultAction.bind(this);
  }

  preventDefaultAction(event) {
    event.preventDefault();
    console.log(event.currentTarget.href);
  }

  addEvents() {
    this.navBar.forEach((item) => {
      this.events.forEach((userEvents) => {
        item.addEventListener(userEvents, this.preventDefaultAction);
      });
    });
  }

  init() {
    this.addEvents();
    return this;
  }
}
