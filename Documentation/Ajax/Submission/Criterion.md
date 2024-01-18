Criterion are each of the subject that a student is evaluated on.
Every Rubric is made of at least one criterion, and each criterion is made of at least 2 [[Levels]]

![[Pasted image 20240118110056.png]]
In this Image, the criterion are each file of the grid.

In [[ajaxSubmission]], the criterions are saved like "rubric", which is a list with the unique ids of the moodle database

``` json
    "rubric": {
      "1755": {
        "id": "1755",
        "description": "CRITERIO 1",
        "levels": [...],
        "maxscore": "2.00000",
        "rubricname": "PLANTILLA 2 ",
        "bonus": "0.00000",
        "sortorder": "1",
        "regradeid": "0",
        "motive": "0",
        "regradecomment": null,
        "regrademarkercomment": "",
        "regradeaccepted": "0",
        "markerassigned": 1
      },
      "1756": {...}
    },
```
The only way to know if a Criterion is Marked, is with the markerassigned tag, or by watching its [[Levels]] 
The only way to know if a Criterion is in process of regrade is by watching the regradecomment, regrademarkercomment or regradeaccepted tabs