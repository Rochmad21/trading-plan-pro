import React, { useState } from 'react'

export default function TradingPlanTable() {
  const [plans, setPlans] = useState([])
  const [newPlan, setNewPlan] = useState({ pair: '', entry: '', tp: '', sl: '' })

  const addPlan = () => {
    if (!newPlan.pair || !newPlan.entry) return
    setPlans([...plans, newPlan])
    setNewPlan({ pair: '', entry: '', tp: '', sl: '' })
  }

  return (
    <div>
      <h2>Trading Plan</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          placeholder="Pair"
          value={newPlan.pair}
          onChange={e => setNewPlan({ ...newPlan, pair: e.target.value })}
        />
        <input
          placeholder="Entry"
          value={newPlan.entry}
          onChange={e => setNewPlan({ ...newPlan, entry: e.target.value })}
        />
        <input
          placeholder="TP"
          value={newPlan.tp}
          onChange={e => setNewPlan({ ...newPlan, tp: e.target.value })}
        />
        <input
          placeholder="SL"
          value={newPlan.sl}
          onChange={e => setNewPlan({ ...newPlan, sl: e.target.value })}
        />
        <button onClick={addPlan}>Add</button>
      </div>

      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Pair</th>
            <th>Entry</th>
            <th>TP</th>
            <th>SL</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, idx) => (
            <tr key={idx}>
              <td>{plan.pair}</td>
              <td>{plan.entry}</td>
              <td>{plan.tp}</td>
              <td>{plan.sl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
