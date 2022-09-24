import { CreateLinkInterface } from './createLink.interface'

export interface SerachPlayerInterface {
  query: string
  region: CreateLinkInterface['region']
  game: CreateLinkInterface['game']
}
