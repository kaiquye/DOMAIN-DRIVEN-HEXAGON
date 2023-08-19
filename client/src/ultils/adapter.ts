

export abstract class AdapterService<In, Out> {
    constructor() { }

    abstract perform(data: In): Promise<Out>
}