function VoteController() {
    this.votes = 5;

    this.incrementVotes = function () {
        this.votes ++
    };

    this.decrementVotes = function () {
        this.votes --
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);