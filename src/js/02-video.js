import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time);
    console.log(localStorage.getItem("videoplayer-current-time"));
},1000));

let TIME_DATA_PLAYER = localStorage.getItem("videoplayer-current-time");
console.log(TIME_DATA_PLAYER);
player.setCurrentTime(TIME_DATA_PLAYER);
