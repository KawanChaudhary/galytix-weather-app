import React from "react";

interface ModeToggleProps {
  isTableMode: boolean;
  onToggle: () => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ isTableMode, onToggle }) => {
  return (
    <div className="d-flex align-items-center gap-3 mb-3 p-2 justify-content-center">
      <label className="form-label m-0">
        View Mode: {isTableMode ? "Table" : "Card"}
      </label>
      <div
        className="toggle-container"
        style={{
          cursor: "pointer",
          borderRadius: "25px",
          width: "50px",
          height: "24px",
          background: isTableMode ? "#ccc" : "#4CAF50",
          display: "flex",
          alignItems: "center",
          padding: "2px",
          justifyContent: isTableMode ? "flex-start" : "flex-end",
          transition: "all 0.3s ease",
        }}
        onClick={onToggle}
      >
        <div
          className="slider-circle"
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ModeToggle;
