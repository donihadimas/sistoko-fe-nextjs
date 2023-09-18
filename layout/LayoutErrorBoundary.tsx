import type { FC, ReactNode } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <>
      <div>
        <p>Terjadi kesalahan:</p>
        <pre>{error.message}</pre>
      </div>
    </>
  );
};
