import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | boggle-board', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{boggle-board}}`);

    assert.equal(this.element.querySelectorAll('button').length, 16, 'has 16 letters');
  });

  test('letter becomes selected when clicking', async function(assert) {

    await render(hbs`{{boggle-board}}`);

    const letterBtn = this.element.querySelector('button');

    letterBtn.click();

    assert.ok(letterBtn.dataset.selected !== undefined, 'button is selected');

    letterBtn.click();

    assert.notOk(letterBtn.dataset.selected !== undefined, 'button is not selected');
  })
});
