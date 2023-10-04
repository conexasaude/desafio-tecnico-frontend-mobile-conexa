import React from 'react';

const useToast = jest.fn(() => ({
  show: jest.fn(),
}));

const ToastProvider = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>;
};

export { useToast, ToastProvider };
