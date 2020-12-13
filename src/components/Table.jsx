import React, { useState, useEffect }  from "react";
import {getRequest, postRequest} from '../config/axios.config'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import "react-datepicker/dist/react-datepicker.css";
import '../css/styles.css'
import { isBefore, toDate } from "date-fns";
import DateRangePicker from "./DateRangePicker";
import dummyData from "./dummy-date";
import { isObjectEmpty } from "../utils/index";
import MaterialTable from 'material-table';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

 
  function createData(Date, Price, ProductName, Uuid) {
    return { Date, Price, ProductName, Uuid };
}

function TableData(){
    const [datas, setDatas] = useState([]);
    const classes = useStyles();
    const [error, setError] = useState({});
    const [date, setDate] = useState({
      startDate: null,
      endDate: null
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredData, setFilteredData] = useState(dummyData);
  


    // useEffect(() => {
    //     async function fetchMyApi(event) {
    //         try{
    //             let response = await getRequest(`user?page=${page}&limit=${count}`);
    //             const rows = response.data.data.map(item => createData(item.id, item.email, item.title, item.firstName, item.picture, item.lastName))
    //             setTotalValue(response.data.data.length)
    //             setDatas(rows)
    //           }
    //         catch(err){
    //             console.log(err);
    //         }
    //     }
    //     fetchMyApi();
    //     fetchDatas();
        
    // }, []);

    
//     useEffect(() => {
//     async function fetchMyApi() {
//       try {
//           let response = await getRequest(`/user?_page=1&_limit=20`)
//           console.log(response)
//           const rows = response.data.map(item => createData(item.date, item.price, item.productName, item.uuid))
//           setDatas(prev => [...prev, ...rows]);
//       }
//       catch (error) {
//           console.log(error)
//       }
      
//   }
//   fetchMyApi()
// }, []);

    const onDateChangeHandler = (dateData, id) => {
      setDate((prevDate) => ({
        ...prevDate,
        [id]: dateData.getTime() // save as UTC time
      }));
      setError({});
  
      //Check if end date is after start date
      if (id === "endDate" && !isBefore(date.startDate, dateData)) {
        setError((prevError) => ({
          ...prevError,
          endDate: "End date is before start date"
        }));
        alert('End date is before start date')
      }
  
      if (id === "startDate" && isBefore(date.endDate, dateData)) {
        setError((prevError) => ({
          ...prevError,
          startDate: "start date is after end date"
        }));
        alert('Start date is after end date')
        
      }
    };
  

    useEffect(() => {
      if (
        isObjectEmpty(error) &&
        date.starDate !== null &&
        date.endDate !== null
      ) {
        //filter data
        const filterData = dummyData.filter((element) => {
          if (
            element.createdAt >= date.startDate &&
            element.createdAt <= date.endDate
          ) {
            return element;
          }
        });
        setFilteredData(filterData);
      }
    }, [date.startDate, date.endDate]);
 
    return(
        <React.Fragment>
      <DateRangePicker
        startDate={date.startDate}
        endDate={date.endDate}
        error={error}
        onDateChangeHandler={onDateChangeHandler}
      />
           {/* <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
     
        <TableHead>
          <TableRow>
            <TableCell >Email</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Picture</TableCell>
            <TableCell >Lastname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> */}
        {/* {datas.filter(data => data.date < date.startDate && data.date > date.endDate).map(filteredPerson => (
            <li>
              {filteredPerson.name}
            </li>
          ))}
        {datas.map((data) => ( */}
           {/* {datas.filter(data => data.date < date.startDate && data.date > date.endDate).map(dataa => (
            <TableRow key={dataa.name}>
              <TableCell>{dataa.Email}</TableCell>
              <TableCell >{dataa.Title}</TableCell>
              <TableCell >{dataa.Firstname}</TableCell>
              <TableCell ><Avatar alt={dataa.Title} src={dataa.picture} /></TableCell>
            <TableCell >{dataa.Lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer> */}

{/* <TableContainer className={classes.wrapper} component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Date</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>ProductName</TableCell>
                            <TableCell>Uuid</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> */}


                        {/* {filteredData.map((data) => (

                            < TableRow  >
                                <TableCell>{data.createdAt}</TableCell>
                                <TableCell >{data.title}</TableCell>
                                <TableCell >{data.phoneNumber}</TableCell>
                                <TableCell> {data.address}</TableCell>
                            </TableRow>
                        ))}
                       
                    </TableBody>
                </Table>
            </TableContainer > */}
             {/* <Table data={filteredData} pageLimit={5} /> */}

             <MaterialTable
                title="Data Table"
                columns={[
                  { title: 'Address', field: 'address' },
                  { title: 'City', field: 'city' },
                  { title: 'Date', field: 'createdAt' },
                  { title: 'Phone Number', field: 'phoneNumber' },
                  { title: 'Title', field: 'title' },
                ]}
                data={filteredData}        
                options={{
                  filtering: true
                }}
              />
        </React.Fragment>
    )
}

export default TableData;
