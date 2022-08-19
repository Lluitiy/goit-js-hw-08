import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 'vimeo-player',
  width: 640,
});


player.on('play', onPlay);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};