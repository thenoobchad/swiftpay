export type Network = "MTN" | "Glo" | "Airtel" | "9mobile";
export type ServiceType = "airtime" | "data";
export type TransactionStatus = "pending" | "success" | "failed";

export interface Transaction {
	id: string;
	user_id: string;
	type: ServiceType;
	amount: number;
	phone_number: string;
	network: Network;
	status: TransactionStatus;
	paystack_ref?: string;
	reloadly_ref?: string;
	created_at: string;
}

export interface Profile {
	id: string;
	role: "user" | "admin";
	full_name?: string;
	phone?: string;
	wallet_balance: number;
}
