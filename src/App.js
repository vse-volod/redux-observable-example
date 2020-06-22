import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from './store/store';
import Main from './pages/main';

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
