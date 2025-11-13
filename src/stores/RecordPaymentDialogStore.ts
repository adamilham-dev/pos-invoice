import { create } from "zustand";

interface RecordPaymentDialogState {
  isRecordPaymentDialogOpen: boolean;
  openRecordPaymentDialog: () => void;
  closeRecordPaymentDialog: () => void;
}

export const useRecordPaymentDialogStore = create<RecordPaymentDialogState>(
  (set) => ({
    isRecordPaymentDialogOpen: false,
    openRecordPaymentDialog: () => set({ isRecordPaymentDialogOpen: true }),
    closeRecordPaymentDialog: () => set({ isRecordPaymentDialogOpen: false }),
  })
);
