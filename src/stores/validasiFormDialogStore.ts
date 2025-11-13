import { create } from "zustand";

type State = {
  isValidasiFormDialogOpen: boolean;
  onConfirm: (() => void) | null;
};

type Actions = {
  openValidasiFormDialog: (onConfirmCallback?: () => void) => void;
  closeValidasiFormDialog: () => void;
  executeConfirm: () => void;
};

export const useValidasiFormDialogStore = create<State & Actions>(
  (set, get) => ({
    isValidasiFormDialogOpen: false,
    onConfirm: null,
    openValidasiFormDialog: (onConfirmCallback) =>
      set({
        isValidasiFormDialogOpen: true,
        onConfirm: onConfirmCallback || null,
      }),
    closeValidasiFormDialog: () =>
      set({ isValidasiFormDialogOpen: false, onConfirm: null }),
    executeConfirm: () => get().onConfirm?.(),
  })
);
