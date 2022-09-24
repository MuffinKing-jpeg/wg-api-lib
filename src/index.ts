import { Fetcher } from './fetcher';
import { GetPlayerAchievementsInterface } from './interfaces/getPlayerAchievements.interface';
import { GetPlayerDataInterface } from './interfaces/getPlayerData.interface';
import { SerachPlayerInterface } from './interfaces/searchPlayer.interface';
import { Linker } from './linkMaker';

export class wgApi {
  private apiKey!: string;
  private linker = new Linker();
  private getData = new Fetcher();

  constructor(key?: string) {
    if (key) {
      this.apiKey = key
    } else {
      throw 'No api key specified'
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
        .subscribe( data => {resolve(data)})
    })
  }

  public searchPlayer(p: SerachPlayerInterface): Promise<any> {
    const url = this.linker.createLink({
      game: p.game,
      region: p.region,
      type: 'player-search'
    }, p.query, this.apiKey)

    return new Promise((resolve) => {
      this.getData
        .getRequest(url)
        .subscribe( data => {resolve(data)})
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
        .subscribe( data => {resolve(data)})
    })
  }

}
