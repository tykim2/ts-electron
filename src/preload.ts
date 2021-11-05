import {ipcRenderer, contextBridge} from 'electron';

contextBridge.exposeInMainWorld('api', {
    threads: 10
});