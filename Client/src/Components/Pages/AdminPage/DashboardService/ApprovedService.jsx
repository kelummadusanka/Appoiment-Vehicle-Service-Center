import "./DashboardService.css";
import { DataGrid } from "@material-ui/data-grid";
import { CheckCircleOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { autoCol } from "@syncfusion/ej2-grids";
import swal from "sweetalert";
import dateFormat from "dateformat";
import AdminAppoServices from "../../../../Services/AdminServices/AdminAppoServices";


export default function ApprovedService({setConfirmService, ConfirmService}) {
  const [AppErr, setAppErr] = useState("");

  const handleUpdate = (_id) => {
    var ApprovedServices = {};
    console.log(_id);
    swal({
      content: {
        element: "input",
        attributes: {
          placeholder: "Type Service Cost!",
          type: "text",
        }
      },
    }).then((value) => {
      ApprovedServices = {
        _id: _id,
        description: "Well completed !",
        cost: value,
        result: true,
      };
      AdminAppoServices.UpdateService(ApprovedServices);
      setConfirmService(ConfirmService.filter((item) => item._id !== _id));
    });
  };

  const getDate = (params) => dateFormat(params, "mm/dd/yyyy");

  const columns = [
    {
      field: "_id",
      headerName: "id",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "appoDate",
      headerName: "Date",
      width: 200,
      valueSetter: getDate,
    },
    {
      field: "appoTime",
      headerName: "Time",
      width: 200,
    },
    {
      field: "vehType",
      headerName: "Ve. Type",
      width: 200,
    },
    {
      field: "vehNumber",
      headerName: "Ve. No.",
      width: 200,
    },
    {
      field: "ServiceType",
      headerName: "Service Type",
      width: 200,
    },

    {
      field: "status",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              className="approveServiceBtn"
              onClick={() => handleUpdate(params.row._id)}>
                <CheckCircleOutline className="checkboxoutline"/>
              Finished!
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div >
      <br />
      <h1>Approved Services</h1>
      <br />

      <DataGrid
        getRowId={(row) => row._id}
        rows={ConfirmService}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        autoHeight={autoCol}
        checkboxSelection={false}
      />
    </div>
  );
}
