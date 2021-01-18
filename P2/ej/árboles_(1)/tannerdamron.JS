function Node(data) {
  this.data = data;
  this.children = [];
}
class Tree {
  constructor() {
    this.root = null;
  }
  add = (data, toNodeData) => {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    if (parent) parent.children.push(node);
    else if (!this.root) this.root = node;
    else return "Tried to store node at root, root already exists.";
  };
  findBFS = (data) => {
    const queue = [this.root];
    let _node = null;
    this.traverseBFS((node) => {
      if (node.data == data) _node = node;
    });
    return _node;
  };

  traverseBFS = (cb) => {
    const queue = [this.root];
    if (cb)
      while (queue.length) {
        const node = queue.shift();
        cb(node);
        for (const child of node.children) queue.push(child);
      }
  };
}
(function test() {
  let tree = new Tree();
  tree.add("Nodo 1");
  tree.add("Nodo 2", "Nodo 1");
  tree.add("Nodo 3", "Nodo 1");
  tree.add("Nodo 4", "Nodo 2");
  tree.add("Nodo 5", "Nodo 2");
  tree.add("Nodo 6", "Nodo 3");
  tree.traverseBFS((node) => {
    console.log("Current Node: ", node);
  });
})();
