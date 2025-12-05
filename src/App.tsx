import { ThreeScene } from './components/ThreeScene';
import { UIOverlay } from './components/UIOverlay';
import { TimelineView } from './components/TimelineView';
import { LanguageSelector } from './components/LanguageSelector';
import { MindmapView } from './components/MindmapView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <UIOverlay />
        <LanguageSelector />
        <TimelineView />
        <MindmapView />
        <ThreeScene />
      </div>
    </QueryClientProvider>
  );
}

export default App;
