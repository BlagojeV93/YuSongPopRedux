   let allRounds = [];
    let songsToScore = [];
    let singleRound = [];
    let showArtistName = Math.random() >= 0.5;

    while (allRounds.length < 5) {
        let distinctArtist = data.distinctArtist;
        let randomGender = Math.random() >= 0.5;
        let filteredArray = distinctArtist ? data.songList.filter(a => a.maleArtist == randomGender) : data.songList;

        if (singleRound.length == 4) {
            let singleRoundObj = { showArtistName, singleRound };
            allRounds.push(singleRoundObj);
            songsToScore.push(singleRound[Math.round(Math.random() * 3)])
            singleRound = [];
            showArtistName = Math.random() >= 0.5;
        }

        while (singleRound.length < 4) {
            let randomPosition = Math.floor(Math.random() * filteredArray.length);
            let choosenSong = filteredArray[randomPosition];
            let checkForIDArray = songsToScore.concat(singleRound);

            let foundID = checkForIDArray.some((el) => { return el.id === choosenSong.id })
            let foundName = singleRound.some((el) => {
                if (distinctArtist && showArtistName) {
                    return el.name === choosenSong.name
                } else {
                    return false;
                }
            });

            if (!foundID && !foundName) {
                singleRound.push(choosenSong);
            }
        }
    }