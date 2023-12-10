import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import links from "../utils/navlinks.json";
const Header = () => {
  return (
    <NavHeader>
      <Ul>
        {links.map((link) => {
          return (
            <Li key={link.id}>
              <NavLink to={link.route}>{link.linkName}</NavLink>
            </Li>
          );
        })}
      </Ul>
    </NavHeader>
  );
};

const NavHeader = styled("header")(({ theme }) => ({
  padding: ".5rem 1rem",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  height: "3.7rem",
}));
const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".5rem",
  position: "fixed",
  width: "100%",
}));
const Li = styled("li")(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#000",
  listStyle: "none",
}));
export default Header;
