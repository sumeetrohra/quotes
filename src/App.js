import React, { useEffect, useState } from 'react';

import {
  Container,
  Quote,
  QuoteBox,
  QuoteAuthor,
  Button
} from './components';
import { getRandomColor, getQuote } from './utils';

const App = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [color, setColor] = useState(null);

  const populateData = async () => {
    const quoteData = await getQuote();
    const randomColor = getRandomColor();
    setQuote(quoteData.content);
    setAuthor(quoteData.author);
    setColor(randomColor);
  }

  useEffect(() => {
    populateData();
  }, []);

  return (
    <Container color={color}>
      <QuoteBox>
        <Quote text={quote} />
        <QuoteAuthor text={author} />
        <Button
          text='Get Random Quote'
          color={color}
          onClick={populateData}
        />
      </QuoteBox>
    </Container>
  );
}

export default App;
