'use strict';
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');
const fileUpload = require('express-fileupload');
const os = require('os');
const fs = require('fs');
const app = express();
app.use(fileUpload());
app.use(express.json());
const mime = require('mime-types');

const customerTableId = "15205000000147094";
const technicianTableId = "15205000000147860";
const feedbackTableId = "15205000000152609";
const problemsTableId = "15205000000153333";
const logTableId = "15205000000154082";
const ticketTableId = "15205000000154811";
const productTableId = "15205000000155535";
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
		console.log("Error : " + err.toString());
		throw err;
	}
}

//-----------------------------------------------------------------------------// 
//Get single customer details
app.get('/getcustomer/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getcustomers', async (req, res) => {
	try {
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
app.post('/addcustomer', async (req, res) => {
	try {

		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];

		let insertedValue = await dataStore.table(customerTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});


	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})

//Put api for update customer
app.put('/updatecustomer', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(customerTableId);
		let rowPromise = table.updateRow(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating customer : " + error);
	}
})

//delete api for remove customer
app.delete('/deletecustomer', (req, res) => {
	try {
		let ROWID = req.body.data.ROWID;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(customerTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting customer : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single Technician details
app.get('/gettechnician/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/gettechnicians', async (req, res) => {
	try {
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
app.post('/addtechnician', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];

		let insertedValue = await dataStore.table(technicianTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})

//Put api for update technician
app.put('/updatetechnician', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(technicianTableId);
		let rowPromise = table.updateRow(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating technician : " + error);
	}
})

//delete api for remove technician
app.delete('/deletetechnician', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(technicianTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting technician : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single Feedback details
app.get('/getfeedback/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getfeedbacks', async (req, res) => {
	try {
		console.log("inside");
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// console.log("get data");
		// Fetch all rows using the getMyPagedRows function
		const allRows = await getMyPagedRows(dataStore, feedbackTableId);
		// console.log("after get records");
		res.json(allRows);
	} catch (err) {
		res.status(500).send(err.toString());
	}
})

//Post feedback details
app.post('/addfeedback', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(feedbackTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})

//delete api for remove feedback
app.delete('/deletefeedback', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(feedbackTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting feedback : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single problem record
app.get('/getproblem/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getproblems', async (req, res) => {
	try {
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
app.post('/addproblem', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(problemsTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting problem : " + error);
	}
})

//Put api for update peoblem
app.put('/updateproblem', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(problemsTableId);
		let rowPromise = table.updateRow(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating problem : " + error);
	}
})

//delete api for remove problem
app.delete('/deleteproblem', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(problemsTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting problem statement : " + error);
	}
})
//-----------------------------------------------------------------------------//


//-----------------------------------------------------------------------------//
//Get single log record
app.get('/getlog/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getlogs', async (req, res) => {
	try {
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
app.post('/addlog', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(logTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single ticket record
app.get('/getticket/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getalltickets', async (req, res) => {
	try {
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
app.post('/addticket', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(ticketTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})

//Put api for update ticket
app.put('/updateticket', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(ticketTableId);
		let rowPromise = table.updateRow(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating ticket details : " + error);
	}
})

//delete api for remove ticket
app.delete('/deleteticket', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(ticketTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting ticket : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single product record
app.get('/getproduct/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getproducts', async (req, res) => {
	try {
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
app.post('/addproduct', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(productTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})

//Put api for update product
app.put('/updateproduct', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(productTableId);
		let rowPromise = table.updateRow(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating product : " + error);
	}
})

//delete api for remove product
app.delete('/deleteproduct', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(productTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting product : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single invoice record
app.get('/getinvoice/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getinvoices', async (req, res) => {
	try {
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
app.post('/addinvoice', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(invoiceTableId).insertRow(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})

//Put api for update invoice
app.put('/updateinvoice', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(invoiceTableId);
		let rowPromise = table.updateRow(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating invoice : " + error);
	}
})

//delete api for remove invoice
app.delete('/deleteinvoice', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(invoiceTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting invoice : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single spares record
app.get('/getspare/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getspares', async (req, res) => {
	try {
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
app.post('/addspares', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(sparesTableId).insertRows(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})


//Put api for update spares
app.put('/updatespares', (req, res) => {
	try {
		let updatedRowData = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(sparesTableId);
		let rowPromise = table.updateRows(updatedRowData);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.log("Error on Updating spares : " + error);
	}
})

//delete api for remove spares
app.delete('/deletespare', (req, res) => {
	try {
		let { ROWID } = req.body.data;
		let catalystApp = catalyst.initialize(req);
		let datastore = catalystApp.datastore();
		let table = datastore.table(sparesTableId);
		let rowPromise = table.deleteRow(ROWID);
		rowPromise.then((row) => {
			console.log(row);
			res.json(row);
		});
	} catch (error) {
		console.error("Error while deleting spares : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single scrap record
app.get('/getscrap/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getscraps', async (req, res) => {
	try {
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
app.post('/addscrap', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(scrapTableId).insertRows(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//Get single listofspare record
app.get('/getlistofspare/:rowId', async (req, res) => {
	try {
		let { rowId } = req.params;
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
app.get('/getlistofspares', async (req, res) => {
	try {
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
app.post('/addlistofspare', async (req, res) => {
	try {
		let rowData = req.body.data;
		const catalystApp = catalyst.initialize(req);
		let dataStore = catalystApp.datastore();

		// let rowData = [{Customer_Name:"Test Customer"}];
		let insertedValue = await dataStore.table(lisOfSparesTableId).insertRows(rowData)
			.then((rows) => {
				console.log(rows);
				res.json(rows);
			})
			.catch((err) => {
				console.log("Error in inserting row : " + err);
			});

	} catch (error) {
		console.log("Error While posting customer : " + error);
	}
})
//-----------------------------------------------------------------------------//


// file upload code

app.post('/uploadfile', async (req, res) => {
	try {
		console.log('Uploading files...');

		// Initialize Zoho Catalyst SDK using the request object
		const app = catalyst.initialize(req);
		const files = req.files;
		console.log(files)
		// console.log(JSON.stringify(req));

		// Check if files exist in the request
		if (!files) {
			throw new Error('No files uploaded');
		}

		const uploadPromises = Object.values(files).map(async file => {
			const tmpDir = os.tmpdir(); // Get system's temporary directory
			const tmpFilePath = `${tmpDir}/${file.name}`;
			await file.mv(tmpFilePath);

			// Upload file to Zoho Filestore
			const folderId = "15205000000148399"; // Replace with your folder ID
			const config = {
				code: fs.createReadStream(tmpFilePath),
				name: file.name
			};

			return app.filestore().folder(folderId).uploadFile(config)
				.then(fileObject => {
					// Optionally delete the file from the temporary directory
					fs.unlink(tmpFilePath, (err) => {
						if (err) console.error('Error deleting temp file:', err);
					});
					return fileObject;
				});
		});

		const uploadedFiles = await Promise.all(uploadPromises);

		// Send the file objects to the frontend
		res.status(200).send(uploadedFiles);
	} catch (error) {
		console.error('Error uploading files:', error);
		// Send error response
		res.status(500).send({
			status: 'error',
			message: 'Internal Server Error',
			error: error.message // Include error message in response
		});
	}
});



app.get('/viewfile/:id', async (req, res) => {
	try {
		const app = catalyst.initialize(req);
		const fileObject = await app.filestore().folder("15205000000148399").downloadFile(req.params.id);

		// Determine the MIME type from the file name or extension
		const fileName = req.query.fileName;
		const mimeType = mime.lookup(fileName) || 'application/octet-stream';

		res.writeHead(200, {
			'Content-Type': mimeType,
			'Content-Length': fileObject.length,
			'Content-Disposition': `inline; filename="${fileName}"`,
		});
		res.end(fileObject);
	} catch (error) {
		res.status(500).send({
			"status": "Internal Server Error",
			"message": error.message
		});
	}
});

//-----------------------------------------------------------------------------//

app.get('/getfilterticket', (req, res) => {

	let search1 = req.query.search
	let search = JSON.parse(search1)
	var catalystApp = catalyst.initialize(req);
	getDataFromCatalystDataStore(catalystApp, search.table, search.column, search.value).then(Detail => {
		res.send(Detail)
	})
		.catch((err) => {
			console.log(err, "error in getting time from true condition")
		})
})

function getDataFromCatalystDataStore(catalystApp, table, column, value) {
	return new Promise((resolve, reject) => {

		// Queries the Catalyst Data Store table
		catalystApp.zcql().executeZCQLQuery("Select * from " + table + " where " + column + " ='" + value + "'").then(queryResponse => {
			resolve(queryResponse);
		}).catch(err => {
			console.log(err)
		})
	});
}


//-----------------------------------------------------------------------------//


app.get('/getallcustomer', (req, res) => {
	var catalystApp = catalyst.initialize(req);
	const limit = parseInt(req.query.limit) || 10;  // Default limit to 10
	const offset = parseInt(req.query.offset) || 0; // Default offset to 0

	getDataFromCatalystDataStore2(catalystApp, limit, offset)
		.then(detail => {
			res.send(detail);
		})
		.catch(err => {
			console.log(err, "error in getting data");
		});
});

function getDataFromCatalystDataStore2(catalystApp, limit, offset) {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM customer_details LIMIT ${limit} OFFSET ${offset}`;
		const countQuery = `SELECT COUNT(ROWID) FROM customer_details`;

		Promise.all([
			catalystApp.zcql().executeZCQLQuery(query),
			catalystApp.zcql().executeZCQLQuery(countQuery)
		]).then(([queryResponse, countResponse]) => {
			const totalRecords = countResponse[0].customer_details.ROWID;
			resolve({ records: queryResponse, total: totalRecords });
		}).catch(err => {
			console.log(err);
			reject(err);
		});
	});
}



//-----------------------------------------------------------------------------//



app.get('/allgetinvoices', (req, res) => {
	var catalystApp = catalyst.initialize(req);
	const limit = parseInt(req.query.limit) || 10;  // Default limit to 10
	const offset = parseInt(req.query.offset) || 0; // Default offset to 0

	getDataFromCatalystDataStore3(catalystApp, limit, offset)
		.then(detail => {
			res.send(detail);
		})
		.catch(err => {
			console.log(err, "error in getting data");
		});
});

function getDataFromCatalystDataStore3(catalystApp, limit, offset) {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM invoice_table LIMIT ${limit} OFFSET ${offset}`;
		const countQuery = `SELECT COUNT(ROWID) FROM invoice_table`;

		Promise.all([
			catalystApp.zcql().executeZCQLQuery(query),
			catalystApp.zcql().executeZCQLQuery(countQuery)
		]).then(([queryResponse, countResponse]) => {
			const totalRecords = countResponse[0].invoice_table.ROWID;
			resolve({ records: queryResponse, total: totalRecords });
		}).catch(err => {
			console.log(err);
			reject(err);
		});
	});
}



//-----------------------------------------------------------------------------//


app.get('/allgetspares', (req, res) => {
	var catalystApp = catalyst.initialize(req);
	const limit = parseInt(req.query.limit) || 10;  // Default limit to 10
	const offset = parseInt(req.query.offset) || 0; // Default offset to 0

	getDataFromCatalystDataStore4(catalystApp, limit, offset)
		.then(detail => {
			res.send(detail);
		})
		.catch(err => {
			console.log(err, "error in getting data");
		});
});

function getDataFromCatalystDataStore4(catalystApp, limit, offset) {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM spares_table LIMIT ${limit} OFFSET ${offset}`;
		const countQuery = `SELECT COUNT(ROWID) FROM spares_table`;

		Promise.all([
			catalystApp.zcql().executeZCQLQuery(query),
			catalystApp.zcql().executeZCQLQuery(countQuery)
		]).then(([queryResponse, countResponse]) => {
			const totalRecords = countResponse[0].spares_table.ROWID;
			resolve({ records: queryResponse, total: totalRecords });
		}).catch(err => {
			console.log(err);
			reject(err);
		});
	});
}

//-----------------------------------------------------------------------------//

app.get('/getfiltercustomer', (req, res) => {
	let search1 = req.query.search;
	let search = JSON.parse(search1);
	var catalystApp = catalyst.initialize(req);
	getDataFromCatalystDataStore(catalystApp, search.table, search.column, search.value)
		.then(detail => {

			res.send(detail);
		})
		.catch((err) => {
			console.log(err, "error in getting data from filter condition");
			res.status(500).send(err);
		});
});


//-----------------------------------------------------------------------------//


app.get('/getfilterinvoice', (req, res) => {
	let search1 = req.query.search;
	let search = JSON.parse(search1);
	console.log(search)
	var catalystApp = catalyst.initialize(req);
	getDataFromCatalystDataStore(catalystApp, search.table, search.column, search.value)
		.then(detail => {

			res.send(detail);
		})
		.catch((err) => {
			console.log(err, "error in getting data from filter condition");
			res.status(500).send(err);
		});
});

function getDataFromCatalystDataStore(catalystApp, table, column, value) {
	return new Promise((resolve, reject) => {

		// Queries the Catalyst Data Store table
		catalystApp.zcql().executeZCQLQuery("Select * from " + table + " where " + column + " ='" + value + "'").then(queryResponse => {
			resolve(queryResponse);
		}).catch(err => {
			console.log(err)
		})
	});
}



//-----------------------------------------------------------------------------//


app.get('/getfilterproduct', (req, res) => {
	let search1 = req.query.search;
	let search = JSON.parse(search1);
	console.log(search)
	var catalystApp = catalyst.initialize(req);
	getDataFromCatalystDataStore(catalystApp, search.table, search.column, search.value)
		.then(detail => {

			res.send(detail);
		})
		.catch((err) => {
			console.log(err, "error in getting data from filter condition");
			res.status(500).send(err);
		});
});

function getDataFromCatalystDataStore(catalystApp, table, column, value) {
	return new Promise((resolve, reject) => {

		// Queries the Catalyst Data Store table
		catalystApp.zcql().executeZCQLQuery("Select * from " + table + " where " + column + " ='" + value + "'").then(queryResponse => {
			resolve(queryResponse);
		}).catch(err => {
			console.log(err)
		})
	});
}




//-----------------------------------------------------------------------------//

app.get('/getfilterspates', (req, res) => {
	let search1 = req.query.search;
	let search = JSON.parse(search1);
	console.log(search)
	var catalystApp = catalyst.initialize(req);
	getDataFromCatalystDataStore(catalystApp, search.table, search.column, search.value)
		.then(detail => {

			res.send(detail);
		})
		.catch((err) => {
			console.log(err, "error in getting data from filter condition");
			res.status(500).send(err);
		});
});

//-----------------------------------------------------------------------------//


app.get('/getallclosedtickets', (req, res) => {
	var catalystApp = catalyst.initialize(req);
	const limit = parseInt(req.query.limit) || 10;
	const offset = parseInt(req.query.offset) || 0;
	const status = req.query.status || 'Closed';
  
	getDataFromCatalystDataStore01(catalystApp, limit, offset, status)
	  .then(detail => {
		res.send(detail);
	  })
	  .catch(err => {
		console.log(err, "error in getting data");
		res.status(500).send(err);
	  });
  });

  function getDataFromCatalystDataStore01(catalystApp, limit, offset, status) {
	return new Promise((resolve, reject) => {
	  const query = `SELECT * FROM ticket_table WHERE Status = 'Closed' LIMIT ${limit} OFFSET ${offset}`;
	  const countQuery = `SELECT COUNT(ROWID) FROM ticket_table WHERE Status = 'Closed'`;
  
	  Promise.all([
		catalystApp.zcql().executeZCQLQuery(query),
		catalystApp.zcql().executeZCQLQuery(countQuery)
	  ]).then(([queryResponse, countResponse]) => {
		const totalRecords = countResponse[0].ticket_table.ROWID;
		resolve({ records: queryResponse, total: totalRecords });
	  }).catch(err => {
		console.log(err);
		reject(err);
	  });
	});
  }


  
  app.get('/getfilterclosedticket', (req, res) => {
	let search1 = req.query.search;
	let search = JSON.parse(search1);
	var catalystApp = catalyst.initialize(req);
	getDataFromCatalystDataStore02(catalystApp, search.table, search.column, search.value)
	  .then(detail => {
		res.send(detail);
	  })
	  .catch((err) => {
		console.log(err, "error in getting data from filter condition");
		res.status(500).send(err);
	  });
  });
  
 
  
  function getDataFromCatalystDataStore02(catalystApp, table, column, value) {
	return new Promise((resolve, reject) => {
	  let query = `SELECT * FROM ${table} WHERE ${column} = '${value}' AND Status = 'Closed'`;
	  catalystApp.zcql().executeZCQLQuery(query)
		.then(queryResponse => {
		  resolve(queryResponse);
		})
		.catch(err => {
		  console.log(err);
		  reject(err);
		});
	});
  }


//-----------------------------------------------------------------------------//


app.get('/getuser', (req, res) => {
	var catalystApp = catalyst.initialize(req);

	// get the details of the current user as a promise
	let userManagement = catalystApp.userManagement();
	let userPromise = userManagement.getCurrentUser();
	userPromise.then(currentUser => {
		console.log("Login details", currentUser);
		res.send(currentUser)
	});
})

//-----------------------------------------------------------------------------//



app.get('/dashboard', (req, res) => {
    var catalystApp = catalyst.initialize(req);
    let today = new Date();
    let formattedDate = today.toISOString().split('T')[0];

    function getDataFromCatalystDataStore(catalystApp, date) {
        // ... (existing implementation)
		return new Promise((resolve, reject) => {
            let promises = [];

            // Your existing queries...
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT COUNT(ROWID) AS ID FROM ticket_table WHERE Status ='Closed'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT COUNT(ROWID) AS ID FROM ticket_table`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT COUNT(ROWID) AS ID FROM ticket_table WHERE Status = 'Created Ticket'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT COUNT(ROWID) AS ID FROM ticket_table WHERE Status = 'Technician Assigned'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT COUNT(ROWID) AS ID FROM ticket_table WHERE Closed_Date = '${date}'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT COUNT(ROWID) AS ID FROM ticket_table WHERE Scheduled_Date = '${date}'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`select sum(Expense_Cost) from list_of_spares where Warranty = 'yes'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`select sum(SubTotal) from list_of_spares where Warranty = 'no'`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT CREATEDTIME, Warranty_Available FROM ticket_table ORDER BY CREATEDTIME`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT Closed_Date FROM ticket_table WHERE Closed_Date IS NOT NULL ORDER BY Closed_Date`));
            promises.push(catalystApp.zcql().executeZCQLQuery(`SELECT Invoice_Date, SUM(SubTotal), SUM(Expense_Cost) FROM list_of_spares GROUP BY Invoice_Date`));

            Promise.all(promises)
                .then(results => {
                    resolve(results);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    function processTickets(data) {
        // ... (existing implementation)
		let result = {};
        data.forEach(entry => {
            let createdTime = entry.ticket_table.CREATEDTIME;
            let warrantyAvailable = entry.ticket_table.Warranty_Available;
            let date = createdTime.split(' ')[0];
            if (!result[date]) {
                result[date] = { date: date, "Yes": 0, "No": 0 };
            }
            if (warrantyAvailable === "Yes") {
                result[date]["Yes"]++;
            } else if (warrantyAvailable === "No") {
                result[date]["No"]++;
            }
        });
        return Object.values(result);
    }

    function transformClosedOnEachDate(inputData) {
        let dateCounts = {};
        inputData.forEach(entry => {
            let closedDate = entry.ticket_table.Closed_Date;
            if (closedDate) {
                if (dateCounts[closedDate]) {
                    dateCounts[closedDate]++;
                } else {
                    dateCounts[closedDate] = 1;
                }
            }
        });
        return Object.keys(dateCounts).map(date => {
            return { date: date, count: dateCounts[date] };
        });
    }

    getDataFromCatalystDataStore(catalystApp, formattedDate)
        .then(results => {
            let processedTickets = processTickets(results[8]);
            let transformedClosedDates = transformClosedOnEachDate(results[9]);
            
            res.send({
                ticketClosed: results[0],
                total: results[1],
                totalUnAssigned: results[2],
                totalAssigned: results[3],
                todayClosedTicket: results[4],
                todayAssignedTicket: results[5],
                warrantyCost: results[6],
                nonWarrantyCost: results[7],
                warrantyAndNonWarranty: processedTickets,
                ClosedOnEachDate: transformedClosedDates,
                costofWarrantyAndNonWarranty: results[10]
            });
        })
        .catch(err => {
            console.log(err, "error in getting data from filter condition");
            res.status(500).send(err);
        });
});





//-----------------------------------------------------------------------------//




module.exports = app;

