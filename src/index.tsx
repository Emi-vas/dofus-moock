import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);

