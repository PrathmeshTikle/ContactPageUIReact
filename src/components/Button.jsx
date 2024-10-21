import styles from "../components/style.module.css"
export const Button = (props) => {
  return (
    <>
      <button className={props.isOutline ? styles.secondarybutton :styles.primarybutton}>{props.icon}{props.text}</button>
    </>
  );
};
