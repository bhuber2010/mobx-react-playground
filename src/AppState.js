import { observable, action } from 'mobx';

class AppState {
  @observable selectedTeam = null

  constructor() {

  }

  @action('toggle timmer')
  toggleTimer() {

  }

}

export default AppState;
