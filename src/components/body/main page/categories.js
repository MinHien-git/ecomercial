import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import CategoriesCard from "../../categories-card";

const Categories = () => {
  return (
    <section className="grid re">
      <SecondaryText text="The Catogories" center={true} />
      <Title title="Browse by The Catogory" center={true} />
      <div className="categories-card flex">
        <CategoriesCard />
        <CategoriesCard />
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
