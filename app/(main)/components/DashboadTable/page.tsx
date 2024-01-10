'use client';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

interface CustomerData {
    pet: string;
    customer: string;
    time: string;
    codes: string;
    location: string;
    action: string;
}

interface DashboardTableProps {
    tableName: string;
}

const DashboardTable: React.FC<DashboardTableProps> = ({ tableName }) => {
    const [customers, setCustomers] = useState<CustomerData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const newData: CustomerData[] = [
            { pet: 'PetName', customer: 'CustomerName', time: '14:00', codes: '1 5 6', location: 'Daycare 01', action: 'View' },
            { pet: 'PetName', customer: 'CustomerName', time: '14:00', codes: '1 5 6', location: 'Daycare 01', action: 'View' },
        ];

        setCustomers(newData);
        setLoading(false);
    }, []);

    const petAndCustomerTemplate = (rowData: CustomerData) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>
                <div>{rowData.pet}</div>
                <div style={{ marginTop: '15px' }}>{rowData.customer}</div>
            </div>
        );
    };

    const actionBodyTemplate = () => {
        return <Button label="View" icon="pi pi-eye" className="p-button-raised p-button-success" />;
    };

    return (
        <div className="grid table-demo">
            <div className="col-12">
                <div className="card">
                    <h5>{tableName}</h5>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable value={customers} scrollable scrollHeight="400px">
                            <Column body={petAndCustomerTemplate} header="Pet" style={{ minWidth: '100px' }} />
                            <Column field="time" header="Time" style={{ minWidth: '50px' }} />
                            <Column field="codes" header="Codes" style={{ minWidth: '80px' }} />
                            <Column field="location" header="Location" style={{ minWidth: '100px' }} />
                            <Column header="Action" body={actionBodyTemplate} style={{ minWidth: '100px' }} />
                        </DataTable>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardTable;
