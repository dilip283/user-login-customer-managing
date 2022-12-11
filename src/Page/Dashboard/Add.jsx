import { useState, useRef, useEffect } from "react"
import Swal from "sweetalert2";


const Add = ({  customers, setCustomers, setIsAdding }) => {

  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  

  const textInput = useRef(null);

  useEffect(() => {
      textInput.current.focus();
  }, [])

  const handleAdd = e => {
      e.preventDefault();
      if (!customerName || !email || !phone || !address || !dob) {
          return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true
          });
      }

      const id = customers.length + 1;
      const newCustomer = {
          id,
          customerName,
          email,
          phone,
          address,
          dob      
      }
      customers.push(newCustomer);
      setCustomers(customers);
      setIsAdding(false);

      Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: `${customerName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500
      });
  }
  return (
    <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Customer</h1>
                <label htmlFor="customerName">Customer Name</label>
                <input
                    id="customerName"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
  )
}

export default Add