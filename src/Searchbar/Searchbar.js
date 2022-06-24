import { Component } from "react";
import s from "./search.module.css"

class Searchbar extends Component {
    state = {
        name: "",
    }



    handleResult = (e) => {
        this.setState({ name: e.currentTarget.value.toLowerCase() });
    
    }

    handleSubmit = (e) => {
        const {name} = this.state
        e.preventDefault();
        if (name.trim() === "") {
            alert("Enter value")
            return;
        }
        this.props.onSubmit(name);
        this.setState({name: ""})
        
    }



    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        name="input"
                        onChange={this.handleResult}
                        value={this.state.name}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        
                    />
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
                </form>
            </header>
        )
    }
}

export default Searchbar;