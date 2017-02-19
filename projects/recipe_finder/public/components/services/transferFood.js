angular.module("RecipeApp")

.service("PassFood", function () {

    this.id;

    this.savingRID = function (rId) {
        this.id = rId;
    }
    
    this.passRID = function() { 
        return this.id;
    }

})