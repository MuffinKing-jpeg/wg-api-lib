import { Fetcher } from './fetcher.js';
import { GetPlayerAchievementsInterface } from './interfaces/getPlayerAchievements.interface';
import { GetPlayerDataInterface } from './interfaces/getPlayerData.interface';
import { SearchPlayerInterface } from './interfaces/searchPlayer.interface';
import { Linker } from './linkMaker.js';

export class wgApi {
  private apiKey!: string;
  private linker ;
  private getData;

  constructor(key?: string) {
    const regExp = /[A-Za-z0-9]/g

    if (key && key.length === 32 && key.match(regExp)?.length === key.length) {
      this.apiKey = key.toLowerCase()
      this.getData = new Fetcher();
      this.linker = new Linker()
    } else {
      throw 'Incorrect api key'
    }
  }

  public getPlayerData(p: GetPlayerDataInterface): Promise<any> {
    const url = this.linker.createLink({
      game: p.game,
      region: p.region,
      type: 'player-data'
    }, `${p.id}`, this.apiKey )

    return new Promise((resolve) => {
      this.getData
        .getRequest(url)
        .then( data => {resolve(data)})
    })
  }

  public searchPlayer(p: SearchPlayerInterface): Promise<any> {
    const url = this.linker.createLink({
      game: p.game,
      region: p.region,
      type: 'player-search'
    }, p.query, this.apiKey)

    return new Promise((resolve) => {
      this.getData
        .getRequest(url)
        .then( data => {resolve(data)})
    })
  }

  public getPlayerAchievements(p: GetPlayerAchievementsInterface): Promise<any> {
    const url = this.linker.createLink({
      game: p.game,
      region: p.region,
      type: 'player-achievement'
    }, `${p.id}`, this.apiKey)

    return new Promise((resolve) => {
      this.getData
        .getRequest(url)
        .then( data => {resolve(data)})
    })
  }

}
