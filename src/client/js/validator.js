function urlChecker(url) {
    
    const r = RegExp('https:\/\/');

    let res = r.test(url);

    if (!url.trim()) {
        console.log('empty string');
        return false
     }
    else if (res == false){
        console.log('not valid protocol')
        return false
    }

    else{
        return true
    }

}

export { urlChecker }
