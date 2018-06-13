import Component from '@ember/component';
import { set } from '@ember/object';

// const BOARD_SIZE = 2;

const letter = (value) => ({
  value,
  isActive: false
});

const letters = [
  [letter('A'), letter('B')],
  [letter('D'), letter('F')]
];

export default Component.extend({
  letters,

  actions: {
    selectLetter(letter) {
      set(letter, 'isActive', !letter.isActive);
    }
  }
});
