export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
  // "BQDKUYSc3dAYRMlyoU3yM2ivtRlrekWnBSyG65pQygpliywl6B0Jwf_dnHAC1qajD5z30GWXV_XfAtUwVxgG5Ve7stn3VPY0CnZs_U1NKCrRq4dQNyr5YxoTJAESbasVthFfLRd8qKanQ0EJPy5IHpADvhWedVo-_jzNDBXbcLk7giloCn_xV3cu5tDscp8nfOKSiOCNNBNNf61Cwmx5",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEMS":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
