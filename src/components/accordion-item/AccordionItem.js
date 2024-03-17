import Styles from "./accordion-item.module.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

function AccordionItem({ item, showAccordionBody, hideAccordionBody }) {
  return (
    <div className={Styles.accordion}>
      <div className={Styles.accordionHeader}>
        <h2>{item.title}</h2>
        {item.toggle ? (
          <FaMinusSquare onClick={() => hideAccordionBody(item.id)} />
        ) : (
          <FaPlusSquare onClick={() => showAccordionBody(item.id)} />
        )}
      </div>

      <div
        className={item.toggle ? Styles.accordionActive : Styles.accordionBody}
      >
        <p>{item.info}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
