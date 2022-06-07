import SecondaryText from "../../secondary-text";
import Title from "../../section-title";

const Category = () => {
  return (
    <section className="grid center">
      <SecondaryText text="Eye Care Products" />
      <Title title="Explore the Eye Care Products" />
      <div className="filter flex">
        <form action="/action_page.php">
          <select id="cars" name="cars">
            <option value="volvo">Filter by</option>
            <option value="volvo">Eye care</option>
            <option value="saab">Treatments</option>
            <option value="fiat">Sun care</option>
          </select>
        </form>
        <form action="/action_page.php">
          <select id="cars" name="cars">
            <option value="volvo">Sort by</option>
            <option value="volvo">A to Z</option>
            <option value="saab">Z to A</option>
            <option value="fiat">High to Low</option>
            <option value="audi">Low to High</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Category;
