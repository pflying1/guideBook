import { CanActivate, ExecutionContext, Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export function MixinAuthGuard<T extends Type<CanActivate>>(guard: Type<CanActivate>): Type<CanActivate> {
  @Injectable()
  class MixinAuthGuardClass implements CanActivate {
    private readonly guardInstance: CanActivate;

    constructor(private readonly reflector: Reflector) {
      this.guardInstance = new guard();
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      return this.guardInstance.canActivate(context);
    }
  }

  return MixinAuthGuardClass;
}