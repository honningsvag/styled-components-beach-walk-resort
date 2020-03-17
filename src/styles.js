import defaultImg from './images/defaultBcg.jpg';

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGray: "#ececec",
  lightGray: "#f7f7f7"
}

export const setFonts = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display:flex; align-items:${y}; justify-content:${x}`;
};

export const setBackground = ({ img=defaultImg, color='rgba(0,0,0,0)'} = {}) => {
  return `background: linear-gradient(${color},${color}),
  url(${img}) center/cover fixed no-repeat;`;
};