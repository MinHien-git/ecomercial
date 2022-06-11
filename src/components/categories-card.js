const CategoriesCard = (props) => {
  return (
    <div
      className="card image-cover-clrs flex-column"
      style={{ "--gap": "0.5rem" }}
    >
      <img
        className="font-clrs-bg"
        src={props.link}
        alt={props.link}
        style={{ width: "3rem", borderRadius: "50%" }}
      />
      <h3 className="font-clrs fs-300">{props.title}</h3>
    </div>
  );
};

export default CategoriesCard;
