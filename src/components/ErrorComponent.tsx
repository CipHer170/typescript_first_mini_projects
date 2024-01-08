import React from "react";

interface ErrorMessageProps {
  error: string;
}

function ErrorComponent({ error }: ErrorMessageProps) {
  return <div>{error}</div>;
}

export default ErrorComponent;
