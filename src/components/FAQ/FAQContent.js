import React, { useEffect, useState } from "react";
import Axios from "axios";
import axiosInstance from "../../helpers/axios";
import FAQSection from "./FAQSection";
import { set } from "date-fns";
import { setIn } from "formik";

const FAQContent = () => {
  const [faq, setFaq] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [active, setActive] = useState();
  const [data, setData] = useState([]);

  const handleActive = (slug) => {

    const activefaq = faq.filter((faq) => faq.slug == slug)[0];
    console.log(activefaq.slug);
    setQuestions(activefaq.questions);
    setActive(slug);
  };

  // useEffect(() => {
  //     const handleActive = slug => {
  //       const types = {
  //         newSlug: slug
  //       };
  //       const sortProperty = types[slug];
  //       const sorted = [...faq].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //       setData(sorted);
  //     };

  //     handleActive(active);
  //     console.log(data)
  //   }, [active]);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/faqs`, {
          cancelToken: source.token,
        });
        setFaq((await response).data.categories);
        setQuestions((await response).data.categories[0].questions);
        setActive((await response).data.categories[0].slug);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);
  console.log(active);

  return (
    <>
      <div className="faq-container">
        <div className="header">
          <div className="title">faq</div>
          <div className="text">These are frequently asked questions.</div>
          <div className="text">
            If you have any further question, please contact us.
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ul className="faq-links">
              <>
                {faq &&
                  faq.map((data, index) => (
                    <li key={`${data.slug}_${data.id}`}>
                      <a
                        className={
                          "faq-btn" +
                          " " +
                          (active && active == data.slug ? "active" : "")
                        }
                        onClick={() => handleActive(data.slug)}
                      >
                        {data.title}
                      </a>{" "}
                    </li>
                  ))}
              </>
            </ul>
          </div>
          <FAQSection questions={questions} />
        </div>
      </div>
    </>
  );
};

export default FAQContent;
