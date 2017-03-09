import { NativeModules,  DeviceEventEmitter} from 'react-native';

export default {
    download: (opt,callback) => NativeModules.DownloadFile.download(opt,callback),
    onProgress: (callback) => DeviceEventEmitter.addListener('DownloadStatus', callback),
    installAPK: (filePath) => NativeModules.DownloadFile.installAPK(filePath)
};