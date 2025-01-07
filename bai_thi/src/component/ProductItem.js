import React from "react";
import { Link } from "react-router-dom";

function ProductItems(props) {
	console.log(props.p);
	const { id,title, price, description } = props.p;

	return (
		<tr>
			<td className="text-center">{id}</td>
			<td className="text-center">{title}</td>
			<td className="text-center">{description}</td>
			<td className="text-center">{price}</td>
			<td className="text-center">
				<Link type="button" className="btn btn-secondary rounded-0 me-2">
					Xoá
				</Link>
				<button type="button" className="btn btn-secondary rounded-0">
					Sửa
				</button>
			</td>
		</tr>
	);
}

export default ProductItems;
