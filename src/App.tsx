import React, { Suspense, lazy } from 'react';
import './App.css';
import Loading from './pages/LoadingPage';

const ReviewGenerator = lazy(() => import('./pages/ReviewGenerator'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <ReviewGenerator/>
      </Suspense>
    </div>
  );
}

export default App;
