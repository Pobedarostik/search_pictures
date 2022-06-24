import s from "./button.module.css"


const Button = ({loadMore}) => {
    return (
    <button type="button" className={s.Button} onClick={loadMore}>Load More</button>
)

}


export default Button;


//  newFetchPhotos.page += 1;

//           newFetchPhotos.fetchPhotos()
//                .then(array => this.setState((prevState) => ({array:[...prevState.array, ...array.hits]})))
//                .catch(error => this.setState({error, status: "rejected"}))


// .then(response => {
//                               if (response.ok) {
//                               return response.json();
//                               }
//                               return Promise.reject(new Error(`Таких картинок нет`))
//                          })
//                          .then(array => this.setState({ array: array.hits, status: "resolved" }))
//                          .catch(error => this.setState({error, status: "rejected"}))