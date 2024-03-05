import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://uplbcosswebdesigncompetition.github.io/lspu-ccs-san-pablo-2.github.io/',
  plugins: [react()],
})
