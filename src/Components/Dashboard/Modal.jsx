import React from "react";
import BaseURL from "../../apis/BaseURL";
import { saveAs } from "file-saver";

const Modal = (props) => {
  const download = () => {
    const link = BaseURL + props.modaldta.img;
    saveAs(link, props.modaldta.title + "of" + props.modaldta.name);
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
              <button onClick={download} className="btn btn-primary">
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
