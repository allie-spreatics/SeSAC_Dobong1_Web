import { Route, Routes } from 'react-router-dom';
import Student from './pages/Sdudent';
import PracticeHeader from './components/PracticeNav';
import Index from './pages/Index';
import NotFound from './pages/404';
import './styles/common.css';

function App() {
  return (
    <div className="App">
      <PracticeHeader />
      <Routes>
        실습
        <Route path="/" element={<Index />}></Route>
        <Route path="/student/:name" element={<Student />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
