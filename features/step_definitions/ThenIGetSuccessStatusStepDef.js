import { Then } from '@cucumber/cucumber';
import { strictEqual } from 'assert';

Then('I get suscces status', function () {
  strictEqual(this.response.status, 200);
});
