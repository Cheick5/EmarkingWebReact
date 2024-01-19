Editing the pin with 
![[Pasted image 20240119122921.png]]
Makes the request

https://moodlecloud.uai.cl/mod/emarking/ajax/a.php?ids=1961&action=updcomment&cid=229&posx=87&posy=398&bonus=0&format=2&levelid=25914&regradeid=0&regradeaccepted=1&regrademarkercomment=&markerid=80781&width=140&height=100&comment=&windowswidth=835&windowsheight=1080&feedback=&callback=__gwt_jsonp__.P6.onSuccess


for testing, try

localhost/mod/emarking/ajax/debug/a2.php?ids=203&action=updcomment&cid=66&posx=87&posy=398&bonus=0&format=2&levelid=25914&regradeid=0&regradeaccepted=1&regrademarkercomment=&markerid=80781&width=140&height=100&comment=&windowswidth=835&windowsheight=1080&feedback=&callback=__gwt_jsonp__.P6.onSuccess

id is the url id
action is updcomment
cid is the comment id (the on in [[ajaxAllTabs]], object.comments.id)
pox and posy xd
bonus is the Ajustar Puntaje
format is 2 xd
levelid xd

| This stays the same  |   |
|---|---|
|regradeid|0|
|regradeaccepted|1|
|regrademarkercomment||
|markerid|80781|
|width|140|
|height|100|
|comment||
|windowswidth|835|
|windowsheight|1080|


And the response is 

```json
{
  "error": "",
  "values": {
    "message": "Success!",
    "newgrade": 5.5,
    "timemodified": 1705678455
  }
}
```


What pin stores

```json

{
  "id": "65",
  "posx": "0.63054",
  "posy": "0.37928",
  "rawtext": "",
  "format": "2",
  "width": "858",
  "height": "1110",
  "colour": "yellow",
  "path": null,
  "pageno": "1",
  "bonus": "0.00000",
  "maxscore": "2.00000",
  "levelid": "2543",
  "score": "1.00000",
  "leveldesc": "Nivel 2 criterio 2",
  "criterionid": "266",
  "criteriondesc": "Criterio 2",
  "markerid": "2",
  "markername": "Admin User",
  "regradeid": "0",
  "regradecomment": "",
  "motive": "0",
  "regradeaccepted": "0",
  "regrademarkercomment": "",
  "regradelevelid": "0",
  "regrademarkerid": "0",
  "regradebonus": "",
  "timecreated": "1701396805"
}
```