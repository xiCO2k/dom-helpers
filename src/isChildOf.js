/**
  *  Check if ChildNode is a child of the parentNode
  *  @param DOMNode child
  *  @param DOMNode parent
  *  @param boolean checkEqual if true it will compare if the child is the same as the parent
  *  @return boolean
 */
export default function isChildOf(child, parent, checkEqual = false) {
    let found = false;

    if (!(parent instanceof NodeList)) {
        parent = [parent];
    }

    for (let i; i < parent.length; i++) {
        let _child = child;

        if (found) break;
        if (checkEqual && _child === parent[i]) continue;

        while ((_child = _child.parentNode) && _child !== parent[i]);
        found = !!_child;
    }

    return found;
}
