
This is a GET request to /emarking/ajax/a.php?ids={id}&action=getsubmission

This gives a json, where "values" has the whole information about the quantification of the tests.

i.e. the grades, times, [[Criterion]] and [[Levels]] with each respective pts.




## Example of the request
```json
{
  "error": "",
  "values": {
    "id": "1979",
    "finalgrade": "5.50",
    "timecreated": "1704987369",
    "timemodified": "1705519942",
    "feedback": "",
    "qualitycontrol": "0",
    "activityname": "Pruebasss",
    "grademin": "1.00",
    "grademax": "7.00",
    "firstname": "Nicolás Felipe",
    "lastname": "Álvarez Arias",
    "studentid": "149337",
    "email": "nicolalvarez@alumnos.uai.cl",
    "coursename": "CORE: ÉTICA Sec.7 STGO S-SEM. 2023/2",
    "courseshort": "3765-S-CORE301-7-2-2023",
    "courseid": "10606",
    "custommarks": "",
    "regraderestrictdates": "0",
    "regradesopendate": "1705001400",
    "regradesclosedate": "1710185400",
    "markingduedate": "1705001400",
    "drafts": "1979",
    "coursemodule": "14966",
    "markerfirstname": "Nicolas Ignacio",
    "markerlastname": "Soto Leon",
    "markeremail": "nicolassoto@alumnos.uai.cl",
    "markerid": "80781",
    "rubric": {
      "1755": {
        "id": "1755",
        "description": "CRITERIO 1",
        "levels": [
          {
            "id": "25921",
            "description": "<div class=\"text_to_html\">MAL</div>",
            "score": "0.00000",
            "commentid": "0",
            "commenttext": null,
            "markerid": 0,
            "commentpage": "0"
          },
          {
            "id": "25922",
            "description": "<div class=\"text_to_html\">MAS O MENOS</div>",
            "score": "1.00000",
            "commentid": "228",
            "commenttext": "",
            "markerid": "80781",
            "commentpage": "1"
          },
          {
            "id": "25923",
            "description": "<div class=\"text_to_html\">BIEN </div>",
            "score": "2.00000",
            "commentid": "0",
            "commenttext": null,
            "markerid": 0,
            "commentpage": "0"
          }
        ],
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
      "1756": {
        "id": "1756",
        "description": "CRITERIO 2",
        "levels": [
          {
            "id": "25924",
            "description": "<div class=\"text_to_html\">MAL</div>",
            "score": "0.00000",
            "commentid": "0",
            "commenttext": null,
            "markerid": 0,
            "commentpage": "0"
          },
          {
            "id": "25925",
            "description": "<div class=\"text_to_html\">MAS O MENOS</div>",
            "score": "1.00000",
            "commentid": "0",
            "commenttext": null,
            "markerid": 0,
            "commentpage": "0"
          },
          {
            "id": "25926",
            "description": "<div class=\"text_to_html\">BIEN</div>",
            "score": "2.00000",
            "commentid": "222",
            "commenttext": "",
            "markerid": "80781",
            "commentpage": "2"
          }
        ],
        "maxscore": "2.00000",
        "rubricname": "PLANTILLA 2 ",
        "bonus": "0.00000",
        "sortorder": "2",
        "regradeid": "0",
        "motive": "0",
        "regradecomment": null,
        "regrademarkercomment": "",
        "regradeaccepted": "0",
        "markerassigned": 1
      }
    },
    "answerkeys": [],
    "changelog": null,
    "hidemarks": false
  }
}
```