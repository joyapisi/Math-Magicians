import { useState, useEffect } from 'react';

function MathQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [parking, setParking] = useState(false);
  const [errormsg, setErrormsg] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': '7OooKUtJ9yOJhvJKHhlkgg==iaN1WkS3Z4Flcimz' },
      contentType: 'application/json',
    };
    const fetchApi = async () => {
      setParking(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', options);
        const data = await response.json();
        const message = data[0].quote;
        setQuotes(message);
      } catch (error) {
        setErrormsg(true);
      }
      setParking(false);
    };
    fetchApi();
  }, [setQuotes, setParking]);

  if (parking) {
    return <div id="quote-loading">Quote is still loading ...</div>;
  }

  if (errormsg) return <div id="error">Error loading your quote! Refresh to try again.</div>;
  return (
    <div id="quotes"><h3>{quotes}</h3></div>
  );
}

export default MathQuotes;
