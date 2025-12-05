import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export const GroupNode = memo(({ data }: { data: { label: string } }) => {
    return (
        <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: '#111',
            border: '2px solid #ff4081',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#ff4081',
            fontWeight: 100,
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.8rem',
            padding: '0.5rem',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        }}>
            <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
            {data.label}
            <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
        </div>
    );
});
