'use client'
// pages/index.js
import { useState } from 'react';
import styles from './page.module.css';

export default function UserInputPage() {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    size: '',
    objects: ''
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Uploaded Image:', image);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Image Upload / Specifications</h1>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Specifications</h2>
          <label className={styles.label}>
            Width:
            <input
              type="text"
              name="width"
              value={formData.width}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g. 50m"
            />
          </label>
          <label className={styles.label}>
            Height:
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g. 175m"
            />
          </label>
          <label className={styles.label}>
            Size:
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g. 95m"
            />
          </label>
          <label className={styles.label}>
            Objects:
            <input
              type="text"
              name="objects"
              value={formData.objects}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g. lamp"
            />xaFGQ5QY723EFGTD5TYD5XE7 X8 C 9B  7
          </label>3
          <button type="submit" className={styles.button}>Submit</button>
        </form>
        <div className={styles.divider}>
            <h1>or</h1>
        </div>
        <div className={styles.uploadSection}>
          <h2>Upload Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.fileInput}
          />
          {image && <p>Uploaded: {image.name}</p>}
        </div>
      </div>
    </div>
  );
}
