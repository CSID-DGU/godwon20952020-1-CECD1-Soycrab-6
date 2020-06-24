const CREATE_NODE = 'node/CREATE' as const;
const REMOVE_NODE = 'node/REMOVE' as const;

let nextId = 1;
export const addNode = (text: string) => ({
  type: CREATE_NODE,
  payload: {
    id: nextId++,
    name: text
  }
});
export const removeNode = (id: number) => ({
  type: REMOVE_NODE,
  payload: id
});

export type NodeState = {
  id: number;
  name: string;
};
export type NodesState = NodeState[];
const initialState: NodesState = [];

type NodesAction =
  | ReturnType<typeof addNode>
  | ReturnType<typeof removeNode>

function nodes(state: NodesState = initialState, action: NodesAction): NodesState {
  switch (action.type) {
    case CREATE_NODE:
      return state.concat(action.payload);
    case REMOVE_NODE:
      return state.filter(
        todo => todo.id !== action.payload
      )
    default:
      return state;
  }
}

export default nodes;