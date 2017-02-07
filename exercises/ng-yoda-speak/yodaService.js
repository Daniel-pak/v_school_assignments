angular.module("MyApplication")

.service("yodaService", ["$http", function ($http) {

    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };

    this.getSentence = function(sentence) { 
         return $http.get(`https://yoda.p.mashape.com/yoda?sentence=${sentence}`, config)
    }    
    
}])