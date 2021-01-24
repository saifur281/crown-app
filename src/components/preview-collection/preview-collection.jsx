import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./preview-collection.css";

const PreviewCollection = ({ title, items }) => {
  console.log(title);
  return (
    <div className="preview-collection">
      <h1 className="title-category">{title}</h1>

      <div className="items-container">
        {items

          .filter((item, index) => index < 4)

          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default PreviewCollection;
