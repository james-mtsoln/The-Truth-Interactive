import { useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    type Connection,
    type Edge,
    type Node,
    Position,
    MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';

import { useStore } from '../store/useStore';
import { payloadAPI, getLocalizedValue } from '../services/payloadService';
import { TopicNode } from './mindmap/TopicNode';
import { GroupNode } from './mindmap/GroupNode';
import { ArticleNode } from './mindmap/ArticleNode';

const nodeTypes = {
    topic: TopicNode,
    group: GroupNode,
    article: ArticleNode,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'LR') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction, ranksep: 150, nodesep: 50 });

    nodes.forEach((node) => {
        // Set dimensions based on node type for accurate layout
        let width = 150;
        let height = 150;
        if (node.type === 'article') {
            width = 240;
            height = 150; // Approximate height including content
        } else if (node.type === 'group') {
            width = 140;
            height = 140;
        }

        dagreGraph.setNode(node.id, { width, height });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        return {
            ...node,
            targetPosition: isHorizontal ? Position.Left : Position.Top,
            sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
            // We are shifting the dagre node position (anchor=center center) to the top left
            // so it matches the React Flow node anchor point (top left).
            position: {
                x: nodeWithPosition.x - nodeWithPosition.width / 2,
                y: nodeWithPosition.y - nodeWithPosition.height / 2,
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};

export const MindmapView = () => {
    const { viewMode, selectedTopic, setViewMode, language } = useStore();
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    const { data: timelineItems, isLoading } = useQuery({
        queryKey: ['timeline', selectedTopic?.slug, language],
        queryFn: async () => {
            if (!selectedTopic) return [];
            const events = await payloadAPI.getTimelineEvents(selectedTopic.slug, language);
            return events.map(event => ({
                id: event.id,
                title: getLocalizedValue(event.title, language),
                cardTitle: getLocalizedValue(event.cardTitle, language),
                newsPerspective: event.newsPerspective ? getLocalizedValue(event.newsPerspective, language) : undefined,
                mediaBias: event.mediaBias ? getLocalizedValue(event.mediaBias, language) : 'Unspecified',
                date: event.date,
            }));
        },
        enabled: !!selectedTopic && viewMode === 'MINDMAP',
    });

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    useEffect(() => {
        if (!timelineItems || !selectedTopic) return;

        const newNodes: Node[] = [];
        const newEdges: Edge[] = [];

        // 1. Central Topic Node
        const topicNodeId = 'root';
        newNodes.push({
            id: topicNodeId,
            type: 'topic',
            data: { label: selectedTopic.title[language] },
            position: { x: 0, y: 0 },
        });

        // 2. Group by Media Bias
        const groupedItems = timelineItems.reduce((acc, item) => {
            const bias = item.mediaBias || 'Unspecified';
            if (!acc[bias]) acc[bias] = [];
            acc[bias].push(item);
            return acc;
        }, {} as Record<string, typeof timelineItems>);

        Object.entries(groupedItems).forEach(([bias, items]) => {
            const groupNodeId = `group-${bias}`;

            // Group Node
            newNodes.push({
                id: groupNodeId,
                type: 'group',
                data: { label: bias },
                position: { x: 0, y: 0 },
            });

            // Edge from Root to Group
            newEdges.push({
                id: `e-${topicNodeId}-${groupNodeId}`,
                source: topicNodeId,
                target: groupNodeId,
                type: 'smoothstep',
                animated: true,
                style: { stroke: '#ff4081', strokeWidth: 2 },
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    color: '#ff4081',
                },
            });

            // Article Nodes
            items.forEach((item) => {
                const articleNodeId = `article-${item.id}`;
                newNodes.push({
                    id: articleNodeId,
                    type: 'article',
                    data: {
                        title: item.title,
                        date: item.date,
                        perspective: item.newsPerspective
                    },
                    position: { x: 0, y: 0 },
                });

                // Edge from Group to Article
                newEdges.push({
                    id: `e-${groupNodeId}-${articleNodeId}`,
                    source: groupNodeId,
                    target: articleNodeId,
                    type: 'smoothstep',
                    style: { stroke: '#666', strokeWidth: 1.5 },
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        color: '#666',
                    },
                });
            });
        });

        // Apply Layout
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            newNodes,
            newEdges
        );

        setNodes(layoutedNodes);
        setEdges(layoutedEdges);

    }, [timelineItems, selectedTopic, language, setNodes, setEdges]);

    if (viewMode !== 'MINDMAP' || !selectedTopic) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 100,
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
        }}>
            {/* Header Bar */}
            <div style={{
                padding: '1.5rem 2rem',
                background: 'rgba(10, 10, 10, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 10,
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h2 style={{
                        color: '#fff',
                        margin: 0,
                        fontSize: '1.5rem',
                        fontWeight: 100,
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: '0.05em',
                    }}>
                        {selectedTopic.title[language].toUpperCase()} <span style={{ color: '#ff4081', fontWeight: 300 }}>/ Media Bias</span>
                    </h2>
                </div>
                <button
                    onClick={() => setViewMode('TIMELINE')}
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#ff4081';
                        e.currentTarget.style.color = '#ff4081';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.color = '#fff';
                    }}
                >
                    ← Back to Timeline
                </button>
            </div>

            {/* React Flow Canvas */}
            <div style={{ flex: 1, position: 'relative' }}>
                {isLoading ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        color: '#666',
                        fontSize: '1.5rem'
                    }}>
                        Loading mindmap...
                    </div>
                ) : (
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        fitView
                        minZoom={0.1}
                        maxZoom={1.5}
                        defaultEdgeOptions={{ type: 'smoothstep' }}
                        proOptions={{ hideAttribution: true }}
                    >
                        <Background color="#222" gap={20} />
                        <Controls />
                    </ReactFlow>
                )}
            </div>
        </div>
    );
};
