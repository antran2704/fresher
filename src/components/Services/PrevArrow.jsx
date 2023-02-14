import {
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import "./Services.scss";

function PrevArrow({onClick}) {
  return (
    <BsFillArrowLeftSquareFill onClick={onClick} className="header__arrow-icon header__arrow-left" />
  );
}

export default PrevArrow;
