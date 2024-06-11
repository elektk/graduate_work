import styles from "../../css/item.module.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Item() {
    const dispatch = useDispatch();
    const location = useLocation();
    const item = location.state.item;
    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);


    function logout() {
        sessionStorage.clear();
    }

    function addProduct(products) {
        dispatch({
            type: 'ADD_PRODUCT',
            id: products.id,
            data: products,
            price: products.price
        });
    }

    return (
        <>
            <div className={styles.main}>
                <header className={styles.header}>
                    <Link to="/main" className={styles.link_back} />
                    <span className={styles.total}>
                    {countProducts}
                        &nbsp;товара на сумму&nbsp;
                        {totalPrice}
                    </span>
                    <Link to="/basket">
                        <button className={styles.busket}></button>
                    </Link>
                    <Link to="/" className={styles.case}>
                        <button className={styles.logout} onClick={logout}>Выйти</button>
                    </Link>
                </header>
                <div className={styles.container}>
                    <img className={styles.image} src={`./images/${item.img}`} alt="Устрицы" />
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.name}</h1>
                        <p className={styles.description}>
                            {item.detailedDescr}
                        </p>
                        <div className={styles.meaning}>
                            <p className={styles.price}>{item.price}</p>
                            <p className={styles.weight}>{item.weight}</p>
                            <button onClick={() => addProduct(item)} className={styles.add}>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}