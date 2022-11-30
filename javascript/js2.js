var video = document.querySelector(".video")
var play = document.querySelector("#play")
var pause = document.querySelector("#pause")
window.addEventListener("load", function() {

	video.autoplay = false
	video.loop = false;
    video.load()

});


play.addEventListener("click", function(){

    video.play()
})

pause.addEventListener("click", function(){
    video.pause()
})