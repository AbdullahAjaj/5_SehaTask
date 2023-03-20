import React from "react";
import TableRow from "./TableRow";

const TableList = ({ dataList, headers, tableRowHandlers }) => {
  return( 
    <table className="table">
      <thead>
        <tr>
          {Object.keys(headers).map(item=>{
            return <th>{headers[item]}</th>
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((item) => {
          return <TableRow key={item.id} dataItem={item} headers={headers} {...tableRowHandlers} />
        })}
      </tbody>
    </table>
  )
};

export default TableList;
