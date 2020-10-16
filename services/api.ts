export class Api {
    public static host = process.env.NEXT_PUBLIC_API_URL;
    // public authorization: string;
    private ctx: any;

    public hostName = (): string => {
        return Api.host;
    }

    public getInitialToken = async (ctx) => {
        this.ctx = ctx;
    }

    public removeCtx = () => {
        delete this.ctx;
    }

    private get = async (path: string): Promise<Response> => {
        const requestOptions = {
            method: 'GET',
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

    public getImage = async (dbName: string, id: string): Promise<Response> => {
        try {
            const res = await this.get(dbName + `/loadImage?id=${id}`);
            this.checkBadStatus(res);
            return res;
        } catch (err) {
            console.log(err)
        }
    };
}