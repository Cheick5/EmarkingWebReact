![[Level.jsx]]This is responsable for the generation of both [[Criterion]] and [[Levels]] with a MAP in [[Rubric]].
It receives as a parameter in the map the map index and the correspondent [[Criterion]]

## Level creation
inside the component, we set up another map to create each level.
Here, if we got a non 0 merkerid, we set its background to white with the className level.
Else, we add to the div the class level_selected, and that makes the background green.
The level name is seted up with the HTML that the level provides with level.description, and de score with level.score
## Score asignation
To find score for each level, in the useEffect on render, we search for the level with the level.markerid != 0. After that, we set te score with the function setScore(levelWithNonZeroMarkerId.score);