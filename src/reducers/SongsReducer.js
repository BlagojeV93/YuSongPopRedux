import { LOAD_SONGS, SCORE_ARRAY, SET_SCORE } from '../actions/types'

const initialState = {
    allRounds: [],
    playingSongs: [],
    scoreArray: [],
    pointsScored: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SONGS:
            return { ...state, allRounds: action.payload.allRounds, playingSongs: action.payload.playingSongs }
        case SCORE_ARRAY:
            return { ...state, scoreArray: action.payload }
        case SET_SCORE:
            return { ...state, pointsScored: action.payload }
        default:
            return { ...state }
    }
}