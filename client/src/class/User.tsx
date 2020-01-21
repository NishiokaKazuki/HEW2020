class User {
    isLoggedIn = () => this.get('token') ? true : false;

    set = (key: string, value: string) => localStorage.setItem(key, value)
    get = (key: string) => this.getLocalStorage(key)

    getLocalStorage = (key: string) => {
        const ret = localStorage.getItem(key)
        if (ret)
            return ret
        else
            return null
    }
}

export default new User