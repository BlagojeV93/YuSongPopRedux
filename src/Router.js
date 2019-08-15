import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import StartPage from './components/StartPage';
import GamePlay from './components/GamePlay'
import ScoreSummary from './components/ScoreSummary'

const RouterComponent = () => {
    return (
        <Router>
            <Stack hideNavBar>
                <Scene key='StartPage' component={StartPage} initial />
                <Scene key='GamePlay' component={GamePlay} />
                <Scene key='ScoreSummary' component={ScoreSummary} />
            </Stack>
        </Router>
    )
}

export default RouterComponent;