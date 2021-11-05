import React, { useContext } from "react";
import CategoryContext from "../context/categoryContext";

function CategoryList(props) {
  const categories = useContext(CategoryContext);

  return (
    <div>
      {categories ? (
        <div className="card">
          <ul className="list-group list-group-flush">
            {categories.map((c) => (
              <li
                onClick={() => props.handleClcik(c)}
                key={c.category_id}
                className="list-group-item clickable"
              >
                {c.category_name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default CategoryList;

// <li className="list-group-item">Technology</li>
// <li className="list-group-item">Local</li>
// <li className="list-group-item">Diwali</li>
