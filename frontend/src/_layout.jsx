import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex h-screen w-full gap-4">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
