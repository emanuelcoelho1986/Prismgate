import { module, test } from 'qunit';
import { setupRenderingTest } from 'prismgate/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | products-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('columns', [
      { name: 'Column 1' },
      { name: 'Column 2' },
      { name: 'Column 3' }
    ]);

    this.set('products', [
      {
        enrichedPropertyValues: [
          { value: 'Value 1' },
          { value: 'Value 2' },
          { value: 'Value 3' }
        ]
      }
    ]);

    await render(hbs`<ProductsTable />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProductsTable />
    `);

    assert.dom().containsHtml("table");
  });
});
