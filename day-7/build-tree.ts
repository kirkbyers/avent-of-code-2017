import { fileToNodeMap, Node, NodeMap } from './file-to-nodes';

export const findFileMapRoot = async (filePath: string) => {
  const map = await fileToNodeMap(filePath);
  const tempMap = Object.assign({}, map);
  Object.keys(map).forEach((nodeName) => {
    if (map[nodeName].children && map[nodeName].children.length > 0) {
      map[nodeName].children.forEach((child) => {
        delete tempMap[child];
      });
    }
  });
  return {
    map,
    root: Object.keys(tempMap)[0],
  };
};

export const buildTree = async (filePath: string) => {
  const { map, root } = await findFileMapRoot(filePath);
  return unpackNode(map[root], map);
};

const unpackNode = (inp: Node, map: NodeMap) => {
  const result: any = Object.assign({}, inp);
  if (inp.children.length > 0) {
    inp.children.forEach((child, index) => {
      result.children[index] = unpackNode(map[child], map);
    });
  }
  return result;
};

export const checkChildrenWeights = (inp: Node): any => {
  if (inp.children && inp.children.length > 0) {
    const weights = inp.children.reduce((result: any, child: any, index) => {
      const childWeight = addChildWeights(child) + child.weight;
      if (result[childWeight] !== undefined) {
        result[childWeight].push(child);
      } else {
        result[childWeight] = [child];
      }
      return result;
    }, {});
    console.log(weights);
    Object.keys(weights).forEach((key) => {
      if (weights[key].length === 1) {
        checkChildrenWeights(weights[key][0]);
      }
    });
  }
  return inp;
};

export const a = (inp: Node) => {
  const weights = inp.children.reduce((result: any, child: any, index) => {
    const childWeight = addChildWeights(child) + child.weight;
    if (result[childWeight] !== undefined) {
      result[childWeight].push(child);
    } else {
      result[childWeight] = [child];
    }
    return result;
  }, {});
  console.log(weights);
  return Object.keys(weights).reduce((result, weight, index) => {
    if (index === 1) {
      return result - Number(weight);
    } else {
      return result + Number(weight);
    }
  }, 0);
};

const addChildWeights = (inp: Node): number => {
  if (inp.children && inp.children.length > 0) {
    return inp.children.reduce((result: number, child: any) => result + child.weight + addChildWeights(child), 0);
  }
  return 0;
};
