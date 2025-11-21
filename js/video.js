var video;
video = document.querySelector("#player1");
var currentSpeed = 1;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

/* Play Video */
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	// video = document.querySelector("#player1");
	video.play();
});

/* Pause Video */
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	// video = document.querySelector("#player1");
	video.pause();
})

/* Slow Down */
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow down");
	video.playbackRate *= 0.9;
	currentSpeed *= 0.9;
	console.log("Current speed: " + currentSpeed);

})

/* Speed Up */
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up");
	video.playbackRate /= 0.9;
	currentSpeed /= 0.9;
	console.log("Current speed: " + currentSpeed);
})

/* Skip Ahead */
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip ahead");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Current location: " + video.currentTime);
})

/* Mute/unmute */
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		console.log("Unmute the video");
		this.textContent = "Mute";
		video.muted = false;
	}
	else {
		console.log("Mute the video");
		this.textContent = "Unmute";
		video.muted = true;
	}
})

/* Video Slider */
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
})

/* Styled */
document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Add 'old school' class");
	video.classList.add("oldSchool");
})


/* Original */
document.querySelector("#orig").addEventListener("click", function () {
	console.log("Remove 'old school' class");
	video.classList.remove("oldSchool");
})
