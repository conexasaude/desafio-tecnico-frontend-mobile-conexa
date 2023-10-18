import {createContext, ReactNode, useState} from 'react';

interface OnOpenDialogProps {
  message: string;
  title: string;
}

export type AppContextDataProps = {
  isLoading: boolean;
  dialogVisible: boolean;
  dialogMessage: string;
  dialogTitle: string;
  onRequestCloseDialog: () => void;
  setIsLoading: (value: boolean) => void;
  onOpenDialog: (props: OnOpenDialogProps) => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextDataProps>(
  {} as AppContextDataProps,
);

function AppContextProvider({children}: AppContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');

  function onRequestCloseDialog() {
    setDialogVisible(false);
    setDialogTitle('');
    setDialogMessage('');
  }

  function onOpenDialog({message, title}: OnOpenDialogProps) {
    setDialogMessage(message);
    setDialogTitle(title);
    setDialogVisible(true);
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        dialogVisible,
        dialogMessage,
        dialogTitle,
        onRequestCloseDialog,
        setIsLoading,
        onOpenDialog,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export {AppContext, AppContextProvider};
