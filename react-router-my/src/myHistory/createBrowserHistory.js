import Listeners from './ListenerManage'
export default function createBrowserHistory(option = {}) {
    const {
        basename = "",
        forceRefresh = false,
        keyLength = 6,
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = option;
    const listeners = new Listeners()
    const history = {
        action:"",
        location: createLocation(basename),
        createHref: "",
        push:(path,state)=>{changePath(path,state,true)},
        replace:(path,state)=>{changePath(path,state,false)},
        go: (step) => { window.history.go(step) },
        back: () => { window.history.back() },
        forward: () => { window.history.forward() },
        listen: (listener)=>{listeners.addListener(listener)},
        block: "",
    }

    function changePath(path, state, isPush) {
        const params = getPathParams(path, state, basename)
        let action = "PUSH"
        if (!isPush) {
            action = "REPALCE"
            window.history.replaceState({
                key: createKey(keyLength),
                state: params.state
            }, null, params.path);
        } else {
            window.history.pushState({
                key: createKey(keyLength),
                state: params.state
            }, null, params.path);
        }
        history.location = createLocation(basename);
        history.action = action;
        listeners.triggerListener(history.location,action)
        if (forceRefresh) {
            window.location.href = params.path;
        }
    }

    (function (){
        window.addEventListener("popstate",()=>{
            const location = createLocation(basename);
            const action = "POP";
            listeners.triggerListener(location,action)
        })
    })()

    return history;
}

function createKey(len) {
    return Math.random().toString(36).substr(2, len);
}

function getPathParams(path, state, basename) {
    if (typeof path === "string") {
        return {
            path,
            state,
        }
    } else if (typeof path === "object") {
        let pathREasult = basename + path.pathname;
        let { search = "", hash = "" } = path;
        if (search && search.charAt(0) !== "?") {
            search = "?" + search;
        }
        if (hash && hash.charAt(0) !== "#") {
            hash = "#" + hash;
        }
        pathREasult += search;
        pathREasult += hash;
        return {
            path: pathREasult,
            state: path.state
        }
    }
}

function createLocation(basename) {
    let pathname = window.location.pathname;
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    const location = {
        hash: window.location.hash,
        search: window.location.search,
        pathname
    }
    let state, historyState = window.history.state;
    if (historyState === null) {
        state = null;
    } else if (typeof historyState !== "object") {
        state = historyState;
    } else {
        if ("key" in historyState) {
            location.key = historyState.key;
            state = historyState.state;
        } else {
            state = historyState;
        }
    }
    location.state = state;
    return location;
}

window.myH = createBrowserHistory()