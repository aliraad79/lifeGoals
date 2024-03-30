import React from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import ActorNode from './nodes/ActorNode';
import TrohpyNode from './nodes/TrophyNode';
import 'reactflow/dist/style.css';

const nodeTypes = {
    actorNode: ActorNode,
    trohpyNode: TrohpyNode
};

function Flows({ initialNodes, initialEdges }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


    // const onConnect = useCallback(
    //     (params) => setEdges((eds) => addEdge(params, eds)),
    //     [setEdges],
    // );

    return (
        <div style={{ height: '20vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                // onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
            </ReactFlow>
        </div>
    );
}

export default Flows