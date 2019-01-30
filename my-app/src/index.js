import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


function ContactItem(props) {
    return(
        <ul className="contact-item">
            <li>{props.contact.name}</li>
            <li className="cotact-item-message">{props.contact.message}</li>
        </ul>
    );
}

function ContactList(props) {
    return( 
        <div className="contact-list">
            {props.contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
        </div>
    );
}

class EvanApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search:'',
        };
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    render(){
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <h1 className="list-title">Contact List</h1>
                <input 
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                <ContactList contacts = {filteredContacts} />
            </div>
        );
    }
    
}

const contacts = [
    {
        id: 1,
        name: 'Derek',
        message: 'Message 1',
    },
    {
        id: 2,
        name: 'Sharon',
        message: 'Message 2',
    },
    {
        id: 3,
        name: 'Evan',
        message: 'Message 3',
    },
    {
        id: 4,
        name: 'Gaven',
        message: 'Message 4',
    }
];

ReactDOM.render(<EvanApp contacts= {contacts}> </EvanApp>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
