import sBell from '../assets/sound/bell.mp3';
import { Howl } from 'howler';
let soundBell: any;
const playBellSound = () => {
  if (soundBell === undefined) {
    soundBell = new Howl({
      src: [sBell],
    });
  }
  soundBell.play();
};

export default playBellSound;
