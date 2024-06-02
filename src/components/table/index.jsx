import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";
import { React } from "react";
import BaseColors from "../../constant";

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// type tableProps = {
//   label: string;
//   datasourse: any[];
//   cols: any[];
// };

// export default function CustomizedTable(props: tableProps) {
//   const { label, datasourse, cols } = props;
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//           {cols.map((x, i) => (
//               <StyledTableCell align="left">{x.heading}</StyledTableCell>

//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {datasourse.map((row, i) => (
//             <StyledTableRow>
//               {cols.map((col, ind) => (
//                 <StyledTableCell align="left">{row[col.key]}</StyledTableCell>
//               ))}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

export default function CustomTable(props) {
  const { typeNum, datasourse, cols } = props;

  return (
    <>
      <TableContainer
        className="px-3 py-3 shadow-sm rounded-1"
        style={{ background: BaseColors.white }}
      >
        <Table variant="striped">
          {/* <TableCaption>List of Users</TableCaption> */}
          <Thead>
            <Tr>
              {cols.map((x, i) => (
                <Th>{x.heading}</Th>
              ))}

              {/* <Th isNumeric>ID</Th>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Country</Th>
              <Th>Action</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {datasourse.map((row, i) => (
              <Tr>
                {cols.map((col, ind) => (
                  <Td>{row[col.key]}</Td>
                ))}
              </Tr>
            ))}
            {/*<Tr>
              <Td isNumeric>1</Td>
              <Td>Tianna Douglas</Td>
              <Td>jschmeler</Td>
              <Td>jessie.cremin@yahoo.com</Td>
              <Td>West Cotyfurt</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
             <Tr>
              <Td isNumeric>2</Td>
              <Td>Rene Batz</Td>
              <Td>kim.hermann</Td>
              <Td>epacocha@davis.com</Td>
              <Td>Ziemannview</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>3</Td>
              <Td>Vinnie Boehm V</Td>
              <Td>kamren76</Td>
              <Td>rath.deja@hotmail.com</Td>
              <Td>Kuhlmanshire</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>4</Td>
              <Td>Dane Yundt</Td>
              <Td>rigoberto.braun</Td>
              <Td>rheathcote@hotmail.com</Td>
              <Td>East Ariel</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>5</Td>
              <Td>Krystel Weber</Td>
              <Td>skoch</Td>
              <Td>zulauf.pat@effertz.com</Td>
              <Td>West Cotyshire</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>6</Td>
              <Td>Oren Mertz</Td>
              <Td>shaniya.hagenes</Td>
              <Td>austin77@rath.com</Td>
              <Td>Mannville</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>7</Td>
              <Td>Manuela Mueller</Td>
              <Td>hsimonis</Td>
              <Td>robin.herzog@kerluke.biz</Td>
              <Td>Gutkowskihaven</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>8</Td>
              <Td>Mr. Lowell Rau II</Td>
              <Td>wendy.stark</Td>
              <Td>pagac.novella@becker.net</Td>
              <Td>Lindbury</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>9</Td>
              <Td>Lue Cremin</Td>
              <Td>gutmann.brown</Td>
              <Td>alphonso94@mraz.com</Td>
              <Td>West Tyrelmouth</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>10</Td>
              <Td>Ezekiel Hayes II</Td>
              <Td>xmills</Td>
              <Td>tklocko@wintheiser.net</Td>
              <Td>Lake Alvenastad</Td>
              <Td>USA</Td>
              <Td className="d-flex">
                <MdEditNote style={{ fontSize: "1.5em" }} />
                <MdOutlineDelete style={{ fontSize: "1.5em" }} />
              </Td>
            </Tr> */}
          </Tbody>
          <Tfoot>
            <Tr></Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
