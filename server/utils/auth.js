const login = (input) => {
    const adminKey = process.env.REACT_APP_ADMIN;
    
    // If admin match, set item to local storage
    if (input === adminKey) {
        localStorage.setItem(process.env.REACT_APP_KEY1, process.env.REACT_APP_KEY2);
        return true;
    } 

    return false;
};

const verify = () => {
    const check = localStorage.getItem(process.env.REACT_APP_KEY1); // Get item from local storage
    if (check === process.env.REACT_APP_KEY2) return true;          // Compare item to key
    return false;   // In any instance where the key is not found / key is invalid, return false
}

module.exports = { login, verify };
