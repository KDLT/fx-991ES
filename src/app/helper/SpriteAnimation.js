import anime from 'animejs';

class SpriteAnimation {
  static caretBlinkOn() {
    anime({
      targets: '#svg-caret',
      duration: 700,
      delay: 500,
      opacity: 0,
      loop: true,
    })
  };
  static caretBlinkOff() {
    anime({
      targets: '#svg-caret',
      delay: 0,
      opacity: 1,
      duration: 0
    });
    anime.remove('#svg-caret');
  }
}

export default SpriteAnimation;