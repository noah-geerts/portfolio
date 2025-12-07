import { P as Platform } from "./types.js";
import { g as getSkills } from "./skills.js";
const title = "Home";
const name = "Noah";
const lastName = "Geerts";
const description = "Full Stack Developer";
const links = [
  { platform: Platform.GitHub, link: "https://github.com/noah-geerts" },
  {
    platform: Platform.Linkedin,
    link: "https://www.linkedin.com/in/noahgeerts"
  },
  {
    platform: Platform.Email,
    link: "noahgeerts@outlook.com"
  }
];
const skills = getSkills("springboot", "aws", "reactjs", "html");
export {
  links as a,
  description as d,
  lastName as l,
  name as n,
  skills as s,
  title as t
};
