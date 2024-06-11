import styles from '../css/busket.module.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function Busket() {
    const totalPrice = useSelector(store => store.totalPrice);
    const basketProducts = useSelector(store => store.basketProducts);
    const dispatch = useDispatch();

    function RemoveProduct(id, price) {
        dispatch({
            type: 'REMOVE_PRODUCT',
            id: id,
            price: price
        });
    }
    function logout() {
        sessionStorage.clear();
    }

    return (
        <>
            <div className={styles.main}>
                <header className={styles.header}>
                    <Link to="/main" className={styles.link_back} />
                    <h1 className={styles.title}>
                        КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ
                    </h1>
                    <Link to="/" >
                    <button className={styles.logout} onClick={logout}>Выйти</button>
                    </Link>
                </header>
                <main className={styles.list}>
                {basketProducts.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.image}>
                        <img className={styles.image} src={`./images/${item.img}`} alt={item.name} />
                        </div>
                        <p className={styles.prodName}>
                        {item.name}
                        </p>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.delete} onClick={() => RemoveProduct(item.id, item.price)}>Delete</button>
                    </div>
                    ))}
                </main>
                <footer className={styles.footer}>
                    <p className={styles.totalTitle}>ЗАКАЗ НА СУММУ:</p>
                    <p className={styles.totalValue}>{totalPrice} ₽</p>
                    <button className={styles.checkout}>Оформить заказ</button>
                </footer>
            </div>
        </>
    )
}
