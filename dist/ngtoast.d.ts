declare module ng {
    export interface IToastOptions {
        animation?: boolean;
        className?: string;
        additionalClasses?: string;
        dismissOnTimeout?: boolean;
        timeout?: number;
        dismissButton?: boolean;
        dismissButtonHtml?: string;
        dismissOnClick?: boolean;
        compileContent?: boolean;
        compileToScope?: IScope;
        horizontalPosition?: string; // right, center, left
        verticalPosition?: string; // top, bottom,
        maxNumber?: number;
    }

    export interface IToastMessage extends IToastOptions {
        content: any;
    }

    export interface IToastProvider {
        settings: IToastOptions;
        messages: Array<IToastMessage>;
        dismiss(id: number): void;
        create(msg: string): number;
        create(msg: IToastMessage): number;
    }
} 
