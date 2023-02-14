import {
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import "./Services.scss";

function PrevArrow({className, onClick}) {
  return (
    <BsFillArrowLeftSquareFill onClick={onClick} className={`${className} header__arrow-icon header__arrow-left`} />
  );
}

export default PrevArrow;
