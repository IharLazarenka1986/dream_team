import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import cn from "./discount.module.css";
import discountImg from "../../assets/discount.png";

const Modal = ({ message, success, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className={cn.modalOverlay} onClick={onClose}>
      <div className={cn.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={cn.closeBtn} onClick={onClose} aria-label="Close">×</button>
        <p className={cn.modalText} style={{ color: success ? "green" : "red" }}>
          {message}
        </p>
      </div>
    </div>,
    document.body
  );
};

const Discount = ({ setDiscount }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const name = (form.name || "").trim();
    const phone = (form.phone || "").trim();
    const email = (form.email || "").trim();

    if (name && phone && email) {
      if (typeof setDiscount === "function") setDiscount(5);
      setModalMessage(" 5% discount on your first purchase is active!");
      setModalSuccess(true);
      setForm({ name: "", phone: "", email: "" }); 
    } else {
      setModalMessage("Please fill in all fields");
      setModalSuccess(false);
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={cn.blockDiscount}>
      <h2 className={cn.discountTitle}>5% off on the first order</h2>

      <div className={cn.blockInputBtn}>
        <input
          className={cn.name}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={cn.phoneNumber}
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className={cn.email}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="button" className={cn.btnInput} onClick={handleSubmit}>
          Get a discount
        </button>
      </div>

      <img className={cn.discountImg} src={discountImg} alt="Discount" />

      {mounted && showModal && (
        <Modal
          message={modalMessage}
          success={modalSuccess}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Discount;
