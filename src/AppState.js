import { observable, action } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable name = '';
  interval = null;

  constructor() {

  }

  @action('toggle timmer')
  toggleTimer() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    } else {
      this.interval = setInterval(() => {
        this.timer += 1
      }, 1000)
    }
  }

  increaseTimer() {
    this.timer += 1
  }

  decreaseTimer() {
    this.timer -= 1
  }

  resetTimer() {
    this.timer = 0
  }

  setName(name) {
    this.name = name
  }
}

export default AppState;
