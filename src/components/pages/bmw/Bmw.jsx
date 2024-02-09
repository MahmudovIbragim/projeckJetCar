import scss from "./Bmw.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../modal/Modal.jsx";

const link =
  "https://api.elchocrud.pro/api/v1/68e6c9433b2d43abea4c5f2755aa82bc/cars";

const Bmw = () => {
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

  useEffect(() => {
    const getRequest = async () => {
      try {
        const response = await axios.get(link);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getRequest();
  }, []);

  return (
    <div className={scss.Bmw}>
      <h1>КУПИТЬ BMW</h1>
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
                <li>Объем двигателя 4.4 л</li>
                <li>Мощность 625 л.с.</li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Bmw;
