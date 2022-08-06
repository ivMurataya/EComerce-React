import CategoryItem from "../category-item/category-item.component";
import "./directory.syles.scss";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((element) => (
        <CategoryItem key={element.id} category={element} />
      ))}
    </div>
  );
}

export default Directory;
