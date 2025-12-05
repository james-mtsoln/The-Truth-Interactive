import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export const TopicNode = memo(({ data }: { data: { label: string } }) => {
    return (
        <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #ff4081, #c60055)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            fontWeight: 100,
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1rem',
            boxShadow: '0 0 40px rgba(255, 64, 129, 0.4)',
            padding: '1rem',
            border: 'none',
        }}>
            {data.label}
            <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Top} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
        </div>
    );
});
