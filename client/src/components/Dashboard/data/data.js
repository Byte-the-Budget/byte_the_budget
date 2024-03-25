export const currentBudget = 5400;
export const currentExpense = 3800;

export const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

const currentDate = new Date();
const currentMonthIndex = currentDate.getMonth();

const startMonthIndex = (currentMonthIndex - 5 + 12) % 12;

export const last6Months = startMonthIndex <= currentMonthIndex 
  ? months.slice(startMonthIndex, currentMonthIndex + 1) 
  : months.slice(startMonthIndex).concat(months.slice(0, currentMonthIndex + 1));

export const last6MonthsBudget = [5000, 5000, 5000, 5400, 5400, 5400];
export const last6MonthsExpense = [4950, 4700, 5100, 5200, 5370, 3820];

export const categories = [
  "Groceries",
  "Dining",
  "Electronics",
  "Transportation",
  "Utilities",
  "Household",
]

export const expensesByCategory = [400, 200, 50, 100, 400, 300]

export const transactions = [{'dateAndTime': '2024-03-16 04:08:13',
  'category': 'Groceries',
  'amount': 79.66,
  'transactionId': 'TX23173'},
 {'dateAndTime': '2024-02-27 04:08:03',
  'category': 'Household',
  'amount': 21.55,
  'transactionId': 'TX55381'},
 {'dateAndTime': '2024-03-22 12:18:54',
  'category': 'Transportation',
  'amount': 45.88,
  'transactionId': 'TX16665'},
 {'dateAndTime': '2024-02-29 22:01:33',
  'category': 'Dining',
  'amount': 83.58,
  'transactionId': 'TX80891'},
 {'dateAndTime': '2024-03-01 17:08:50',
  'category': 'Electronics',
  'amount': 47.16,
  'transactionId': 'TX08632'},
 {'dateAndTime': '2024-02-28 04:12:36',
  'category': 'Electronics',
  'amount': 53.18,
  'transactionId': 'TX50767'},
 {'dateAndTime': '2024-03-20 14:04:00',
  'category': 'Entertainment',
  'amount': 49.01,
  'transactionId': 'TX30327'},
 {'dateAndTime': '2024-03-24 19:58:18',
  'category': 'Utilities',
  'amount': 14.03,
  'transactionId': 'TX30653'},
 {'dateAndTime': '2024-03-15 20:00:25',
  'category': 'Household',
  'amount': 64.84,
  'transactionId': 'TX39426'},
 {'dateAndTime': '2024-03-12 21:50:39',
  'category': 'Household',
  'amount': 19.39,
  'transactionId': 'TX12686'},
 {'dateAndTime': '2024-03-16 16:14:44',
  'category': 'Electronics',
  'amount': 65.0,
  'transactionId': 'TX24738'},
 {'dateAndTime': '2024-03-19 12:30:43',
  'category': 'Utilities',
  'amount': 59.31,
  'transactionId': 'TX32486'},
 {'dateAndTime': '2024-02-27 07:40:58',
  'category': 'Household',
  'amount': 45.27,
  'transactionId': 'TX11262'},
 {'dateAndTime': '2024-03-19 14:22:04',
  'category': 'Utilities',
  'amount': 67.06,
  'transactionId': 'TX64155'},
 {'dateAndTime': '2024-02-26 21:49:16',
  'category': 'Utilities',
  'amount': 80.04,
  'transactionId': 'TX32062'},
 {'dateAndTime': '2024-03-01 07:28:39',
  'category': 'Dining',
  'amount': 42.22,
  'transactionId': 'TX63811'},
 {'dateAndTime': '2024-03-20 10:42:54',
  'category': 'Entertainment',
  'amount': 80.1,
  'transactionId': 'TX57260'},
 {'dateAndTime': '2024-03-11 02:58:31',
  'category': 'Entertainment',
  'amount': 38.61,
  'transactionId': 'TX18592'},
 {'dateAndTime': '2024-03-16 20:45:01',
  'category': 'Electronics',
  'amount': 64.74,
  'transactionId': 'TX27168'},
 {'dateAndTime': '2024-03-12 14:50:26',
  'category': 'Transportation',
  'amount': 74.43,
  'transactionId': 'TX75027'}
];
