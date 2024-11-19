import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Hamburguesas + Pizza',
      descripcion: 'Llevando las 2 te queda a tan solo 20mil pesos, super ricas.',
      precio: 20000,
      imagen: 'Promo1.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Pancho + Coca Cola',
      descripcion: 'Super barato y rico, hermoso para compartir una tarde con tus amigos, pareja o familia.',
      precio: 2800,
      imagen: 'Promo2.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Lomos + Papas Fritas',
      descripcion: 'Super oferta, llevando los 2 te queda a tan solo 12.500 pesos, que esperas para llevarte tu promo.',
      precio: 12500,
      imagen: 'Promo 3.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Ñoquis + Canelones',
      descripcion: 'Riquisimo y excelente combo.',
      precio: 10500,
      imagen: 'Promo4.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Asado + Pack de cerveza',
      descripcion: 'Que esperas para ese combo y sacarle todo el provecho.',
      precio: 20000,
      imagen: 'Promo5.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Empanadas + Gaseosa',
      descripcion: 'Nada mas rico que unas empanadas y una gaseosa.',
      precio: 11000,
      imagen: 'Promo6.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Hamburguepizza + Helado',
      descripcion: 'Delicioso combo despues de una rica hamburguepizza un heladito de postre biene excelente.',
      precio: 18000,
      imagen: 'Promo7.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Milanesas con pure + Ensalada de lechuga y tomate',
      descripcion: 'Que mas rico que acompañar tus milanesa con una riquisima ensalada.',
      precio: 9500,
      imagen: 'Promo8.PNG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
 