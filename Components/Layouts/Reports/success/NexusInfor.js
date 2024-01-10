import React from 'react'
import {Row,Col,Table} from "react-bootstrap"
import moment from 'moment'

const NexusInfor = ({data}) => {

  return (
    <div>
        <button>create</button>
        <div className='mt-3' style={{maxHeight:"65vh", overflowY:"auto", overflowX:"scroll"}}>
            <Table className='tableFixHead'>
                <thead>
                    <tr>
                        <th>Po number</th>
                        <th>Assign Equipment id</th>
                        <th>Booking no</th>
                        <th>Shipment Load type</th>
                        <th>Invoice no</th>
                        <th>Billway bill</th>
                        <th>Carrier</th>
                        <th>Transload location</th>
                        <th>Estd. Departure date</th>
                        <th>Equipment no type</th>
                        <th>Seal no</th>
                        <th>Ctn qty</th>
                        <th>Units</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x,index)=>{
                        return (
                            <tr key={index} className='tableData'>
                                <td>{x.po_number}</td>
                                <td>{x.assign_equipment_id}</td>
                                <td>{x.booking_number}</td>
                                <td>{x.shipment_load_tpye}</td>
                                <td>{x.invoive_number}</td>
                                <td>{x.bill_waybill}</td>
                                <td>{x.carrier}</td>
                                <td>{x.updated_transload_location_us_only}</td>
                                <td>{moment(x.estimated_departure_date).format("DD-MM-YYYY")}</td>
                                <td>{x.equipment_number_type}</td>
                                <td>{x.seal_number}</td>
                                <td>{x.ctn_qty}</td>
                                <td>{x.units}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default NexusInfor