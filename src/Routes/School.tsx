import React, { useEffect, useState } from 'react';
import '../Styles/School.css';
import { Review } from './Review';
import { BiSearchAlt } from "react-icons/bi";
import { color } from 'framer-motion';
export const School = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true); 
    }, 2000);

    return () => {
      clearTimeout(timer); 
    };
  }, []);

  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <div>
      {show ? (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Review onClick={handleCloseModal} show={show} setshow={setShow}/>
          </div>
        </div>
      ) : (
        <div>
          <div className="school_filter">
            <input
              placeholder="Search"
            />
            <button className='img_btn'><img src="Search.svg" alt="" className='img'/></button>
          </div>
        </div>
      )}
    </div>
  );
};
