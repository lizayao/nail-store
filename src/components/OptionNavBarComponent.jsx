import { NavLink } from "react-router-dom";

const OptionNavBarComponent = (props) => {
  const { titleOption } = props;

  const isActiveClass = ({isActive}) => {
   return isActive ? 'active nav-link text-primary':'nav-link';
  };

  return (
    <NavLink to={`/category/${titleOption}`} className={isActiveClass}>
      {titleOption}
    </NavLink>
  );
};

export default (OptionNavBarComponent);
