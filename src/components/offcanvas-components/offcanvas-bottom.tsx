import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



const OffcanvasBottom = () => {
  return (
    <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        ...
      </div>
    </div>
  )
}
export default OffcanvasBottom;