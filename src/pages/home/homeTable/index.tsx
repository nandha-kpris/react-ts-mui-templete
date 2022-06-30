import CustomGrid from "../../../components/CustomGrid";
import { AgGridColumnProps } from "ag-grid-react";
function HomeTable() {
  const columnDef = [
    {
      headerName: "Page visits",
      children: [
        { field: "PAGE NAME" },
        { field: "VISITORS" },
        { field: "UNIQUE USER" },
        { field: "BOUNCE RATE" },
      ],
    },
  ];

  return (
    <div>
      <CustomGrid
        handleCellClick={undefined}
        loading={false}
        disableClickSelectionRenderers={false}
        columnDefs={columnDef}
        noDataTxt="No Datas..."
        //rowData={rowDatas}
        TableHeight={50}
      />
    </div>
  );
}

export default HomeTable;
