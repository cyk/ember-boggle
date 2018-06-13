import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | boggle', function(hooks) {
  setupApplicationTest(hooks);

  test('board is visible and has letters', async function(assert) {
    await visit('/');

    const boardEl = this.element.querySelector('.board');
    assert.ok(boardEl);
    // assert.ok(boardEl.)

    // board is visible
    // board has letters



    assert.equal(currentURL(), '/');
  });
});
