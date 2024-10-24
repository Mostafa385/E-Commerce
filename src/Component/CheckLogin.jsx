import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckLogin = ({ id }) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate(); 

  const checkLogin = () => {
    const isLoggedIn = sessionStorage.getItem('Login'); 
    return isLoggedIn; 
  };

  const handleOrderClick = () => {
    if (checkLogin()) {
      
      navigate(`/Cart/${id}`);
    } else {
      setShowToast(true);
    }
  };

  return (
    <div>
      <button onClick={handleOrderClick} className="btn btn-success w-50">Order Now</button>
     
      {showToast && (
        <div className="toast-container position-static">
          <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <strong className="me-auto">MarkeTo</strong>
              <small className="text-body-secondary">just now</small>
              <button type="button" className="btn-close" onClick={() => setShowToast(false)} aria-label="Close"></button>
            </div>
            <div className="toast-body">
              You need to log in to place an order.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckLogin;
