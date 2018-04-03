function ajax() {
}

const obj = {
    async fetchData(url) {
        let resp = await ajax.get('http://www.baidu.com');
        console.log(resp.data)
    }
}
