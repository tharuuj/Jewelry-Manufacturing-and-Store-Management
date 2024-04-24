import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Paginations from '../pagination/Pagination';
import { BASE_URL } from '../../services/helper';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import "./tableWorkHistory.css"
import Confirmation from '../Confirmation/Confirmation';
import moment from "moment"

const TablesLeave = ({ leavedata, leaveGet, handlePrevious, handleNext, page, pageCount, setPage }) => {

  
  
  const formatEmployeeID = (_id, prefix = "E") => {
    // Check if _id is defined
    if (_id) {
      // Get the last 4 digits of the original ID
      const lastFourDigits = _id.slice(-4);
  
      // Format ID with prefix and last four digits of the original ID
      return prefix + lastFourDigits;
    } else {
      // Return a default value if _id is undefined
      return "Unknown";
    }
  };
  

  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
              <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>

                    <th>Leave ID</th>
                    <th>Employee ID</th>
                    <th>Leave Date</th>
                    <th>Leave Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    leavedata.length > 0 ? leavedata.map((element, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1 + (page - 1)*5}</td>
                            <td>{formatEmployeeID(element.empsId)}</td>    
                            <td>{moment(element.leavedate).format("DD-MM-YYYY")}</td>                        
                            <td>{element.leavedes}</td>
                            
                          </tr>
                        </>
                      )
                    }) : <div className='no_data text-center'>No Data Found</div>
                  }

                </tbody>
                
              </Table>
              
              <Paginations
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
              />
                    
            </Card>
          </div>
        </Row>
<ToastContainer/>

        
      </div>
    </>
  )
}

export default TablesLeave