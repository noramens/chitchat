import Auth from './components/Auth';
import { AuthProvider } from './context/authContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chats from './components/Chats';
import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
