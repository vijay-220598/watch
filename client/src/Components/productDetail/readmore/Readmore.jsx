import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Client } from "../../../Client";

const Readmore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  //   const [loading, setLoading] = useState(true);

  console.log(id, details);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Client.get(`/productUpload/readMore/${id}`);
        if (response.status === 200) {
          setDetails(response.data.imageReadmore);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="mt-3">
          {details !== null ? (
            <div className="mt-3">
              <img
                src={details.image.url}
                alt="watch-image"
                className="rounded shadow"
                style={{ maxHeight: "450px", objectFit: "cover" }}
              />

              <h4 className="fw-semibold">{details.pname}</h4>
              <h5>₹{details.prate}</h5>
              <div className="des-para">
                AQUATIMER CHRONOGRAPH - The distinctly puristic design of the
                dial and the more reserved choice of colours and shapes
                reference the look of the first Aquatimer released in 1967 and
                gives it a more modern reinterpretation. The chronograph
                function handles single stop times and aggregate timing up to 12
                hours and is a reliable companion even on long dives. Even with
                three subdials and a date and day display, the black dial is
                remarkably uncluttered. The external/internal rotating bezel
                with a SafeDive system designed to prevent inadvertent changes
                of the dive time boosts the practical use of the diver’s watch,
                as does the increase in water-resistance to 30 bar. The
                protective cover for the sliding clutch system at “9 o clock”
                blends seamlessly into the overall look of the watch. Ticking
                away inside the 44-millimetre stainless-steel case is the robust
                79320-calibre chronograph movement with a 44-hour power reserve.
                The watch is supplied with a black rubber strap.
              </div>
            </div>
          ) : (
            <p>No image Available</p>
          )}
        </div>

        <div className="mt-3">
          <button
            className="btn btn-primary"
            style={{ borderRadius: "24px" }}
            onClick={() => navigate(-1)}
          >
            Back to Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Readmore;
