import styles from "../components/style.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Button } from "../components/Button";
import { InputForm } from "../components/InputForm";
export const EnquiryPage = () => {
  return (
    <>
      <section className={styles.enquirycontainer}>
        <div className={styles.contactform}>
        <div className={styles.topbutton}>
            <Button text="VIA CHAT SUPPORT" icon={<MdMessage/>}/>
            <Button text="VIA CALL" icon={<IoMdCall/>}/>
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail/>}/>
        <form>
           <InputForm type="text" label="Name" name="name"/>
           <InputForm type="email" label="Email" name="email"/>
           <InputForm type="text" label="Ask Us" name="enquiry" />
           <Button text="submit"/>
        </form>
        </div>
        <div>
            <img src="images/contact.svg" alt="" />
        </div>
      </section>
    </>
  );
};
