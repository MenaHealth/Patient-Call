// clsx.d.ts
declare module 'clsx' {
    type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[];

    function clsx(...inputs: ClassValue[]): string;

    export default clsx;
}