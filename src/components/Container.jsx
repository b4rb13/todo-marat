
import React, { Component } from 'react';
import List from './List';
import Header from './Header';
import NewTodoForm from './NewTodoForm';
import ListItem from './ListItem';
import NewTodoSection from './NewTodoSection';
import dateGenerator from '../actions/dateGenerator';
import SearchInput from './SearchInput';
import NoItems from './NoItems';
import FilterSelect from './FilterSelect';
import setData from '../actions/setData';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = window.localStorage.state ? JSON.parse(window.localStorage.state) : {
            listItems: [],
            searchFiltered: [],
            onSearch: false,
            onHighPriority: false,
            onLowPriority: false,
            onDone: false,
            onAll: false,
            doneItems: [],
            lowPriorityItems: [],
            highPriorityItems: [],
        }
        this.todoTitleRef = React.createRef();
        this.priorityRef = React.createRef();
        this.searchInputRef = React.createRef();
        this.submitButtonRef = React.createRef();
    }

    newTodoSubmitHandler = (event) => {
      event.preventDefault();
      if(!this.todoTitleRef.current.value) {
        return
      }
      new Promise((res) => {
        this.submitButtonRef.current.disabled = true;
        setTimeout(res, 300)
      })
        .then(() => {
          this.submitButtonRef.current.disabled = false;
          this.setState({
  
            ...this.state,
            listItems: [
              ...this.state.listItems,
              {
                id: Date.now(),
                title: this.todoTitleRef.current.value,
                date: Date.now(),
                priorityLevel: this.priorityRef.current.checked ? 'High' : 'Low',
                isDone: false,    
              }
            ],           
        },() => {
            this.setState({
              ...this.state, 
              lowPriorityItems: this.state.listItems.filter(li => li.priorityLevel === 'Low'),
              highPriorityItems: this.state.listItems.filter(li => li.priorityLevel === 'High'),
            })
            this.todoTitleRef.current.value = '';
            this.priorityRef.current.checked = false;  
        })
      })

  }

    onSearchHandler = () => {
       this.setState({
         ...this.state,
         onSearch: true,
         searchFiltered: this.state.listItems.filter(li => {
           return li.title.toLowerCase().startsWith(this.searchInputRef.current.value.toLowerCase())
         })
       })
       
    }

    onDeleteHandler = (id) => {
      this.setState({
        ...this.state,
        listItems: this.state.listItems.filter(li => li.id !== id),
        doneItems: this.state.doneItems.filter(li => li.id !== id),
        highPriorityItems: this.state.highPriorityItems.filter(li => li.id !== id),
        lowPriorityItems: this.state.lowPriorityItems.filter(li => li.id !== id),
        searchFiltered: this.state.searchFiltered.filter(li => li.id !== id)
        
      })
    }

    componentDidUpdate() {
      setData.call(this);
    }

    onDoneChangeHandler = (id) => {
      this.state.listItems.forEach(li => {
        if(li.id === id) {
          li.isDone = !li.isDone
        } 
      })
      this.setState({
        ...this.state,
        doneItems: this.state.listItems.filter(li => li.isDone)
      })
    }
    
    mapOnCondition = (li) => {
        return <ListItem
                  key={li.id}
                  todoTitle={li.title}
                  date={dateGenerator(li.date)}
                  priorityLevel={li.priorityLevel}
                  onDeleteHandler={() => this.onDeleteHandler(li.id)}
                  onDoneChange={() => this.onDoneChangeHandler(li.id)}
                  checked={li.isDone}
               />
       
    }

    render() {
        let listItems = this.state.listItems.map(this.mapOnCondition)

        if(this.state.onSearch) {
           listItems = this.state.searchFiltered.map(this.mapOnCondition)
        } else if(this.state.onDone) {
            listItems = this.state.doneItems.map(this.mapOnCondition)
        } else if(this.state.onHighPriority) {
          listItems = this.state.highPriorityItems.map(this.mapOnCondition) 
        } else if(this.state.onLowPriority) {
            listItems = this.state.lowPriorityItems.map(this.mapOnCondition)
        }
        
        return (
          <div className='container'>
            <Header>
              <SearchInput 
                onChange={this.onSearchHandler}
                searchInputRef={this.searchInputRef}
              />
              <FilterSelect 
                onChange={(event) => {
                   const value = event.target.value; 
                   if(value === 'High Priority') {
                      this.setState({
                        ...this.state,
                        onAll: false,
                        onSearch: false,
                        onHighPriority: true,
                        onDone: false,
                        onLowPriority: false
                      })
                   } else if(value === 'Low Priority') {
                      this.setState({
                        ...this.state,
                        onAll: false,
                        onSearch: false,
                        onHighPriority: false,
                        onDone: false,
                        onLowPriority: true
                      })
                   } else if(value === 'Done') {
                      this.setState({
                        ...this.state,
                        onAll: false,
                        onSearch: false,
                        onHighPriority: false,
                        onDone: true,
                        onLowPriority: false
                    }) 
                   } else if(value === 'All') {
                      this.setState({
                        ...this.state,
                        onAll: true,
                        onSearch: false,
                        onHighPriority: false,
                        onDone: false,
                        onLowPriority: false,
                      })
                   }
                }}
              />
            </Header>
            <NewTodoSection>
              <NewTodoForm 
                onSubmit={this.newTodoSubmitHandler}
                todoTitleRef={this.todoTitleRef}
                priorityRef={this.priorityRef}
                onFocus={() => {
                  this.setState({
                    ...this.state, 
                    onSearch: false,
                    searchFiltered: []
                  }
                )}}
                submitButtonRef={this.submitButtonRef}          
              />
            </NewTodoSection>
            <List>
              {listItems.length ? listItems : <NoItems /> }
            </List>           
          </div>
        );
    }
}

export default Container