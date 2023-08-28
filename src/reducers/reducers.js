import { FETCH_BOOKS_SUCCESS, TOGGLE_FAVORITE } from "../actions/action";


const initialState = {
    books: [],
    favorites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return { ...state, books: action.payload };
        case TOGGLE_FAVORITE:
            const bookId = action.payload;
            const isFavorite = state.favorites.includes(bookId);
            return {
                ...state,
                favorites: isFavorite
                    ? state.favorites.filter((id) => id !== bookId)
                    : [...state.favorites, bookId],
            };
        default:
            return state;
    }
};

export default reducer;
