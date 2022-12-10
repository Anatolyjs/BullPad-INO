import styles from "./Sale.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const Sale = (props) => {
  const navigate = useNavigate();
  const onSaleClick = () => {
    navigate(`/ino/${props.id}`);
  };
  return (
    <div className={styles.sale} onClick={onSaleClick}>
      <div className={styles.sale__body}>
        <div className={styles.sale__logo}>
          <img src={props.logo} />
        </div>
        <h3 className={styles.sale__name}>
          {props.name} - {props.type}
        </h3>
        <div className={cn(styles.sale__supply, styles.sale__item)}>
          <div>Total</div>
          <div>{props.supply}</div>
        </div>
        <div className={cn(styles.sale__price, styles.sale__item)}>
          <div>Price</div>
          <div>{props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
