# Library Management System

ระบบจัดการห้องสมุดที่ช่วยในการจัดการข้อมูลหนังสือ ผู้แต่ง สมาชิก และประวัติการยืมหนังสือ

## การติดตั้ง

1. ติดตั้ง Node.js เวอร์ชัน 14 หรือใหม่กว่า
2. ติดตั้ง dependencies:
```bash
npm install
```

## การใช้งาน

1. รันแอปพลิเคชันในโหมดพัฒนา:
```bash
npm run dev
```

2. หรือรันแอปพลิเคชันในโหมดผลิต:
```bash
npm run build
npm start
```

3. เปิดเบราว์เซอร์และไปที่ `http://localhost:3000`

## API Endpoints

### หนังสือ (Books)
- GET `/api/books` - ดูรายการหนังสือทั้งหมด
- POST `/api/books` - เพิ่มหนังสือใหม่
  ```json
  {
    "isbn": "978-0-13-149505-0",
    "title": "ชื่อหนังสือ",
    "category": "หมวดหนังสือ",
    "author": {
      "id": 1
    }
  }
  ```

### ผู้แต่ง (Authors)
- GET `/api/authors` - ดูรายการผู้แต่งทั้งหมด
- POST `/api/authors` - เพิ่มผู้แต่งใหม่
  ```json
  {
    "firstName": "ชื่อ",
    "lastName": "นามสกุล",
    "affiliation": "ต้นสังกัด"
  }
  ```

### สมาชิก (Members)
- GET `/api/members` - ดูรายการสมาชิกทั้งหมด
- POST `/api/members` - เพิ่มสมาชิกใหม่
  ```json
  {
    "memberId": "M001",
    "firstName": "ชื่อ",
    "lastName": "นามสกุล",
    "phoneNumber": "0812345678"
  }
  ```

### การยืม (Borrowings)
- POST `/api/borrowings` - สร้างรายการยืมใหม่
  ```json
  {
    "member": {
      "id": 1
    },
    "book": {
      "id": 1
    },
    "dueDate": "2024-03-20"
  }
  ```
- PUT `/api/borrowings/:id/return` - บันทึกการคืนหนังสือ
  ```json
  {
    "returnDate": "2024-03-15"
  }
  ```

## โครงสร้างฐานข้อมูล

- **Book**: เก็บข้อมูลหนังสือ (ISBN, ชื่อ, หมวดหมู่, ผู้แต่ง)
- **Author**: เก็บข้อมูลผู้แต่ง (ชื่อ, นามสกุล, ต้นสังกัด)
- **Member**: เก็บข้อมูลสมาชิก (รหัสสมาชิก, ชื่อ, นามสกุล, เบอร์โทร)
- **Borrowing**: เก็บประวัติการยืม (ผู้ยืม, หนังสือ, กำหนดคืน, วันคืนจริง)

## เทคโนโลยีที่ใช้

- TypeScript
- Node.js
- Express
- TypeORM
- SQLite