# etch-a-sketch
This is my etch-a-sketch project, part of the Odin Project curriculum. By the end of the project I should have a fully functional etch-a-sketch app.

preini:
-- container div for the etch a sketch grid
-- button that queries the size of the grid when clicked (limit up to 100)
-- add style classes for black and white (background-color:black; background-color:white)

initialization:
-- default behavior: create 16 x 16 square of divs in the container div (script)

event listeners:
-- each div listens for mouse hover and changes the class upon activation.
-- button prompt stores user input as "x". deletes all divs descendant to the container first. evoke a for loop which continues for as long as "i" is less than x. {create x divs and append them to the container /continue}

extra credit...?
-- randomizing the rgb value of a hovered square. random number for each value: R G and B and then assign variables and overwrite the value on each individual div's class. this requires a inline application of style via javascript as opposed to assigning a new class. Unless there's a css function for this?

-- add a progressive darkening effect. On pass: add 10% more black to the square. After 10 passes, the square is completely black.
maybe we can do this by restricting the range of the first batch of colors? divide rgb's range into 10 parts, each with a range of 25, and assign a variable which keeps track of which part the div is on. on hover, the event listener checks what value the div contains, if it's 9, then change it to 10 and make it black, otherwise it multiplies it by 25.5(?) and selects a new random rgb value from the range