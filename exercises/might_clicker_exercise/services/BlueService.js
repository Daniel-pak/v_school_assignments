angular.module("myClicker")

.service("BlueService", function () {

    this.point = 100;
    this.increment = function () {
        this.point++;
        if (this.point === 200) {
            this.reset();
        }
    }
    this.decrement = function () {
        this.point--;
        if (this.point === 0) {
            this.reset();
        }
    }
    this.reset = function () {
        this.point = 100;
    }
})