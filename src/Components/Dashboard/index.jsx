import React from "react";
import "./Styles.css";

import BaseURL from "../../apis/BaseURL";

import Modal from "./Modal";

const Index = () => {
  const [list, setlist] = React.useState([]);
  const [modaldta, setmodaldta] = React.useState({});

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      //   alert("Please login first");
      window.location.href = "/login";
      return;
    }
    fetch(`${BaseURL}admin/allVehicles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.error) {
          alert(res.error);
          return;
        }
        setlist(res.vehicles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const veiwmodal = (title, img) => {
    setmodaldta({ title, img });
    document.getElementById("imagemodalbtn").click();
  };

  const renderTable = () =>
    list.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td colSpan={3}>{item.vehicleOwner.name}</td>
        <td colSpan={4}>{item.vehicleOwner.email}</td>
        <td
          colSpan={3}
          className="pointer"
          onClick={() => veiwmodal("RC Image", item.rcImage.split("\\")[2])}
        >
          {item.vehicleNumber}
        </td>
        <td className="text-center" colSpan={2}>
          {item.hypotheticationRC ? (
            <span
              className="text-success pointer"
              onClick={() =>
                veiwmodal(
                  "Hypothetication RC",
                  item.BankNOCImage.split("\\")[2]
                )
              }
            >
              View
            </span>
          ) : (
            <span className="text-danger">NA</span>
          )}
        </td>
        <td className="text-center" colSpan={2}>
          {item.insuranceValid ? (
            <span
              className="text-success pointer"
              onClick={() =>
                veiwmodal("Insurance", item.insuranceImage.split("\\")[2])
              }
            >
              View
            </span>
          ) : (
            <span className="text-danger">NA</span>
          )}
        </td>
        <td className="text-center" colSpan={2}>
          {item.otherDocument ? (
            <span
              className="text-success pointer"
              onClick={() =>
                veiwmodal(
                  "Other Document ",
                  item.otherDocumentImage.split("\\")[2]
                )
              }
            >
              View
            </span>
          ) : (
            <span className="text-danger">NA</span>
          )}
        </td>
      </tr>
    ));

  return (
    <div className="pad90">
      <h1 className="text-center">All Vehicles</h1>
      <Modal modaldta={modaldta} />
      <button
        type="button"
        id="imagemodalbtn"
        className="btn btn-primary visually-hidden"
        data-bs-toggle="modal"
        data-bs-target="#imagemodal"
      >
        Launch demo modal
      </button>
      <div className="commntable">
        <section>
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th colSpan={3}>Owner Name</th>
                  <th colSpan={4}>Owner Email</th>
                  <th colSpan={3}>Rc No.</th>
                  <th className="text-center" colSpan={2}>
                    Hypothetication
                  </th>
                  <th className="text-center" colSpan={2}>
                    Insurance
                  </th>
                  <th className="text-center" colSpan={2}>
                    Other Document
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead></thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
