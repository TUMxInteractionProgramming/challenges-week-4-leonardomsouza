/* #6 start the #external #action and say hello */
console.log("App is alive");

/*Creating currentChannel*/
var currentChannel=sevenContinents;

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channel) {
    currentChannel=channel;
    //Log the channel switch
    console.log("Tuning in to channel", channel.name);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channel.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    /* #6 #liking channels on #click */
    var element = document.getElementById("channel-star");
    channel.starred == Boolean(true) ? element.className = "fas" + " " + " fa-star" : element.className = "far" + " " + " fa-star";
    /*var channelOnDisplay = channel+"Star";
    channel.starred == Boolean(true) ? channelOnDisplay.className = "fas" + " " + " fa-star" : channelOnDisplay.className = "far" + " " + " fa-star";
    */

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
    
}

/* #6 #liking a channel on #click */
function star() {
    var element = document.getElementById("channel-star");
    currentChannel.starred == Boolean(true) ? element.className = "fas" + " " + " fa-star" : element.className = "far" + " " + " fa-star";
    currentChannel.starred == Boolean(true) ? currentChannel.starred = Boolean (true) : currentChannel.starred = Boolean (false);
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}


/*Current Location*/
var currentLocation = {
    longitude: 48.1360077, 
    latitude: 11.545043 , 
    what3words: "cure.lamps.hometown",
}