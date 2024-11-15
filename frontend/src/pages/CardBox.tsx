const CardBox = ({ page, data }) => {
  const watchlist = [];
  const review = [];
  const category = [];

  return (
    <>
      {page === "watchlist" && <></>}
      {page === "review" && <></>}
      {page === "category" && <></>}
    </>
  );
};

export default CardBox;
