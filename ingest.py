import pandas as pd
import os
import json

def new_source(source_map,sample_statement):
    df_stmt = pd.DataFrame(sample_statement)

    colmap = source_map['colmap']
    for new_name, old_name in colmap.items():
        if old_name in df_stmt.columns:
            df_stmt.rename(columns={old_name: new_name}, inplace=True)
        else:
            print(f"Column '{old_name}' not found in DataFrame.")

    return df_stmt

def read_merge(file_path,config_path):

    processed_dfs = []

# Iterate through files in the folder
    
    with open(config_path, 'r') as file:
        configs = json.load(file)
    for filename in os.listdir(file_path):
        if filename.endswith('.csv'):
            file_path = os.path.join(file_path, filename)
            # Read CSV file into a data frame
            df = pd.read_csv(file_path)
        
        # Process the data frame using the new_source function
            sourcename=filename[-4]
            colmap = configs[sourcename]['colmap']
            processed_df = new_source(df,sourcename)
            processed_df['Source']=sourcename
        
        # Append the processed data frame to the list
            processed_dfs.append(processed_df)

# Concatenate all processed data frames
    final_df = pd.concat(processed_dfs, ignore_index=True)

    return final_df

def add_records_to_sqlite_table(df, table_name, db_path):
    # Connect to SQLite database
    conn = sqlite3.connect(db_path)
    
    # Get existing records from SQLite table
    existing_records = pd.read_sql_query(f"SELECT * FROM {table_name}", conn)
    
    # Identify records to be added
    new_records = df[~df.apply(tuple, axis=1).isin(existing_records.apply(tuple, axis=1))]
    
    # Add new records to SQLite table
    if not new_records.empty:
        new_records.to_sql(table_name, conn, if_exists='append', index=False)
    
    # Commit changes and close connection
    conn.commit()
    conn.close()
    
def add_transactions(filepath,configpath,dbpath):

    df_new = read_merge(filepath,configpath) 
    add_records_to_sqlite_table(df_new,'transactions',dbpath)

if __name__ == "__main__":

    filepath = 'data/raw_transactions'
    configpath = 'data/accounts.json'
    dbpath = 'transactions.db'

    add_transactions(filepath,configpath,dbpath)


    

