import { setupTest } from 'prismgate/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | operator', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('operator', {});
    assert.ok(model, 'model exists');
  });
});
