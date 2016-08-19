import { observable, action } from 'mobx';

class AppState {
  @observable selectedTeam = null
  @observable apidata = ["Game1", "Game2"]

  constructor() {

  }

  @action('toggle timmer')
  toggleTimer() {

  }

}

export default AppState;
