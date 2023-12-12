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
        console.log(res);
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
        class="modal fade"
        id="imagemodal"
        tabIndex="-1"
        aria-labelledby="imagemodal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="imagemodal">
                {props.modaldta.title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              <img
                class="img-fluid"
                src={BaseURL + props.modaldta.img}
                alt="Failed to load image"
              />
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" onClick={download}>
                Download
              </button>
              <button
                type="button"
                class="btn btn-secondary"
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
