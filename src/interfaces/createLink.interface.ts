export interface CreateLinkInterface {
  region: 'eu' | 'ru' | 'na' | 'asia'
  type: 'player-search' | 'player-data' | 'player-achievement',
  game: 'wotblitz' | 'worldoftanks'
}
