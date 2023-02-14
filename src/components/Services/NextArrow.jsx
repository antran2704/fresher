import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./Services.scss";

function NextArrow({className, onClick}) {
  return (
    <BsFillArrowRightSquareFill onClick={onClick} className={`${className} header__arrow-icon header__arrow-right`} />
  );
}

export default NextArrow;
