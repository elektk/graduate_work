import styles from '../css/main-page.module.css';
import products from '../data/data'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function addProduct(products) {
        dispatch({
            type: 'ADD_PRODUCT',
            id: products.id,
            data: products,
            price: products.price
        });
    }
    function getProduct(item) {

        return navigate('/item', { state: { item } });

    }
    function logout() {
        sessionStorage.clear();
    }
    return (
        <>
            <div className={styles.main}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        наша продукция
                    </h1>
                    <span className={styles.total}>
                        {countProducts}
                        &nbsp;товара на сумму&nbsp;
                        {totalPrice}
                    </span>
                    <Link to="/basket">
                        <button className={styles.busket}></button>
                    </Link>
                    <Link to="/" >
                        <button className={styles.login} onClick={logout}>Выйти</button>
                    </Link>
                </header>
                <div className={styles.cards}>
                    {products.map((item) => (
                        <div key={item.id} className={styles.card} >
                            <div className={styles.image} onClick={() => getProduct(item)}>
                                <img className={styles.img} src={`./images/${item.img}`} alt={item.name} />
                            </div>
                            <p className={styles.prodName}>
                                {item.name}
                            </p>
                            <p className={styles.description}>
                                {item.description}
                            </p>
                            <div className={styles.meaning}>
                                <p className={styles.price}>{item.price}</p>
                                <p className={styles.weight}>{item.weight}</p>
                                <button onClick={() => addProduct(item)} className={styles.add}></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}