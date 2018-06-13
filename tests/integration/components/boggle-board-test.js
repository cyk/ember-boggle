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

    assert.equal(this.element.querySelectorAll('button').length, 4, 'has four letters');
  });

  test('letter becomes active when clicking', async function(assert) {

    await render(hbs`{{boggle-board}}`);

    const letterBtn = this.element.querySelector('button');

    letterBtn.click();

    assert.ok(letterBtn.classList.contains('active'), 'button is active');

    letterBtn.click();

    assert.notOk(letterBtn.classList.contains('active'), 'button is not active');
  })
});
