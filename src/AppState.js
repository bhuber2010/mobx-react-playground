import { observable, action } from 'mobx';

// [{ID: 1, HomeTeam: 'Test', AwayTeam: 'Test2'}]

class AppState {
  @observable apiData = []

  constructor() {
    this.fetchData()
  }

  @action('fetch api data')
  fetchData() {
    // $.ajax('http://localhost:3333/games').done(response => {
    //   console.log(response);
    // });

    fetch('http://localhost:3333/games')
    .then(response => {
      response.json()
      .then(games => {
        games.forEach(game => {
          this.apiData.push(game)
        })
      })
    })

  }

}

export default AppState;
