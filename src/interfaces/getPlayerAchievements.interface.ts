import { CreateLinkInterface } from './createLink.interface'

export interface GetPlayerAchievementsInterface {
  id: number
  game: CreateLinkInterface['game']
  region: CreateLinkInterface['region']
}
