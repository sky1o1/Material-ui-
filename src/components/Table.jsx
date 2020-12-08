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


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(ID, Email, Title, Firstname, Picture, Lastname) {
    return { ID, Email, Title, Firstname, Picture,  Lastname};
  }

function TableData(){
    const [datas, setDatas] = useState([]);
    const classes = useStyles();
    const [totalValue, setTotalValue] = useState()
    useEffect(() => {
        async function fetchMyApi(event) {
            try{
                let response = await getRequest('/');
                console.log(response.data.data)
                const rows = response.data.data.map(item => createData(item.id, item.email, item.title, item.firstName, item.picture, item.lastName))
                setTotalValue(response.data.data.length)
                setDatas(rows)
              }
            catch(err){
                console.log(err);
            }
        }
        fetchMyApi();
        
    }, []);
  console.log(totalValue)
    return(
        <React.Fragment>
          <span><h5>Total value: {totalValue}</h5></span>
           <TableContainer component={Paper} style={{marginTop:70, marginLeft:20}}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >Email</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Picture</TableCell>
            <TableCell >Lastname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {datas.map((data) => (
            <TableRow key={data.name}>
              <TableCell>{data.Email}</TableCell>
              <TableCell >{data.Title}</TableCell>
              <TableCell >{data.Firstname}</TableCell>
              <TableCell ><Avatar alt={data.Title} src={data.picture} /></TableCell>
            <TableCell >{data.Lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </React.Fragment>
    )
}

export default TableData;