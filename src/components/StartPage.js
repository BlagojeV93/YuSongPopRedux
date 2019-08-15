import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import { Actions } from 'react-native-router-flux'
import RNFetchBlob from 'rn-fetch-blob'

import { connect } from 'react-redux';
import { loadGameSongs } from '../actions';

class StartPage extends Component {


    componentDidMount() {
        this.props.loadGameSongs();
    //     RNFetchBlob.fs.df()
    //     .then((response) => {
    //         console.log('Free space in bytes: ' + JSON.stringify(response));
    // });
   
    }

    render() {
  
        return (
            <View style={styles.container}>
                {this.props.playingSongs.length == 0 ?
                    <ActivityIndicator size='large' color='black' />
                    :
                    <TouchableOpacity onPress={() => Actions.reset('GamePlay')} style={styles.touchable}>
                        <Text style={styles.welcome}>PLAY IT!</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchable: {
        width: '40%',
        height: '10%',
        backgroundColor: 'gray',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        color: 'white'
    },
}

const mapStateToProps = (state) => {
    const { allRounds, playingSongs } = state.songs;
    return { allRounds, playingSongs }
}

export default connect(mapStateToProps, { loadGameSongs })(StartPage)