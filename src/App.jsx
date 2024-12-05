import './App.css';
import ReactForm from './ReactForm/ReactForm';
import ReactHookForm from './ReactHookForm/ReactHookForm';

function App() {
  return (
    <>
      <h3>Формы регистрации</h3>
      <div className="app">
        <ReactForm />
        <ReactHookForm />
      </div>
    </>
  );
}

export default App;
