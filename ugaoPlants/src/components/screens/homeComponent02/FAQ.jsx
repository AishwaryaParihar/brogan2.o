import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../../../common/Index";

const FAQ = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const params = useParams();

  const fetchProductDetails = async () => {
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: params.id,
      }),
    });
    const dataResponse = await response.json();

    setData(dataResponse.data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params]);

  const faqItems = [
    {
      question: `${data.productName} animal friendly?`,
      answer: `${data.productName} is not animal friendly.`,
    },
    {
      question: `How often should I water ${data.productName}?`,
      answer: `Water your ${data.productName} plant when the topsoil is dry to touch.`,
    },
    {
      question: `Does ${data.productName} purify air?`,
      answer: `Yes, ${data.productName} is a NASA approved air purifier.`,
    },
    {
      question: `Does ${data.productName} (spathiphyllum sensation) release oxygen at night?`,
      answer: `${data.productName} does not produce oxygen at night but it fixes carbon dioxide at night thereby reducing indoor pollution level.`,
    },
  ];

  return (
    <div className="">
      <hr />
      <div className="accordion px-0 px-md-5 mb-5" id="accordionPanelsStayOpenExample">
        <h2>FAQ's</h2>
        {faqItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button fw-bold ${
                  index !== 0 ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse${index}`}
                aria-expanded={index === 0}
                aria-controls={`panelsStayOpen-collapse${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
