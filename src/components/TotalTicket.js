import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {useState,useContext,useEffect} from "react"
import Model from './Model';
import Data from "./Data"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {store} from "../App";
// import {TextField} from "@material-ui/core";
import { Button,Grid, Container, Divider, IconButton, Toolbar,TextField } from '@mui/material';

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
    date:Data?.rows[n]?.date,
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
  
  const inputBookingFeilds = [
    {
      inputType: "textFeild",
      name: "Train Name",
      variant: "outlined",
      id: "trainName",
      placeholder: "",
      label: "Train Name",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.trainName,
    },
    ,
    {
      inputType: "textFeild",
      name: "date",
      variant: "outlined",
      id: "date",
      placeholder: "",
      label: "Date",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.date,
    },
    {
      inputType: "textFeild",
      name: "source",
      variant: "outlined",
      id: "source",
      placeholder: "",
      label: "Source",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.source,
    },
    {
      inputType: "textFeild",
      name: "destination",
      variant: "outlined",
      id: "destination",
      placeholder: "",
      label: "Destination",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.destination,
    },
    {
      inputType: "textFeild",
      name: "sourcetime",
      variant: "outlined",
      id: "sourcetime",
      placeholder: "",
      label: "Source Time",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.sourcetime,
    },
    {
      inputType: "textFeild",
      name: "endingtime",
      variant: "outlined",
      id: "endingtime",
      placeholder: "",
      label: "Ending Time",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.endingtime,
    },
    {
      inputType: "textFeild",
      name: "price",
      variant: "outlined",
      id: "price",
      placeholder: "",
      label: "Price",
      required: "required",
      type: "text",
      disabled:'disabled',
      focused: "",
      fullWidth: "fullWidth",
      value: Data?.rows[n]?.price,
    },
    {
      inputType: "textFeild",
      name: "name",
      variant: "outlined",
      id: "name",
      placeholder: "Passenger Name",
      label: "Passenger Name",
      required: "required",
      type: "text",
      disabled:'',
      focused: "",
      fullWidth: "fullWidth",
      value: '',
    },
    {
      inputType: "textFeild",
      name: "email",
      variant: "outlined",
      id: "email",
      placeholder: "Passenger Email",
      label: "Passenger Email",
      required: "required",
      type: "text",
      disabled:'',
      focused: "",
      fullWidth: "fullWidth",
      value: '',
    },
    {
      inputType: "textFeild",
      name: "phoneNumber",
      variant: "outlined",
      id: "phoneNumber",
      placeholder: "Passenger Mobile Number",
      label: "Passenger Mobile Number",
      required: "required",
      type: "text",
      disabled:'',
      focused: "",
      fullWidth: "fullWidth",
      value: '',
    },

  ]

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
      <Container>
          <span style={{position: "relative"}}>
            <h1>Enter Booking Details</h1>
            <CloseIcon
              class="addUserBtnStyle"
              style={{
                position: "absolute",
                right:'15',
                cursor:'pointer',
                margin:0,
                top:'12',
                width: "24px",
              }}
              onClick={handleClose}
              />
          </span>
        <form onSubmit={BookedDetails}>
        <DialogContent>
        <Grid container spacing={2}>
          {
            inputBookingFeilds.map(inputFeilds=>
              (
              <>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant={inputFeilds.variant}
                  required={inputFeilds.required}
                  fullWidth={inputFeilds.fullWidth}
                  id={inputFeilds.id}
                  min={inputFeilds.min}
                  InputProps={{inputProps:{min:inputFeilds.min}}}
                  label={inputFeilds.label}
                  disabled={inputFeilds.disabled}
                  name={inputFeilds.name}
                  focused={inputFeilds.focused}
                  type={inputFeilds.type}
                  defaultValue={inputFeilds.value}
                  placeholder={inputFeilds.placeholder}
                  onChange={changeHandler }
                />
              </Grid>
              </>
              ))
          }
        </Grid>
        </DialogContent>
        {/* <input value={Data?.rows[n]?.trainName} disabled></input>
        <input value={Data?.rows[n]?.source} disabled></input>
        <input value={Data?.rows[n]?.destination} disabled></input>
        <input value={Data?.rows[n]?.sourcetime} disabled></input>
        <input value={Data?.rows[n]?.endingtime} disabled></input>
        <input value={Data?.rows[n]?.price} disabled></input><br/>
        <input type="text" placeholder="Enter Name" name="name" onChange={changeHandler}></input><br/>
        <input type="text" placeholder="Email" name="email" onChange={changeHandler}></input><br/>
        <input type="text" placeholder="phone number" name="phoneNumber" onChange={changeHandler}></input><br/> */}
        <DialogActions>
          <Button autoFocus type='submit'>
                Book
              </Button>
              <Button onClick={handleClose} autoFocus>
                Cancel
              </Button>
          </DialogActions>
        </form>
      </Container>
      <br/>

      {/* <DialogActions>
          <Button autoFocus onClick={BookedDetails}>
            Book
          </Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions> */}
      </Dialog>

    </div>
  );
}