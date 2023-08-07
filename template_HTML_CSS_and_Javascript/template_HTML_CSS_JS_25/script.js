const player = document.querySelector('.player')
const video = player.querySelector('.player__video')
const progress = player.querySelector('.player__progress')
const progressBar = player.querySelector('.player__progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const volume = player.querySelector('.player__volume')
const volumeCustom = player.querySelector('.player__volume input')
const volumeIcon = player.querySelectorAll('.player__volume i')
const time = player.querySelector('.player__time')

function togglePlay() {
	if (video.paused) {
		video.play()
		toggle.innerHTML = "<i class='bx bx-pause'></i>"
	} else {
		video.pause()
		toggle.innerHTML = "<i class='bx bx-play'></i>"
	}
}

// Video time format
function formatTime(time) {
	let minutes = Math.floor(time / 60)
	let seconds = Math.floor(time - minutes * 60)
	let minuteValue, secondValue

	minuteValue = minutes < 10 ? '0' + minutes : minutes
	secondValue = seconds < 10 ? '0' + seconds : seconds

	let mediaTime = minuteValue + ':' + secondValue
	return mediaTime
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100
	progressBar.style.width = `${percent}%`

	time.innerHTML = `${formatTime(video.currentTime)}/ ${formatTime(
		video.duration
	)}`
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
	video.currentTime = scrubTime
}

// Play/Pause video
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

// Update video playback progress
video.addEventListener('timeupdate', handleProgress)

// Rewind video
skipButtons.forEach((button) =>
	button.addEventListener('click', function () {
		video.currentTime += +this.dataset.skip
	})
)

// Custom volume
volumeCustom.addEventListener('change', function () {
	video.volume = this.value
})

volumeIcon.forEach((item) => {
    item.addEventListener('click', function () {
        volume.classList.toggle('turn-volume')
        if (volume.classList.contains('turn-volume')) {
            video.volume = 0
        }
        else {
            video.volume = volumeCustom.value
        }
    })
})

// Choose a moment in the video
progress.addEventListener('click', scrub)