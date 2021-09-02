import { AuthService } from "./auth.service";
declare const LocalStrategy_base: new (...args: any[]) => import("passport").Strategy & import("passport").StrategyCreatedStatic;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
