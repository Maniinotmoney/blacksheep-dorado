import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/FAQ.css';

const faqs = [
    {
        question: "What are your operating hours?",
        answer: "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays."
    },
    {
        question: "Do you offer emergency services?",
        answer: "Yes, we have a veterinarian on call 24/7 for emergencies. Please call our main line immediately if you have a pet emergency."
    },
    {
        question: "How often should my pet have a check-up?",
        answer: "We recommend at least one annual wellness exam for adult pets. Senior pets and those with chronic conditions may need to be seen more frequently, typically every 6 months."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, major credit cards (Visa, MasterCard, Amex), and pet insurance direct billing where applicable. We also offer financing options through CareCredit."
    },
    {
        question: "Do you offer grooming services?",
        answer: "Yes! We offer full-service grooming including baths, haircuts, nail trimming, and ear cleaning. Please call to schedule an appointment."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-icon"
                >
                    +
                </motion.span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="faq-answer-wrapper"
                    >
                        <p className="faq-answer">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2 className="text-h2">Frequently Asked Questions</h2>
                    <p className="text-body">Find answers to common questions about our services and care.</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
