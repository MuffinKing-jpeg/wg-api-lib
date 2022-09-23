import { REGIONS } from './conf/regions.conf';
import { Conf } from './interfaces/conf.interface';
import { CreateLinkInterface } from './interfaces/createLink.interface';

export class wgApi {
  private apiKey!: string;

  constructor(key: string) {
    this.apiKey = key;
    this.createLink({
      game: 'wotblitz',
      region: 'eu',
      type: 'player-search'
    });
  }

  private getApiType(p: CreateLinkInterface['type']): Conf['field'] {
    switch (p) {
      case 'player-search':
        return 'search'
      case 'player-data':
      case 'player-achievement':
        return 'account_id'
    }
  }

  private createLink(p: CreateLinkInterface): any {
    const conf: Conf = {
      region: REGIONS[p.region],
      field: this.getApiType(p.type)
    }
    console.log(conf);

    // let link: any = new URL();
    // return link;
  }

}
