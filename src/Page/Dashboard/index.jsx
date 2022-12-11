import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { customerData } from '../../data';

function Dashboard  () {

    const [customers, setCustomers] = useState(customerData);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [customer] = customers.filter(customer => customer.id === id);

        setSelectedCustomer(customer);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [customer] = customers.filter(customer => customer.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${customer.customerName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setCustomers(customers.filter(customer => customer.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        customers={customers}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    customers={customers}
                    setCustomers={setCustomers}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    customers={customers}
                    selectedCustomer={selectedCustomer}
                    setCustomers={setCustomers}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;