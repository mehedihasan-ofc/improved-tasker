import { useReducer } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TaskBoard from './components/Task/TaskBoard';
import { TaskContext } from './context/tasksContext';
import { initialState, tasksReducer } from './reducers/tasksReducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
      <ToastContainer />
    </TaskContext.Provider>
  );
};

export default App;