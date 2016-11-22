const LOAD_ARTISTS = 'LOAD_ARTISTS';

const loadArtists = (artists) => ({
  type: LOAD_ARTISTS,
  payload: { artists },
  meta: { remote: true },
});
exports.loadArtists = loadArtists;

const fetchArtists = (genreId) => (dispatch) => fetch(`/api/artists/${genreId}`).then((artists) => {
  artists.json().then(theArtists => dispatch(loadArtists(theArtists)));
});
exports.fetchArtists = fetchArtists;

const reducer = (artists = [], action) => {
  switch (action.type) {
    case LOAD_ARTISTS:
      const output = artists.concat(action.payload.artists);
      return output;
    default:
      return artists;
  }
};

exports.default = reducer;
