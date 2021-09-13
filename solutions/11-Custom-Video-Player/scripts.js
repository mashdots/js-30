const video = document.querySelector('video');
const playButton = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress');
const playbackBarProgress = document.querySelector('.progress__filled');
const volumeBar = document.querySelector('input[name="volume"]');
const playbackRateBar = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('button.player__button.skip');

const handlePlayback = () => {
  /**
   * Initial playback setup
   */
  if (video.ended) {
    video.currentTime = 0;
  }

  volumeBar.value = video.volume;
  playbackRateBar.value = video.playbackRate;

  if (video.paused) {
    playButton.innerText = "⎮⎮"
    video.play();
  } else {
    playButton.innerText = "►"
    video.pause();
  }
}

function handlePlaybackProgress() {
  const { currentTime, duration } = this;
  const percentComplete = (currentTime / duration) * 100;
  playbackBarProgress.style.flexBasis = `${percentComplete}%`;
}

function handleSkip() {
  video.currentTime = video.currentTime + Number(this.dataset.skip)
}

function handleProgressBarClick(e) {
  const { innerWidth: windowWidth } = window;
  const { videoWidth } = video;
  const isAdjustedSeeker = windowWidth > videoWidth;
  const adjustedWidth = isAdjustedSeeker ? ((windowWidth - videoWidth)/2) : 0;
  const trackMark = e.x - adjustedWidth;
  const divisor = isAdjustedSeeker ? videoWidth : windowWidth;

  video.currentTime = video.duration * (trackMark / divisor)
}

playButton.addEventListener('click', handlePlayback);
video.addEventListener('click', handlePlayback)
video.addEventListener('timeupdate', handlePlaybackProgress);
progressBar.addEventListener('click', handleProgressBarClick)

volumeBar.addEventListener('input', function() {
  video.volume = this.value;
})

playbackRateBar.addEventListener('input', function() {
  video.playbackRate = this.value;
})

skipButtons.forEach(button => {
  button.addEventListener('click', handleSkip);
})

// Toggle playback with space.
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    handlePlayback()
  }
})
