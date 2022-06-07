const CustomerReview = (props) => {
  return (
    <div className="product-review text-center grid">
      <div className="circle border center image-cover-clrs flex">
        <img src={props.link} alt={props.link} className="border-image" />
      </div>
      <h3 className="fs-500">{props.title}</h3>
      <p className="fs-400 low-opacity">{props.reviews}</p>
    </div>
  );
};

export default CustomerReview;
