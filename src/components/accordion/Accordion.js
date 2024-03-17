import React, { useState } from "react";
import AccordionItem from "../accordion-item/AccordionItem";

function Accordion() {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      title: "Can I cancel my subscription at anytime?",
      info: "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
      toggle: false,
    },
    {
      id: 2,
      title: "Can I change my plan later on?",
      info: "Absolutely! You can upgrade or downgrade your plan anytime. The money paid for the previous subscription will be recalculated to the new plan.",
      toggle: false,
    },
    {
      id: 3,
      title: "Will you renew my subscription automatically?",
      info: "Yes, your subscription will be automatically renewed according to your pay period.",
      toggle: false,
    },
    {
      id: 4,
      title: "Do you offer any discounts?",
      info: "Yes! We offer 17% discount for payment per year. There may be other temporary discounts, check for this inside the service.",
      toggle: false,
    },
    {
      id: 5,
      title: "Can I request a refund?",
      info: "Sure, you will be welcome to request your refund within 14 days of subscribing to any paid plan.",
      toggle: false,
    },
  ]);

  const showAccordionBody = (id) => {
    const updatedData = accordionData.map((item) => {
      if (item.id == id) {
        return { ...item, toggle: true };
      } else {
        return { ...item, toggle: false };
      }
    });
    setAccordionData(updatedData);
  };

  const hideAccordionBody = (id) => {
    const updatedData = accordionData.map((item) => {
      if (item.id == id) {
        return { ...item, toggle: false };
      }
      return item;
    });

    setAccordionData(updatedData);
  };

  return (
    <div>
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          showAccordionBody={showAccordionBody}
          hideAccordionBody={hideAccordionBody}
        />
      ))}
    </div>
  );
}

export default Accordion;
