import Router from 'next/router';

export class Api {
    public static host = process.env.NEXT_PUBLIC_API_URL;
    public authorization: string;
    private ctx: any;

    public hostName = (): string => {
        return Api.host;
    }

    public getInitialToken = async (ctx) => {
        this.ctx = ctx;
    };

    public removeCtx = () => {
        delete this.ctx;
    }
}