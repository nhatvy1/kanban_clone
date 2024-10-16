import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { ActionEnum } from 'src/module/permission/permission.entity';


export function Authorization(subject: string, action: ActionEnum) {
  return applyDecorators(
    SetMetadata('subject', subject),
    SetMetadata('action', action),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
}