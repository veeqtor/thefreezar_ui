import * as React from 'react';
import * as Sentry from '@sentry/browser';

interface IErrorBoundaryState {
  hasError: boolean;
  eventId: string;
}
const { SENTRY_DSN } = process.env;
Sentry.init({ dsn: SENTRY_DSN });

export default class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  state = { hasError: false, eventId: '' };

  static getDerivedStateFromError(): Pick<IErrorBoundaryState, 'hasError'> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    Sentry.withScope((scope: { setExtras: (arg0: React.ErrorInfo) => void }) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) return children;
    return (
      <div>
        <h2>Something went wrong.</h2>
        <button onClick={(): void => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>
      </div>
    );
  }
}
