import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {useState,useContext,useEffect} from "react"
import Model from './Model';
import Data from "./Data"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {store} from "../App";
import { Button, Container, Divider, IconButton, Toolbar } from '@mui/material';

export default function DataTable(props) {
  const [n,setN]=useState(0)
  const [open, setOpen] =useState(false)
  const [availableData,setAvailableData] = useState(props.availableData)

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  let bookedColumns = Data?.columns
  bookedColumns = [...bookedColumns,
    { field: 'name', headerName: 'Passenger Name', width: 150 },
    { field: 'email', headerName: 'Passenger Email', width: 200 },
    { field: 'phoneNumber', headerName: 'Passenger Phone Number',type:"number",width:90 },
  ]

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  //......................
  const [booked,setBooked]=useState([])
  const [data,setData]=useState({})
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
const BookedDetails=(e)=>{
  e.preventDefault()
  let tempData = booked
  let id = booked[booked.length-1]?.id ? booked[booked.length-1]?.id+1 : 1;
  tempData = [...booked,{...data,id:id}]
  setBooked(tempData)
  props.stored(tempData)
  setOpen(false)

}
const handleEvent= (
  params, // GridRowParams
  event, // MuiEvent<React.MouseEvent<HTMLElement>>
  details, // GridCallbackDetails
  ) => {
    setOpen(true)
    setN(params.row.id-1)
  // setMessage();
};
useEffect(()=>{
  setData({
    id:Data?.rows[n]?.id,
    trainName:Data?.rows[n]?.trainName,
    destination:Data?.rows[n]?.destination,
    source:Data?.rows[n]?.source,
    sourcetime:Data?.rows[n]?.sourcetime,
    endingtime:Data?.rows[n]?.endingtime,
    price:Data?.rows[n]?.price,
    name:"",
    email:"",
    phoneNumber:"",
  })
  if(props.value==0){
    setAvailableData([...props?.availableData]);
    setBooked([...props?.bookedData])
  }
  else{setBooked([...props?.bookedData])};
},[n,props.availableData,props?.bookedData])
  return (
    <div style={{ height: 400, width: '100%' }}>
      {props.value==0&&<DataGrid
        rows={availableData}
        onRowClick={handleEvent}
        columns={Data?.columns}
        pageSize={5}
        slots={{
          toolbar: GridToolbar,
        }}
        rowsPerPageOptions={[1]}
      />}
      {props.value===1&&<DataGrid
      rows={booked}
      columns={bookedColumns}
      // onRowClick={handleEvent}
      slots={{
        toolbar: GridToolbar,
      }}
      pageSize={5}
      rowsPerPageOptions={[1]}
    />}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
      <DialogContent>
      <h1>Enter Details</h1>
      <form>
       <input value={Data?.rows[n]?.trainName} disabled></input>
       <input value={Data?.rows[n]?.source} disabled></input>
       <input value={Data?.rows[n]?.destination} disabled></input>
       <input value={Data?.rows[n]?.sourcetime} disabled></input>
       <input value={Data?.rows[n]?.endingtime} disabled></input>
       <input value={Data?.rows[n]?.price} disabled></input><br/>
       <input type="text" placeholder="Enter Name" name="name" onChange={changeHandler}></input><br/>
       <input type="text" placeholder="Email" name="email" onChange={changeHandler}></input><br/>
       <input type="text" placeholder="phone number" name="phoneNumber" onChange={changeHandler}></input><br/>
      </form>
      </DialogContent>
      <DialogActions>
          <Button autoFocus onClick={BookedDetails}>
            Book
          </Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}