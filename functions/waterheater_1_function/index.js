'use strict';
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();

app.use(express.json());

const customerTableId = "15205000000147094";
const technicianTableId = "15205000000147860";
const feedbackTableId = "15205000000152609";
const problemsTableId = "15205000000153333";
const logTableId = "15205000000154082";
const ticketTableId = "15205000000154811";
const productTableId="15205000000155535";
const invoiceTableId = "15205000000156259";
const sparesTableId = "15205000000156983";
const scrapTableId = "15205000000157707";
const lisOfSparesTableId = "15205000000158431";

// Define the getMyPagedRows function outside the route handler
async function getMyPagedRows(dataStore, tableId, hasNext = true, nextToken = undefined, allData = []) {
	if (!hasNext) {
	   return allData;
	}
	
	// console.log("table Id : "+tableId);
 
	try {
	   const response = await dataStore.table(tableId).getPagedRows({
		  nextToken,
		  maxRows: 100
	   });
	//    console.log("error or not")
	   const { data, next_token, more_records } = response;
	   console.log('rows:', data);
	   allData = allData.concat(data);
 
	   // If there are more records, recursively call the function with the next token
	   if (more_records) {
		  return await getMyPagedRows(dataStore, more_records, next_token, allData);
	   } else {
		  return allData;
	   }
	} catch (err) {
	   console.log("Error : "+err.toString());
	   throw err;
	}
 }
 
//-----------------------------------------------------------------------------// 
//Get single customer details
app.get('/getcustomer/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const rowData = dataStore.table(customerTableId).getRow(rowId);
	
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})

//Get customer details
app.get('/getcustomers',async (req,res)=>{
try{
	const catalystApp = catalyst.initialize(req);
	let dataStore = catalystApp.datastore();

// Fetch all rows using the getMyPagedRows function
const allRows = await getMyPagedRows(dataStore, customerTableId);

res.json(allRows);
} catch (err) {
res.status(500).send(err.toString());
}
})

//Post customer details
app.post('/addcustomer',async (req,res)=>{
	try{

	let rowData = req.body.data;
	const catalystApp = catalyst.initialize(req);
	let dataStore = catalystApp.datastore();

	// let rowData = [{Customer_Name:"Test Customer"}];

	let insertedValue = await dataStore.table(customerTableId).insertRow(rowData)
	.then((rows) => { 
		console.log(rows);
		res.json(rows);
	})
	.catch((err)=>{
		console.log("Error in inserting row : " + err);
	}); 

	
	}catch(error){
		console.log("Error While posting customer : "+error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single Technician details
app.get('/gettechnician/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const rowData = dataStore.table(technicianTableId).getRow(rowId);
	
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})

//Get Technician details
app.get('/gettechnicians',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, technicianTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post Technician details
app.post('/addtechnician',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
	
		let insertedValue = await dataStore.table(technicianTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single Feedback details
app.get('/getfeedback/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(feedbackTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get feedbacks details
app.get('/getfeedbacks',async (req,res)=>{
	try{
		console.log("inside");
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// console.log("get data");
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore,feedbackTableId);
	// console.log("after get records");
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post feedback details
app.post('/addfeedback',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(feedbackTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single problem record
app.get('/getproblem/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(problemsTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get problem records
app.get('/getproblems',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, problemsTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post problem record
app.post('/addproblem',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(problemsTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//


//-----------------------------------------------------------------------------//
//Get single log record
app.get('/getlog/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(logTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get log records
app.get('/getlogs',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, logTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post log record
app.post('/addlog',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(logTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single ticket record
app.get('/getticket/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(ticketTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get ticket records
app.get('/getalltickets',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, ticketTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post ticket record
app.post('/addticket',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(ticketTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single product record
app.get('/getproduct/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(productTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get products records
app.get('/getproducts',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, productTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post product record
app.post('/addprodcut',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(productTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single invoice record
app.get('/getinvoice/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(invoiceTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get invoice records
app.get('/getinvoices',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, invoiceTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post invoice record
app.post('/addinvoice',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(invoiceTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single spares record
app.get('/getspare/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(sparesTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get spares records
app.get('/getspares',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, sparesTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post spares record
app.post('/addspares',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(sparesTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single scrap record
app.get('/getscrap/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(scrapTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get scraps records
app.get('/getscraps',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, scrapTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post scraps record
app.post('/addscrap',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(scrapTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single listofspare record
app.get('/getlistofspare/:rowId',async (req,res)=>{
	try{
		let {rowId} = req.params;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	let rowData = dataStore.table(lisOfSparesTableId).getRow(rowId);
	res.json(rowData);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})


//Get listofspares records
app.get('/getlistofspares',async (req,res)=>{
	try{
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, lisOfSparesTableId);
	
	res.json(allRows);
	} catch (err) {
	res.status(500).send(err.toString());
	}
	})
	
//Post listofspares record
app.post('/addlistofspare',async (req,res)=>{
		try{
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(lisOfSparesTableId).insertRow(rowData)
		.then((rows) => { 
			console.log(rows);
			res.json(rows);
		})
		.catch((err)=>{
			console.log("Error in inserting row : " + err);
		}); 
	
		}catch(error){
			console.log("Error While posting customer : "+error);
		}
	})
//-----------------------------------------------------------------------------//

module.exports = app;

