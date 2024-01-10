import React from 'react'
import {Row,Col,Table} from "react-bootstrap"
import moment from 'moment'

const Damco = ({data}) => {
    console.log(data)
  return (
    <div>
        <div className='mt-3' style={{maxHeight:"65vh", overflowY:"auto", overflowX:"scroll"}}>
            <Table className='tableFixHead'>
                <thead>
                    <tr>
                        <th>Po number</th>
                        <th>Plan hod</th>
                        <th>Country</th>
                        <th>Order qty</th>
                        <th>Carton qty</th>
                        <th>Carton type</th>
                        <th>Carton cbm</th>
                        <th>Gross wieg.</th>
                        <th>Booking id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x,index)=>{
                        return (
                            <tr key={index} className='tableData'>
                                <td>{x.po_number}</td>
                                <td>{moment(x.plan_hod).format("DD-MM-YYYY")}</td>
                                <td>{x.country}</td>
                                <td>{x.order_qty}</td>
                                <td>{x.carton_qty}</td>
                                <td>{x.ctn_type}</td>
                                <td>{x.carton_cbm}</td>
                                <td>{x.gross_weight}</td>
                                <td>{x.booking_id}</td>
                                <td className='text-success fw-bold'>{x.booking_status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Damco