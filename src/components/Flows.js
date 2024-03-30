import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import ActorNode from './nodes/ActorNode';
import TrohpyNode from './nodes/TrophyNode';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: '3',
        type: 'actorNode',
        position: { x: 0, y: 0 },
    },
    {
        id: '4',
        type: 'trohpyNode',
        position: { x: 300, y: 300 },
    }
];
const initialEdges = [{ id: 'e3-4', source: '3', target: '4' }];
const nodeTypes = {
    actorNode: ActorNode,
    trohpyNode: TrohpyNode
};


function Flows() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            />
        </div>
    );
}

export default Flows