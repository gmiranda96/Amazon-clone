import React, { useState, useEffect } from 'react'
import './Orders.css';
import { db } from './Firebase';
import { useStateValue } from './StateProvider';
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import Order from './Order';

function Orders() {
	const [{ user }] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if(user) {
			const docRef = query(collection(db, "users", user?.uid, "orders"), orderBy('created', 'desc'));

			onSnapshot(docRef, (snapshot) => {
				setOrders(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			})
		} else {
			setOrders([])
		}

	}, [user])

	return (
		<div className='orders'>
			<h1>Your Orders</h1>

			<div className='orders-order'>
				{orders?.map(order => (
					<Order order={order} />
					))}
			</div>
		</div>
	)
}

export default Orders