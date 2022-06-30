import React from "react";
import CustomGrid from "../../components/CustomGrid";
function TablePage() {
  const columnDef = [
    {
      headerName: "Social traffic",
      children: [
        { field: "PROJECT" },
        { field: "BUDGET" },
        { field: "STATUS" },
        { field: "USERS" },
        { field: "COMPLETION" },
      ],
    },
  ];
  return (
    <div
      style={{
        color: "red",
        fontSize: "25px",
        marginLeft: "200px",
      }}
    >
      <CustomGrid
        handleCellClick={undefined}
        loading={false}
        disableClickSelectionRenderers={false}
        columnDefs={columnDef}
        noDataTxt="No Datas..."
        // rowData={rowData}
        TableHeight={50}
      />
    </div>
  );
}

export default TablePage;
