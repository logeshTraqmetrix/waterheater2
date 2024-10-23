import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import Swal from 'sweetalert2';

const TechnicianStockAdd = () => {
  const [technicianData, setTechnicianData] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState('');
  const [loading, setLoading] = useState(false);
  const [technicianStock, setTechnicianStock] = useState([]);
  const [sparesData, setSparesData] = useState([]);
  const [uniqueMaterials, setUniqueMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    axios.get('/server/waterheater_1_function/gettechnicians')
      .then((response) => {
        console.log('technician', response.data);
        setTechnicianData(response.data);
      })
      .catch((error) => {
        console.log('error in getting technician', error);
      });
  }, []);

  const handleGetData = () => {
    const selectedTech = technicianData.find(
      tech => tech.Technician_Name === selectedTechnician
    );

    if (selectedTech) {
      setLoading(true);
      axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
        table: 'techinician_stocks',
        column: 'Technician_Email',
        value: selectedTech.Technician_Email
      }))}`)
        .then((resp) => {
          console.log('response from filtered ticket', resp.data);
          setTechnicianStock(resp.data);

          axios.get('/server/waterheater_1_function/allgetspares')
            .then((res) => {
              console.log('response from spares', res.data.records);
              setSparesData(res.data.records);

              // Filter out duplicate materials where Spares_Name matches Material_Name
              const uniqueMaterialsArr = res.data.records.filter(spare => {
                return !resp.data.some(stock => stock.techinician_stocks.Spares_Name === spare.spares_table.Material_Name);
              });

              const materialsDropdownOptions = uniqueMaterialsArr.map(spare => ({
                value: spare.spares_table.Material_Name,
                label: spare.spares_table.Material_Name,
              }));

              setUniqueMaterials(materialsDropdownOptions);
            })
            .catch((error) => {
              console.log('error in getting spares data', error);
            })
            .finally(() => setLoading(false));
        }).catch((error) => {
          console.log('error in getting filtered technician stocks', error);
          setLoading(false);
        });
    }
  };

  const handleSubmit = () => {
    const submitData = selectedMaterials.map(material => ({
      Spares_Name: material.value,
      Consumed_Qty: 0,
      Techinician_Name: selectedTechnician,
      Available_Qty: 0,
      Technician_Email: technicianData.find(tech => tech.Technician_Name === selectedTechnician)?.Technician_Email || ''
    }));

    console.log('payload for technician stocks',submitData);

    axios.post('/server/waterheater_1_function/add-technician-stock',{data:submitData})
      .then((response)=>{
        console.log('response from technician stock added',response.data)
      })
      .catch((error)=>{
        console.log('error from adding technician stock response',error)
      })
  };

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
        <Button onClick={handleGetData} disabled={!selectedTechnician || loading}>
          {loading ? 'Loading...' : 'Get Data'}
        </Button>
      </Form>

      {uniqueMaterials.length > 0 && (
        <>
          <Select
            isMulti
            options={uniqueMaterials}
            onChange={setSelectedMaterials}
            value={selectedMaterials}
          />
          <Button onClick={handleSubmit} className="mt-3">Submit</Button>
        </>
      )}
    </div>
  );
};

export default TechnicianStockAdd;
