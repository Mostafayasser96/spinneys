import React from "react";
import "../lifestyle-reads/lifestyle-reads-styles.css";
import "../lifestyle-reads/lfestyle-data.json";
import Products from "../lifestyle-reads/lfestyle-data.json";


const LifestyleReads = () => {
  return (
    <div className="lifestyle-reads" id="lifestyle-reads">
      <div className="d-flex justify-content-between" id="lifestyle-heading">
        <div className="lifestyle-titles" id="lifestyle-titles">
          <p className="text-left" id="lifestyle-title">Lifestyle Reads</p>
          <p className="text-#8C8C8C" id="lifestyle-subtitle">Essential editorials to eat well and live well.</p>
        </div>
        <button className="text-center bg-white d-flex justify-content-between" id="shop-now" type="button">
          <a id="view-more" className="w-100 d-flex justify-content-evenly text-decoration-none bg-#FFFFFF" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            Shop Now
            <img id="shop-now-arrow" className="shop-now-arrow" alt="view more" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" />
          </a>
        </button>
      </div>
      <ul className="articles" id="articles">
        {Products.reads.map((article, i) => (
          <li className="article" id="article">
            <a className="article-link" id="article-link" href={article["read-link"]}>
              <img className="article-img" id="article-img" src={article?.src} srcSet={article?.srcset} alt={article?.name} />
            </a>
            <div className="article-details" id="article-details">
             <h3 className="article-address" id="article-address"> {article?.name} </h3>
             <p className="article-caption" id="article-caption"> {article?.caption} </p>
             <div className="article-category" id="article-category">
              <span className="cat" id="cat"> {article?.category} </span>
              <span className="date" id="date"> {article?.date} </span>
             </div>
            </div>
          </li>
        ))}
      </ul>


    </div>
  )
}
export default LifestyleReads;