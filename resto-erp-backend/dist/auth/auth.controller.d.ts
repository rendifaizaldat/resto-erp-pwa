import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterAuthDto): Promise<{
        id: string;
        email: string;
        full_name: string;
    }>;
    login(loginDto: LoginAuthDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
