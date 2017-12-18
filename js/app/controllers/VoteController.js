function VoteController() {
    this.votes = 0;

    this.incrementVotes = () => {
      this.votes++;
    };

    this.decrementVotes = () => {
      this.votes--
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
