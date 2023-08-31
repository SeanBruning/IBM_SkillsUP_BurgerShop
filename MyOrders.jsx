import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
	const arr = [1, 2, 3, 4];

	return (
		<section className="tableClass">
			<main>
				<table>
					<thead>
						<tr>
							<th>Order Id</th>
							<th>Status</th>
							<th>Item Qty</th>
							<th>Amount</th>
							<th>Payment Method</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{arr.map((order) => (
							<tr key={order}>
								<td>ORD{order}</td>
								<td>Completed</td>
								<td>3</td>
								<td>₹1500</td>
								<td>Card</td>
								<td>
									<Link to={`/order/${order}`}>
										<AiOutlineEye />
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</section>
	);
};

export default MyOrders;
