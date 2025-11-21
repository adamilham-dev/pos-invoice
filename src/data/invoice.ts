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
      invoice: "09289/KCUBD/102025",
      totalAmount: "1500000",
      customer: "PT Maju Jaya",
      statusInvoice: "Draft",
      createdAt: "2025-10-15T09:00:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "2750000",
      customer: "CV Sukses Makmur",
      statusInvoice: "Pending Approval",
      createdAt: "2025-10-16T10:30:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "1200000",
      customer: "PT Andalan Sejahtera",
      statusInvoice: "Need Revision",
      createdAt: "2025-10-17T08:45:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "3250000",
      customer: "UD Karya Abadi",
      statusInvoice: "Open",
      createdAt: "2025-10-18T11:00:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "4500000",
      customer: "PT Sinar Terang",
      statusInvoice: "Sent to Customer",
      createdAt: "2025-10-19T14:15:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "5000000",
      customer: "CV Mandiri Bersama",
      statusInvoice: "Partially paid",
      createdAt: "2025-10-20T09:20:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "8000000",
      customer: "PT Nusantara Raya",
      statusInvoice: "Paid",
      createdAt: "2025-10-21T16:40:00Z",
    },
    {
      invoice: "09289/KCUBD/102025",
      totalAmount: "2200000",
      customer: "CV Berkah Utama",
      statusInvoice: "Cancelled",
      createdAt: "2025-10-22T12:10:00Z",
    },
  ];
}
