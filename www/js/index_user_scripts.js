/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #locals */
    $(document).on("click", "#locals", function(evt)
    {
        openLink();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

    // Wait for device API libraries to load
    //
    //document.addEventListener("deviceready", onDeviceReady, false);

    // Global InAppBrowser reference
    var iabRef = null;

    // Inject our custom JavaScript into the InAppBrowser window
    //
    function replaceHeaderImage() {
        iabRef.executeScript({
            code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
        }, function() {
        //    alert("Image Element Successfully Hijacked");
        });
    }

    function iabClose(event) {
         iabRef.removeEventListener('loadstop', replaceHeaderImage);
         iabRef.removeEventListener('exit', iabClose);
    }

    // device APIs are available
    //
    function openLink() {
         iabRef = window.open('https://www.tripadvisor.co.uk/Restaurants-g186356-Nottingham_Nottinghamshire_England.html', '_blank', 'location=yes');
         iabRef.addEventListener('loadstop', replaceHeaderImage);
         iabRef.addEventListener('exit', iabClose);
    }