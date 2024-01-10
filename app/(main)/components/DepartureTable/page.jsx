'use client';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DepartureTable = ({ tableName }) => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const newData = [
            { pet: 'PetName', customer: 'CustomerName', time: '14:00' },
            { pet: 'PetName', customer: 'CustomerName', time: '14:00' },
        ];
        setCustomers(newData);

        setLoading(false);
    }, []);

    const petAndCustomerTemplate = (rowData) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>
                <div>{rowData.pet}</div>
                <div style={{ marginTop: '15px' }}>{rowData.customer}</div>
            </div>
        );
    };

    return (
        <div className="grid table-demo">
            <div className="col-12 pt-2">
                <div className="card">
                    <h5>{tableName}</h5>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable value={customers} scrollable scrollHeight="400px">
                            <Column
                                body={petAndCustomerTemplate}
                                header="Pet"
                                style={{ minWidth: '140px' }}
                            ></Column>
                            <Column field="time" header="Time" style={{ minWidth: '50px' }}></Column>

                        </DataTable>
                    )}
                </div>
            </div>
        </div >
    );
};

export default DepartureTable;
