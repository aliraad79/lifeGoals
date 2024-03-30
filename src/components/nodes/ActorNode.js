import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Stickman from '../Stickman';

export default memo(() => {
    return (
        <div style={{ border: '1px solid #777' }}>
            <Stickman />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={true}
            />
        </div>
    );
});
