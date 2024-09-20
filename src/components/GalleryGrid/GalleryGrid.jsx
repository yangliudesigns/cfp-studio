import React, { useState, useEffect, useRef } from 'react';
import './GalleryGrid.scss';
import images from "../../data/gallery.json";

export default function GalleryGrid() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const resizeGridItem = (item) => {
      if (!item) return;
      const grid = gridRef.current;
      if (!grid) return;
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const itemContent = item.querySelector('img');
      if (!itemContent) return;
      const rowSpan = Math.ceil((itemContent.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = `span ${rowSpan}`;
    };

    const resizeAllGridItems = () => {
      if (!gridRef.current) return;
      const allItems = gridRef.current.getElementsByClassName("gallery-item");
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
      }
    };

    const handleImageLoad = () => {
      resizeAllGridItems();
    };

    // 为所有图片添加加载事件监听器
    const imageElements = gridRef.current.getElementsByTagName('img');
    for (let img of imageElements) {
      img.addEventListener('load', handleImageLoad);
    }

    resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

    return () => {
      window.removeEventListener("resize", resizeAllGridItems);
      for (let img of imageElements) {
        img.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  const openModal = (id) => {
    const index = images.findIndex(image => image.id === id);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="gallery">
      <div className="gallery-grid" ref={gridRef}>
        {images.map((image) => (
          <div className="gallery-item" key={image.id} onClick={() => openModal(image.id)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="modal-content fade" />
          <button className="prev" onClick={showPrevImage}>&#10094;</button>
          <button className="next" onClick={showNextImage}>&#10095;</button>
        </div>
      )}
    </div>
  )
}
