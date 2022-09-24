import { CreateLinkInterface } from './createLink.interface'

export interface SearchPlayerInterface {
  query: string
  region: CreateLinkInterface['region']
  game: CreateLinkInterface['game']
}
