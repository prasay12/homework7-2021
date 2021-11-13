var video = document.querySelector("#player1");

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	//console.log("Old speed: " + video.playbackRate);
	video.playbackRate -= 0.05;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	//console.log("Old speed: " + video.playbackRate);
	video.playbackRate += 0.05;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Original location: " + video.currentTime);
	video.currentTime = video.currentTime + 15;
	if (video.currentTime == 67.403333) {
		console.log("Going back to the start of the video")
		video.currentTime = 0;
		console.log("New location: " + video.currentTime);
		video.play();
	}
	else {
		console.log("New location: " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == true) {
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function () {
	var volume = document.getElementById('slider').value;
	video.volume = volume / 100;
	console.log(volume / 100);
	document.querySelector("#volume").innerHTML = volume + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove('oldSchool');
});