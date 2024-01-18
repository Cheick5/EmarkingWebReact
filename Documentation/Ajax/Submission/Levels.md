Levels are each of the values that a [[Criterion]] could have.
Each one have its moodle id, a description with a html, its score and comment id
To know which of the levels its selected, we have to map through each and search for the one with its markerid is not 0.


``` json
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
```