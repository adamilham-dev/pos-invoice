import InvoicePDFTemplate from "@/components/pdf/InvoicePDFTemplate";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { pdf } from "@react-pdf/renderer";
import { FileText } from "lucide-react";

const ShowPdf = () => {
  const handleOpenPdf = async () => {
    const blob = await pdf(<InvoicePDFTemplate />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <>
      <DropdownMenuItem onClick={handleOpenPdf}>
        <FileText />
        Lihat PDF
      </DropdownMenuItem>
    </>
  );
};

export default ShowPdf;
