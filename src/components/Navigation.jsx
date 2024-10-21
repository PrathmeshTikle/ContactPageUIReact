import styles from  "../components/style.module.css"
export const Navigation = () =>{
    return (
        <>
        <nav className={`${styles.navcontainer} container`}>
                <div className="logo">
                <a href="#">
                    <img src="images/logo.png" alt="logo" />
                </a>
                </div>
                <ul>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
        </nav>
        </>
    );
}