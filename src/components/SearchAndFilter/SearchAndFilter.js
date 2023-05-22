import React, { useState } from "react";

const myStyle = {
  width: "100%",
  position: "relative",
};

const inputStyle = {
  background: "rgba(255, 255, 255, 0.07)",
  border: "2px solid rgba(20, 22, 27, 0.12)",
  boxSizing: "border-box",
  borderRadius: "70px",
  fontSize: "30px",
  color: "#fff",
  padding: "11px 22px",
  height: "100px",
};
const buttonStyle = {
  position: "absolute",
  right: "26px",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "0",
  fontSize: "30px",
  background: "transparent",
  border: "0",
};
const Dropdown = ({ id, btnName, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  return (
    <div id={id} className={"dropdown"}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="btn-selector nolink"
      >
        {btnName}
      </a>
      {isOpen && (
        <ul className={`${isOpen ? "show" : ""}`}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function SearchAndFilter({ onFilter }) {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("Status");
  const [collection, setCollection] = useState("Collection");
  const [floorPrice, setFloorPrice] = useState("Floor Price");

  const handleFilter = () => {
    onFilter(searchTerm, category, status, collection, floorPrice);
  };
  return (
    <section className="mt-5 pt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-search" style={myStyle}>
              <input
                type="text"
                placeholder="Search items, collections, and accounts"
                className="searchInput"
                style={inputStyle}
                onChange={(e) => setSearchItem(e.target.value)}
                value={searchItem}
              />
              <button className="" style={buttonStyle}>
                <i className="far fa-search"></i>
              </button>
            </form>
          </div>
          <div className="col-md-12 mt-5">
            <div className="wg-drop-category seclect-box">
              <Dropdown
                id="all-items"
                btnName={category}
                options={[
                  "All Categories",
                  "Art",
                  "Gaming",
                  "PFPs",
                  "Photography",
                ]}
                onChange={setCategory}
              />
              <Dropdown
                id="new-items"
                btnName={status}
                options={["Status", "Listed", "On auction", "Has offers"]}
                onChange={setStatus}
              />
              <Dropdown
                id="buy"
                btnName={collection}
                options={[
                  "Collection",
                  "Collection 1",
                  "Collection 2",
                  "Collection 3",
                ]}
                onChange={setCollection}
              />
              <Dropdown
                id="sort-by"
                btnName={floorPrice}
                options={[
                  "Floor Price",
                  "-1.0 ETH",
                  "1+ ETH",
                  "5+ ETH",
                  "10+ ETH",
                ]}
                onChange={setFloorPrice}
              />
              <button
                onClick={handleFilter}
                className="sc-button style letter style-2"
              >
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* More <ProductItem /> components here */}
        </div>
      </div>
    </section>
  );
}
