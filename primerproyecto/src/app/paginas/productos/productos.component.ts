import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Hamburguesas',
      descripcion: 'Carne picada aplastada y con forma redondeada, mezclada con distintos ingredientes, que se hace a la plancha, a la parrilla o frita.',
      precio: 12500,
      imagen: 'https://www.carniceriademadrid.es/wp-content/uploads/2022/09/smash-burger-que-es.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Milanesas con pure',
      descripcion: 'Milanesa de carne o de pollo, pure de papas, muy rico todo.',
      precio: 7200,
      imagen: 'https://i.ytimg.com/vi/Go3fGv_23Nc/maxresdefault.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Hamburguepizza',
      descripcion: 'Carne picada aplastada y con forma redondeada, mezclada con distintos ingredientes, paleta, queso.',
      precio: 15000,
      imagen: 'https://saborargento.com.ar/wp-content/uploads/2023/05/Receta-de-Hamburpizza.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Pizza',
      descripcion: 'Pizza caseras riquisimas.',
      precio: 8900,
      imagen: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Papas fritas',
      descripcion: 'Papas fritas muy ricas y crocantes.',
      precio: 5500,
      imagen: '/papas.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Pastel de papa',
      descripcion: 'Porciones de pastel de papa muy ricas, "sabor unico".',
      precio: 3500,
      imagen: 'https://www.cucinare.tv/wp-content/uploads/2018/11/Pastel-de-papas.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Empanadas',
      descripcion: 'Empanadas de carne, y tambien de jamon y queso.',
      precio: 9000,
      imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/artear/OI2NQNBDJJHXDB2S7CCQSCOYQQ.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Lomos',
      descripcion: 'Especial para el bajon.',
      precio: 8200,
      imagen: 'https://static.wixstatic.com/media/1fb7a2_38fc9a2ffafa4b02b9177ab45f059a75~mv2.jpg/v1/fill/w_640,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1fb7a2_38fc9a2ffafa4b02b9177ab45f059a75~mv2.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'Asado',
      descripcion: 'Un buen asado rico, costillares, chorizos, pollo, carne.',
      precio: 15000,
      imagen: 'https://blog.remitly.com/wp-content/uploads/2023/09/uruguay-asado-scaled-1-1024x683.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'Pancho',
      descripcion: 'Super panchos grandotes relleno del adereso que mas te guste.',
      precio: 2300,
      imagen: 'https://www.clarin.com/2023/01/02/Bf-2j_pZD_2000x1500__1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 11,
      nombre: 'Ñoquis',
      descripcion: 'riquisimos ñoquis para pasar los 29 hermosos.',
      precio: 4500,
      imagen: 'https://media.a24.com/p/ca70752aeccb2d4dd8c794ea0669c673/adjuntos/296/imagenes/009/143/0009143647/1200x675/smart/noquis-caseros-polenta-tuco-la-receta-que-se-hace-100-pesos.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 12,
      nombre: 'Canelones',
      descripcion: 'Canelones de verduras y de carne.',
      precio: 6800,
      imagen: 'https://www.infobae.com/new-resizer/_s4TI9OhfQ9FbRSH2F6o8PtquOQ=/arc-anglerfish-arc2-prod-infobae/public/ASU7EU72MNHO7ITQXQCQH6ICXE.jpg', // Asegúrate de que esta ruta sea correcta
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
