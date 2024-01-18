
This is a GET request to /emarking/ajax/a.php?ids={id}&action=getalltabs

Its responsable of obtaining the the moodledata urls of each page of the test.
## Comment 
Each Image has its url and its comment.
This is each PIN that its on top of the images.
![[Pasted image 20240118113619.png | Three comments in a white canvas]]









## Example of the request
``` json
{
  "error": "",
  "values": [
    {
      "id": "5415",
      "url": "https://moodlecloud.uai.cl/pluginfile.php/226382/mod_emarking/pages/337/149337-10606-1.jpg?r=SXQsDA4IpDsKnbG",
      "width": 1275,
      "height": 1650,
      "totalpages": 2,
      "pageno": "1",
      "showmarker": 1,
      "comments": [
        {
          "id": "228",
          "posx": "0.42324",
          "posy": "0.28918",
          "rawtext": "",
          "format": "2",
          "width": "1179",
          "height": "1525",
          "colour": "yellow",
          "path": null,
          "pageno": "1",
          "bonus": "0.00000",
          "maxscore": "2.00000",
          "levelid": "25922",
          "score": "1.00000",
          "leveldesc": "MAS O MENOS",
          "criterionid": "1755",
          "criteriondesc": "CRITERIO 1",
          "markerid": "80781",
          "markername": "Nicolas Ignacio Soto Leon",
          "regradeid": "0",
          "regradecomment": "",
          "motive": "0",
          "regradeaccepted": "0",
          "regrademarkercomment": "",
          "regradelevelid": "0",
          "regrademarkerid": "0",
          "regradebonus": "",
          "timecreated": "1705519942"
        }
      ]
    },
    {
      "id": "5416",
      "url": "https://moodlecloud.uai.cl/pluginfile.php/226382/mod_emarking/pages/337/149337-10606-2.jpg?r=mExOW6Su9zG9EDT",
      "width": 1275,
      "height": 1650,
      "totalpages": 2,
      "pageno": "2",
      "showmarker": 1,
      "comments": [
        {
          "id": "222",
          "posx": "0.73629",
          "posy": "0.59031",
          "rawtext": "",
          "format": "2",
          "width": "766",
          "height": "991",
          "colour": "yellow",
          "path": null,
          "pageno": "2",
          "bonus": "0.00000",
          "maxscore": "2.00000",
          "levelid": "25926",
          "score": "2.00000",
          "leveldesc": "BIEN",
          "criterionid": "1756",
          "criteriondesc": "CRITERIO 2",
          "markerid": "80781",
          "markername": "Nicolas Ignacio Soto Leon",
          "regradeid": "0",
          "regradecomment": "",
          "motive": "0",
          "regradeaccepted": "0",
          "regrademarkercomment": "",
          "regradelevelid": "0",
          "regrademarkerid": "0",
          "regradebonus": "",
          "timecreated": "1705377433"
        }
      ]
    }
  ]
}
```