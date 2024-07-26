import React, { useState } from 'react';
import { IoIosDesktop } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import { AiFillPlusSquare } from "react-icons/ai";

function Sizes() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section>
      <div className="dropdown mx-1" style={{ cursor: 'pointer' }}>
        <button
          className="btn shadow-none"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-haspopup="true"
          aria-controls="dropdownMenu"
        >
          <IoIosDesktop style={{ width: '30px', height: '30px' }} />
        </button>
        <ul className="dropdown-menu" id="dropdownMenu" style={{ width: "240px" }}>
          {['Desktop', 'Tablet', 'Mobiles'].map((item, index) => (
            <li
              key={index}
              className="dropdown-item d-flex justify-content-between align-items-center"
              onClick={() => handleMenuClick(item)}
              style={{
                border: selectedItem === item ? '2px solid #5BBCFF' : 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {item}
              {selectedItem === item && <TiTick style={{ marginLeft: 'auto' }} />}
            </li>
          ))}
        </ul>
      </div>
      <ContentPage selectedItem={selectedItem} />
    </section>
  );
}

const ContentPage = ({ selectedItem }) => {
  return (
    <div className={selectedItem === 'Mobiles' ? 'container-fluid' : 'container'}>
      {selectedItem === 'Desktop' && (
        <div>
          <h5 className='text-center'>Add Title</h5>
          <div className='d-flex justify-content-center'>
            <div><p>Type / to choose a block</p></div>
            <div><AiFillPlusSquare /></div>
          </div>
        </div>
      )}
      {selectedItem === 'Mobiles' && (
        <div>
          <h5 className='text-center'>Add Title</h5>
          <div className='d-flex justify-content-center'>
            <div><p>Type / to choose a block</p></div>
            <div><AiFillPlusSquare /></div>
          </div>
        </div>
      )}
      {selectedItem === 'Tablet' && (
        <div>
          <h5 className='text-center'>Add Title</h5>
          <div className='d-flex justify-content-center'>
            <div><p>Type / to choose a block</p></div>
            <div><AiFillPlusSquare /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sizes;
