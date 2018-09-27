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

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
    
}

/* #6 #liking a channel on #click */
function star() {
    //debugger;
    //$('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
    
    var element = document.getElementById("channel-star");
    var onDisplay = document.getElementById(currentChannel.name + "Star");
    console.log(currentChannel.name + "Star");
    //debugger;
    currentChannel.starred == Boolean(false) ? element.className = "fas" + " " + " fa-star" : element.className = "far" + " " + " fa-star";
    currentChannel.starred == Boolean(false) ? onDisplay.className = "fas" + " " + " fa-star" : onDisplay.className = "far" + " " + " fa-star";
    //debugger;
    currentChannel.starred == Boolean(false) ? currentChannel.starred=Boolean(true) : currentChannel.starred=Boolean(false); 
    
    //debugger;
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

/*Creating a Message function using a constructor function*/
function Message(text) {
    this.createdBy = currentLocation.what3words;/*String*/
    this.latitude = currentLocation.latitude; /*Number*/
    this.longitude = currentLocation.longitude; /*Number*/
    this.createdOn = new Date(); /*Date*/
    this.expiresOn = new Date(); /*Date*/
    this.expiredOn.setTime(Date.now() + 1000*60*5 ); //Adds 5 minutes to the creation Date
    this.text = text; /*String*/
    this.own = true; /*Boolean*/
}


/*Send message function*/

function sendMessage() {
    message = new Message("Hello Chatter");
    $('#messages ').append(createMessageElement(message));
}

/*Create New Message function*/
function createMessageElement(messageObject){

    var messageContent = '<div class="message">' + 
                            '<h3><a href=' + messageObject.createdBy + 'target=' + '><strong>' + messageObject.createdBy + 
                            '</strong></a>' + messageObject.createdOn + '<em>:expiresIn: min. left</em></h3>' +
                            '<p>' + messageObject.text + '</p>' +
                            '<button>+5 min.</button>'+ 
                    '</div>';
    
    return messageContent;
}

