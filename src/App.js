import './App.css';
import CardList from './components/card-list/card-list.component';
import { Component } from 'react';
import SearchBox from './components/search/search-list.component';

class App extends Component{
  constructor(){
    super();
    this.state ={
      characters: [],
      searchField: ''
    };
  };

  componentDidMount(){
    fetch('https://api.sampleapis.com/avatar/characters')
    .then((response)=>response.json())
    .then((characters)=> this.setState(()=>{
      return {characters}
    }, ()=>{
        console.log(this.state)
      }
    ))
  }

  onSearchChange = (e)=>{
    const searchField = e.target.value.toLowerCase();
    this.setState({searchField})
  }

  render(){
    const {characters, searchField} = this.state;
    const {onSearchChange} = this;
    console.log(characters.image)

    const FilteredChar = characters.filter((char)=>{
      if (char.name === undefined) {
        return ''
      }else{
        return char.name.toLowerCase().includes(searchField);
      }
    });

    return (
     <div className='App'>
      <SearchBox className={"characters-search-box"} onSearchHandle={onSearchChange}/>
      <CardList characters={FilteredChar} />
     </div> 
    );
  }
}

export default App;
