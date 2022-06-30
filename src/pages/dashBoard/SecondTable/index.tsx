import React from 'react';
import CustomGrid from '../../../components/CustomGrid';

function SecondHomeTable() {
  const columnDef = [
    {
      headerName: 'Social traffic',
      children: [{ field: 'REFFERRAL' }, { field: 'VISITORS' }],
    },
  ];
  return (
    <div>
      <CustomGrid
        handleCellClick={undefined}
        loading={false}
        disableClickSelectionRenderers={false}
        columnDefs={columnDef}
        noDataTxt='No Datas...'
        // rowData={rowData}
        TableHeight={50}
      />
    </div>
  );
}

export default SecondHomeTable;
