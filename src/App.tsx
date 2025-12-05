import { Routes, Route } from 'react-router-dom';
import { ThreeScene } from './components/ThreeScene';
import { UIOverlay } from './components/UIOverlay';
import { TimelineView } from './components/TimelineView';
import { LanguageSelector } from './components/LanguageSelector';
import { MindmapView } from './components/MindmapView';
import { PublishView } from './components/PublishView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Globe View (original app)
function GlobeApp() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <UIOverlay />
      <LanguageSelector />
      <TimelineView />
      <MindmapView />
      <ThreeScene />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<GlobeApp />} />
        <Route path="/publish" element={<PublishView />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
