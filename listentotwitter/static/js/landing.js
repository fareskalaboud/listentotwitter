$('a').click( function() { 
    var keyword = document.getElementById('go_button').value; 
    var newURL = "http://listentotwitter.com/keyword/" + keyword;
    window.location.href = newURL;
} );