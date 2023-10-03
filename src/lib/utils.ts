export interface ThunkCallback {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}
