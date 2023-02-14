import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./Services.scss";

function NextArrow({className, style,onClick}) {
  return (
    <BsFillArrowRightSquareFill onClick={onClick} style={{ ...style}} className={`${className} header__arrow-icon header__arrow-right`} />
  );
}

export default NextArrow;
