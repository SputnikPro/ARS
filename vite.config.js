import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
  base: 'ARS', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				stock: resolve(__dirname, "src/html/stock.html"),
				orderCalculation: resolve(__dirname, "src/html/orderCalculation.html"),
				orderParameters: resolve(__dirname, "src/html/orderParameters.html"),
				promoAz: resolve(__dirname, "src/html/promoAz.html"),
				settingsAz: resolve(__dirname, "src/html/settingsAz.html"),
			}
		}
	}
});