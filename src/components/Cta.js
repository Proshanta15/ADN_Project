import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-12">
                <div className="cta">
                    <h2>You can contribute to make the environment greener!</h2>
                    <div className="cta_btn">
                        <Button btn_text="Join as a volunteer" />
                        <button className="usage_btn">Donate</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Cta;
