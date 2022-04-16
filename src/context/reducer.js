export const initialState = {
	user: null,
	playlists: [],
	recentlyPlayed: null,
	topTracksLongTerm: null,
	topTracksMediumTerm: null,
	topTracksShortTerm: null,
	topArtistsLongTerm: null,
	topArtistsMediumTerm: null,
	topArtistsShortTerm: null,
	// token: 'BQDsTjsBYIK37J5F4Ceoq_HwiLvgt7xXKyXSARZYOyrcg2Z2rR…xrUGQ51D99tx3JXD94vwW7__3LdgpHHeZPIgEQzDBbyxeEPQX',
}

const reducer = (state, action) => {
	console.log('action', action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			};

		case 'SET_RECENTLYPLAYED':
			return {
				...state,
				recentlyPlayed: action.recentlyPlayed
			};

		case "SET_TOPTRACKS_LONG_TERM":
			return {
				...state,
				topTracksLongTerm: action.topTracksLongTerm,
			};

		case "SET_TOPTRACKS_MEDIUM_TERM":
			return {
				...state,
				topTracksMediumTerm: action.topTracksMediumTerm,
			};

		case "SET_TOPTRACKS_SHORT_TERM":
			return {
				...state,
				topTracksShortTerm: action.topTracksShortTerm,
			};

		case "SET_TOPARTISTS_LONG_TERM":
			return {
				...state,
				topArtistsLongTerm: action.topArtistsLongTerm,
			};

		case "SET_TOPARTISTS_MEDIUM_TERM":
			return {
				...state,
				topArtistsMediumTerm: action.topArtistsMediumTerm,
			};

		case "SET_TOPARTISTS_SHORT_TERM":
			return {
				...state,
				topArtistsShortTerm: action.topArtistsShortTerm,
			};

		default:
			return state;
	}
}

export default reducer;