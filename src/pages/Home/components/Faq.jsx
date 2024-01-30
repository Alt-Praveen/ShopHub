import Accordian from "../../../components/Accordian"

function Faq() {
  const faqs = [
    {
      "id": 1,
      "question": "How do I place an order on your website?",
      "answer": "To place an order on our website, simply browse through our product categories and click on the items you wish to purchase. Once you've selected your desired products, add them to your shopping cart. "
    },
    {
      "id": 2,
      "question": "What payment methods do you accept?",
      "answer": "Currently, we support credit card payments, including Visa, MasterCard, and American Express."
    },
    {
      "id": 3,
      "question": "Is it safe to make a purchase on your website?",
      "answer": "Yes, it is absolutely safe to make a purchase on our website. We prioritize the security of your personal and financial information."
    },
    {
      "id": 4,
      "question": "How can I track my order?",
      "answer": "Tracking your order is easy! Once your order has been processed and shipped, you will receive a shipping confirmation email containing a tracking number and a link to our tracking page."
    }
  ]

  return (
    <section className="p-5 m-2">
      {faqs.map((faq) => (
        <Accordian key={faq.id} faq={faq} />
      ))}
    </section>
  )
}

export default Faq