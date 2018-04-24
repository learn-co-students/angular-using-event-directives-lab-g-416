function VoteController() {
    this.votes = 0;
    this.plusClicks = 0;
    this.minusClicks = 0;

    this.incrementVotes = function () {
      if (this.plusClicks === 0) {
        this.votes++;
        this.plusClicks++;
      } else {
        this.votes--;
        this.votes++;
      }
    };

    this.decrementVotes = function () {
      if (this.minusClicks === 0) {
        this.votes--;
        this.minusClicks++;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
