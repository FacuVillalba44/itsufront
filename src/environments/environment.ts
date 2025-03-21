// environment.ts
export const environment = {
    production: false,
    // Cada desarrollador debe actualizar esta URL con la de su propio backend
    backendHost: 'https://8080-idx-backenditsu-1740021031173.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev',
    //apiPrefix no debe modificarse a menos que cambie en el backend.
    apiPrefix: '/itsuapi',
    get apiBaseUrl() {
        return `${this.backendHost}${this.apiPrefix}`;
    }
};