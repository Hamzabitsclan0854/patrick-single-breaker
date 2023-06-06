import { Button, Modal } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ResultModel.css";

const ResultModel = (props) => {
  const ground = useSelector((state) => state.ResultReducer.resultGroundFloor);
  const first = useSelector((state) => state.ResultReducer.resultFirstFloor);
  const attic = useSelector((state) => state.ResultReducer.resultAtticFloor);
  const total = ground + first + attic;
  // console.log(total, 'total');

  const navigate = useNavigate();
  const showModal = () => {
    props.setIsModalOpen(true);
  };

  const handleOk = () => {
    props.setIsModalOpen(false);
    if (props.floor === "groundFloor") {
      navigate("/first-floor");
    }
    if (props.floor === "firstFloor") {
      navigate("/attic");
    }
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };
  const percentage = 100;
  return (
    <>
      <Button type="primary" onClick={showModal}>
        open model
      </Button>
      <Modal
        title={props.floor === 'groundFloor' ? 'Ground Floor' : "First Floor" }
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Next Level"
        cancelText="Try Again"
        bodyStyle={{
          backgroundColor: '#CC664A',
          color:'white',
      }}
      >
        {props.floor === "atticFloor" ? (
          <>
            <div className="d-grid justify-content-center">
              <div style={{ height: "200px", width: "200px", margin: "auto" }}>
                <CircularProgressbar
                  value={
                    total === 0
                      ? 100
                      : total === 1 || total === 2 || total === 3
                      ? 90
                      : total === 4 || total === 5 || total === 6
                      ? 70
                      : total === 7 || total === 8 || total === 9
                      ? 60
                      : total === 10 || total === 11 || total === 12
                      ? 50
                      : 0
                  }
                  text={`${
                    total === 0
                      ? 100
                      : total === 1 || total === 2 || total === 3
                      ? 90
                      : total === 4 || total === 5 || total === 6
                      ? 70
                      : total === 7 || total === 8 || total === 9
                      ? 60
                      : total === 10 || total === 11 || total === 12
                      ? 50
                      : 0
                  }%`}
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-between resultFormat">
                <div>Ground Floor</div>
                {ground < 0 ? (
                  <div>Incomplete Level</div>
                ) : (
                  <div>{ground + 1 + " Attempt"}</div>
                )}
              </div>
              <div className="d-flex justify-content-between resultFormat">
                <div>First Floor</div>
                {first < 0 ? (
                  <div>Incomplete Level</div>
                ) : (
                  <div>{first + 1 + " Attempt"}</div>
                )}
              </div>
              <div className="d-flex justify-content-between resultFormat">
                <div>Attic</div>
                {attic < 0 ? (
                  <div>Incomplete Level</div>
                ) : (
                  <div>{attic + 1 + " Attempt"}</div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            {props.trial === 0 ? (
              <div className="d-grid justify-content-center">
                <div
                  style={{ height: "200px", width: "200px", margin: "auto" }}
                >
                  <CircularProgressbar value={100} text={`${100}%`} />
                </div>
                <div className="mt-4 resultFormat">
                  Huurraay!!! You have pass your Assignment in{" "}
                  <strong>1 Attempt.</strong>
                </div>
              </div>
            ) : (
              <div className="d-grid justify-content-center">
                <div
                  style={{ height: "200px", width: "200px", margin: "auto" }}
                >
                  <CircularProgressbar
                    value={
                      props.trial === 1
                        ? 90
                        : props.trial === 2
                        ? 80
                        : props.trial === 3
                        ? 70
                        : props.trial === 4
                        ? 60
                        : 0
                    }
                    text={`${
                      props.trial === 1
                        ? 90
                        : props.trial === 2
                        ? 80
                        : props.trial === 3
                        ? 70
                        : props.trial === 4
                        ? 60
                        : 0
                    }%`}
                  />
                </div>
                <div className="mt-4">
                  {props.trial < 0 ? (
                    <div className="resultFormat">
                      Opps! You Havn't Complete This Level yet.
                    </div>
                  ) : (
                    <div className="resultFormat">
                      You have pass your First Assignment in{" "}
                      <strong> {props.trial + 1} Attempt</strong>{" "}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {/* { props.trial} */}
      </Modal>
    </>
  );
};

export default ResultModel;
