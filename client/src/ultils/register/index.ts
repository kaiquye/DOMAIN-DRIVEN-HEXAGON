import { AdapterService } from "../adapter";

class Register {
    private _instances;

    constructor() {
        this._instances = {};
    }

    register(name, instance): void {
        this._instances[name] = instance;
    }

    getInstance<T>(name): T {
        return this._instances[name]
    }
}

export default new Register()