import "./DashboardService.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { autoCol } from "@syncfusion/ej2-grids";
import swal from "sweetalert";
import dateFormat from "dateformat";
import AdminAppoServices from "../../../../Services/AdminServices/AdminAppoServices";
import ApprovedService from "./ApprovedService";

export default function PendingService() {
  const [PendingServices, setPendingServices] = useState([]);
  const [ConfirmService, setConfirmService] = useState([]);
  const [AppErr, setAppErr] = useState("");
  useEffect(() => {
    AdminAppoServices.getAdminServices()
      .then((service) => {
        setPendingServices(
          service
            .filter((item) => item.Status === "pending")
            .sort((a, b) => (a.AddedDate > b.AddedDate ? -1 : 1))
        );

        setConfirmService(
          service
            .filter((item) => item.Status === "confirm" && item.result===false)
            .sort((a, b) => (a.AddedDate > b.AddedDate ? -1 : 1))
        );
      })
      .catch((err) => {
        console.log(err.message);
        setAppErr(err.message);
        if (err.response) setAppErr(err.response.data.message);
      });
  }, []);

  const handleUpdate = (row, status) => {
    var ClosedService = {};
    console.log(row);
    if (status == "closed") {
      swal("Why You want to delete this Appoinment?:", {
        content: "input",
        content: "input1",
      }).then((value) => {
        ClosedService = {
          _id: row._id,
          description: value,
          Status: status,
        };
      });
    } else {
      ClosedService = {
        _id: row._id,
        Status: status,
      };
    }

    AdminAppoServices.UpdateService(ClosedService).then((result) => {
      setPendingServices(PendingServices.filter((item) => item._id !== row._id));
      setConfirmService((row) =>
        ConfirmService.concat(row)
      );
    }).catch((err) => {
      console.log(err.message);
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
              onClick={() => handleUpdate(params.row, "confirm")}
            >
              Approve
            </button>

            <DeleteOutline
              className="ServiceDelete"
              onClick={() => handleUpdate(params.row, "closed")}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="serviceList">
      <br />
      <h1>Pending Services</h1>
      <br />

      <DataGrid
        getRowId={(row) => row._id}
        rows={PendingServices}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        autoHeight={autoCol}
        checkboxSelection={false}
      />
      <ApprovedService setConfirmService={setConfirmService} ConfirmService={ConfirmService}/>
    </div>
  );
}
