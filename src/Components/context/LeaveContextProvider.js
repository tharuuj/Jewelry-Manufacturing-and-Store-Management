import React, { createContext, useState } from 'react'

export const addLeaveData = createContext();
//export const updateWorkHistoryData = createContext();
//export const dltworkhistorydata = createContext();

const LeaveContextProvider = ({ children }) => {

    const [leaveadd, setLeaveadd] = useState("");
   // const [updateworkhistory, setWorkHistoryUpdate] = useState("");
  //  const [deleteworkhistorydata, setDltWorkHistorydata] = useState("");

    return (
        <>
            <addLeaveData.Provider value={{ leaveadd, setLeaveadd }}>
                
                {children}
                
            </addLeaveData.Provider>
        </>
    )
}

export default LeaveContextProvider



                        