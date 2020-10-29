module.exports = {
    user : process.env.NODE_ORECLEDB_USER || "hr",
    password : process.env.NODE_ORECLEDB_PASSWORD || "hr",
    connectString : process.env.NODE_ORECLEDB_CONNECTSTRING || "127.0.0.1/xe",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false    
};

