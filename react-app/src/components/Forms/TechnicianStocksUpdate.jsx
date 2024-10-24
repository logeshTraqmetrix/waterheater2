import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'

const TechnicianStocksUpdate = () => {
  const [technicianData, setTechnicianData] = useState([])
  const [selectedTechnician, setSelectedTechnician] = useState('')
  const [loading, setLoading] = useState(false)
  const [technicianStock, setTechnicianStock] = useState([])
  const [addQty, setAddQty] = useState([])
  const [sparesData, setSparesData] = useState([])

  useEffect(() => {
    axios.get('/server/waterheater_1_function/gettechnicians')
      .then((response) => {
        console.log('technician', response.data)
        setTechnicianData(response.data)
      })
      .catch((error) => {
        console.log('error in getting technician', error)
      })
  }, [])

  const handleGetData = () => {
    const selectedTech = technicianData.find(
      tech => tech.Technician_Name === selectedTechnician
    )
    if (selectedTech) {
      console.log('Technician Email:', selectedTech.Technician_Email)
      axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
        table: 'technician_stocks',
        column: 'Technician_Email',
        value: selectedTech.Technician_Email
      }))}`)
        .then((resp) => {
          console.log('response from filtered ticket', resp.data)
          setTechnicianStock(resp.data)
        }).catch((error) => {
          console.log('error in getting filtered technician stocks', error)
        })

      axios.get('/server/waterheater_1_function/allgetspares')
        .then((res) => {
          console.log('response from spares', res.data.records)
          setSparesData(res.data.records)
        })
        .catch((error) => {
          console.log('error in getting spares data', error)
        })
    }
  }

  const handleQtyChange = (name, value) => {
    setAddQty(prevState => {
      const updatedQty = [...prevState]
      const index = updatedQty.findIndex(item => item.Spares_Name === name)

      if (index !== -1) {
        updatedQty[index].Add_Qty = value
      } else {
        updatedQty.push({ Spares_Name: name, Add_Qty: value })
      }

      return updatedQty
    })
  }

  const clearQtyField = (sparesName) => {
    setAddQty(prevState => {
      const updatedQty = [...prevState]
      const index = updatedQty.findIndex(item => item.Spares_Name === sparesName)

      if (index !== -1) {
        updatedQty[index].Add_Qty = ''
      }

      return updatedQty
    })
  }


  const handleValidation = async () => {
    let updatedData = [];
    let values = {};
  
    for (let data of addQty) {
      for (let spares of sparesData) {
        if (parseInt(data.Add_Qty) > 0 && data.Spares_Name === spares.spares_table.Material_Name) {
          // If the added quantity exceeds the available quantity
          if (parseInt(data.Add_Qty) > parseInt(spares.spares_table.Available_Qty)) {
            
            // Show alert to the user
            const result = await Swal.fire({
              title: `${data.Spares_Name} has only ${spares.spares_table.Available_Qty} Qty`,
              showDenyButton: true,
              icon: "warning",
              confirmButtonText: "Save",
              denyButtonText: `Don't save`
            });
  
            if (result.isConfirmed) {
              clearQtyField(data.Spares_Name);
              console.log(`${data.Spares_Name} confirmed by user, skipping update and removing from addQty.`);
              continue; // Skip to the next item
            } else if (result.isDenied) {
              // Clear quantity if the user denies the action
              Swal.fire("Changes are not saved", "", "info");
              clearQtyField(data.Spares_Name); // Reset the input field for the item
              return; // Stop the process entirely
            }
  
          } else {
            // If quantity is valid, add to updatedData array
            const updatedObj = {
              ...values,
              ROWID: spares.spares_table.ROWID,
              Available_Qty: (parseInt(spares.spares_table.Available_Qty) - parseInt(data.Add_Qty)),
              Consumed_Qty: (parseInt(spares.spares_table.Consumed_Qty) + parseInt(data.Add_Qty))
            };
            updatedData.push(updatedObj);
          }
        }
      }
    }
  
    console.log('added value', addQty);
    console.log('posted data for spares', updatedData);
  
    if (updatedData.length > 0) {
      // Proceed with sending the updated data to the server
        try {
          const res = await axios.put('/server/waterheater_1_function/updatespares', { data: updatedData });
          console.log('response from updated spares', res);
          return res.status; // Return status for further processing
        } catch (error) {
          console.log('error in updating sparesData', error);
          return error.response ? error.response.status : 500; // Handle error case
        }
    }
  };

  

  const handleTechnicianPost = () => {
    let technicianStockPayload = []
    const values = {}

    addQty.map((addedValue) => {
      technicianStock.map((stock) => {

       if (addedValue.Add_Qty>0) {
        if (addedValue.Spares_Name === stock.technician_stocks.Spares_Name) {
          const updatedObj = {
            ...values,
            ROWID: stock.technician_stocks.ROWID,
            Available_Qty: (parseInt(stock.technician_stocks.Available_Qty) + parseInt(addedValue.Add_Qty))
          }
          technicianStockPayload.push(updatedObj)
        }
       }
      })
    })

    console.log('posted data for technician stocks', technicianStockPayload)

    axios.put('/server/waterheater_1_function/update-technician-stock',{data:technicianStockPayload})
      .then((response)=>{
        console.log('responce from update technician stock',response)
      })
      .catch((error)=>{
        console.log('error in updating technician stock',error)
      })


    return
  }



  const handleMainSubmit = async () => {
    let responseCode = await handleValidation()
    
    if (responseCode === 200) {
      handleTechnicianPost()
    } else {
      console.log('Validation failed or error occurred, status:', responseCode)
    }
  }
  

  return (
    <div>
      <Form>
        <Form.Group controlId="technicianSelect">
          <Form.Label>Select Technician</Form.Label>
          <Form.Control
            as="select"
            value={selectedTechnician}
            onChange={(e) => setSelectedTechnician(e.target.value)}
          >
            <option value="">Select</option>
            {technicianData.map((technician) => (
              <option key={technician.ROWID} value={technician.Technician_Name}>
                {technician.Technician_Name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button onClick={handleGetData} disabled={!selectedTechnician}>
          {loading ? 'Loading...' : 'Get Data'}
        </Button>
      </Form>

      {technicianStock.length > 0 && (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Technician Name</th>
              <th>Spares Name</th>
              <th>Consumed Qty</th>
              <th>Available Qty</th>
              <th>Add Qty</th>
            </tr>
          </thead>
          <tbody>
            {technicianStock.map((stockItem) => {
              const qtyItem = addQty.find(item => item.Spares_Name === stockItem.technician_stocks.Spares_Name)
              return (
                <tr key={stockItem.technician_stocks.ROWID}>
                  <td>{stockItem.technician_stocks.Technician_Name}</td>
                  <td>{stockItem.technician_stocks.Spares_Name}</td>
                  <td>{stockItem.technician_stocks.Consumed_Qty}</td>
                  <td>{stockItem.technician_stocks.Available_Qty}</td>
                  <td>
                    <Form.Control
                      type="number"
                      value={qtyItem?.Add_Qty || ''}
                      onChange={(e) => handleQtyChange(stockItem.technician_stocks.Spares_Name, e.target.value)}
                      placeholder="Add Qty"
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}

      <Button onClick={handleMainSubmit}>Submit</Button>
    </div>
  )
}

export default TechnicianStocksUpdate

















// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Form, Table } from 'react-bootstrap'
// import Swal from 'sweetalert2'

// const TechnicianStocksUpdate = () => {
//   const [technicianData, setTechnicianData] = useState([])
//   const [selectedTechnician, setSelectedTechnician] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [technicianStock, setTechnicianStock] = useState([])
//   const [addQty, setAddQty] = useState([])
//   const [sparesData, setSparesData] = useState([])

//   useEffect(() => {
//     // Fetch technicians data
//     const fetchTechnicians = async () => {
//       try {
//         const response = await axios.get('/server/waterheater_1_function/gettechnicians')
//         console.log('Technicians:', response.data)
//         setTechnicianData(response.data)
//       } catch (error) {
//         console.error('Error fetching technician data:', error)
//       }
//     }

//     fetchTechnicians()
//   }, [])

//   const handleGetData = async () => {
//     const selectedTech = technicianData.find(tech => tech.Technician_Name === selectedTechnician)
    
//     if (selectedTech) {
//       try {
//         // Fetch technician stocks
//         const stockResponse = await axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//           table: 'techinician_stocks',
//           column: 'Techinician_Email',
//           value: selectedTech.Technician_Email
//         }))}`)
//         setTechnicianStock(stockResponse.data)

//         // Fetch spares data
//         const sparesResponse = await axios.get('/server/waterheater_1_function/allgetspares')
//         setSparesData(sparesResponse.data.records)
//       } catch (error) {
//         console.error('Error fetching technician stock or spares data:', error)
//       }
//     }
//   }

//   const handleQtyChange = (name, value) => {
//     setAddQty(prevState => {
//       const updatedQty = [...prevState]
//       const index = updatedQty.findIndex(item => item.Spares_Name === name)

//       if (index !== -1) {
//         updatedQty[index].Add_Qty = value
//       } else {
//         updatedQty.push({ Spares_Name: name, Add_Qty: value })
//       }

//       return updatedQty
//     })
//   }

//   const clearQtyField = (sparesName) => {
//     setAddQty(prevState => {
//       const updatedQty = prevState.map(item =>
//         item.Spares_Name === sparesName ? { ...item, Add_Qty: '' } : item
//       )
//       return updatedQty
//     })
//   }

//   const handleValidation = async () => {
//     let updatedData = []

//     for (let data of addQty) {
//       const spares = sparesData.find(spare => spare.spares_table.Material_Name === data.Spares_Name)
      
//       if (parseInt(data.Add_Qty) > 0 && spares) {
//         if (parseInt(data.Add_Qty) > parseInt(spares.spares_table.Available_Qty)) {
//           const result = await Swal.fire({
//             title: `${data.Spares_Name} has only ${spares.spares_table.Available_Qty} Qty`,
//             showDenyButton: true,
//             icon: 'warning',
//             confirmButtonText: 'Save',
//             denyButtonText: `Don't save`
//           })

//           if (result.isConfirmed) {
//             clearQtyField(data.Spares_Name)
//             continue
//           } else {
//             Swal.fire('Changes are not saved', '', 'info')
//             clearQtyField(data.Spares_Name)
//             return
//           }
//         } else {
//           updatedData.push({
//             ROWID: spares.spares_table.ROWID,
//             Available_Qty: parseInt(spares.spares_table.Available_Qty) - parseInt(data.Add_Qty),
//             Consumed_Qty: parseInt(spares.spares_table.Consumed_Qty) + parseInt(data.Add_Qty)
//           })
//         }
//       }
//     }

//     try {
//       const res = await axios.put('/server/waterheater_1_function/updatespares', { data: updatedData })
//       console.log('responce from updating spares table',res)
//       return res.status
//     } catch (error) {
//       console.error('Error updating spares data:', error)
//       return error.response ? error.response.status : 500
//     }
//   }

//   const handleTechnicianPost = async () => {
//     const technicianStockPayload = addQty.map((addedValue) => {
//       const stock = technicianStock.find(stockItem => stockItem.techinician_stocks.Spares_Name === addedValue.Spares_Name)
//       if (stock && addedValue.Add_Qty > 0) {
//         return {
//           ROWID: stock.techinician_stocks.ROWID,
//           Available_Qty: parseInt(stock.techinician_stocks.Available_Qty) + parseInt(addedValue.Add_Qty)
//         }
//       }
//       return null
//     }).filter(Boolean)

//     try {
//       const response = await axios.put('/server/waterheater_1_function/update-technician-stock', { data: technicianStockPayload })
//       console.log('Technician stock updated:', response)
//     } catch (error) {
//       console.error('Error updating technician stock:', error)
//     }
//   }

//   const handleMainSubmit = async () => {
//     setLoading(true)
//     const responseCode = await handleValidation()

//     if (responseCode === 200) {
//       await handleTechnicianPost()
//       Swal.fire('Update Successful!', 'Technician stock and spares have been updated', 'success')
//       setAddQty([]) // Clear the input fields
//       setTechnicianStock([]) // Refresh component by clearing the data
//     } else {
//       Swal.fire('Update Failed', 'Something went wrong during validation or submission', 'error')
//     }
//     setLoading(false)
//   }

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="technicianSelect">
//           <Form.Label>Select Technician</Form.Label>
//           <Form.Control
//             as="select"
//             value={selectedTechnician}
//             onChange={(e) => setSelectedTechnician(e.target.value)}
//           >
//             <option value="">Select</option>
//             {technicianData.map((technician) => (
//               <option key={technician.ROWID} value={technician.Technician_Name}>
//                 {technician.Technician_Name}
//               </option>
//             ))}
//           </Form.Control>
//         </Form.Group>
//         <Button onClick={handleGetData} disabled={!selectedTechnician || loading}>
//           {loading ? 'Loading...' : 'Get Data'}
//         </Button>
//       </Form>

//       {technicianStock.length > 0 && (
//         <Table striped bordered hover className="mt-4">
//           <thead>
//             <tr>
//               <th>Technician Name</th>
//               <th>Spares Name</th>
//               <th>Consumed Qty</th>
//               <th>Available Qty</th>
//               <th>Add Qty</th>
//             </tr>
//           </thead>
//           <tbody>
//             {technicianStock.map((stockItem) => {
//               const qtyItem = addQty.find(item => item.Spares_Name === stockItem.techinician_stocks.Spares_Name)
//               return (
//                 <tr key={stockItem.techinician_stocks.ROWID}>
//                   <td>{stockItem.techinician_stocks.Techinician_Name}</td>
//                   <td>{stockItem.techinician_stocks.Spares_Name}</td>
//                   <td>{stockItem.techinician_stocks.Consumed_Qty}</td>
//                   <td>{stockItem.techinician_stocks.Available_Qty}</td>
//                   <td>
//                     <Form.Control
//                       type="number"
//                       value={qtyItem?.Add_Qty || ''}
//                       onChange={(e) => handleQtyChange(stockItem.techinician_stocks.Spares_Name, e.target.value)}
//                       placeholder="Add Qty"
//                     />
//                   </td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </Table>
//       )}

//       <Button onClick={handleMainSubmit} disabled={loading}>
//         {loading ? 'Submitting...' : 'Submit'}
//       </Button>
//     </div>
//   )
// }

// export default TechnicianStocksUpdate
