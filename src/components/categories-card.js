const CategoriesCard = (props) => {
  return (
    <div className="card image-cover-clrs flex-column">
      <img src={props.link} alt={props.link} />
      <h3 className="font-clrs fs-300">On Sale</h3>
    </div>
  );
};

export default CategoriesCard;
