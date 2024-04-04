import { useState } from "react";

export default function Feedback({
  value: { good, neutral, bad },
  totalFeedback,
  positivePercent,
}) {
  return (
    <div>
      <p>Good:{good} </p>
      <p>Neutral:{neutral} </p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercent}%</p>
    </div>
  );
}
