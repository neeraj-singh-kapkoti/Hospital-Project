import { Container, Paper, Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import React, {useState} from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundColor: "grey",
        padding: "30px",
        fontSize: '200pt',
    }
}))

export const TableR = (props) => {

 const classes = useStyles()
 const [users, setUsers] = useState(props.item);
  return (
    <section className="table">
      <Container className={classes.root} >
                <h1 className="heading">TREATMENT COST</h1>
        <TableContainer component={Paper}>
            <Table className={classes.table} >
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
      </section>
  )
}