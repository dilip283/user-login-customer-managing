import React from 'react'

const List = ({customers, handleEdit, handleDelete}) => {

  return (
    <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Date Of Birth</th>
                        
                        
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.length > 0 ? (
                        customers.map((customer, i) => (
                            <tr key={customer.id}>
                                <td>{i + 1}</td>
                                <td>{customer.customerName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.dob}</td>
                                
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(customer.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>No customers</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
  )
}

export default List