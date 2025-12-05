import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface ArticleData {
    title: string;
    date: string;
    perspective?: string;
}

export const ArticleNode = memo(({ data }: { data: ArticleData }) => {
    return (
        <div style={{
            width: '220px',
            background: 'rgba(20, 20, 20, 0.95)',
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '0.8rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            color: '#eee',
            fontSize: '0.85rem',
            textAlign: 'left',
            transition: 'all 0.2s ease',
            fontFamily: "'Poppins', sans-serif",
        }}>
            <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />

            <div style={{ fontSize: '0.75rem', color: '#ff4081', fontWeight: 300 }}>
                {data.date}
            </div>

            <div style={{ fontWeight: 300, lineHeight: '1.3' }}>
                {data.title}
            </div>

            {data.perspective && (
                <div style={{
                    fontSize: '0.75rem',
                    color: '#aaa',
                    marginTop: '0.3rem',
                    fontStyle: 'italic',
                    borderTop: '1px solid #333',
                    paddingTop: '0.3rem',
                    fontWeight: 200,
                }}>
                    "{data.perspective}"
                </div>
            )}
        </div>
    );
});
