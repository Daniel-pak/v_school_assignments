Enemy generator was created to work with constructor functions and random number generators. 

The parameters to this warm up was to create 100 monster objects with 3 set types: Ancient Dragon, Prowler, Mighty Grunt, then based on the established type, set hitpoints to a range, finally set the defense to the random hitpoints * 3. 

The chooseMonster function created a monster when called by choosing an index of the array of monsters by using the Math object and it's .floor() and .random() methods.

The selectHitpoints function then takes the type parameter and then returns a random hit points based on the type.

The monster constructor function was then used calling on both the above functions to create it's type and hitpoints properties each time a new object was instantiated. Finally adding a defense property by multiplying the hitpoints by 3. 

Finally, to create the 100 instances, an empty array was declared and using a while loop- each of the monsters was instantiated and pushed to this new array.


