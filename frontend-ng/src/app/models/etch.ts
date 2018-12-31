export abstract class AbstractEtch {
    abstract schemaVersion: string;
}

export class EtchV1 extends AbstractEtch {
    schemaVersion: string = '1.0.0';

    /** actual, decrypted content of etch */
    content: string;

    /** timestamp the etch was created on the user's computer */
    timestamp: number;

    /** TODO: Enable markdown support */
    usesMarkdown: boolean = false;

    constructor(content: string, timestamp: number, usesMarkdown: boolean = false) {
        super();
        this.content = content;
        this.timestamp = timestamp;
        this.usesMarkdown = usesMarkdown;
    }
}
