The battleship project felt a lot less daunting to take on because I started off creating test cases for all the functions I needed before writing any code. If there's anything I struggled with while creating the game, it was figuring out how to make touch events that replicated the drag and drop effect on desktop. I managed to get the touch event to pick up the touched div, but I couldn't make it move along the grid, so I used Bernardo Castilho's drag and drop script (https://github.com/Bernardo-Castilho/dragdroptouch) for the mobile touches and it worked perfectly.
If I had to revisit this project later, I would definitely work on improving the AI attacks. I imagine I would store the four possible attacks that one can make after landing a hit and running through those coordinates until I land another hit. Once I land a second hit, I would check to see if the x or y coordinate increased, so that I can determine which direction the ship is facing and based on that information, I would continue along both ends of the axis until I miss. Once both ends result in misses, I would know that the ship was sunk, so I would go back to shooting randomly until I land a hit and repeat the process.


UPDATE 07-03-23
So I decided to finally tackle making a smarter computer player by utilizing a queue for the computer to grab attacks from. If the computer has no attacks in queue, that means that it needs to randomly attack the board until it lands a hit on a ship. Once the computer lands a hit, it will grab the perimeter coordinates by looping through a moveset array and push the new coordinates into the queue. Because the computer has already landed an attack, checking the perimeter coordinates will guarantee at least one hit and once the computer lands two hits, it will use those two coordinates to determine which axis to move along in order to find more hits.