import { Link } from "react-router-dom";

export default function Button({ to, children }) {
  if (to) {
    return (
      <Link to={to} className="btn">
        {children}
      </Link>
    );
  }

  return <button className="btn">{children}</button>;
}