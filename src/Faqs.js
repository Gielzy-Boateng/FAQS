import { useState } from "react";
const Faqs = ({ Question, Answer, num }) => {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen((open) => !open);
  }

  return (
    // <div className="faqs">
    <div className={`faqs ${open ? "display" : ""}`} onClick={handleToggle}>
      <p className={`number ${open ? "new" : ""}`}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <h2 className={`question ${open ? "new" : ""}`}>{Question}</h2>
      <p className="icon">{open ? "-" : "+"}</p>
      {open && <div className="answer">{Answer}</div>}
    </div>
    // </div>
  );
};

export default Faqs;
