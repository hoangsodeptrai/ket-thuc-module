import React, { useEffect, useState } from "react";
import ProductItems from "./ProductItem";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productsService";

function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setProducts(await getAllProducts());
		};
		fetchData();
	}, []);

	return (
		<div className="container my-3">
			<div className="item-group">
				<Link className="btn btn-secondary rounded-0 w-25" id="add-link" to="/products">
					Add Product
				</Link>

				<div className="input-group ms-5 w-25" id="search">
					<input type="text" className="form-control rounded-0" placeholder="Search product" />
					<button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2">
						Search
					</button>
				</div>
			</div>
			<table className="table table-striped table-success">
				<thead>
					<tr>
						<th className="text-center">STT</th>
						<th className="text-center">Tên Sản Phẩm</th>
						<th className="text-center">Mô Tả</th>
						<th className="text-center">Giá</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((p, i) => (
						<ProductItems key={p.id} i={i} p={p} />
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ProductList;
