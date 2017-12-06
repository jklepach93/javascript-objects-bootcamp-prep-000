var playlist = {
  artist: 'song'
}
function updateObjectWithKeyAndValue(playlist, artist, song) {
return Object.assign({}, playlist, { [artist]: song })
