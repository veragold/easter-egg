var phantom = require("phantom-api");

var EasterEgg = function() {

};

// Okay, we've defined our application, represented by the User
// and Image functions. Let's start up phantom-api to make the
// APIs available.
//
// First set basic custom configuration, then start up the server.
phantom.setCustomConfig( {DOC_ROOT: "/home/gold/src/easter-egg/public",
                          PORT: 4444} );

// Pass in classes as a variable number of arguments:
phantom.run(EasterEgg);
