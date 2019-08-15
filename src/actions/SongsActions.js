import { LOAD_SONGS, SCORE_ARRAY, SET_SCORE } from './types'
import { data } from '../../helpers/TestList'
import { shuffle } from '../../helpers'

import RNFetchBlob from 'rn-fetch-blob';
import { Actions } from 'react-native-router-flux'

export const loadGameSongs = () => async dispatch => {
    let songList = data.songList;
    let distinctArtist = data.distinctArtist;

    let femaleArtistArray = distinctArtist ? songList.filter(a => a.maleArtist == false) : [];
    let maleArtistArray = distinctArtist ? songList.filter(a => a.maleArtist == true) : [];

    let allRounds = [];
    let songsToScore = [];

    let specialRound = Math.floor(Math.random() * 5)

    for (let i = 0; i < 5; i++) {
        let singleRound = [];
        let showArtistName = data.distinctArtist ? Math.random() >= 0.5 : false;
        let randomGender = Math.random() >= 0.5;
        let songArray = distinctArtist ? randomGender ? maleArtistArray : femaleArtistArray : songList;
        let randomPosition = Math.floor(Math.random() * songArray.length);
        let choosenSong = songArray[randomPosition];
 
        songsToScore.push(choosenSong);
        singleRound.push(choosenSong);
        songArray.splice(randomPosition, 1);

        let otherSongArray = [...songArray];

        while(singleRound.length < 4){
            if(specialRound == i && distinctArtist && !showArtistName){
                let evilArray = songArray.filter(song => song.artist == choosenSong.artist);
                if(evilArray.length > 0 && singleRound.length < 2){
                    let evilSong = evilArray[Math.floor(Math.random() * evilArray.length)];
                    let indexToSplice = otherSongArray.findIndex(song => song.id == evilSong.id);
                    singleRound.push(evilSong);
                    otherSongArray.splice(indexToSplice, 1);
                }
            }

            let otherRandomPosition = Math.floor(Math.random() * otherSongArray.length)
            let otherSong = otherSongArray[otherRandomPosition];
            let foundName = singleRound.some((el) => {
                if (distinctArtist && showArtistName) {
                    return el.artist === otherSong.artist
                } else {
                    return false;
                }
            });
            if(!foundName){
                singleRound.push(otherSong);
                otherSongArray.splice(otherRandomPosition, 1)
            }
        }      
        if(singleRound.length == 4){
            singleRound = shuffle(singleRound);
            let singleRoundObj = { showArtistName, singleRound };
            allRounds.push(singleRoundObj)
            singleRound = []
        }
    }

    let playingSongs = await this.downloadMp3Files(songsToScore);
    dispatch({ type: LOAD_SONGS, payload: { allRounds, playingSongs } })
}

export const setScoreArray = (scoreArr) => {
    return {
        type: SCORE_ARRAY,
        payload: scoreArr
    }
}

export const setScore = (score) => {
    return {
        type: SET_SCORE,
        payload: score
    }
}

export const emptyStateForNewRound = () => async dispatch => {
    dispatch({ type: LOAD_SONGS, payload: { allRounds: [], playingSongs: [] } });
    dispatch({ type: SCORE_ARRAY, payload: [] });
    dispatch({ type: SET_SCORE, payload: 0 });
    Actions.reset('StartPage');
}

downloadMp3Files = async (arr) => {
    let songsForGamePlay = arr;
    for (let i = 0; i < songsForGamePlay.length; i++) {
        let song = songsForGamePlay[i].mp3;
        await RNFetchBlob.config({ fileCache: true })
            .fetch('GET', song, {})
            .then((res) => {
                songsForGamePlay[i].path = res.data;
            }).catch(e => console.log(e, 'Error iz downloadMP3s'))
    }
    return songsForGamePlay
}