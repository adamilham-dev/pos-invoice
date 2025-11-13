import { create } from "zustand";

interface RejectInvoiceDialogState {
  isRejectInvoiceDialogOpen: boolean;
  openRejectInvoiceDialog: () => void;
  closeRejectInvoiceDialog: () => void;
}

export const useRejectInvoiceDialogStore = create<RejectInvoiceDialogState>(
  (set) => ({
    isRejectInvoiceDialogOpen: false,
    openRejectInvoiceDialog: () => set({ isRejectInvoiceDialogOpen: true }),
    closeRejectInvoiceDialog: () => set({ isRejectInvoiceDialogOpen: false }),
  })
);
