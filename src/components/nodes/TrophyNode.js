import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Trophy from '../Trophy';

export default memo(() => {
    return (
        <div style={{ width: "100px"}}>
            <Trophy />
            <Handle
                type="source"
                position={Position.Left}
                isConnectable={true}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={true}
            />
        </div>
    );
});
