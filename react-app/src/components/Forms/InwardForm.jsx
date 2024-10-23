import React, { useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Container,
    Autocomplete
} from '@mui/material';
import {
    Add as AddIcon,
    Filter,
    Remove as RemoveIcon
} from '@mui/icons-material';
import axios from 'axios';

const InwardForm = () => {
    const [sparesData, setSparesData] = useState([]);
    const [fields, setFields] = useState([
        { uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }
    ]);

    const fetchData = async () => {
        try {
            const response = await fetch('/server/waterheater_1_function/getspares');
            const data = await response.json();
            setSparesData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching spares data:', error);
        }
    };
    
    // Use fetchData inside useEffect
    useEffect(() => {
        fetchData();
    }, []);
    

    const addField = () => {
        setFields([
            ...fields,
            { uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }
        ]);
    };

    const removeField = (uniqueKey) => {
        setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
    };

    const handleChange = (index, name, value) => {
        const updatedFields = fields.map((field, i) => (
            i === index ? { ...field, [name]: value } : field
        ));
        setFields(updatedFields);
    };

    const updateSparesValue = () => {


        const inwardPayload = fields.map(({ uniqueKey, materialName, date, quantity, ...rest }) => ({
            Material_Name: materialName,
            Inward_Date: date,
            Quantity: parseInt(quantity),
            ...rest,
        }));
        console.log('inward post payload', inwardPayload)

        axios.post('/server/waterheater_1_function/add-inward', { data: inwardPayload })
            .then((res) => {
                console.log('response', res)
            })
            .catch((error) => {
                console.log('error in posting inward', error)
            })



        // Function to process spares data and update quantities
        const updateSparesData = (sparesData, fields) => {
            // Create a deep copy of sparesData to avoid mutating the original
            const updatedSparesData = JSON.parse(JSON.stringify(sparesData));

            // Create a map to sum up quantities for each material
            const materialQuantities = {};
            fields.forEach(field => {
                if (!materialQuantities[field.materialName]) {
                    materialQuantities[field.materialName] = 0;
                }
                materialQuantities[field.materialName] += parseInt(field.quantity) || 0;
            });

            // Update the spares data with new quantities
            return updatedSparesData.map(spare => {
                const additionalQty = materialQuantities[spare.Material_Name] || 0;
                if (additionalQty > 0) {
                    const inwardQty = parseInt(spare.Inward_Qty) || 0;
                    const consumedQty = parseInt(spare.Consumed_Qty) || 0;

                    return {
                        ...spare,
                        Inward_Qty: (inwardQty + additionalQty).toString(),
                        Available_Qty: (inwardQty + additionalQty - consumedQty).toString()
                    };
                }
                return null;
            });
        };


        const filteredData = updateSparesData(sparesData, fields);
        console.log('Updated data:', filteredData);


        // Extract only the necessary fields
        const sparesPayload = filteredData
            .filter(item => item != null)  // Filters out null items
            .map(item => ({
                ROWID: item.ROWID,
                Inward_Qty: item.Inward_Qty,
                Available_Qty: item.Available_Qty
            }));


        console.log('payload', sparesPayload)

        axios.put('/server/waterheater_1_function/updatespares', { data: sparesPayload })
            .then((res) => {
                console.log('response from updating spares', res)
            })
            .catch((err) => {
                console.log('error in updating', err)
            })



    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fields);
        try {
            await updateSparesValue();  // Call to update spares
    
            // Reset the form fields to initial state
            setFields([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }]);
    
            // Re-fetch the spares data to refresh the component with updated values
            await fetchData();
    
            console.log('Form submitted and component refreshed');
        } catch (error) {
            console.log('Error in form submission', error);
        }
    };
    

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Inward Form
            </Typography>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <Paper
                        key={field.uniqueKey}
                        elevation={2}
                        sx={{
                            p: 3,
                            mb: 3,
                            backgroundColor: '#fafafa'
                        }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Autocomplete
                                    fullWidth
                                    value={field.materialName}
                                    onChange={(event, newValue) => {
                                        handleChange(index, "materialName", newValue);
                                    }}
                                    options={sparesData.map(option => option.Material_Name)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Material Name"
                                            required
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Date"
                                    type="date"
                                    value={field.date}
                                    onChange={(e) => handleChange(index, "date", e.target.value)}
                                    required
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Quantity"
                                    type="number"
                                    value={field.quantity}
                                    onChange={(e) => handleChange(index, "quantity", e.target.value)}
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        {fields.length > 1 && (
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => removeField(field.uniqueKey)}
                                startIcon={<RemoveIcon />}
                                sx={{ mt: 2 }}
                            >
                                Remove
                            </Button>
                        )}
                    </Paper>
                ))}
                <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        onClick={addField}
                        startIcon={<AddIcon />}
                    >
                        Add New
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Grid>
            </form>
        </Container>
    );
};

export default InwardForm;

