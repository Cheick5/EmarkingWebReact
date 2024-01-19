Handles both the ajax request and the display of the whole app.

The Ajax request is called in the useEffect when te app renders. Due to the async nature of JS, it has to have some kind of way of waiting the request to be fulfilled. That is with the finally{} command int the request.

For the request to be shared between all of the components, we set up a Context and give it the [[ajaxSubmission]] and [[ajaxAllTabs]]