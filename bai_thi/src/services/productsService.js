import axios from "axios";
import { BASE_URL } from "./api";
export async function getAllProducts() {
	try {
		const response = await axios.get(`${BASE_URL}/products`);
		return response.data;
	} catch (error) {}
}
export async function addNewProducts(products) {
	try {
		const response = await axios.post(`${BASE_URL}/products`, products);
		return response.data;
	} catch (error) {}
}