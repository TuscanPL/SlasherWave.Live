var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady(){
createPlayer();
};

function showName(name){
    $("#nowPlaying").fadeOut(800);
    setTimeout(()=>{$("#nowPlaying").text(name);}, 800);
    $("#nowPlaying").fadeIn(800);
};

function createPlayer(){
    player = new YT.Player('player', {
          height: '0',
          width: '0',
          playerVars: {
            listType: 'playlist',
            list: 'PLW17mvEZY9fKHg-jxW1f-bl6LBg_8Vd0M'
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
    });
};

function onPlayerReady(event){
        player.setPlaybackQuality("hd720");
        player.setLoop(true);
        player.setShuffle(true);
        $("#tuneInButtonContainer").fadeIn(1000);
        $("#tuneInButton").click(()=>{
        var rn = rN(0,39);
        console.log(rn);
        event.target.playVideoAt(rn);
        console.log(player.getPlayerState());
        usableEventVariable = event;
    });
}

var done = false;
function onPlayerStateChange(event){
        if (player.getPlayerState() == 1){
        showName(player.getVideoData().title);
        console.log(player.getPlayerState());
        $("#skipButton").click(()=>{nextSong()});
    }
}

function rN(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function nextSong(){
    var rnNext = rN(0,39);
    usableEventVariable.target.playVideoAt(rnNext);
}

