import React from 'react';

const ViewCustomerDetails = () => {
    const jsonData = [
        {
          "CREATORID": "15205000000030035",
          "Customer_Whatsapp": "7418529632",
          "MODIFIEDTIME": "2024-06-11 16:36:42:785",
          "Customer_Name": "TEst",
          "Customer_Phone": "7894561322",
          "CREATEDTIME": "2024-06-11 16:36:42:785",
          "Customer_Email": "test@gmail.com",
          "ROWID": "15205000000147847",
          "Customer_Address": "test addresss"
        },
        {
          "CREATORID": "15205000000030035",
          "Customer_Whatsapp": null,
          "MODIFIEDTIME": "2024-06-11 17:06:46:780",
          "Customer_Name": "Test Customer",
          "Customer_Phone": null,
          "CREATEDTIME": "2024-06-11 17:06:46:780",
          "Customer_Email": null,
          "ROWID": "15205000000147850",
          "Customer_Address": null
        },
       
      ];
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((customer, index) => (
            <tr key={index}>
              <td>{customer.Customer_Name}</td>
              <td>{customer.Customer_Phone}</td>
              <td>{customer.Customer_Address}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomerDetails
