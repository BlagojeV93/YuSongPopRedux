import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'
import Sound from 'react-native-sound'

import { messageFunction, calculatePoints } from '../../helpers'

import { connect } from 'react-redux';
import { setScore, setScoreArray } from '../actions';

class GamePlay extends Component {

    state = {
        round: 0,
        idClicked: null,
        startingTime: null,
        consecutiveScores: 0
    }

    playSong = () =>
        this.chooseSong = new Sound(
            this.props.playingSongs[this.state.round].path, undefined, () => {
                this.chooseSong.play();
                this.setState({ startingTime: Date.now() })
            }
        )

    componentDidMount() {
        this.playSong()
    }

    renderAllAnswers = () => {
        const { allRounds, playingSongs } = this.props;
        const { round, idClicked } = this.state;
        let currentRound = allRounds[round];
        return (
            currentRound.singleRound.map((option, i) => {
                let artistOrSong = currentRound.showArtistName ? option.artist : option.songTitle;
                let opacity = !idClicked || idClicked == option.id || playingSongs[round].id == option.id ? 1 : 0.2;
                let backgroundColor = idClicked && option.id == playingSongs[round].id ? 'red' : 'black';
                return (
                    <TouchableOpacity disabled={idClicked != null} key={i} onPress={() => this.chooseAnswer(option.id)} style={[styles.btnOption, { opacity, backgroundColor }]}>
                        <Text style={[styles.text, styles.artistOrSongText]}>{artistOrSong}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    renderScoreTimes = () =>
        this.props.scoreArray.map((roundScore, i) => {
            let textStyle = roundScore.score ? styles.timeText : styles.xText
            let text = roundScore.score ? roundScore.responseTime + 's' : 'X'
            return (
                <View key={i} style={styles.calculatedTimesCont}>
                    <Text style={textStyle}>{text}</Text>
                </View>
            )
        })

    chooseAnswer = (idClicked) => {
        const { playingSongs, pointsScored, scoreArray, setScoreArray, setScore } = this.props;
        const { round, startingTime } = this.state;

        this.chooseSong.stop();

        let score = idClicked == playingSongs[round].id;
        let responseTime = Number.parseFloat((Date.now() - startingTime) / 1000).toFixed(2);
        let consecutiveScores = score ? this.state.consecutiveScores + 1 : 0;
        let newScoreArray = scoreArray.concat({ score, responseTime });

        this.setState({ idClicked, consecutiveScores });
        setScoreArray(newScoreArray);
        score && setScore(calculatePoints(responseTime, pointsScored));

        setTimeout(() => {
            if (round < 4) {
                this.setState({ round: round + 1, idClicked: null }, () => this.playSong())
            } else {
                Actions.reset('ScoreSummary')
            }
        }, 3000)
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.topPointsCont}>
                    <Text style={styles.text}>
                        {this.state.idClicked && messageFunction(this.state.consecutiveScores)}
                    </Text>
                    <Text style={styles.text}>
                        {'Poeni: ' + this.props.pointsScored}    
                    </Text>
                </View>
                <View style={styles.calculatedTimesMainCont}>
                    {this.renderScoreTimes()}
                </View>
                <View style={styles.btnOptionsCont}>
                    {this.renderAllAnswers()}
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    topPointsCont: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5
    },
    artistOrSongText: { 
        fontSize: 16,
        color: 'white' 
    },
    calculatedTimesMainCont: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calculatedTimesCont: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'red',
        marginHorizontal: 3
    },
    xText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    timeText: {
        fontSize: 14,
        fontWeight: '300'
    },
    btnOptionsCont: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    btnOption: {
        width: '80%',
        height: '15%',
        justifyContent: 'center',
        borderWidth: 4,
        marginVertical: 8,
        borderRadius: 10,
        borderColor: 'white'
    }
}

const mapStateToProps = (state) => {
    const { allRounds, playingSongs, scoreArray, pointsScored } = state.songs;
    return { allRounds, playingSongs, scoreArray, pointsScored }
}

export default connect(mapStateToProps, { setScore, setScoreArray })(GamePlay)