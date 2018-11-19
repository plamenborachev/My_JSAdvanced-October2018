let SoftUniFy = require("./app");
let assert = require("chai").assert;

describe("SoftUniFy", function () {
    let sofunify;
    beforeEach(() => {
        sofunify = new SoftUniFy();
    });

    describe("initialization tests", function () {
        it('should contain allSongs property that is initialized as an empty object', function () {
            assert.deepEqual(sofunify.allSongs, {});
        });
    });

    describe("downloadSong", function () {
        it('should return...', function () {
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            assert.equal(sofunify.allSongs['Eminem'].rate, 0);
            assert.equal(sofunify.allSongs['Eminem'].votes, 0);
            assert.equal(sofunify.allSongs['Eminem'].songs.length, 1);
        });
        // it('should return...', function () {
        //     sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        //     sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        //     assert.equal(sofunify.allSongs['Eminem'].rate, 0);
        //     assert.equal(sofunify.allSongs['Eminem'].votes, 0);
        //     assert.equal(sofunify.allSongs['Eminem'].songs.length, 2);
        // });
        it('should return...', function () {
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            assert.equal(sofunify.allSongs['Eminem'].rate, 0);
            assert.equal(sofunify.allSongs['Eminem'].votes, 0);
            assert.equal(sofunify.allSongs['Eminem'].songs.length, 2);
            assert.equal(sofunify.allSongs['Dub Fx'].rate, 0);
            assert.equal(sofunify.allSongs['Dub Fx'].votes, 0);
            assert.equal(sofunify.allSongs['Dub Fx'].songs.length, 1);
        });
        //todo should return the entire Class

    });

    describe("playSong", function () {
        it('should return...', function () {
            assert.equal(sofunify.playSong("Song"), "You have not downloaded a Song song yet. Use SoftUniFy's function downloadSong() to change that!");
        });
        // it('should return...', function () {
        //     sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        //     assert.equal(sofunify.playSong("Venom"), "Eminem:\nVenom - Knock, Knock let the devil in...\n");
        // });
    });

    describe("songList", function () {
        it('should return...', function () {
            assert.equal(sofunify.songsList, "Your song list is empty");
        });
        it('should return...', function () {
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            assert.equal(sofunify.songsList, "Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...");
        });
    });

    describe("rateArtist", function () {
        it('should return...', function () {
            assert.equal(sofunify.rateArtist('Eminem'), "The Eminem is not on your artist list.");
        });
    });
});