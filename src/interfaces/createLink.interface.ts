export interface CreateLinkInterface {
  region: 'eu' | 'na' | 'asia'
  type: 'player-search' | 'player-data' | 'player-achievement',
  game: 'wotblitz' | 'worldoftanks'
}
