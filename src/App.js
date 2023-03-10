import './App.css';
import * as React from 'react';
import {  useState,createContext} from "react";
import TotalTicket from "./components/TotalTicket"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TabContext } from '@material-ui/lab';
import TabList from '@mui/lab/TabList';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Button, Container,TextField, Divider, IconButton, Toolbar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Data from "./components/Data"
// import TotalTicket from "./components/TotalTicket"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
//.......................store.........
export const store=createContext()


//....................

function App() {
  const [search,setSearch]=useState("")
  const [tata,setTata]=useState(Data?.rows)
  const [bookedData,setBookedData] = useState([])
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const stored=(data)=>{
    setBookedData(data)
    setValue(1)
  }

  const Search=(event)=>{
    event?.preventDefault()
    if(value==0){
      if(event){
        let inputFilterData = event.target.value
        let data = tata
        let filterData = data.filter((item)=>{
          return item.trainName.toLowerCase().includes(inputFilterData.toLowerCase()) ||item.sourcetime.toLowerCase().includes(inputFilterData.toLowerCase())
        })
        setValue(0)
        return filterData
      }
      else{
        return tata
      }
    }
    else{
      if(event){
        let inputFilterData = event.target.value
        let filterData = bookedData.filter((item)=>{
          return item.trainName.toLowerCase()===inputFilterData.toLowerCase() ||item.sourcetime.toLowerCase()===inputFilterData.toLowerCase()
        })
        setValue(1)
        return filterData
      }
      else{
        return bookedData
      }
    }
  }
  console.log("🚀 ~ file: App.js ~ line 98 ~ Search ~ bookedData", Search())
  

  React.useEffect(()=>{
    setTata(Data?.rows)
  },[])
  
  return (
    <>
   
      <Container fixed>
      <Toolbar>
        <IconButton>
        <DirectionsSubwayFilledIcon/>
        </IconButton>
        <Typography variant='h6'>
          Railway Ticket Booking
        </Typography>
      </Toolbar>
      <Divider/>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <span style={{display:'flex'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Available Trains" {...a11yProps(0)} />
                <Tab label="Booked Tickets" {...a11yProps(1)} />
        </Tabs>
        <span  style={{position:'absolute',right:200}}>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search For Data"
            style={{borderBottom:'1px solid black',width:'25vw'}}
            onChange={(e)=>e?Search(e):null}
          />  
        </span>
        </span>
      </Box>
      <TabPanel value={value} onClick={()=>setTata([...Data?.rows])} index={0}>
        <TotalTicket value={value} tata={Search()} bookedData={bookedData} stored={stored}/>
       { console.log("🚀 ~ file: App.js ~ line 138 ~ App ~ Search()", Search())}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TotalTicket value={value} bookedData={Search()} stored={stored} />
      </TabPanel>
    </Box>
      </Container>
      
      {/* <store.Provider value={globaldata}>
        {/* <TotalTicket/> 
      </store.Provider> */}
    </>
  );
}

export default App;
