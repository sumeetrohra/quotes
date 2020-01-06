export const getRandomColor = () => {
  const alphabet = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += alphabet[Math.floor(Math.random() * 12)];
  }
  return color;
};

export const getQuote = async () => {
  let result;
  try {
    result = await fetch('https://api.quotable.io/random');
    result = await result.json();
  } catch (err) {
    console.log(err);
  }
  return result;
};
