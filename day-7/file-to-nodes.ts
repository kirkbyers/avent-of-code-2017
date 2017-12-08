import { fileToArray } from '../util/file-to-array';

export interface Node {
  name: string;
  weight: number;
  children: string[];
}

export interface NodeMap {
  [name: string]: Node;
}

export const fileToNodeMap = async (filePath: string): Promise<NodeMap> => {
  const inputs = await fileToArray(filePath);
  return inputs.reduce((result: NodeMap, inp) => {
    const splitBySpace = inp.match(/\S+/g) || [];
    const name = splitBySpace[0];
    const weight = Number((inp.match(/\(([^)]+)\)/) || [])[1]);

    const splitByArrow = inp.split('-> ');
    const children: string[] = [];
    if (splitByArrow.length > 1) {
      splitByArrow[1].split(', ').forEach((child) => {
        children.push(child);
      });
    }
    result[name] = {
      children,
      name,
      weight,
    };
    return result;
  }, {});
};
