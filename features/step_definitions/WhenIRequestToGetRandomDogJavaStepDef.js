import { When } from '@cucumber/cucumber';
import { get } from 'axios';

When('I request to get random dog', async function () {
  let res = await get(this.baseUrl);
  this.response = res;
});
