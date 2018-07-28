# Tower of Hanoi - Vanilla JS Game

Tower of Hanoi is a logic game where you must move a series of disks from tower a to tower c. You are only allowed to move one disk at a time and a larger disk may not be placed on top of a smaller disk.

The goal was to build the game with as much vanilla JS as possible. I also chose to use my own CSS instead of a library like bootstrap.

While creating the CSS, there was an issue of how to create the towers. I did not want to right away find an image and set as the background, so what I ended up doing was to create the background with a mostly invisible gradient, and leaving the middle as a solid color. I then placed the disks in the on the tower as HTML children and had them centered using flex-box.

While building the JS actions, I encountered an issue where I could click on the disk and move it to the tower, but once it moved, the first click event was not being called again. I remedied this by only having one click event that was called by all of the listeners on each tower. Then by using an active boolean variable, ran through an if-else check list that would determine what action, if any , should be taken. This also helped to make the code DRY - Don't Repeat Yourself.

I did stray away from vanilla JS for the reset, and disk change action. I needed to resolve an issue that if the player changed the number of disks in the middle of a game, it would make sure to empty the board completely. To do this with JS alone, would have required three statements checking each of the towers for child elements, then removing them one at a time. Not very DRY, and even the statements themselves were cumbersome. I incorporated jQuery, there is a .remove() function that can be used to remove all children of a specific element or class in one line. I used that to make sure the board was empty before rebuilding with the new number of requested disks. With it in place, I also used it as the reset button of the game, DRY.
