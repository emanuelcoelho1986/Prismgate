import { helper } from '@ember/component/helper';

export default helper(function stringify([obj]) {
  try {
    console.log(obj);
    return JSON.stringify(obj, null, 2); // pretty print with 2 spaces
  } catch (e) {
    return 'Invalid object';
  }
});