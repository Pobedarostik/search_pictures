import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./gallery.module.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import FetchPhotos from "../services/pixabay";
// import Loader from "../Loader/Loader";


const newFetchPhotos = new FetchPhotos('https://pixabay.com/api/')

class ImageGallery extends Component {
     state = {
          array: null,
          error: null,
          status: "udle",
          showModal: false,
          targetFoto: null
     }
     

     componentDidUpdate(prevProps, prevState) {
          
          
          if (prevProps.prop !== this.props.prop) {
               this.setState({ status: "painting" })
               
               newFetchPhotos.page = 1;
               newFetchPhotos.searchQuery = this.props.prop;

               setTimeout(() => {
                    newFetchPhotos.fetchPhotos()
                         .then(array => this.setState({ array: array.hits, status: "resolved" }))
                         .catch(error => this.setState({error, status: "rejected"}))
               },2000)
                         
                    
               }
          
               
     }

     toggleModal = () => {
          this.setState(state => ({ showModal: !state.showModal }))
     }

     getTarget = (e) => {
         this.setState({targetFoto: e.target.dataset.source}) 
     }
    
     loadMore = () => {
          newFetchPhotos.page += 1;

          newFetchPhotos.fetchPhotos()
               .then(array => this.setState((prevState) => ({ array: [...prevState.array, ...array.hits] })))
               .catch(error => this.setState({ error, status: "rejected" }));
          
          
          window.scroll({
                top: document.querySelector(".ImageGalleryItem").scrollHeight,
                    
                behavior: 'smooth'

          });
      
                    
               
     }
 

     render() {

          const {error,array, status} = this.state

          if (status === "painting") {
               return <p>Loading...</p>
          }
          if (status === "rejected") {
               return <h1>{error.message}</h1>
          }

          if (status === "resolved") {
               return (
                    <>
                         <ul className={s.ImageGallery}>
                         {array.map(({ id, webformatURL, largeImageURL, tags}) => {
                              return <ImageGalleryItem
                                   key={id}
                                   largeImage={largeImageURL}
                                   preiew={webformatURL}
                                   id={id}
                                   tags={tags}
                                   openModal={this.toggleModal}
                                   getImg={this.getTarget}
                              />

                         })}
                         
                         </ul>
                         <Button loadMore={this.loadMore}/>

                         {this.state.showModal && <Modal change={this.toggleModal} image={this.state.targetFoto}/>}
                    </>
               )
          }
          
     }
    
        
     
}
export default ImageGallery;




