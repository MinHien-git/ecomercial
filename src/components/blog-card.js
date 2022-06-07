import clsx from "clsx";

const BlogCard = (props) => {
  return (
    <div className={clsx("blog-review grid", props.width && "col2")}>
      <img src={props.link} alt={props.link} />
      <h3 className="fs-500">{props.title}</h3>
      <a className="tag yellow-tag" href="#product/id">
        <h4 className="fs-300 bold">TOP TIPS</h4>
      </a>
    </div>
  );
};

export default BlogCard;
