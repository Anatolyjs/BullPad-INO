import styles from "./Sales.module.scss";
import Sale from "./Sale/Sale";
import cn from "classnames";
import { useSelector } from "react-redux";

const Sales = ({ offset, setOffset }) => {
  let pageSize = 4;
  if (document.documentElement.scrollWidth <= 992) {
    pageSize = 3;
  }
  if (document.documentElement.scrollWidth <= 768) {
    pageSize = 2;
  }
  if (document.documentElement.scrollWidth <= 480) {
    pageSize = 1;
  }
  const containerWidth = 1160,
    clientPagesWidth = document.documentElement.scrollWidth;
  const projects = useSelector((state) => state.reducer.activeProjects);
  const sales = projects.map((el) => (
    <Sale
      {...el}
    />
  ));
  let maxOffset =
    clientPagesWidth > containerWidth
      ? -(Math.ceil(sales.length / pageSize) * containerWidth - containerWidth)
      : -(
          Math.ceil(sales.length / pageSize) * clientPagesWidth -
          clientPagesWidth
        ) +
        Math.ceil(sales.length / pageSize) * 80 -
        80;
  const handlerNextSales = () => {
    setOffset((currentOffset) => {
      let newOffset;
      if (clientPagesWidth > containerWidth) {
        newOffset = currentOffset - containerWidth;
      } else {
        newOffset = currentOffset - clientPagesWidth + 80;
      }
      return Math.max(newOffset, maxOffset);
    });
  };
  const handlerPrevSales = () => {
    setOffset((currentOffset) => {
      let newOffset;
      if (clientPagesWidth > containerWidth) {
        newOffset = currentOffset + containerWidth;
      } else {
        newOffset = currentOffset + clientPagesWidth - 80;
      }
      return Math.min(newOffset, 0);
    });
  };
  return (
    <section className={styles.sales}>
      <div className={styles.sales__body}>
        {offset !== 0 && (
          <button
            className={cn(styles.sales__btn, styles.btn__prev)}
            onClick={() => {
              handlerPrevSales();
            }}
          ></button>
        )}
        <div
          className={styles.sales__list}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {sales}
        </div>
        {offset > maxOffset && (
          <button
            className={cn(styles.sales__btn, styles.btn__next)}
            onClick={() => {
              handlerNextSales();
            }}
          ></button>
        )}
      </div>
    </section>
  );
};

export default Sales;
