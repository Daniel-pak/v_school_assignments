This exercise was created in parts. Originally for practice with angular this exercise was created with basic angular directives and functionality. This exercise was also meant for practice with creating servers. 

The parts:
 
Public Folder:
 
Contains the angular parts for the front end. 
	bountyService.js contains all the $http services for the angular page to grab the information from the server --> database and such. As such, they are also allowed to manipulate information on the database with the other methods of $http Service. 
	index.html contains all the front end html skeletons for the page built with the bootstrap grid system. 
	ng.js contains the $scope service and is linked to BountyService to control the information that is passed to the view. 
	styles.css contains all the styling for the front end. 

routes Folder: 
	Contains the server routing for the end points of the page. This is where all the http requests are handled. 

app.js: 
	The server where all the packages and middlewhere is used. Express is used here. 

package.json: 
	Contains all the necessary packages and installations one would need if they wanted to recreate the page.

models: 
	Contains the function necessary to create the data items (objects) with mongoose Schema and model.

This exercise allowed a lot of practice and clarity with creating Mongoose databases.

