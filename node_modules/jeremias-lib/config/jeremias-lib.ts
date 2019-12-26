(function(){

	class boxImage{

		public box : any = 'null';
		public images : any = 'null';

		constructor(box_ : any = null, images_ : any = null){

			if((box_ !== null)  &&  (images_ !== null)){
				
				this.box = box_;
				this.images = images_;

			}
	 

		}


		setPlaceTo(destiny:any, element:any){

			if( (destiny !== null && destiny !== undefined) ){

				destiny.appendChild(element);

			}

		
		}



		modalSetAttribute(modal:any){

			modal.setAttribute("class", "modal");
			modal.setAttribute("id", "modal");

		}



		imageSetAttribute(imageFromModal:any, route:any){

			imageFromModal.setAttribute("class", "imageFromModal");
			imageFromModal.setAttribute("id", "imageFromModal");
			imageFromModal.setAttribute("src", "route");

		}



		createModal(){
			let htmlElementModal = document.createElement("section")

				// attribute modal
				this.modalSetAttribute(htmlElementModal);

				// place to modal
				this.setPlaceTo(document.body, htmlElementModal);
			

		}


		createImage(route:any){

			let modal = document.getElementById("modal"),
				
				htmlImage = document.createElement("img");
				htmlImage.setAttribute("src", route);

				if( (route !== null && route !== undefined) ){

					this.setPlaceTo(modal, htmlImage);
					this.imageSetAttribute(modal, route);
					
				}

		}

	}



	class clientModal extends boxImage{

		deleteModal(){
			let modalExistent = document.getElementById("imageFromModal");
			if(modalExistent){

				modalExistent.addEventListener("click", (e)=>{

					modalExistent.classList.add("animOut");

					setTimeout( ()=>{
						modalExistent.remove();
					}, 500)
					

				}, false);


			}
		}



		clickOnImage(){
			
			for(let i=0; i<this.images.length; i++){

				this.images[i].addEventListener("click", (e:any)=>{
					
					this.createModal();
					this.createImage(this.images[i].src); 
					this.deleteModal();

				}, false);

			}

		}

	}




	class blockEvent extends boxImage{

		lockedEvent(trueEvent : boolean){

			if( (this.box ) && (trueEvent === true) ){

				this.box.addEventListener("contextmenu", (e)=>{
					e.preventDefault();
				}, false);

			}

		}


	}

let containerImages__ = document.getElementById("box--images"),
<<<<<<< HEAD
	imagesFromContainer__ = containerImages__.getElementsByTagName("img"); 
 	console.log(containerImages__)
=======
	imagesFromContainer__ = containerImages__.getElementsByTagName("img");  


>>>>>>> 328b0be7d6f75ef8d8472d8e07b983e5fcb16df0
let executeBox__ = function(containerImages__: any=null, imagesFromContainer__: any = null){

	if( (containerImages__ 		=== 	null) 		|| 
		(imagesFromContainer__ 	=== 	null) 		||
		(containerImages__ 		=== 	undefined) 	|| 
		(imagesFromContainer__ 	=== 	undefined)
		){
		console.log("container not exist");
 				
 
	}
	else{

		
		let modal1 = new clientModal(
			containerImages__ ,
			imagesFromContainer__
		);
		modal1.clickOnImage();
		
		let lockEvent = new blockEvent(
			containerImages__ ,
			imagesFromContainer__
		);

		lockEvent.lockedEvent(true);

	}

} 	

executeBox__(
	containerImages__, 
	imagesFromContainer__
);

 



	 


})();