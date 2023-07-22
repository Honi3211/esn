import {
  bg,
  bg3,
  bg4,
  bg5,
  bg6,
  bg8,
  nationalGold,
  ddish,
  mnbc,
  skymedia,
  telecoMongolia,
  univision,
  voo,
  premierSports,
  youtube,
  twitch,
  esnFullDark,
  bronze,
  silver,
  gold,
  international,
  jigjug,
  esnPink,
} from "../public/assets";

export const channels = [
  { title: "#605", src: univision.default },
  { title: "#605", src: ddish.default },
  { title: "#617", src: skymedia.default },
  { title: "#406", src: mnbc.default },
  { title: "#56", src: telecoMongolia.default },
  { title: "#34", src: voo.default },
];

export const socials = [
  { src: youtube.default, className: "h-[100px] px-[12px]" },
  { src: twitch.default, className: "h-[100px] px-[12px]" },
];

export const faceitDiv = [
  { src: bronze.default, title: "Bronze Division", color: "text-[#B27540]" },
  { src: silver.default, title: "Silver Division", color: "text-[#D7D7D7]" },
  { src: gold.default, title: "Gold Division", color: "text-[#E9AF35]" },
  {
    src: international.default,
    title: "International Pro Division",
    color: "text-[#191D2D]",
  },
];

export const descPictures = [
  { src: bg6.default },
  { src: bg5.default },
  { src: bg4.default },
  { src: bg8.default },
];
