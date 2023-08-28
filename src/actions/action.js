export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const fetchBooksSuccess = (books) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
});

export const toggleFavorite = (bookId) => ({
    type: TOGGLE_FAVORITE,
    payload: bookId,
});
