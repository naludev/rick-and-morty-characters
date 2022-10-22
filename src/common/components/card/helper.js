import "./styles.scss";

export const getBadge = (status) => {
  switch (status) {
    case "Alive":
      return (
        <div className="badgeAlive">
          <p>{status}</p>
        </div>
      );
    case "Dead":
      return (
        <div className="badgeDead">
          <p>{status}</p>
        </div>
      );
    default:
      return (
        <div className="badge">
          <p>{status}</p>
        </div>
      );
  }
};
