import React, { useState } from 'react';

const App = () => {
  const [offerStatus, setOfferStatus] = useState('Show Offer');

  const handleButtonClick = () => {
    if (offerStatus === 'Show Offer') {
      setOfferStatus('Accept Offer');
      document.body.style.backgroundColor = 'grey';
    } else if (offerStatus === 'Accept Offer') {
      setOfferStatus('Offer Accepted');
      document.body.style.backgroundColor = 'blue';
    }
  };

  const handleCancel = () => {
    setOfferStatus('Show Offer');
    document.body.style.backgroundColor = 'white';
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {offerStatus === 'Offer Accepted' ? (
        <div>
          <h3>{offerStatus}</h3>
          <p style={{ color: '#fff', marginTop: '10px' }}>
            Congratulations! You have accepted the offer.
          </p>
        </div>
      ) : offerStatus === 'Accept Offer' ? (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <p>click the button below to accept our amazing offer!</p>
          <button
            onClick={handleButtonClick}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
          >
            {offerStatus}
          </button>
          <button
            onClick={handleCancel}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'red', color: '#fff' }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={handleButtonClick}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          {offerStatus}
        </button>
      )}
    </div>
  );
};

export default App;
