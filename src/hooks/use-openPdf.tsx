import InvoicePDFTemplate from "@/components/pdf/InvoicePDFTemplate";
import { pdf } from "@react-pdf/renderer";

export async function useOpenPdf() {
  const blob = await pdf(<InvoicePDFTemplate />).toBlob();
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}
