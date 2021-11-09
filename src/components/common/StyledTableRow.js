import React from 'react';
import styled from "styled-components";

const TableRowTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  margin: 0.3vw 0;
  
  display: flex;
  
`;

const TableHeader = styled.div`
  box-sizing: border-box;
  width: 30%;
  padding: 1.5vw 1vw;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #FFB6634D;

  font-size: 1vw;

`;

const TableBody  = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 1vw;

  display: flex;
  align-items: center;

  font-size: 1vw;
  letter-spacing: 0.1vw;
  
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
`;

const StyledTableRow = ({header, children}) => {
    return (
        <TableRowTemplate>
            <TableHeader>{header}</TableHeader>
            <TableBody>
                {children}
            </TableBody>
        </TableRowTemplate>
    );
};

export default StyledTableRow;