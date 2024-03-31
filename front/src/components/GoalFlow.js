import React from 'react';
import ReactFlow from 'reactflow';
import ActorNode from './nodes/ActorNode';
import TrohpyNode from './nodes/TrophyNode';
import 'reactflow/dist/style.css';

const nodeTypes = {
    actorNode: ActorNode,
    trohpyNode: TrohpyNode
};

function GoalFlow({ name, goals }) {
    var { nodes, edges } = convertToNodesAndEdges(goals);
    return (
        <>
            <div>{name}</div>
            <div style={{ height: '20vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                >
                </ReactFlow>
            </div>
        </>
    );
}

export default GoalFlow

function convertToNodesAndEdges(goals) {
    var nodes = [{
        id: '-1',
        type: 'actorNode',
        position: { x: 0, y: 30 },
    }];
    var edges = [];
    goals.forEach((element, i) => {
        nodes.push({
            id: i.toString(),
            type: 'trohpyNode',
            position: { x: (i + 1) * 200, y: 30 },
            data: { name: element.name }
        });
        edges.push(
            { id: i.toString(), source: (i - 1).toString(), sourceHandle: 'output', target: i.toString(), targetHandle: 'input', label: element.duration }
        );
    });
    return { nodes, edges };
}
