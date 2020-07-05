import { config } from 'vue/types/umd';


export interface ConfigData {
    api_base_url?: string
};



export default class ConfigSrv {
    private static cfg?: ConfigData
    public static async Config(): Promise<ConfigData> {
        if (ConfigSrv.cfg) {
            return ConfigSrv.cfg
        }
        ConfigSrv.cfg = await ConfigSrv.loadConfig();
        return ConfigSrv.cfg;
    }
    private static async loadConfig(): Promise<ConfigData> {
        const url = `/config.json`;
        const resp = await fetch(url);

        if (resp.status === 200) {
            const ret = await resp.json();
            return ret
        }
        if (resp.status == 404) {
            const default_base_url = `${document.location.protocol}://${document.location.hostname}:${document.location.port}/api`;
            const cfg = { api_base_url: default_base_url };
            return cfg;
        }
        throw new Error(`Invalid status code getting config file: ${resp.statusText}`);
    }
}
