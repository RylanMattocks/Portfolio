const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="container text-center mt-5">
            <div className="alert alert-danger" role="alert">
                <h1 className="display-4">Oops! Something went wrong</h1>
                <p className="lead">We encountered an unexpected error.</p>
                <pre className="text-break text-muted">{error.message}</pre>
                <button className="btn btn-primary mt-3" onClick={resetErrorBoundary}>
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default ErrorFallback;