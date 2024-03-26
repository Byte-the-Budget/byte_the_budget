import psycopg2
# Definingg database connection parameters
db_parms ={
    "host" "",
    "database": "",
    "user": "",
    "password": "",
    "port": "",
}

try:
    # Establishing a connection to the database
    connection = psycopg2.connect(**db_params)
    # creating a cursor object to interact with the database
    cursor = connection.cursor()
    # performing databse operations here...
except (Exception, psycopg2.Error) as error:
        print(f"Error connection to the database: {error}")

finally:
      if connection:
            cursor.close()
            connection.close()
            print("Database connection closed")
            