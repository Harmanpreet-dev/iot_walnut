import React from "react";
import { useDispatch } from "react-redux";
import { SET_SELECTED_FLEET } from "../redux/actions/dashboardActions";

export default function Fleet({ fleet, selectedFleet }) {
  const dispatch = useDispatch();

  return (
    <div
      className={
        selectedFleet?.id === fleet.id
          ? "selected-rectangle-243"
          : "rectangle-243"
      }
      onClick={() => dispatch(SET_SELECTED_FLEET(fleet))}
    >
      <div className="fleet-header flex justify-between">
        <div className="fleet-name">{fleet.name}</div>
        <div className="frame-313257">
          <div className="group-44732"></div>
          <div className="status">Active</div>
        </div>
      </div>
      <div className="frame-313256">
        <div className="frame-313255">
          <div className="frame-313254">
            <div className="contents-key">Total Devices</div>
            <div className="contents-value">67,845</div>
          </div>
          <div className="frame-313254">
            <div className="contents-key">Online Devices</div>
            <div className="contents-value">65,430</div>
          </div>
          <div className="frame-313254">
            <div className="contents-key">Offline Devices</div>
            <div className="contents-value">2,415</div>
          </div>
          <div className="frame-313254">
            <div className="contents-key">Active Devices</div>
            <div className="contents-value">63,900</div>
          </div>
          <div className="frame-313254">
            <div className="contents-key">In-active Devices</div>
            <div className="contents-value">3,945</div>
          </div>
        </div>
      </div>
    </div>
  );
}
