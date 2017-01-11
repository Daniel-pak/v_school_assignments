var personProfile = { 
    fullName: "Daniel Pak",
    favoriteMusic: { 
        genre: "edm", 
        track: "Alive", 
        artist: "Krewella"
    },
    age: 23, 
    favoriteFriends: ["Joanna Pauline", "Todd", "John"],
    friendsAndTheirFavoriteMusic: [ //second level nesting 
        {
            name: "Joanna Pauline Pingol",
            birthplace: "New York",
            music: "hip-hop",
            favoriteArtists: ["self", "Krewella", "Jhene Aiko"],
            hasMusicExperience: true,
            favoriteArtistsMoreInformation: 
            {
                name: "Jhene Aiko", 
                location: "New York",
                typeOfMusic: "Pop"
            }
        },
        {
            name: "Todd Mclean", 
            birthplace: "New Jersey",
            music: "hip-hop",
            favoriteArtists: ["Drake", "Fetty Wap", "Attack Attack!"],
            hasMusicExperience: true,
            favoriteArtistsMoreInformation: 
            {
                name: "Drake", 
                location: "Canada",
                typeOfMusic: "Hip-hop"
            }
        },
        {
            name: "John Ragbir", 
            birthplace: "New York",
            music: "edm",
            favoriteArtists: ["Krewella","Martin Garrix", "Avicii"],
            hasMusicExperience: false,
            favoriteArtistsMoreInformation: 
            {
                name: "Krewella", 
                location: "New York",
                typeOfMusic: "EDM"
            }
        }
    ],
    myFavoriteMusicSpeak: function() { 
        console.log("Hey my name is " + personProfile.fullName + " and I like to listen to " + personProfile.favoriteMusic.genre);
    },
    highschool: "Brick Memorial High School",
    college: "St. John's University",
    techincalSchool: "V School",
    currentOccupation: "Web Developer",
    pastOccupation: ["Bartender, Server", "Cashier", "Customer Service"],
    currentRoommates: [],
    myFriendsFavoriteMusic: function() { 
        for(i = 0; i < personProfile.friendsAndTheirFavoriteMusic.length; i++){
            console.log(personProfile.friendsAndTheirFavoriteMusic[i].name + " really likes listening to" + " " + personProfile.friendsAndTheirFavoriteMusic[i].music);
        }
    }
}

personProfile.currentRoommates.push("Gabe Hare", "Morgan Handley");
personProfile.middleName = "Karyin";
personProfile.hobby = "Coding";


 


