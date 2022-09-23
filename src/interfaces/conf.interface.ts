import { CreateLinkInterface } from './createLink.interface'

export interface Conf {
  region: CreateLinkInterface['region']
  field: 'account_id' | 'search'
}
