import { create } from "zustand";

interface SignatureDialogState {
  isSignatureDialogOpen: boolean;
  openSignatureDialog: () => void;
  closeSignatureDialog: () => void;
}

export const useSignatureDialogStore = create<SignatureDialogState>((set) => ({
  isSignatureDialogOpen: false,
  openSignatureDialog: () => set({ isSignatureDialogOpen: true }),
  closeSignatureDialog: () => set({ isSignatureDialogOpen: false }),
}));
