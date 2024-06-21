import React, { useState } from "react";
import "./Contact.css";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAt_ID = "-1002028151929";
const USER_ID = "6386975284";

function Contact() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let text = "";
    text += "Mijoz Habar Yubordi: %0A%0A";
    text += `Mijoz Ismi: ${name} %0A`;
    text += `Mijoz Telefon Raqami: ${tel} %0A`;
    text += `Xizmat Turi: ${type} %0A`;
    text += `Mijoz Habari: ${desc}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    alert("Habaringiz Yuborildi Tez Orada Sizga Aloqaga Chiqamiz");
  }
  return (
    <div className="contact__wrapper container">
      <form onSubmit={handleSubmit} className="contact__box">
        <h1>Biz Bilan Bog'laning</h1>
        <div className="name__input__div input__box">
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Ismingiz</span>
        </div>
        <div className="tel__input__div input__box">
          <input
            required
            type="number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <span>Telefon Raqam</span>
        </div>
        <div className="service__selection__div input__box">
          <select
            className="contact__selection"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option disabled value="">
              Xizmat Turini Tanlang
            </option>
            <option value="briket">Nimadir</option>
            <option value="briket">Nimadir</option>
          </select>
        </div>
        <div className="desc__input__div input__box">
          <input
            required
            name=""
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <span>Izoh Qoldirish</span>
        </div>
        <button type="submit" className="contact__submit__btn">
          Yuborish
        </button>
      </form>
      <div className="contact__location__box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46095.373419501426!2d69.12759494863278!3d41.285514199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e1!3m2!1suz!2s!4v1715793775352!5m2!1suz!2s"
          width="100%"
          height="95%"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
