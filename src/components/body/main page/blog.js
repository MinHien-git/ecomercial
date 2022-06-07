import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import BlogCard from "../../blog-card";

const Blog = () => {
  return (
    <section className="grid re">
      <SecondaryText text="Skincare Products" center={true} />
      <Title title="Check Out our Blog" center={true} />
      <div className="blog-container">
        <BlogCard
          title="Morning Skincare Routine: 10 Top Tips for you"
          width={true}
        />
      </div>
      <div className="flex center button-align">
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#60;
        </button>
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#62;
        </button>
      </div>
      <button className="btn primary-bg fs-300 priamry-btn center">
        <strong>View All</strong>
      </button>
    </section>
  );
};

export default Blog;
