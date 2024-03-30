import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Trophy from '../Trophy';

function TrophyNode({ data }) {
    return (
        <div style={{ height: '90px', width: '90px' }}>
            {data.name}
            <Trophy />
            <Handle
                id="input"
                type="target"
                position={Position.Left}
                isConnectable={true}
            />
            <Handle
                id="output"
                type="source"
                position={Position.Right}
                isConnectable={true}
            />
        </div>
    );
}

export default TrophyNode;