const axios = require('axios')

const url = 'http://localhost:3000'

module.exports = (cronDetails, context) => {
	

	axios.get(url + `/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
		table: 'ticket_table',
		column: 'Status',
		value: 'Technician Assigned'
	}))}`)
		.then((response) => {
			//console.log('response from ticket table', response.data)
			let updatedData = response.data.map((data) => ({
				ROWID: data.ticket_table.ROWID,
				Status: 'Created Ticket',
				Technician_Name: '',
				Technician_Email: '',
				Scheduled_Date: ''
			}))

			console.log('updated value for payload', updatedData)

			axios.put(url + '/server/waterheater_1_function/updateticket-cron', { data: updatedData })
				.then((response) => {
					console.log('response from updated ticket', response.data)
					context.closeWithSuccess();
				})
				.catch((error) => {
					console.log('error in updating the ticket', error)
					context.closeWithFailure();

				})

		})
		.catch((error) => {
			console.log('error in getting ticket', error)
			context.closeWithFailure();
		})

};
