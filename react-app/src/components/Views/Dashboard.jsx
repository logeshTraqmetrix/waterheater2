// // src/components/Dashboard.js
// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   card: {
//     height: '100%',
//   },
// }));

// const Dashboard = ({ data }) => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.root} maxWidth="lg">
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Total Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.total[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Closed Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.ticketClosed[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Unassigned Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.totalUnAssigned[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Assigned Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.totalAssigned[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         {/* Add more cards for other metrics */}
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;





// // src/components/Dashboard.js
// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   card: {
//     height: '100%',
//   },
// }));

// const Dashboard = () => {

//   const data = {
//     "ticketClosed": [
//       {
//         "ticket_table": {
//           "ROWID": "3"
//         }
//       }
//     ],
//     "total": [
//       {
//         "ticket_table": {
//           "ROWID": "7"
//         }
//       }
//     ],
//     "totalUnAssigned": [
//       {
//         "ticket_table": {
//           "ROWID": "3"
//         }
//       }
//     ],
//     "totalAssigned": [
//       {
//         "ticket_table": {
//           "ROWID": "1"
//         }
//       }
//     ],
//     "todayClosedTicket": [
//       {
//         "ticket_table": {
//           "ROWID": "2"
//         }
//       }
//     ],
//     "todayAssignedTicket": [
//       {
//         "ticket_table": {
//           "ROWID": "1"
//         }
//       }
//     ],
//     "warrantyCost": [
//       {
//         "list_of_spares": {
//           "Expense_Cost": "10420.0"
//         }
//       }
//     ],
//     "nonWarrantyCost": [
//       {
//         "list_of_spares": {
//           "SubTotal": "9500.0"
//         }
//       }
//     ],
//     "warrantyAndNonWarranty": [
//       {
//         "date": "2024-06-23",
//         "Yes": 4,
//         "No": 0
//       },
//       {
//         "date": "2024-06-24",
//         "Yes": 2,
//         "No": 1
//       }
//     ],
//     "ClosedOnEachDate": [
//       {
//         "date": "2024-06-24",
//         "count": 1
//       },
//       {
//         "date": "2024-06-25",
//         "count": 2
//       }
//     ],
//     "costofWarrantyAndNonWarranty": [
//       {
//         "list_of_spares": {
//           "Invoice_Date": "2024-06-25",
//           "Expense_Cost": "10000.0",
//           "SubTotal": "8500.0"
//         }
//       },
//       {
//         "list_of_spares": {
//           "Invoice_Date": "2024-06-26",
//           "Expense_Cost": "420.0",
//           "SubTotal": "1000.0"
//         }
//       }
//     ]
//   }

//   const classes = useStyles();

//   return (
//     <Container className={classes.root} maxWidth="lg">
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Total Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.total[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Closed Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.ticketClosed[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Unassigned Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.totalUnAssigned[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Assigned Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.totalAssigned[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Today Closed Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.todayClosedTicket[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Today Assigned Tickets
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.todayAssignedTicket[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Warranty Cost
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.warrantyCost[0].list_of_spares.Expense_Cost}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Non-Warranty Cost
//               </Typography>
//               <Typography variant="h3" component="p">
//                 {data.nonWarrantyCost[0].list_of_spares.SubTotal}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Warranty and Non-Warranty Tickets
//           </Typography>
//           <BarChart
//             width={800}
//             height={400}
//             data={data.warrantyAndNonWarranty}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="Yes" stackId="a" fill="#8884d8" />
//             <Bar dataKey="No" stackId="a" fill="#82ca9d" />
//           </BarChart>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Tickets Closed on Each Date
//           </Typography>
//           <LineChart
//             width={800}
//             height={400}
//             data={data.ClosedOnEachDate}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="count" stroke="#8884d8" />
//           </LineChart>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Cost of Warranty and Non-Warranty
//           </Typography>
//           <LineChart
//             width={800}
//             height={400}
//             data={data.costofWarrantyAndNonWarranty.map(item => ({
//               date: item.list_of_spares.Invoice_Date,
//               WarrantyCost: item.list_of_spares.Expense_Cost,
//               NonWarrantyCost: item.list_of_spares.SubTotal,
//             }))}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="WarrantyCost" stroke="#8884d8" />
//             <Line type="monotone" dataKey="NonWarrantyCost" stroke="#82ca9d" />
//           </LineChart>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;








// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   card: {
//     height: '100%',
//   },
//   cardContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardTitle: {
//     marginBottom: theme.spacing(2),
//     textAlign: 'center',
//   },
//   cardValue: {
//     fontWeight: 'bold',
//   },
// }));

// const Dashboard = () => {

//   const data = {
//     "ticketClosed": [
//       {
//         "ticket_table": {
//           "ROWID": "3"
//         }
//       }
//     ],
//     "total": [
//       {
//         "ticket_table": {
//           "ROWID": "7"
//         }
//       }
//     ],
//     "totalUnAssigned": [
//       {
//         "ticket_table": {
//           "ROWID": "3"
//         }
//       }
//     ],
//     "totalAssigned": [
//       {
//         "ticket_table": {
//           "ROWID": "1"
//         }
//       }
//     ],
//     "todayClosedTicket": [
//       {
//         "ticket_table": {
//           "ROWID": "2"
//         }
//       }
//     ],
//     "todayAssignedTicket": [
//       {
//         "ticket_table": {
//           "ROWID": "1"
//         }
//       }
//     ],
//     "warrantyCost": [
//       {
//         "list_of_spares": {
//           "Expense_Cost": "10420.0"
//         }
//       }
//     ],
//     "nonWarrantyCost": [
//       {
//         "list_of_spares": {
//           "SubTotal": "9500.0"
//         }
//       }
//     ],
//     "warrantyAndNonWarranty": [
//       {
//         "date": "2024-06-23",
//         "Yes": 4,
//         "No": 0
//       },
//       {
//         "date": "2024-06-24",
//         "Yes": 2,
//         "No": 1
//       }
//     ],
//     "ClosedOnEachDate": [
//       {
//         "date": "2024-06-24",
//         "count": 1
//       },
//       {
//         "date": "2024-06-25",
//         "count": 2
//       }
//     ],
//     "costofWarrantyAndNonWarranty": [
//       {
//         "list_of_spares": {
//           "Invoice_Date": "2024-06-25",
//           "Expense_Cost": "10000.0",
//           "SubTotal": "8500.0"
//         }
//       },
//       {
//         "list_of_spares": {
//           "Invoice_Date": "2024-06-26",
//           "Expense_Cost": "420.0",
//           "SubTotal": "1000.0"
//         }
//       }
//     ]
//   }

//   const classes = useStyles();

//   const formatCurrency = (value) => {
//     const numValue = parseFloat(value);
//     return isNaN(numValue) ? '0.00' : numValue.toFixed(2);
//   };

//   return (
//     <Container className={classes.root} maxWidth="lg">
//       <Grid container spacing={3}>
//         {/* First row */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Total Tickets
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 {data.total[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Closed Tickets
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 {data.ticketClosed[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Unassigned Tickets
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 {data.totalUnAssigned[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Assigned Tickets
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 {data.totalAssigned[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Second row */}
//         <Grid item xs={12} sm={6}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Today Closed Tickets
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 {data.todayClosedTicket[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Today Assigned Tickets
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 {data.todayAssignedTicket[0].ticket_table.ROWID}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Third row */}
        
//          <Grid item xs={12} sm={6}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Warranty Cost
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 ₹{formatCurrency(data.warrantyCost[0].list_of_spares.Expense_Cost)}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Card className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Typography variant="h6" component="h2" className={classes.cardTitle}>
//                 Non-Warranty Cost
//               </Typography>
//               <Typography variant="h4" component="p" className={classes.cardValue}>
//                 ₹{formatCurrency(data.nonWarrantyCost[0].list_of_spares.SubTotal)}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Charts (unchanged) */}
//         {/* ... (Keep the existing chart code here) ... */}
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Warranty and Non-Warranty Tickets
//           </Typography>
//           <BarChart
//             width={800}
//             height={400}
//             data={data.warrantyAndNonWarranty}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="Yes" stackId="a" fill="#8884d8" />
//             <Bar dataKey="No" stackId="a" fill="#82ca9d" />
//           </BarChart>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Tickets Closed on Each Date
//           </Typography>
//           <LineChart
//             width={800}
//             height={400}
//             data={data.ClosedOnEachDate}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="count" stroke="#8884d8" />
//           </LineChart>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Cost of Warranty and Non-Warranty
//           </Typography>
//           <LineChart
//             width={800}
//             height={400}
//             data={data.costofWarrantyAndNonWarranty.map(item => ({
//               date: item.list_of_spares.Invoice_Date,
//               WarrantyCost: item.list_of_spares.Expense_Cost,
//               NonWarrantyCost: item.list_of_spares.SubTotal,
//             }))}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="WarrantyCost" stroke="#8884d8" />
//             <Line type="monotone" dataKey="NonWarrantyCost" stroke="#82ca9d" />
//           </LineChart>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;




// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   card: {
//     height: '100%',
//   },
//   cardContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//   },
//   cardTitle: {
//     marginBottom: theme.spacing(1),
//     textAlign: 'center',
//     fontSize: '1rem',
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.25rem',
//     },
//   },
//   cardValue: {
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '2rem',
//     },
//   },
//   chartContainer: {
//     width: '100%',
//     height: 300,
//     [theme.breakpoints.up('md')]: {
//       height: 400,
//     },
//   },
// }));

// const Dashboard = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
//   const data = {
//     "ticketClosed": [
//       {
//         "ticket_table": {
//           "ROWID": "3"
//         }
//       }
//     ],
//     "total": [
//       {
//         "ticket_table": {
//           "ROWID": "7"
//         }
//       }
//     ],
//     "totalUnAssigned": [
//       {
//         "ticket_table": {
//           "ROWID": "3"
//         }
//       }
//     ],
//     "totalAssigned": [
//       {
//         "ticket_table": {
//           "ROWID": "1"
//         }
//       }
//     ],
//     "todayClosedTicket": [
//       {
//         "ticket_table": {
//           "ROWID": "2"
//         }
//       }
//     ],
//     "todayAssignedTicket": [
//       {
//         "ticket_table": {
//           "ROWID": "1"
//         }
//       }
//     ],
//     "warrantyCost": [
//       {
//         "list_of_spares": {
//           "Expense_Cost": "10420.0"
//         }
//       }
//     ],
//     "nonWarrantyCost": [
//       {
//         "list_of_spares": {
//           "SubTotal": "9500.0"
//         }
//       }
//     ],
//     "warrantyAndNonWarranty": [
//       {
//         "date": "2024-06-23",
//         "Yes": 4,
//         "No": 0
//       },
//       {
//         "date": "2024-06-24",
//         "Yes": 2,
//         "No": 1
//       }
//     ],
//     "ClosedOnEachDate": [
//       {
//         "date": "2024-06-24",
//         "count": 1
//       },
//       {
//         "date": "2024-06-25",
//         "count": 2
//       }
//     ],
//     "costofWarrantyAndNonWarranty": [
//       {
//         "list_of_spares": {
//           "Invoice_Date": "2024-06-25",
//           "Expense_Cost": "10000.0",
//           "SubTotal": "8500.0"
//         }
//       },
//       {
//         "list_of_spares": {
//           "Invoice_Date": "2024-06-26",
//           "Expense_Cost": "420.0",
//           "SubTotal": "1000.0"
//         }
//       }
//     ]
//   }

//   const formatCurrency = (value) => {
//     const numValue = parseFloat(value);
//     return isNaN(numValue) ? '0.00' : numValue.toFixed(2);
//   };

//   // ... (keep the data and formatCurrency function as is)

//   const renderCard = (title, value) => (
//     <Grid item xs={6} sm={6} md={3}>
//       <Card className={classes.card}>
//         <CardContent className={classes.cardContent}>
//           <Typography variant="h6" component="h2" className={classes.cardTitle}>
//             {title}
//           </Typography>
//           <Typography variant="h4" component="p" className={classes.cardValue}>
//             {value}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   );

//   return (
//     <Container className={classes.root} maxWidth="lg">
//       <Grid container spacing={2}>
//         {renderCard("Total Tickets", data.total[0].ticket_table.ROWID)}
//         {renderCard("Closed Tickets", data.ticketClosed[0].ticket_table.ROWID)}
//         {renderCard("Unassigned Tickets", data.totalUnAssigned[0].ticket_table.ROWID)}
//         {renderCard("Assigned Tickets", data.totalAssigned[0].ticket_table.ROWID)}
//         {renderCard("Today Closed Tickets", data.todayClosedTicket[0].ticket_table.ROWID)}
//         {renderCard("Today Assigned Tickets", data.todayAssignedTicket[0].ticket_table.ROWID)}
//         {renderCard("Warranty Cost", `₹${formatCurrency(data.warrantyCost[0].list_of_spares.Expense_Cost)}`)}
//         {renderCard("Non-Warranty Cost", `₹${formatCurrency(data.nonWarrantyCost[0].list_of_spares.SubTotal)}`)}

//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Warranty and Non-Warranty Tickets
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={data.warrantyAndNonWarranty}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Yes" stackId="a" fill="#8884d8" />
//                 <Bar dataKey="No" stackId="a" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid>

//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Tickets Closed on Each Date
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={data.ClosedOnEachDate}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="count" stroke="#8884d8" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid>

//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Cost of Warranty and Non-Warranty
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={data.costofWarrantyAndNonWarranty.map(item => ({
//                   date: item.list_of_spares.Invoice_Date,
//                   WarrantyCost: parseFloat(item.list_of_spares.Expense_Cost),
//                   NonWarrantyCost: parseFloat(item.list_of_spares.SubTotal),
//                 }))}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="WarrantyCost" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="NonWarrantyCost" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from 'react';
// import { Container, Grid, Card, CardContent, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
// import { IoPersonAddSharp, IoTicketOutline, IoTicketSharp } from "react-icons/io5";
// import { IoPersonRemoveSharp } from "react-icons/io5";
// import { HiOutlineTicket } from "react-icons/hi2";
// import { GiTicket } from "react-icons/gi";
// import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   card: {
//     height: '100%',
//     transition: 'background-color 0.3s ease',
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
 
//   chartContainer: {
//     width: '100%',
//     height: 300,
//     [theme.breakpoints.up('md')]: {
//       height: 400,
//     },
//   },

//   cardContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//   },
//   cardHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: theme.spacing(1),
//   },
//   cardIcon: {
//     fontSize: '1.8rem',
//     color:'#000000',
//     marginRight: theme.spacing(2),
//     marginBottom: theme.spacing(1)
//   },
//   cardTitle: {
//     fontSize: '1rem',
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.25rem',
//     },
//   },
//   cardValue: {
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '2rem',
//     },
//   },
// }));

// const Dashboard = () => {
//   const classes = useStyles();
//   const [data,setData] = useState({})
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('xs'));


// useEffect(()=>{
//   axios.get('/server/waterheater_1_function/dashboard')
//     .then((res)=>{
//       console.log(res.data)
//       setData(res.data)
//     })
//     .catch((err)=>{
//       console.log('error in getting dashboard data',err)
//     })
// },[])



//   const formatCurrency = (value) => {
//     const numValue = parseFloat(value);
//     return isNaN(numValue) ? '0.00' : numValue.toFixed(2);
//   };

//   // ... (keep the data and formatCurrency function as is)

//   const cardColors = [
//     '#e3f2fd', '#e8f5e9', '#fff3e0', '#f3e5f5',
//     '#e1f5fe', '#fce4ec', '#f1f8e9', '#fffde7'
//   ];


//   const renderCard = (title, value, index, icon) => (
//     <Grid item xs={6} sm={6} md={3}>
//       <Card className={classes.card} style={{ backgroundColor: cardColors[index % cardColors.length] }}>
//         <CardContent className={classes.cardContent}>
//           <div className={classes.cardHeader}>
//             {icon && <span className={classes.cardIcon}>{icon}</span>}
//             <Typography variant="h6" component="h2" className={classes.cardTitle}>
//               {title}
//             </Typography>
//           </div>
//           <Typography variant="h4" component="p" className={classes.cardValue}>
//             {value}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   );

//   return (
//     <Container className={classes.root} maxWidth="lg">
//       <Grid container spacing={2}>
//         {renderCard("Total Tickets", data.total[0].ticket_table.ROWID, 0, <IoTicketOutline />)}
//         {renderCard("Closed Tickets", data.ticketClosed[0].ticket_table.ROWID, 1 ,<IoTicketSharp />)}
//         {renderCard("Unassigned Tickets", data.totalUnAssigned[0].ticket_table.ROWID, 2,<IoPersonRemoveSharp />)}
//         {renderCard("Assigned Tickets ", data.totalAssigned[0].ticket_table.ROWID, 3,<IoPersonAddSharp />)}
//         {renderCard("Today Closed Tickets", data.todayClosedTicket[0].ticket_table.ROWID, 4, <HiOutlineTicket />)}
//         {renderCard("Today Assigned Tickets", data.todayAssignedTicket[0].ticket_table.ROWID, 5, <GiTicket />)}
//         {renderCard("Warranty Cost", `₹${formatCurrency(data.warrantyCost[0].list_of_spares.Expense_Cost)}`, 6)}
//         {renderCard("Non-Warranty Cost", `₹${formatCurrency(data.nonWarrantyCost[0].list_of_spares.SubTotal)}`, 7)}

//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Warranty and Non-Warranty Tickets
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={data.warrantyAndNonWarranty}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Yes" stackId="a" fill="#8884d8" barSize={20} />
//                 <Bar dataKey="No" stackId="a" fill="#82ca9d" barSize={20} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid>

//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Tickets Closed on Each Date
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={data.ClosedOnEachDate}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="count" stroke="#8884d8" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid>

//         {/* <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Cost of Warranty and Non-Warranty
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={data.costofWarrantyAndNonWarranty.map(item => ({
//                   date: item.list_of_spares.Invoice_Date,
//                   WarrantyCost: parseFloat(item.list_of_spares.Expense_Cost),
//                   NonWarrantyCost: parseFloat(item.list_of_spares.SubTotal),
//                 }))}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="WarrantyCost" fill="#8884d8" barSize={20} />
//                 <Bar dataKey="NonWarrantyCost" fill="#82ca9d" barSize={20} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid> */}
//         <Grid item xs={12}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Cost of Warranty and Non-Warranty
//           </Typography>
//           <div className={classes.chartContainer}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={data.costofWarrantyAndNonWarranty.map(item => ({
//                   date: item.list_of_spares.Invoice_Date,
//                   WarrantyCost: parseFloat(item.list_of_spares.Expense_Cost),
//                   NonWarrantyCost: parseFloat(item.list_of_spares.SubTotal),
//                 }))}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line 
//                   type="monotone" 
//                   dataKey="WarrantyCost" 
//                   stroke="#8884d8" 
//                   strokeWidth={2}
//                   dot={{ r: 4 }}
//                   activeDot={{ r: 8 }}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="NonWarrantyCost" 
//                   stroke="#82ca9d" 
//                   strokeWidth={2}
//                   dot={{ r: 4 }}
//                   activeDot={{ r: 8 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;







import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
import { IoPersonAddSharp, IoTicketOutline, IoTicketSharp } from "react-icons/io5";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi2";
import { GiTicket } from "react-icons/gi";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: '100%',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  chartContainer: {
    width: '100%',
    height: 300,
    [theme.breakpoints.up('md')]: {
      height: 400,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  cardIcon: {
    fontSize: '1.8rem',
    color:'#000000',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  cardTitle: {
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
    },
  },
  cardValue: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [data, setData] = useState({
    total: [{ ticket_table: { ROWID: 0 } }],
    ticketClosed: [{ ticket_table: { ROWID: 0 } }],
    totalUnAssigned: [{ ticket_table: { ROWID: 0 } }],
    totalAssigned: [{ ticket_table: { ROWID: 0 } }],
    todayClosedTicket: [{ ticket_table: { ROWID: 0 } }],
    todayAssignedTicket: [{ ticket_table: { ROWID: 0 } }],
    warrantyCost: [{ list_of_spares: { Expense_Cost: 0 } }],
    nonWarrantyCost: [{ list_of_spares: { SubTotal: 0 } }],
    warrantyAndNonWarranty: [],
    ClosedOnEachDate: [],
    costofWarrantyAndNonWarranty: []
  });

  useEffect(() => {
    axios.get('/server/waterheater_1_function/dashboard')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log('error in getting dashboard data', err);
      });
  }, []);

  const formatCurrency = (value) => {
    const numValue = parseFloat(value);
    return isNaN(numValue) ? '0.00' : numValue.toFixed(2);
  };

  const cardColors = [
    '#e3f2fd', '#e8f5e9', '#fff3e0', '#f3e5f5',
    '#e1f5fe', '#fce4ec', '#f1f8e9', '#fffde7'
  ];

  const renderCard = (title, value, index, icon) => (
    <Grid item xs={6} sm={6} md={3}>
      <Card className={classes.card} style={{ backgroundColor: cardColors[index % cardColors.length] }}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            {icon && <span className={classes.cardIcon}>{icon}</span>}
            <Typography variant="h6" component="h2" className={classes.cardTitle}>
              {title}
            </Typography>
          </div>
          <Typography variant="h4" component="p" className={classes.cardValue}>
            {value !== undefined ? value : 'Loading...'}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={2}>
        {renderCard("Total Tickets", data.total[0]?.ticket_table?.ROWID, 0, <IoTicketOutline />)}
        {renderCard("Closed Tickets", data.ticketClosed[0]?.ticket_table?.ROWID, 1, <IoTicketSharp />)}
        {renderCard("Unassigned Tickets", data.totalUnAssigned[0]?.ticket_table?.ROWID, 2, <IoPersonRemoveSharp />)}
        {renderCard("Assigned Tickets ", data.totalAssigned[0]?.ticket_table?.ROWID, 3, <IoPersonAddSharp />)}
        {renderCard("Today Closed Tickets", data.todayClosedTicket[0]?.ticket_table?.ROWID, 4, <HiOutlineTicket />)}
        {renderCard("Today Assigned Tickets", data.todayAssignedTicket[0]?.ticket_table?.ROWID, 5, <GiTicket />)}
        {renderCard("Warranty Cost", `₹${formatCurrency(data.warrantyCost[0]?.list_of_spares?.Expense_Cost)}`, 6)}
        {renderCard("Non-Warranty Cost", `₹${formatCurrency(data.nonWarrantyCost[0]?.list_of_spares?.SubTotal)}`, 7)}

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" gutterBottom>
            Warranty and Non-Warranty Tickets
          </Typography>
          <div className={classes.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.warrantyAndNonWarranty || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Yes" stackId="a" fill="#8884d8" barSize={20} />
                <Bar dataKey="No" stackId="a" fill="#82ca9d" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" gutterBottom>
            Tickets Closed on Each Date
          </Typography>
          <div className={classes.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.ClosedOnEachDate || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" gutterBottom>
            Cost of Warranty and Non-Warranty
          </Typography>
          <div className={classes.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={(data.costofWarrantyAndNonWarranty || []).map(item => ({
                  date: item.list_of_spares?.Invoice_Date,
                  WarrantyCost: parseFloat(item.list_of_spares?.Expense_Cost || 0),
                  NonWarrantyCost: parseFloat(item.list_of_spares?.SubTotal || 0),
                }))}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="WarrantyCost" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="NonWarrantyCost" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;