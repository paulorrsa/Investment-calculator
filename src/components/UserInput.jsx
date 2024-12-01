
export default function UserInput({onChange, userIput}) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investiment</label>
          <input
            type="number"
            required
            value={userIput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Anual Investiment</label>
          <input
            type="number"
            required
            value={userIput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userIput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
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
