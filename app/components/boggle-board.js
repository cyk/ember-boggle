import Component from '@ember/component';
import { set } from '@ember/object';

const BOARD_SIZE = 4;

const randomLetter = () => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return possible.charAt(Math.floor(Math.random() * possible.length));
}

const letter = (value) => ({
  value,
  isSelected: false
});

const letters = (rowCount, columnCount) => {
  return [...Array(rowCount).keys()].map(() => (
    [...Array(columnCount).keys()].map(() =>
      letter(randomLetter())
    )
  ))

};

export default Component.extend({

  lastColumnSelectedIndex: null,
  lastRowSelectedIndex: null,

  init() {
    this._super();
    this.set('letters', letters(BOARD_SIZE, BOARD_SIZE));
  },

  resetSelection() {
    this.set('lastColumnSelectedIndex', null);
    this.set('lastRowSelectedIndex', null);
    this.letters.forEach(row => {
      row.forEach(letter => {
        set(letter, 'isSelected', false);
      });
    });
  },

  actions: {
    selectLetter(letter, columnIndex, rowIndex) {
      if (this.lastColumnSelectedIndex !== null || this.lastRowSelectedIndex !== null) {
        const columnDistance = Math.abs(this.lastColumnSelectedIndex - columnIndex);
        const rowDistance = Math.abs(this.lastRowSelectedIndex - rowIndex);
        if (columnDistance > 1 || rowDistance > 1 || letter.isSelected) {
          this.resetSelection();
        }
      }

      set(letter, 'isSelected', !letter.isSelected);
      this.lastColumnSelectedIndex = columnIndex;
      this.lastRowSelectedIndex = rowIndex;
    }
  }
});
