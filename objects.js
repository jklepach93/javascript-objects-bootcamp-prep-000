var playlist = {
  artist: 'song'
}
function updatePlaylist (playlist,artist,song) {
  return Object.assign({}, playlist, { [artist]: song })
}
function removeFromPlaylist (playlist,artist,song) {
  delete removeFromPlaylist.playlist;
  delete removeFromPlaylist.artist
  return Object.assign({}, playlist, { [artist]: song })
}
