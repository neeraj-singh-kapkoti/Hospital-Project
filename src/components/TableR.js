import { Container, Paper, Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import React, {useState} from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "grey",
        paddingTop: "10px"
    },
}))

export const TableR = (props) => {
   console.log(props.item)

 const classes = useStyles()
 const [users, setUsers] = useState(props.item);
 console.log(users,"------")
  return (
      <Container className={classes.root} >
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>TreatMent/Services</TableCell>
                        <TableCell>COST</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                      <TableRow>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.cost}</TableCell>
                      </TableRow>  
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
      </Container>
  )
}