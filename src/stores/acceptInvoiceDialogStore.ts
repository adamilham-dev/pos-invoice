import { create } from "zustand";

interface AccepetInvoiceDialogState {
  isAccepetInvoiceDialogOpen: boolean;
  openAccepetInvoiceDialog: () => void;
  closeAccepetInvoiceDialog: () => void;
}

export const useAccepetInvoiceDialogStore = create<AccepetInvoiceDialogState>(
  (set) => ({
    isAccepetInvoiceDialogOpen: false,
    openAccepetInvoiceDialog: () => set({ isAccepetInvoiceDialogOpen: true }),
    closeAccepetInvoiceDialog: () => set({ isAccepetInvoiceDialogOpen: false }),
  })
);
