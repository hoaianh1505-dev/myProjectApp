# Nhật ký phát triển dự án (Timeline)

1. **Khởi tạo dự án**
   ```bash
   npm init
   ```
   *Lệnh này dùng để tạo file `package.json`, nơi lưu trữ các thông tin cơ bản và danh sách các thư viện mà dự án sẽ sử dụng.*

2. **Cài đặt Express.js**
   ```bash
   npm install express
   ```
   *Express là một web framework phổ biến cho Node.js, giúp chúng ta xây dựng web server một cách dễ dàng.*

3. **Tạo file `index.js`**
   *Đây là file chạy chính của ứng dụng khi bắt đầu phát triển.*

4. **Chạy ứng dụng**
   ```bash
   npm start
   ```

5. **Cài đặt Nodemon**
   ```bash
   npm install nodemon
   ```
   *Nodemon là một công cụ tiện ích giúp tự động khởi động lại server mỗi khi bạn lưu thay đổi trong code, giúp quá trình phát triển nhanh hơn.*

6. **Chạy dự án ở chế độ phát triển (Development mode)**
   ```bash
   npm run dev
   ```

7. **Cài đặt và cấu hình TypeScript**
   ```bash
   npm i --save-exact --save-dev typescript@5.7.3 @types/express@5.0.0 @types/node@22.10.7
   ```
   *Việc cài đặt TypeScript giúp dự án có khả năng kiểm tra lỗi chặt chẽ hơn và hỗ trợ nhắc mã (autocomplete) tốt hơn.*

8. **Tạo file cấu hình TypeScript (`tsconfig.json`)**
   ```bash
   npx tsc --init
   ```

9. **Biên dịch mã nguồn**
   ```bash
   npx tsc
   ```
   *Lệnh này chuyển đổi toàn bộ mã TypeScript (.ts) sang mã JavaScript (.js) để có thể chạy trên môi trường Node.js.*

10. **Chạy trực tiếp file TypeScript**
    ```bash
    npx ts-node app.ts
    ```

11. **Chạy TypeScript với cơ chế tự động khởi động lại**
    ```bash
    npx ts-node-dev --respawn --transpile-only app.ts
    ```
    *`ts-node-dev` kết hợp sức mạnh của `ts-node` (chạy trực tiếp TS) và `nodemon` (tự động load lại), giúp việc phát triển ứng dụng bằng TypeScript trở nên mượt mà nhất.*

12. **Cài đặt và cấu hình TypeScript**
    ```bash
    npm i --save-exact --save-dev typescript@5.7.3 @types/express@5.0.0 @types/node@22.10.7
    ```
    *Việc cài đặt TypeScript giúp dự án có khả năng kiểm tra lỗi chặt chẽ hơn và hỗ trợ nhắc mã (autocomplete) tốt hơn.*
   