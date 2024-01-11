import React,{useState,useEffect} from 'react'
import {Row,Col,Table} from "react-bootstrap"
import moment from 'moment'

const Damco = ({data}) => {
    const [searchData, setSearchData] = useState(data);
    const [query, setQuery] = useState("");
    const keys = ["po_number"];

    useEffect(() => {
        setSearchData(data);
    }, [data]);

    useEffect(() => {
        setSearchData(handleSearch(data));
    }, [query, data]);

    const handleSearch = (data) => {
        return data.filter((item) => {
            return keys.some(key => {
                const value = item[key];

                if (typeof value === 'string') {
                    return value.toLowerCase().includes(query.toLowerCase());
                } else if (typeof value === 'number' && !isNaN(value)) {
                    return value.toString().includes(query);
                }

                return false;
            });
        });
    };

    return (
        <div>
            <Row className=''>
                <Col md={8}></Col>
                <Col md={4} className='d-flex justify-content-end px-4'>
                    <input type='text' className='w-100 px-2 py-1 rounded searchInput' placeholder='Enter Po no'
                        onChange={(e) => setQuery(e.target.value)} />
                </Col>
            </Row>
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
                        {searchData.map((x,index)=>{
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