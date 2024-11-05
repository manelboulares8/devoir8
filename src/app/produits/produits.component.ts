import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

    produits? : Produit[]; //un tableau de produits
    errorMessage: string = '';

  constructor(private produitService: ProduitService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    //this.produits = this.produitService.listeProduits();
    /*this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });*/
      this.chargerProduits();
      // Fetch the products and handle any errors
   /* this.produitService.listeProduit().pipe(
      catchError(err => {
        this.errorMessage = `Failed to load products: ${err.message}`;
        return of([]);  // Return an empty array in case of an error
      })
    ).subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });*/
  }

  /*supprimerProduit(p: Produit)
    {
     // console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.produitService.supprimerProduit(p);
    } */
      chargerProduits(){
        this.produitService.listeProduit().subscribe(prods => {
        console.log(prods);
        this.produits = prods;
        });
        }
        
      supprimerProduit(p: Produit)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
      console.log("produit supprimé");
      this.chargerProduits();

      });
      } 
}