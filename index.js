import { NativeModules,  DeviceEventEmitter} from 'react-native';

export default {
    download: (opt,callback) => NativeModules.DownloadFileManager.download(opt,callback),
    onProgress: (callback) => DeviceEventEmitter.addListener('DownloadStatus', callback),
    installAPK: (filePath) => NativeModules.DownloadFileManager.installAPK(filePath),
    openFile: (filePath) => NativeModules.DownloadFileManager.openFile(filePath),
    STATUS_PAUSED: NativeModules.DownloadFileManager.STATUS_PAUSED,
    STATUS_PENDING: NativeModules.DownloadFileManager.STATUS_PENDING,
    STATUS_RUNNING: NativeModules.DownloadFileManager.STATUS_RUNNING,
    STATUS_SUCCESSFUL: NativeModules.DownloadFileManager.STATUS_SUCCESSFUL,
    STATUS_FAILED: NativeModules.DownloadFileManager.STATUS_FAILED,
    STATUS_BUSY: NativeModules.DownloadFileManager.STATUS_BUSY,
};