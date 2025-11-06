import { TypeCustomer } from "@/types/customer";

export async function getDataCustomer(): Promise<TypeCustomer[]> {
  return [
    {
      name: "PT BCA FINANCE (BPKB)",
      noTlp: "081234567890",
      email: "bcafinance@gmail.com",
      address:
        "Jl. Pondok Kelapa Timur Blok E7/8, Duren Sawit, Jakarta Timur, DKI Jakarta, 13450",
      notes: "Dibuat pada 4 Okt 2025 oleh Fadhil Ibrahim",
    },
  ];
}
