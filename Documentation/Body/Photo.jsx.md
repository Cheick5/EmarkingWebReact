Here we map the images acquired in [[ajaxAllTabs]].

After that, we do a nested loop mapping the [[ajaxAllTabs#Comment|Comment]] in the image and setting the pins to the position in the json.

## mouseHover

In this component we also handle the hover of each of the pins, calling the functions handleMouseOver and handleMouseOut.

### handleMouseOver
	Change the cursor to an all-scroll pointer
	Set up a dotted border
	Search for the criterion that has an id matching with the comment.criterionid
	Changes the background colour to orange
## handleMouseOut
	Revert MouseOver changes