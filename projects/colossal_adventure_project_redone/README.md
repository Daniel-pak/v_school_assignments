The project Colossal Adventure was created with the premise that - 
The year is 1985. Your job is to build a text-based (console) RPG game.
The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

Using readline-sync, I was able to create a text-based game that allowed for user interactivity. 

First I created a player and monster object at the start of the game. 
	Each will have hitPoints, level, attckPower, isAlive(boolean). 
I then would create the currentMonster through an array and random number generator.

The game starts with a little story line - found on line 155. 
After the user inputs his/her name, the game begins with the walking function.

The walking function allows the user to walk with each press of 'w' and has a 1/4 chance to be attacked. Once the user is attacked, a boolean change occurs and the walkingTillAttacked function is started. 

The walkingTillAttacked function, allows the user to choose if they want to fight or run. This is done through an input of y or n. If the user tries to run, there is a 50% chance that it will be successful, if the run is successful, the walking function is called again. If not, then the fightMonster function is activated. 

The fightMonster function created a total damage variable that takes into account a scaling generator. The user can attack with the 'a' key input. The function then checks if the damage will kill the monster by comparing these values. If the monster lives, he attacks back and vice versa until one dies. If the monster is killed, then the monsters.isAlive boolean is changed to false and the winner function is activated. 

The winner function allows an item is pushed into the players inventory - a text based story then ensues with a congratulatory message. 

However, if the monster's attack is greater than the player health, the death function is activated and the user is prompted to restart the game. 

	

