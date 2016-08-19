import { observable, action } from 'mobx';

const apiKey = '0f91ca9d-b649-483f-bfa4-af20bd40bc32'

class AppState {
  @observable selectedTeam = null
  @observable apidata = ['Game1', 'Game2']

  constructor() {
    this.fetchData()
  }

  @action('fetch api data')
  fetchData() {
    window.fetch('http://localhost:3333/games')
      .then(games => console.log(games.body))
      .catch(e => console.log(e))

  }

}

export default AppState;
