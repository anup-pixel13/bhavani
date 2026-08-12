import { useNavigate } from "react-router-dom";
import "../../styles/components/back-button.css";

export default function BackButton({ fallback = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="back-btn"
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        width="16"
        height="16"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
      Back
    </button>
  );
}
