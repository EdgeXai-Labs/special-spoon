export default function Comparison() {
  const rows = [
    { traditional: '❌ More workers required', automated: '✅ Less manpower needed' },
    { traditional: '❌ High oil usage', automated: '✅ Low oil consumption' },
    { traditional: '❌ Slow production', automated: '✅ High production capacity' },
    { traditional: '❌ Product inconsistency', automated: '✅ Uniform quality every batch' },
    { traditional: '❌ Higher wastage', automated: '✅ Less product wastage' },
    { traditional: '❌ Frequent breakdown', automated: '✅ Reliable operation' },
    { traditional: '❌ Difficult cleaning', automated: '✅ Easy cleaning & hygiene' },
    { traditional: '❌ High operating cost', automated: '✅ Lower operating cost' },
  ]

  return (
    <section className="section bg-card">
      <div className="section-header">
        <h2 className="section-title">Why Automation?</h2>
        <p className="section-subtitle">
          See the measurable difference automation makes to your operation
        </p>
      </div>
      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Traditional Method</th>
              <th>Our Automated Machines</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ color: 'var(--error)' }}>{row.traditional}</td>
                <td style={{ color: 'var(--success)' }}>{row.automated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
