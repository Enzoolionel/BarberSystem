import { NavLink } from "react-router";
const Button = ({ children, to, className }) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default Button;
