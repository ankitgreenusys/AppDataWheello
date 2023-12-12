import React from "react";
import BaseURL from "../../apis/BaseURL";

const Modal = (props) => {
  const download = () => {
    fetch(BaseURL + props.modaldta.img, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.blob())
      .then((res) => {
        // console.log(res);
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", props.modaldta.title);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="imagemodal"
        tabIndex="-1"
        aria-labelledby="imagemodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="imagemodal">
                {props.modaldta.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                className="img-fluid"
                src={BaseURL + props.modaldta.img}
                alt="Failed to load image"
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={download}>
                Download
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
