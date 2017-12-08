import { resolve } from 'path';

import { a, buildTree, checkChildrenWeights } from './build-tree';

// it('returns  from test-input.txt', async (done) => {
//   const tree = await buildTree(resolve(__dirname, '../../day-7/test-input.txt'));
//   console.log(a(tree));
//   done();
// });
it('returns  from input.txt', async (done) => {
  const tree = await buildTree(resolve(__dirname, '../../day-7/input.txt'));
  console.log(a(tree));
  done();
});
