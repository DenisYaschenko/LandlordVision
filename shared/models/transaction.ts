export interface Transaction {
  id: number;
  profileId: number;
  userId: number;
  amount: number;
  status: transactionStatusTypes;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  priceForProfile: number;
}

enum transactionStatusTypes {
  allowedForProfile = "allowedForProfile",
  userPaid = "userPaid",
profilerWithdrew = "profileWithdrew",
  userReturned = "userReturned",
}
