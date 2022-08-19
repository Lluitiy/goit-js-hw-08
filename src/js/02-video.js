import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  console.log('🚀 ~ e', e);
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const time = +localStorage.getItem('videoplayer-current-time');

if (time) {
  player.setCurrentTime(time)
}
