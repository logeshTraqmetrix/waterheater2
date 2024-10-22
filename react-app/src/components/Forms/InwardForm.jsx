// import React, { useEffect, useState } from 'react';
// import {
//     Button,
//     TextField,
//     Grid,
//     Paper,
//     Typography,
//     Container,
//     Autocomplete
// } from '@mui/material';
// import {
//     Add as AddIcon,
//     Filter,
//     Remove as RemoveIcon
// } from '@mui/icons-material';
// import axios from 'axios';

// const InwardForm = () => {
//     const [sparesData, setSparesData] = useState([]);
//     const [fields, setFields] = useState([
//         { uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }
//     ]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/server/waterheater_1_function/getspares');
//                 const data = await response.json();
//                 setSparesData(data);
//                 console.log(data)
//             } catch (error) {
//                 console.error('Error fetching spares data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     const addField = () => {
//         setFields([
//             ...fields,
//             { uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }
//         ]);
//     };

//     const removeField = (uniqueKey) => {
//         setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
//     };

//     const handleChange = (index, name, value) => {
//         const updatedFields = fields.map((field, i) => (
//             i === index ? { ...field, [name]: value } : field
//         ));
//         setFields(updatedFields);
//     };

//     const updateSparesValue = () => {


//         const inwardPayload = fields.map(({ uniqueKey, materialName, date, quantity, ...rest }) => ({
//             Material_Name: materialName, // Rename materialName to Material_Name
//             Inward_Date: date,          // Rename date to Inward_Date
//             Quantity: parseInt(quantity), // Convert quantity to an integer
//             ...rest // Spread the rest of the object properties, excluding uniqueKey
//         }));
//         console.log('inward post payload',inwardPayload)

//         axios.post('/server/waterheater_1_function/add-inward', { data: inwardPayload })
//             .then((res) => {
//                 console.log('response', res)
//             })
//             .catch((error) => {
//                 console.log('error in posting inward', error)
//             })


//         // Assuming sparesData is data1 and fields is data2
//         const filteredData = sparesData.filter(item1 => {
//             return fields.some(item2 => {
//                 if (item1.Material_Name === item2.materialName) {
//                     // Convert quantities to numbers before performing arithmetic
//                     const inwardQty = parseInt(item1.Inward_Qty) || 0;
//                     const consumedQty = parseInt(item1.Consumed_Qty) || 0;
//                     const additionalQty = parseInt(item2.quantity) || 0;
//                     console.log('inwardQty', inwardQty, 'consumedQty', consumedQty, 'additionalQty', additionalQty)

//                     // Update Inward_Qty and Available_Qty
//                     item1.Inward_Qty = inwardQty + additionalQty;
//                     item1.Available_Qty = item1.Inward_Qty - consumedQty;

//                     return true; // Return true to include the item in the filtered result
//                 }
//                 return false;
//             });
//         });

//         console.log('data from function', filteredData);

//         // Extract only the necessary fields
//         const sparesPayload = filteredData.map(item => ({
//             ROWID: item.ROWID,
//             Inward_Qty: item.Inward_Qty,
//             Available_Qty: item.Available_Qty
//         }));

//         console.log('payload', sparesPayload)

//         axios.put('/server/waterheater_1_function/updatespares', { data: sparesPayload })
//             .then((res) => {
//                 console.log('response from updating spares', res)
//             })
//             .catch((err) => {
//                 console.log('error in updating', err)
//             })

        

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(fields);
//         updateSparesValue()
//     };

