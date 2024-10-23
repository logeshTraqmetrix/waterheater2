import axios from 'axios'
import React, { useEffect } from 'react'

const TechnicianStockView = ({ roleEmail, shouldFetchData, onDataFetched }) => {

    useEffect(() => {
        axios.get(
                `/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(
                    JSON.stringify({
                        table: 'techinician_stocks',
                        column: 'Technician_Email',
                        value: roleEmail,
                    })
                )}`
            ).then((response)=>{
                console.log('response from stokes table',response)
            }).catch((error)=>{
                console.log('error in getting stokes data',error)
            })
    })
    return (
        <div>TechnicianStockView</div>
    )
}

export default TechnicianStockView