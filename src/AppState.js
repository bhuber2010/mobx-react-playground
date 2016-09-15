import { observable, action } from 'mobx';

const api = 'http://localhost.com:3333/games'

class AppState {
  @observable apiData = []

  constructor() {
    // this.fetchData()
  }

  @action('fetch api data')
  fetchData() {
    fetch(api)
    .then(response => {
      response.json()
      .then(games => {
        var sorted = this.sortGames(games)
        console.log(sorted)
        sorted.forEach(game => {
          this.apiData.push(game)
        })
      })
    })
    .catch(e => console.error(e))

  }

  @action('sort games')
  sortGames(games) {
    return games.sort((a, b) => {
        a = new Date(a.MatchTime)
        b = new Date(b.MatchTime)
        return a>b ? 1 : a<b ? -1 : 0;
    })
  }

}

export default AppState;
