import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import TablesLeave from '../../Components/Tables/TablesLeave';
import Spiner from "../../Components/Spiner/Spiner"
import { useNavigate } from "react-router-dom"
import { addLeaveData } from '../../Components/context/LeaveContextProvider';
import { leavegetfunc } from '../../services/Apis';
import Alert from 'react-bootstrap/Alert';
//import "./homeWorkHistory.css"
import { toast } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.css';



const HomeLeave = () => {

  const [leavedata, setLeaveData] = useState([]);
  const [showspin, setShowSpin] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { leaveadd, setLeaveadd } = useContext(addLeaveData);

  const navigate = useNavigate();

  const addleave = () => {
    navigate("/addleave")
  }


  // get work history 
  const leaveGet = async () => {
    const response = await leavegetfunc(search, page);

    if (response.status === 200) {
      setLeaveData(response.data.leavesdata);
      setPageCount(response.data.Pagination.pageCount)
    } else {
      console.log("error in getting leave data")
    }
  }


  // pagination
  // handle prev btn
  const handlePrevious = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1
    })
  }

  // handle next btn
  const handleNext = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1
    })
  }


  useEffect(() => {
    leaveGet();
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [search, page])


  return (
    <>

      {
        leaveadd ? <Alert variant="success" onClose={() => setLeaveadd("")} dismissible>{leaveadd.empsId.toUpperCase()} Employees' Leave Succesfully Added</Alert> : ""
      }
       
      <div className="container">
        <div className="main_div">
          {/* search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">

            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search by employee id"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="success" className='search_btn'>Search</Button>
              </Form>
            </div>


            <div className="add_btn">
              <Button variant="primary" onClick={addleave}> <i class="fa-solid fa-plus"></i>&nbsp; Add Leaves</Button>

            </div>
          </div>

        </div>
        {
          showspin ? <Spiner /> : <TablesLeave
            leavedata={leavedata}           
            leaveGet={leaveGet}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            page={page}
            pageCount={pageCount}
            setPage={setPage}
          />
        }

      </div>


    </>
  )
}

export default HomeLeave


