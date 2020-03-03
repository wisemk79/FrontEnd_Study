export default class Database {
    constructor(){
        const openDatabase = window.openDatabase
        if(!openDatabase){
            throw new Error("Database is not supported")
        }
        this.database = openDatabase("mango-board", "1.0", "mango-board", 100 * 1024 * 1024)

        this.execute = this.execute.bind(this)
    }

    // execute SQL query
    // query: SQL query
    // callback: result callback (result, error).
    execute(query, callback) {
        this.database.transaction(
            (txn) => txn.executeSql(
                query, null,
                (_, result) => {
                    try {
                        const rows = []
                        let index = 0
                        for (index = 0; index < result.rows.length; ++index) {
                            rows.push(result.rows.item(index))
                        }
                        callback && callback(rows, null)
                    } catch (e) {
                        callback && callback(null, e)
                    }
                },
                (_, error) => { callback && callback(null, error) }
            )
        )
    }
}
