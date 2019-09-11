function VoteController() {
    this.votes = 5;
    this.clicks = 0

    this.incrementVotes = function () {

    	if (this.clicks === 0){
    		this.votes ++
    		this.clicks +=1
    	} 
    };

    this.decrementVotes = function () {
    	if (this.clicks === 0){
    		this.votes --
    		this.clicks +=1
    	} 
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);