import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time);
},1000));

let TIME_DATA_PLAYER = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(TIME_DATA_PLAYER);
