function VoteController() {
    var vm = this;
    vm.votes = 0;

    vm.incrementVotes = function () {
        vm.votes++; 
    };

    vm.decrementVotes = function () {
        vm.votes--;
    };
}
//it seems there is no built-in click count property for ng-click. will write one later

angular
    .module('app')
    .controller('VoteController', VoteController);