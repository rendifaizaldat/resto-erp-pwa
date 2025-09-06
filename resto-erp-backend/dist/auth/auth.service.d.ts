import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: RegisterAuthDto): Promise<{
        id: string;
        email: string;
        full_name: string;
    }>;
    login(loginDto: LoginAuthDto): Promise<{
        access_token: string;
    }>;
}
