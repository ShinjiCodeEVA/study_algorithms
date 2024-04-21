import mysql from 'mysql2/promise'


class Database { 
    private static instance: Database;
    private static pool: mysql.Pool; 

    private constructor() { 
        Database.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        })
    }

    /**
     * GET the database instance
     */
    public static getInstance(): Database { 
        if (!Database.instance) { 
            Database.instance = new Database();
        }

        return Database.instance;
    }

    /**
     * GET the database connection
     */
    public static getConnection(): Promise<mysql.PoolConnection> { 
         if (!Database.pool) 
                Database.getInstance();

        return Database.pool.getConnection();
    }

    /**
     * Query the database
     * @param query 
     * @param values 
     * @returns 
     */

    public async query<T>(query: string, values?: any[]) { 
        const [rows] = await Database.pool.query(query, values);
        return rows as T;
    }
    
} 

export default Database;