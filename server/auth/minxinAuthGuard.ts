import { CanActivate, ExecutionContext, Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export function MixinAuthGuard<T extends Type<any>>(guard: T): Type<CanActivate> {
  @Injectable()
  class MixinAuthGuardClass implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      // Guard의 실제 로직을 여기에 구현합니다
      return new guard().canActivate(context);
    }
  }
  
  return MixinAuthGuardClass;
}