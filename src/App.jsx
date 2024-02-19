import { BrowserRouter } from 'react-router-dom';
import SharedLayout from 'route/SharedLayout';

export const App = () => {
  return (
    <BrowserRouter basename="/prometheus-x-course-task">
      <SharedLayout />
    </BrowserRouter>
  );
};
