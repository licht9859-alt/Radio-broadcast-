document.addEventListener('DOMContentLoaded', function(){
  const playBtn = document.getElementById('playButton')
  const thumbnail = document.getElementById('thumbnail')
  const video = document.getElementById('video')
  const container = document.getElementById('videoContainer')
  const audio = document.getElementById('liveStream')

  // Default stream URL - user should replace with real stream URL
  const defaultStream = '' // Example: 'https://example.com/station.mp3'
  if(defaultStream) audio.src = defaultStream

  const setPlaying = (isPlaying) => {
    if(isPlaying){
      playBtn.textContent = '⏸'
      playBtn.setAttribute('data-playing','true')
    } else {
      playBtn.textContent = '▶'
      playBtn.removeAttribute('data-playing')
    }
  }

  playBtn.addEventListener('click', () => {
    // If an audio stream is configured, toggle audio play/pause
    if(audio && audio.src){
      if(audio.paused){
        audio.play().then(() => setPlaying(true)).catch(()=>alert('Autoplay blocked — use the controls to start audio.'))
      } else {
        audio.pause(); setPlaying(false)
      }
      return
    }

    // Fallback: show iframe player when no audio stream is set
    if(container && video){
      if(!container.classList.contains('active')){
        // Make iframe autoplay if supported
        if(!/autoplay=/i.test(video.src)){
          const sep = video.src.includes('?') ? '&' : '?'
          video.src = video.src + sep + 'autoplay=1'
        }
        container.classList.add('active')
        setPlaying(true)
      } else {
        container.classList.remove('active')
        setPlaying(false)
      }
    }
  })

  // Thumbnail click simulates play button click
  if(thumbnail){
    thumbnail.addEventListener('click', () => playBtn.click())
  }

  // Sync visual play state when audio ends/paused
  if(audio){
    audio.addEventListener('play', () => setPlaying(true))
    audio.addEventListener('pause', () => setPlaying(false))
    audio.addEventListener('ended', () => setPlaying(false))
  }
})
