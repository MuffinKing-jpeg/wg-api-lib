
import { REGIONS } from './conf/regions.conf.js';
import { Conf } from './interfaces/conf.interface.js';
import { CreateLinkInterface } from './interfaces/createLink.interface';
import { GetApiPathInterface } from './interfaces/getApiPath.interface';

export class Linker {

  private getApiFields(p: CreateLinkInterface['type']): Conf['field'] {
    switch (p) {
      case 'player-search':
        return 'search'
      case 'player-data':
      case 'player-achievement':
        return 'account_id'
    }
  }

  private getApiPath(p: GetApiPathInterface): Conf['path'] {
    let game: () => 'wot' | 'wotb' = () => {
      switch (p.game) {
        case 'worldoftanks':
          return 'wot'
        case 'wotblitz':
          return'wotb'
      }
    }

    let type: () => 'list' | 'info' | 'achievements' = () => {
      switch (p.type) {
        case 'player-search':
          return 'list'
        case 'player-data':
          return'info'
        case 'player-achievement':
          return 'achievements'

      }
    }

    return `${game()}/account/${type()}/`
  }

  public createLink(p: CreateLinkInterface, q: string, apiKey: string): any {
    const Conf: Conf = {
      region: REGIONS[p.region],
      field: this.getApiFields(p.type),
      path: this.getApiPath({
        game: p.game,
        type: p.type
      }),
      game: p.game
    }
    let link = new URL(`https://api.${Conf.game}.${Conf.region}`)

    const LinkParams = new URLSearchParams();

    LinkParams.append('application_id', apiKey)
    LinkParams.append(Conf.field, q)

    link.pathname = Conf.path
    link.search = LinkParams.toString()

    // Players search:
    // https://api.worldoftanks.ru/wot/account/list/?application_id=<API-key>&search=<Query>

    // Player stats:
    //https://api.worldoftanks.ru/wot/account/info/?application_id=<API-key>&account_id=<account-id>

    // Player achievements:
    // https://api.wotblitz.ru/wotb/account/achievements/?application_id=<API-ket>&account_id=<account-id>
    return link.toString();
  }
}
