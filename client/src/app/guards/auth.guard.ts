import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';

export const profileGuard: CanActivateFn = (route,state)=>{
  const router = inject(Router);
  const localStorageService = inject (LocalStorageService)
    if(localStorage.getItem('token'))
    {
      return true;
    }
    return false;
};




