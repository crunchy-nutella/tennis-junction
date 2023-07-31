//iife - immediately invoked function expression:
(function(global) {
    //Set up namespace for our utility
    var ajaxUtils = {};
    //Returns an HTTP request object
    //not attached to ajaxUtils, so not available to outside world
    function getRequestObject() {
        if (window.XMLHttpRequest) return new XMLHttpRequest();
        else {
            global.alert("Ajax is not supported");
            return null;
        }
    }
    ajaxUtils.doesFileExist = function(urlToFile) {
        var http = getRequestObject();
        http.open("HEAD", urlToFile, false);
        http.send();
        if (http.status != 404) return true;
        else return false;
    };
    //attached to ajaxUtils, so will be visible
    ajaxUtils.sendGetRequest = function(requestUrl, sync, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange = function() {
            handleResponse(request, responseHandler);
        };
        request.open("GET", requestUrl, sync); //true means let it be asynchronous
        request.send(null); //for POST only
    };
    //I THINK THIS FUNCTION THAT I WROTE IS MAKING IT SO THAT THE NEW DOLL ISN'T WORKING. TBD
    ajaxUtils.post = function(postUrl, postContent) {
        var request = getRequestObject();
        request.onprogress = function(event) {
            console.log(`Uploaded ${event.loaded} of ${event.total} bytes`);
        };
        request.onload = function() {
            console.log(`Upload finished successfully.`);
        };
        request.open("POST", postUrl, false);
        console.log(request);
        request.send(postContent);
        console.log(request);
    };
    //Only calls user provided 'responseHandler'
    //function if response is ready and not an error
    function handleResponse(request, responseHandler) {
        if (request.readyState == 4 && request.status == 200) responseHandler(request);
    }
    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
})(window);

//# sourceMappingURL=index.22913c33.js.map
