import styles from "./SalesList.module.scss";
import cn from "classnames";
import { setActiveSales } from "../../../redux/sales-reduce";
import { useDispatch, useSelector } from "react-redux";

const categories = ["Live INOs", "Ended INOs", "Future INOs"];
const SalesList = ({setOffset}) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.reducer.currentPage);
  const salesList = categories.map((el, index) => (
    <div
      key={index}
      onClick={() => {
        dispatch(setActiveSales(index));
        setOffset(0);
      }}
      className={cn(
        styles.salesList__live,
        styles.salesList__item,
        index === currentPage ? styles.active : null
      )}
    >
      {el}
    </div>
  ));
  return <div className={styles.salesList}>{salesList}</div>;
};

export default SalesList;
