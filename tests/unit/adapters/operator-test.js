import { setupTest } from 'prismgate/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | operator', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:operator');
    assert.ok(adapter, 'adapter exists');
  });
});
