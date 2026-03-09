# Nhật ký phát triển dự án (Timeline)

Đây là các bước chi tiết đã thực hiện để xây dựng dự án từ đầu đến cuối:

### 1. Khởi tạo và cấu hình cơ bản
*   **Khởi tạo dự án:**
    ```bash
    npm init
    ```
    Tạo file `package.json` để quản lý thông tin và dependencies của dự án.
*   **Cài đặt Express.js:**
    ```bash
    npm install express
    ```
    Cài đặt framework chính để xây dựng server.

### 2. Thiết lập TypeScript và Công cụ phát triển
*   **Cài đặt các thư viện cần thiết:**
    ```bash
    npm i --save-exact --save-dev typescript@5.7.3 @types/express@5.0.0 @types/node@22.10.7 ts-node@10.9.2 nodemon@3.1.9
    ```
*   **Khởi tạo cấu hình TypeScript:**
    ```bash
    npx tsc --init
    ```
    Tạo file `tsconfig.json` để quy định cách biên dịch mã TypeScript.

### 3. Cấu hình Biến môi trường (Environment Variables)
*   **Cài đặt dotenv:**
    ```bash
    npm install dotenv
    ```
*   **Quản lý file cấu hình:**
    *   Tạo file `.env` để lưu thông tin nhạy cảm (như `PORT=1505`).
    *   Tạo file `.env.example` để làm mẫu cho người khác.
    *   Thêm `.env` vào `.gitignore` để tránh đẩy thông tin bảo mật lên GitHub.

### 4. Thiết lập View Engine (EJS)
*   **Cài đặt EJS:**
    ```bash
    npm install ejs
    npm install --save-dev @types/ejs
    ```
    Sử dụng EJS làm template engine để hiển thị giao diện HTML động.

### 5. Cấu trúc thư mục và Mã nguồn (`src`)
*   **Tạo thư mục `src`:** Chứa toàn bộ mã nguồn để quản lý dễ dàng hơn.
*   **Tạo `src/app.ts`:** File chính của ứng dụng, cấu hình Express, dotenv và View Engine.
*   **Tạo `src/views/home.ejs`:** Giao diện trang chủ của ứng dụng.

### 6. Cấu hình Tự động hóa (Automation)
*   **Cập nhật `package.json`:**
    Thay vì chạy lệnh thủ công, chúng ta cấu hình `nodemonConfig` trong `package.json` để:
    *   Theo dõi sự thay đổi trong thư mục `src`.
    *   Tự động biên dịch và chạy lại bằng `ts-node`.
*   **Các lệnh chạy dự án:**
    *   `npm run dev`: Chạy ở chế độ phát triển (tự động reload).
    *   `npm start`: Chạy ứng dụng (đã được cấu hình alias cho nodemon).

### 7. Trạng thái hiện tại
Dự án đã có thể chạy hoàn chỉnh với TypeScript, hỗ trợ gỡ lỗi tốt, giao diện hiển thị qua EJS và tự động khởi động lại mỗi khi bạn thay đổi code. Để bắt đầu phát triển tiếp, bạn chỉ cần chạy:
```bash
npm run dev
```