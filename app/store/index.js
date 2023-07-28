import { proxy } from "valtio";
const state = proxy({
    intro: true,
    color: "#cd2434",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./man.png",
    fullDecal: "./man.png",
});
export default state;
