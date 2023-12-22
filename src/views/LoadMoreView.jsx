

const LoadMoreView = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="d-flex justify-content-center py-5">
      <button className="button">Load more</button>
    </div>
  );
};

export default LoadMoreView

