import { writable } from 'svelte/store';

export const loading = writable(false);

export const loaderRequest = (config) => {
    console.log('inicio solicitud')
    loading.set(true);
    return config;
  };

export const loaderResponse =(config) => {
    console.log('termino solicitud')
    loading.set(false);
    return config;
  }

  export const loaderErrorResponse =(error) => {
    loading.set(false);
    return Promise.reject(error);
  }
