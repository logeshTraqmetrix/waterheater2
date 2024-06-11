'use strict';
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();

app.use(express.json());

const customerTableId = 15205000000147094;
const technicianTableId = 15205000000147860;
const feedbackTableId = 15205000000152609;
const problemsTableId = 15205000000153333;

// Define the getMyPagedRows function outside the route handler
async function getMyPagedRows(dataStore, tableId, hasNext = true, nextToken = undefined, allData = []) {
	if (!hasNext) {
	   return allData;
	}
 
	try {
	   const response = await dataStore.table(tableId).getPagedRows({
		  nextToken,
		  maxRows: 100
	   });
 
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
	   console.log(err.toString());
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
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();
	
	// Fetch all rows using the getMyPagedRows function
	const allRows = await getMyPagedRows(dataStore, feedbackTableId);
	
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
app.post('/addfeedback',async (req,res)=>{
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

module.exports = app;

