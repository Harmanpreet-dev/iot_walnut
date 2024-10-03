export default function Alert() {
  return (
    <div className="rectangle-4485 p-4">
      <div className="flex">
        <div children="alert-name">Alert 1</div>
        <div className="alert-date">17 Sept 2024, 08:15 PM</div>
      </div>
      <div className="flex justify-between">
        <div children="alert-detail">
          Device battery not fully charged in last 30 days ( 95% not found)
        </div>
        <div>
          <button className="alert-button">Mark As Read</button>
        </div>
      </div>
    </div>
  );
}
