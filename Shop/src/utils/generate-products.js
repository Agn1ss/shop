import { COLORS, SKINS_IMAGES } from "./data";
export default function generateProducts(n = 20) {
  const products = [];
  for (let i = 0; i < n; i++) products.push(generateProduct());

  return products;
}

const generateProduct = () => {
  const randomImage = SKINS_IMAGES[getRandomInt(0, SKINS_IMAGES.length - 1)];
  const colorKeys = Object.keys(COLORS);
  return {
    id: Date.now() + getRandomString(),
    name: getRandomString(),
    description: getRandomDescription(2, 6),
    color: colorKeys[getRandomInt(0, colorKeys.length - 1)],
    category: randomImage.type,
    price: getRandomInt(10, 9999),
    rating: getRandomInt(0, 50) / 10,
    imageUrl: randomImage.url
  };
};

function getRandomString() {
  return Math.random().toString(36).substring(2);
}

function getRandomDescription(min, max) {
  let description = "";
  for (let i = 0; i < getRandomInt(min, max); i++)
    description += " " + getRandomString().substring(0, getRandomInt(3, 7));

  return description;
}

const getRandomInt = (min, max) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.floor(min) + 1)) +
    Math.floor(min)
  );
};
