import sqlite3

def create_transactions_table(database_path):
    # Connect to SQLite database (creates it if it doesn't exist)
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    
    # Create the transactions table
    cursor.execute('''CREATE TABLE IF NOT EXISTS transactions (
                        id INTEGER PRIMARY KEY,
                        Date TEXT,
                        Description TEXT,
                        TransactionCategory TEXT,
                        TransactionType TEXT,
                        Amount REAL,
                        Date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )''')
    
    # Commit changes and close connection
    conn.commit()
    conn.close()

# Example usage
database_path = 'transactions.db'  # Path to your SQLite database
create_transactions_table(database_path)
