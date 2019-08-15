import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import RNFetchBlob from 'rn-fetch-blob'

import { connect } from 'react-redux';
import { emptyStateForNewRound } from '../actions'

class ScoreSummary extends Component {

    componentDidMount() {
        this.props.playingSongs.map(song => RNFetchBlob.fs.unlink(song.path))
    }

    renderAllScores = () =>
        this.props.scoreArray.map((scoreRound, i) => {
            const { playingSongs } = this.props;
            let backgroundColor = scoreRound.score ? 'red' : 'black';
            return (
                <View key={i} style={[styles.singleSongCont, { backgroundColor }]}>
                    <View style={styles.songArtistCont}>
                        <Text style={styles.artistText}>{playingSongs[i].artist}</Text>
                        <Text style={styles.songText}>{playingSongs[i].songTitle}</Text>
                    </View>
                    <View style={styles.timeCont}>
                        <Text style={styles.timeText}>{scoreRound.responseTime + 's'}</Text>
                    </View>
                </View>
            )
        })

    playAgain = () => {
        this.props.emptyStateForNewRound()
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.scoresMainCont}>
                    <View style={styles.scoreSumCont}>
                        <Text style={styles.textTitle}>Osvojeno poena:</Text>
                        <Text style={[styles.textTitle, { fontWeight: 'bold' }]}>{this.props.pointsScored}</Text>
                    </View>
                    <View style={styles.scoreByRoundCont}>
                        <View style={styles.scoreByRoundInnerCont}>
                            {this.renderAllScores()}
                        </View>
                    </View>
                </View>
                <View style={styles.btnMainCont}>
                    <TouchableOpacity onPress={() => this.playAgain()} style={styles.playAgainBtn}>
                        <Text style={styles.playAgainTxt}>PLAY AGAIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    scoresMainCont: {
        flex: 5,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreSumCont: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 20,
        color: 'black',
        marginRight: 5
    },
    scoreByRoundCont: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    scoreByRoundInnerCont: {
        borderWidth: 4,
        borderColor: 'white'
    },
    singleSongCont: {
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    songArtistCont: {
        width: '70%',
        height: '70%',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    timeCont: {
        width: '30%',
        alignItems: 'flex-end'
    },
    artistText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    songText: {
        color: 'white'
    },
    timeText: {
        color: 'white',
    },
    btnMainCont: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playAgainBtn: {
        width: '50%',
        height: '50%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    playAgainTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
}

const mapStateToProps = (state) => {
    const { playingSongs, scoreArray, pointsScored } = state.songs;
    return { playingSongs, scoreArray, pointsScored }
}

export default connect(mapStateToProps, { emptyStateForNewRound })(ScoreSummary)