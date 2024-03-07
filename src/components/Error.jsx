import "./Error.css";

export default function Error({ message }) {
  let header = "Something went wrong";
  let fullMessage = `${message}. Please check the internet connection and try again.`;

  return (
    <div className="Error">
      <h3 className="Error__heading">{header}</h3>
      <p className="Error__paragraph">{fullMessage}</p>

      <form method="dialog" className="Error__form">
        <button className="Error__btn">Close</button>
      </form>
    </div>
  );
}
