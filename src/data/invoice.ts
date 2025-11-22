import { TypeInvoice } from "@/types/invoice";

export const mapStatusToVariant = (status: TypeInvoice["statusInvoice"]) => {
  switch (status) {
    case "Draft":
      return "draft";
    case "Pending Approval":
      return "pending";
    case "Need Revision":
      return "revision";
    case "Open":
      return "open";
    case "Sent to Customer":
      return "sent";
    case "Partially paid":
      return "partially";
    case "Paid":
      return "paid";
    case "Cancelled":
      return "cancel";
    default:
      return "default";
  }
};

export async function getDataInvoice(): Promise<TypeInvoice[]> {
  return [
    {
      id: "09289",
      invoice: "09289/KCUBD/102025",
      totalAmount: "1500000",
      customer: "PT Maju Jaya",
      statusInvoice: "Draft",
      createdAt: "2025-10-15T09:00:00Z",
    },
    {
      id: "09290",
      invoice: "09290/KCUBD/102026",
      totalAmount: "2750000",
      customer: "CV Sukses Makmur",
      statusInvoice: "Pending Approval",
      createdAt: "2025-10-16T10:30:00Z",
    },
    {
      id: "09231",
      invoice: "09231/KCUBD/102027",
      totalAmount: "1200000",
      customer: "PT Andalan Sejahtera",
      statusInvoice: "Need Revision",
      createdAt: "2025-10-17T08:45:00Z",
    },
    {
      id: "09232",
      invoice: "09232/KCUBD/102028",
      totalAmount: "3250000",
      customer: "UD Karya Abadi",
      statusInvoice: "Open",
      createdAt: "2025-10-18T11:00:00Z",
    },
    {
      id: "09233",
      invoice: "09233/KCUBD/102029",
      totalAmount: "4500000",
      customer: "PT Sinar Terang",
      statusInvoice: "Sent to Customer",
      createdAt: "2025-10-19T14:15:00Z",
    },
    {
      id: "09234",
      invoice: "09234/KCUBD/102030",
      totalAmount: "5000000",
      customer: "CV Mandiri Bersama",
      statusInvoice: "Partially paid",
      createdAt: "2025-10-20T09:20:00Z",
    },
    {
      id: "09235",
      invoice: "09235/KCUBD/102031",
      totalAmount: "8000000",
      customer: "PT Nusantara Raya",
      statusInvoice: "Paid",
      createdAt: "2025-10-21T16:40:00Z",
    },
    {
      id: "09236",
      invoice: "09236/KCUBD/102032",
      totalAmount: "2200000",
      customer: "CV Berkah Utama",
      statusInvoice: "Cancelled",
      createdAt: "2025-10-22T12:10:00Z",
    },
  ];
}
