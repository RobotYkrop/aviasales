import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './components/App/App';

const app = document.getElementById('root');
const root = createRoot(app);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
