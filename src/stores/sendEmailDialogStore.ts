import { create } from "zustand";

interface SendEmailDialogState {
  isSendEmailDialogOpen: boolean;
  openSendEmailDialog: () => void;
  closeSendEmailDialog: () => void;
}

export const useSendEmailDialogStore = create<SendEmailDialogState>((set) => ({
  isSendEmailDialogOpen: false,
  openSendEmailDialog: () => set({ isSendEmailDialogOpen: true }),
  closeSendEmailDialog: () => set({ isSendEmailDialogOpen: false }),
}));
