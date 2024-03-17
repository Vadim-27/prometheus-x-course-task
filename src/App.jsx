import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SharedLayout from 'route/SharedLayout';
import {store, persistor} from './redux/store'

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/prometheus-x-course-task">
          <SharedLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
