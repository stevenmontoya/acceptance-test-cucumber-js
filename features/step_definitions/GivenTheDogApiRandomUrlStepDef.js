import { Given } from '@cucumber/cucumber';

Given('the dog api radom url', function (dataTable) {
  this.baseUrl = dataTable.rowsHash().url;
});
