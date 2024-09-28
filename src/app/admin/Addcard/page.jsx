 "use client"

import { useState } from "react";

export default function AddDevice() {
  const [deviceName, setDeviceName] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [deviceType, setDeviceType] = useState("computer");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [status, setStatus] = useState("active");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      deviceName,
      modelNumber,
      deviceType,
      serialNumber,
      purchaseDate,
      status,
      description,
    };

    try {
      const response = await fetch("/api/add-device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("บันทึกข้อมูลเรียบร้อยแล้ว!");
        setDeviceName("");
        setModelNumber("");
        setSerialNumber("");
        setPurchaseDate("");
        setDescription("");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล:", error);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>เพิ่มข้อมูลอุปกรณ์</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่ออุปกรณ์:</label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>หมายเลขรุ่น:</label>
          <input
            type="text"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>ประเภทอุปกรณ์:</label>
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="computer">คอมพิวเตอร์</option>
            <option value="mobile">มือถือ</option>
            <option value="network">อุปกรณ์เครือข่าย</option>
          </select>
        </div>

        <div>
          <label>หมายเลขซีเรียล:</label>
          <input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>วันที่ซื้อ:</label>
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
        </div>

        <div>
          <label>สถานะอุปกรณ์:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">ใช้งานปกติ</option>
            <option value="repair">อยู่ในซ่อม</option>
            <option value="retired">เสื่อมสภาพ</option>
          </select>
        </div>

        <div>
          <label>คำอธิบายเพิ่มเติม:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">บันทึกข้อมูล</button>

        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </form>
    </div>
  );
}
