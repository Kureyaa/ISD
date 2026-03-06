import React, { useState } from 'react';

export default function PersonaCard({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="persona-card">
      <h2>{data.name}</h2>
      <p><strong>Role:</strong> {data.role}</p>
      <button  type="button"  onClick={() => setOpen(o => !o)}>  {open ? "Hide details" : "Show details"}</button>

      <h3>Goals</h3>
      <ul>
        {data.goals.map((goal, i) => (
          <li key={i}>{goal}</li>
        ))}
      </ul>

      <h3>Frustrations</h3>
      <ul>
        {data.frustrations.map((frustration, i) => (
          <li key={i}>{frustration}</li>
        ))}
      </ul>
    </div>
  );
}