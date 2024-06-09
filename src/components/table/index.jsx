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
  const { typeNum, datasourse, cols, variant, noHead, noFooter, size } = props;

  return (
    <>
      <TableContainer
        className="px-3 py-3 shadow-sm rounded-1"
        style={{ background: BaseColors.white }}
      >
        <Table 
          variant={variant ? variant : "striped"}
          size={size}
        >
          {/* <TableCaption>List of Users</TableCaption> */}
          {noHead ? (null) : (
            <Thead>
              <Tr>
                {cols.map((x, i) => (
                  <Th>{x.heading}</Th>
                ))}
              </Tr>
            </Thead>
          )}
          <Tbody>
            {datasourse.map((row, i) => (
              <Tr>
                {cols.map((col, ind) => (
                  <Td className={col.colClass}>{row[col.key]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          {noFooter ? (null) : (
            <Tfoot>
              <Tr></Tr>
            </Tfoot>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
