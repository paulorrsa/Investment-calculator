
export default function UserInput({onChange, userIput}) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investiment</label>
          <input
            type="number"
            required
            value={userIput.initialInvestiment}
            onChange={(event) =>
              onChange("initialInvestiment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Anual Investiment</label>
          <input
            type="number"
            required
            value={userIput.annualInvestiment}
            onChange={(event) =>
              onChange("annualInvestiment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userIput.expectecReturn}
            onChange={(event) =>
              onChange("expectecReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userIput.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
