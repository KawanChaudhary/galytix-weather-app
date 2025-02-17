import React, { useEffect, useState } from "react";

interface MoonPhaseProps {
  timestamp: number;
}

const MoonPhase: React.FC<MoonPhaseProps> = ({ timestamp }) => {
  const [moonPhase, setMoonPhase] = useState<string>("");

  useEffect(() => {
    if (!timestamp) return;

    const calculateMoonPhase = (date: Date) => {
      const moonCycle = 29.53058867;
      const newMoon = new Date(2001, 0, 23);
      const diffInDays =
        (date.getTime() - newMoon.getTime()) / (1000 * 60 * 60 * 24);
      const phase = (diffInDays % moonCycle) / moonCycle;

      if (phase < 0.02) return "New Moon";
      if (phase < 0.25) return "First Quarter";
      if (phase < 0.48) return "Full Moon";
      if (phase < 0.75) return "Last Quarter";
      return "Waning Crescent";
    };

    const date = new Date(timestamp * 1000); // Convert Unix timestamp to Date
    const phase = calculateMoonPhase(date);
    setMoonPhase(phase);
  }, [timestamp]);

  return (
    <div className="card p-3">
      <h3 className="card-title">Moon Phase</h3>
      <p>{moonPhase}</p>
    </div>
  );
};

export default MoonPhase;
