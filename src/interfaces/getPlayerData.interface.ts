import { CreateLinkInterface } from './createLink.interface';

export interface GetPlayerDataInterface {
  id: number,
  game: CreateLinkInterface['game'],
  region: CreateLinkInterface['region']
}
