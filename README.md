# GameProject

The project is a recreation of Towers of Hanoi game.

The game objective is to move a number of disks from the left peg, or tower, to the right peg. You can only move one disk at a time and a larger disk may never be put on top of a smaller disk.

When the page loads, it will initiall load with 4 disks. There is a board that will show the minimum number of moves it will take to clear the board. The game will keep track of every move that you make.

If you click anywhere on the tower, you will grab or drop a disk.

Once the disks are on the tower in order, it will list the number of move taken.

The project was written with CSS HTML and Javascript.


Had a few hard issues that required extra attention. While styling the 'towers' there was an issue with how to create them. Instead of using another appication and setting it as a BG image, I made the posts by making a background with a linear gradient. This allowed me to create an image at the exact pixels I wanted.

Another issue came with click events. There was a problem with how the events were interacting. If I clicked on one, the other worked, but it was not allowing me to click, and was running the second event when clicking on the item again. I remedied this by having the click evens all call the same function and ran through some if-else statements.