import { Route, Routes } from 'react-router-dom'
import { MainPage, Busket } from './pages/'
import Auth from './components/Auth';
import Item from './components/Item';
import { reducer } from './store'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


function App() {
  const store = configureStore({ reducer })
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/basket' element={<Busket />} />
          <Route path='/item' element={<Item />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
