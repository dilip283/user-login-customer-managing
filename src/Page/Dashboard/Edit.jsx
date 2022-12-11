import { useState, } from 'react'
import Swal from 'sweetalert2';

const Edit = ({ customers, selectedCustomer, setCustomers, setIsEditing }) => {
  const id = selectedCustomer.id;

    const [customerName, setCustomerName] = useState(selectedCustomer.customerName);
    const [email, setEmail] = useState(selectedCustomer.email);
    const [phone, setPhone] = useState(selectedCustomer.phone);
    const [address, setAddress] = useState(selectedCustomer.address);
    const [dob, setDOB] = useState(selectedCustomer.dob);

    const handleUpdate = e => {
        e.preventDefault();

        if (!customerName || !email || !phone || !address || !dob) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const customer = {
            id,
            customerName,
            email,
            phone,
            address,
            dob
        };

        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                customers.splice(i, 1, customer);
                break;
            }
        }

        setCustomers(customers);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${customer.customerName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };
  return (
    <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="customerName">Customer Name</label>
                <input
                    id="customerName"
                    type="text"
                    name="customerName"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                />
                 <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
               
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="dob">Date of Birth</label>
                <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={e => setDOB(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
  )
}

export default Edit