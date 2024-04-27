import { useState } from "react";
import styles from "./Transactions.module.css";

const data = [
	{ id: 1, date: '2021-10-01', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Flight Ticket', amount: 71.32, category: 'travel' },
  { id: 2, date: '2021-10-02', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Hotel Booking', amount: 133.49, category: 'travel' },
  { id: 3, date: '2021-10-03', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Internet Bill', amount: 115.26, category: 'utilities' },
  { id: 4, date: '2021-10-04', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Coffee', amount: 36.93, category: 'eating out' },
  { id: 5, date: '2021-10-05', purchaser: "Chris", payment_method: "debit", budget: "joint", description: 'Lunch', amount: 8.55, category: 'eating out' },
  { id: 6, date: '2021-10-06', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Water Bill', amount: 116.44, category: 'utilities' },
  { id: 7, date: '2021-10-07', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Breakfast', amount: 100.93, category: 'food' },
  { id: 8, date: '2021-10-08', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Hotel Booking', amount: 27.58, category: 'travel' },
  { id: 9, date: '2021-10-09', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Petrol', amount: 54.57, category: 'gas' },
  { id: 10, date: '2021-10-10', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Petrol', amount: 104.66, category: 'gas' },
  { id: 11, date: '2021-10-11', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Brunch', amount: 119.66, category: 'eating out' },
  { id: 12, date: '2021-10-12', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Flight Ticket', amount: 17.70, category: 'travel' },
  { id: 13, date: '2021-10-13', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Hotel Booking', amount: 112.59, category: 'travel' },
  { id: 14, date: '2021-10-14', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Movies', amount: 89.37, category: 'entertainment' },
  { id: 15, date: '2021-10-15', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Coffee', amount: 122.82, category: 'eating out' },
  { id: 16, date: '2021-10-16', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Museum', amount: 112.38, category: 'entertainment' },
  { id: 17, date: '2021-10-17', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Electricity Bill', amount: 23.26, category: 'utilities' },
  { id: 18, date: '2021-10-18', purchaser: "Chris", payment_method: "debit", budget: "joint", description: 'Internet Bill', amount: 71.10, category: 'utilities' },
  { id: 19, date: '2021-10-19', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Water Bill', amount: 99.68, category: 'utilities' },
  { id: 20, date: '2021-10-20', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Movies', amount: 7.45, category: 'entertainment' },
	{ id: 21, date: '2021-10-21', purchaser: "Chris", payment_method: "debit", budget: "joint", description: 'Fuel', amount: 135.00, category: 'gas' },
  { id: 22, date: '2021-10-22', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Concert', amount: 74.25, category: 'entertainment' },
  { id: 23, date: '2021-10-23', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Theme Park', amount: 144.72, category: 'entertainment' },
  { id: 24, date: '2021-10-24', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Museum', amount: 90.19, category: 'entertainment' },
  { id: 25, date: '2021-10-25', purchaser: "Chris", payment_method: "debit", budget: "personal", description: 'Flight Ticket', amount: 102.83, category: 'travel' },
  { id: 26, date: '2021-10-26', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Groceries', amount: 22.34, category: 'food' },
  { id: 27, date: '2021-10-27', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Breakfast', amount: 56.78, category: 'food' },
  { id: 28, date: '2021-10-28', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Snacks', amount: 33.90, category: 'food' },
  { id: 29, date: '2021-10-29', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Coffee', amount: 11.95, category: 'eating out' },
  { id: 30, date: '2021-10-30', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Lunch', amount: 32.50, category: 'eating out' },
  { id: 31, date: '2021-10-31', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Hotel Booking', amount: 88.77, category: 'travel' },
  { id: 32, date: '2021-11-01', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Car Rental', amount: 59.50, category: 'travel' },
  { id: 33, date: '2021-11-02', purchaser: "Chris", payment_method: "debit", budget: "personal", description: 'Petrol', amount: 80.29, category: 'gas' },
  { id: 34, date: '2021-11-03', purchaser: "Chris", payment_method: "cash", budget: "personal", description: 'Water Bill', amount: 29.10, category: 'utilities' },
  { id: 35, date: '2021-11-04', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Electricity Bill', amount: 67.42, category: 'utilities' },
  { id: 36, date: '2021-11-05', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Internet Bill', amount: 95.20, category: 'utilities' },
  { id: 37, date: '2021-11-06', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Museum', amount: 13.59, category: 'entertainment' },
  { id: 38, date: '2021-11-07', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Movies', amount: 47.00, category: 'entertainment' },
  { id: 39, date: '2021-11-08', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Theme Park', amount: 125.95, category: 'entertainment' },
  { id: 40, date: '2021-11-09', purchaser: "Chris", payment_method: "debit", budget: "joint", description: 'Concert', amount: 102.75, category: 'entertainment' },
	{ id: 41, date: '2021-11-10', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Fuel', amount: 45.00, category: 'gas' },
	{ id: 42, date: '2021-11-11', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Flight Ticket', amount: 89.99, category: 'travel' },
	{ id: 43, date: '2021-11-12', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Hotel Booking', amount: 77.50, category: 'travel' },
	{ id: 44, date: '2021-11-13', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Coffee', amount: 9.50, category: 'eating out' },
	{ id: 45, date: '2021-11-14', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Lunch', amount: 22.50, category: 'eating out' },
	{ id: 46, date: '2021-11-15', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Breakfast', amount: 15.00, category: 'food' },
	{ id: 47, date: '2021-11-16', purchaser: "Adrienne", payment_method: "debit", budget: "joint", description: 'Groceries', amount: 45.00, category: 'food' },
	{ id: 48, date: '2021-11-17', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Snacks', amount: 12.50, category: 'food' },
	{ id: 49, date: '2021-11-18', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Coffee', amount: 5.00, category: 'eating out' },
	{ id: 50, date: '2021-11-19', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Lunch', amount: 20.00, category: 'eating out' },
	{ id: 51, date: '2021-11-20', purchaser: "Adrienne", payment_method: "visa", budget: "personal", description: 'Hotel Booking', amount: 100.00, category: 'travel' },
	{ id: 52, date: '2021-11-21', purchaser: "Adrienne", payment_method: "visa", budget: "personal", description: 'Car Rental', amount: 75.00, category: 'travel' },
	{ id: 53, date: '2021-11-22', purchaser: "Adrienne", payment_method: "visa", budget: "personal", description: 'Petrol', amount: 50.00, category: 'gas' },
	{ id: 54, date: '2021-11-23', purchaser: "Adrienne", payment_method: "cash", budget: "personal", description: 'Water Bill', amount: 30.00, category: 'utilities' },
	{ id: 55, date: '2021-11-24', purchaser: "Adrienne", payment_method: "visa", budget: "personal", description: 'Electricity Bill', amount: 70.00, category: 'utilities' },
	{ id: 56, date: '2021-11-25', purchaser: "Adrienne", payment_method: "visa", budget: "personal", description: 'Internet Bill', amount: 100.00, category: 'utilities' },
	{ id: 57, date: '2021-11-26', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Museum', amount: 15.00, category: 'entertainment' },
	{ id: 58, date: '2021-11-27', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Movies', amount: 50.00, category: 'entertainment' },
	{ id: 59, date: '2021-11-28', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Theme Park', amount: 125.00, category: 'entertainment' },
	{ id: 60, date: '2021-11-29', purchaser: "Adrienne", payment_method: "visa", budget: "joint", description: 'Concert', amount: 100.00, category: 'entertainment' },
	{ id: 61, date: '2021-11-30', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Fuel', amount: 40.00, category: 'gas' },
	{ id: 62, date: '2021-12-01', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Flight Ticket', amount: 80.00, category: 'travel' },
	{ id: 63, date: '2021-12-02', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Hotel Booking', amount: 70.00, category: 'travel' },
	{ id: 64, date: '2021-12-03', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Coffee', amount: 10.00, category: 'eating out' },
	{ id: 65, date: '2021-12-04', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Lunch', amount: 25.00, category: 'eating out' },
	{ id: 66, date: '2021-12-05', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Breakfast', amount: 20.00, category: 'food' },
	{ id: 67, date: '2021-12-06', purchaser: "Chris", payment_method: "debit", budget: "joint", description: 'Groceries', amount: 50.00, category: 'food' },
	{ id: 68, date: '2021-12-07', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Snacks', amount: 15.00, category: 'food' },
	{ id: 69, date: '2021-12-08', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Coffee', amount: 7.50, category: 'eating out' },
	{ id: 70, date: '2021-12-09', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Lunch', amount: 30.00, category: 'eating out' },
	{ id: 71, date: '2021-12-10', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Hotel Booking', amount: 150.00, category: 'travel' },
	{ id: 72, date: '2021-12-11', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Car Rental', amount: 100.00, category: 'travel' },
	{ id: 73, date: '2021-12-12', purchaser: "Chris", payment_method: "visa", budget: "personal", description: 'Petrol', amount: 60.00, category: 'gas' },
	{ id: 74, date: '2021-12-13', purchaser: "Chris", payment_method: "cash", budget: "personal", description: 'Water Bill', amount: 40.00, category: 'utilities' },
	{ id: 75, date: '2021-12-14', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Electricity Bill', amount: 80.00, category: 'utilities' },
	{ id: 76, date: '2021-12-15', purchaser: "Chris", payment_method: "debit", budget: "joint", description: 'Internet Bill', amount: 120.00, category: 'utilities' },
	{ id: 77, date: '2021-12-16', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Museum', amount: 20.00, category: 'entertainment' },
	{ id: 78, date: '2021-12-17', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Movies', amount: 60.00, category: 'entertainment' },
	{ id: 79, date: '2021-12-18', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Theme Park', amount: 150.00, category: 'entertainment' },
	{ id: 80, date: '2021-12-19', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Concert', amount: 120.00, category: 'entertainment' },
	{ id: 81, date: '2021-12-20', purchaser: "Chris", payment_method: "cash", budget: "joint", description: 'Fuel', amount: 50.00, category: 'gas' },
	{ id: 82, date: '2021-12-21', purchaser: "Chris", payment_method: "visa", budget: "joint", description: 'Flight Ticket', amount: 100.00, category: 'travel' },	
];

interface Transaction {
  id: number;
  date: string;
	purchaser: string;
	payment_method: string;
  budget: string, 
	description: string;
  amount: number;
  category: string;
}

const Transactions = () => {
  // const [transactions, setTransactions] = useState(data);
	const [transactions] = useState(data);

  return (
    <div id={styles.container}>
      <h1>Transactions</h1>
			<div id={styles.wrapper}>
				<form id={styles.searchForm}>
					<div className={styles.searchInputs}>
						<div>
							<label id={styles.textSearch} htmlFor="search">search by budget:</label>
							<input type="text" id="searchDescription" name="searchDescription" />
						</div>
						<div>
							<label htmlFor="searchDescription">search by date:</label>
							<input type="date" id="searchDate" name="searchDate" />
						</div>
					</div>
					<div className={styles.searchInputs}>
						<div>
							<label htmlFor="searchBudget">budget:</label>
							<select id={styles.dropdown} name="searchBudget">
								<option value="all categories">all budgets</option>
								<option value="travel">personal</option>
								<option value="utilities">joint</option>
							</select>
						</div>
						<div>
							<label htmlFor="searchPurchaser">purchaser:</label>
							<select id={styles.dropdown} name="searchPurchaser">
								<option value="all categories">all purchasers</option>
								<option value="travel">Chris</option>
								<option value="utilities">Adrienne</option>
							</select>
						</div>
						<div>
							<label htmlFor="searchDate">category:</label>
							<select id={styles.dropdown} name="category">
								<option value="all categories">all categories</option>
								<option value="travel">travel</option>
								<option value="utilities">utilities</option>
								<option value="eating out">eating out</option>
								<option value="food">food</option>
								<option value="gas">gas</option>
								<option value="entertainment">entertainment</option>
							</select>
						</div>
					</div>
				</form>
				<table className={styles.modernTable}>
					<thead>
						<tr>
							<th>Date</th>
							<th>Budget</th>
							<th>Description</th>
							<th>Purchaser</th>
							<th>Payment Method</th>
							<th>Amount</th>
							<th>Category</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction: Transaction) => (
							// fix the key attribute
							<tr key={transaction.id} id={`transaction-${transaction.id}`}>
								<td>{transaction.date}</td>
								<td>{transaction.budget}</td>
								<td>{transaction.description}</td>
								<td>{transaction.purchaser}</td>
								<td>{transaction.payment_method}</td>
								<td>${transaction.amount.toFixed(2)}</td>
								<td>{transaction.category}</td>
								<td>tbd</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			
    </div>
  );
};

export default Transactions;