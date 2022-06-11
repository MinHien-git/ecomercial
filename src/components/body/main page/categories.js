import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import CategoriesCard from "../../categories-card";
import sale from "../../../asset/icons8-sale-50.png";
import graph from "../../../asset/icons8-graph-64.png";
import news from "../../../asset/icons8-new-50.png";
const Categories = () => {
  return (
    <section className="grid re">
      <SecondaryText text="The Catogories" center={true} />
      <Title title="Browse by The Catogory" center={true} />
      <div className="categories-card flex">
        <CategoriesCard title="On Sale" link={sale} />
        <CategoriesCard title="Trending" link={graph} />
        {/* <CategoriesCard title="Newest" link={news} /> */}
      </div>
      <div className="flex center button-align">
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#60;
        </button>
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#62;
        </button>
      </div>
    </section>
  );
};

export default Categories;
