import { useEffect, useState } from "react";

function Slides({ slides }) {
  const length = slides.length;
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage(page === length ? "" : page + 1);
  }

  const handlePrev = () => {
    setPage(page === 0 ? "" : page - 1);
  }

  const handleReset = () => {
    setPage(0)
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={handleReset} disabled={page===0}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={handlePrev} disabled={page===0}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={handleNext} disabled={page===length-1}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        {
          <>
            <h1 data-testid="title">{slides[page].title}</h1>
            <p data-testid="text">{slides[page].text}</p>
          </>
        }
      </div>
    </div>
  );
}

export default Slides;
