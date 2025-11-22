import React, { useMemo } from "react";
import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { id } from "date-fns/locale";

interface InvoiceDetailsFormProps {
  invoiceData: {
    noInvoice: string;
    tanggalTerbit: string;
    noPks: string;
    tanggalPks?: string;
  };
  handleInputChange: (
    field: keyof InvoiceDetailsFormProps["invoiceData"],
    value: string
  ) => void;
}

const InvoiceDetailsForm = ({
  invoiceData,
  handleInputChange,
}: InvoiceDetailsFormProps) => {
  const dueDate = useMemo(() => {
    if (invoiceData.tanggalTerbit) {
      const newDueDate = addDays(new Date(invoiceData.tanggalTerbit), 14);
      return newDueDate;
    }
    return null;
  }, [invoiceData.tanggalTerbit]);

  return (
    <Card className="mt-6 p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <Label>No. Invoice</Label>
          <InputGroup>
            <InputGroupInput
              value={invoiceData.noInvoice}
              onChange={(e) => handleInputChange("noInvoice", e.target.value)}
              placeholder="0001"
              required
            />
            <InputGroupAddon align="inline-end">/KCUBD/102025</InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Tanggal Terbit</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-between text-left font-normal",
                  !invoiceData.tanggalTerbit && "text-muted-foreground"
                )}
              >
                {invoiceData.tanggalTerbit ? (
                  format(new Date(invoiceData.tanggalTerbit), "dd-MM-yyyy", {
                    locale: id,
                  })
                ) : (
                  <span>Pilih tanggal</span>
                )}
                <CalendarIcon className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <Calendar
                mode="single"
                selected={
                  invoiceData.tanggalTerbit
                    ? new Date(invoiceData.tanggalTerbit)
                    : undefined
                }
                onSelect={(d) =>
                  handleInputChange("tanggalTerbit", d?.toISOString() ?? "")
                }
                initialFocus
                locale={id}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Due Date</Label>
          <Input
            type="text"
            disabled
            value={dueDate ? format(dueDate, "dd-MM-yyyy", { locale: id }) : ""}
            placeholder="dd-mm-yyyy"
          />
          <p className="caption-large-reguler text-neutral-90 mt-1">
            Due date dihitung otomatis 14 hari setelah tanggal terbit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label>No. PKS</Label>
            <span className="body-small-reguler text-neutral-90">Optional</span>
          </div>
          <Input
            type="text"
            placeholder="Masukkan nomor PKS"
            value={invoiceData.noPks}
            onChange={(e) => handleInputChange("noPks", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label>Tanggal PKS</Label>
            <span className="body-small-reguler text-neutral-90">Optional</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal",
                  !invoiceData.tanggalPks && "text-muted-foreground"
                )}
              >
                {invoiceData.tanggalPks ? (
                  format(new Date(invoiceData.tanggalPks), "dd-MM-yyyy", {
                    locale: id,
                  })
                ) : (
                  <span>Pilih tanggal</span>
                )}
                <CalendarIcon className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <Calendar
                mode="single"
                selected={
                  invoiceData.tanggalPks
                    ? new Date(invoiceData.tanggalPks)
                    : undefined
                }
                onSelect={(d) =>
                  handleInputChange("tanggalPks", d?.toISOString() ?? "")
                }
                initialFocus
                locale={id}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Card>
  );
};

export default InvoiceDetailsForm;
