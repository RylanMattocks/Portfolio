import './App.css';
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import Layout from "./Layout/Layout";
import AppRoutes from "./Routes/AppRoutes";
import ErrorFallback from "./Pages/ErrorFallback";


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
