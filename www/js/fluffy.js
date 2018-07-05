/********App Initialization *************/
var myApp = new Framework7({

    material : true,
    materialRipple : true,
    materialRippleElements : '.ripple',
    modalTitle : 'decred',
    fastClicks : false,
    sortable : false
   });

// Export selectors engine
var $$ = Dom7;



document.addEventListener("deviceready", deviceIsReady, false);


function deviceIsReady(){
StatusBar.backgroundColorByHexString("#0c1e3e;");
document.addEventListener("backbutton", trapBackButton, false);

}


function trapBackButton(){        

            navigator.app.exitApp();
}


// Add main view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
/******** App Initialization *************/


myApp.onPageInit('mainstart', function(page){

/*
	
    $$("#get-started-btn").on("click", function(){

		mainView.router.loadPage("dashboard.html");
	});
*/

   // myApp.alert("decred android wallet");

   window.setTimeout(function(){

        $$(".hide-at-startup").show();
        $$(".hide-after-startup").hide();

   }, 7000);

});