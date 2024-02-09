import axios from "axios";
import scss from "./Mercedes.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../modal/Modal";

const link =
  "https://api.elchocrud.pro/api/v1/f737adc04e5242bd89508965e30045ba/cars_benz";
const Mercedes = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const getRequest = async () => {
    const response = await axios.get(link);
    const responseData = await response.data;
    setData(responseData);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className={scss.Mercedes}>
      <h1>КУПИТЬ MERCEDES-BENZ</h1>
      <div className="container">
        <div className={scss.Content}>
          {data.map((item) => (
            <div
              className={scss.box}
              key={item.id}
              onClick={() => openModal(item)}
            >
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedItem && (
          <div onClick={closeModal} className={scss.modalCard}>
            <div className={scss.modal_box}>
              <img src={selectedItem.img} alt="" />
            </div>
            <div className={scss.car_info}>
              <h3>{selectedItem.name}</h3>
              <p>{selectedItem.price}</p>
              <ul>
                <li>Пробег 37538 км</li>
                <li>Год выпуска 2021</li>
                <li>Тип двигателя Бензин</li>
                <li>Объем двигателя 4.0 л</li>
                <li>Мощность 600 л.с.</li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Mercedes;
