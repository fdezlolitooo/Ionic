import { TestBed } from '@angular/core/testing';

import { PublicacionesService } from './publicaciones.service'; // Importa el servicio que se va a probar

describe('PublicacionesService', () => { // Describe el conjunto de pruebas para el servicio
  let service: PublicacionesService; // Declara una variable para el servicio

  beforeEach(() => { // Antes de cada prueba
    TestBed.configureTestingModule({}); // Configura el módulo de prueba
    service = TestBed.inject(PublicacionesService); // Inyecta el servicio
  });

  it('should be created', () => { // Prueba: Debería ser creado
    expect(service).toBeTruthy(); // Comprueba si el servicio se ha creado exitosamente
  });
});
