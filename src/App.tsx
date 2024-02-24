import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Header from './components/commons/Header';
import PersonalInformation from './pages/PersonalInformation';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <PersonalInformation />
      </div>
    </QueryClientProvider>
  );
}

export default App;
