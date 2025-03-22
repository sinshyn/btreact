import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/btreact/", // Đổi thành tên repo của bạn
  plugins: [react()],
});
