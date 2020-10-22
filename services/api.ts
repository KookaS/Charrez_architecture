import {DocumentContext} from "next/document";
import {CollectionSchema, DocumentSchema, AllCollectionSchema, AccountSchema, SessionSchema} from "@apiTypes/apiSchema";

export class Api {
    public static host = process.env.NEXT_PUBLIC_API_URL;
    private context: DocumentContext;
    public authorization: string;

    constructor(auth?: string) {
        if (auth) {
            this.authorization = auth;
        } else {
            this.authorization = undefined;
        }
    }

    public hostName = (): string => {
        return Api.host;
    }

    public getInitialToken = async (context) => {
        this.context = context;
    }

    public removeCtx = () => {
        delete this.context;
    }

    public login = async (account: AccountSchema) => {
        try {
            const res = await this.post("account/auth", JSON.stringify(account));
            await this.checkBadStatus(res);
            const key: SessionSchema = await res.json();
            this.setAuth(key._id);
        } catch (err) {
        }
    };

    public setAuth = (value: string) => {
        this.authorization = value;
    };

    private get = async (path: string): Promise<Response> => {
        const requestOptions = {
            method: 'GET'
        };

        return await fetch(`${Api.host}/${path}`, requestOptions);
    };

    private post = async (path: string, body: string): Promise<Response> => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.authorization
            },
            body
        };

        return await fetch(`${Api.host}/${path}`, requestOptions);
    };

    private delete = async (path: string, body: string): Promise<Response> => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.authorization
            },
            body
        };

        return await fetch(`${Api.host}/${path}`, requestOptions);
    };

    private checkBadStatus = (res) => {
        if (res.status >= 300) {
            const messages = ["Bad Request", "Server Error"];
            const index = res.status >= 500;

            throw new Error(`${messages[Number(index)]}: ${res.status}`);
        }
    }

    public getMetadata = async (dbName: string, id: string): Promise<CollectionSchema> => {
        try {
            const res = await this.get(dbName + `/loadMetadata?id=${id}`);
            this.checkBadStatus(res);
            return await res.json();
        } catch (err) {
            console.log(err)
        }
    };

    public getAllCollections = async (dbName: string): Promise<AllCollectionSchema> => {
        try {
            const res = await this.get(dbName + "/loadAllCollections");
            this.checkBadStatus(res);
            return await res.json();
        } catch (err) {
            console.log(err)
        }
    };

    public getAllDocuments = async (dbName: string, collection: string): Promise<DocumentSchema> => {
        try {
            const res = await this.get(dbName + `/loadDocuments?id=${collection}`);
            this.checkBadStatus(res);
            return await res.json();
        } catch (err) {
            console.log(err)
        }
    };

    public deleteDocument = async (dbName: string, collection: string, docID: string): Promise<DocumentSchema> => {
        try {
            const res = await this.delete(dbName + `/deleteDocument?collection=${collection}&id=${docID}`, "");
            this.checkBadStatus(res);
            return await res.json();
        } catch (err) {
            console.log(err)
        }
    };
}