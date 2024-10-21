import styles from "../components/style.module.css"
export const InputForm = (props) =>{
    const changeHeight = document.querySelectorAll("enquiry");
    console.log(changeHeight)
    return(
            <div className={styles.formcontainer}>
                <label htmlFor="name">{props.label}</label>
                <input type={props.type} name={props.name} />
            </div>
    )
}