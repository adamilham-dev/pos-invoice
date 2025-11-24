"use client";

import DialogRightCustomer from "@/components/dialog/DialogRightCustomer";
import DialogValidasiForm from "@/components/dialog/DialogValidasiForm";
import PageHeader from "@/components/layout/PageHeader";
import { columnsCustomer } from "@/components/tables/customer/Columns";
import { DataTable } from "@/components/tables/customer/DataTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getDataCustomer } from "@/data/customer";
import { useCustomerDialogStore } from "@/stores/customerDialogStore";
import { TypeCustomer } from "@/types/customer";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const CustomerPage = () => {
  const [data, setData] = useState<TypeCustomer[]>([]);
  const { openCustomerDialog } = useCustomerDialogStore();

  useEffect(() => {
    async function fetchData() {
      const customerData = await getDataCustomer();
      setData(customerData);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 pl-9 md:pr-10 py-10">
      <PageHeader title="Customer">
        <Button onClick={openCustomerDialog}>
          <Plus /> Tambah customer
        </Button>
      </PageHeader>

      <Card className="p-4 md:px-4 md:py-0">
        <DataTable columns={columnsCustomer} data={data} />
      </Card>

      <DialogRightCustomer />
      <DialogValidasiForm />
    </div>
  );
};

export default CustomerPage;
