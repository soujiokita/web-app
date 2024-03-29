import Disgrowth from "disgrowth";
import c from "../src/config";

export function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export async function getInfo() {
  const bot = new Disgrowth(c.bot_id);
  const info = await bot.myStats().catch(err => {
    alert("Error: " + err);
  });
  return info;

}