//     return (
//         <Container maxWidth="lg" sx={{ mt: 4 }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Inward Form
//             </Typography>
//             <form onSubmit={handleSubmit}>
//                 {fields.map((field, index) => (
//                     <Paper
//                         key={field.uniqueKey}
//                         elevation={2}
//                         sx={{
//                             p: 3,
//                             mb: 3,
//                             backgroundColor: '#fafafa'
//                         }}
//                     >
//                         <Grid container spacing={3}>
//                             <Grid item xs={12} md={4}>
//                                 <Autocomplete
//                                     fullWidth
//                                     value={field.materialName}
//                                     onChange={(event, newValue) => {
//                                         handleChange(index, "materialName", newValue);
//                                     }}
//                                     options={sparesData.map(option => option.Material_Name)}
//                                     renderInput={(params) => (
//                                         <TextField
//                                             {...params}
//                                             label="Material Name"
//                                             required
//                                             variant="outlined"
//                                         />
//                                     )}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={4}>
//                                 <TextField
//                                     fullWidth
//                                     label="Date"
//                                     type="date"
//                                     value={field.date}
//                                     onChange={(e) => handleChange(index, "date", e.target.value)}
//                                     required
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={4}>
//                                 <TextField
//                                     fullWidth
//                                     label="Quantity"
//                                     type="number"
//                                     value={field.quantity}
//                                     onChange={(e) => handleChange(index, "quantity", e.target.value)}
//                                     required
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                         </Grid>
//                         {fields.length > 1 && (
//                             <Button
//                                 variant="contained"
//                                 color="error"
//                                 onClick={() => removeField(field.uniqueKey)}
//                                 startIcon={<RemoveIcon />}
//                                 sx={{ mt: 2 }}
//                             >
//                                 Remove
//                             </Button>
//                         )}
//                     </Paper>
//                 ))}
//                 <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
//                     <Button
//                         variant="contained"
//                         onClick={addField}
//                         startIcon={<AddIcon />}
//                     >
//                         Add New
//                     </Button>
//                     <Button
//                         variant="contained"
//                         color="success"
//                         type="submit"
//                     >
//                         Submit
//                     </Button>
//                 </Grid>
//             </form>
//         </Container>
//     );
// };

// export default InwardForm;














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
    Remove as RemoveIcon
} from '@mui/icons-material';
import axios from 'axios';

const InwardForm = () => {
    const [sparesData, setSparesData] = useState([]);
    const [fields, setFields] = useState([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/server/waterheater_1_function/getspares');
                const data = await response.json();
                setSparesData(data);
            } catch (error) {
                console.error('Error fetching spares data:', error);
            }
        };
        fetchData();
    }, []);

    const addField = () => {
        setFields([...fields, { uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }]);
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

    const updateSparesValue = async () => {
        const inwardPayload = fields.map(({ uniqueKey, materialName, date, quantity }) => ({
            Material_Name: materialName,
            Inward_Date: date,
            Quantity: parseInt(quantity),
        }));

        try {
            await axios.post('/server/waterheater_1_function/add-inward', { data: inwardPayload });

            const filteredData = sparesData.map(item1 => {
                const matchingField = fields.find(item2 => item1.Material_Name === item2.materialName);
                if (matchingField) {
                    const inwardQty = parseInt(item1.Inward_Qty) || 0;
                    const consumedQty = parseInt(item1.Consumed_Qty) || 0;
                    const additionalQty = parseInt(matchingField.quantity) || 0;

                    item1.Inward_Qty = inwardQty + additionalQty;
                    item1.Available_Qty = item1.Inward_Qty - consumedQty;

                    return {
                        ROWID: item1.ROWID,
                        Inward_Qty: item1.Inward_Qty,
                        Available_Qty: item1.Available_Qty
                    };
                }
                return null;
            }).filter(Boolean);

            await axios.put('/server/waterheater_1_function/updatespares', { data: filteredData });
        } catch (error) {
            console.error('Error in posting/updating inward:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateSparesValue();
        // Reset fields
        setFields([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "" }]);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Inward Form
            </Typography>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <Paper key={field.uniqueKey} elevation={2} sx={{ p: 3, mb: 3, backgroundColor: '#fafafa' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Autocomplete
                                    fullWidth
                                    value={field.materialName}
                                    onChange={(event, newValue) => handleChange(index, "materialName", newValue)}
                                    options={sparesData.map(option => option.Material_Name)}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Material Name" required variant="outlined" />
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
                                    InputLabelProps={{ shrink: true }}
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
                    <Button variant="contained" onClick={addField} startIcon={<AddIcon />}>
                        Add New
                    </Button>
                    <Button variant="contained" color="success" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        </Container>
    );
};

export default InwardForm;
