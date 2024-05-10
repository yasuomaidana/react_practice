import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LinearPlot() {
  const [plot, setPlot] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/plot2/', { responseType: 'arraybuffer' })
    .then(response => {
      const blob = new Blob([response.data], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setPlot(url);
    })
    .catch(error => {
      setError(error.message);
    });
}, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!plot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
            <img src={plot} alt="Plot"/>
    </div>
  );
}

export default LinearPlot